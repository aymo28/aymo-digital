// @ts-nocheck — legacy remixed code; re-type when this area is rebuilt
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
  Sparkles,
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
        <div className="page-shell grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <Reveal>
            <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span>/</span>
              <span className="font-semibold text-foreground">{service.title}</span>
            </nav>
            <p className="eyebrow">{service.categoryName}</p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl">
              {service.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ mode: "quote", service: service.slug }}>
                  Talk About Your Business <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a
                  href={`https://wa.me/923173712950?text=${encodeURIComponent(`Hi Aymo Digital, I would like to discuss ${service.title} for my business.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Consultation <MessageCircle />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                className="service-hero-image h-[380px] w-full object-cover sm:h-[440px]"
                src={service.image}
                alt={service.imageAlt}
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-border/60 bg-background/90 p-4 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Service Overview</p>
                <p className="font-display text-base font-extrabold">{service.title}</p>
                <p className="text-xs text-muted-foreground">Turnaround: {service.turnaround}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Business Benefits (Customer Psychology) ── */}
      <section className="border-t border-border bg-card py-16">
        <div className="page-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Real Commercial Value</p>
            <h2 className="section-title">
              How this helps your <span>business grow.</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              We focus on business improvement before technical tools. Here is what this service delivers for your company.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.customerBenefits.map((benefit, index) => (
              <Reveal key={benefit} delay={index * 60}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-background p-5 shadow-soft transition-transform hover:-translate-y-1">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="size-3.5" />
                  </span>
                  <p className="text-sm font-medium leading-snug">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="page-shell py-16">
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-8 shadow-soft md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <span className="value-icon flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="size-7" />
              </span>
              <div>
                <p className="eyebrow">Target Customer Profile</p>
                <h2 className="mt-1 font-display text-2xl font-extrabold">
                  Who this is built for.
                </h2>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  {service.targetClient}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Problems Solved ── */}
      <section className="border-y border-border bg-muted/40 py-16">
        <div className="page-shell">
          <Reveal>
            <p className="eyebrow">Problems We Eliminate</p>
            <h2 className="section-title">
              What is holding your <span>growth back today.</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.problemsSolved.map((problem, index) => (
              <Reveal key={problem} delay={index * 80}>
                <li className="flex items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-5">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
                  <span className="text-sm leading-6 font-medium">{problem}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="page-shell py-16">
        <Reveal>
          <p className="eyebrow">Clear Commercial Output</p>
          <h2 className="section-title">
            Exactly what AYMO DIGITAL <span>delivers.</span>
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {service.deliverables.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <li className="flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden="true" />
                <span className="text-sm leading-6 font-medium">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Process ── */}
      <section className="border-y border-border bg-muted/40 py-16">
        <div className="page-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our 4-Step Method</p>
            <h2 className="section-title">
              How we <span>work with you.</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A transparent, structured process keeping you informed and in full control at every stage.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 100}>
                <article className="h-full rounded-xl border border-border bg-card p-6 shadow-soft">
                  <span className="font-display text-sm font-extrabold text-primary">{step.step}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Secondary Tech Stack (For Technical Buyers) ── */}
      <section className="page-shell py-16">
        <Reveal>
          <p className="eyebrow">Technical Specifications</p>
          <h2 className="section-title">
            The engineering &amp; technology <span>behind the work.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            We use modern, enterprise-proven technologies that ensure speed, long-term stability, and complete code ownership.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Turnaround & Pricing ── */}
      <section className="border-y border-border bg-muted/40 py-16">
        <div className="page-shell">
          <Reveal>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="size-4 text-primary" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Estimated Delivery:</strong> {service.turnaround}
              </span>
            </div>
            <p className="eyebrow">Transparent Pricing</p>
            <h2 className="section-title">
              Clear scope with <span>no surprise fees.</span>
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
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" className="mt-6 w-full">
                    <Link to="/contact" search={{ mode: "quote", service: service.slug }}>
                      Request Written Quotation <ArrowRight />
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
          <p className="eyebrow">Common Questions</p>
          <h2 className="section-title">
            Frequently asked questions about <span>{service.title}.</span>
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-8 max-w-3xl">
          <Accordion.Root type="single" collapsible className="grid gap-3">
            {service.faqs.map((faq, index) => (
              <Accordion.Item
                key={faq.question}
                value={`faq-${index}`}
                className="faq-item rounded-lg border border-border bg-card p-5"
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
                  <p className="pb-1 pt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </section>

      {/* ── Closing CTA Strip ── */}
      <section className="border-t border-border bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-16 text-center">
          <PackageCheck className="size-12 text-highlight" aria-hidden="true" />
          <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">
            Let&apos;s discuss how {service.title.toLowerCase()} can grow your business.
          </h2>
          <p className="max-w-lg text-sm leading-6 text-results-muted">
            Tell us about your business goals. We&apos;ll review your setup and prepare a clear written recommendation with timelines and costs.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="results" size="lg">
              <Link to="/contact" search={{ mode: "quote", service: service.slug }}>
                Get Your Free Consultation <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={`https://wa.me/923173712950?text=${encodeURIComponent(`Hi Aymo Digital, I want to talk about ${service.title}.`)}`}
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
