import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bookmark,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Gauge,
  Heart,
  Lightbulb,
  Mail,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  PenTool,
  Rocket,
  Search,
  Send,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import heroImage from "@/assets/agency-hero.jpg";
import { services as servicePages } from "@/lib/services-data";
import { directors } from "@/lib/company-data";
import { Button } from "@/components/ui/button";
import { HeroAudit } from "@/components/hero-audit";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

function ServicePost({ image, imageAlt, title, text, slug, index, active, onActivate }: { image: string; imageAlt: string; title: string; text: string; slug: string; index: number; active: boolean; onActivate: () => void }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  return (
    <article onMouseEnter={onActivate} onFocus={onActivate} className={`service-post ${active ? "active" : ""}`}>
      <header className="service-post-header"><span className="service-post-avatar">AD</span><span><strong>Aymo Digital</strong><small>Service 0{index + 1}</small></span><span className="service-post-index">0{index + 1}</span></header>
      <Link to="/services/$service" params={{ service: slug }} className="service-image-link"><img src={image} alt={imageAlt} loading="lazy" width={1200} height={800} /><span>{title}</span></Link>
      <div className="service-post-actions">
        <Button type="button" variant="ghost" size="icon" aria-label={liked ? `Unlike ${title}` : `Like ${title}`} aria-pressed={liked} onClick={() => setLiked((value) => !value)}><Heart className={liked ? "fill-current text-primary" : ""} /></Button>
        <Button type="button" variant="ghost" size="icon" aria-label={`Comment on ${title}`} aria-expanded={commenting} onClick={() => setCommenting((value) => !value)}><MessageCircle /></Button>
        <Button type="button" variant="ghost" size="icon" className="ml-auto" aria-label={saved ? `Remove ${title} from saved` : `Save ${title}`} aria-pressed={saved} onClick={() => setSaved((value) => !value)}><Bookmark className={saved ? "fill-current text-primary" : ""} /></Button>
      </div>
      <div className="service-post-caption"><strong>{liked ? "1 like" : "Show some love"}</strong><p><b>Aymo Digital</b> {text}</p>{comments.map((item, itemIndex) => <p key={`${item}-${itemIndex}`}><b>You</b> {item}</p>)}<Link className="arrow-link mt-3" to="/services/$service" params={{ service: slug }}>View full details <ArrowRight className="size-3" /></Link></div>
      {commenting && <form className="service-post-comment" onSubmit={(event) => { event.preventDefault(); const value = comment.trim(); if (!value) return; setComments((items) => [...items, value]); setComment(""); }}><label className="sr-only" htmlFor={`service-comment-${index}`}>Add a comment</label><input id={`service-comment-${index}`} value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Add a comment…" /><Button type="submit" variant="ghost" size="sm" disabled={!comment.trim()}>Post</Button></form>}
    </article>
  );
}

const services = [
  { icon: Target, short: "Strategy", title: "Strategy & Planning", text: "Clear roadmaps built around your business goals.", detail: "Research, positioning and practical priorities that keep every channel focused." },
  { icon: Search, short: "SEO", title: "Search Engine Optimization", text: "Be discovered by people already searching.", detail: "Technical foundations and useful content designed to compound visibility." },
  { icon: Share2, short: "Social", title: "Social Media Marketing", text: "Build attention and a loyal community.", detail: "Platform-native ideas, creative systems and thoughtful community management." },
  { icon: PenTool, short: "Content", title: "Content Marketing", text: "Useful stories that attract and convert.", detail: "Messaging, editorial content and sales assets built around real intent." },
  { icon: MousePointerClick, short: "Paid Ads", title: "Paid Advertising", text: "Focused campaigns for stronger returns.", detail: "Google and Meta campaigns paired with landing-page experimentation." },
  { icon: Mail, short: "Email", title: "Email Marketing", text: "Turn subscribers into loyal customers.", detail: "Lifecycle journeys and campaigns designed to improve retention." },
];

const goals = [
  { icon: Users, title: "Get more leads", text: "Build a predictable pipeline of qualified enquiries.", services: ["SEO", "Paid Ads", "Landing Pages", "Conversion Optimization"], cta: "Build my lead plan" },
  { icon: CircleDollarSign, title: "Increase sales", text: "Turn more attention into customers and repeat revenue.", services: ["Paid Ads", "Email Marketing", "CRO", "Analytics"], cta: "Find my sales opportunities" },
  { icon: TrendingUp, title: "Grow traffic", text: "Earn consistent, relevant visibility across search and social.", services: ["SEO", "Content", "Social Media", "Campaign Strategy"], cta: "Plan my traffic growth" },
  { icon: Sparkles, title: "Build my brand", text: "Create a distinctive presence people understand and remember.", services: ["Positioning", "Brand Messaging", "Content", "Creative Direction"], cta: "Strengthen my brand" },
];

const processSteps = [
  { icon: Search, number: "01", title: "Discover", text: "We learn your market, audience and ambition before recommending a move." },
  { icon: Lightbulb, number: "02", title: "Build", text: "Strategy, message and creative come together in one focused plan." },
  { icon: Rocket, number: "03", title: "Launch", text: "Campaigns go live with careful tracking across the right channels." },
  { icon: TrendingUp, number: "04", title: "Improve", text: "We study what works, sharpen the details and keep momentum growing." },
];

const whyItems = [
  { number: "01", label: "Clarity", title: "Clarity before activity", text: "Every channel and campaign begins with a clear commercial reason to exist.", icon: Lightbulb },
  { number: "02", label: "Speed", title: "Built to move quickly", text: "Focused decisions and direct feedback keep strong ideas moving forward.", icon: Zap },
  { number: "03", label: "Creative", title: "Creative that converts", text: "Memorable visuals are always paired with a practical path to action.", icon: PenTool },
  { number: "04", label: "Accountability", title: "Reporting without fog", text: "You see what changed, why it matters and what we recommend next.", icon: Gauge },
];

const testimonials = [
  { quote: "The team understood our vision, sharpened our message and gave our brand a clear path to grow.", name: "Ahmed Khan", role: "Founder, Kinetiq Labs", initials: "AK" },
  { quote: "For the first time our marketing feels accountable. We know what worked and what happens next.", name: "Sara Malik", role: "CEO, Northstar Retail", initials: "SM" },
  { quote: "They bring senior thinking to every conversation and keep the work moving without the usual agency layers.", name: "Bilal Raza", role: "Director, Fieldmark Foods", initials: "BR" },
];

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
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);
  return text;
}

