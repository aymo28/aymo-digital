export type Director = {
  name: string;
  initials: string;
  role: string;
  overview: string;
  responsibilities: string[];
  personalMessage: string;
  whatsapp: string;
};

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  expertise: string[];
  bio: string;
};

export const directors: Director[] = [
  {
    name: "Moez Rehman",
    initials: "MR",
    role: "Founder & Managing Director",
    overview:
      "Moez architects growth systems for ambitious businesses — from acquisition funnel design to technical infrastructure. With 8+ years engineering digital revenue for property developers, e-commerce brands, and B2B companies across Pakistan and the UK, he brings strategic clarity that turns ad spend into verified, paying customers.",
    responsibilities: [
      "Growth Architecture & Funnel Design",
      "Technical Strategy & Product Direction",
      "Client Revenue Systems",
      "Paid Media Strategy & ROAS Accountability",
      "UK & Pakistan Market Expansion",
    ],
    personalMessage:
      "I started AYMO DIGITAL because I was tired of watching smart business owners burn their budgets on agencies who optimise for billable hours, not your revenue. Every system we build, every campaign we run — it has one job: qualified buyers into your pipeline. I'm directly reachable on WhatsApp.",
    whatsapp:
      "https://wa.me/923173712950?text=Hi%20Moez%2C%20I%27d%20like%20to%20discuss%20my%20business%20growth%20with%20you%20directly.",
  },
  {
    name: "Malaika Jahangir",
    initials: "MJ",
    role: "Co-Founder & Creative Director",
    overview:
      "Malaika leads brand direction and high-conversion UI/UX at AYMO DIGITAL. She combines cinema-grade creative direction with conversion psychology — crafting digital experiences that don't just look world-class but are engineered to guide visitors from attention to action. Her work spans real estate portals, e-commerce brands, and healthcare platforms.",
    responsibilities: [
      "Brand Identity & Creative Direction",
      "UI/UX Design & Conversion Architecture",
      "Visual Production & Motion",
      "Client Presentation & Pitch Design",
      "Creative Systems & Design Ops",
    ],
    personalMessage:
      "Great design isn't decoration — it's the fastest path between a visitor's problem and your solution. I obsess over every pixel, every micro-interaction, and every call-to-action placement because that's what turns a beautiful site into a revenue engine. Let's build something that works as hard as it looks.",
    whatsapp:
      "https://wa.me/923173712950?text=Hi%20Malaika%2C%20I%27d%20like%20to%20discuss%20my%20brand%20and%20design%20project.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Anas Satti",
    initials: "AS",
    role: "Lead Full-Stack Engineer",
    expertise: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS", "API Architecture"],
    bio: "Anas architects and builds the full-stack platforms that power client growth — from high-performance Next.js frontends to robust Node.js backends with real-time data pipelines.",
  },
  {
    name: "Shafeeq Ahmad",
    initials: "SA",
    role: "Performance Marketing Lead",
    expertise: ["Meta Ads", "Google Ads", "TikTok Ads", "ROAS Optimisation", "Audience Qualification", "Landing Pages"],
    bio: "Shafeeq engineers paid media systems that turn cold traffic into qualified pipeline. He manages £500k+ in annual ad spend with an obsession for cost-per-qualified-lead.",
  },
  {
    name: "Adeela Rashid",
    initials: "AR",
    role: "Senior UI/UX & Product Designer",
    expertise: ["Figma", "Prototyping", "Conversion UX", "Design Systems", "User Research", "Accessibility"],
    bio: "Adeela designs interfaces that guide users naturally toward conversion. She combines design systems thinking with deep conversion psychology.",
  },
  {
    name: "Farhat Jabeen",
    initials: "FJ",
    role: "Data Analytics & CRO",
    expertise: ["GA4", "Conversion Rate Optimisation", "A/B Testing", "Heatmaps", "Attribution Modelling", "Looker Studio"],
    bio: "Farhat translates raw data into revenue decisions. She runs continuous CRO experiments that compound improvements in conversion rates month over month.",
  },
  {
    name: "Malik Hamza",
    initials: "MH",
    role: "Mobile App Architect",
    expertise: ["Flutter", "React Native", "iOS", "Android", "Firebase", "Offline-First Architecture"],
    bio: "Hamza builds native-feel mobile applications using Flutter and React Native. His apps have 4.7+ star ratings across App Store and Google Play.",
  },
  {
    name: "Sikandar Ali",
    initials: "SK",
    role: "Technical SEO & Programmatic Systems",
    expertise: ["Technical SEO", "Core Web Vitals", "Programmatic SEO", "Backlink Architecture", "Google Search Console", "Local SEO"],
    bio: "Sikandar systematically dismantles technical barriers between your site and Google's top rankings, building programmatic content architectures that scale organic traffic.",
  },
  {
    name: "Bilal Ahmad",
    initials: "BA",
    role: "Creative Production & Motion Lead",
    expertise: ["Video Production", "Motion Graphics", "After Effects", "Short-Form Content", "Reels", "Brand Photography"],
    bio: "Bilal leads the creative production studio — from scripting high-hook reels to directing cinema-grade brand videos that stop the scroll and drive action.",
  },
];
