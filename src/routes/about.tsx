import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Eye,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  MousePointerClick,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { directors, team } from "@/lib/company-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | AYMO DIGITAL — Business Growth Partner" },
      { name: "description", content: "Learn why AYMO DIGITAL was founded: to give ambitious business owners direct access to experienced growth architects and software engineers without agency runaround." },
      { property: "og:title", content: "About Us | AYMO DIGITAL — Business Growth Partner" },
      { property: "og:description", content: "Senior thinking, direct founder accountability, and practical digital engineering built to grow your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Lightbulb,
    title: "Clarity Before Activity",
    text: "Every channel, feature, and campaign begins with a clear commercial reason to exist. We never build or advertise without a defined path to revenue.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Accountability",
    text: "We report on raw commercial metrics — qualified inquiries, conversion rates, and revenue — not inflated vanity metrics that mask poor performance.",
  },
  {
    icon: Zap,
    title: "Engineering + Marketing Together",
    text: "Software engineers and performance media buyers collaborate directly. No waiting weeks for external contractors to fix a tracking pixel or optimize a database.",
  },
  {
    icon: MousePointerClick,
    title: "Creative That Converts",
    text: "World-class visual aesthetics are essential, but only when paired with conversion psychology and an effortless path for the customer to take action.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership, Not Vendor-Ship",
    text: "We treat your budget as if it were our own money. If an idea won't generate a return, we will candidly tell you before you spend a single pound.",
  },
  {
    icon: Eye,
    title: "100% Asset Ownership",
    text: "Your code, ad accounts, design files, and customer data belong to you forever. We never lock you into proprietary platforms or hold access hostage.",
  },
];

const operatingPrinciples = [
  {
    title: "Why AYMO DIGITAL Was Established",
    body: "We started AYMO DIGITAL because we watched too many smart business owners burn substantial budgets on conventional agencies. Most marketing agencies can run ads but cannot write code or fix broken checkout software. Most software development agencies can build databases but don't understand consumer psychology or how to acquire paying customers. AYMO DIGITAL unites both under one roof.",
  },
  {
    title: "Who Actually Works on Your Project",
    body: "You never get passed down to a junior account manager who knows less about your business than you do. Moez Rehman directly architects the technical strategy and revenue funnels; Malaika Jahangir oversees the creative direction and user experience; and our seven senior specialists execute the build and marketing.",
  },
  {
    title: "How We Communicate",
    body: "No endless bureaucratic ticket queues. We work in structured weekly sprints with transparent updates via WhatsApp, video walk-throughs, and shared analytics dashboards. You always know what was completed, why it matters, and what comes next.",
  },
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Who We Are"
        title="We Help Businesses"
        highlight="Grow."
        text="AYMO DIGITAL is a digital engineering and business growth company. We partner with ambitious business owners across the UK, Pakistan, the Gulf, and internationally to attract customers, increase sales, and build scalable digital systems."
      />

      {/* ── Core Philosophy & Story ── */}
      <section className="page-shell py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">The Founding Mission</p>
            <h2 className="section-title">
              Built for commercial outcomes, <span>not billable agency hours.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Most businesses don't need another generic website template or an agency that simply posts pictures on social media. They need a predictable system to generate inquiries, a frictionless platform to turn visitors into buyers, and streamlined operations that save management hours.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Whether we are building a bespoke ERP system, designing a high-speed e-commerce platform, or managing performance advertising campaigns, every decision is guided by one question: <em>Does this move our client's business forward?</em>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero">
                <Link to="/contact">
                  Talk About Your Business <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/directors">
                  Meet the Directors
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            {operatingPrinciples.map((principle) => (
              <div key={principle.title} className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
                <h3 className="font-display text-lg font-extrabold text-foreground">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{principle.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Directors Spotlight ── */}
      <section className="border-y border-border bg-muted/40 py-20">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Company Leadership</p>
            <h2 className="section-title">
              Direct accountability from the <span>founders.</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              You work directly with experienced leaders who have personal responsibility for your success.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {directors.map((dir, idx) => (
              <Reveal key={dir.name} delay={idx * 100}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-soft">
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-lg font-extrabold text-white shadow-md">
                      {dir.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold">{dir.name}</h3>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                        {dir.role}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{dir.overview}</p>

                  <div className="mt-6 border-t border-border/60 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/80">Key Focus Areas</p>
                    <ul className="mt-2.5 space-y-1.5">
                      {dir.responsibilities.slice(0, 3).map((resp) => (
                        <li key={resp} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <Button asChild variant="hero" className="w-full">
                      <a href={dir.whatsapp} target="_blank" rel="noopener noreferrer">
                        Chat with {dir.name.split(" ")[0]} <MessageCircle className="size-4" />
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/team" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
              View our full team of 7 specialist engineers &amp; marketers <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Stand For ── */}
      <section className="page-shell py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Values</p>
          <h2 className="section-title">
            The principles behind <span>every engagement.</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Clear standards that protect your investment and ensure dependable execution.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={(index % 3) * 80}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-soft">
                <span className="value-icon flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── International Operating Presence ── */}
      <section className="border-t border-border bg-card py-16">
        <div className="page-shell">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">UK Desk</span>
              <h3 className="mt-2 font-display text-lg font-extrabold">London (GMT)</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                UK client communications, contract structures, GBP banking, and European timezone alignment.
              </p>
              <a href="tel:+447717229638" className="mt-4 block text-xs font-bold text-primary hover:underline">
                +44 7717 229638
              </a>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Engineering Desk</span>
              <h3 className="mt-2 font-display text-lg font-extrabold">Islamabad / Karachi (PKT)</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Full-stack software engineering, mobile development, performance marketing, and creative production studio.
              </p>
              <a href="tel:+923173712950" className="mt-4 block text-xs font-bold text-primary hover:underline">
                +92 317 3712950
              </a>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Global Invoicing</span>
              <h3 className="mt-2 font-display text-lg font-extrabold">USD · GBP · AED</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Transparent international agreements, milestone-based payments, and clean intellectual property transfer.
              </p>
              <a href="mailto:info@aymo.digital" className="mt-4 block text-xs font-bold text-primary hover:underline">
                info@aymo.digital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Callout ── */}
      <section className="bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Ready to partner with a team that <span className="text-highlight">treats your business like its own?</span>
          </h2>
          <p className="max-w-md text-sm leading-6 text-results-muted">
            Tell us about your business goals. We'll provide honest, practical recommendations on how to move forward.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="results" size="lg">
              <Link to="/contact">
                Talk About Your Business <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/923173712950?text=Hi%20Moez%2C%20I%20would%20like%20to%20discuss%20my%20business%20growth."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Founder Direct <MessageCircle className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
