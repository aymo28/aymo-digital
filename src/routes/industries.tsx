import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  Package,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Grow | AYMO DIGITAL" },
      { name: "description", content: "Discover how AYMO DIGITAL solves specific business challenges across E-commerce, Real Estate, Healthcare, Professional Services, Manufacturing, Logistics, Education, and SaaS." },
      { property: "og:title", content: "Industries We Grow | AYMO DIGITAL" },
      { property: "og:description", content: "Practical digital engineering and customer acquisition systems tailored for your specific industry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

export type IndustryItem = {
  id: string;
  name: string;
  icon: typeof ShoppingBag;
  headline: string;
  summary: string;
  commonChallenges: string[];
  whyItMatters: string;
  howWeHelp: string[];
  recommendedSolutions: { label: string; to: string }[];
};

export const industriesData: IndustryItem[] = [
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    icon: ShoppingBag,
    headline: "Stop losing customers to abandoned carts and high advertising costs.",
    summary:
      "We engineer lightning-fast storefronts, high-converting checkout flows, and automated customer retention funnels that turn one-time shoppers into repeat brand advocates.",
    commonChallenges: [
      "Over 75% of shoppers abandon carts without completing purchase",
      "Rising customer acquisition costs (CAC) eating product margins on Meta and Google Ads",
      "Slow, bloated Shopify apps slowing page loading to over 4 seconds on mobile",
      "Zero automated retention — no email flows to bring past buyers back",
    ],
    whyItMatters:
      "When your acquisition costs equal or exceed your initial order value, your business loses money on every sale. Improving conversion rate by just 1% and recovering 15% of abandoned carts can double net e-commerce profitability.",
    howWeHelp: [
      "Custom Shopify Plus or Next.js headless storefronts built for sub-1.5 second speed",
      "Multi-step checkout optimization and one-click express payment gateways",
      "Klaviyo automated retention flows (abandoned cart, browse recovery, VIP re-order)",
      "ROAS-accountable Meta Ads and Google Shopping campaigns targeting high-LTV buyers",
    ],
    recommendedSolutions: [
      { label: "Custom Web Platforms", to: "/services/web-development" },
      { label: "Email Marketing & Retention", to: "/services/email-marketing" },
      { label: "Performance Paid Advertising", to: "/services/paid-advertising" },
    ],
  },
  {
    id: "realestate",
    name: "Real Estate & Property Development",
    icon: Building2,
    headline: "Generate verified, high-net-worth buyers instead of empty inquiries.",
    summary:
      "We replace generic lead forms with high-intent qualification funnels, interactive project portals, and CRM lead routing that connects serious property buyers directly to your sales team.",
    commonChallenges: [
      "Sales agents wasting 70%+ of their day calling uninterested or accidental form submissions",
      "Inability to showcase luxury property developments interactively online",
      "Leads cooling down because agents take hours or days to make the first phone call",
      "No centralized tracking of agent follow-ups, viewing schedules, and deal stages",
    ],
    whyItMatters:
      "High-ticket property purchases require immense trust and rapid responsiveness. A qualified buyer who doesn't hear back within 15 minutes moves directly to the next developer.",
    howWeHelp: [
      "Dedicated development landing pages with multi-step qualification (Budget, Financing, Intent)",
      "Instant WhatsApp & CRM routing — hot leads land on sales manager's phone in under 60 seconds",
      "Interactive 3D unit selector and virtual floorplan inspection portals",
      "Targeted Meta Ads and Google Search campaigns focused on overseas investors and local buyers",
    ],
    recommendedSolutions: [
      { label: "Performance Paid Advertising", to: "/services/paid-advertising" },
      { label: "Custom Software & CRMs", to: "/services/software-development" },
      { label: "Custom Web Platforms", to: "/services/web-development" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Clinics",
    icon: HeartPulse,
    headline: "Fill consultation schedules with qualified patients who value your care.",
    summary:
      "We build HIPAA/GDPR-compliant clinic websites, friction-free appointment scheduling systems, and local Google search dominance that position your practitioners as the premier local choice.",
    commonChallenges: [
      "Front-desk staff overwhelmed with repetitive phone calls for routine bookings",
      "High patient no-show rates without automated appointment confirmations",
      "Low visibility on Google Maps when patients search for local specialists",
      "Websites that fail to communicate medical authority, hygiene standards, and doctor credentials",
    ],
    whyItMatters:
      "Patients choose healthcare providers based on verified credibility and ease of booking. If booking requires calling during limited business hours, patients switch to modern competitors with instant booking.",
    howWeHelp: [
      "Seamless self-service appointment scheduling with automated calendar integration",
      "Automated WhatsApp & SMS appointment reminders that reduce no-shows by up to 60%",
      "Local Google Maps SEO ensuring your practice appears in the top 3 local medical searches",
      "Authoritative practitioner profiles with patient video testimonials and procedure guides",
    ],
    recommendedSolutions: [
      { label: "Search Engine Optimization (SEO)", to: "/services/seo" },
      { label: "Custom Web Platforms", to: "/services/web-development" },
      { label: "AI & Business Automation", to: "/services/ai-automation" },
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services & Consultancies",
    icon: Briefcase,
    headline: "Win high-retainer corporate clients without relying solely on word of mouth.",
    summary:
      "We position law firms, accounting practices, engineering consultancies, and corporate advisors with authoritative digital presences, founder thought leadership, and automated client onboarding.",
    commonChallenges: [
      "Relying entirely on unpredictable referral networks with feast-or-famine revenue cycles",
      "Websites that look like generic templates from 2012, undermining premium fee structures",
      "Complex service offerings that confuse prospective corporate decision-makers",
      "Manual contract drafting, KYC document collection, and onboarding delays",
    ],
    whyItMatters:
      "Corporate buyers research consultancies extensively before reaching out. If your online presence doesn't reflect your actual institutional caliber, you get excluded from lucrative RFP shortlists.",
    howWeHelp: [
      "Authoritative corporate websites designed with cinematic visual identity and clear value propositions",
      "Executive LinkedIn thought leadership campaigns that place your partners in front of C-suite executives",
      "Secure client onboarding portals with digital signature and encrypted document collection",
      "Authoritative whitepapers and commercial case studies that address buyer risk objections",
    ],
    recommendedSolutions: [
      { label: "Content Marketing & Authority", to: "/services/content-marketing" },
      { label: "Custom Web Platforms", to: "/services/web-development" },
      { label: "Custom Software & Portals", to: "/services/software-development" },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Distribution",
    icon: Factory,
    headline: "Digitize wholesale ordering and attract international commercial buyers.",
    summary:
      "We replace messy PDF catalogs and phone orders with private B2B wholesale portals, international SEO, and custom inventory synchronization.",
    commonChallenges: [
      "Wholesale buyers unable to view live pricing, minimum order quantities, or stock availability",
      "Customer orders taken over WhatsApp, spreadsheets, and sticky notes, creating costly errors",
      "Invisible to international procurement managers searching for manufacturing partners",
      "Disconnected inventory management between the factory floor and the sales office",
    ],
    whyItMatters:
      "Modern procurement officers expect B2B purchasing to be as intuitive as consumer e-commerce. Manual catalog sharing and telephone quoting slows down deal velocity and restricts global expansion.",
    howWeHelp: [
      "Bespoke B2B client portals with custom tiered pricing, bulk discounts, and credit terms",
      "Global technical SEO targeting international distributors, import agents, and wholesalers",
      "Integration between warehouse inventory systems, ERP databases, and order management",
      "Automated RFQ (Request for Quotation) workflows that calculate estimates instantly",
    ],
    recommendedSolutions: [
      { label: "Custom Software & ERP", to: "/services/software-development" },
      { label: "Search Engine Optimization (SEO)", to: "/services/seo" },
      { label: "AI & Business Automation", to: "/services/ai-automation" },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    headline: "Provide real-time transparency and automate shipment documentation.",
    summary:
      "We build customer shipment tracking portals, automated dispatch notifications, and driver mobile applications that cut customer service inquiries in half.",
    commonChallenges: [
      "Support staff answering hundreds of 'Where is my shipment?' calls daily",
      "Drivers and warehouse staff relying on paper delivery manifests and physical signatures",
      "Zero automated milestone updates when cargo clears customs or reaches local hubs",
      "Inability to provide corporate clients with live API tracking feeds",
    ],
    whyItMatters:
      "In logistics, transparency is customer retention. Shippers will pay a premium to work with logistics partners who provide effortless visibility and zero communication friction.",
    howWeHelp: [
      "Self-service tracking portals where consignees view real-time container and parcel milestones",
      "Mobile driver applications for proof of delivery (POD), barcode scanning, and digital signatures",
      "Automated WhatsApp status notifications triggered at key transit checkpoints",
      "Custom dispatch and fleet management dashboards for operations controllers",
    ],
    recommendedSolutions: [
      { label: "Mobile Applications", to: "/services/app-development" },
      { label: "Custom Software & Portals", to: "/services/software-development" },
      { label: "AI & Business Automation", to: "/services/ai-automation" },
    ],
  },
  {
    id: "education",
    name: "Education, Academies & Training",
    icon: GraduationCap,
    headline: "Enroll qualified students year-round and deliver modern digital learning.",
    summary:
      "We engineer student acquisition funnels, interactive LMS portals, and automated admissions workflows for private academies, universities, and specialized training institutes.",
    commonChallenges: [
      "Admissions teams struggling to convert online inquiries into confirmed registrations",
      "Seasonal enrollment spikes that overwhelm administrative staff",
      "Clunky course management platforms that frustrate students and instructors",
      "High ad spend on social media with poor student attendance and high dropout rates",
    ],
    whyItMatters:
      "Students and parents evaluate educational institutions through digital touchpoints. A seamless enrollment experience and professional student portal signal educational excellence.",
    howWeHelp: [
      "Conversion-optimized admissions landing pages with course syllabus downloads and webinar signups",
      "Multi-step applicant qualification and online fee installment processing",
      "Bespoke student and instructor portals with progress tracking and attendance logging",
      "Automated student nurture sequences via email and WhatsApp reminding applicants of deadlines",
    ],
    recommendedSolutions: [
      { label: "Custom Web Platforms", to: "/services/web-development" },
      { label: "Performance Paid Advertising", to: "/services/paid-advertising" },
      { label: "Custom Software & Portals", to: "/services/software-development" },
    ],
  },
  {
    id: "saas",
    name: "Technology, Startups & SaaS",
    icon: Package,
    headline: "Scale user signups, reduce churn, and build an investor-grade digital presence.",
    summary:
      "We design high-converting SaaS marketing websites, intuitive product UI/UX architectures, and automated customer onboarding flows that drive product adoption.",
    commonChallenges: [
      "Visitors not understanding what the product does within 5 seconds of landing on the site",
      "High drop-off rates between initial signup and completed product onboarding",
      "Poor product UI/UX causing high monthly churn and negative user reviews",
      "Inability to clearly articulate ROI to enterprise B2B buyers vs consumer users",
    ],
    whyItMatters:
      "SaaS valuation depends on retention and efficient customer acquisition. A confusing homepage or high-friction onboarding directly suppresses your monthly recurring revenue (MRR) multiplier.",
    howWeHelp: [
      "High-converting SaaS product marketing websites with interactive feature demos and pricing calculators",
      "Product UI/UX design systems in Figma built around intuitive customer workflows",
      "Automated product onboarding email flows triggered by user actions (or inactions)",
      "Technical programmatic SEO capturing comparison and 'alternative to' search queries",
    ],
    recommendedSolutions: [
      { label: "Custom Web Platforms", to: "/services/web-development" },
      { label: "Email Marketing & Retention", to: "/services/email-marketing" },
      { label: "Search Engine Optimization (SEO)", to: "/services/seo" },
    ],
  },
];

function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("ecommerce");
  const activeItem = industriesData.find((i) => i.id === selectedIndustry) ?? industriesData[0]!;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Industry-Specific Expertise"
        title="Solutions Engineered For"
        highlight="Your Market."
        text="Generic marketing and off-the-shelf software fail because they ignore the unique operational reality of your business. We design technology and customer acquisition systems tailored to your specific industry."
      />

      {/* ── Industry Tabs Bar ── */}
      <section className="sticky top-[5.25rem] z-30 border-y border-border bg-background/95 backdrop-blur-md">
        <div className="page-shell overflow-x-auto py-3">
          <div className="flex gap-2 min-w-max">
            {industriesData.map((ind) => {
              const Icon = ind.icon;
              const isSelected = ind.id === selectedIndustry;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                  {ind.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Active Industry Spotlight ── */}
      <section className="page-shell py-16">
        <Reveal key={activeItem.id}>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <activeItem.icon className="size-4" />
                  {activeItem.name}
                </span>
                <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                  {activeItem.headline}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                  {activeItem.summary}
                </p>
              </div>

              <Button asChild variant="hero" size="xl" className="shrink-0">
                <Link to="/contact">
                  Discuss Your Industry <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Common Challenges */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-7">
                <h3 className="font-display text-lg font-extrabold text-foreground">
                  Common Commercial Challenges
                </h3>
                <ul className="mt-4 space-y-3">
                  {activeItem.commonChallenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-[10px] font-bold text-red-500">
                        ✕
                      </span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-red-500/10 pt-4">
                  <p className="text-xs font-semibold leading-5 text-muted-foreground">
                    <strong className="text-foreground">Why This Matters: </strong>
                    {activeItem.whyItMatters}
                  </p>
                </div>
              </div>

              {/* How AYMO Helps */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-7">
                <h3 className="font-display text-lg font-extrabold text-foreground">
                  How AYMO DIGITAL Solves This
                </h3>
                <ul className="mt-4 space-y-3">
                  {activeItem.howWeHelp.map((sol) => (
                    <li key={sol} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-emerald-500/10 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                    Recommended Core Solutions:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeItem.recommendedSolutions.map((rec) => (
                      <Link
                        key={rec.to}
                        to={rec.to}
                        className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-background px-3 py-1 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {rec.label} <ArrowRight className="size-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── All Industries Overview Grid ── */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Comprehensive Coverage</p>
            <h2 className="section-title">
              Every industry we partner with receives <span>specialized systems.</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Click any sector to view the exact challenges we solve and how we engineer profitable outcomes.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesData.map((ind, idx) => {
              const Icon = ind.icon;
              const isCurrent = ind.id === selectedIndustry;
              return (
                <Reveal key={ind.id} delay={idx * 60}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedIndustry(ind.id);
                      window.scrollTo({ top: 350, behavior: "smooth" });
                    }}
                    className={`flex h-full w-full flex-col text-left rounded-xl border p-6 transition-all ${
                      isCurrent
                        ? "border-primary bg-card ring-2 ring-primary/20 shadow-md"
                        : "border-border bg-card hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                    }`}
                  >
                    <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-extrabold">{ind.name}</h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-5 text-muted-foreground">
                      {ind.headline}
                    </p>
                    <span className="mt-auto pt-4 flex items-center gap-1 text-xs font-bold text-primary">
                      View details <ArrowRight className="size-3" />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA Strip ── */}
      <section className="bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-20 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-highlight/20 text-highlight">
            <Sparkles className="size-6" />
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">
            Don&apos;t see your exact industry listed?
          </h2>
          <p className="max-w-lg text-sm leading-6 text-results-muted">
            The fundamental laws of commercial customer acquisition and digital operations apply across sectors. Talk to our founders directly about your specific business model.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="results" size="lg">
              <Link to="/contact">
                Talk About Your Business <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/923173712950?text=Hi%20Aymo%20Digital%2C%20I%20would%20like%20to%20discuss%20my%20industry%20with%20you."
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
