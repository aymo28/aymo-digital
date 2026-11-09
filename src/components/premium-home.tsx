import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bookmark,
  Check,
  CircleDollarSign,
  Code2,
  Cpu,
  FileCode2,
  Globe,
  Heart,
  Mail,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import heroImage from "@/assets/agency-hero.jpg";
import { Button } from "@/components/ui/button";
import { HeroAudit } from "@/components/hero-audit";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

// ─── Typewriter hook ────────────────────────────────────────────────────────
function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const word = words[wordIndex] ?? "";
    const complete = text === word;
    const empty = text.length === 0;
    const delay = complete && !deleting ? 1450 : deleting ? 55 : 90;
    const timer = window.setTimeout(() => {
      if (complete && !deleting) setDeleting(true);
      else if (empty && deleting) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return text;
}

// ─── Hero Dashboard (desktop only) ──────────────────────────────────────────
function HeroDashboard() {
  const frame = useRef<HTMLDivElement>(null);
  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.current?.style.setProperty("--parallax-x", `${x * 8}px`);
    frame.current?.style.setProperty("--parallax-y", `${y * 8}px`);
  };
  return (
    <div
      className="hero-dashboard hidden md:flex"
      onMouseMove={move}
      onMouseLeave={() => {
        frame.current?.style.setProperty("--parallax-x", "0px");
        frame.current?.style.setProperty("--parallax-y", "0px");
      }}
    >
      <div ref={frame} className="hero-dashboard-frame">
        <div className="hero-portrait">
          <img src={heroImage} alt="Digital campaign command centre" width={1280} height={1024} />
          <div className="hero-portrait-shade" />
          <div className="hero-core-copy"><span>Live growth view</span><strong>Campaign command centre</strong></div>
        </div>
        <div className="dashboard-card dashboard-card-meta">
          <div className="dashboard-card-top"><span className="platform-dot platform-dot-meta" />META ADS <span className="trend-positive">+127%</span></div>
          <span className="metric-label-dark">Campaign performance</span><strong>5.8x <small>ROAS</small></strong>
        </div>
        <div className="dashboard-card dashboard-card-google">
          <div className="dashboard-card-top"><span className="platform-dot platform-dot-google" />GOOGLE ADS</div>
          <div className="metric-pair"><span><small>Conversions</small><strong>+84%</strong></span><span><small>Cost / lead</small><strong className="trend-positive">-32%</strong></span></div>
        </div>
        <div className="dashboard-card dashboard-card-revenue">
          <div className="dashboard-card-top"><CircleDollarSign className="size-4 text-success" /> REVENUE</div>
          <strong>$48,920</strong><span className="trend-positive">↑ 120%</span>
        </div>
        <div className="dashboard-card dashboard-card-leads">
          <div className="dashboard-card-top"><Users className="size-4 text-electric" /> LEADS</div>
          <strong>2,840</strong><span className="trend-positive">↑ 94%</span>
        </div>
      </div>
    </div>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
const marqueeItemsTech = [
  "Meta Ads", "Google Ads", "Next.js", "React", "Flutter", "Node.js",
  "Shopify Plus", "PostgreSQL", "Python", "AWS Cloud", "Klaviyo", "HubSpot",
];
const marqueeItemsRights = [
  "100% Account Ownership", "Zero Lock-in Contracts", "Zero Markups on Ad Spend",
  "Weekly Transparent Sprints", "Direct Access to Founders & Lead Engineers", "Live Analytics Dashboard",
];

function Marquee({ items, id }: { items: string[]; id: string }) {
  const list = [...items, ...items];
  return (
    <section className="marquee-container" aria-label={id}>
      <div className="marquee-inner">
        {list.map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            style={{ display: "inline-flex", alignItems: "center", padding: "0.85rem 1.25rem", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--color-footer-foreground)" }}
          >
            {item}
            {index < list.length - 1 && (
              <span style={{ width: ".35rem", height: ".35rem", borderRadius: "999px", background: "var(--color-electric)", boxShadow: "0 0 12px var(--color-electric)", marginLeft: "1.25rem" }} aria-hidden="true" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Revenue Pillar ──────────────────────────────────────────────────────────
const badItems = [
  "Cheap boost buttons and generic lead forms",
  "Thousands of junk clicks from uninterested buyers",
  "Leads saying \"I clicked by accident\"",
  "No accountability — just monthly PDF reports",
  "Your ad accounts locked to their agency login",
];
const goodItems = [
  "Custom high-speed landing pages with multi-step qualifying questions (Budget, Timeline, Intent)",
  "OTP verification & spam honeypots to filter fake leads",
  "Hot inquiries routed to your sales manager's phone within 60 seconds via WhatsApp & CRM",
  "100% account ownership — you always keep access",
  "Weekly sprint reports with real conversion data",
];

function RevenuePillar() {
  return (
    <section className="section-band" id="why-us">
      <div className="page-shell py-20">
        <Reveal className="section-heading mx-auto mb-12 text-center" style={{ maxWidth: "44rem" }}>
          <p className="eyebrow">The Real Difference</p>
          <h2 className="section-title">
            Why Most Marketing Fails{" "}
            <span>(And How We Engineer Real Revenue)</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Address the #1 fear of every business owner investing in marketing.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="pillar-card pillar-card-bad h-full">
              <p className="mb-4 font-display text-lg font-extrabold">❌ The Typical Agency Trap</p>
              <ul className="grid gap-3">
                {badItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="pillar-card pillar-card-good h-full">
              <p className="mb-4 font-display text-lg font-extrabold">✅ The Aymo Digital Qualified Funnel</p>
              <ul className="grid gap-3">
                {goodItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Service Post (Instagram style) ──────────────────────────────────────────
type ServiceDef = {
  icon: Icon;
  slug: string;
  title: string;
  tagline: string;
  description: string;
};

const allServices: ServiceDef[] = [
  {
    icon: Globe,
    slug: "web-development",
    title: "Custom Web Platforms",
    tagline: "High-speed Jamstack & Next.js",
    description: "Lightning-fast websites, headless CMS, custom animations and ultra-high-converting landing pages built for growth.",
  },
  {
    icon: Smartphone,
    slug: "app-development",
    title: "Mobile App Development",
    tagline: "Flutter & React Native",
    description: "Native-feel iOS & Android apps with offline-first syncing, payment gateways and push notifications.",
  },
  {
    icon: Code2,
    slug: "software-development",
    title: "Custom Software & Portals",
    tagline: "Bespoke CRMs & Integrations",
    description: "Bespoke lead routing engines, automated client onboarding portals and custom API integrations.",
  },
  {
    icon: Megaphone,
    slug: "paid-advertising",
    title: "Performance Paid Advertising",
    tagline: "Meta Ads • Google Ads • TikTok",
    description: "High-ROAS Meta, Google and TikTok campaigns with precision audience qualification and real conversion data.",
  },
  {
    icon: Search,
    slug: "seo",
    title: "Technical & Programmatic SEO",
    tagline: "Core Web Vitals • Local & National",
    description: "Core Web Vitals optimisation, programmatic landing pages, high-authority backlinks and local Google domination.",
  },
  {
    icon: Share2,
    slug: "social-media-marketing",
    title: "Social Media & Creative Direction",
    tagline: "High-hook Short-form & Reels",
    description: "Cinema-grade creative direction, viral reels and platform-native social proof campaigns that build real audiences.",
  },
  {
    icon: PenTool,
    slug: "content-marketing",
    title: "Content Marketing & Brand Systems",
    tagline: "Editorial • Messaging • SEO Content",
    description: "Brand messaging guides, SEO content calendars and sales assets that attract and close high-ticket buyers.",
  },
  {
    icon: Mail,
    slug: "email-marketing",
    title: "Retention Systems & Email Automation",
    tagline: "Klaviyo • HubSpot • Custom Flows",
    description: "Lifecycle journeys and automated retention campaigns that turn subscribers into loyal, repeat-buying customers.",
  },
];

function ServicePostCard({
  service,
  index,
  active,
  onActivate,
}: {
  service: ServiceDef;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const Icon = service.icon;

  return (
    <article
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`service-post ${active ? "active" : ""}`}
    >
      <header className="service-post-header">
        <span className="service-post-avatar">
          <Icon className="size-3.5" />
        </span>
        <span>
          <strong>Aymo Digital</strong>
          <small>Service {String(index + 1).padStart(2, "0")}</small>
        </span>
        <span className="service-post-index">{String(index + 1).padStart(2, "0")}</span>
      </header>

      <Link
        to="/services/$service"
        params={{ service: service.slug }}
        className="service-post-visual block"
        aria-label={service.title}
      >
        <Icon style={{ width: "2.8rem", height: "2.8rem", color: "var(--color-electric)" }} />
        <span>{service.title}</span>
        <span style={{ fontSize: ".7rem", color: "var(--color-muted-foreground)", fontWeight: 700 }}>
          {service.tagline}
        </span>
      </Link>

      <div className="service-post-actions">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={liked ? `Unlike ${service.title}` : `Like ${service.title}`}
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
        >
          <Heart className={liked ? "fill-current text-primary" : ""} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`Comment on ${service.title}`}
          aria-expanded={commenting}
          onClick={() => setCommenting((v) => !v)}
        >
          <MessageCircle />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-auto"
          aria-label={saved ? `Remove ${service.title} from saved` : `Save ${service.title}`}
          aria-pressed={saved}
          onClick={() => setSaved((v) => !v)}
        >
          <Bookmark className={saved ? "fill-current text-primary" : ""} />
        </Button>
      </div>

      <div className="service-post-caption">
        <strong>{liked ? "1 like" : "Show some love"}</strong>
        <p>
          <b>Aymo Digital</b> {service.description}
        </p>
        {comments.map((c, i) => (
          <p key={`${c}-${i}`}>
            <b>You</b> {c}
          </p>
        ))}
        <Link
          className="arrow-link mt-3"
          to="/services/$service"
          params={{ service: service.slug }}
        >
          View Complete Scope <ArrowRight className="size-3" />
        </Link>
      </div>

      {commenting && (
        <form
          className="service-post-comment"
          onSubmit={(e) => {
            e.preventDefault();
            const val = comment.trim();
            if (!val) return;
            setComments((prev) => [...prev, val]);
            setComment("");
          }}
        >
          <label className="sr-only" htmlFor={`svc-comment-${index}`}>
            Add a comment
          </label>
          <input
            id={`svc-comment-${index}`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment…"
          />
          <Button type="submit" variant="ghost" size="sm" disabled={!comment.trim()}>
            Post
          </Button>
        </form>
      )}
    </article>
  );
}

function ServicesSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="section-band">
      <div className="page-shell py-24">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="section-heading text-left">
            <p className="eyebrow">What we build & run</p>
            <h2 className="section-title">
              Eight services. <span>One revenue engine.</span>
            </h2>
          </div>
          <Link to="/services" className="arrow-link">
            Explore all services <ArrowRight />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allServices.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 4) * 70}>
              <ServicePostCard
                service={service}
                index={index}
                active={active === index}
                onActivate={() => setActive(index)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 30-Day Blueprint Timeline ───────────────────────────────────────────────
const timelineSteps = [
  {
    icon: Search as Icon,
    week: "Week 1",
    title: "Audit & Infrastructure",
    bullets: [
      "Deep code & ad account audit",
      "Tracking pixel installation",
      "Competitor breakdown",
      "Performance baseline report",
    ],
  },
  {
    icon: Cpu as Icon,
    week: "Week 2",
    title: "Creative & Funnel Architecture",
    bullets: [
      "Landing pages built",
      "Video hooks scripted and shot",
      "Lead qualifying filter installed",
      "CRM routing configured",
    ],
  },
  {
    icon: Rocket as Icon,
    week: "Week 3",
    title: "Live Launch",
    bullets: [
      "Campaigns deployed to production",
      "Code pushed live",
      "Live analytics dashboard shared with client",
    ],
  },
  {
    icon: TrendingUp as Icon,
    week: "Week 4",
    title: "Data Sprint & Scale",
    bullets: [
      "First sprint retrospective",
      "Kill losing ad sets, double-down on winners",
      "Present Month 2 growth roadmap",
    ],
  },
];

function BlueprintTimeline() {
  return (
    <section className="section-band section-band-soft">
      <div className="page-shell py-24">
        <Reveal className="section-heading mx-auto mb-14 text-center" style={{ maxWidth: "42rem" }}>
          <p className="eyebrow">Transparent Process</p>
          <h2 className="section-title">
            Your First 30 Days <span>With Aymo Digital</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            A transparent blueprint of exactly what we do in your first month.
          </p>
        </Reveal>
        <div style={{ maxWidth: "44rem", margin: "0 auto" }}>
          {timelineSteps.map(({ icon: Icon, week, title, bullets }, index) => (
            <Reveal key={title} delay={index * 80}>
              <div className="timeline-step">
                <div className="timeline-dot">
                  <Icon style={{ width: "1.1rem", height: "1.1rem" }} />
                </div>
                <p style={{ fontSize: ".65rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--color-electric)", marginBottom: ".3rem" }}>
                  {week}
                </p>
                <h3 className="font-display text-lg font-extrabold">{title}</h3>
                <ul className="mt-3 grid gap-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Guarantee Strips ────────────────────────────────────────────────────────
function GuaranteeStrips() {
  return (
    <section className="section-band">
      <div className="page-shell py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="guarantee-strip">
              <ShieldCheck className="size-7 text-primary" />
              <div>
                <p className="font-display text-base font-extrabold">Your Accounts Stay Yours</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Every ad account, analytics property, and platform login remains 100% yours. We never lock you in. Cancel anytime with full data export.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="guarantee-strip">
              <Users className="size-7 text-primary" />
              <div>
                <p className="font-display text-base font-extrabold">Direct Director Access</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  You have Moez and Malaika's direct contact. Not an account manager. Not a junior. The founders.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Closing CTA ─────────────────────────────────────────────────────────────
function ClosingCta() {
  return (
    <section className="section-band section-band-deep">
      <div className="page-shell py-24 text-center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--color-primary)", display: "inline-block", marginBottom: "1rem" }}>
            READY TO BUILD OR SCALE?
          </p>
          <h2 className="section-title section-title-light" style={{ maxWidth: "38rem", margin: "0 auto .75rem" }}>
            Let's turn your digital presence into a{" "}
            <span>predictable growth asset.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/contact" search={{ mode: "booking" }}>
                Book 20-Min Strategy Call
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="https://wa.me/923173712950" target="_blank" rel="noreferrer">
                Chat on WhatsApp Now <MessageCircle className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Root Export ─────────────────────────────────────────────────────────────
export function PremiumHome() {
  const typedText = useTypewriter([
    "qualified buyer funnels.",
    "high-converting web platforms.",
    "custom software & mobile apps.",
    "predictable revenue systems.",
  ]);

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="premium-hero">
        {/* Decorative bg elements */}
        <div className="hero-grid-texture" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="page-shell premium-hero-grid">
          {/* Left column */}
          <div className="relative">
            {/* Mobile background image — strictly hidden on md+ */}
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-45 md:hidden"
              aria-hidden="true"
              src={heroImage}
              alt=""
              loading="eager"
            />

            <div className="hero-copy relative">
              {/* Eyebrow */}
              <p className="hero-stagger hero-stagger-1 eyebrow eyebrow-on-dark">
                <span className="status-dot" aria-hidden="true" />
                DIGITAL ENGINEERING &amp; REVENUE SYSTEMS
              </p>

              {/* Headline */}
              <h1 className="hero-stagger hero-stagger-2">
                Grow your business with{" "}
                <span className="hero-brand-name">Aymo Digital</span>
                <span className="typewriter-line">
                  {typedText}
                  <span className="typing-cursor" aria-hidden="true" />
                </span>
                <span className="sr-only">
                  qualified buyer funnels, high-converting web platforms, custom software &amp; mobile apps, predictable revenue systems.
                </span>
              </h1>

              {/* Subhead */}
              <p className="hero-stagger hero-stagger-3 hero-description">
                We engineer lightning-fast digital products and run high-ROAS acquisition campaigns that turn cold traffic into verified, paying customers.
              </p>

              {/* CTAs */}
              <div className="hero-stagger hero-stagger-4 mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="group">
                  <Link to="/contact" search={{ mode: "booking" }}>
                    Book Strategy Call
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl" className="group">
                  <Link to="/services">
                    View Our Services
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="hero-stagger hero-stagger-5 hero-principles">
                {["Zero Lock-in Contracts", "100% Account Ownership", "Direct Founder Access"].map((badge) => (
                  <span key={badge}>
                    <Check className="size-3" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Section 1b: AI Audit */}
              <div id="audit" className="hero-stagger hero-stagger-5 mt-6">
                <HeroAudit />
              </div>
            </div>
          </div>

          {/* Right column — dashboard, strictly hidden on mobile */}
          <div className="hero-stagger hero-stagger-visual">
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* ── Section 2: Marquee 1 ─────────────────────────────────────────── */}
      <Marquee items={marqueeItemsTech} id="Tech stack and marketing channels" />

      {/* ── Section 3: Revenue Pillar ────────────────────────────────────── */}
      <RevenuePillar />

      {/* ── Section 4: Services ──────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── Section 5: Marquee 2 ─────────────────────────────────────────── */}
      <Marquee items={marqueeItemsRights} id="Client bill of rights" />

      {/* ── Section 6: 30-Day Blueprint ──────────────────────────────────── */}
      <BlueprintTimeline />

      {/* ── Section 7: Guarantee Strips ──────────────────────────────────── */}
      <GuaranteeStrips />

      {/* ── Section 8: Closing CTA ───────────────────────────────────────── */}
      <ClosingCta />

      {/* ── Section 9: Footer ────────────────────────────────────────────── */}
      <SiteFooter />
    </main>
  );
}
