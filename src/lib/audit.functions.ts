import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type AuditCheck = { label: string; ok: boolean; detail: string };
export type AuditResult = {
  url: string;
  score: number;
  scores: { label: string; value: number | null }[];
  checks: AuditCheck[];
  working: string[];
  costing: string[];
  fixFirst: string[];
  summary: string;
  source: "pagespeed" | "basic";
};
export type AuditResponse = { ok: true; result: AuditResult } | { ok: false; error: string };

const inputSchema = z.object({ url: z.string().trim().min(3).max(300) });

function isPrivateHost(host: string) {
  const h = host.toLowerCase().replace(/^\[|\]$/g, "");
  if (h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || h.endsWith(".internal")) return true;
  if (!h.includes(".") && !h.includes(":")) return true;
  if (h.includes(":")) return h === "::1" || h.startsWith("fc") || h.startsWith("fd") || h.startsWith("fe80") || h.startsWith("::ffff:");
  const m = h.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (!m) return false;
  const [a, b] = [Number(m[1]), Number(m[2])];
  return a === 0 || a === 10 || a === 127 || a >= 224 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127);
}

export function normalizeUrl(raw: string): URL | null {
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (!["http:", "https:"].includes(u.protocol) || u.username || u.password || (u.port && !["80", "443"].includes(u.port))) return null;
    if (isPrivateHost(u.hostname)) return null;
    u.hash = "";
    return u;
  } catch {
    return null;
  }
}

async function safeFetch(start: URL) {
  let current = start;
  const t0 = Date.now();
  for (let i = 0; i < 4; i++) {
    const res = await fetch(current.toString(), { redirect: "manual", signal: AbortSignal.timeout(10000), headers: { "user-agent": "AymoDigitalAudit/1.0", accept: "text/html" } });
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      const next = normalizeUrl(new URL(res.headers.get("location")!, current).toString());
      if (!next) throw new Error("unsafe-redirect");
      current = next;
      continue;
    }
    const reader = res.body?.getReader();
    let html = "";
    let size = 0;
    if (reader) {
      const dec = new TextDecoder();
      while (size < 1_500_000) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.length;
        html += dec.decode(value, { stream: true });
      }
      await reader.cancel().catch(() => {});
    }
    return { res, html, finalUrl: current, ms: Date.now() - t0, size };
  }
  throw new Error("too-many-redirects");
}

