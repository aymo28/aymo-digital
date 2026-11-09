import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  MessageCircle,
  PackageCheck,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { type Service } from "@/lib/services-data";

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="service-detail-hero">
        <div className="page-shell grid items-center gap-10 py-16 lg:grid-cols-[1fr_.9fr] lg:py-20">
          <Reveal>
            <nav className="mb-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> /{" "}
              <span>{service.title}</span>
            </nav>
            <p className="eyebrow">Digital Engineering & Growth</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ mode: "quote", service: service.slug }}>
                  Get a Quote <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a
                  href="https://wa.me/923173712950"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us <MessageCircle />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <img
              className="service-hero-image"
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={800}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Target Client ── */}
      <section className="page-shell py-16">
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
            <span className="value-icon mb-4 inline-flex">
              <Target className="size-5" />
            </span>
            <p className="eyebrow">Who this is for</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold">
              Built for the right client.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {service.targetClient}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Problems Solved ── */}
      <section className="border-y border-border bg-muted/40">
        <div className="page-shell py-16">
          <Reveal>
            <p className="eyebrow">The problems we eliminate</p>
            <h2 className="section-title">
              What's costing you <span>customers.</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.problemsSolved.map((problem, index) => (
              <Reveal key={problem} delay={index * 80}>
                <li className="flex items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
                  <span className="text-sm leading-6">{problem}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="page-shell py-16">
        <Reveal>
          <p className="eyebrow">Clear output</p>
          <h2 className="section-title">
            Exactly what you <span>get.</span>
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {service.deliverables.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <li className="flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden="true" />
                <span className="text-sm leading-6">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Process ── */}
      <section className="border-y border-border bg-muted/40">
        <div className="page-shell py-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our process</p>
            <h2 className="section-title">
              How we <span>deliver.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 130}>
                <article className="h-full rounded-lg border border-border bg-card p-6 shadow-soft">
                  <span className="text-xs font-extrabold text-primary">{step.step}</span>
                  <h3 className="mt-4 font-display text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="page-shell py-16">
        <Reveal>
          <p className="eyebrow">Tools & technology</p>
          <h2 className="section-title">
            The stack behind <span>the work.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Turnaround & Pricing ── */}
      <section className="border-y border-border bg-muted/40">
        <div className="page-shell py-16">
          <Reveal>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="size-4 text-primary" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Turnaround:</strong> {service.turnaround}
              </span>
            </div>
            <p className="eyebrow">Transparent pricing</p>
            <h2 className="section-title">
              Investment built around <span>the scope.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.pricing.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 120}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-soft">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-primary">
                        {tier.name}
                      </p>
                      <p className="mt-1 font-display text-3xl font-extrabold">{tier.price}</p>
                    </div>
                    {index === 1 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary">
                        <Star className="size-3" aria-hidden="true" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" className="mt-6 w-full">
                    <Link to="/contact" search={{ mode: "quote", service: service.slug }}>
                      Get a Quote <ArrowRight />
                    </Link>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="page-shell py-16">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="section-title">
            {service.title} <span>FAQs.</span>
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-8">
          <Accordion.Root type="single" collapsible className="grid gap-3">
            {service.faqs.map((faq, index) => (
              <Accordion.Item
                key={faq.question}
                value={`faq-${index}`}
                className="faq-item"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 text-left font-display text-sm font-extrabold leading-snug outline-none focus-visible:ring-2 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                    <ChevronDown
                      className="size-4 shrink-0 text-primary transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-1 pt-2 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </section>

      {/* ── Closing CTA Strip ── */}
      <section className="border-t border-border bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-16 text-center">
          <PackageCheck className="size-10 text-highlight" aria-hidden="true" />
          <h2 className="max-w-xl font-display text-3xl font-extrabold">
            Ready to get started?
          </h2>
          <p className="max-w-md text-sm leading-6 text-results-muted">
            Tell us about your project. We'll review it and send a clear written proposal with deliverables, timeline, and pricing.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="results" size="lg">
              <Link to="/contact" search={{ mode: "quote", service: service.slug }}>
                Request a Proposal <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/923173712950"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <MessageCircle />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
