import { Product, Service, TrustFactor } from "@/utilities/types";

export const companyInfo = {
  fullName: "ORFYS TECHNOLOGIES (PRIVATE) LIMITED",
  name: "Orfys Technologies",
  email: "noman@orfys.com",
  location: "Moazzamabad, Sargodha, Punjab, 40100, Pakistan",
  logo: "/o-logo.png",
};

export const navigationMenus = {
  "Services": {
    "Software Development": [
      { title: "Web Development", desc: "Modern & scalable web apps", icon: "🌐" },
      { title: "Mobile Apps", desc: "iOS and Android excellence", icon: "📱" },
      { title: "Office Add-ins", desc: "Word, Outlook, Excel & PPT", icon: "🖇️" },
    ],
    "Web Services": [
      { title: "Custom Software", desc: "Tailored enterprise tools", icon: "💻" },
      { title: "API Integration", desc: "Seamless connectivity", icon: "🔌" },
      { title: "Cloud Solutions", desc: "Azure & AWS deployment", icon: "☁️" },
    ],
    "Backend Services": [
      { title: "Server Architecture", desc: "High-performance setups", icon: "⚙️" },
      { title: "Database Design", desc: "MongoDB & SQL Expert", icon: "🗄️" },
      { title: "Microservices", desc: "Scalable backend logic", icon: "🧩" },
    ],
    "Expert Support": [
      { title: "Consulting", desc: "Strategic tech roadmap", icon: "🤝" },
      { title: "QA Testing", desc: "Zero-bug guarantee", icon: "🧪" },
      { title: "Maintenance", desc: "24/7 reliability", icon: "🛠️" },
    ],
    "Microsoft Add-ins": [
      { title: "Outlook Plugins", desc: "Email automation", icon: "📧" },
      { title: "Excel Solutions", desc: "Data processing", icon: "📊" },
      { title: "Word/PPT Tools", desc: "Document plugins", icon: "📝" },
    ],
    "Google Workspace": [
      { title: "Gmail Add-ons", desc: "Inbox extensions", icon: "✉️" },
      { title: "Sheets & Docs", desc: "Productivity tools", icon: "📄" },
      { title: "Drive & Calendar", desc: "Integrated ecosystem", icon: "🗓️" },
    ]
  },
  "Technologies": {
    "Frontend": [
      { title: "React.js", desc: "Dynamic UI", icon: "⚛️" },
      { title: "Next.js", desc: "SSR & Performance", icon: "🚀" },
      { title: "Tailwind CSS", desc: "Modern Styling", icon: "🎨" },
    ],
    "Backend": [
      { title: "Node.js", desc: "Fast JS Runtime", icon: "🟢" },
      { title: "Python/Django", desc: "Secure & Robust", icon: "🐍" },
      { title: "Express.js", desc: "Minimalist API", icon: "⚡" },
    ],
    "Database": [
      { title: "MongoDB", desc: "NoSQL Database", icon: "🍃" },
      { title: "PostgreSQL", desc: "Relational SQL", icon: "🐘" },
      { title: "Redis", desc: "Caching & Speed", icon: "🛑" },
    ],
    "Mobile": [
      { title: "React Native", desc: "Cross-platform", icon: "📱" },
      { title: "Flutter", desc: "Native Performance", icon: "🐦" },
      { title: "Swift", desc: "iOS Native", icon: "🍎" },
    ],
    "Cloud": [
      { title: "AWS", desc: "Amazon Web Services", icon: "☁️" },
      { title: "Azure", desc: "Microsoft Cloud", icon: "💠" },
      { title: "Firebase", desc: "Real-time Apps", icon: "🔥" },
    ],
    "Tools": [
      { title: "Docker", desc: "Containerization", icon: "🐋" },
      { title: "Kubernetes", desc: "Orchestration", icon: "☸️" },
      { title: "Git / GitHub", desc: "Version Control", icon: "🐙" },
    ]
  },
  "Industries": {
    "Healthcare & Finance": [
      { title: "Healthcare", desc: "Medical software systems", icon: "🏥" },
      { title: "FinTech", desc: "Financial technology", icon: "💳" },
      { title: "Banking", desc: "Core banking solutions", icon: "🏦" },
    ],
    "E-Commerce & Logistics": [
      { title: "E-Commerce", desc: "Retail & Online stores", icon: "🛍️" },
      { title: "Product Information", desc: "Management Software (PIM)", icon: "🏷️" },
      { title: "Logistics", desc: "Fleet & Supply Chain", icon: "🚛" },
      { title: "Warehouse", desc: "Inventory Management", icon: "📦" },
    ],
    "Gaming, Edu & Energy": [
      { title: "Gaming & Sports", desc: "Gambling & Sports Betting", icon: "🎮" },
      { title: "Education", desc: "School Management Software", icon: "🎓" },
      { title: "Telecom", desc: "Connectivity solutions", icon: "📞" },
      { title: "Energy & Utilities", desc: "Renewable & Traditional", icon: "⚡" },
    ],
    "Crypto & Blockchain": [
      { title: "Cryptocurrency", desc: "Exchanges, Wallets & Bots", icon: "🪙" },
      { title: "Blockchain", desc: "DAO, DApp & DeFi", icon: "🔗" },
      { title: "Web3", desc: "Metaverse & NFT Development", icon: "🌐" },
    ],
    "Media & Emerging": [
      { title: "Media & Entertainment", desc: "Content & Streaming", icon: "🎬" },
      { title: "IoT", desc: "Connected devices", icon: "📡" },
      { title: "Advertising", desc: "AdTech solutions", icon: "📢" },
    ]
  },
  "Expertise": {
    "Business Solutions": [
      { title: "Documents Management Systems (DMS)", desc: "Organized digital filing", icon: "📁" },
      { title: "Business Process Management (BPM)", desc: "Workflow automation", icon: "📈" },
      { title: "Enterprise Asset Management (EAM)", desc: "Asset tracking & lifecycle", icon: "🏗️" },
      { title: "Facility Management Software (FM)", desc: "Infrastructure maintenance", icon: "🏢" },
    ],
    "Management Software": [
      { title: "Human Resource Management (HRM)", desc: "Staff & payroll tools", icon: "👥" },
      { title: "Digital Publishing Software (DPS)", desc: "Content distribution", icon: "📖" },
      { title: "Digital Rights Management (DRM)", desc: "Content protection", icon: "🔐" },
      { title: "Product Lifecycle Management (PLM)", desc: "Product roadmap tech", icon: "🔄" },
    ],
    "Advanced Tech": [
      { title: "AR/VR Solutions", desc: "Immersive experiences", icon: "🕶️" },
      { title: "Big Data Software", desc: "Large scale analytics", icon: "📉" },
      { title: "CAD Software", desc: "Engineering design tools", icon: "📐" },
      { title: "Customer Relationship (CRM)", desc: "Client management", icon: "🤝" },
      { title: "Enterprise Resource Planning (ERP)", desc: "Unified business logic", icon: "💼" },
    ]
  },
} as const;
export const dropdownKeys = ["Services", "Technologies", "Industries", "Expertise"] as const;