async function pageSpeed(url: string) {
  try {
    const q = new URLSearchParams({ url, strategy: "mobile" });
    for (const c of ["performance", "seo", "accessibility", "best-practices"]) q.append("category", c);
    const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${q}`, { signal: AbortSignal.timeout(45000) });
    if (!res.ok) return null;
    const j = (await res.json()) as { lighthouseResult?: { categories?: Record<string, { score: number | null }>; audits?: Record<string, { displayValue?: string }> } };
    const c = j.lighthouseResult?.categories;
    if (!c) return null;
    const pct = (k: string) => (c[k]?.score == null ? null : Math.round((c[k]!.score as number) * 100));
    const a = j.lighthouseResult?.audits ?? {};
    return {
      performance: pct("performance"), seo: pct("seo"), accessibility: pct("accessibility"), bestPractices: pct("best-practices"),
      lcp: a["largest-contentful-paint"]?.displayValue, cls: a["cumulative-layout-shift"]?.displayValue,
    };
  } catch {
    return null;
  }
}

function basicChecks(html: string, finalUrl: URL, ms: number, size: number): AuditCheck[] {
  const get = (re: RegExp) => html.match(re)?.[1]?.trim() ?? "";
  const title = get(/<title[^>]*>([^<]*)<\/title>/i);
  const desc = get(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i) || get(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const imgs = html.match(/<img\b[^>]*>/gi) ?? [];
  const noAlt = imgs.filter((t) => !/\balt=/i.test(t)).length;
  const h1 = (html.match(/<h1\b/gi) ?? []).length;
  return [
    { label: "Secure connection (HTTPS)", ok: finalUrl.protocol === "https:", detail: finalUrl.protocol === "https:" ? "Visitors see a secure padlock." : "Browsers warn visitors that your site is not secure." },
    { label: "Page title", ok: title.length >= 10 && title.length <= 65, detail: title ? `“${title.slice(0, 70)}” (${title.length} characters)` : "No title found — Google has nothing to show." },
    { label: "Google description", ok: desc.length >= 50 && desc.length <= 170, detail: desc ? `${desc.length} characters` : "Missing — Google will guess what to show." },
    { label: "Main heading (H1)", ok: h1 === 1, detail: h1 === 0 ? "No main heading found." : h1 === 1 ? "One clear main heading." : `${h1} main headings — this confuses search engines.` },
    { label: "Mobile friendly setup", ok: /<meta[^>]+name=["']viewport["']/i.test(html), detail: /name=["']viewport["']/i.test(html) ? "Set up for phone screens." : "May look tiny on phones." },
    { label: "Social share preview", ok: /property=["']og:title["']/i.test(html), detail: /og:title/i.test(html) ? "Links look good on WhatsApp & Facebook." : "Shared links show no proper preview." },
    { label: "Image descriptions", ok: noAlt === 0, detail: imgs.length ? `${imgs.length - noAlt} of ${imgs.length} images described.` : "No images found on the page." },
    { label: "Server response speed", ok: ms < 1500, detail: `First response in ${(ms / 1000).toFixed(1)}s.` },
    { label: "Page weight", ok: size < 600_000, detail: `${Math.round(size / 1024)} KB of HTML.` },
  ];
}

async function aiReport(url: string, checks: AuditCheck[], scores: AuditResult["scores"]) {
  try {
    const { generateResponse } = await import("@lovable.dev/ai-gateway");
    const evidence = JSON.stringify({ url, scores, checks });
    const res = await generateResponse({
      model: "openai/gpt-6-astra",
      instructions: "You are a website auditor for small business owners. Use ONLY the measured evidence given. Never invent traffic, ranking, revenue or competitor data. Use simple, non-technical English.",
      input: [{ role: "user", content: `Evidence: ${evidence}\n\nReturn JSON with keys: summary (2 sentences), working (max 3 short strings), costing (max 3 short strings explaining how issues lose customers), fixFirst (max 3 short action steps, most important first).` }],
      text: { format: { type: "json_object" } },
    } as Parameters<typeof generateResponse>[0]);
    const r = res as unknown as { output_text?: string; output?: { content?: { type: string; text?: string }[] }[] };
    const text = r.output_text ?? r.output?.flatMap((o) => o.content ?? []).find((c) => c.type === "output_text")?.text ?? "";
    const p = JSON.parse(text) as Partial<Pick<AuditResult, "summary" | "working" | "costing" | "fixFirst">>;
    const arr = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string").slice(0, 3) : []);
    return { summary: typeof p.summary === "string" ? p.summary : "", working: arr(p.working), costing: arr(p.costing), fixFirst: arr(p.fixFirst) };
  } catch (e) {
    console.error("audit ai failed", e);
    return null;
  }
}

export const runWebsiteAudit = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inputSchema.parse(input))
  .handler(async ({ data }): Promise<AuditResponse> => {
    const url = normalizeUrl(data.url);
    if (!url) return { ok: false, error: "Please enter a valid public website address, like yourbrand.com" };
    let page;
    try {
      page = await safeFetch(url);
    } catch (e) {
      console.error("audit fetch failed", e);
      return { ok: false, error: "We couldn't open this website. Check the address or try again in a minute." };
    }
    if (page.res.status >= 400) return { ok: false, error: `The website replied with an error (${page.res.status}). It may be blocking checks.` };
    const checks = basicChecks(page.html, page.finalUrl, page.ms, page.size);
    const basicScore = Math.round((checks.filter((c) => c.ok).length / checks.length) * 100);
    const ps = await pageSpeed(page.finalUrl.toString());
    const scores: AuditResult["scores"] = ps
      ? [{ label: "Speed", value: ps.performance }, { label: "SEO", value: ps.seo }, { label: "Accessibility", value: ps.accessibility }, { label: "Best practice", value: ps.bestPractices }]
      : [{ label: "Basics", value: basicScore }];
    if (ps?.lcp) checks.push({ label: "Main content load time (mobile)", ok: parseFloat(ps.lcp) <= 2.5, detail: ps.lcp });
    const vals = [...scores.map((s) => s.value).filter((v): v is number => v != null), basicScore];
    const score = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    const ai = await aiReport(page.finalUrl.hostname, checks, scores);
    const good = checks.filter((c) => c.ok), bad = checks.filter((c) => !c.ok);
    return {
      ok: true,
      result: {
        url: page.finalUrl.hostname, score, scores, checks, source: ps ? "pagespeed" : "basic",
        summary: ai?.summary || `Your website scored ${score}/100. ${bad.length ? `${bad.length} issues may be costing you enquiries.` : "The basics look healthy."}`,
        working: ai?.working.length ? ai.working : good.slice(0, 3).map((c) => c.label),
        costing: ai?.costing.length ? ai.costing : bad.slice(0, 3).map((c) => `${c.label}: ${c.detail}`),
        fixFirst: ai?.fixFirst.length ? ai.fixFirst : bad.slice(0, 3).map((c) => `Fix: ${c.label}`),
      },
    };
  });
