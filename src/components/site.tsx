import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Loader2, Menu, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/aymo-logo.png.asset.json";
import { supabase } from "@/integrations/supabase/client";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Brand() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3 group" aria-label="AYMO DIGITAL home">
      <img
        src={logoAsset.url}
        alt="AYMO DIGITAL"
        width={160}
        height={160}
        className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight hidden sm:inline-block">
        AYMO <span className="text-primary">DIGITAL</span>
      </span>
    </Link>
  );
}

const customerPillars = [
  {
    category: "Get More Customers",
    description: "Attract high-intent buyers through organic search and paid media.",
    items: [
      { label: "Search Engine Optimization (SEO)", to: "/services/seo" },
      { label: "Performance Paid Advertising", to: "/services/paid-advertising" },
      { label: "Social Media & Creative Direction", to: "/services/social-media-marketing" },
      { label: "Content Marketing & Authority", to: "/services/content-marketing" },
    ],
  },
  {
    category: "Increase Your Sales",
    description: "Turn casual visitors into confirmed enquiries and repeat orders.",
    items: [
      { label: "Custom Web Platforms & E-Commerce", to: "/services/web-development" },
      { label: "Email Marketing & Retention", to: "/services/email-marketing" },
    ],
  },
  {
    category: "Run Your Business Better",
    description: "Streamline operations with custom software and intelligent automation.",
    items: [
      { label: "Mobile Applications (iOS & Android)", to: "/services/app-development" },
      { label: "Custom Software, CRM & ERP", to: "/services/software-development" },
      { label: "AI & Business Automation", to: "/services/ai-automation" },
    ],
  },
] as const;