export const portfolioMenu = [
  { title: "CASE STUDIES", desc: "Full range of custom software development services.", icon: "📊" },
  { title: "R&D WORKS", desc: "Keeping pace with the latest trends and API ecosystems.", icon: "🔬" },
  { title: "PRODUCTS", desc: "Custom software development projects and add-ons.", icon: "📦" },
  { title: "E-PUBLISHING SOLUTIONS", desc: "Tools for secure digital publishing and management.", icon: "🛡️" }
];

export const companyMenu = [
  { title: "ABOUT US", desc: "Our history, mission, and the values that drive our innovation.", icon: "🏢" },
  { title: "BLOG", desc: "Insights, tutorials, and latest trends from our tech experts.", icon: "✍️" },
  { title: "NEWS", desc: "Stay updated with our latest company milestones and events.", icon: "📰" },
  { title: "PEOPLE", desc: "Meet the brilliant minds behind our successful solutions.", icon: "👥" },
  { title: "CAREERS", desc: "Join our team and build the future of technology with us.", icon: "🚀" },
  { title: "ENGAGEMENT MODELS", desc: "Flexible partnership models including dedicated teams.", icon: "🤝" }
];

export const navigationLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PRODUCTS", href: "#products" },
  { label: "WHY ORFYS", href: "#why-orfys" },
];

export const services: Service[] = [
  {
    iconPath:
      "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Software Development",
    description:
      "End-to-end software development using modern technologies. We build responsive, scalable, and secure solutions tailored to your business needs.",
  },
  {
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Workflow Automation",
    description:
      "Custom automation solutions that eliminate manual processes, reduce errors, and free up your team to focus on strategic work.",
  },
  {
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Integration Services",
    description:
      "Connect your existing tools and systems with seamless integrations that enable data flow and process synchronization.",
  },
  {
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with custom analytics dashboards and reporting solutions.",
  },
  {
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications that extend your automation capabilities to mobile devices.",
  },
  {
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Security & Compliance",
    description:
      "Enterprise-grade security measures and compliance solutions to protect your data and meet regulatory requirements.",
  },
];

export const products: Product[] = [
  {
    iconPath:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    badge: "SaaS",
    badgeColor: "purple",
    title: "Workflow Automation Platform",
    description:
      "A comprehensive platform that lets you create, manage, and monitor automated workflows across your entire organization. No-code interface with enterprise-grade capabilities.",
    features: ["Visual workflow builder", "Pre-built integrations", "Real-time monitoring"],
    ctaText: "Learn more",
    ctaHref: "mailto:info@orfys.com?subject=Workflow%20Automation%20Platform%20Demo",
  },
  {
    iconPath:
      "M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm4 2h8M8 12h8M8 16h6",
    badge: "Service",
    badgeColor: "blue",
    title: "Software Development",
    description:
      "End-to-end software development using modern technologies. We build fast, secure, and scalable solutions tailored to your business needs.",
    features: [
      "Modern UI/UX design",
      "API & database integration",
      "Performance & security optimization",
    ],
    ctaText: "Get a quote",
    ctaHref: "mailto:info@orfys.com?subject=Software%20Development%20Inquiry",
  }

];

export const trustFactors: TrustFactor[] = [
  {
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security protocols to protect your data and operations.",
  },
  {
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Fast Implementation",
    description:
      "Rapid deployment with minimal disruption to your existing workflows and processes.",
  },
  {
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Expert Team",
    description:
      "Seasoned developers and automation specialists with proven track records.",
  },
  {
    iconPath:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
  },
];
