import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Filter, MessageCircle, Sparkles, TrendingUp, Users, Cpu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { services, type Service, type ServiceCategory } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Business Growth & Digital Engineering Services | AYMO DIGITAL" },
      { name: "description", content: "Explore practical digital solutions designed to attract more customers, increase sales, and run your business better. Web development, software, AI automation, and performance marketing." },
      { property: "og:title", content: "Business Growth & Digital Engineering Services | AYMO DIGITAL" },
      { property: "og:description", content: "Practical digital solutions designed to attract more customers, increase sales, and run your business better." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const categoryDescriptions: Record<ServiceCategory, { title: string; subtitle: string; icon: typeof Users }> = {
  "get-customers": {
    title: "Get More Customers",
    subtitle: "Search optimization, targeted paid advertising, and brand positioning that connect you with motivated buyers.",
    icon: Users,
  },
  "increase-sales": {
    title: "Increase Your Sales",
    subtitle: "Conversion-focused web platforms, retention automation, and e-commerce architectures that turn interest into revenue.",
    icon: TrendingUp,
  },
  "run-better": {
    title: "Run Your Business Better",
    subtitle: "Custom business software, mobile applications, and AI workflows that eliminate manual work and simplify management.",
    icon: Cpu,
  },
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold text-primary backdrop-blur-md">
          {service.categoryName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {service.title}
        </span>
        <h3 className="mt-2 font-display text-xl font-extrabold leading-snug text-foreground group-hover:text-primary transition-colors">
          {service.headline}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {service.summary}
        </p>

        {/* Benefits bullets */}
        <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/80">Key Business Value</p>
          {service.customerBenefits.slice(0, 3).map((benefit) => (
            <div key={benefit} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
          <span className="text-muted-foreground">
            From <strong className="font-display font-extrabold text-foreground">{service.pricing[0]?.price}</strong>
          </span>
          <span className="text-muted-foreground">
            Turnaround: <strong className="text-foreground">{service.turnaround.split(" ")[0]}</strong>
          </span>
        </div>

        <div className="mt-5 flex gap-2 pt-2">
          <Button asChild variant="hero" className="flex-1">
            <Link to="/services/$service" params={{ service: service.slug }}>
              Explore Solution <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label={`Chat about ${service.title} on WhatsApp`}>
            <a
              href={`https://wa.me/923173712950?text=${encodeURIComponent(`Hi Aymo Digital, I would like to discuss ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Practical Digital Solutions"
        title="We Help Your Business"
        highlight="Grow."
        text="Technology and marketing are our delivery methods. Business improvement is the value we sell. Explore our 9 specialized capabilities organized around your core commercial objectives."
      />

      {/* ── Category Highlights ── */}
      <section className="border-b border-border bg-card py-12">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {(["get-customers", "increase-sales", "run-better"] as ServiceCategory[]).map((catKey) => {
              const cat = categoryDescriptions[catKey];
              const Icon = cat.icon;
              const isSelected = activeCategory === catKey;
              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setActiveCategory(activeCategory === catKey ? "all" : catKey)}
                  className={`flex flex-col text-left rounded-xl border p-6 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-md"
                      : "border-border bg-background hover:border-primary/40 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {services.filter((s) => s.category === catKey).length} Solutions
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-lg font-extrabold">{cat.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{cat.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-border/60 pt-6">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
              <Filter className="size-3.5" /> Filter:
            </span>
            <Button
              type="button"
              size="sm"
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
            >
              All 9 Solutions
            </Button>
            <Button
              type="button"
              size="sm"
              variant={activeCategory === "get-customers" ? "default" : "outline"}
              onClick={() => setActiveCategory("get-customers")}
            >
              Get More Customers ({services.filter((s) => s.category === "get-customers").length})
            </Button>
            <Button
              type="button"
              size="sm"
              variant={activeCategory === "increase-sales" ? "default" : "outline"}
              onClick={() => setActiveCategory("increase-sales")}
            >
              Increase Your Sales ({services.filter((s) => s.category === "increase-sales").length})
            </Button>
            <Button
              type="button"
              size="sm"
              variant={activeCategory === "run-better" ? "default" : "outline"}
              onClick={() => setActiveCategory("run-better")}
            >
              Run Your Business Better ({services.filter((s) => s.category === "run-better").length})
            </Button>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="page-shell py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Why Technology + Marketing Under One Roof ── */}
      <section className="border-y border-border bg-muted/40 py-20">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The AYMO DIGITAL Advantage</p>
            <h2 className="section-title">
              Why having marketing and technology <span>under one roof matters.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Most marketing agencies cannot fix your code or build internal software. Most software developers do not understand how to convert visitors or write compelling commercial copy. AYMO DIGITAL brings both together so you have one accountable partner.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "No Blame Shifting",
                desc: "When campaigns and landing pages are built by the same team, you never hear developers blame marketers or marketers blame developers. We take unified responsibility for results.",
              },
              {
                title: "Faster Time to Market",
                desc: "We don't wait weeks for an external technical contractor to install a tracking pixel or fix a checkout bug. Our software engineers and media buyers work side by side daily.",
              },
              {
                title: "Built for Business ROI",
                desc: "We don't build software as an academic exercise, nor do we run ads for vanity impressions. Every piece of code and every ad pound has one job: driving verified business growth.",
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-soft">
                  <span className="font-display text-sm font-extrabold text-primary">0{idx + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free Consultation CTA Strip ── */}
      <section className="bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-highlight">Next Step</p>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Not sure which solution fits your business right now?
          </h2>
          <p className="max-w-md text-sm leading-6 text-results-muted">
            Tell us about your current bottlenecks. We&apos;ll assess your goals and recommend the highest-leverage starting point for your budget.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="results" size="lg">
              <Link to="/contact">
                Talk About Your Business <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%20would%20like%20a%20free%20growth%20consultation."
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