const industryLinks = [
  { label: "Healthcare & Medical Clinics", to: "/industries#healthcare" },
  { label: "Real Estate & Developments", to: "/industries#real-estate" },
  { label: "E-Commerce & Retail Brands", to: "/industries#ecommerce" },
  { label: "B2B & Software Companies", to: "/industries#b2b" },
  { label: "Professional & Legal Practices", to: "/industries#professional" },
  { label: "Logistics & Supply Chain", to: "/industries#logistics" },
  { label: "Hospitality & Travel", to: "/industries#hospitality" },
  { label: "Education & EdTech", to: "/industries#education" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="page-shell header-row flex items-center justify-between">
        <Brand />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 xl:gap-8 text-[15px] font-bold lg:flex" aria-label="Primary navigation">
          {/* Services dropdown */}
          <div className="service-nav-group">
            <Link
              to="/services"
              className="nav-link flex items-center gap-1.5"
              activeProps={{ className: "nav-link active flex items-center gap-1.5" }}
            >
              <span>Services</span>
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div className="service-nav-menu" style={{ width: "720px", left: "0", transform: "translate(-10%, 10px)" }}>
              <div className="grid grid-cols-3 gap-6 p-2">
                {customerPillars.map((pillar) => (
                  <div key={pillar.category} className="space-y-2">
                    <div className="border-b border-border/50 pb-2">
                      <span className="service-nav-group-label">{pillar.category}</span>
                      <p className="text-[11px] leading-tight text-muted-foreground mt-0.5">{pillar.description}</p>
                    </div>
                    <div className="space-y-1 pt-1">
                      {pillar.items.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block rounded-md px-2.5 py-1.5 text-xs font-semibold text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border/60 bg-muted/30 px-3 py-2.5 rounded-b-lg">
                <span className="text-xs text-muted-foreground font-normal">
                  All systems engineered for measurable commercial revenue.
                </span>
                <Link to="/services" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  Explore all 9 solutions <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Industries dropdown */}
          <div className="service-nav-group">
            <Link
              to="/industries"
              className="nav-link flex items-center gap-1.5"
              activeProps={{ className: "nav-link active flex items-center gap-1.5" }}
            >
              <span>Industries</span>
              <ChevronDown className="size-3.5 transition-transform duration-200" />
            </Link>
            <div className="service-nav-menu" style={{ width: "480px", left: "50%", transform: "translate(-50%, 10px)" }}>
              <div className="p-2">
                <span className="service-nav-group-label">Industries We Scale</span>
                <div className="mt-2 grid grid-cols-2 gap-1">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.label}
                      to={ind.to}
                      className="block rounded-md px-2.5 py-1.5 text-xs font-semibold text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-2 border-t border-border/60 bg-muted/30 px-3 py-2 rounded-b-lg flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-normal">Tailored growth architectures</span>
                <Link to="/industries" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  View all industry blueprints <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Our Work */}
          <Link to="/work" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Our Work
          </Link>

          {/* Company dropdown */}
          <div className="service-nav-group">
            <button
              type="button"
              className="nav-link flex items-center gap-1.5 bg-transparent border-0 cursor-pointer"
            >
              <span>Company</span>
              <ChevronDown className="size-3.5 transition-transform duration-200" />
            </button>
            <div className="service-nav-menu" style={{ width: "360px", left: "50%", transform: "translate(-50%, 10px)" }}>
              <div className="p-2 space-y-1">
                <span className="service-nav-group-label">About AYMO DIGITAL</span>
                <Link
                  to="/directors"
                  className="block rounded-lg p-2.5 hover:bg-muted/60 transition-colors"
                >
                  <div className="text-xs font-bold text-foreground">Leadership &amp; Directors</div>
                  <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                    Meet Founders Moez Rehman &amp; Malaika Jahangir — direct client accountability.
                  </p>
                </Link>
                <Link
                  to="/team"
                  className="block rounded-lg p-2.5 hover:bg-muted/60 transition-colors"
                >
                  <div className="text-xs font-bold text-foreground">Specialist Team</div>
                  <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                    Our 7 full-time senior software engineers, media buyers, and designers.
                  </p>
                </Link>
                <Link
                  to="/about"
                  className="block rounded-lg p-2.5 hover:bg-muted/60 transition-colors"
                >
                  <div className="text-xs font-bold text-foreground">About Us &amp; Standards</div>
                  <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                    Our founding mission, operating principles, values, and global presence.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Insights */}
          <Link to="/blog" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Insights
          </Link>

          {/* Contact */}
          <Link to="/contact" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Contact
          </Link>
        </nav>

        {/* Right action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%20would%20like%20to%20talk%20about%20my%20business%20growth."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
          >
            <MessageCircle className="size-4 text-emerald-500 fill-emerald-500/20" /> WhatsApp
          </a>

          <Button asChild variant="hero" size="default" className="h-11 px-6 text-sm font-bold shadow-md hover:shadow-lg transition-all">
            <Link to="/contact">
              Talk About Your Business <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="mobile-nav border-t border-border bg-background lg:hidden" aria-label="Mobile navigation">
          <div className="page-shell flex flex-col py-4 max-h-[82vh] overflow-y-auto space-y-1">
            {/* Services group */}
            <div className="border-b border-border/60 pb-3">
              <div className="flex items-center justify-between py-2 text-xs font-extrabold uppercase tracking-wider text-primary">
                Services &amp; Solutions
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm font-bold text-foreground hover:text-primary flex items-center justify-between"
                >
                  <span>All 9 Services Overview</span>
                  <ArrowRight className="size-3.5 text-primary" />
                </Link>
                <Link
                  to="/services/seo"
                  onClick={() => setOpen(false)}
                  className="py-1 text-xs text-muted-foreground hover:text-primary"
                >
                  • Search Engine Optimization (SEO)
                </Link>
                <Link
                  to="/services/paid-advertising"
                  onClick={() => setOpen(false)}
                  className="py-1 text-xs text-muted-foreground hover:text-primary"
                >
                  • Performance Paid Advertising
                </Link>
                <Link
                  to="/services/web-development"
                  onClick={() => setOpen(false)}
                  className="py-1 text-xs text-muted-foreground hover:text-primary"
                >
                  • Custom Web Platforms &amp; E-Commerce
                </Link>
                <Link
                  to="/services/software-development"
                  onClick={() => setOpen(false)}
                  className="py-1 text-xs text-muted-foreground hover:text-primary"
                >
                  • Custom Software &amp; CRM Systems
                </Link>
                <Link
                  to="/services/ai-automation"
                  onClick={() => setOpen(false)}
                  className="py-1 text-xs text-muted-foreground hover:text-primary"
                >
                  • AI &amp; Business Automation
                </Link>
              </div>
            </div>

            {/* Industries */}
            <Link
              to="/industries"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-base font-bold text-muted-foreground hover:text-primary flex items-center justify-between"
            >
              <span>Industries We Scale</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            {/* Work */}
            <Link
              to="/work"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-base font-bold text-muted-foreground hover:text-primary flex items-center justify-between"
            >
              <span>Our Work &amp; Case Studies</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            {/* Company group */}
            <div className="border-b border-border/60 pb-3 pt-1">
              <div className="py-2 text-xs font-extrabold uppercase tracking-wider text-primary">
                Company &amp; Team
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <Link
                  to="/directors"
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm font-bold text-foreground hover:text-primary flex items-center justify-between"
                >
                  <span>Leadership &amp; Directors</span>
                  <span className="text-xs text-muted-foreground">Moez &amp; Malaika</span>
                </Link>
                <Link
                  to="/team"
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm font-bold text-foreground hover:text-primary flex items-center justify-between"
                >
                  <span>Specialist Team</span>
                  <span className="text-xs text-muted-foreground">7 Specialists</span>
                </Link>
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm font-bold text-foreground hover:text-primary"
                >
                  About Us, Mission &amp; Values
                </Link>
              </div>
            </div>

            {/* Insights */}
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-base font-bold text-muted-foreground hover:text-primary flex items-center justify-between"
            >
              <span>Insights &amp; Articles</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-base font-bold text-muted-foreground hover:text-primary flex items-center justify-between"
            >
              <span>Contact Us</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
              <Button asChild variant="hero" size="lg" className="w-full h-12 text-sm font-bold" onClick={() => setOpen(false)}>
                <Link to="/contact">
                  Talk About Your Business <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a
                href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%20would%20like%20to%20talk%20about%20my%20business%20growth."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-bold text-foreground shadow-sm"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="size-4 text-emerald-500 fill-emerald-500/20" /> WhatsApp Direct (+92 317 3712950)
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) return;
    setStatus("loading");
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({
        email: cleanEmail,
      });
      if (error && !error.message.includes("unique")) {
        console.warn("Newsletter insert:", error.message);
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  };

  return (
    <section className="page-shell pb-20">
      <Reveal className="newsletter flex flex-col items-center gap-6 p-7 md:flex-row">
        <Send className="size-10 shrink-0 text-primary" />
        <div className="md:flex-1">
          <h2 className="font-display text-xl font-extrabold">Receive Practical Business Growth Insights.</h2>
          <p className="mt-1 text-xs text-muted-foreground">Practical advice on customer acquisition, conversion, and operational automation. No inbox spam.</p>
        </div>
        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2.5 text-xs font-bold text-primary">
            <Check className="size-4" /> You&apos;re subscribed to growth insights!
          </div>
        ) : (
          <form className="flex w-full gap-2 md:max-w-md" onSubmit={handleSubscribe}>
            <input
              aria-label="Business email address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              className="min-w-0 flex-1 rounded-md border border-input bg-background px-4 py-2 text-xs outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" variant="hero" disabled={status === "loading"}>
              {status === "loading" ? <><Loader2 className="size-3.5 animate-spin" /> Subscribing...</> : "Subscribe"}
            </Button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

function useLocalTime(timezone: string, updateIntervalMs = 30000) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit" })
  );
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit" }));
    const id = setInterval(tick, updateIntervalMs);
    return () => clearInterval(id);
  }, [timezone, updateIntervalMs]);
  return time;
}

