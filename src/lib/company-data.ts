export type Director = {
  name: string;
  initials: string;
  role: string;
  image: string;
  location: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  personalMessage: string;
  whatsapp: string;
};

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  department: "Engineering" | "Growth" | "Design" | "Creative";
  image: string;
  experience: string;
  expertise: string[];
  bio: string;
};

export const directors: Director[] = [
  {
    name: "Moez Rehman",
    initials: "MR",
    role: "Founder & Managing Director",
    image: "/moez-rehman.jpg",
    location: "London (GMT) / Islamabad (PKT)",
    experience: "8+ Years Growth & Systems Architecture",
    overview:
      "Moez architects high-converting revenue systems for ambitious businesses — from commercial acquisition funnel design to technical cloud infrastructure. Having engineered digital revenue for property developers, high-volume e-commerce brands, and B2B enterprises across the UK, Pakistan, and the Gulf, he brings rigorous strategic clarity that turns ad spend into verified, paying customers.",
    responsibilities: [
      "Growth Architecture & Funnel Strategy",
      "Technical Product Direction & Architecture",
      "Commercial Client Revenue Systems",
      "Paid Media Strategy & ROAS Accountability",
      "UK, Pakistan & International Market Expansion",
    ],
    personalMessage:
      "I started AYMO DIGITAL because I was tired of watching smart business owners burn substantial budgets on conventional agencies who optimize for billable hours, not client revenue. Every system we build, every campaign we deploy has one primary mission: delivering qualified buyers and real operational leverage into your business. I am directly reachable on WhatsApp.",
    whatsapp:
      "https://wa.me/923173712950?text=Hi%20Moez%2C%20I%27d%20like%20to%20discuss%20my%20business%20growth%20with%20you%20directly.",
  },
  {
    name: "Malaika Jahangir",
    initials: "MJ",
    role: "Co-Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    location: "Islamabad (PKT) / London (GMT)",
    experience: "7+ Years Brand & Conversion UI/UX",
    overview:
      "Malaika leads brand identity, creative direction, and high-conversion UI/UX at AYMO DIGITAL. She combines cinema-grade visual aesthetics with deep consumer psychology — crafting digital interfaces and brand experiences that don't just look world-class, but are engineered to guide visitors smoothly from initial attention to confirmed commercial action.",
    responsibilities: [
      "Brand Identity & Creative Direction",
      "UI/UX Design & Conversion Architecture",
      "Visual Production, Motion & Video Standards",
      "Client Presentation & Pitch Design Systems",
      "Design Operations & Component Libraries",
    ],
    personalMessage:
      "Great design isn't surface decoration — it is the fastest, clearest path between a customer's problem and your commercial solution. We obsess over every typography choice, every micro-interaction, and every call-to-action placement because that is what turns an ordinary website into a predictable revenue engine.",
    whatsapp:
      "https://wa.me/923173712950?text=Hi%20Malaika%2C%20I%27d%20like%20to%20discuss%20my%20brand%20and%20design%20project.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Anas Satti",
    initials: "AS",
    role: "Lead Full-Stack Software Engineer",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    experience: "6+ Years Full-Stack Engineering",
    expertise: ["Next.js", "React 19", "Node.js", "PostgreSQL", "TypeScript", "AWS", "API Architecture"],
    bio: "Anas architects and deploys high-concurrency web platforms, custom CRMs, and internal business portals. He focuses on sub-1.5 second server responses, bulletproof database schemas, and clean, maintainable TypeScript architectures.",
  },
  {
    name: "Shafeeq Ahmad",
    initials: "SA",
    role: "Performance Marketing Lead",
    department: "Growth",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    experience: "7+ Years Paid Media & Media Buying",
    expertise: ["Meta Ads", "Google Ads Search", "TikTok Ads", "ROAS Optimization", "Audience Qualification", "Conversion Funnels"],
    bio: "Shafeeq engineers data-driven paid acquisition campaigns that turn cold traffic into verified pipeline. Having managed substantial multi-region budgets across Meta and Google, he obsesses over cost-per-qualified-lead rather than vanity impressions.",
  },
  {
    name: "Adeela Rashid",
    initials: "AR",
    role: "Senior UI/UX & Product Designer",
    department: "Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    experience: "5+ Years Product & UI/UX Design",
    expertise: ["Figma", "Design Systems", "Conversion UX", "Mobile-First UX", "User Research", "Accessibility (WCAG)"],
    bio: "Adeela designs intuitive digital interfaces that eliminate user confusion and maximize conversion. She pairs rigorous component systems with user psychology to craft delightful, friction-free customer journeys.",
  },
  {
    name: "Farhat Jabeen",
    initials: "FJ",
    role: "Data Analytics & CRO Specialist",
    department: "Growth",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    experience: "5+ Years Analytics & Conversion Optimization",
    expertise: ["GA4", "Server-Side CAPI", "A/B Testing", "Heatmap Analysis", "Looker Studio", "Attribution Modeling"],
    bio: "Farhat translates raw behavioral data into actionable revenue decisions. She runs continuous conversion rate optimization experiments, diagnosing customer drop-offs and compounding funnel performance month over month.",
  },
  {
    name: "Malik Hamza",
    initials: "MH",
    role: "Senior Mobile App Architect",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    experience: "6+ Years Mobile App Engineering",
    expertise: ["Flutter", "React Native", "iOS / Swift", "Android / Kotlin", "Firebase", "Offline-First Sync"],
    bio: "Hamza builds smooth native-feel mobile applications for iOS and Android. He specializes in offline-first architectures, in-app checkout flows, and rejection-proof store submissions that maintain 4.8+ star ratings.",
  },
  {
    name: "Sikandar Ali",
    initials: "SK",
    role: "Technical SEO & Programmatic Architect",
    department: "Growth",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    experience: "6+ Years Technical SEO & Web Vitals",
    expertise: ["Technical SEO", "Core Web Vitals", "Programmatic SEO", "Backlink Architecture", "Search Console", "Local Maps"],
    bio: "Sikandar systematically diagnoses and fixes technical barriers between websites and Google's page one rankings. He builds high-speed programmatic landing page architectures that scale durable organic search traffic.",
  },
  {
    name: "Bilal Ahmad",
    initials: "BA",
    role: "Creative Production & Motion Lead",
    department: "Creative",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    experience: "5+ Years Video Direction & Motion Graphics",
    expertise: ["Video Production", "Motion Graphics", "After Effects", "Short-Form Hooks", "Reels / TikTok", "Brand Photography"],
    bio: "Bilal directs the creative studio — from scripting high-hook short-form videos to animating cinema-grade motion graphics that stop the social scroll and communicate brand authority within seconds.",
  },
];