function MagneticLink({ to, children, variant = "hero" }: { to: "/contact" | "/services" | "/work"; children: React.ReactNode; variant?: "hero" | "glass" | "onDark" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.08}px, ${(event.clientY - rect.top - rect.height / 2) * 0.08}px)`;
  };
  return (
    <Button asChild size="xl" variant={variant} className="group magnetic-control">
      <Link ref={ref} to={to} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = "translate(0, 0)"; }}>
        {children}<ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}

function AnimatedCounter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number | undefined }) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) setShown(value);
      else {
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1050, 1);
          setShown(value * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{shown.toFixed(decimals)}{suffix}</span>;
}

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
    <div className="hero-dashboard" onMouseMove={move} onMouseLeave={() => { frame.current?.style.setProperty("--parallax-x", "0px"); frame.current?.style.setProperty("--parallax-y", "0px"); }}>
      <div ref={frame} className="hero-dashboard-frame">
        <div className="hero-portrait">
          <img src={heroImage} alt="Digital strategist reviewing a marketing campaign" width={1280} height={1024} />
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

function GoalSelector() {
  const [active, setActive] = useState(0);
  const goal = goals[active] ?? goals[0];
  if (!goal) return null;
  return (
    <section className="section-band section-band-soft">
      <div className="page-shell py-24">
        <Reveal className="section-heading"><p className="eyebrow">Start with your goal</p><h2 className="section-title">What are you trying to <span>achieve?</span></h2><p>Choose your priority and see the right mix of expertise.</p></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <div className="grid gap-3 sm:grid-cols-2" role="tablist" aria-label="Marketing goals">
            {goals.map(({ icon: Icon, title, text }, index) => (
              <button key={title} type="button" role="tab" aria-selected={active === index} onMouseEnter={() => setActive(index)} onClick={() => setActive(index)} className={`goal-card ${active === index ? "active" : ""}`}>
                <span className="goal-icon"><Icon className="size-5" /></span><span><strong>{title}</strong><small>{text}</small></span><ArrowRight className="goal-arrow size-4" />
              </button>
            ))}
          </div>
          <div className="goal-detail" role="tabpanel" key={goal.title}>
            <span className="text-xs font-bold uppercase text-electric">Recommended growth mix</span>
            <h3>{goal.title}</h3><p>{goal.text}</p>
            <div className="mt-7 flex flex-wrap gap-2">{goal.services.map((service) => <span key={service} className="service-pill"><Check className="size-3" />{service}</span>)}</div>
            <Button asChild variant="hero" size="lg" className="group mt-8"><Link to="/contact">{goal.cta}<ArrowRight className="transition-transform group-hover:translate-x-1" /></Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceEcosystem({ active, onChange }: { active: number; onChange: (index: number) => void }) {
  const selected = services[active] ?? services[0];
  if (!selected) return null;
  return (
    <div className="ecosystem" aria-label="Connected marketing services">
      <div className="ecosystem-stage">
      <div className="ecosystem-lines" aria-hidden="true" />
      <div className="ecosystem-core"><span>Connected</span><strong>GROWTH</strong><small>{selected.short} activated</small></div>
      {services.map(({ short, icon: Icon }, index) => (
        <button key={short} type="button" aria-pressed={active === index} onClick={() => onChange(index)} onMouseEnter={() => onChange(index)} className={`ecosystem-node ecosystem-node-${index + 1} ${active === index ? "active" : ""}`}><Icon className="size-4" /><span>{short}</span></button>
      ))}
      </div>
      <p className="ecosystem-note"><strong>{selected.title}</strong>{selected.detail}</p>
    </div>
  );
}

function ServicesSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="section-band">
      <div className="page-shell py-24">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div className="section-heading text-left"><p className="eyebrow">What we do</p><h2 className="section-title">A connected system for <span>sustainable growth.</span></h2></div><Link to="/services" className="arrow-link">Explore all services <ArrowRight /></Link></Reveal>
        <div className="mt-12 grid gap-7 xl:grid-cols-[1.25fr_.75fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text }, index) => {
              const page = servicePages[index];
              if (!page) return null;
              return <Reveal key={title} delay={(index % 3) * 80}><ServicePost image={page.image} imageAlt={page.imageAlt} title={title} text={text} slug={page.slug} index={index} active={active === index} onActivate={() => setActive(index)} /></Reveal>;
            })}
          </div>
          <Reveal delay={160}><ServiceEcosystem active={active} onChange={setActive} /></Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessStory() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-band section-band-deep">
      <div className="page-shell grid gap-14 py-24 lg:grid-cols-[.78fr_1.22fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow">How we work</p><h2 className="section-title section-title-light">A clear path to <span>measurable progress.</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-deep-muted">No mystery and no disconnected activity. One practical process keeps every decision aligned.</p><div className="process-progress mt-10"><span style={{ transform: `scaleX(${(active + 1) / processSteps.length})` }} /></div></Reveal>
        <div className="process-stack">
          {processSteps.map(({ icon: Icon, number, title, text }, index) => (
            <Reveal key={title} delay={index * 60}><article tabIndex={0} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`process-story-card ${active === index ? "active" : ""}`}>
              <span className="process-story-icon"><Icon className="size-5" /></span><div><span className="process-story-number">{number}</span><h3>{title}</h3><p>{text}</p></div><ChevronDown className="ml-auto size-5" />
            </article></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  const metrics = [{ label: "Traffic", value: "+72%", width: "72%" }, { label: "Leads", value: "+91%", width: "91%" }, { label: "Conversions", value: "+58%", width: "58%" }, { label: "Revenue", value: "+120%", width: "96%" }];
  return (
    <section className="section-band section-band-soft">
      <div className="page-shell grid items-center gap-12 py-24 lg:grid-cols-[.82fr_1.18fr]">
        <Reveal><p className="eyebrow">Decisions, not dashboards</p><h2 className="section-title">Marketing should be <span>measurable.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">A clear view of the whole journey helps us invest with confidence, learn faster and improve the work that matters.</p><Button asChild variant="outline" size="lg" className="group mt-7"><Link to="/work">See our approach<ArrowRight className="transition-transform group-hover:translate-x-1" /></Link></Button></Reveal>
        <Reveal delay={120} className="analytics-board">
          <div className="analytics-toolbar"><div><span className="status-dot" />Growth overview</div><span>Last 90 days</span></div>
          <div className="analytics-summary"><div><small>Blended ROAS</small><strong>5.8x</strong></div><div className="analytics-chart"><svg viewBox="0 0 440 130" role="img" aria-label="Illustrative upward growth trend"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-primary)" stopOpacity=".35"/><stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0"/></linearGradient></defs><path className="chart-area" d="M0 112 C40 104 62 112 92 92 S145 96 174 70 S230 80 258 55 S312 64 340 34 S398 41 440 8 L440 130 L0 130 Z"/><path className="chart-line" d="M0 112 C40 104 62 112 92 92 S145 96 174 70 S230 80 258 55 S312 64 340 34 S398 41 440 8"/></svg></div></div>
          <div className="analytics-bars">{metrics.map((metric) => <div key={metric.label} className="analytics-row"><span>{metric.label}</span><div><i style={{ transform: `scaleX(${Number.parseInt(metric.width) / 100})` }} /></div><strong>{metric.value}</strong></div>)}</div>
                  </Reveal>
      </div>
    </section>
  );
}

function ProofSection() {
  const proof = [{ icon: Rocket, value: 250, suffix: "+", label: "Projects completed" }, { icon: Users, value: 98, suffix: "%", label: "Client satisfaction" }, { icon: TrendingUp, value: 3.5, suffix: "x", decimals: 1, label: "Average ROI growth" }, { icon: CircleDollarSign, value: 120, suffix: "%", label: "Revenue growth" }];
  return (
    <section className="proof-band"><div className="page-shell py-20"><Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Proof of direction</p><h2 className="section-title section-title-light">Built for results. <span>Made to grow.</span></h2></div><p className="max-w-md text-sm leading-6 text-deep-muted">Clear reporting from your own accounts, reviewed together at every step.</p></Reveal><div className="proof-grid mt-12">{proof.map(({ icon: Icon, value, suffix, decimals, label }) => <Reveal key={label}><div className="proof-stat"><Icon className="size-5" /><strong><AnimatedCounter value={value} suffix={suffix} decimals={decimals} /></strong><span>{label}</span></div></Reveal>)}</div></div></section>
  );
}

function WhySection() {
  const [active, setActive] = useState(0);
  const current = whyItems[active] ?? whyItems[0];
  if (!current) return null;
  const CurrentIcon = current.icon;
  return (
    <section className="section-band"><div className="page-shell grid gap-10 py-24 lg:grid-cols-[.72fr_1.28fr]"><Reveal><p className="eyebrow">Why Aymo Digital</p><h2 className="section-title">Senior thinking, without the <span>agency runaround.</span></h2><div className="why-tabs mt-10" role="tablist" aria-label="Why work with us">{whyItems.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={active === index} onMouseEnter={() => setActive(index)} onClick={() => setActive(index)}><span>{item.number}</span>{item.label}</button>)}</div></Reveal><Reveal delay={120} className="why-panel" key={current.label}><span className="why-panel-icon"><CurrentIcon className="size-8" /></span><span className="text-xs font-bold uppercase text-electric">{current.number} — {current.label}</span><h3>{current.title}</h3><p>{current.text}</p><Button asChild variant="glass" className="group mt-8"><Link to="/about">Meet the agency<ArrowRight className="transition-transform group-hover:translate-x-1" /></Link></Button></Reveal></div></section>
  );
}

function TestimonialSection() {
  const [active, setActive] = useState(0);
  const item = testimonials[active] ?? testimonials[0];
  if (!item) return null;
  const change = (direction: number) => setActive((active + direction + testimonials.length) % testimonials.length);
  return (
    <section className="section-band section-band-soft"><div className="page-shell py-24"><Reveal className="testimonial-shell"><span className="quote-mark">“</span><div key={item.name} className="testimonial-copy"><blockquote>{item.quote}</blockquote><div className="testimonial-person"><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div></div><div className="testimonial-controls"><Button type="button" variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => change(-1)}><ChevronLeft /></Button><span>{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span><Button type="button" variant="outline" size="icon" aria-label="Next testimonial" onClick={() => change(1)}><ChevronRight /></Button></div></Reveal></div></section>
  );
}

function AuditForm() {
  const [step, setStep] = useState(1);
  const [website, setWebsite] = useState("");
  const [focus, setFocus] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const options = ["SEO", "Paid Ads", "Social Media", "Content", "Full Marketing", "Not Sure"];
  if (submitted) return <div className="audit-success"><span><Check className="size-7" /></span><h3>Your audit request is ready.</h3><p>Thank you! Our team will contact you within one working day.</p><Button type="button" variant="glass" onClick={() => { setSubmitted(false); setStep(1); }}>Start again</Button></div>;
  return (
    <div className="audit-form">
      <div className="audit-progress" aria-label={`Step ${step} of 3`}>{[1,2,3].map((number) => <span key={number} className={step >= number ? "active" : ""} />)}</div>
      {step === 1 && <div className="audit-step"><span className="audit-step-label">Step 1 of 3</span><h3>Where should we start?</h3><label><span>Website URL</span><input value={website} onChange={(event) => setWebsite(event.target.value)} type="url" required placeholder="https://yourwebsite.com" /></label><Button type="button" variant="hero" size="lg" disabled={!website} onClick={() => setStep(2)}>Continue <ArrowRight /></Button></div>}
      {step === 2 && <div className="audit-step"><span className="audit-step-label">Step 2 of 3</span><h3>What do you need help with?</h3><div className="audit-options">{options.map((option) => <button type="button" key={option} aria-pressed={focus.includes(option)} onClick={() => setFocus((current) => current.includes(option) ? current.filter((item) => item !== option) : [...current, option])}>{focus.includes(option) && <Check className="size-4" />}{option}</button>)}</div><div className="audit-actions"><Button type="button" variant="ghost" onClick={() => setStep(1)}><ArrowLeft />Back</Button><Button type="button" variant="hero" disabled={!focus.length} onClick={() => setStep(3)}>Continue <ArrowRight /></Button></div></div>}
      {step === 3 && <form className="audit-step" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><span className="audit-step-label">Step 3 of 3</span><h3>Where should we send the findings?</h3><div className="grid gap-4 sm:grid-cols-2"><label><span>Name</span><input required placeholder="Your name" /></label><label><span>Email</span><input required type="email" placeholder="you@company.com" /></label></div><div className="audit-actions"><Button type="button" variant="ghost" onClick={() => setStep(2)}><ArrowLeft />Back</Button><Button type="submit" variant="hero">Analyze my growth <ArrowRight /></Button></div><p className="text-center text-[10px] text-muted-foreground">We usually reply within one working day.</p></form>}
    </div>
  );
}

function ConsultationWidget() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return <><button type="button" className="consult-trigger" onClick={() => setOpen(true)}><span><MessageCircle className="size-5" /></span><span><strong>Need help growing?</strong><small>Get a free consultation <ArrowRight className="size-3" /></small></span></button>{open && <div className="consult-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><div className="consult-modal" role="dialog" aria-modal="true" aria-labelledby="consult-title"><Button type="button" variant="ghost" size="icon" className="consult-close" aria-label="Close consultation form" onClick={() => setOpen(false)}><X /></Button>{sent ? <div className="audit-success"><span><Check /></span><h3 id="consult-title">Request prepared.</h3><p>Thank you! We will contact you shortly.</p><Button type="button" variant="glass" onClick={() => setOpen(false)}>Close</Button></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}><p className="eyebrow">Free consultation</p><h2 id="consult-title">Let&apos;s find your next growth move.</h2><p>Share a few details and we&apos;ll start with a focused conversation.</p><label><span>Name</span><input required autoFocus placeholder="Your name" /></label><label><span>Email</span><input required type="email" placeholder="you@company.com" /></label><label><span>Primary goal</span><select required defaultValue=""><option value="" disabled>Select a goal</option>{goals.map((goal) => <option key={goal.title}>{goal.title}</option>)}</select></label><Button type="submit" variant="hero" size="lg" className="w-full">Request consultation <Send /></Button><small>We usually reply within one working day.</small></form>}</div></div>}</>;
}

function FinalCta() {
  return <section className="page-shell pb-16"><Reveal className="final-cta final-cta-compact"><p className="eyebrow">Your next move</p><div className="final-cta-row"><h2>Ready to move your business forward?</h2><div><MagneticLink to="/contact">Start a project</MagneticLink><MagneticLink to="/contact" variant="onDark">Get a free audit</MagneticLink></div></div></Reveal></section>;
}


function TrustSection() {
  return (
    <section className="section-band">
      <div className="page-shell py-20">
        <Reveal className="section-heading"><p className="eyebrow">Why clients trust us</p><h2 className="section-title">Real people. <span>Clear answers.</span></h2><p>You always know who is working on your project and how to reach them.</p></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {directors.map((person, index) => (
            <Reveal key={person.name} delay={index * 80}>
              <article className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-soft"><span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary font-display font-extrabold text-primary">{person.initials}</span><div className="min-w-0"><strong className="block font-display text-lg font-extrabold">{person.name}</strong><span className="text-xs font-bold text-primary">{person.role}</span></div></article>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[{ label: "Specialist team", text: "Experts for ads, Shopify, video, design and support.", to: "/team" as const }, { label: "Clear process", text: "You always know the next step and why.", to: "/about" as const }, { label: "Fast replies", text: "WhatsApp, call or email — we answer quickly.", to: "/contact" as const }].map((item, index) => (
            <Reveal key={item.label} delay={index * 80}><Link to={item.to} className="block h-full rounded-lg border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"><strong className="block font-display text-base font-extrabold">{item.label}</strong><span className="mt-2 block text-sm leading-6 text-muted-foreground">{item.text}</span></Link></Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[["How do we start?", "Share your website and goal. We review it and suggest a clear next step."], ["How do we stay in touch?", "WhatsApp, phone or email — whatever is easiest for you."], ["What does it cost?", "You get a clear written quotation before any work starts."], ["Do you work with small businesses?", "Yes. We suggest a starting scope that fits your budget."]].map(([question, answer]) => (
            <Reveal key={question}><details className="faq-item"><summary>{question}</summary><p>{answer}</p></details></Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="hero"><a href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital!">WhatsApp us <MessageCircle /></a></Button>
          <Button asChild variant="outline"><a href="tel:+923173712950">Call +92 317 3712950</a></Button>
          <Button asChild variant="outline"><a href="mailto:info@aymo.digital">info@aymo.digital</a></Button>
        </Reveal>
      </div>
    </section>
  );
}

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
            style={{ display: "inline-flex", alignItems: "center", padding: "0.85rem 1.25rem", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--color-primary-foreground)" }}
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
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
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
              <ul className="pillar-list grid gap-3">
                {badItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="pillar-card pillar-card-good h-full">
              <p className="mb-4 font-display text-lg font-extrabold">✅ The Aymo Digital Qualified Funnel</p>
              <ul className="pillar-list grid gap-3">
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
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow">Transparent Process</p>
          <h2 className="section-title">
            Your First 30 Days <span>With Aymo Digital</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            A transparent blueprint of exactly what we do in your first month.
          </p>
        </Reveal>
        <div className="timeline-grid">
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

function GlobalStrip() {
  const items = [
    { title: "London · GMT", text: "UK client desk & meetings" },
    { title: "Islamabad · PKT", text: "Engineering & growth team" },
    { title: "GBP · USD · AED", text: "Clear contracts & invoicing" },
    { title: "100% IP transfer", text: "Code, ad accounts & data are yours" },
  ];
  return (
    <section className="global-strip"><div className="page-shell global-strip-grid">
      {[...items, ...items].map((i, idx) => <div key={`${i.title}-${idx}`} aria-hidden={idx >= items.length} className={`global-strip-item ${idx >= items.length ? "strip-dup" : ""}`}><Check className="size-4" /><div><strong>{i.title}</strong><small>{i.text}</small></div></div>)}
    </div></section>
  );
}

function EngineeringSection() {
  const pillars = [
    { title: "Web Development", text: "Fast, conversion-ready websites and landing pages built for 95+ PageSpeed.", slug: "web-development" },
    { title: "Mobile Apps", text: "iOS & Android apps your customers actually keep on their phone.", slug: "app-development" },
    { title: "Custom Software & SaaS", text: "CRMs, portals and dashboards that automate how your business runs.", slug: "software-development" },
  ];
  return (
    <section className="section-band"><div className="page-shell py-20">
      <Reveal className="section-heading text-left"><p className="eyebrow">We build, not just advertise</p><h2 className="section-title">Engineering + growth <span>under one roof.</span></h2></Reveal>
      <div className="eng-grid">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="eng-card">
            <span className="eng-num">0{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <Link to="/contact" className="arrow-link">Discuss your build <ArrowRight /></Link>
          </Reveal>
        ))}
      </div>
    </div></section>
  );
}

export function PremiumHome() {
  const typeword = useTypewriter(["advanced marketing", "smarter strategy", "creative growth"]);
  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <section className="premium-hero">
        <div className="hero-mobile-bg" aria-hidden="true" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="hero-grid-texture" aria-hidden="true" /><div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="page-shell premium-hero-grid">
          <div className="hero-copy">
            <p className="hero-stagger hero-stagger-1 eyebrow eyebrow-on-dark"><span className="status-dot" /> Growth, backed by insight</p>
            <h1 className="hero-stagger hero-stagger-2">Grow your business with <span className="hero-brand-name">Aymo Digital</span><span className="typewriter-line">{typeword}<i aria-hidden="true" /></span><span className="sr-only">advanced marketing, smarter strategy and creative growth</span></h1>
            <p className="hero-stagger hero-stagger-3 hero-description">Clear strategy, memorable creative and advanced marketing that turns attention into sustainable growth.</p>
            <div id="audit" className="hero-stagger hero-stagger-4"><HeroAudit /></div>
            <div className="hero-stagger hero-stagger-4 mt-6 flex flex-col gap-3 sm:flex-row"><MagneticLink to="/services">Explore services</MagneticLink><MagneticLink to="/work" variant="glass">View our work</MagneticLink></div>
            <div className="hero-stagger hero-stagger-5 hero-principles">{["ROI focused", "Data driven", "Creative first", "Clear reporting"].map((item) => <span key={item}><Check className="size-3" />{item}</span>)}</div>
          </div>
          <div className="hero-stagger hero-stagger-visual"><HeroDashboard /></div>
        </div>
      </section>

      <section className="growth-marquee" aria-label="Aymo Digital capabilities"><div className="marquee-track">{[0, 1].map((copy) => <div key={copy} aria-hidden={copy === 1}>{["ADVANCED MARKETING", "SEO", "PAID MEDIA", "SOCIAL GROWTH", "CONTENT", "ANALYTICS", "AYMO DIGITAL"].map((item) => <span key={`${copy}-${item}`}>{item}<i /></span>)}</div>)}</div></section>
      <section className="logo-wall"><div className="page-shell"><span>Platforms we build &amp; scale on</span><div>{[0, 1].flatMap((c) => ["META", "GOOGLE ADS", "SHOPIFY", "AWS", "STRIPE", "VERCEL"].map((brand) => <strong key={`${c}-${brand}`} aria-hidden={c === 1} className={c === 1 ? "strip-dup" : ""}>{brand}</strong>))}</div></div></section>
      <GlobalStrip />
      <EngineeringSection />
      <Marquee items={marqueeItemsTech} id="Tech stack and marketing channels" />
      <RevenuePillar />
      <GoalSelector />
      <ServicesSection />
      <Marquee items={marqueeItemsRights} id="Client bill of rights" />
      <BlueprintTimeline />
      <ProcessStory />
      <AnalyticsSection />
      <ProofSection />
      <WhySection />
      <TestimonialSection />
      <GuaranteeStrips />
      <TrustSection />
      <section className="section-band"><div className="page-shell grid items-center gap-12 py-24 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">Start with clarity</p><h2 className="section-title">Get a Free Marketing <span>Audit.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">Tell us where you are today. We&apos;ll shape a practical starting point around your website and priorities.</p><div className="audit-benefits">{["Focused review", "Clear opportunities", "No-pressure next step"].map((item) => <span key={item}><Check className="size-4" />{item}</span>)}</div></Reveal><Reveal delay={120}><AuditForm /></Reveal></div></section>
      <FinalCta />
      <SiteFooter />
      <ConsultationWidget />
    </main>
  );
}