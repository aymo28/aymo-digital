import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  MessageCircle,
  X,
  ZoomIn,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work & Case Studies | AYMO DIGITAL" },
      { name: "description", content: "Explore completed digital engineering, e-commerce, custom CRM, and customer acquisition projects delivered by AYMO DIGITAL." },
      { property: "og:title", content: "Our Work & Case Studies | AYMO DIGITAL" },
      { property: "og:description", content: "Real business challenges, practical engineering solutions, and verified digital deliverables." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

export type CaseStudy = {
  id: string;
  name: string;
  category: "ecommerce" | "software" | "realestate" | "marketing" | "graphics" | "web";
  categoryLabel: string;
  industry: string;
  image: string;
  imageAlt: string;
  challenge: string;
  whatWeBuilt: string;
  capabilities: string[];
  businessValue: string;
  techStack: string[];
  liveStatus: string;
};

export const portfolioProjects: CaseStudy[] = [
  {
    id: "timera-luxury",
    name: "Timera Luxury Horology",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    industry: "Luxury Retail & Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    imageAlt: "Timera luxury watch showcase and digital store interface",
    challenge:
      "A high-end timepiece brand needed a digital flagship experience matching the craftsmanship of luxury Swiss and Japanese watchmaking. The existing template was slow, lacked mobile finesse, and experienced high checkout abandonment.",
    whatWeBuilt:
      "Engineered a bespoke luxury storefront with custom dark-mode aesthetics, high-resolution macro product inspection, frictionless currency switching, and automated VIP client retention sequences.",
    capabilities: [
      "Custom responsive design system with dark luxury styling",
      "Macro-zoom product gallery with spec comparison",
      "Klaviyo post-purchase and VIP collector sequences",
      "Sub-1.5 second mobile load time across international regions",
    ],
    businessValue:
      "Elevated perceived brand value, increased international checkout completions, and enabled direct concierge orders via WhatsApp integration.",
    techStack: ["Shopify Plus", "Liquid", "Tailwind CSS", "JavaScript", "Klaviyo"],
    liveStatus: "Active Storefront",
  },
  {
    id: "wa-crm-enterprise",
    name: "WhatsApp Enterprise Sales CRM",
    category: "software",
    categoryLabel: "Business Management",
    industry: "B2B Sales & Real Estate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "WhatsApp CRM management portal and customer communication pipeline",
    challenge:
      "A high-volume commercial real estate and service agency was losing dozens of inquiries every week because sales representatives manually shared leads in informal group chats with zero status tracking or accountability.",
    whatWeBuilt:
      "Developed a centralized multi-tenant CRM integrating directly with the official Meta WhatsApp Cloud API. Incoming leads are automatically parsed, qualified, and routed to available sales reps within 30 seconds with automatic follow-up reminders.",
    capabilities: [
      "Official WhatsApp Cloud API bidirectional sync",
      "Automated lead qualification and round-robin agent routing",
      "Kanban deal pipeline tracking with stage transition audit logs",
      "Executive reporting dashboard tracking response time and closure rates",
    ],
    businessValue:
      "Cut average first-response time from 4 hours down to under 2 minutes, preventing lead leakage and giving management 100% visibility over sales pipeline.",
    techStack: ["Node.js", "React", "PostgreSQL", "WhatsApp Cloud API", "Redis", "Docker"],
    liveStatus: "Production Software",
  },
  {
    id: "lumiere-lashes",
    name: "Lumière Beauty & Lashes",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    industry: "Cosmetics & Beauty Retail",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    imageAlt: "Lumière beauty e-commerce storefront and cosmetics catalog",
    challenge:
      "An expanding beauty brand struggled with high paid ad acquisition costs and low repeat order volume. Their mobile storefront took over 4 seconds to load on mobile data, losing customers before they could explore product bundles.",
    whatWeBuilt:
      "Redesigned and rebuilt their storefront around mobile-first conversion principles: instant bundle builders, video testimonial embeds, one-click cart recovery, and targeted Meta Ads acquisition funnels.",
    capabilities: [
      "Dynamic bundle and volume-discount builder",
      "High-speed mobile checkout flow with Apple Pay & Google Pay",
      "Automated SMS and email abandoned cart recovery flows",
      "Audience-segmented Meta Ads creative testing engine",
    ],
    businessValue:
      "Significantly improved mobile conversion rates and recovered an average of 14% of abandoned checkouts automatically every week.",
    techStack: ["Shopify", "Tailwind CSS", "Klaviyo", "Meta Ads Manager", "GA4"],
    liveStatus: "Active Storefront",
  },
  {
    id: "travel-erp-system",
    name: "Travel & Tour Operations ERP",
    category: "software",
    categoryLabel: "Business Management",
    industry: "Travel, Tourism & Hospitality",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    imageAlt: "Travel ERP booking engine and passenger management dashboard",
    challenge:
      "A regional travel management company managed flight reservations, hotel vouchers, and passenger itineraries across disconnected spreadsheets, resulting in frequent booking errors and delayed customer quotes.",
    whatWeBuilt:
      "Engineered an integrated operations ERP combining inventory management, automated quotation generation, passenger visa document storage, and automated invoice PDF creation.",
    capabilities: [
      "Automated passenger booking itinerary builder",
      "Multi-currency costing and margin calculation engine",
      "Role-based staff permissions for agents vs accountants",
      "Automated WhatsApp trip reminders and itinerary sharing",
    ],
    businessValue:
      "Reduced quotation preparation time from 45 minutes down to 3 minutes, while completely eliminating manual data re-entry across booking and billing.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    liveStatus: "Internal Enterprise Portal",
  },
  {
    id: "flavor-intelligence",
    name: "Culinary & Restaurant Intelligence Portal",
    category: "software",
    categoryLabel: "Business Management",
    industry: "Food & Beverage / Hospitality",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    imageAlt: "Restaurant POS analytics and culinary inventory management system",
    challenge:
      "A multi-location culinary brand suffered from food wastage, inconsistent recipe portioning, and delayed end-of-day sales reconciliation across branch POS systems.",
    whatWeBuilt:
      "Built a unified cloud management platform tracking raw material inventory, recipe costings, daily sales reconciliation, and digital QR menu ordering for dine-in patrons.",
    capabilities: [
      "Real-time raw material consumption and re-order alerts",
      "Direct QR code table ordering and kitchen display system (KDS)",
      "Daily automated branch revenue and margin reports",
      "Staff shift scheduling and access role control",
    ],
    businessValue:
      "Reduced ingredient waste by 18% in the first quarter and saved branch managers 2 hours of manual spreadsheet bookkeeping every night.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    liveStatus: "Operational System",
  },
  {
    id: "prime-commercial-funnels",
    name: "Prime Commercial Real Estate Funnels",
    category: "realestate",
    categoryLabel: "Real Estate",
    industry: "Commercial Property",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    imageAlt: "Commercial property development portfolio and investor acquisition portal",
    challenge:
      "A commercial real estate group was generating large quantities of unqualified inquiries through social ads, overloading their sales desk with tire-kickers who lacked verified capital.",
    whatWeBuilt:
      "Designed and deployed interactive investor landing pages featuring multi-step financial qualification questions (investment timeline, capital ready to deploy, preferred yield), routing only verified investors to the senior sales desk.",
    capabilities: [
      "Interactive yield calculator and commercial brochure download gate",
      "Multi-step qualification questionnaire filtering unverified inquiries",
      "Instant automated SMS and WhatsApp calendar booking for viewing calls",
      "Google Search intent campaigns targeting active commercial property investors",
    ],
    businessValue:
      "Reduced wasted sales calls by over 65% while increasing the ratio of booked viewing calls with verified accredited investors.",
    techStack: ["Next.js", "Google Ads", "Meta Ads", "HubSpot", "Zapier"],
    liveStatus: "Client Acquisition Funnel",
  },
];

// ─── Real Portfolio Gallery Images ───────────────────────────────────────────
type GalleryCategory = "web" | "marketing" | "graphics";

type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  label: string;
};

