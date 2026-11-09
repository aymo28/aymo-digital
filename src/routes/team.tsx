import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { team } from "@/lib/company-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Aymo Digital" },
      { name: "description", content: "Meet the AYMO DIGITAL specialist team — engineers, performance marketers, designers, and creative producers." },
      { property: "og:title", content: "Our Team | Aymo Digital" },
      { property: "og:description", content: "The specialists who plan, build, and grow client revenue at AYMO DIGITAL." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      {/* Back link */}
      <div className="page-shell pt-6">
        <Link
          to="/directors"
          className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-3" /> Meet the Directors
        </Link>
      </div>

      <PageHero
        eyebrow="The Specialist Team"
        title="The people who build and"
        highlight="grow your revenue."
        text="Seven specialists across engineering, performance marketing, design, data, mobile, SEO, and creative production."
      />

      <section className="page-shell grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {team.map((person, index) => (
          <Reveal key={person.name} delay={(index % 4) * 80}>
            <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-soft">
              {/* Avatar */}
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-display font-extrabold text-white shadow-md">
                {person.initials}
              </span>

              {/* Identity */}
              <h2 className="mt-5 font-display text-lg font-extrabold">{person.name}</h2>
              <p className="mt-1 text-xs font-bold text-primary">{person.role}</p>

              {/* Expertise tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {person.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-bold text-indigo-400 ring-1 ring-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{person.bio}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="page-shell pb-16 text-center">
        <Reveal>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Work with AYMO DIGITAL <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
