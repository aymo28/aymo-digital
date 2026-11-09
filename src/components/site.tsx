import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/aymo-logo.png.asset.json";

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
    <Link to="/" className="flex min-w-0 items-center" aria-label="AYMO DIGITAL home">
      <img src={logoAsset.url} alt="AYMO DIGITAL" width={150} height={150} className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />
    </Link>
  );
}

const engineeringServices = [
  { label: "Custom Web Platforms", to: "/services/web-development" },
  { label: "Mobile Apps", to: "/services/app-development" },
  { label: "Custom Software", to: "/services/software-development" },
] as const;

const growthServices = [
  { label: "Paid Advertising", to: "/services/paid-advertising" },
  { label: "Technical SEO", to: "/services/seo" },
  { label: "Social Media", to: "/services/social-media-marketing" },
  { label: "Content Marketing", to: "/services/content-marketing" },
  { label: "Email Marketing", to: "/services/email-marketing" },
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
        <nav className="hidden items-center gap-8 text-xs font-bold lg:flex" aria-label="Primary navigation">
          <Link to="/" className="nav-link" activeProps={{ className: "nav-link active" }} activeOptions={{ exact: true }}>
            Home
          </Link>

          {/* Services dropdown */}
          <div className="service-nav-group">
            <Link to="/services" className="nav-link" activeProps={{ className: "nav-link active" }}>
              Services <ChevronDown className="inline size-3" />
            </Link>
            <div className="service-nav-menu">
              <span className="service-nav-group-label">Digital Engineering</span>
              {engineeringServices.map((s) => (
                <a key={s.to} href={s.to}>{s.label}</a>
              ))}
              <span className="service-nav-group-label" style={{ marginTop: "0.5rem" }}>Performance Growth</span>
              {growthServices.map((s) => (
                <a key={s.to} href={s.to}>{s.label}</a>
              ))}
            </div>
          </div>

          <a
            href="/#industries"
            className="nav-link"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Industries We Scale
          </a>

          <Link to="/directors" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Directors &amp; Team
          </Link>

          <Link to="/blog" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Case Studies &amp; Insights
          </Link>

          <Link to="/contact" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Contact
          </Link>
        </nav>

        <a
          href="https://wa.me/923173712950?text=Hi%2C%20I%20want%20to%20request%20a%20proposal%20from%20AYMO%20DIGITAL"
          target="_blank"
          rel="noopener noreferrer"
          className="header-cta hidden sm:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Request Proposal <ArrowRight className="size-4" />
        </a>

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
          <div className="page-shell flex flex-col py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-bold text-muted-foreground last:border-0 hover:text-primary"
              activeProps={{ className: "border-b border-border/60 py-3 text-sm font-bold text-primary last:border-0" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-bold text-muted-foreground hover:text-primary"
            >
              Services
            </Link>
            <div className="border-b border-border/60 py-2">
              <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60 py-1">Digital Engineering</p>
              {engineeringServices.map((s) => (
                <a key={s.to} href={s.to} onClick={() => setOpen(false)} className="block py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary">
                  {s.label}
                </a>
              ))}
              <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60 py-1 mt-2">Performance Growth</p>
              {growthServices.map((s) => (
                <a key={s.to} href={s.to} onClick={() => setOpen(false)} className="block py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary">
                  {s.label}
                </a>
              ))}
            </div>
            <a
              href="/#industries"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-bold text-muted-foreground hover:text-primary"
            >
              Industries We Scale
            </a>
            <Link
              to="/directors"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-bold text-muted-foreground hover:text-primary"
            >
              Directors &amp; Team
            </Link>
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-bold text-muted-foreground hover:text-primary"
            >
              Case Studies &amp; Insights
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-bold text-muted-foreground last:border-0 hover:text-primary"
            >
              Contact
            </Link>
            <a
              href="https://wa.me/923173712950?text=Hi%2C%20I%20want%20to%20request%20a%20proposal%20from%20AYMO%20DIGITAL"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              Request Proposal <ArrowRight className="size-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function NewsletterCta() {
  return (
    <section className="page-shell pb-20">
      <Reveal className="newsletter flex flex-col items-center gap-6 p-7 md:flex-row">
        <Send className="size-12 shrink-0 text-primary" />
        <div className="md:flex-1">
          <h2 className="font-display text-xl font-extrabold">Stay ahead in digital.</h2>
          <p className="mt-1 text-xs text-muted-foreground">Useful ideas, practical insights and no inbox clutter.</p>
        </div>
        <form className="flex w-full gap-2 md:max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input aria-label="Email address" type="email" placeholder="Enter your email" className="min-w-0 flex-1 rounded-md border border-input bg-background px-4 text-xs outline-none focus:ring-2 focus:ring-ring" />
          <Button type="submit" variant="hero">Subscribe</Button>
        </form>
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
    <footer className="bg-footer text-footer-foreground">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <Brand />
          <p className="mt-5 max-w-xs text-xs leading-5 text-footer-muted">
            We engineer lightning-fast digital products and run high-ROAS acquisition campaigns that turn cold traffic into verified, paying customers.
          </p>
          <div className="mt-5 flex flex-col gap-1 text-xs text-footer-muted">
            <a href="tel:+923173712950" className="hover:text-footer-foreground">+92 317 3712950</a>
            <a href="tel:+447717229638" className="hover:text-footer-foreground">+44 7717 229638</a>
            <a href="mailto:info@aymo.digital" className="hover:text-footer-foreground">info@aymo.digital</a>
          </div>
          <div className="mt-4 flex gap-4 text-[10px] text-footer-muted">
            <span>🕐 PKT {karachiTime}</span>
            <span>🕐 GMT {londonTime}</span>
          </div>
        </div>

        {/* Engineering Services */}
        <div>
          <h3 className="footer-heading">Engineering Services</h3>
          <p className="footer-links flex flex-col gap-1">
            <a href="/services/web-development" className="hover:text-footer-foreground">Custom Web Platforms</a>
            <a href="/services/app-development" className="hover:text-footer-foreground">Mobile Apps</a>
            <a href="/services/software-development" className="hover:text-footer-foreground">Custom Software</a>
          </p>
        </div>

        {/* Growth Services */}
        <div>
          <h3 className="footer-heading">Growth Services</h3>
          <p className="footer-links flex flex-col gap-1">
            <a href="/services/paid-advertising" className="hover:text-footer-foreground">Paid Advertising</a>
            <a href="/services/seo" className="hover:text-footer-foreground">Technical SEO</a>
            <a href="/services/social-media-marketing" className="hover:text-footer-foreground">Social Media</a>
            <a href="/services/content-marketing" className="hover:text-footer-foreground">Content Marketing</a>
            <a href="/services/email-marketing" className="hover:text-footer-foreground">Email Marketing</a>
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="footer-heading">Company</h3>
          <p className="footer-links flex flex-col gap-1">
            <Link className="hover:text-footer-foreground" to="/about">About</Link>
            <Link className="hover:text-footer-foreground" to="/directors">Directors</Link>
            <Link className="hover:text-footer-foreground" to="/team">Team</Link>
            <Link className="hover:text-footer-foreground" to="/blog">Blog</Link>
            <Link className="hover:text-footer-foreground" to="/contact">Contact</Link>
          </p>
        </div>

        {/* Legal */}
        <div>
          <h3 className="footer-heading">Legal &amp; Compliance</h3>
          <p className="footer-links flex flex-col gap-1">
            <a href="#" className="hover:text-footer-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-footer-foreground">Terms of Service</a>
          </p>
        </div>
      </div>

      <div className="border-t border-footer-line py-5 text-center text-[10px] text-footer-muted">
        <p className="font-bold uppercase tracking-widest text-footer-foreground/70">AYMO DIGITAL — Digital Engineering &amp; Growth Architecture</p>
        <p className="mt-1">© 2026 AYMO DIGITAL. All rights reserved.</p>
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
      <div className="page-shell relative max-w-3xl py-24 text-center">
        <p className="hero-stagger hero-stagger-1 eyebrow">{eyebrow}</p>
        <h1 className="hero-stagger hero-stagger-2 mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.02]">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className="hero-stagger hero-stagger-3 mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}
