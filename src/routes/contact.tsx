import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { services } from "@/lib/services-data";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string; challenge?: string } => {
    const result: { service?: string; challenge?: string } = {};
    if (typeof search["service"] === "string") result.service = search["service"];
    if (typeof search["challenge"] === "string") result.challenge = search["challenge"];
    return result;
  },
  head: () => ({
    meta: [
      { title: "Talk About Your Business | AYMO DIGITAL" },
      { name: "description", content: "Tell us about your business goals and current challenges. We'll provide practical recommendations on how to attract more customers, increase sales, and automate operations." },
      { property: "og:title", content: "Talk About Your Business | AYMO DIGITAL" },
      { property: "og:description", content: "Request a free business growth consultation or written proposal with AYMO DIGITAL." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactMethods = [
  {
    icon: MessageCircle,
    label: "Direct WhatsApp",
    value: "+92 317 3712950",
    detail: "Fastest response during working hours",
    href: "https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%20would%20like%20to%20discuss%20my%20business%20growth.",
  },
  {
    icon: Phone,
    label: "PK Engineering Desk",
    value: "+92 317 3712950",
    detail: "Mon–Sat, 9am–6pm PKT",
    href: "tel:+923173712950",
  },
  {
    icon: Phone,
    label: "UK Client Desk",
    value: "+44 7717 229638",
    detail: "Mon–Fri, 9am–5pm GMT",
    href: "tel:+447717229638",
  },
  {
    icon: Mail,
    label: "Email Proposals",
    value: "info@aymo.digital",
    detail: "Replies within one business day",
    href: "mailto:info@aymo.digital",
  },
];

const challengeOptions = [
  "Get more customers",
  "Increase sales & conversions",
  "Improve online visibility (Google & SEO)",
  "Automate business operations & reduce manual work",
  "Build a new website or online store",
  "Develop custom software / CRM / ERP",
  "Other growth challenge",
];

const budgetRanges = [
  "Under £2,500 ($3,000 / 800k PKR)",
  "£2,500 – £6,500 ($3,000 – $8,000)",
  "£6,500 – £15,000 ($8,000 – $18,000)",
  "£15,000+ ($18,000+)",
  "Discussing budget options",
];

const timelineOptions = [
  "Immediately (Within 1–2 weeks)",
  "Within 1 month",
  "Within 2–3 months",
  "Planning for next quarter",
];

function useLocalTime(timezone: string) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit" })
  );
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit" }));
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [timezone]);
  return time;
}

function ContactPage() {
  const { service, challenge: initialChallenge } = Route.useSearch();
  const preselectedService = services.find((s) => s.slug === service)?.title;

  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    businessEmail: "",
    phone: "",
    companyName: "",
    website: "",
    country: "",
    selectedChallenge: initialChallenge || preselectedService || challengeOptions[0],
    businessGoals: "",
    budget: "",
    timeline: timelineOptions[0],
    additionalDetails: "",
  });

  const karachiTime = useLocalTime("Asia/Karachi");
  const londonTime = useLocalTime("Europe/London");

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: 380, behavior: "smooth" });
    } else {
      // Step 4: Submit to Supabase Database
      setSubmitting(true);
      setSubmitError(null);

      const fullMessage = [
        formData.companyName ? `Company: ${formData.companyName}` : "",
        formData.website ? `Website: ${formData.website}` : "",
        formData.country ? `Country: ${formData.country}` : "",
        `Challenge/Priority: ${formData.selectedChallenge}`,
        formData.businessGoals ? `Goals: ${formData.businessGoals}` : "",
        formData.budget ? `Budget: ${formData.budget}` : "",
        formData.timeline ? `Timeline: ${formData.timeline}` : "",
        formData.additionalDetails ? `Notes: ${formData.additionalDetails}` : "",
      ].filter(Boolean).join("\n");

      try {
        // 1. Inbound messages table
        const { error: msgErr } = await supabase.from("contact_messages").insert({
          name: formData.name.trim(),
          email: formData.businessEmail.trim().toLowerCase(),
          subject: `Consultation: ${formData.selectedChallenge}`,
          message: fullMessage,
        });
        if (msgErr) console.warn("contact_messages insert:", msgErr.message);

        // 2. Quote requests table
        const { error: quoteErr } = await supabase.from("quote_requests").insert({
          name: formData.name.trim(),
          email: formData.businessEmail.trim().toLowerCase(),
          phone: formData.phone.trim() || null,
          company: formData.companyName.trim() || null,
          service: formData.selectedChallenge,
          budget: formData.budget || null,
          timeline: formData.timeline || null,
          message: fullMessage,
          status: "new",
        });
        if (quoteErr) console.warn("quote_requests insert:", quoteErr.message);

        // 3. Leads CRM table
        const { error: leadErr } = await supabase.from("leads").insert({
          name: formData.name.trim(),
          email: formData.businessEmail.trim().toLowerCase(),
          phone: formData.phone.trim() || null,
          company: formData.companyName.trim() || null,
          service: formData.selectedChallenge,
          source: "website_contact_form",
          stage: "new",
          priority: "medium",
          notes: fullMessage,
        });
        if (leadErr) console.warn("leads insert:", leadErr.message);

        setSubmitted(true);
        window.scrollTo({ top: 350, behavior: "smooth" });
      } catch (err) {
        console.error("Submission failed:", err);
        setSubmitError("There was an issue saving your request, but our team has been notified. You can also contact us via WhatsApp.");
        setSubmitted(true);
      } finally {
        setSubmitting(false);
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Moez & Malaika! I submitted a consultation request for ${formData.companyName || formData.name}.\n\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.businessEmail}\n` +
    `Country: ${formData.country || "Not specified"}\n` +
    `Main Priority: ${formData.selectedChallenge}\n` +
    `Desired Goal: ${formData.businessGoals || "Discuss on call"}`
  );

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Start With Clarity"
        title="Talk About"
        highlight="Your Business."
        text="Tell us about where your business is today and where you want to go. We'll help identify practical ways to move forward with a clear written plan."
      />

      <section className="page-shell grid gap-12 py-16 lg:grid-cols-[1fr_1.35fr]">
        {/* Left Column: Direct Contact & What to Expect */}
        <Reveal className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-7">
            <h2 className="font-display text-lg font-extrabold text-foreground">
              Direct Contact Channels
            </h2>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Prefer an immediate conversation? Reach our leadership directly.
            </p>

            <div className="mt-5 space-y-3">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3.5 rounded-lg border border-border/80 bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {m.label}
                        </span>
                        <ArrowRight className="size-3 text-muted-foreground" />
                      </div>
                      <strong className="block text-sm text-foreground">{m.value}</strong>
                      <span className="text-xs text-muted-foreground">{m.detail}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Operating Timezones */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Operating Desks</span>
              <span className="text-xs text-muted-foreground">Live Time</span>
            </div>
            <div className="mt-3 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="size-3 text-primary" /> Islamabad / Karachi (PKT)
                </span>
                <strong className="font-display text-foreground">{karachiTime}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="size-3 text-primary" /> London Client Desk (GMT)
                </span>
                <strong className="font-display text-foreground">{londonTime}</strong>
              </div>
            </div>
          </div>

          {/* Consultation Promise */}
          <div className="rounded-xl bg-results p-6 text-results-foreground shadow-soft">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-highlight" />
              <h3 className="font-display text-base font-extrabold">The AYMO Consultation Guarantee</h3>
            </div>
            <ul className="mt-4 space-y-2.5 text-xs leading-5 text-results-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-highlight" />
                <span>Zero sales pressure — if we cannot meaningfully help, we will tell you directly.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-highlight" />
                <span>Direct access to founders Moez Rehman and Malaika Jahangir on your initial review.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-highlight" />
                <span>Strict confidentiality and non-disclosure for all business information shared.</span>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Right Column: Multi-Step Consultation System */}
        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-10">
            {submitted ? (
              /* STEP 5: SUBMISSION & CONFIRMATION */
              <div className="py-8 text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-sm">
                  <CheckCircle2 className="size-8" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">Request Prepared Successfully</p>
                <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                  Thank you, {formData.name.split(" ")[0]}!
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Our directors have received your details for <strong>{formData.companyName || "your business"}</strong>. We review every submission personally and respond within one business day.
                </p>

                {/* Instant WhatsApp Concierge Box */}
                <div className="mx-auto mt-8 max-w-md rounded-xl border border-primary/20 bg-primary/5 p-6 text-left">
                  <div className="flex items-center gap-2 text-primary">
                    <MessageCircle className="size-5" />
                    <strong className="text-sm font-extrabold">Want an instant conversation?</strong>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Skip the email queue. Click below to open a pre-filled WhatsApp conversation directly with founder Moez Rehman.
                  </p>
                  <Button asChild variant="hero" className="mt-4 w-full">
                    <a
                      href={`https://wa.me/923173712950?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on WhatsApp Now <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-8 border-t border-border/60 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                  >
                    Start a New Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                {/* Step Progress Header */}
                <div className="border-b border-border/60 pb-6">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-primary uppercase tracking-wider">
                      Step {step} of 4:{" "}
                      {step === 1 && "Business Information"}
                      {step === 2 && "Primary Business Challenge"}
                      {step === 3 && "Desired Outcomes & Goals"}
                      {step === 4 && "Budget & Preferred Timeline"}
                    </span>
                    <span className="text-muted-foreground">{Math.round((step / 4) * 100)}% Complete</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-3 flex h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="bg-primary transition-all duration-300"
                      style={{ width: `${(step / 4) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleNextStep} className="mt-8 space-y-6">
                  {/* ── STEP 1: BUSINESS INFORMATION ── */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold">Your Full Name *</span>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold">Business Email *</span>
                          <input
                            required
                            type="email"
                            value={formData.businessEmail}
                            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                            placeholder="you@company.com"
                            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </label>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold">Phone / WhatsApp *</span>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+44 7XXX XXXXXX or +92 3XX XXXXXXX"
                            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold">Company Name *</span>
                          <input
                            required
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="Your Company Ltd"
                            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </label>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold">Current Website URL (Optional)</span>
                          <input
                            type="url"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            placeholder="https://yourcompany.com"
                            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-xs font-bold">Country / Timezone</span>
                          <input
                            type="text"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            placeholder="e.g. United Kingdom, UAE, Pakistan, USA"
                            className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </label>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 2: BUSINESS CHALLENGE ── */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-display text-base font-extrabold text-foreground">
                          What would you most like to improve?
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Select the primary challenge holding back your growth right now.
                        </p>
                      </div>

                      <div className="grid gap-2.5 sm:grid-cols-1">
                        {challengeOptions.map((opt) => {
                          const isSelected = formData.selectedChallenge === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, selectedChallenge: opt })}
                              className={`flex items-center justify-between rounded-lg border p-4 text-left text-sm font-semibold transition-all ${
                                isSelected
                                  ? "border-primary bg-primary/10 text-primary shadow-sm"
                                  : "border-border bg-background text-foreground hover:border-primary/40"
                              }`}
                            >
                              <span>{opt}</span>
                              {isSelected && <CheckCircle2 className="size-4 text-primary shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3: BUSINESS GOALS ── */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-display text-base font-extrabold text-foreground">
                          Describe the outcome you want to achieve.
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          What would meaningful business growth look like for your company over the next 6 to 12 months?
                        </p>
                      </div>

                      <label className="block">
                        <textarea
                          required
                          rows={5}
                          value={formData.businessGoals}
                          onChange={(e) => setFormData({ ...formData, businessGoals: e.target.value })}
                          placeholder="e.g. We want to double our qualified inquiries from high-end clients, eliminate our manual spreadsheet client onboarding, and launch a fast mobile storefront..."
                          className="w-full resize-none rounded-md border border-input bg-background p-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                      </label>
                    </div>
                  )}

                  {/* ── STEP 4: PROJECT INFORMATION & TIMELINE ── */}
                  {step === 4 && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="font-display text-base font-extrabold text-foreground">
                          Project Parameters &amp; Details
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Helping us understand your budget and timeline ensures our recommendations are practical.
                        </p>
                      </div>

                      <label className="block">
                        <span className="mb-2 block text-xs font-bold">Estimated Investment Budget (Optional)</span>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select an investment range</option>
                          {budgetRanges.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-bold">Preferred Starting Timeline</span>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                        >
                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-bold">Any Specific Requirements or Notes (Optional)</span>
                        <textarea
                          rows={3}
                          value={formData.additionalDetails}
                          onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                          placeholder="Specific tools you use, competitors you like, or questions for our founders..."
                          className="w-full resize-none rounded-md border border-input bg-background p-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                      </label>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between border-t border-border/60 pt-6">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setStep(step - 1)}
                        className="flex items-center gap-1.5"
                      >
                        <ArrowLeft className="size-4" /> Back
                      </Button>
                    ) : (
                      <span />
                    )}

                    <Button type="submit" variant="hero" size="lg" className="min-w-[160px]" disabled={submitting}>
                      {submitting ? (
                        <><Loader2 className="size-4 animate-spin" /> Submitting...</>
                      ) : step === 4 ? (
                        <>Submit Consultation Request <Send className="size-4" /></>
                      ) : (
                        <>Continue <ArrowRight className="size-4" /></>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
