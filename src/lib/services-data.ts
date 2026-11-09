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

export type ServiceCategory = "get-customers" | "increase-sales" | "run-better";

export type Service = {
  slug: string;
  title: string;
  headline: string;
  category: ServiceCategory;
  categoryName: string;
  summary: string;
  image: string;
  imageAlt: string;
  targetClient: string;
  customerBenefits: string[];
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
    headline: "Get a Website That Turns Visitors Into Customers.",
    category: "increase-sales",
    categoryName: "Increase Your Sales",
    summary:
      "A fast, modern website engineered to build trust, showcase your products and services, generate qualified enquiries, and turn casual visitors into paying customers.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    imageAlt: "Modern high-speed website and customer dashboard interface",
    targetClient:
      "Established businesses, professional service firms, e-commerce brands, and growing enterprises wanting an online presence that actively wins contracts and sales.",
    customerBenefits: [
      "Build immediate trust and credibility with international and local buyers",
      "Showcase your services, products, and case studies with clarity",
      "Capture high-intent business enquiries through smart qualifying forms",
      "Sell products and accept payments online with frictionless checkout",
      "Easily update copy, images, and content without touching code",
      "Track every customer action so you know exactly which channels drive revenue",
    ],
    problemsSolved: [
      "Slow, outdated websites that lose 40%+ of visitors before the first page loads",
      "Generic off-the-shelf templates that make your business look like an amateur freelancer",
      "No content management system — every minor text update costs days and developer fees",
      "Contact forms that fill your inbox with spam and low-intent enquiries",
      "Zero analytics integration — flying blind on where customers come from and what converts",
    ],
    deliverables: [
      "Custom Next.js & React architecture built for sub-1.5 second loading speed",
      "Clean visual design system matched to your brand identity",
      "Multi-step lead qualification and inquiry capture flows",
      "Intuitive headless CMS (Sanity / Contentful) for effortless content updates",
      "Mobile-first responsive layout tested across 360px to 4K displays",
      "Built-in technical SEO, OpenGraph metadata, and schema markup",
      "Google Analytics 4, Meta Pixel, and conversion tracking configured",
      "Full source code ownership, documentation, and 30-day post-launch support",
    ],
    process: [
      {
        step: "01",
        title: "Understand Your Business",
        description:
          "We examine your target buyers, your commercial offer, and your sales journey before writing any code or designing screens.",
      },
      {
        step: "02",
        title: "Customer Journey & Wireframing",
        description:
          "We map the path a visitor takes from first landing to becoming an enquiry, validating layout, mobile view, and conversion touchpoints.",
      },
      {
        step: "03",
        title: "Design & Development",
        description:
          "Pixel-perfect build with high-speed performance, clean typography, secure integrations, and real-time CMS sync.",
      },
      {
        step: "04",
        title: "Launch & Team Training",
        description:
          "Staged deployment, DNS cutover, cross-device testing, and a live training walkthrough so your team can easily update content.",
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
        name: "Starter Business Platform",
        price: "£2,500",
        description: "Ideal for established service businesses requiring an authoritative, high-conversion web presence.",
        features: [
          "5 bespoke core pages built for conversion",
          "Headless CMS integration for effortless edits",
          "Multi-step lead qualification form",
          "Sub-2-second Core Web Vitals guarantee",
          "Google Analytics 4 & conversion setup",
          "Full mobile & desktop responsive testing",
          "30 days post-launch warranty & support",
        ],
      },
      {
        name: "Growth Commercial System",
        price: "£6,500",
        description: "For expanding brands needing custom product showcases, booking engines, or e-commerce workflows.",
        features: [
          "Complete design system & component library",
          "E-commerce or booking flow integration",
          "Advanced multi-step lead filtering with CRM sync",
          "Payment gateway setup (Stripe / Local gateways)",
          "Interactive product / service configurators",
          "Performance SLA (sub-1.5s LCP)",
          "90 days post-launch optimization & support",
        ],
      },
      {
        name: "Enterprise Custom Platform",
        price: "£15,000+",
        description: "High-traffic portals, multi-region operations, and bespoke customer web platforms.",
        features: [
          "Everything in Growth tier",
          "Custom API architectures & database integration",
          "Role-based access & client portal capabilities",
          "Multi-region localization & currency support",
          "Dedicated technical lead & account manager",
          "Strict uptime & performance SLA",
          "6 months dedicated SLA support",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do you build custom websites instead of using WordPress templates?",
        answer:
          "WordPress templates come bloated with unnecessary plugins, slow loading speeds, and frequent security vulnerabilities that turn high-paying customers away. Custom Next.js architectures load in under 1.5 seconds, rank higher on Google, and provide a secure, tailored experience built specifically to win business.",
      },
      {
        question: "Can our team update images and text without writing code?",
        answer:
          "Yes. Every platform we build includes an intuitive headless content management system. Your team can publish blog posts, add team members, update pricing, or edit testimonials with ease, without touching any code.",
      },
      {
        question: "Who owns the website and source code when completed?",
        answer:
          "You own 100% of the intellectual property, design assets, and source code. There are no ongoing proprietary licensing fees or vendor lock-in.",
      },
      {
        question: "Do you integrate with our existing CRM and marketing tools?",
        answer:
          "Yes. We connect your contact and booking forms directly to HubSpot, Salesforce, Zoho, WhatsApp, or your internal database so incoming leads are never lost.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "Mobile Applications",
    headline: "Give Your Customers a Better Way to Connect With Your Business.",
    category: "run-better",
    categoryName: "Run Your Business Better",
    summary:
      "Native-feel iOS and Android applications built to improve customer loyalty, streamline repeat ordering and booking, and give your business a permanent place on your customer's phone.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    imageAlt: "Mobile application interface on smartphone showing seamless user experience",
    targetClient:
      "E-commerce brands, real estate companies, healthcare clinics, logistics providers, and on-demand service businesses looking to increase customer retention and lifetime value.",
    customerBenefits: [
      "Keep your business one tap away on your customer's home screen",
      "Send targeted push notifications that drive repeat purchases and engagement",
      "Enable instant mobile booking, order tracking, and account management",
      "Work seamlessly offline with automatic background synchronization",
      "Process payments securely via Apple Pay, Google Pay, and credit cards",
      "Reduce customer support load with in-app self-service tools",
    ],
    problemsSolved: [
      "Customers abandoning mobile browser checkouts due to clunky forms",
      "Paying two separate engineering teams to build iOS and Android separately",
      "Zero customer re-engagement once they close their browser tab",
      "Apps getting rejected by Apple App Store or Google Play Store due to compliance issues",
      "Inability for field staff or customers to work when offline or with spotty connections",
    ],
    deliverables: [
      "High-performance cross-platform app for iOS and Android",
      "Native gesture control, smooth animations, and ergonomic UI",
      "Push notification architecture with automated customer triggers",
      "Offline-first local caching and automatic data synchronization",
      "Apple Pay, Google Pay, and Stripe payment integration",
      "Web-based admin portal to manage users, orders, and content",
      "Full App Store and Google Play compliance review and submission",
      "Documented source code and 90-day post-launch support",
    ],
    process: [
      {
        step: "01",
        title: "User Journey & Architecture",
        description:
          "We define the key mobile user journeys, screen flows, and offline sync requirements before touching the visual design.",
      },
      {
        step: "02",
        title: "Interactive Prototype",
        description:
          "Figma prototypes with platform-native gestures for iOS and Android, allowing you to test the complete user experience on a physical phone.",
      },
      {
        step: "03",
        title: "Agile Development",
        description:
          "Two-week sprint delivery with testable builds on TestFlight and Google Play Internal testing at every milestone.",
      },
      {
        step: "04",
        title: "Store Submission & Launch",
        description:
          "Full submission handling, privacy compliance approval, live store rollout, and operational monitoring.",
      },
    ],
    techStack: ["Flutter", "React Native", "Dart", "TypeScript", "Firebase", "Supabase", "Stripe", "FCM"],
    turnaround: "8–16 weeks depending on complexity",
    pricing: [
      {
        name: "MVP Mobile Application",
        price: "£8,000",
        description: "Fast-to-market single platform or streamlined cross-platform MVP for validating your business concept.",
        features: [
          "Core user flow (up to 8 tailored screens)",
          "User authentication & profile management",
          "Push notification setup",
          "Cloud database integration (Supabase/Firebase)",
          "App Store or Google Play Store submission",
          "30 days post-launch support",
        ],
      },
      {
        name: "Growth Commercial App",
        price: "£18,000",
        description: "Full dual-platform iOS & Android app with payment processing, admin dashboard, and offline support.",
        features: [
          "Full iOS & Android native builds",
          "In-app payments & subscriptions (Apple Pay / Google Pay / Stripe)",
          "Offline-first data sync architecture",
          "Web admin portal for content & order management",
          "Advanced segment-based push notification sequences",
          "Both Apple App Store and Google Play submissions handled",
          "90 days post-launch support & performance monitoring",
        ],
      },
      {
        name: "Enterprise Ecosystem",
        price: "£35,000+",
        description: "High-concurrency mobile platforms with custom backend, real-time sync, and enterprise integrations.",
        features: [
          "Everything in Growth tier",
          "Custom Node.js / PostgreSQL backend architecture",
          "Real-time bidirectional data synchronization",
          "Role-based access control & multi-tenant security",
          "Custom CRM, ERP, and inventory API synchronization",
          "Dedicated mobile architect & automated test suite",
          "6 months dedicated SLA support",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we build with Flutter or React Native?",
        answer:
          "Flutter provides near-native performance, pixel-perfect rendering across both iOS and Android, and faster compilation. We recommend Flutter for most new consumer and business apps. If your existing team already works with React and TypeScript, React Native is also an excellent option.",
      },
      {
        question: "How do you guarantee our app won't be rejected by Apple or Google?",
        answer:
          "We follow Apple's Human Interface Guidelines and Google's Material Design strictly. Our launch checklist covers all privacy nutrition labels, data collection disclaimers, account deletion requirements, and payment compliance, ensuring smooth store approval.",
      },
      {
        question: "Can users use the app without an active internet connection?",
        answer:
          "Yes. Our Growth and Enterprise applications include offline-first local storage. Users can browse content, draft forms, and view orders offline; all actions automatically sync when connection is restored.",
      },
      {
        question: "Do you also provide the backend server and database?",
        answer:
          "Yes. We design and deploy the secure cloud backend, authentication system, database, and admin management console so your entire mobile system functions seamlessly.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Custom Software & Internal Portals",
    headline: "Make Your Business Easier to Manage.",
    category: "run-better",
    categoryName: "Run Your Business Better",
    summary:
      "Bespoke CRMs, ERP modules, client portals, and inventory systems that eliminate repetitive manual spreadsheets, connect your tools, and give your leadership total operational clarity.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    imageAlt: "Executive business management portal and operations analytics dashboard",
    targetClient:
      "Growing companies, property developers, distribution businesses, professional service providers, and multi-location operations experiencing friction from manual data entry.",
    customerBenefits: [
      "Manage leads, customers, sales, and operations in one unified screen",
      "Cut hours of manual data entry and spreadsheet reconciliation every week",
      "Automate lead assignment so enquiries reach the right sales rep in seconds",
      "Give clients a secure portal to sign contracts, view project status, and pay invoices",
      "Gain real-time visibility into inventory, operational bottlenecks, and cash flow",
      "Eliminate expensive per-user monthly SaaS subscription fees as your team expands",
    ],
    problemsSolved: [
      "Sales reps losing high-value leads buried in WhatsApp chats or private spreadsheets",
      "Client onboarding taking days of manual emailing, document scanning, and chasing",
      "Scattered systems (accounting, CRM, project tracking) that cannot talk to each other",
      "Lack of accountability — zero audit trail on who approved an order or changed a lead status",
      "Off-the-shelf software demanding £100/user/month while forcing you to adapt your workflow to their limitations",
    ],
    deliverables: [
      "Custom web-based CRM, ERP, or client onboarding portal",
      "Automated WhatsApp, SMS, and email notification workflows",
      "Role-based access control with granular permissions and activity audit logs",
      "Real-time operational dashboard with exportable reports",
      "Integrations with QuickBooks, Xero, Stripe, WhatsApp Business API, and Google Workspace",
      "Encrypted cloud database architecture with automated daily backups",
      "Staff onboarding training sessions and video documentation",
      "Full source code ownership with zero recurring vendor licenses",
    ],
    process: [
      {
        step: "01",
        title: "Workflow Mapping",
        description:
          "We sit down with your operations team to map every step of your current manual workflow, identifying time drains and data bottlenecks.",
      },
      {
        step: "02",
        title: "Architecture & Data Modeling",
        description:
          "We design the database schemas, access roles, and user interface prototypes, ensuring the system reflects your exact operational reality.",
      },
      {
        step: "03",
        title: "Phased Sprint Delivery",
        description:
          "We build in 2-week agile sprints. You and your team test functional modules in a private staging environment every two weeks.",
      },
      {
        step: "04",
        title: "Migration, Training & Cutover",
        description:
          "We migrate your existing spreadsheet data, train your team, conduct parallel run testing, and support smooth operational cutover.",
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
        name: "Workflow Automation Module",
        price: "£5,000",
        description: "Automate a single high-friction manual process (e.g. client onboarding, lead intake, or quote generation).",
        features: [
          "Targeted workflow automation interface",
          "Role-based data entry with validation",
          "Automated email and webhook notifications",
          "PostgreSQL database setup and data import",
          "Full source code handover",
          "30 days post-launch support",
        ],
      },
      {
        name: "Full Business CRM / Portal",
        price: "£12,000",
        description: "Complete custom CRM or internal operations portal tailored to your company's exact sales and operational workflows.",
        features: [
          "Comprehensive CRM / ERP interface",
          "Automated WhatsApp Business & email lead routing",
          "Secure client document upload & approval workflows",
          "Executive analytics dashboard with CSV / PDF export",
          "Integrations with your accounting and communication tools",
          "Role-based access with detailed audit logging",
          "90 days post-launch support & team training",
        ],
      },
      {
        name: "Enterprise Operations Suite",
        price: "£25,000+",
        description: "Multi-department operational software replacing multiple legacy subscriptions across sales, inventory, and finance.",
        features: [
          "Everything in Growth tier",
          "Multi-location inventory and order tracking",
          "Custom API connectors for legacy enterprise databases",
          "Complex compliance reporting & automated audit trails",
          "Dedicated backend engineer during rollout",
          "Comprehensive staff training curriculum",
          "6 months dedicated SLA support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you build on top of our existing CRM like HubSpot or Salesforce?",
        answer:
          "Yes. We frequently build custom front-end portals, specialized quotation calculators, or client onboarding interfaces that connect seamlessly with your existing CRM via API. You keep your historical data while gaining custom capabilities.",
      },
      {
        question: "Are there any recurring user seat fees with custom software?",
        answer:
          "No. You own the code outright. Whether you have 5 employees or 500, you never pay per-seat licensing fees to us. You only pay for your own cloud hosting (typically £30–£150/month on AWS or DigitalOcean).",
      },
      {
        question: "How do you protect sensitive company and customer data?",
        answer:
          "Security is engineered into every layer: encrypted connections (TLS/HTTPS), role-based permissions preventing unauthorized access, database field encryption for sensitive records, and daily automated encrypted off-site backups.",
      },
      {
        question: "Can it integrate directly with WhatsApp for lead alerts?",
        answer:
          "Yes. We connect the official WhatsApp Business Cloud API directly into your custom software. When a new prospect submits an inquiry, your sales manager receives an instant notification with one-tap reply links.",
      },
    ],
  },
  {
    slug: "paid-advertising",
    title: "Performance Paid Advertising",
    headline: "Reach More Potential Customers and Generate Better Enquiries.",
    category: "get-customers",
    categoryName: "Get More Customers",
    summary:
      "Targeted Google Search, Meta (Facebook & Instagram), and TikTok advertising campaigns engineered with strict lead qualification to deliver real buyers, not wasted clicks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Digital marketing strategist reviewing high-ROAS paid campaign performance",
    targetClient:
      "B2B service providers, high-ticket real estate firms, e-commerce retailers, healthcare practices, and businesses needing a predictable, scalable stream of paying customers.",
    customerBenefits: [
      "Get in front of motivated buyers actively searching for your service on Google",
      "Target high-intent demographics, job titles, and locations on Meta and Instagram",
      "Filter out casual tire-kickers with multi-step qualification before leads reach your team",
      "Maintain 100% ownership and transparency of your ad accounts — zero agency lock-in",
      "Know your exact cost per qualified lead and return on advertising spend (ROAS)",
      "Zero hidden markups on ad spend — every pound goes straight to platform growth",
    ],
    problemsSolved: [
      "Burning marketing budget on boosted posts that generate likes but zero paying customers",
      "Sales team wasting hours calling low-quality leads who claim 'I clicked by accident'",
      "Agencies hiding real metrics behind vague vanity reports like impressions and CTR",
      "Ad performance dropping off a cliff after 2 weeks due to creative fatigue",
      "Agencies holding your ad account hostage when you want to make changes",
    ],
    deliverables: [
      "Complete Google Ads (Search, Performance Max, Remarketing) campaign build",
      "Meta Ads (Facebook & Instagram) campaign setup with custom audience segmentation",
      "Dedicated high-speed conversion landing page with qualification questions",
      "Server-side Conversions API (CAPI) and Google Tag Manager tracking configuration",
      "Continuous creative refresh (hooks, copy, video concepts, motion ads)",
      "Instant lead delivery to your phone and CRM via WhatsApp & email",
      "Weekly transparent sprint reports with raw platform data access",
      "Zero markup on advertising spend",
    ],
    process: [
      {
        step: "01",
        title: "Account & Funnel Audit",
        description:
          "We audit historical campaign data, tracking pixels, and landing pages to identify where your budget is leaking.",
      },
      {
        step: "02",
        title: "Creative & Qualification Architecture",
        description:
          "We produce platform-native ad creatives, persuasive copy, and a multi-step landing page that filters out low-intent prospects.",
      },
      {
        step: "03",
        title: "Controlled Launch & Data Gathering",
        description:
          "We launch campaigns under strict daily monitoring, validating lead quality with your sales team before increasing budget.",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        description:
          "We eliminate losing keywords and ad sets, scale winning audiences, and continuously test fresh creatives to prevent fatigue.",
      },
    ],
    techStack: [
      "Meta Ads Manager",
      "Google Ads",
      "TikTok Ads",
      "Google Tag Manager",
      "GA4",
      "Meta CAPI",
      "HubSpot",
      "Klaviyo",
    ],
    turnaround: "Live within 7 business days of onboarding",
    pricing: [
      {
        name: "Focused Channel Growth",
        price: "£1,500/mo",
        description: "Targeted single-platform campaign for businesses seeking a steady pipeline of qualified leads.",
        features: [
          "1 primary platform (Meta Ads or Google Search)",
          "Up to £5,000 monthly ad spend managed",
          "Conversion-focused landing page with qualification filter",
          "Full conversion tracking and server-side pixel setup",
          "Monthly ad creative refresh (static & copy)",
          "Weekly performance summary report",
          "Zero markup on platform ad spend",
        ],
      },
      {
        name: "Dual-Channel Scale",
        price: "£3,000/mo",
        description: "Multi-channel customer acquisition combining search intent (Google) with proactive targeting (Meta/TikTok).",
        features: [
          "2 platforms (Meta + Google or TikTok)",
          "Up to £15,000 monthly ad spend managed",
          "Multi-step lead qualification funnel with spam filtering",
          "Instant CRM & WhatsApp lead routing",
          "Continuous A/B creative testing (video hooks, angles)",
          "Bi-weekly strategic growth review call",
          "Direct access to performance lead",
        ],
      },
      {
        name: "Enterprise Growth Engine",
        price: "£5,500/mo",
        description: "Omnichannel customer acquisition with aggressive scaling and dedicated growth strategist.",
        features: [
          "All major platforms (Google, Meta, TikTok, LinkedIn)",
          "Unlimited ad spend managed",
          "Full multi-touch attribution modeling",
          "Dedicated senior growth strategist and creative director",
          "High-volume creative production cycle",
          "Dedicated Slack channel for real-time collaboration",
          "Comprehensive monthly executive revenue reporting",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you take a percentage markup on our advertising spend?",
        answer:
          "No, never. We operate on a flat management fee. You pay the ad platforms directly with your own card. This eliminates the conflict of interest where an agency tells you to spend more just so they earn more.",
      },
      {
        question: "How do you filter out fake or accidental leads?",
        answer:
          "We never rely on generic one-click Facebook forms that auto-fill old phone numbers. We send traffic to custom high-speed landing pages with multi-step intent questions (e.g. asking for project timeline, budget range, and specific requirements). This naturally eliminates accidental clicks.",
      },
      {
        question: "How quickly can we expect to see qualified enquiries?",
        answer:
          "Google Search campaigns capture existing intent and often produce qualified enquiries within the first 48 to 72 hours of going live. Meta campaigns typically stabilize and optimize within 7 to 14 days as algorithm machine learning collects conversion signals.",
      },
      {
        question: "Do we retain access to our ad accounts?",
        answer:
          "Yes, 100%. All campaigns are built inside your own business accounts. You maintain complete administrative ownership, full data access, and billing control at all times.",
      },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    headline: "Help More Customers Discover Your Business on Google.",
    category: "get-customers",
    categoryName: "Get More Customers",
    summary:
      "Durable, long-term organic search rankings built on technical health, Core Web Vitals, authoritative content, and genuine digital authority that compound month over month.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
    imageAlt: "SEO expert analyzing Google search console ranking growth and organic traffic",
    targetClient:
      "Local service businesses, e-commerce stores, national brands, and SaaS providers wanting reliable organic customer inquiries without ongoing ad spend costs.",
    customerBenefits: [
      "Appear prominently when potential clients search for what you sell on Google",
      "Generate high-intent organic enquiries month after month without paying for every click",
      "Dominate local Google Maps search results in your commercial territories",
      "Ensure fast page loading and compliance with Google's Core Web Vitals algorithms",
      "Build long-term brand authority that competitors cannot easily displace",
      "Receive transparent keyword ranking reports based on actual business enquiries",
    ],
    problemsSolved: [
      "Invisibility on Google search results while competitors win all the high-intent buyers",
      "Suffering Google algorithmic penalties due to spammy backlinks from past cheap agencies",
      "Slow, technically broken websites failing Core Web Vitals that Google refuses to rank",
      "Publishing dozens of random blog posts that attract zero commercial search traffic",
      "Having a Google Business Profile that doesn't show up in local top 3 map rankings",
    ],
    deliverables: [
      "Comprehensive technical SEO audit and direct code remediation",
      "Core Web Vitals speed optimization (LCP, INP, CLS benchmarks)",
      "High-intent commercial keyword mapping across services and locations",
      "Programmatic or structured landing page architecture for high-volume searches",
      "Google Business Profile optimization and local citation building",
      "Quality authority outreach and link acquisition from verified real-traffic sites",
      "Structured data schema markup (Organization, Service, FAQ, LocalBusiness)",
      "Monthly transparent rank tracking and organic enquiry attribution reports",
    ],
    process: [
      {
        step: "01",
        title: "Technical Health & Baseline Crawl",
        description:
          "We run deep crawls to identify broken links, crawl errors, indexation issues, and Core Web Vitals bottlenecks.",
      },
      {
        step: "02",
        title: "Commercial Intent Keyword Mapping",
        description:
          "We analyze what high-paying customers actually search when ready to buy, mapping every keyword to a dedicated, high-conversion page.",
      },
      {
        step: "03",
        title: "Technical Fixes & On-Page Optimization",
        description:
          "We implement technical repairs, rewrite metadata, optimize page speed, add structured schema, and publish authoritative content.",
      },
      {
        step: "04",
        title: "Authority Building & Compound Growth",
        description:
          "We execute genuine outreach to secure relevant editorial placements and monitor ranking progress as organic enquiries multiply.",
      },
    ],
    techStack: [
      "Google Search Console",
      "Ahrefs",
      "Screaming Frog",
      "Google PageSpeed Insights",
      "GA4",
      "Next.js SEO",
      "Schema.org",
    ],
    turnaround: "Initial technical improvements in 30 days; compounding traffic in 60–90 days",
    pricing: [
      {
        name: "Foundational Organic Growth",
        price: "£1,200/mo",
        description: "Technical health remediation, local search domination, and consistent high-intent content.",
        features: [
          "Complete technical audit and code remediation",
          "Core Web Vitals speed optimization",
          "Google Business Profile & local maps domination",
          "2 authoritative commercial content pieces / month",
          "Monthly rank tracking & Google Search Console review",
          "Dedicated technical SEO specialist",
        ],
      },
      {
        name: "Authority & Ranking Acceleration",
        price: "£2,500/mo",
        description: "Full-scale technical, content, and high-authority link acquisition for competitive industries.",
        features: [
          "Everything in Foundational tier",
          "Programmatic landing page architecture",
          "High-authority editorial backlink acquisition (4–6 placements/mo)",
          "Competitor keyword gap analysis and counter-strategy",
          "Complete schema markup implementation across all pages",
          "Monthly strategy and enquiry review session",
        ],
      },
      {
        name: "Market Leader Dominance",
        price: "£5,000/mo",
        description: "Aggressive organic expansion for national or global brands targeting high-volume competitive search markets.",
        features: [
          "Everything in Authority tier",
          "Enterprise programmatic SEO architecture (hundreds of indexed pages)",
          "Tier-1 digital PR & high-DR link acquisition campaign",
          "Full editorial content production team",
          "Multi-location local search dominance campaign",
          "Dedicated SEO Director and priority technical sprints",
        ],
      },
    ],
    faqs: [
      {
        question: "Can any agency guarantee the #1 spot on Google?",
        answer:
          "No ethical agency can guarantee the #1 ranking because Google's algorithm updates continuously and remains proprietary. What we guarantee is rigorous, proven execution: fixing every technical flaw, achieving 90+ Core Web Vitals, producing superior commercial content, and acquiring genuine editorial links that systematically move your rankings forward.",
      },
      {
        question: "How long does SEO take to start generating real business?",
        answer:
          "Technical fixes and speed improvements often lead to indexation improvements within 30 days. Meaningful commercial traffic and inbound enquiries typically gain strong momentum between months 2 and 4. Unlike ads, which stop the moment you stop paying, SEO assets compound and deliver returns for years.",
      },
      {
        question: "What is programmatic SEO?",
        answer:
          "Programmatic SEO is the practice of dynamically generating hundreds of targeted, high-quality landing pages for specific keyword variations (e.g. '[Service] in [City]' or '[Product Category] for [Industry]'). It allows you to capture large volumes of low-competition, high-intent searches efficiently.",
      },
      {
        question: "How do you avoid Google penalties?",
        answer:
          "We use only white-hat, Google-compliant methodologies. We never buy cheap private blog network (PBN) links or scrape low-quality AI content. We build real authority through speed, exceptional usability, and genuine editorial relationships.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media & Creative Direction",
    headline: "Build a Stronger Brand and Stay Connected With Your Customers.",
    category: "get-customers",
    categoryName: "Get More Customers",
    summary:
      "Strategic content creation, short-form video production, and social brand positioning designed to capture attention, build trust, and drive direct customer inquiries.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    imageAlt: "Creative team producing cinema-grade social media content and brand stories",
    targetClient:
      "Consumer brands, real estate developers, luxury retailers, medical clinics, and founders who want an unmistakable, premium presence across Instagram, LinkedIn, and TikTok.",
    customerBenefits: [
      "Transform your social profiles into an impressive digital showroom",
      "Capture scroll-stopping attention with professional short-form video reels",
      "Turn passive followers into active direct-message enquiries and booked appointments",
      "Establish your leadership and company as authoritative voices in your space",
      "Maintain a consistent, professional posting calendar without consuming your time",
      "Build social proof with customer reviews, project highlights, and behind-the-scenes stories",
    ],
    problemsSolved: [
      "Posting generic stock photos that get 10 random likes and zero commercial enquiries",
      "Spending hours trying to edit reels and videos instead of running your business",
      "Inconsistent posting where your company goes silent for weeks at a time",
      "Social media agencies that post decorative graphics with zero commercial strategy",
      "Missing out on inbound direct messages because nobody responds promptly",
    ],
    deliverables: [
      "Monthly strategic content calendar aligned with commercial goals",
      "High-production short-form video reels scripted, edited, and captioned",
      "Platform-native visual assets and carousels for Instagram, LinkedIn, and TikTok",
      "High-converting direct message scripts and bio optimization",
      "Customer review and case-study highlight systems",
      "Community management and rapid inquiry engagement",
      "Monthly analytics report measuring reach, engagement, and direct enquiries",
    ],
    process: [
      {
        step: "01",
        title: "Brand Voice & Visual Identity Brief",
        description:
          "We analyze your brand guidelines, customer psychology, and key commercial offers to create your unique content pillars.",
      },
      {
        step: "02",
        title: "Content Calendar & Scripting",
        description:
          "We plan monthly topics, write compelling video hooks, and prepare graphic concepts for your review and approval.",
      },
      {
        step: "03",
        title: "Production & Post-Production",
        description:
          "Professional editing, motion graphics, audio mastering, dynamic subtitles, and platform-optimized formatting.",
      },
      {
        step: "04",
        title: "Publishing & Community Engagement",
        description:
          "Scheduled publishing at peak audience hours, active conversation monitoring, and monthly performance reviews.",
      },
    ],
    techStack: [
      "Adobe Premiere Pro",
      "After Effects",
      "CapCut Pro",
      "Figma",
      "Meta Business Suite",
      "LinkedIn Campaign Manager",
    ],
    turnaround: "Full calendar and first assets ready within 10 days of onboarding",
    pricing: [
      {
        name: "Brand Presence",
        price: "£1,000/mo",
        description: "Maintain a polished, consistent presence with professional visuals and engaging captions.",
        features: [
          "12 tailored brand posts per month",
          "Custom visual templates & graphics",
          "1 platform (Instagram or LinkedIn)",
          "Monthly editorial calendar",
          "Bio optimization & link-in-bio setup",
          "Monthly reach and engagement report",
        ],
      },
      {
        name: "Growth & Video Engagement",
        price: "£2,200/mo",
        description: "High-impact short-form video reels, active story sequences, and inquiry-focused social management.",
        features: [
          "20 curated posts per month",
          "6 cinema-grade short-form video reels (scripted & edited)",
          "2 platforms (e.g. Instagram + LinkedIn or TikTok)",
          "Active story sequences with interactive polls & lead magnets",
          "Direct message engagement and inquiry escalation",
          "Monthly creative strategy review session",
        ],
      },
      {
        name: "Full Studio Creative Direction",
        price: "£4,500/mo",
        description: "Complete creative production, founder branding, and multi-channel domination for ambitious brands.",
        features: [
          "30+ multi-format posts per month",
          "12 premium short-form reels / TikToks with custom motion",
          "All major channels (Instagram, LinkedIn, TikTok, YouTube Shorts)",
          "Executive founder personal branding content",
          "Influencer & collaborative partnership management",
          "Dedicated creative director and motion designer",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we have to be on camera ourselves?",
        answer:
          "Not necessarily. While founder-led and team video performs exceptionally well, we can produce high-converting motion graphics, client case-study walkthroughs, product demonstrations, and voiceover-driven reels that do not require you to sit in front of a camera.",
      },
      {
        question: "Do you handle answering comments and direct messages?",
        answer:
          "Yes. On our Growth and Full Studio tiers, we monitor comments and direct messages daily. We answer common queries using approved FAQs and immediately route qualified business opportunities directly to your sales team.",
      },
      {
        question: "Can we review and approve all content before it goes live?",
        answer:
          "Always. We deliver your monthly content calendar two weeks in advance. Nothing is published without your team's explicit review and sign-off.",
      },
      {
        question: "How do you measure if social media is generating real business?",
        answer:
          "We track direct enquiries, link clicks, profile visits, and DM conversations rather than just vanity likes. Every piece of content is designed with a clear call-to-action that encourages interested buyers to take the next step.",
      },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing & Brand Authority",
    headline: "Build a Brand That Customers Recognize and Trust.",
    category: "get-customers",
    categoryName: "Get More Customers",
    summary:
      "Authoritative articles, founder thought leadership, case study narratives, and commercial sales enablement assets that answer customer objections and position your business as the obvious choice.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    imageAlt: "Content strategist writing authoritative long-form business articles",
    targetClient:
      "B2B enterprises, technology providers, consultancies, high-ticket agencies, and founders seeking to establish definitive market authority and accelerate deal closing.",
    customerBenefits: [
      "Equip your sales team with persuasive case studies and comparison guides that close deals faster",
      "Position your founder and executive team as respected voices on LinkedIn and industry media",
      "Answer your buyers' difficult commercial objections before they even get on a sales call",
      "Rank on search engines for high-value research queries that decision-makers search",
      "Repurpose every core idea into newsletters, social snippets, and sales PDFs",
      "Differentiate your company so you never have to compete purely on low price",
    ],
    problemsSolved: [
      "Writing generic blog articles that nobody reads and that generate zero commercial leads",
      "Sales cycles dragging out because prospects don't understand your unique value proposition",
      "Competitors winning deals simply because they have more visible thought leadership",
      "Sales reps constantly answering the same repetitive questions from scratch",
      "Spending money on content creation with no plan for distribution or repurposing",
    ],
    deliverables: [
      "Quarterly content strategy aligned with your sales objections and revenue priorities",
      "In-depth authoritative commercial articles (1,500–2,500 words each)",
      "Executive LinkedIn thought leadership posts for company founders",
      "In-depth customer success case studies with verifiable problem-solution narratives",
      "Sales enablement decks, comparison sheets, and objection-handling guides",
      "Multi-channel repurposing (converting 1 pillar piece into 5 social posts and 1 newsletter)",
      "Monthly content performance and lead-assist tracking",
    ],
    process: [
      {
        step: "01",
        title: "Commercial Positioning & Audience Research",
        description:
          "We interview your leadership and sales team to discover what questions, fears, and objections your buyers raise before signing.",
      },
      {
        step: "02",
        title: "Topic Architecture & Keyword Intent",
        description:
          "We map high-intent topics that target buyers during their decision-making phase, avoiding generic fluff.",
      },
      {
        step: "03",
        title: "Writing & Expert Review",
        description:
          "Deeply researched, articulate drafts written in your brand voice, incorporating real industry insights and technical accuracy.",
      },
      {
        step: "04",
        title: "Distribution & Repurposing",
        description:
          "We syndicate content across your website, executive LinkedIn profiles, client email sequences, and sales collateral.",
      },
    ],
    techStack: [
      "Notion",
      "Ahrefs",
      "Figma",
      "Google Docs",
      "LinkedIn Publishing",
      "Ghost / Sanity",
    ],
    turnaround: "First strategic editorial batch delivered within 10 business days",
    pricing: [
      {
        name: "Authority Starter",
        price: "£800/mo",
        description: "Consistent high-value articles and founder LinkedIn positioning to build credible online presence.",
        features: [
          "2 in-depth commercial SEO articles per month",
          "4 founder LinkedIn thought leadership posts",
          "Keyword and topic intent research",
          "Article graphics and formatted publishing",
          "Monthly content performance summary",
        ],
      },
      {
        name: "Market Authority System",
        price: "£1,800/mo",
        description: "Full content engine with articles, founder branding, case studies, and email distribution.",
        features: [
          "4 in-depth authoritative articles per month",
          "8 founder LinkedIn authority posts",
          "1 detailed customer case study per month",
          "Multi-channel repurposing into email and social formats",
          "Sales enablement PDF downloads",
          "Monthly content strategy and pipeline review",
        ],
      },
      {
        name: "Industry Leadership",
        price: "£3,500/mo",
        description: "Complete thought-leadership practice with whitepapers, PR placement, and sales enablement assets.",
        features: [
          "Everything in Market Authority tier",
          "Comprehensive industry whitepapers and research reports",
          "Full sales enablement suite (pitch decks, comparison guides)",
          "Editorial PR outreach and guest publication pitching",
          "Dedicated senior content strategist and editor",
          "Quarterly content audit and competitive gap refresh",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you ensure the content sounds authentic to our industry?",
        answer:
          "We begin with a structured briefing session with your founders or technical leaders. We record and transcribe your real perspectives, terminology, and client stories so the writing mirrors your actual voice and expertise, never sounding like generic AI copy.",
      },
      {
        question: "How does content marketing directly assist our sales team?",
        answer:
          "When prospects ask common questions about pricing, implementation timelines, or competitor comparisons, your sales team can send authoritative, branded articles that answer those questions thoroughly, shortening sales cycles by up to 50%.",
      },
      {
        question: "What is founder-led content?",
        answer:
          "Founder-led content shares the personal perspectives, lessons, and strategic viewpoints of your company leadership on platforms like LinkedIn. Decision-makers trust people before companies, making founder content one of the highest-converting B2B channels available.",
      },
      {
        question: "Do you also handle publishing the content to our CMS?",
        answer:
          "Yes. We format, upload, optimize meta tags, add internal links, and publish directly to your CMS so you don't have to spend time on formatting.",
      },
    ],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing & Retention Systems",
    headline: "Turn Existing Customers Into Repeat Buyers.",
    category: "increase-sales",
    categoryName: "Increase Your Sales",
    summary:
      "Automated lifecycle email flows, customer segmentation, and strategic broadcast campaigns that recover abandoned carts, increase repeat orders, and maximize customer lifetime value.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
    imageAlt: "Marketing automation expert configuring customer lifecycle email flows",
    targetClient:
      "E-commerce stores, subscription businesses, SaaS companies, and service providers with an existing list of past leads or buyers waiting to be monetized.",
    customerBenefits: [
      "Automatically recover lost sales from customers who abandon their cart or enquiry",
      "Generate predictable, recurring revenue from your existing customer database",
      "Welcome new subscribers with an engaging onboarding sequence that builds trust",
      "Re-engage inactive contacts with targeted, personalized incentives",
      "Protect your email sender reputation so your emails land in the primary inbox",
      "Understand exact revenue attributed directly to every email sent",
    ],
    problemsSolved: [
      "Over 70% of potential buyers leaving items in their cart and never returning",
      "Relying entirely on expensive paid ads for every single sale instead of repeat purchases",
      "Having an email list of thousands of subscribers that generates zero revenue",
      "Sending sporadic blast emails that end up in the spam or promotions folder",
      "No automated follow-up when an existing customer hasn't purchased in 60 days",
    ],
    deliverables: [
      "Complete Klaviyo, HubSpot, or ActiveCampaign account audit & setup",
      "High-converting abandoned checkout & browse recovery automation (3-part flow)",
      "Brand welcome & indoctrination sequence (4-part flow)",
      "Post-purchase cross-sell, review gathering, and loyalty sequence",
      "Customer win-back & sunset re-engagement flows",
      "Advanced customer segmentation based on purchase frequency and lifetime value",
      "Deliverability, SPF, DKIM, and DMARC verification",
      "Monthly campaign broadcasts and revenue attribution reporting",
    ],
    process: [
      {
        step: "01",
        title: "List Health & Deliverability Audit",
        description:
          "We inspect your current email platform, verify domain authentication records (DMARC, SPF, DKIM), and clean dormant subscribers to protect inbox placement.",
      },
      {
        step: "02",
        title: "Lifecycle Flow Architecture",
        description:
          "We map every customer transition: welcome, abandon, first purchase, cross-sell, VIP reward, and re-engagement.",
      },
      {
        step: "03",
        title: "Copywriting & Responsive Design",
        description:
          "We write persuasive copy, design responsive branded email templates, and configure behavioral triggers inside your platform.",
      },
      {
        step: "04",
        title: "Testing, Launch & Continuous Optimization",
        description:
          "We test across desktop, mobile, and dark mode clients, launch flows, and continuously run A/B tests on subject lines and send times.",
      },
    ],
    techStack: [
      "Klaviyo",
      "HubSpot",
      "Mailchimp",
      "Postmark",
      "Shopify Plus",
      "WooCommerce",
      "Zapier",
    ],
    turnaround: "Core automated flows live within 14 business days",
    pricing: [
      {
        name: "Essential Flow Setup",
        price: "£900/mo",
        description: "Core revenue recovery flows and 2 monthly campaign broadcasts for growing online brands.",
        features: [
          "3 high-impact core automations (Abandoned Cart, Welcome, Post-Purchase)",
          "2 targeted monthly broadcast campaigns",
          "Basic list segmentation & deliverability setup",
          "Mobile-responsive branded email templates",
          "Monthly revenue attribution report",
        ],
      },
      {
        name: "Full Retention Suite",
        price: "£1,800/mo",
        description: "Comprehensive lifecycle marketing, continuous A/B testing, and weekly campaign execution.",
        features: [
          "8 comprehensive automated flows (Browse abandon, VIP, Win-back, etc.)",
          "4 targeted monthly broadcast campaigns",
          "A/B testing on subject lines, visual designs, and send timing",
          "Advanced behavioral segmentation (RFM modeling)",
          "SMS marketing integration where applicable",
          "Bi-weekly strategy and revenue review call",
        ],
      },
      {
        name: "Enterprise Lifecycle Management",
        price: "£3,200/mo",
        description: "Complete email & SMS retention engine with predictive analytics and dedicated email strategist.",
        features: [
          "Everything in Full Retention tier",
          "Full Klaviyo or HubSpot account management",
          "Omnichannel sync (Email, SMS, WhatsApp, and CRM)",
          "Predictive send-time optimization and personalized dynamic blocks",
          "Dedicated email copywriter and designer",
          "Executive monthly revenue attribution report",
        ],
      },
    ],
    faqs: [
      {
        question: "How much revenue can email marketing realistically generate?",
        answer:
          "For established e-commerce brands, a properly configured retention system typically generates 20% to 35% of total company revenue. Automated flows like abandoned checkout alone recover 10% to 18% of lost orders automatically without ongoing ad spend.",
      },
      {
        question: "Which platform do you recommend: Klaviyo or HubSpot?",
        answer:
          "For e-commerce brands on Shopify or WooCommerce, Klaviyo is the industry gold standard due to its deep catalog integration and revenue tracking. For B2B companies, healthcare clinics, or professional services, HubSpot is our top recommendation for its unified CRM and pipeline alignment.",
      },
      {
        question: "Will your emails land in the primary inbox or the spam folder?",
        answer:
          "We set up proper technical domain authentication (SPF, DKIM, DMARC), implement Google and Yahoo bulk-sender compliance rules, and prune inactive contacts so your sender reputation remains stellar and emails land where buyers see them.",
      },
      {
        question: "Do you write all the copy and design the graphics?",
        answer:
          "Yes. Our team handles the entire process: copywriting, subject lines, design, platform configuration, and testing. You only need to review and approve.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Business Automation",
    headline: "Spend Less Time on Repetitive Work. Focus More on Growing Your Business.",
    category: "run-better",
    categoryName: "Run Your Business Better",
    summary:
      "Practical AI workflows, automated lead response systems, intelligent document processing, and customer support bots that save your team dozens of hours each week while speeding up customer service.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1200&q=80",
    imageAlt: "AI workflow and automated business operations dashboard",
    targetClient:
      "Businesses spending excessive hours on repetitive manual work, data entry, lead routing, customer inquiries, invoice processing, or quote generation.",
    customerBenefits: [
      "Respond to hot customer inquiries in under 60 seconds, 24/7",
      "Automate repetitive data transfers between your website, CRM, and accounting software",
      "Deploy intelligent AI customer support assistants trained specifically on your business docs",
      "Extract data automatically from incoming invoices, PDFs, and contracts without manual typing",
      "Free up your team to focus on high-value client relationships and sales closing",
      "Eliminate human entry errors and communication delays across your company",
    ],
    problemsSolved: [
      "Leads cooling down because nobody responds for hours or over the weekend",
      "Staff spending 15+ hours every week copying data across disconnected software",
      "Customer support inbox overloaded with repetitive questions about hours, pricing, and status",
      "Manual quotation generation taking days while competitors respond in minutes",
      "Disorganized document filing where important contracts and receipts get misplaced",
    ],
    deliverables: [
      "Custom AI chatbot or WhatsApp assistant trained on your knowledge base",
      "End-to-end webhook and automation workflows (Make.com, n8n, Zapier, Python)",
      "Automated lead qualification and CRM enrichment pipeline",
      "Automated invoice and document parsing directly into your accounting software",
      "Automated follow-up reminders and appointment booking triggers",
      "Internal team documentation, testing protocols, and fallback escalation rules",
      "60-day warranty and performance monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Bottleneck Identification",
        description:
          "We analyze your operations to find the repetitive tasks consuming the most employee hours with the highest potential return on automation.",
      },
      {
        step: "02",
        title: "Workflow Design & Prompt Engineering",
        description:
          "We map the automated data paths, create custom AI prompt guardrails, and design fallback procedures for human intervention.",
      },
      {
        step: "03",
        title: "Build & Private Sandbox Testing",
        description:
          "We construct the automation logic, connect your APIs, and thoroughly test edge cases with synthetic data before live deployment.",
      },
      {
        step: "04",
        title: "Deployment & Staff Enablement",
        description:
          "We launch the workflows, monitor error logs in real time, and train your staff on how to manage and supervise the automated systems.",
      },
    ],
    techStack: [
      "Python",
      "OpenAI API",
      "Make.com",
      "n8n",
      "PostgreSQL",
      "WhatsApp Cloud API",
      "Supabase",
      "Docker",
    ],
    turnaround: "3–6 weeks depending on workflow complexity",
    pricing: [
      {
        name: "Single Workflow Automation",
        price: "£2,000",
        description: "Automate a single critical bottleneck (e.g. instant WhatsApp lead responder or invoice parser).",
        features: [
          "1 complete end-to-end automation workflow",
          "Connecting up to 3 business tools (e.g. Website → CRM → WhatsApp)",
          "Error handling and notification fallback",
          "Testing and live deployment",
          "Staff training walkthrough",
          "30 days post-launch support",
        ],
      },
      {
        name: "Intelligent Business Assistant",
        price: "£5,500",
        description: "Custom AI assistant trained on your company data to answer customer inquiries and qualify leads 24/7.",
        features: [
          "Custom AI assistant trained on your company documents and FAQs",
          "Integration with WhatsApp, website chat, or internal Slack",
          "Automated lead qualification and booking scheduling",
          "Human escalation triggers when complex questions arise",
          "Multi-tool data sync (CRM, calendar, email)",
          "60 days post-launch optimization & support",
        ],
      },
      {
        name: "Full Operations Automation",
        price: "£12,000+",
        description: "Complete operational overhaul replacing manual data entry across marketing, sales, support, and finance.",
        features: [
          "Multi-department automation architecture (n8n / custom Python microservices)",
          "Intelligent document parsing (invoices, receipts, legal docs)",
          "Custom bidirectional API connectors between legacy systems",
          "Centralized operations error monitoring dashboard",
          "Strict privacy and data isolation compliance",
          "Dedicated automation engineer and 6 months SLA support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the AI hallucinate or make up false promises to our customers?",
        answer:
          "No. We implement strict guardrails and Retrieval-Augmented Generation (RAG). The AI is explicitly instructed to answer only from your approved knowledge base documents. If a question falls outside its scope, it gracefully escalates the conversation to your human team.",
      },
      {
        question: "Do we have to pay expensive ongoing software fees for the automations?",
        answer:
          "We design cost-efficient solutions. Whenever possible, we build on self-hosted tools like n8n or Python microservices where you only pay standard cloud server costs (£15–£40/month), avoiding steep enterprise monthly automation platform fees.",
      },
      {
        question: "Can it integrate with WhatsApp?",
        answer:
          "Yes. We use the official Meta WhatsApp Business Cloud API. Your business can send automated notifications, qualify prospects via interactive buttons, and let customers check order status directly inside WhatsApp.",
      },
      {
        question: "How do we know the automations won't break when tools update?",
        answer:
          "Every automation we deploy includes built-in error handling, alert webhooks, and retry logic. If any third-party service experiences downtime, the system notifies your team immediately and queues the data so nothing is ever lost.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
