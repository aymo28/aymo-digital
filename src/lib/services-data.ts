export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  targetClient: string;
  problemsSolved: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  techStack: string[];
  turnaround: string;
  pricing: PricingTier[];
  faqs: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Custom Web Platforms",
    summary:
      "High-speed Next.js and React architectures built around your brand, workflows, and conversion goals — not a template.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    imageAlt: "Developer working on a custom web platform with dual monitors",
    targetClient:
      "E-commerce brands, real estate developers, B2B SaaS companies, and service businesses needing a platform that drives conversions — not just looks good.",
    problemsSolved: [
      "Slow WordPress sites losing 40%+ visitors before page loads",
      "Generic templates that can't match your brand or workflows",
      "No CMS — every content update costs developer hours",
      "Forms that collect unqualified leads with no filtering",
      "No analytics integration — flying blind on what converts",
    ],
    deliverables: [
      "Custom Next.js or React architecture",
      "Headless CMS integration (Sanity/Contentful)",
      "Sub-2-second Core Web Vitals",
      "Multi-step lead qualifying forms",
      "SEO-optimized URL structure & schema markup",
      "Mobile-first responsive design",
      "Analytics & conversion tracking (GA4 + Meta Pixel)",
      "1-month post-launch support",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Wireframes",
        description:
          "We map your goals, audience, and conversion requirements into a clear sitemap and low-fidelity wireframes before a single line of code is written.",
      },
      {
        step: "02",
        title: "Design Sprints",
        description:
          "High-fidelity Figma designs in your brand language. We validate layouts, interactions, and mobile views before moving to development.",
      },
      {
        step: "03",
        title: "Development & QA",
        description:
          "Pixel-perfect build in Next.js with full CMS integration, form flows, analytics, and cross-browser QA on real devices.",
      },
      {
        step: "04",
        title: "Launch & Handoff",
        description:
          "Staged deployment, performance benchmarks, DNS cutover, and a live walkthrough so your team can manage content independently.",
      },
    ],
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Vercel",
      "PostgreSQL",
      "Stripe",
    ],
    turnaround: "4–8 weeks depending on scope",
    pricing: [
      {
        name: "Starter",
        price: "£2,500",
        description: "Perfect for service businesses and consultancies needing a professional, fast web presence.",
        features: [
          "5-page custom website",
          "Headless CMS integration",
          "GA4 analytics setup",
          "Mobile-first responsive design",
          "On-page SEO & schema markup",
          "Contact & lead capture form",
        ],
      },
      {
        name: "Growth",
        price: "£6,500",
        description: "For brands that need a full design system, e-commerce capabilities, and third-party integrations.",
        features: [
          "Everything in Starter",
          "Custom design system & component library",
          "E-commerce or booking flow",
          "Multi-step lead qualifying forms",
          "Meta Pixel & conversion tracking",
          "Third-party API integrations",
          "3-month post-launch support",
        ],
      },
      {
        name: "Enterprise",
        price: "£15,000+",
        description: "Bespoke platform builds for high-traffic brands, portals, and multi-region deployments.",
        features: [
          "Everything in Growth",
          "Bespoke platform architecture",
          "Custom API integrations",
          "Performance SLA (sub-1.5s LCP)",
          "Role-based CMS permissions",
          "Dedicated account manager",
          "6-month SLA support",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build on WordPress?",
        answer:
          "We don't. WordPress introduces performance and security overhead that conflicts with our Core Web Vitals targets. We use Next.js with a headless CMS (Sanity or Contentful) which gives you the same easy content editing experience with significantly better speed and reliability.",
      },
      {
        question: "Will I be able to update content myself?",
        answer:
          "Yes. Every project includes a headless CMS integration with a clean editing interface. You can update copy, images, and pages without touching code. We provide a training walkthrough on launch day.",
      },
      {
        question: "What is included in the post-launch support period?",
        answer:
          "Bug fixes, minor copy changes, performance monitoring, and one round of CRO tweaks based on the first month of analytics data. Larger feature additions are scoped as a separate retainer or project.",
      },
      {
        question: "Can you redesign an existing site without rebuilding it?",
        answer:
          "In most cases a full rebuild is faster and cheaper than patching an existing codebase. We assess your current site during discovery and give you an honest recommendation before any work begins.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "Mobile App Development",
    summary:
      "Native-feel iOS & Android apps built in Flutter or React Native — with offline sync, payment flows, and real push engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    imageAlt: "Mobile developer reviewing app designs on a smartphone",
    targetClient:
      "Startups, property platforms, healthcare providers, and e-commerce brands needing native-feel iOS & Android apps that drive engagement and revenue.",
    problemsSolved: [
      "Separate iOS and Android codebases doubling your dev cost",
      "App stores rejecting submissions due to performance issues",
      "No offline capability — app unusable without internet",
      "Push notification open rates below 5% due to poor UX",
      "Payment gateway integrations that break on every OS update",
    ],
    deliverables: [
      "Flutter or React Native cross-platform app",
      "iOS & Android native builds",
      "Offline-first data sync",
      "Push notification system",
      "Stripe/PayFast/local gateway integration",
      "App Store & Google Play submission",
      "Admin dashboard for content management",
      "3-month post-launch support",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Architecture",
        description:
          "We define user journeys, data models, and offline behaviour before any UI work. Architecture decisions made here determine your app's scalability and cost.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Platform-native Figma prototypes for iOS and Android. We validate gestures, navigation patterns, and accessibility before development begins.",
      },
      {
        step: "03",
        title: "Development & Integration",
        description:
          "Sprint-based delivery with working builds available after each sprint. Payment gateways, push notifications, and backend APIs integrated and tested on real devices.",
      },
      {
        step: "04",
        title: "QA, Submission & Handoff",
        description:
          "Full device matrix testing, App Store and Google Play submission, rejection-proof compliance checklist, and documented source code handover.",
      },
    ],
    techStack: ["Flutter", "React Native", "Dart", "TypeScript", "Firebase", "Supabase", "Stripe", "FCM"],
    turnaround: "8–16 weeks depending on complexity",
    pricing: [
      {
        name: "Starter",
        price: "£8,000",
        description: "MVP with core user flows on a single platform — ideal for validating your idea before scaling.",
        features: [
          "Single platform (iOS or Android)",
          "Core user flows (up to 8 screens)",
          "Firebase backend & auth",
          "Basic push notifications",
          "App Store or Play Store submission",
          "1-month post-launch support",
        ],
      },
      {
        name: "Growth",
        price: "£18,000",
        description: "Full cross-platform app with payments, admin dashboard, and both store submissions.",
        features: [
          "iOS & Android builds",
          "Payment gateway integration",
          "Offline-first data sync",
          "Admin dashboard",
          "Advanced push notification flows",
          "Both App Store & Play Store submissions",
          "3-month post-launch support",
        ],
      },
      {
        name: "Enterprise",
        price: "£35,000+",
        description: "Custom backend, real-time sync, and SLA support for high-traffic consumer or B2B apps.",
        features: [
          "Everything in Growth",
          "Custom Node.js or Supabase backend",
          "Real-time data sync",
          "Role-based access control",
          "Analytics & crash reporting",
          "Dedicated mobile architect",
          "6-month SLA support",
        ],
      },
    ],
    faqs: [
      {
        question: "Flutter or React Native — which do you recommend?",
        answer:
          "Flutter delivers closer-to-native performance and a more consistent UI across platforms. We recommend it for most new projects. React Native makes sense if your team already has a TypeScript/JavaScript codebase you want to share logic with.",
      },
      {
        question: "How do you handle App Store rejections?",
        answer:
          "Our submission checklist covers Apple and Google's most common rejection reasons — privacy labels, permissions, data handling, and performance benchmarks. We handle all resubmissions within the project scope at no extra cost.",
      },
      {
        question: "Can the app work without an internet connection?",
        answer:
          "Yes. Offline-first architecture is a standard feature in our Growth and Enterprise tiers. We use local data stores with background sync so users can continue working and changes reconcile when connectivity returns.",
      },
      {
        question: "Do you build the backend as well?",
        answer:
          "Yes. Starter projects use Firebase for rapid deployment. Growth and Enterprise projects use a custom Supabase or Node.js backend depending on your data model and scale requirements.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Custom Software & Internal Portals",
    summary:
      "Bespoke CRMs, lead routing engines, and automated client portals that replace manual processes and give your team real leverage.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    imageAlt: "Developer working on custom software dashboard with multiple screens",
    targetClient:
      "Property developers, healthcare businesses, and B2B companies needing bespoke CRMs, lead routing engines, or automated client portals that replace manual processes.",
    problemsSolved: [
      "Sales team manually routing leads in WhatsApp groups — leads going cold",
      "Client onboarding taking 3–5 days due to manual document collection",
      "Disconnected tools (CRM + accounting + project management) causing data silos",
      "No audit trail on lead status changes",
      "Spreadsheet-based reporting that's always out of date",
    ],
    deliverables: [
      "Custom CRM or lead management portal",
      "Automated WhatsApp & email lead routing",
      "Client onboarding workflow with document upload",
      "Role-based access control",
      "Real-time analytics dashboard",
      "Third-party API integrations (HubSpot, Salesforce, Zoho)",
      "Full source code ownership",
      "Staff training & documentation",
    ],
    process: [
      {
        step: "01",
        title: "Process Mapping",
        description:
          "We document your current manual workflows, identify the highest-value automation targets, and define the data model before any development begins.",
      },
      {
        step: "02",
        title: "Architecture & Prototyping",
        description:
          "System architecture, database schema, and interactive UI prototype reviewed and signed off by your team before we write production code.",
      },
      {
        step: "03",
        title: "Agile Development",
        description:
          "Two-week sprints with working software at the end of each sprint. Your team can use and test real features while development continues.",
      },
      {
        step: "04",
        title: "Training & Handover",
        description:
          "Staff training sessions, full technical documentation, and source code handover. Your team owns everything — no vendor lock-in.",
      },
    ],
    techStack: [
      "Node.js",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Drizzle ORM",
      "Redis",
      "AWS",
      "Docker",
    ],
    turnaround: "6–12 weeks depending on scope",
    pricing: [
      {
        name: "Starter",
        price: "£5,000",
        description: "Automate a single high-cost manual workflow and get your team out of WhatsApp groups.",
        features: [
          "Single workflow automation",
          "Custom data entry interface",
          "Basic role-based access",
          "Email notification system",
          "Source code ownership",
          "1-month post-launch support",
        ],
      },
      {
        name: "Growth",
        price: "£12,000",
        description: "Full CRM or client portal with lead routing, document management, and reporting.",
        features: [
          "Everything in Starter",
          "Full CRM or portal build",
          "Automated WhatsApp & email routing",
          "Document upload & approval flows",
          "Real-time analytics dashboard",
          "Third-party API integrations",
          "3-month post-launch support",
        ],
      },
      {
        name: "Enterprise",
        price: "£25,000+",
        description: "Enterprise-grade integrations, custom SLA, and dedicated engineering support.",
        features: [
          "Everything in Growth",
          "Enterprise API integrations (HubSpot, Salesforce, Zoho)",
          "Advanced audit trails & compliance logging",
          "Custom reporting & data exports",
          "Dedicated backend engineer",
          "Staff training programme",
          "6-month SLA support",
        ],
      },
    ],
    faqs: [
      {
        question: "We already use HubSpot/Salesforce — can you build on top of it?",
        answer:
          "Yes. We regularly build custom portals and automation layers that sit on top of existing CRMs via their APIs. You keep your current data while gaining the custom workflows your off-the-shelf tool can't deliver.",
      },
      {
        question: "Who owns the source code?",
        answer:
          "You do. Full source code is handed over at project completion with no ongoing licensing fees. We don't build on proprietary frameworks that create vendor lock-in.",
      },
      {
        question: "How do you handle data security and access control?",
        answer:
          "Every portal we build includes role-based access control, encrypted data storage, and audit logging as standard. For healthcare or financial data we implement additional compliance measures aligned to your regulatory requirements.",
      },
      {
        question: "Can you integrate with WhatsApp Business API?",
        answer:
          "Yes. WhatsApp Business API integration is one of our most requested features. We can route leads, send automated notifications, and log conversations directly into your CRM — all within a single working day of a hot lead coming in.",
      },
    ],
  },
  {
    slug: "paid-advertising",
    title: "Performance Paid Advertising",
    summary:
      "High-ROAS Meta, Google, and TikTok campaigns built around qualification funnels — not just clicks and impressions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Marketing analyst reviewing paid advertising performance dashboards",
    targetClient:
      "E-commerce brands, real estate developers, clinics, and B2B companies wanting qualified leads and measurable ROAS from Meta Ads, Google, and TikTok.",
    problemsSolved: [
      "Ad spend burning with no clear ROAS attribution",
      "Leads coming in from incorrect audiences — high volume, low quality",
      "No lead qualifying before reaching your sales team",
      "Creative fatigue killing performance after 2 weeks",
      "Agency markups on ad spend eating your budget",
    ],
    deliverables: [
      "Full Meta Ads (Facebook/Instagram) campaign setup",
      "Google Search & Shopping campaigns",
      "TikTok Ads creative & targeting",
      "Audience qualification funnels with OTP filters",
      "Landing page with multi-step qualifying questions",
      "Weekly performance reports with raw data access",
      "Monthly creative refresh cycle",
      "Zero markup on ad spend",
    ],
    process: [
      {
        step: "01",
        title: "Audit & Funnel Design",
        description:
          "We audit your existing accounts, landing pages, and tracking setup. We then design the qualification funnel architecture — the stage most agencies skip entirely.",
      },
      {
        step: "02",
        title: "Creative & Campaign Build",
        description:
          "Platform-native ad creative, audience segmentation, campaign structure, and conversion tracking all built before a single pound of ad spend is committed.",
      },
      {
        step: "03",
        title: "Launch & Data Collection",
        description:
          "Controlled launch with daily monitoring for the first two weeks. We validate lead quality with your sales team before scaling spend.",
      },
      {
        step: "04",
        title: "Optimise & Scale",
        description:
          "Weekly creative refresh, bid strategy adjustments, audience expansion, and monthly strategy reviews. You have raw data access at all times.",
      },
    ],
    techStack: [
      "Meta Ads Manager",
      "Google Ads",
      "TikTok Ads",
      "GA4",
      "Meta Pixel",
      "HubSpot",
      "Klaviyo",
    ],
    turnaround: "Live within 7 days of onboarding",
    pricing: [
      {
        name: "Starter",
        price: "£1,500/mo",
        description: "Single-platform campaigns for businesses starting their paid acquisition journey.",
        features: [
          "1 platform (Meta or Google)",
          "Up to £5,000 ad spend managed",
          "Qualification landing page",
          "Weekly performance report",
          "Monthly creative refresh",
          "Zero markup on ad spend",
        ],
      },
      {
        name: "Growth",
        price: "£3,000/mo",
        description: "Multi-platform campaigns with full funnel qualification and advanced audience targeting.",
        features: [
          "2 platforms (Meta + Google or TikTok)",
          "Up to £15,000 ad spend managed",
          "OTP lead qualification filter",
          "Multi-step qualifying landing page",
          "A/B creative testing",
          "CRM lead routing integration",
          "Weekly strategy call",
        ],
      },
      {
        name: "Enterprise",
        price: "£5,500/mo",
        description: "All platforms, unlimited spend management, and a dedicated growth strategist.",
        features: [
          "All platforms (Meta + Google + TikTok)",
          "Unlimited ad spend managed",
          "Dedicated growth strategist",
          "Full funnel attribution modelling",
          "Custom audience & lookalike architecture",
          "Monthly executive report",
          "Dedicated account Slack channel",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you charge a percentage of ad spend?",
        answer:
          "No. We charge a flat management fee only. Zero markup on ad spend means every pound of your budget goes directly to the platforms. This is non-negotiable for us — it removes the incentive to inflate your spend.",
      },
      {
        question: "How do you filter out fake or low-quality leads?",
        answer:
          "We build multi-step qualifying forms into the landing page — budget, timeline, and intent questions that filter out casual browsers. For higher-ticket services we add OTP mobile verification as an additional filter. Most clients see lead quality improve by 60–80% within the first month.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Meta campaigns typically show initial data within 48–72 hours of launch. Google Search can generate qualified leads on day one if the account is structured correctly. We aim for campaigns to be fully optimised by week four once the platform's algorithm has sufficient data.",
      },
      {
        question: "What happens if the ads aren't working?",
        answer:
          "We do not hide behind 'the algorithm needs more time'. If performance is below target at the four-week mark, we present a root cause analysis and a revised strategy. Our flat fee means we are as invested in results as you are.",
      },
    ],
  },
  {
    slug: "seo",
    title: "Technical & Programmatic SEO",
    summary:
      "Durable organic traffic built on Core Web Vitals, programmatic architecture, and high-authority link acquisition — compounding month over month.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
    imageAlt: "SEO specialist reviewing organic search rankings and technical audit data",
    targetClient:
      "E-commerce brands, local service businesses, real estate portals, and SaaS companies wanting durable organic traffic that compounds month over month.",
    problemsSolved: [
      "Site not appearing on Google Maps or local search results",
      "Core Web Vitals failing — Google actively penalising the site",
      "Thin content pages that Google ignores",
      "Backlink profile full of spam links from a previous agency",
      "Competitor ranking for all your money keywords",
    ],
    deliverables: [
      "Full technical SEO audit with priority fixes",
      "Core Web Vitals remediation",
      "Programmatic landing page architecture (100s of location/service pages)",
      "High-authority backlink acquisition campaign",
      "Google Business Profile optimisation & local Maps domination",
      "Monthly keyword tracking with rank movement report",
      "Schema markup implementation",
      "Ongoing content strategy aligned to search intent",
    ],
    process: [
      {
        step: "01",
        title: "Technical Audit",
        description:
          "Full crawl analysis, Core Web Vitals assessment, indexation review, and backlink profile audit. You receive a prioritised fix list ranked by revenue impact.",
      },
      {
        step: "02",
        title: "Architecture & Content Plan",
        description:
          "Keyword mapping to real pages, programmatic page architecture for high-volume location or category terms, and a content brief calendar aligned to search intent.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Technical fixes deployed, content published to brief, schema markup added, and backlink outreach campaign launched — all tracked in a shared reporting dashboard.",
      },
      {
        step: "04",
        title: "Track & Compound",
        description:
          "Monthly rank movement reports, Core Web Vitals monitoring, and quarterly strategy reviews. SEO compounds — month 6 is always stronger than month 1.",
      },
    ],
    techStack: [
      "Ahrefs",
      "Screaming Frog",
      "Google Search Console",
      "GA4",
      "PageSpeed Insights",
      "Next.js",
      "Sanity CMS",
    ],
    turnaround: "First results typically within 60–90 days",
    pricing: [
      {
        name: "Starter",
        price: "£1,200/mo",
        description: "Technical foundations fixed and consistent content output to start building authority.",
        features: [
          "Technical SEO audit & priority fixes",
          "Core Web Vitals remediation",
          "4 SEO content pieces per month",
          "Google Business Profile optimisation",
          "Monthly rank tracking report",
          "Search Console monitoring",
        ],
      },
      {
        name: "Growth",
        price: "£2,500/mo",
        description: "Full technical + content + link building for brands serious about organic dominance.",
        features: [
          "Everything in Starter",
          "Programmatic page architecture",
          "Link building campaign (4–6 placements/mo)",
          "Competitor gap analysis",
          "Schema markup implementation",
          "Monthly strategy session",
          "Quarterly content audit",
        ],
      },
      {
        name: "Enterprise",
        price: "£5,000/mo",
        description: "Programmatic SEO at scale with a dedicated authority acquisition campaign.",
        features: [
          "Everything in Growth",
          "100+ programmatic landing pages built",
          "High-authority link acquisition (10+ DR60+ links/mo)",
          "Full content production team",
          "Local Maps domination campaign",
          "Dedicated SEO lead",
          "Executive monthly report",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Technical fixes and Core Web Vitals improvements can show ranking movement within 30 days. Meaningful traffic growth from content and links typically takes 60–90 days. SEO is a compounding channel — clients on month 9 see significantly better returns than on month 2.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical SEO agency can guarantee specific positions — Google's algorithm is not ours to control. We guarantee the work: technical fixes implemented, content published to brief, links from verified real-traffic sites, and monthly reporting with honest progress against targets.",
      },
      {
        question: "What is programmatic SEO?",
        answer:
          "Programmatic SEO is the practice of automatically generating hundreds or thousands of landing pages targeting specific keyword combinations — for example, 'estate agents in [city]' or '[service] in [location]'. It is particularly powerful for property portals, e-commerce brands, and multi-location service businesses.",
      },
      {
        question: "Can you recover a site penalised by a previous agency?",
        answer:
          "Yes. We start with a full backlink audit, identify toxic or spammy links, submit disavow files to Google, and then build a clean authority acquisition campaign. Recovery timelines vary by the severity of the original damage but most sites see improvement within 60–90 days.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media & Creative Direction",
    summary:
      "Content that stops the scroll, builds audience trust, and drives direct enquiries — not just likes from followers who will never buy.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    imageAlt: "Creative team reviewing social media content on a smartphone",
    targetClient:
      "Property developers, luxury brands, clinics, restaurants, and e-commerce stores wanting content that stops the scroll, builds audience trust, and drives direct enquiries.",
    problemsSolved: [
      "Generic stock-photo content that gets 12 likes and zero enquiries",
      "No consistent brand voice across platforms",
      "Reels and TikToks with no hook — viewed for 0.8 seconds then skipped",
      "Social media team creating content with no commercial strategy",
      "No social proof funnel — testimonials and results buried in captions",
    ],
    deliverables: [
      "Monthly content calendar (30 posts/reels)",
      "Cinema-grade short-form video production (up to 8 reels/mo)",
      "Platform-native copy and captions",
      "Story sequences with swipe-up lead capture",
      "User-generated content strategy",
      "Monthly analytics report with engagement & reach breakdown",
      "Social proof funnel (reviews → highlights → conversions)",
      "Community management (comment & DM responses)",
    ],
    process: [
      {
        step: "01",
        title: "Brand Onboarding",
        description:
          "We define your brand voice, visual identity guidelines, target audience personas, and content pillars. This brief drives every piece of content we produce.",
      },
      {
        step: "02",
        title: "Content Strategy & Calendar",
        description:
          "Monthly content calendar with post types, hooks, captions, and publishing schedule — reviewed and approved by you before any content is created.",
      },
      {
        step: "03",
        title: "Production & Publishing",
        description:
          "Cinema-grade video production, on-brand graphic design, caption writing, and scheduled publishing across your platforms.",
      },
      {
        step: "04",
        title: "Analyse & Iterate",
        description:
          "Monthly analytics review covering reach, engagement quality, and DM enquiries. We adjust the content mix based on what is actually driving business results.",
      },
    ],
    techStack: [
      "Adobe Premiere Pro",
      "After Effects",
      "Canva Pro",
      "CapCut",
      "Meta Business Suite",
      "Hootsuite",
    ],
    turnaround: "Content ready within 2 weeks of brand onboarding",
    pricing: [
      {
        name: "Starter",
        price: "£1,000/mo",
        description: "Consistent presence with quality content for brands building their social foundation.",
        features: [
          "12 posts per month",
          "Platform-native captions",
          "Brand visual template setup",
          "1 platform (Instagram or LinkedIn)",
          "Monthly performance report",
          "Content calendar",
        ],
      },
      {
        name: "Growth",
        price: "£2,200/mo",
        description: "Full content production with reels, stories, and community engagement across 2 platforms.",
        features: [
          "30 posts per month",
          "4 short-form reels/videos",
          "Story sequences with lead capture",
          "2 platforms",
          "Community management",
          "Social proof funnel setup",
          "Monthly strategy session",
        ],
      },
      {
        name: "Enterprise",
        price: "£4,500/mo",
        description: "Full creative direction, video team, and community management for high-growth brands.",
        features: [
          "Everything in Growth",
          "8 cinema-grade reels per month",
          "Full video production team",
          "3+ platforms",
          "UGC strategy & outreach",
          "Influencer collaboration management",
          "Dedicated creative director",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you film the content or do we provide footage?",
        answer:
          "On the Growth and Enterprise tiers we manage full video production including filming and editing. On the Starter tier we work with footage you provide or design static and motion graphic content that doesn't require on-location filming.",
      },
      {
        question: "How do you measure whether social media is actually driving revenue?",
        answer:
          "We track direct DM enquiries, link-in-bio clicks, story swipe-ups, and profile visits from content that gets served to your target audience — not just vanity likes. For brands running paid ads alongside, we model the social attribution contribution.",
      },
      {
        question: "Can you manage TikTok as well as Instagram?",
        answer:
          "Yes. TikTok is available on Growth and Enterprise tiers. We create platform-native content for each channel rather than reposting the same video everywhere — the algorithm rewards native formats.",
      },
      {
        question: "What is the approval process for content?",
        answer:
          "You review and approve the content calendar and individual pieces before anything is published. We work in two-week production sprints so you always have visibility and sign-off control without the back-and-forth slowing down the calendar.",
      },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing & Brand Systems",
    summary:
      "Authority-building content that converts readers into buyers — long-form SEO, founder positioning, and sales enablement assets.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    imageAlt: "Content strategist writing and planning editorial calendar at a laptop",
    targetClient:
      "B2B companies, founders building personal brands, consultancies, and e-commerce brands wanting content that builds authority and converts readers into buyers.",
    problemsSolved: [
      "Blog posts with 12 views that contribute zero business value",
      "No founder thought leadership — competitors owning the industry narrative",
      "Pitch decks that confuse rather than convince investors and clients",
      "Content that covers topics but never addresses the buyer's actual objections",
      "No content distribution strategy — published and forgotten",
    ],
    deliverables: [
      "Quarterly content strategy aligned to business goals",
      "4 long-form SEO articles per month (1,500–3,000 words)",
      "Founder LinkedIn authority campaign",
      "Case study creation (2 per quarter)",
      "Sales enablement content (objection-handling scripts, pitch decks)",
      "Email nurture sequence (5–7 email series)",
      "Content repurposing system (article → LinkedIn posts → reels scripts)",
      "Monthly performance report",
    ],
    process: [
      {
        step: "01",
        title: "Strategy & Research",
        description:
          "Keyword and audience research, competitor content gap analysis, and a quarterly content plan mapped to your buyer's journey and business priorities.",
      },
      {
        step: "02",
        title: "Content Production",
        description:
          "Long-form SEO articles, case studies, and sales enablement assets written to your brand voice and reviewed against your positioning before publication.",
      },
      {
        step: "03",
        title: "Distribution & Repurposing",
        description:
          "Each long-form piece is repurposed into LinkedIn posts, email sequences, and short-form video scripts — maximising reach without proportionally increasing production cost.",
      },
      {
        step: "04",
        title: "Measure & Refine",
        description:
          "Monthly performance report covering organic traffic, time-on-page, conversion assists, and lead attribution. Content that works gets doubled down on.",
      },
    ],
    techStack: ["Ahrefs", "Notion", "Figma", "Canva Pro", "HubSpot", "Mailchimp"],
    turnaround: "First content batch within 10 business days",
    pricing: [
      {
        name: "Starter",
        price: "£800/mo",
        description: "Consistent SEO content output and a LinkedIn strategy to start building authority.",
        features: [
          "2 long-form SEO articles per month",
          "LinkedIn content strategy",
          "Content calendar",
          "Basic keyword research",
          "Monthly performance summary",
        ],
      },
      {
        name: "Growth",
        price: "£1,800/mo",
        description: "Full content system with articles, LinkedIn presence, and case studies that close deals.",
        features: [
          "4 long-form SEO articles per month",
          "Founder LinkedIn authority campaign",
          "2 case studies per quarter",
          "Content repurposing system",
          "Email nurture sequence",
          "Monthly strategy session",
        ],
      },
      {
        name: "Enterprise",
        price: "£3,500/mo",
        description: "Full content system with sales enablement and founder brand building.",
        features: [
          "Everything in Growth",
          "Sales enablement content (pitch decks, objection scripts)",
          "PR & thought leadership placement",
          "Full content distribution system",
          "Dedicated content strategist",
          "Quarterly content audit & refresh",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from a content agency that just writes blog posts?",
        answer:
          "Every piece we produce is mapped to a specific stage of your buyer's journey and a target keyword with real search volume. We also build the distribution system — repurposing, LinkedIn, and email — so content doesn't die on the day it's published.",
      },
      {
        question: "Can you match our existing brand voice?",
        answer:
          "Yes. We begin every engagement with a brand voice workshop and review a sample of your best-performing existing content before writing anything. We typically reach brand accuracy by the second piece.",
      },
      {
        question: "What is founder-led content and why does it matter?",
        answer:
          "Founder-led content uses the founder's name and perspective to build authority in your industry. It converts at significantly higher rates than brand content because buyers trust people before they trust companies. It also directly benefits recruitment, partnerships, and investor conversations.",
      },
      {
        question: "Do you handle the technical SEO as well?",
        answer:
          "Content marketing and SEO work best together. If you need both, we recommend pairing this service with our Technical & Programmatic SEO package for full coverage of on-page optimisation, technical health, and backlink acquisition.",
      },
    ],
  },
  {
    slug: "email-marketing",
    title: "Retention Systems & Email Automation",
    summary:
      "Recover lost revenue, increase LTV, and turn your email list into a predictable sales channel through automation and smart segmentation.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
    imageAlt: "Email marketing specialist reviewing automation flows and campaign analytics",
    targetClient:
      "E-commerce brands, SaaS companies, and service businesses wanting to recover lost revenue, increase LTV, and convert their email list into a reliable sales channel.",
    problemsSolved: [
      "85% cart abandonment with no automated recovery",
      "One-time buyers never coming back — zero retention strategy",
      "Email list of 10,000 subscribers generating almost no revenue",
      "Broadcast emails with 12% open rates and 0.5% click rates",
      "No post-purchase sequence to upsell or gather reviews",
    ],
    deliverables: [
      "Klaviyo or HubSpot account setup & migration",
      "Welcome series (5-email onboarding sequence)",
      "Cart abandonment flow (3-touch recovery)",
      "Post-purchase sequence with upsell & review request",
      "VIP retention programme for high-LTV customers",
      "Re-engagement campaign for dormant list segments",
      "Monthly broadcast calendar (4 sends/mo)",
      "A/B testing on subject lines and CTAs",
    ],
    process: [
      {
        step: "01",
        title: "Platform Audit & Setup",
        description:
          "We audit your current email platform, list health, deliverability, and existing flows. Migration or fresh setup completed before any campaign work begins.",
      },
      {
        step: "02",
        title: "Flow Architecture",
        description:
          "We map all automation flows — welcome, abandon, post-purchase, win-back — and present the full architecture for approval before building begins.",
      },
      {
        step: "03",
        title: "Copywriting & Build",
        description:
          "High-conversion email copy, on-brand design, and full flow build in Klaviyo or HubSpot. Every flow tested across major email clients before going live.",
      },
      {
        step: "04",
        title: "Optimise & Report",
        description:
          "Monthly A/B tests on subject lines, CTAs, and send timing. Monthly reports with revenue attributed to email, open rates, and segmentation performance.",
      },
    ],
    techStack: [
      "Klaviyo",
      "HubSpot",
      "Mailchimp",
      "Postmark",
      "Zapier",
      "Shopify",
      "WooCommerce",
    ],
    turnaround: "Flows live within 14 days of onboarding",
    pricing: [
      {
        name: "Starter",
        price: "£900/mo",
        description: "Core automation flows and a consistent broadcast calendar to start capturing lost revenue.",
        features: [
          "3 core automation flows",
          "2 broadcast emails per month",
          "List segmentation setup",
          "Platform setup or audit",
          "Monthly performance report",
        ],
      },
      {
        name: "Growth",
        price: "£1,800/mo",
        description: "Full automation suite with A/B testing and monthly optimisation.",
        features: [
          "8 automation flows",
          "4 broadcast emails per month",
          "A/B testing on subject lines & CTAs",
          "VIP retention programme",
          "Re-engagement campaign",
          "Advanced segmentation",
          "Monthly strategy session",
        ],
      },
      {
        name: "Enterprise",
        price: "£3,200/mo",
        description: "Full Klaviyo or HubSpot management with CRM sync and dedicated specialist.",
        features: [
          "Everything in Growth",
          "Full Klaviyo/HubSpot management",
          "CRM sync & integration",
          "SMS marketing flows",
          "Predictive send-time optimisation",
          "Dedicated email specialist",
          "Monthly executive revenue report",
        ],
      },
    ],
    faqs: [
      {
        question: "Klaviyo or HubSpot — which do you recommend?",
        answer:
          "Klaviyo is our default recommendation for e-commerce brands on Shopify or WooCommerce — it has the best native integrations and revenue attribution. HubSpot makes more sense for B2B or SaaS companies that need email tightly integrated with their CRM and sales pipeline.",
      },
      {
        question: "Our email list hasn't been contacted in 6 months — is it worth using?",
        answer:
          "Yes, but it requires careful handling. We start with a re-engagement campaign to identify active subscribers, then clean the list before any broadcast activity. This protects your sender reputation and ensures deliverability for all future campaigns.",
      },
      {
        question: "How much revenue can email marketing actually generate?",
        answer:
          "For e-commerce brands with an existing list, well-structured flows typically generate 20–35% of total revenue. Cart abandonment flows alone often recover 10–15% of abandoned carts. Results depend on your product margin, list size, and current automation maturity.",
      },
      {
        question: "Do you write the email copy or do we?",
        answer:
          "We write all copy as part of the service. You review and approve each email before it goes live. We match your brand voice from the onboarding brief and typically reach full accuracy within the first flow.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
