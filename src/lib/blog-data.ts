export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  serviceSlug: string;
  serviceName: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
};

export const articles: BlogArticle[] = [
  {
    slug: "what-is-roas-and-why-most-agencies-lie-about-it",
    title: "What Is ROAS — And Why Most Agencies Lie About It",
    category: "Paid Advertising",
    serviceSlug: "paid-advertising",
    serviceName: "Performance Paid Advertising",
    readTime: "6 min read",
    date: "15 Jan 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    imageAlt: "Analytics dashboard showing ROAS metrics",
    summary:
      "ROAS is the most misquoted metric in digital advertising. Here's how agencies inflate it — and what you should actually be measuring.",
    intro:
      "Every agency promises you a great ROAS. Some will show you screenshots of 8x, 12x, even 20x return on ad spend. But when you look at your actual bank account, the numbers rarely match. ROAS manipulation is one of the most widespread problems in digital advertising — and understanding how it works is the first step to demanding real accountability from the people managing your money.",
    sections: [
      {
        heading: "What ROAS Actually Means",
        paragraphs: [
          "Return on Ad Spend (ROAS) is a simple ratio: revenue attributed to ads divided by money spent on ads. A 4x ROAS means for every £1 you spent, £4 in revenue was attributed to those campaigns. The operative word is 'attributed' — and that's where most of the manipulation happens.",
          "In isolation, ROAS tells you nothing about profit. A 6x ROAS on a product with 15% margins can still lose you money after shipping, returns, platform fees, and agency costs. ROAS is a directional signal, not a business result.",
        ],
        points: [
          "ROAS = Revenue attributed to ads ÷ Ad spend",
          "Attribution ≠ causation — the customer may have bought anyway",
          "High ROAS with low margins can still mean a loss",
          "Platform-reported ROAS always includes platform bias",
        ],
      },
      {
        heading: "How Agencies Inflate the Number",
        paragraphs: [
          "The most common tactic is widening the attribution window. Set a 28-day click attribution window and suddenly every purchase in the next four weeks gets credited to your ads — including customers who would have converted organically. Narrowing to a 1-day click window typically cuts reported ROAS in half, but reveals a much more honest picture.",
          "A second tactic is including brand search campaigns in the blended ROAS. Someone who already knows your brand searches your name and clicks a paid brand ad. That sale gets credited to paid advertising with a massive ROAS — but you would have made that sale through organic search for free. Separating brand and non-brand ROAS is non-negotiable.",
          "Agencies also inflate figures by reporting on revenue from assisted conversions — clicks that happened weeks ago and are tangentially related to the sale. The result is a headline number that looks great in a monthly report but bears no relationship to your actual growth.",
        ],
        points: [
          "28-day attribution windows inflate ROAS by 40–60% vs 1-day click",
          "Brand search campaigns routinely show 15x+ ROAS — they measure existing demand, not growth",
          "Assisted conversions should be reported separately, not blended",
          "View-through attribution is the loosest — avoid including it in headline ROAS",
        ],
      },
      {
        heading: "What Metrics Actually Matter",
        paragraphs: [
          "The metrics that connect to business outcomes are Cost Per Qualified Lead (CPQL), Customer Acquisition Cost (CAC), and Lifetime Value (LTV). These require more setup but give you numbers you can actually make decisions with.",
          "CPQL measures what you pay for a lead that meets your qualification criteria — budget, intent, timeline. If you're a property developer, a CPQL of £45 for a verified, in-market buyer is far more valuable than a ROAS of 6x driven by a £15 average order value e-commerce store.",
          "CAC tells you the total cost to acquire a paying customer across all marketing and sales spend. LTV tells you how much that customer is worth over their lifetime. When LTV exceeds CAC by 3x or more, you have a growth engine. When it doesn't, no ROAS figure will save you.",
        ],
        points: [
          "Cost Per Qualified Lead (CPQL) — qualified by budget, timeline, and intent",
          "Customer Acquisition Cost (CAC) — total spend divided by new customers",
          "Lifetime Value (LTV) — average revenue per customer over their full relationship",
          "LTV:CAC ratio — healthy at 3:1 or higher",
        ],
      },
      {
        heading: "How to Audit Your Agency's Reporting",
        paragraphs: [
          "Start by asking for non-brand ROAS broken out separately from brand campaigns. If your agency can't or won't provide this breakdown, that tells you everything. Then check the attribution window being used — anything longer than 7-day click is worth scrutinising on a market-by-market basis.",
          "Request a reconciliation between ad platform revenue and actual revenue in your payment processor or CRM. The gap between platform-reported revenue and actual revenue is your attribution inflation number. For most accounts, it ranges from 20% to 70% — meaning real ROAS is significantly lower than what's being reported.",
          "Finally, ask what the cost per new customer was last month — not cost per click, not cost per lead, but cost per new paying customer. If your agency can't answer that question, they're not running a growth system. They're running a traffic system.",
        ],
        points: [
          "Separate brand from non-brand ROAS immediately",
          "Compare platform revenue to payment processor revenue monthly",
          "Demand a 7-day click attribution comparison against longer windows",
          "Ask for cost per new paying customer, not just cost per lead",
        ],
      },
    ],
  },
  {
    slug: "real-estate-lead-funnels-that-actually-work-in-2026",
    title: "Real Estate Lead Funnels That Actually Work in 2026",
    category: "Lead Generation",
    serviceSlug: "paid-advertising",
    serviceName: "Performance Paid Advertising",
    readTime: "8 min read",
    date: "22 Jan 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    imageAlt: "Modern real estate development",
    summary:
      "Most property developers are running awareness campaigns when they need qualification funnels. This is how we generate verified buyer inquiries.",
    intro:
      "Property developers in Pakistan and the UK face the same core problem: their sales teams are drowning in unqualified enquiries while actual buyers slip away. A Facebook boost campaign generates 500 leads a month, and 480 of them are tyre-kickers, students, or people who clicked by accident. The solution isn't more budget — it's a qualification architecture that filters intent before a lead ever reaches your sales manager.",
    sections: [
      {
        heading: "Why Generic Lead Forms Fail for Real Estate",
        paragraphs: [
          "A standard Facebook Lead Ad with a two-field form (name + phone) will generate a low cost per lead that looks great in reports. It will also generate a sales team that hates their job. The leads are cheap because they require zero commitment — someone can submit their details without reading the headline, understanding the price, or having any real intent to buy.",
          "Property purchases are high-consideration decisions. A qualified buyer for a 2-bedroom apartment in Karachi's DHA has a specific budget, a genuine timeline, and a reason to buy now rather than later. Generic forms capture none of this, leaving your sales team to pre-qualify hundreds of leads manually — at significant cost in time and morale.",
          "The shift to intent-based qualification funnels typically increases cost per lead by 60–120% while reducing junk leads by 70–85%. The net result is a lower cost per qualified buyer meeting — which is the only metric your sales director actually cares about.",
        ],
      },
      {
        heading: "The Multi-Step Qualification Funnel Architecture",
        paragraphs: [
          "A high-performance real estate funnel has three stages: hook, qualify, and convert. The hook is a paid ad that speaks directly to a specific buyer type — not 'luxury apartments' but 'ready-to-move 2-bed DHA apartments for overseas Pakistanis returning in 2026'. Specificity pre-qualifies at the ad level, meaning people who click are already partially matched.",
          "The qualification stage is a multi-step landing page — not a single form. Step 1 asks about property type and location preference. Step 2 asks about budget range and payment type (cash, installment, mortgage). Step 3 asks about timeline. Only after completing all three steps does the user reach the contact details form.",
          "This architecture increases time-on-page, signals high intent to both the platform and your sales team, and creates a natural drop-off point for low-intent traffic. Conversion rates from qualified enquiry to booked site visit typically run 3–5x higher than generic lead form campaigns.",
        ],
        points: [
          "Hook stage: ad copy with specific buyer type, location, and price signal",
          "Qualify stage: 3-step form covering property type, budget range, and timeline",
          "Convert stage: contact details + WhatsApp opt-in after qualification",
          "Each step reduces junk while increasing committed buyer signals",
        ],
      },
      {
        heading: "OTP Verification and Spam Filtering",
        paragraphs: [
          "A verified phone number is the single most effective spam filter in real estate lead generation. Adding an OTP (one-time password) verification step — where the user must enter a code sent to their WhatsApp or SMS — eliminates fake numbers instantly and adds a committed action that low-intent browsers are unwilling to complete.",
          "Beyond OTP, honeypot fields (hidden form fields that real users never fill but bots always do) and velocity filtering (blocking more than three submissions from the same IP in 24 hours) remove a significant percentage of junk traffic at the infrastructure level.",
          "The combined effect of OTP verification and honeypot filtering typically removes 40–60% of form submissions before they reach your CRM — leaving only real people with real phone numbers. This is the difference between a sales team that converts 3% of leads and one that converts 18%.",
        ],
        points: [
          "OTP verification via WhatsApp or SMS eliminates fake numbers",
          "Honeypot fields block automated bot submissions",
          "IP velocity filtering prevents bulk spam submissions",
          "Phone number format validation ensures correct country codes",
        ],
      },
      {
        heading: "WhatsApp Routing for 60-Second Hot Lead Response",
        paragraphs: [
          "Speed to lead is the single biggest variable in real estate conversion. Multiple studies have shown that responding to a property enquiry within 5 minutes is 21x more effective than responding within 30 minutes. In Pakistan's DHA and Bahria Town markets, where multiple developers are running competing campaigns, being first to call is often the difference between a booking and a lost deal.",
          "The technical implementation is straightforward: when a qualified lead completes the funnel, an automated webhook fires to your CRM and simultaneously sends a WhatsApp message to your sales manager with the lead's full qualification data — budget, timeline, property interest, and phone number. The sales manager receives a formatted card they can tap to call or WhatsApp directly, with zero data entry required.",
          "For larger developer teams, we implement routing logic: leads with budgets above a threshold go directly to a senior sales manager, overseas Pakistani leads are routed to the dedicated NRP desk, and leads with a 3-month timeline are marked as hot and escalated immediately. This is growth infrastructure, not just advertising.",
        ],
        points: [
          "Sub-60-second lead notification to sales manager via WhatsApp",
          "Full qualification data included in every notification — no manual lookup",
          "Routing logic by budget tier, geography, and urgency",
          "CRM auto-population prevents manual data entry errors",
        ],
      },
    ],
  },
  {
    slug: "why-your-website-speed-is-killing-your-conversions",
    title: "Why Your Website Speed Is Killing Your Conversions (And How to Fix It)",
    category: "Technical SEO",
    serviceSlug: "seo",
    serviceName: "Technical & Programmatic SEO",
    readTime: "5 min read",
    date: "29 Jan 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    imageAlt: "Server performance monitoring",
    summary:
      "A 1-second delay reduces conversions by 7%. Google penalises slow sites in rankings. Here are the exact fixes that move the needle.",
    intro:
      "Website speed is a revenue problem, not a technical nicety. Google's own data shows that as page load time goes from 1 second to 3 seconds, the probability of bounce increases by 32%. From 1 to 5 seconds, it's 90%. Every extra second of load time is costing you customers who made a decision to leave before they ever saw your offer — and Google is penalising your rankings at the same time.",
    sections: [
      {
        heading: "The Data on Speed and Conversion Loss",
        paragraphs: [
          "Walmart found that for every 1-second improvement in page load time, they saw a 2% increase in conversions. Google found that a 0.1-second improvement in mobile load time increased retail conversions by 8.4%. These aren't marginal gains — across the lifetime of a business, they compound into significant revenue differences.",
          "For mobile users in Pakistan, where 4G speeds vary significantly between networks and cities, the impact is even more pronounced. A site that loads in 2 seconds on a fast UK broadband connection can take 7–12 seconds on a mid-tier Zong or Telenor connection. If your audience is primarily mobile in Pakistan, speed is not a nice-to-have — it's a market access issue.",
        ],
        points: [
          "1-second delay = 7% conversion rate reduction (Akamai research)",
          "53% of mobile users abandon a site that takes longer than 3 seconds to load",
          "Google uses Core Web Vitals as a direct ranking factor since 2021",
          "Mobile users in developing markets experience 2–5x slower effective speeds",
        ],
      },
      {
        heading: "What Core Web Vitals Actually Measure",
        paragraphs: [
          "Google's Core Web Vitals are three specific metrics that measure real user experience: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). These aren't arbitrary — they each correspond to a specific user frustration.",
          "LCP measures how quickly the main content of a page loads. A good LCP is under 2.5 seconds. INP (which replaced FID in 2024) measures how quickly your page responds to user interactions like button clicks. CLS measures how much elements on the page shift around while it's loading — the experience of clicking a button only to have an ad load above it and make you accidentally click something else.",
          "Pages that achieve 'Good' scores on all three Core Web Vitals receive a ranking boost over competing pages with similar content quality. In competitive markets, this can be the difference between page 1 and page 2.",
        ],
        points: [
          "LCP (Largest Contentful Paint): good under 2.5s, poor above 4s",
          "INP (Interaction to Next Paint): good under 200ms, poor above 500ms",
          "CLS (Cumulative Layout Shift): good under 0.1, poor above 0.25",
          "All three must reach 'Good' to receive the Core Web Vitals ranking signal",
        ],
      },
      {
        heading: "The 5 Biggest Speed Killers (With Fixes)",
        paragraphs: [
          "Unoptimised images are the single largest contributor to slow load times for most business websites. A homepage hero image saved as a 3MB JPEG when it could be a 180KB WebP is burning load time for every visitor. Fix: convert all images to WebP format, implement lazy loading for below-fold images, and use Next.js Image component or equivalent to serve correctly-sized images for each device.",
          "Render-blocking JavaScript is the second major offender. JavaScript files that load synchronously in the document head prevent the browser from showing any content until the scripts have downloaded and executed. Fix: move non-critical scripts to load with defer or async attributes, remove unused third-party scripts, and audit your tag manager for abandoned pixels.",
          "Third-party scripts — analytics, chat widgets, ad pixels, heatmap tools — each add 50–300ms of load time. A site with 8 third-party scripts can add 2+ seconds to load time. Fix: load non-essential scripts conditionally after user interaction (lazy-loading analytics on scroll), consolidate tracking through Google Tag Manager, and regularly audit and remove unused scripts.",
        ],
        points: [
          "Convert images to WebP — typical 60–80% file size reduction",
          "Add loading='lazy' to all below-fold images",
          "Defer non-critical JavaScript with defer or async attributes",
          "Audit third-party scripts — every pixel adds 50–300ms",
          "Use a CDN to serve assets from locations close to your users",
        ],
      },
      {
        heading: "How to Measure Before and After",
        paragraphs: [
          "Google PageSpeed Insights (pagespeed.web.dev) gives you both lab data (controlled test) and field data (real user experience from the Chrome User Experience Report). Always prioritise field data over lab data — it reflects actual users on actual devices and connections.",
          "For ongoing monitoring, Google Search Console's Core Web Vitals report shows you which pages are failing and at what scale — how many page views are classified as poor, needs improvement, or good. This is the authoritative source for how Google is scoring your site.",
          "Set baseline scores before making any changes, implement fixes one category at a time (images first, then JavaScript, then third-party scripts), and re-test with PageSpeed Insights after each round. This gives you clear attribution for which change drove which improvement — critical for prioritising ongoing work.",
        ],
        points: [
          "Google PageSpeed Insights for lab data and field data",
          "Google Search Console Core Web Vitals report for ranking impact",
          "WebPageTest.org for waterfall analysis and bottleneck identification",
          "Chrome DevTools Performance panel for JavaScript execution profiling",
        ],
      },
    ],
  },
  {
    slug: "e-commerce-scaling-the-aymo-digital-90-day-blueprint",
    title: "E-Commerce Scaling: The AYMO DIGITAL 90-Day Blueprint",
    category: "E-Commerce Growth",
    serviceSlug: "paid-advertising",
    serviceName: "Performance Paid Advertising",
    readTime: "10 min read",
    date: "5 Feb 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    imageAlt: "E-commerce product photography",
    summary:
      "How we take e-commerce brands from £10k to £100k monthly revenue in 90 days using a repeatable growth system across paid ads, SEO, and retention.",
    intro:
      "Most e-commerce brands plateau at the same ceiling: somewhere between £8k and £20k per month, with a founder who has maxed out what they can manage manually. Scaling past that threshold requires a system — a coordinated architecture of tracking, creative, paid acquisition, search visibility, and retention that compounds over 90 days. This is the exact blueprint we implement for e-commerce clients who are serious about sustainable growth.",
    sections: [
      {
        heading: "Why Most E-Commerce Scaling Fails (The Spray-and-Pray Approach)",
        paragraphs: [
          "The most common failure mode is what we call spray-and-pray: launch ads on Meta, add Google Shopping, post on TikTok, send some emails, and hope one of them works. Each channel is under-invested and poorly tracked, so there's no clear signal about what's actually driving revenue. The founder ends up spending more, making less per pound spent, and burning out.",
          "The second failure mode is scaling traffic before fixing conversion rate. A site converting at 0.8% that generates 10,000 visitors a month makes 80 sales. Doubling traffic to 20,000 visitors makes 160 sales — but spending twice the ad budget. Fix the conversion rate to 2.4% first, and the same 10,000 visitors produces 240 sales — triple the revenue with no increase in ad spend.",
          "Our 90-day blueprint addresses both failure modes: the first 30 days are entirely about building the infrastructure that makes scaling safe. Only after the foundation is solid do we accelerate spend — and by day 90, the retention engine is compounding revenue without additional acquisition cost.",
        ],
        points: [
          "Spray-and-pray = budget spread too thin for any channel to get data",
          "Scaling traffic before fixing conversion rate is the most expensive mistake",
          "Each channel needs a minimum viable budget to generate statistically useful signals",
          "Retention spend has the highest ROI — existing customers cost nothing to acquire",
        ],
      },
      {
        heading: "Month 1: Foundation (Tracking, CRO, Creative Infrastructure)",
        paragraphs: [
          "Week 1 is entirely tracking. We implement server-side conversion tracking via Meta Conversions API and Google Enhanced Conversions, removing the 15–40% data loss that browser-based tracking suffers due to iOS privacy changes and ad blockers. Accurate data is non-negotiable — every optimisation decision in months 2 and 3 depends on it.",
          "Weeks 2–3 are CRO. We conduct a heuristic audit of the full purchase journey — homepage, collection pages, product pages, cart, and checkout — and implement a prioritised list of fixes based on conversion impact. Typical quick wins include: removing checkout friction (guest checkout, fewer form fields), adding social proof in the right positions (near the add-to-cart button, not buried in a footer), and fixing mobile layout issues that cause drop-off.",
          "Week 4 is creative infrastructure. We build a modular creative system: a set of proven ad formats (direct-response video, UGC-style, product-feature static) with interchangeable hooks, offers, and calls to action. This system allows the paid media team to test 20+ creative variants in month 2 without requiring a full production shoot for each one.",
        ],
        points: [
          "Server-side tracking via Meta CAPI and Google Enhanced Conversions",
          "Heuristic CRO audit across the full purchase funnel",
          "Checkout optimisation — guest checkout and minimal fields are non-negotiable",
          "Modular creative system for rapid A/B testing at scale",
        ],
      },
      {
        heading: "Month 2: Acceleration (Paid Channels + SEO)",
        paragraphs: [
          "With tracking accurate and conversion rate improved, month 2 is about acquiring traffic at the lowest possible cost per order. We launch Meta advantage+ shopping campaigns with the creative infrastructure built in month 1, giving the algorithm the volume of creative variants it needs to find winning combinations quickly. Simultaneously, Google Shopping campaigns are launched with a clean product feed — title optimisation, image quality, and competitive pricing signals are audited before launch.",
          "SEO work in month 2 is parallel and foundational: technical audit and Core Web Vitals fixes (often overlapping with the CRO work from month 1), product page optimisation for long-tail commercial intent keywords, and the beginning of a programmatic category page strategy for high-volume search terms in your product vertical.",
          "By the end of month 2, a well-executed brand will have 2–3 winning creative variants on Meta, Google Shopping generating a steady volume of high-intent traffic, and the first programmatic SEO pages indexed and beginning to accumulate impressions. This is the point where scaling spend has clear data supporting it.",
        ],
        points: [
          "Meta Advantage+ Shopping with 15+ creative variants",
          "Google Shopping with optimised product titles and competitive price signals",
          "Core Web Vitals fixes completed — LCP under 2.5s is the target",
          "Programmatic category pages targeting commercial intent keywords",
        ],
      },
      {
        heading: "Month 3: Retention & Compounding (Email Flows, LTV Maximisation)",
        paragraphs: [
          "Month 3 is where the system starts to compound. The paid channels are now generating a steady flow of new customers at a known acquisition cost. The job now is to maximise the lifetime value of those customers so the economics of acquisition get better every month without spending more.",
          "Email automation is the highest-leverage retention tool. A properly configured Klaviyo (or equivalent) account with a welcome series, abandoned cart sequence, post-purchase sequence, win-back campaign, and VIP flow can generate 25–40% of total revenue with zero ongoing ad spend. Each flow is built once, tested, and then runs permanently — compounding revenue every month.",
          "By day 90, a brand that entered at £10k/month should be tracking between £60k and £120k/month, depending on product margin, market size, and how aggressively the paid budget was scaled. The key difference from spray-and-pray is that every pound of revenue is traceable to a specific action, and the system continues improving because the data infrastructure makes every decision measurable.",
        ],
        points: [
          "Welcome series: 3–5 emails over 7 days, typically drives 8–12% first-purchase conversion",
          "Abandoned cart: 3-email sequence recovers 12–18% of abandoned carts",
          "Post-purchase series: cross-sell and review request drives repeat purchase rate",
          "Win-back campaign: re-activates lapsed customers at zero acquisition cost",
        ],
      },
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
