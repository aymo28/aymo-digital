import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { services } from "@/lib/services-data";

type ContactMode = "general" | "quote" | "booking";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { mode?: "quote" | "booking"; service?: string } => {
    const result: { mode?: "quote" | "booking"; service?: string } = {};
    if (search["mode"] === "booking" || search["mode"] === "quote") result.mode = search["mode"];
    if (typeof search["service"] === "string") result.service = search["service"];
    return result;
  },
  head: () => ({
    meta: [
      { title: "Contact Aymo Digital | Quote & Booking" },
      { name: "description", content: "Talk to Aymo Digital — request a quotation, book a call, or ask about any digital marketing service. WhatsApp, phone and email all work." },
      { property: "og:title", content: "Contact Aymo Digital | Quote & Booking" },
      { property: "og:description", content: "Request a quotation or book a call with Aymo Digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactDetails = [
  { icon: MessageCircle, label: "WhatsApp", value: "+92 317 3712950", href: "https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%27d%20like%20to%20discuss%20marketing%20for%20my%20business." },
  { icon: Phone, label: "Call us", value: "+92 317 3712950", href: "tel:+923173712950" },
  { icon: Phone, label: "UK office", value: "+44 7717 229638", href: "tel:+447717229638" },
  { icon: Mail, label: "Email us", value: "info@aymo.digital", href: "mailto:info@aymo.digital" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan", href: undefined },
  { icon: Clock, label: "Working hours", value: "Mon–Sat, 9am–6pm", href: undefined },
];

const serviceOptions = [...services.map((service) => service.title), "Something else"];
const budgetOptions = ["Under 50,000 PKR / month", "50,000 – 150,000 PKR / month", "150,000 – 400,000 PKR / month", "400,000+ PKR / month", "Not sure yet"];
const timeOptions = ["Morning (9am – 12pm)", "Afternoon (12pm – 4pm)", "Evening (4pm – 6pm)"];

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
  const { mode: modeParam, service } = Route.useSearch();
  const mode: ContactMode = modeParam ?? "general";
  const [submitted, setSubmitted] = useState(false);
  const activeService = services.find((item) => item.slug === service)?.title ?? "";
  const karachiTime = useLocalTime("Asia/Karachi");
  const londonTime = useLocalTime("Europe/London");

  const heroText = mode === "quote"
    ? { eyebrow: "Request a quote", title: "Get a clear", highlight: "written quotation.", text: activeService ? `Tell us about your ${activeService} needs and we will send a clear quotation with deliverables and timelines.` : "Tell us what you need and we will send a clear quotation with deliverables and timelines." }
    : mode === "booking"
      ? { eyebrow: "Book a call", title: "Book a call with", highlight: "Aymo Digital.", text: "Pick a time that suits you. We will call you and discuss your business goals — no pressure." }
      : { eyebrow: "Contact", title: "Let's Build", highlight: "Something Real.", text: "Tell us about your business goals — we'll come back with an honest, practical growth plan." };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow={heroText.eyebrow} title={heroText.title} highlight={heroText.highlight} text={heroText.text} />

      <section className="page-shell grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-4">
          {contactDetails.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="value-icon"><Icon className="size-5" /></span>
                <div className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase text-muted-foreground">{label}</span>
                  <strong className="mt-1 block text-sm">{value}</strong>
                </div>
              </>
            );
            return href ? (
              <a key={label} href={href} className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                {content}
              </a>
            ) : (
              <div key={label} className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-soft">{content}</div>
            );
          })}
          <div className="rounded-lg border border-border bg-card p-5 shadow-soft">
            <h2 className="font-display text-sm font-extrabold">Local time</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">🕐 Karachi (PKT)</span>
                <strong>{karachiTime}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">🕐 London (GMT)</span>
                <strong>{londonTime}</strong>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-results p-6 text-results-foreground">
            <h2 className="font-display text-lg font-extrabold">What happens next?</h2>
            <ul className="mt-4 space-y-3 text-sm text-results-muted">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-highlight" />We reply within one working day.</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-highlight" />A short call to understand your goals.</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-highlight" />A clear written quotation — no pressure.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-sm font-extrabold">Need a quick answer?</h2>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">WhatsApp is usually the fastest way to reach us during working hours.</p>
            <Button asChild variant="hero" className="mt-4 w-full"><a href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital!">Chat on WhatsApp <MessageCircle /></a></Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-border bg-card p-7 shadow-soft sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-14 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary"><Send className="size-6" /></span>
                <h2 className="font-display text-2xl font-extrabold">{mode === "booking" ? "Booking request received." : "Request received."}</h2>
                <p className="max-w-sm text-sm leading-6 text-muted-foreground">Thank you! Our team will contact you within one working day.</p>
                <Button asChild variant="hero"><a href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital!">Chat now on WhatsApp <MessageCircle /></a></Button>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                {mode === "booking" && (
                  <div className="flex items-center gap-3 rounded-md bg-secondary p-4">
                    <CalendarDays className="size-5 shrink-0 text-primary" />
                    <p className="text-xs font-semibold leading-5">Booking request — choose your preferred date and time below.</p>
                  </div>
                )}
                {mode === "quote" && (
                  <div className="flex items-center gap-3 rounded-md bg-secondary p-4">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <p className="text-xs font-semibold leading-5">Quotation request{activeService ? ` — service: ${activeService}` : ""}. Fill in the details for an exact quote.</p>
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold">Full name</span>
                    <input required type="text" placeholder="Your name" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold">Phone / WhatsApp</span>
                    <input required type="tel" placeholder="+92 3XX XXXXXXX" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold">Email address</span>
                    <input required type="email" placeholder="you@company.com" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold">Company (optional)</span>
                    <input type="text" placeholder="Company name" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold">Service you need</span>
                  <select defaultValue={activeService || serviceOptions[0]} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                    {serviceOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                {mode === "booking" && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold">Preferred date</span>
                      <input required type="date" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold">Preferred time</span>
                      <select required defaultValue="" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                        <option value="" disabled>Select a time</option>
                        {timeOptions.map((option) => <option key={option}>{option}</option>)}
                      </select>
                    </label>
                  </div>
                )}
                {mode === "quote" && (
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold">Monthly budget (optional)</span>
                    <select defaultValue="" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                      <option value="" disabled>Select a range</option>
                      {budgetOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                )}
                <label className="block">
                  <span className="mb-2 block text-xs font-bold">{mode === "quote" ? "Tell us about the work" : "Tell us about your goals"}</span>
                  <textarea required rows={4} placeholder="What are you trying to achieve?" className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  {mode === "booking" ? "Confirm booking" : mode === "quote" ? "Request my quotation" : "Send message"} <Send />
                </Button>
                <p className="text-center text-[10px] text-muted-foreground">We usually reply within one working day. No spam, ever.</p>
              </form>
            )}
          </div>
          {mode !== "general" && (
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Looking for something else? <Link to="/contact" className="font-bold text-primary">Use the general contact form</Link>
            </p>
          )}
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
