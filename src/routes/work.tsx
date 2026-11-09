import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterCta, PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work | Aymo Digital Agency" },
      { name: "description", content: "Case studies and results from brands we have helped grow through strategy, creative and performance marketing." },
      { property: "og:title", content: "Our Work | Aymo Digital Agency" },
      { property: "og:description", content: "Real strategy, real progress — see the results we have delivered for growing brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const caseStudies = [
  {
    client: "Northstar Retail",
    industry: "E-commerce",
    result: "+212% online revenue in 9 months",
    text: "Rebuilt the paid advertising account and landing pages, then layered in email automation to lift repeat purchases.",
    metrics: [{ label: "Revenue growth", value: "+212%" }, { label: "Return on ad spend", value: "4.8x" }],
  },
  {
    client: "Fieldmark Foods",
    industry: "Food & Beverage",
    result: "3x organic traffic in 6 months",
    text: "A focused SEO and content program moved the brand onto page one for its most valuable search terms.",
    metrics: [{ label: "Organic traffic", value: "3x" }, { label: "Page-one keywords", value: "48" }],
  },
  {
    client: "Kinetiq Fitness",
    industry: "Health & Wellness",
    result: "18K new leads in one quarter",
    text: "Short-form video creative paired with tightly targeted Meta campaigns filled the sales pipeline at a sustainable cost.",
    metrics: [{ label: "New leads", value: "18K" }, { label: "Cost per lead", value: "-41%" }],
  },
];

const testimonials = [
  { quote: "The team understood our vision, sharpened our message and gave our brand a clear path to grow.", name: "Ahmed Khan", role: "Founder, Kinetiq Labs", initials: "AK" },
  { quote: "For the first time our marketing feels accountable. Every month we know exactly what worked and why.", name: "Sara Malik", role: "CEO, Northstar Retail", initials: "SM" },
  { quote: "They treat our budget like their own money. The results have followed, quarter after quarter.", name: "Bilal Raza", role: "Director, Fieldmark Foods", initials: "BR" },
];

function WorkPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Our work"
        title="Real strategy."
        highlight="Real progress."
        text="Every project below started with a business goal, not a channel. Here is what that focus has delivered."
      />

      <section className="page-shell space-y-8 py-20">
        {caseStudies.map((study, index) => (
          <Reveal key={study.client}>
            <article className={`grid gap-8 overflow-hidden rounded-lg border border-border bg-card shadow-soft lg:grid-cols-[1.2fr_1fr] ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <div className="p-8 [direction:ltr] sm:p-10">
                <span className="text-[10px] font-bold uppercase text-primary">{study.industry}</span>
                <h2 className="mt-2 font-display text-2xl font-extrabold">{study.client}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-success"><TrendingUp className="size-4" />{study.result}</p>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{study.text}</p>
                <Button asChild variant="outline" className="mt-6"><Link to="/contact">Get results like these <ArrowRight /></Link></Button>
              </div>
              <div className="grid grid-cols-2 gap-px bg-results-line [direction:ltr] lg:grid-cols-1">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col items-center justify-center bg-results px-6 py-10 text-results-foreground">
                    <strong className="font-display text-4xl font-extrabold text-highlight">{metric.value}</strong>
                    <span className="mt-2 text-[10px] font-bold uppercase text-results-muted">{metric.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Client voices</p>
            <h2 className="section-title">What partners say about <span>working with us.</span></h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 100}>
                <figure className="insight-card h-full rounded-lg border border-border bg-card p-7 shadow-soft">
                  <Quote className="size-8 text-primary/25" />
                  <blockquote className="mt-4 text-sm leading-7">{item.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">{item.initials}</span>
                    <div>
                      <strong className="block text-sm">{item.name}</strong>
                      <span className="text-xs text-muted-foreground">{item.role}</span>
                    </div>
                  </figcaption>
                  <div className="mt-4 flex text-highlight">{[1, 2, 3, 4, 5].map((n) => <Star key={n} className="size-3 fill-current" />)}</div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-16 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold">Ready to be our next <span className="text-primary">success story?</span></h2>
          <Button asChild variant="hero" size="xl" className="mt-6"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button>
        </Reveal>
      </section>

      <NewsletterCta />
      <SiteFooter />
    </main>
  );
}