const galleryItems: GalleryItem[] = [
  // Web Design Portfolio
  { src: "/portfolio/web/1.png",  alt: "Website design project 1 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/2.png",  alt: "Website design project 2 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/3.png",  alt: "Website design project 3 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/4.png",  alt: "Website design project 4 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/5.png",  alt: "Website design project 5 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/6.png",  alt: "Website design project 6 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/7.png",  alt: "Website design project 7 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/8.png",  alt: "Website design project 8 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  { src: "/portfolio/web/9.png",  alt: "Website design project 9 by AYMO DIGITAL",  category: "web", label: "Web Design" },
  // Marketing Creatives
  { src: "/portfolio/marketing/1.png",  alt: "Marketing campaign creative 1 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/2.png",  alt: "Marketing campaign creative 2 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/3.png",  alt: "Marketing campaign creative 3 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/4.png",  alt: "Marketing campaign creative 4 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/5.png",  alt: "Marketing campaign creative 5 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/6.png",  alt: "Marketing campaign creative 6 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/7.png",  alt: "Marketing campaign creative 7 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/8.png",  alt: "Marketing campaign creative 8 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/9.png",  alt: "Marketing campaign creative 9 by AYMO DIGITAL",  category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/10.png", alt: "Marketing campaign creative 10 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/11.png", alt: "Marketing campaign creative 11 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/12.png", alt: "Marketing campaign creative 12 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/13.png", alt: "Marketing campaign creative 13 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/14.png", alt: "Marketing campaign creative 14 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/15.png", alt: "Marketing campaign creative 15 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/16.png", alt: "Marketing campaign creative 16 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  { src: "/portfolio/marketing/17.png", alt: "Marketing campaign creative 17 by AYMO DIGITAL", category: "marketing", label: "Marketing" },
  // Graphics & Branding
  { src: "/portfolio/graphics/branding-1.png",    alt: "Brand identity design 1 by AYMO DIGITAL",   category: "graphics", label: "Branding" },
  { src: "/portfolio/graphics/branding-2.png",    alt: "Brand identity design 2 by AYMO DIGITAL",   category: "graphics", label: "Branding" },
  { src: "/portfolio/graphics/branding-3.png",    alt: "Brand identity design 3 by AYMO DIGITAL",   category: "graphics", label: "Branding" },
  { src: "/portfolio/graphics/creatives-1.png",   alt: "Creative design 1 by AYMO DIGITAL",         category: "graphics", label: "Creatives" },
  { src: "/portfolio/graphics/creatives-2.png",   alt: "Creative design 2 by AYMO DIGITAL",         category: "graphics", label: "Creatives" },
  { src: "/portfolio/graphics/c-post-1.png",      alt: "Social media post design 1 by AYMO DIGITAL", category: "graphics", label: "Social Posts" },
  { src: "/portfolio/graphics/c-post-2.png",      alt: "Social media post design 2 by AYMO DIGITAL", category: "graphics", label: "Social Posts" },
  { src: "/portfolio/graphics/logofolio-1.png",   alt: "Logo design portfolio by AYMO DIGITAL",     category: "graphics", label: "Logofolio" },
  { src: "/portfolio/graphics/presentation-1.png", alt: "Presentation design 1 by AYMO DIGITAL",   category: "graphics", label: "Presentations" },
  { src: "/portfolio/graphics/presentation-2.png", alt: "Presentation design 2 by AYMO DIGITAL",   category: "graphics", label: "Presentations" },
  { src: "/portfolio/graphics/presentation-3.png", alt: "Presentation design 3 by AYMO DIGITAL",   category: "graphics", label: "Presentations" },
  { src: "/portfolio/graphics/graphics-1st-page.png", alt: "AYMO DIGITAL graphics portfolio cover", category: "graphics", label: "Graphics" },
];

// ─── Lightbox Component ───────────────────────────────────────────────────────
function Lightbox({ item, onClose, onPrev, onNext }: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X className="size-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl font-bold"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl font-bold"
        aria-label="Next"
      >
        ›
      </button>
      <div
        className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[88vh] max-w-[88vw] object-contain shadow-2xl"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
          <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-white">
            {item.label}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Portfolio Gallery Section ────────────────────────────────────────────────
function PortfolioGallery() {
  const [galleryFilter, setGalleryFilter] = useState<"all" | GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryFilter === "all"
    ? galleryItems
    : galleryItems.filter((g) => g.category === galleryFilter);

  const openLightbox = (indexInFiltered: number) => setLightboxIndex(indexInFiltered);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + filtered.length) % filtered.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length));

  return (
    <section className="page-shell py-20">
      {/* Section Header */}
      <Reveal className="mx-auto mb-10 max-w-2xl text-center">
        <p className="eyebrow">Creative Portfolio</p>
        <h2 className="section-title">
          Real Work. <span>Real Results.</span>
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          A selection of website designs, marketing creatives, branding systems, and graphic design work delivered for our clients.
        </p>
      </Reveal>

      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {([
          { key: "all",       label: `All (${galleryItems.length})` },
          { key: "web",       label: `Web Design (${galleryItems.filter(g => g.category === "web").length})` },
          { key: "marketing", label: `Marketing (${galleryItems.filter(g => g.category === "marketing").length})` },
          { key: "graphics",  label: `Graphics & Branding (${galleryItems.filter(g => g.category === "graphics").length})` },
        ] as const).map(({ key, label }) => (
          <Button
            key={key}
            type="button"
            size="sm"
            variant={galleryFilter === key ? "default" : "outline"}
            onClick={() => setGalleryFilter(key)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {filtered.map((item, idx) => (
          <Reveal key={item.src} delay={(idx % 4) * 60}>
            <button
              type="button"
              className="group relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-primary"
              onClick={() => openLightbox(idx)}
              aria-label={`View ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/55 group-hover:opacity-100">
                <ZoomIn className="size-7 text-white drop-shadow-lg" />
                <span className="rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold text-white">
                  {item.label}
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}


function WorkPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === filter);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Our Work & Capabilities"
        title="Real Business Challenges."
        highlight="Practical Deliverables."
        text="Every system we design, build, or market starts with a commercial objective. Here is how we help businesses streamline operations, launch high-conversion platforms, and acquire paying customers."
      />

      {/* ── Filter Bar ── */}
      <section className="border-b border-border bg-card py-6">
        <div className="page-shell flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
              <Filter className="size-3.5" /> Category:
            </span>
            <Button
              type="button"
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Projects ({portfolioProjects.length})
            </Button>
            <Button
              type="button"
              size="sm"
              variant={filter === "ecommerce" ? "default" : "outline"}
              onClick={() => setFilter("ecommerce")}
            >
              E-Commerce ({portfolioProjects.filter((p) => p.category === "ecommerce").length})
            </Button>
            <Button
              type="button"
              size="sm"
              variant={filter === "software" ? "default" : "outline"}
              onClick={() => setFilter("software")}
            >
              Business Software &amp; CRM ({portfolioProjects.filter((p) => p.category === "software").length})
            </Button>
            <Button
              type="button"
              size="sm"
              variant={filter === "realestate" ? "default" : "outline"}
              onClick={() => setFilter("realestate")}
            >
              Real Estate &amp; Funnels ({portfolioProjects.filter((p) => p.category === "realestate").length})
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Showing <strong className="text-foreground">{filtered.length}</strong> verified project case studies
          </p>
        </div>
      </section>

      {/* ── Case Studies Grid ── */}
      <section className="page-shell space-y-16 py-16">
        {filtered.map((study, index) => (
          <Reveal key={study.id}>
            <article className={`grid gap-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:grid-cols-[1.1fr_1fr] ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              {/* Image & Status */}
              <div className="relative min-h-[300px] overflow-hidden bg-muted [direction:ltr] lg:min-h-[440px]">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">
                    {study.industry}
                  </span>
                  <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                    ✓ {study.liveStatus}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-8 [direction:ltr] sm:p-10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  {study.categoryLabel} Case Study
                </span>
                <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                  {study.name}
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      The Business Challenge:
                    </h3>
                    <p className="mt-1 text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      What AYMO DIGITAL Delivered:
                    </h3>
                    <p className="mt-1 font-medium text-foreground">{study.whatWeBuilt}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                    Key Capabilities Delivered:
                  </h3>
                  <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                    {study.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Commercial Value Created</p>
                  <p className="mt-1 text-xs leading-5 text-foreground">{study.businessValue}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-4">
                  <span className="text-[11px] font-bold text-muted-foreground mr-1">Stack:</span>
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <Link to="/contact">
                      Build Something Like This <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href={`https://wa.me/923173712950?text=${encodeURIComponent(`Hi Moez, I saw the ${study.name} case study and want to discuss a similar project.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inquire on WhatsApp <MessageCircle className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* ── Real Creative Portfolio Gallery ── */}
      <PortfolioGallery />

      {/* ── Client Partnership Standards ── */}
      <section className="border-y border-border bg-muted/40 py-20">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Delivery Standards</p>
            <h2 className="section-title">
              What it feels like to <span>partner with AYMO DIGITAL.</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              We hold ourselves to strict operational standards on every engagement.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Weekly Sprint Visibility",
                body: "You receive a clear breakdown of delivered code, active ad sets, and next week's sprint goals every Monday. No mystery and no radio silence.",
              },
              {
                title: "Complete Code & Account Ownership",
                body: "All GitHub repositories, domain records, ad accounts, and databases are created in your company's name. You always own 100% of your assets.",
              },
              {
                title: "Direct Founder Access",
                body: "Moez Rehman and Malaika Jahangir remain your primary strategic contacts from discovery to deployment and post-launch optimization.",
              },
            ].map((std, i) => (
              <Reveal key={std.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-soft">
                  <span className="font-display text-sm font-extrabold text-primary">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold">{std.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{std.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="max-w-xl font-display text-3xl font-extrabold sm:text-4xl">
            Have a project in mind for <span className="text-highlight">your business?</span>
          </h2>
          <p className="max-w-md text-sm leading-6 text-results-muted">
            Share your goals and requirements. We'll provide a frank assessment of viability, scope, timelines, and costs.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="results" size="lg">
              <Link to="/contact">
                Talk About Your Project <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%20have%20a%20new%20project%20I%27d%20like%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us Directly <MessageCircle className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
