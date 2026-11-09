import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { team, directors } from "@/lib/company-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Specialist Team | AYMO DIGITAL" },
      { name: "description", content: "Meet the senior engineers, performance marketers, product designers, and creative directors who build and scale client systems at AYMO DIGITAL." },
      { property: "og:title", content: "Our Specialist Team | AYMO DIGITAL" },
      { property: "og:description", content: "Seven full-time specialists executing full-stack software, paid media, UI/UX design, mobile architecture, SEO, and video creative." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  const [selectedDept, setSelectedDept] = useState<string>("all");

  const filteredTeam = selectedDept === "all"
    ? team
    : team.filter((m) => m.department.toLowerCase() === selectedDept.toLowerCase());

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Specialist Delivery Team"
        title="The Practitioners Who Build &amp;"
        highlight="Scale Your Systems."
        text="No junior agency handoffs. Seven senior specialists across full-stack engineering, performance media, UI/UX design, analytics, mobile architecture, technical SEO, and creative production."
      />

      {/* Directors Quick Banner */}
      <section className="border-b border-border bg-card py-6">
        <div className="page-shell flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-foreground">Strategic Leadership</p>
              <p className="text-xs text-muted-foreground">Led directly by Founders Moez Rehman &amp; Malaika Jahangir</p>
            </div>
          </div>

          <Button asChild variant="outline" size="sm">
            <Link to="/directors">
              Meet the Directors <ArrowRight className="size-3.5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Department Filter Tabs */}
      <section className="page-shell pt-12">
        <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
            Department:
          </span>
          <Button
            type="button"
            size="sm"
            variant={selectedDept === "all" ? "default" : "outline"}
            onClick={() => setSelectedDept("all")}
          >
            All Specialists ({team.length})
          </Button>
          <Button
            type="button"
            size="sm"
            variant={selectedDept === "engineering" ? "default" : "outline"}
            onClick={() => setSelectedDept("engineering")}
          >
            Engineering ({team.filter((m) => m.department === "Engineering").length})
          </Button>
          <Button
            type="button"
            size="sm"
            variant={selectedDept === "growth" ? "default" : "outline"}
            onClick={() => setSelectedDept("growth")}
          >
            Performance Growth ({team.filter((m) => m.department === "Growth").length})
          </Button>
          <Button
            type="button"
            size="sm"
            variant={selectedDept === "design" ? "default" : "outline"}
            onClick={() => setSelectedDept("design")}
          >
            UI/UX Design ({team.filter((m) => m.department === "Design").length})
          </Button>
          <Button
            type="button"
            size="sm"
            variant={selectedDept === "creative" ? "default" : "outline"}
            onClick={() => setSelectedDept("creative")}
          >
            Creative &amp; Motion ({team.filter((m) => m.department === "Creative").length})
          </Button>
        </div>
      </section>

      {/* Specialist Team Grid */}
      <section className="page-shell py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTeam.map((person, index) => (
            <Reveal key={person.name} delay={(index % 4) * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                {/* Photo & Badge */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                  <img
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-3xl font-extrabold text-white">
                    {person.initials}
                  </div>
                  <span className="absolute top-2.5 right-2.5 rounded-full bg-background/90 px-2.5 py-0.5 text-[10px] font-bold text-primary backdrop-blur-md">
                    {person.department}
                  </span>
                </div>

                {/* Identity */}
                <div className="mt-5">
                  <h3 className="font-display text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-xs font-bold text-primary mt-0.5">{person.role}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{person.experience}</p>
                </div>

                {/* Bio */}
                <p className="mt-4 text-xs leading-5 text-muted-foreground">
                  {person.bio}
                </p>

                {/* Expertise tags */}
                <div className="mt-auto pt-5 border-t border-border/60">
                  <div className="flex flex-wrap gap-1">
                    {person.expertise.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-results text-results-foreground py-20 mt-8">
        <Reveal className="page-shell flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-xl font-display text-3xl font-extrabold sm:text-4xl">
            Want this team working on <span className="text-highlight">your business?</span>
          </h2>
          <p className="max-w-md text-sm leading-6 text-results-muted">
            Tell us about your goals. Moez and Malaika will review your setup with our team and propose a practical roadmap.
          </p>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="results" size="lg">
              <Link to="/contact">
                Talk About Your Business <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%20would%20like%20to%20work%20with%20your%20specialist%20team."
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
