import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, HeartHandshake, Lightbulb, MousePointerClick, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterCta, PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Aymo Digital Agency" },
      { name: "description", content: "Meet the team behind Aymo Digital — a digital growth agency built on clarity, accountability and senior thinking." },
      { property: "og:title", content: "About Us | Aymo Digital Agency" },
      { property: "og:description", content: "A digital growth agency built on clarity, accountability and senior thinking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, title: "Clarity before activity", text: "Every channel and campaign begins with a clear reason to exist." },
  { icon: ShieldCheck, title: "Accountability always", text: "Clear reporting and honest conversations, even when the numbers are hard." },
  { icon: Zap, title: "Built to move quickly", text: "Focused decisions and direct feedback keep good ideas moving forward." },
  { icon: MousePointerClick, title: "Creative that converts", text: "Strong visuals paired with a practical path to action." },
  { icon: HeartHandshake, title: "Partnership, not vendor-ship", text: "We win when your business wins — that shapes every recommendation." },
  { icon: Eye, title: "No vanity metrics", text: "We measure what moves revenue, not what looks good in a slide deck." },
];

const team = [
  { name: "Taha Ahmed", role: "Founder & Strategy Lead", initials: "TA" },
  { name: "Hira Siddiqui", role: "Head of Creative", initials: "HS" },
  { name: "Usman Farooq", role: "Performance Marketing Lead", initials: "UF" },
  { name: "Mahnoor Ali", role: "Content & SEO Lead", initials: "MA" },
];

const milestones = [
  { year: "2021", text: "Founded in Karachi with a two-person team and one belief: marketing should be accountable." },
  { year: "2022", text: "Crossed 50 client projects and grew into a full-service team across strategy, creative and media." },
  { year: "2024", text: "Launched our performance practice, managing campaigns for brands across Pakistan and the Gulf." },
  { year: "2026", text: "250+ projects delivered, with a 98% client satisfaction rate and a growing senior team." },
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="About us"
        title="Senior thinking, without the"
        highlight="agency runaround."
        text="Aymo Digital is a digital growth agency in Karachi. We give ambitious businesses direct access to people who care about the commercial outcome."
      />

      <section className="page-shell py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we stand for</p>
          <h2 className="section-title">The values behind <span>every campaign.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={(index % 3) * 100}>
              <article className="insight-card h-full rounded-lg border border-border bg-card p-7 shadow-soft">
                <span className="value-icon"><Icon className="size-5" /></span>
                <h3 className="mt-5 font-display text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="page-shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">From a small desk in Karachi to a <span>growth partner.</span></h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">We started Aymo Digital because too many businesses were paying for activity instead of outcomes. Today we combine strategy, creative and performance under one roof — with the same belief we began with.</p>
            <Button asChild variant="hero" className="mt-7"><Link to="/work">See the results <ArrowRight /></Link></Button>
          </Reveal>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 100} className="flex gap-5 border-b border-border pb-6">
                <span className="font-display text-2xl font-extrabold text-primary">{milestone.year}</span>
                <p className="text-sm leading-6 text-muted-foreground">{milestone.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The team</p>
          <h2 className="section-title">The people behind <span>the work.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 100}>
              <article className="insight-card rounded-lg border border-border bg-card p-7 text-center shadow-soft">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary font-display text-lg font-extrabold text-primary">{member.initials}</span>
                <h3 className="mt-5 font-display text-base font-extrabold">{member.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight">Want to work with a team that <span className="text-highlight">treats your growth as its own?</span></h2>
          <Button asChild variant="results" size="lg"><Link to="/contact">Let&apos;s talk <ArrowRight /></Link></Button>
        </Reveal>
      </section>

      <NewsletterCta />
      <SiteFooter />
    </main>
  );
}
