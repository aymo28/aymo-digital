import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { directors } from "@/lib/company-data";

export const Route = createFileRoute("/directors")({
  head: () => ({
    meta: [
      { title: "Directors | Aymo Digital" },
      { name: "description", content: "Meet Moez Rehman and Malaika Jahangir, the directors of AYMO DIGITAL." },
      { property: "og:title", content: "Directors | Aymo Digital" },
      { property: "og:description", content: "Meet the leadership responsible for strategy, delivery and creative direction at AYMO DIGITAL." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/directors" }],
  }),
  component: DirectorsPage,
});

function DirectorsPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Leadership"
        title="Meet the Directors of"
        highlight="AYMO DIGITAL."
        text="Two founders with direct accountability for every client engagement — strategy, creative, and results."
      />

      <section className="page-shell grid gap-8 py-20 lg:grid-cols-2">
        {directors.map((person, index) => {
          const firstName = person.name.split(" ")[0];
          return (
            <Reveal key={person.name} delay={index * 120}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-soft">
                {/* Avatar + identity */}
                <div className="flex items-center gap-5">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-lg font-extrabold text-white shadow-lg">
                    {person.initials}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold">{person.name}</h2>
                    <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                      {person.role}
                    </span>
                  </div>
                </div>

                {/* Overview */}
                <p className="mt-6 text-sm leading-7 text-muted-foreground">{person.overview}</p>

                {/* Responsibilities */}
                <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wider text-foreground/70">
                  Areas of Responsibility
                </h3>
                <ul className="mt-3 grid gap-2">
                  {person.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Personal message */}
                <blockquote className="mt-6 border-l-4 border-indigo-500 pl-4">
                  <p className="text-sm italic leading-7 text-muted-foreground">"{person.personalMessage}"</p>
                </blockquote>

                {/* WhatsApp CTA */}
                <div className="mt-8">
                  <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                    <a
                      href={person.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="size-4" />
                      Chat with {firstName} <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="page-shell pb-20 text-center">
        <Reveal>
          <p className="text-sm text-muted-foreground">
            Want to see the full team behind the work?
          </p>
          <Link
            to="/team"
            className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Meet the full specialist team <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
