import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Loader2, MessageCircle, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { runWebsiteAudit, type AuditResult } from "@/lib/audit.functions";

function scoreTone(v: number) {
  return v >= 80 ? "good" : v >= 50 ? "ok" : "bad";
}

export function HeroAudit() {
  const audit = useServerFn(runWebsiteAudit);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = url.trim();
    if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+([/?#].*)?$/i.test(value)) {
      setError("Enter a website address, like yourbrand.com");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await audit({ data: { url: value } });
      if (res.ok) setResult(res.result);
      else setError(res.error);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="hero-audit">
      <form onSubmit={submit} className="hero-audit-form" noValidate>
        <label htmlFor="hero-audit-url" className="sr-only">Your website address</label>
        <Search className="hero-audit-icon" aria-hidden="true" />
        <input id="hero-audit-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter your website, e.g. yourbrand.com" inputMode="url" autoComplete="url" maxLength={300} disabled={loading} />
        <Button type="submit" variant="hero" disabled={loading || !url.trim()}>{loading ? <><Loader2 className="animate-spin" />Checking…</> : <>Free AI audit <ArrowRight /></>}</Button>
      </form>
      <p className="hero-audit-note">{loading ? "Checking speed, Google readiness and mobile setup — this can take up to a minute." : "Free • No sign-up • Get your score in under a minute"}</p>
      {error && <p role="alert" className="hero-audit-error">{error}</p>}
      {result && (
        <div className="audit-report" aria-live="polite">
          <div className="audit-report-head">
            <div className={`audit-score-ring ${scoreTone(result.score)}`} style={{ "--score": result.score } as React.CSSProperties}><strong>{result.score}</strong><small>/100</small></div>
            <div><p className="eyebrow">Audit for {result.url}</p><p className="audit-summary">{result.summary}</p></div>
            <Button type="button" variant="ghost" size="icon" aria-label="Close report" onClick={() => setResult(null)}><X /></Button>
          </div>
          <div className="audit-scores">{result.scores.map((s) => <div key={s.label} className={s.value == null ? "" : scoreTone(s.value)}><small>{s.label}</small><strong>{s.value ?? "—"}</strong></div>)}</div>
          <div className="audit-columns">
            <div><h3>What is working</h3><ul>{result.working.map((t) => <li key={t}><Check className="size-3.5" />{t}</li>)}</ul></div>
            <div><h3>What is costing you customers</h3><ul>{result.costing.map((t) => <li key={t} className="bad"><X className="size-3.5" />{t}</li>)}</ul></div>
            <div><h3>Fix these first</h3><ol>{result.fixFirst.map((t, i) => <li key={t}><span>{i + 1}</span>{t}</li>)}</ol></div>
          </div>
          <details className="audit-details"><summary>See all {result.checks.length} checks</summary><ul>{result.checks.map((c) => <li key={c.label} className={c.ok ? "" : "bad"}>{c.ok ? <Check className="size-3.5" /> : <X className="size-3.5" />}<b>{c.label}</b><span>{c.detail}</span></li>)}</ul></details>
          <div className="audit-cta">
            <Button asChild variant="hero"><a href={`https://wa.me/923173712950?text=${encodeURIComponent(`Hi Aymo Digital! My website ${result.url} scored ${result.score}/100. Can you help me fix it?`)}`} target="_blank" rel="noreferrer">Fix it with us on WhatsApp <MessageCircle /></a></Button>
            <Button asChild variant="glass"><Link to="/contact">Get a quotation</Link></Button>
          </div>
          <p className="hero-audit-note">{result.source === "pagespeed" ? "Scores measured with Google PageSpeed (mobile)." : "Basic checks measured directly from your page."} Advice written by AI from these measurements only.</p>
        </div>
      )}
    </div>
  );
}
