import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { directors } from "@/lib/company-data";

export const Route = createFileRoute("/directors")({
  head: () => ({
    meta: [
      { title: "Company Leadership & Directors | AYMO DIGITAL" },
      { name: "description", content: "Meet Moez Rehman (Founder & Managing Director) and Malaika Jahangir (Co-Founder & Creative Director) — the leadership accountable for every client engagement." },
      { property: "og:title", content: "Company Leadership & Directors | AYMO DIGITAL" },
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
        eyebrow="Company Leadership"
        title="Meet the Directors of"
        highlight="AYMO DIGITAL."
        text="Two founders with personal, direct accountability for every client engagement — from growth architecture and full-stack software to cinema-grade creative direction."
      />

      <section className="page-shell grid gap-8 py-20 lg:grid-cols-2">
        {directors.map((person, index) => {
          const firstName = person.name.split(" ")[0];
          return (
            <Reveal key={person.name} delay={index * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-10">
                {/* Avatar + identity */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted shadow-md">
                    <img
                      src={person.image}
                      alt={person.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-2xl font-extrabold text-white">
                      {person.initials}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">{person.name}</h2>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mt-1">
                      {person.role}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3 text-primary" /> {person.location}
                      </span>
                      <span>&bull;</span>
                      <span className="font-medium text-foreground">{person.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <p className="mt-6 text-sm leading-7 text-muted-foreground">{person.overview}</p>

                {/* Responsibilities */}
                <div className="mt-6 border-t border-border/60 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Core Strategic Responsibilities
                  </h3>
                  <ul className="mt-3 grid gap-2">
                    {person.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Personal message */}
                <blockquote className="mt-6 border-l-2 border-primary/60 pl-4 py-1 italic bg-muted/30 rounded-r-lg p-3">
                  <p className="text-xs leading-6 text-foreground">&ldquo;{person.personalMessage}&rdquo;</p>
                </blockquote>

                {/* WhatsApp CTA */}
                <div className="mt-8 pt-2">
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <a
                      href={person.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="size-4" />
                      Chat with {firstName} on WhatsApp <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      {/* Cross link to specialist team */}
      <section className="border-t border-border bg-muted/30 py-16 text-center">
        <Reveal className="page-shell">
          <p className="text-sm text-muted-foreground">
            Supported by our full-time engineering, media buying, and design studio.
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/team">
              Meet the 7 Full-Time Specialists <ArrowRight className="size-4 ml-1" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