export function SiteFooter() {
  const karachiTime = useLocalTime("Asia/Karachi");
  const londonTime = useLocalTime("Europe/London");

  return (
    <footer className="bg-footer text-footer-foreground border-t border-border">
      <div className="page-shell grid grid-cols-2 gap-x-6 gap-y-10 py-16 md:grid-cols-[1.8fr_1fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1 pr-4">
          <Brand />
          <p className="mt-4 text-xs leading-6 text-footer-muted">
            AYMO DIGITAL is a digital engineering and business growth partner. We help businesses attract more customers, generate qualified enquiries, increase sales, and operate more efficiently with practical digital solutions.
          </p>

          <div className="mt-5 flex flex-col gap-1.5 text-xs text-footer-muted">
            <a href="tel:+923173712950" className="hover:text-footer-foreground">PK Desk: +92 317 3712950</a>
            <a href="tel:+447717229638" className="hover:text-footer-foreground">UK Desk: +44 7717 229638</a>
            <a href="mailto:info@aymo.digital" className="hover:text-footer-foreground">info@aymo.digital</a>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-[11px] text-footer-muted">
            <span className="inline-flex items-center gap-1">🕐 London (GMT): <strong className="text-foreground">{londonTime}</strong></span>
            <span className="inline-flex items-center gap-1">🕐 Islamabad (PKT): <strong className="text-foreground">{karachiTime}</strong></span>
          </div>
        </div>

        {/* Get More Customers */}
        <div>
          <h3 className="footer-heading">Get More Customers</h3>
          <div className="footer-links flex flex-col gap-1.5">
            <Link to="/services/seo" className="hover:text-footer-foreground">Search Engine Optimization</Link>
            <Link to="/services/paid-advertising" className="hover:text-footer-foreground">Performance Paid Ads</Link>
            <Link to="/services/social-media-marketing" className="hover:text-footer-foreground">Social Media Growth</Link>
            <Link to="/services/content-marketing" className="hover:text-footer-foreground">Content &amp; Brand Authority</Link>
          </div>
        </div>

        {/* Increase Sales & Operations */}
        <div>
          <h3 className="footer-heading">Sales &amp; Systems</h3>
          <div className="footer-links flex flex-col gap-1.5">
            <Link to="/services/web-development" className="hover:text-footer-foreground">Custom Web Platforms</Link>
            <Link to="/services/email-marketing" className="hover:text-footer-foreground">Email Retention Systems</Link>
            <Link to="/services/app-development" className="hover:text-footer-foreground">Mobile Applications</Link>
            <Link to="/services/software-development" className="hover:text-footer-foreground">Custom Software &amp; CRM</Link>
            <Link to="/services/ai-automation" className="hover:text-footer-foreground">AI &amp; Business Automation</Link>
          </div>
        </div>

        {/* Industries */}
        <div>
          <h3 className="footer-heading">Industries</h3>
          <div className="footer-links flex flex-col gap-1.5">
            <Link to="/industries" className="hover:text-footer-foreground">E-Commerce &amp; Retail</Link>
            <Link to="/industries" className="hover:text-footer-foreground">Real Estate &amp; Property</Link>
            <Link to="/industries" className="hover:text-footer-foreground">Healthcare &amp; Clinics</Link>
            <Link to="/industries" className="hover:text-footer-foreground">Manufacturing</Link>
            <Link to="/industries" className="hover:text-footer-foreground">Professional Services</Link>
            <Link to="/industries" className="hover:text-footer-foreground">Logistics &amp; Supply Chain</Link>
          </div>
        </div>

        {/* Company & Legal */}
        <div>
          <h3 className="footer-heading">Company</h3>
          <div className="footer-links flex flex-col gap-1.5">
            <Link className="hover:text-footer-foreground" to="/about">About Us</Link>
            <Link className="hover:text-footer-foreground" to="/directors">Directors</Link>
            <Link className="hover:text-footer-foreground" to="/team">Specialist Team</Link>
            <Link className="hover:text-footer-foreground" to="/work">Our Work</Link>
            <Link className="hover:text-footer-foreground" to="/blog">Case Studies &amp; Insights</Link>
            <Link className="hover:text-footer-foreground" to="/contact">Talk About Your Business</Link>
            <Link className="hover:text-footer-foreground mt-2 block font-semibold text-primary" to="/privacy">Privacy Policy</Link>
            <Link className="hover:text-footer-foreground block font-semibold text-primary" to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-line py-6 text-center text-xs text-footer-muted">
        <p className="font-bold tracking-wider text-footer-foreground/80">
          AYMO DIGITAL — Digital Engineering &amp; Business Growth Company
        </p>
        <p className="mt-1">
          &copy; 2026 AYMO DIGITAL. All rights reserved. London, UK &bull; Islamabad / Karachi, Pakistan.
        </p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, highlight, text }: { eyebrow: string; title: string; highlight: string; text: string }) {
  return (
    <section className="page-hero">
      <div className="hero-grid-texture" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="page-shell relative max-w-3xl py-20 text-center">
        <p className="hero-stagger hero-stagger-1 eyebrow">{eyebrow}</p>
        <h1 className="hero-stagger hero-stagger-2 mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.08]">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className="hero-stagger hero-stagger-3 mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}
