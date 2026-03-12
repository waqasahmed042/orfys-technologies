import blob1 from "@/public/services/blob1.png";
import blob2 from "@/public/services/blob2.png";
import blob3 from "@/public/services/blob3.png";
import blob4 from "@/public/services/blob4.png";
import blob5 from "@/public/services/blob5.png";
import blob6 from "@/public/services/blob6.png";
import { MenuItem, Product, Service, contentMap, TrustFactor } from "@/utilities/types";
import {
  IoCodeSlash,
  IoSettingsSharp,
  IoSyncCircleSharp,
  IoBarChartSharp,
  IoPhonePortraitOutline,
  IoShieldCheckmarkSharp
} from "react-icons/io5";
import { HiOutlineLightBulb, HiOutlineRectangleGroup, HiOutlineCpuChip, HiOutlineBeaker } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import software_development from "@/public/services/software-development.svg";
import workflow_automation from "@/public/services/workflow-automation.svg";
import integration_services from "@/public/services/integration-services.svg";
import data_analysis from "@/public/services/data-analysis.svg";
import mobile_solution from "@/public/services/mobile-solution.svg";
import security_compliance from "@/public/services/security-compliance.svg";
import case_studies from "@/public/portfolio/case-studies.svg";
import our_products from "@/public/portfolio/our-products.svg";

export const companyInfo = {
  fullName: "ORFYS TECHNOLOGIES (PRIVATE) LIMITED",
  name: "Orfys Technologies",
  email: "noman@orfys.com",
  phone: "+92 309 9999999",
  location: "Moazzamabad, Sargodha, Punjab, 40100, Pakistan",
  desktopLogo: "/o-full-logo.png",
  mobileLogo: "/o-logo.png",
};

export const navigationMenus = {
  "Services": {
    "Software Development": [
      { title: "Web Applications", desc: "Modern, scalable web platforms", icon: "🌐" },
      { title: "Custom Software", desc: "Tailored business solutions", icon: "💻" },
      { title: "Enterprise Systems", desc: "Large-scale enterprise tools", icon: "🏢" },
    ],
    "Workflow Automation": [
      { title: "Business Automation", desc: "Streamline repetitive workflows", icon: "⚡" },
      { title: "Office Add-ins", desc: "Word, Excel & Outlook automation", icon: "🖇️" },
      { title: "Process Optimization", desc: "Improve operational efficiency", icon: "🔄" },
    ],
    "Integration Services": [
      { title: "API Development", desc: "Secure & scalable APIs", icon: "🔌" },
      { title: "Third-Party Integrations", desc: "Connect external platforms", icon: "🔗" },
      { title: "Cloud Integrations", desc: "Azure, AWS & SaaS connectivity", icon: "☁️" },
    ],
    "Data Analytics": [
      { title: "Data Visualization", desc: "Interactive dashboards & reports", icon: "📊" },
      { title: "Business Intelligence", desc: "Insights for better decisions", icon: "📈" },
      { title: "Data Processing", desc: "Transform and analyze datasets", icon: "🗄️" },
    ],
    "Mobile Solutions": [
      { title: "iOS Development", desc: "Native Apple applications", icon: "🍎" },
      { title: "Android Development", desc: "Modern Android experiences", icon: "🤖" },
      { title: "Cross-Platform Apps", desc: "Single codebase mobile apps", icon: "📱" },
    ],
    "Security & Compliance": [
      { title: "Application Security", desc: "Protect apps from threats", icon: "🔐" },
      { title: "Compliance Solutions", desc: "Meet industry standards", icon: "📜" },
      { title: "Security Audits", desc: "Identify and fix vulnerabilities", icon: "🛡️" },
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

export const portfolioMenu: MenuItem[] = [
  {
    title: "CASE STUDIES",
    desc: "Full range of custom software development services.",
    icon: "📊",
    path: "/portfolio/case-studies"
  },
  {
    title: "R&D WORKS",
    desc: "Keeping pace with the latest trends and API ecosystems.",
    icon: "🔬",
    path: "/portfolio/rd-works"
  },
  {
    title: "PRODUCTS",
    desc: "Custom software development projects and add-ons.",
    icon: "📦",
    path: "/portfolio/products"
  },
  {
    title: "E-PUBLISHING SOLUTIONS",
    desc: "Tools for secure digital publishing and management.",
    icon: "🛡️",
    path: "/portfolio/e-publishing-solutions"
  }
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
    bgImg: blob1,
    iconPath: IoCodeSlash,
    route: "/services/software-development",
    title: "Software Development",
    description:
      "End-to-end software development using modern technologies. We build responsive, scalable, and secure solutions tailored to your business needs.",
  },
  {
    bgImg: blob2,
    iconPath: IoSyncCircleSharp,
    route: "/services/workflow-automation",
    title: "Workflow Automation",
    description:
      "Custom automation solutions that eliminate manual processes, reduce errors, and free up your team to focus on strategic work.",
  },
  {
    bgImg: blob3,
    iconPath: IoSettingsSharp,
    route: "/services/integration-services",
    title: "Integration Services",
    description:
      "Connect your existing tools and systems with seamless integrations that enable data flow and process synchronization.",
  },
  {
    bgImg: blob4,
    iconPath: IoBarChartSharp,
    route: "/services/data-analytics",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with custom analytics dashboards and reporting solutions.",
  },
  {
    bgImg: blob5,
    iconPath: IoPhonePortraitOutline,
    route: "/services/mobile-solutions",
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications that extend your automation capabilities to mobile devices.",
  },
  {
    bgImg: blob6,
    iconPath: IoShieldCheckmarkSharp,
    route: "/services/security-compliance",
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

export const servicesContentMap: Record<string, contentMap> = {
  "software-development": {
    title: "Software",
    highlight: "Development",
    desc: "We build reliable and scalable software solutions that turn ideas into powerful web and mobile applications, helping businesses grow and succeed in the digital world.",
    img: software_development,
    alt: "Software Development"
  },
  "workflow-automation": {
    title: "Workflow",
    highlight: "Automation",
    desc: "Eliminate manual bottlenecks and scale your operations. We build intelligent systems that connect your tools and automate your most complex business processes.",
    img: workflow_automation,
    alt: "Workflow Automation"
  },
  "integration-services": {
    title: "Integration",
    highlight: "Services",
    desc: "Bridge the gap between your software silos. We synchronize your CRM, ERP, and third-party APIs into a unified, high-efficiency digital ecosystem.",
    img: integration_services,
    alt: "Integration Services"
  },
  "data-analytics": {
    title: "Data",
    highlight: "Analysis",
    desc: "Turn raw data into actionable business intelligence. Our advanced analytics and visualization tools help you make faster, smarter, and data-driven decisions.",
    img: data_analysis,
    alt: "Data Analytics"
  },
  "mobile-solutions": {
    title: "Mobile",
    highlight: "Solutions",
    desc: "Reach your customers anywhere with high-performance iOS and Android applications. We build native-feel experiences that drive engagement and loyalty.",
    img: mobile_solution,
    alt: "Mobile Solutions"
  },
  "security-compliance": {
    title: "Security &",
    highlight: "Compliance",
    desc: "Protect your digital assets and maintain trust. We implement robust security frameworks and ensure your systems meet global regulatory standards.",
    img: security_compliance,
    alt: "Security & Compliance"
  }
};

export const portfolioContentMap: Record<string, contentMap> = {
  "case-studies": {
    title: "Case",
    highlight: "Studies",
    desc: "Explore real-world success stories where our technology solutions helped businesses overcome challenges, improve efficiency, and achieve measurable growth.",
    img: case_studies,
    alt: "Case Studies"
  },
  "rd-works": {
    title: "R&D",
    highlight: "Works",
    desc: "Discover our research and development initiatives where we experiment with emerging technologies, APIs, and innovative ideas to create future-ready solutions.",
    img: case_studies,
    alt: "R&D Works"
  },
  "products": {
    title: "Our",
    highlight: "Products",
    desc: "Browse our collection of software products and tools designed to simplify workflows, improve productivity, and deliver reliable digital experiences.",
    img: our_products,
    alt: "Our Products"
  },
  "e-publishing-solutions": {
    title: "E-Publishing",
    highlight: "Solutions",
    desc: "Secure digital publishing tools that enable organizations to manage, distribute, and protect their digital publications efficiently.",
    img: our_products,
    alt: "E Publishing Solutions"
  }
};

export const developmentProcess = [
  { title: "Planning", desc: "Design first, with real content in mind but do-drop in the real content.", icon: HiOutlineLightBulb },
  { title: "Design", desc: "Use filler text where it helps your design process, but use real content.", icon: HiOutlineRectangleGroup },
  { title: "Development", desc: "We propose a compromise. Only use filler text that has been edited.", icon: HiOutlineCpuChip },
  { title: "Testing", desc: "Using filler text avoids the inevitable argumentation accompanies.", icon: HiOutlineBeaker },
  { title: "Launch", desc: "Surprisingly, there is a very vocal faction of the design community.", icon: IoRocketOutline },
  { title: "Support", desc: "Equally vocal contingent of designers leaping to defend time-honored.", icon: LuShieldCheck },
];

export const ourProducts = {
  "software-development": {
    title: "Software Development",
    subtitle: "Custom-built applications focused on scalability and engineering excellence.",
    cases: [
      { title: "SaaS Analytics Engine", desc: "A high-scale multi-tenant platform with real-time collaboration features.", link: "#" },
      { title: "Enterprise ERP Portal", desc: "Tailored resource planning system that unified three separate business units.", link: "#" },
    ],
  },
  "workflow-automation": {
    title: "Workflow Automation",
    subtitle: "Streamlining operations through intelligent process automation and logic.",
    cases: [
      { title: "HR Pipeline Automator", desc: "Automated the entire hiring pipeline from application to digital contract signing.", link: "#" },
      { title: "Financial Logic Engine", desc: "Excel-to-Dashboard automation reducing weekly reporting time by 80%.", link: "#" },
    ],
  },
  "integration-services": {
    title: "Integration Services",
    subtitle: "Connecting disparate systems into a unified, high-performance ecosystem.",
    cases: [
      { title: "Omnichannel API Bridge", desc: "Unified API layer for consistent customer data across web, mobile, and physical retail.", link: "#" },
      { title: "Global Payment Gateway", desc: "Multi-currency payment integration with advanced real-time fraud detection.", link: "#" },
    ],
  },
  "data-analytics": {
    title: "Data Analytics",
    subtitle: "Turning raw data into actionable insights through advanced visualization.",
    cases: [
      { title: "Predictive Revenue Model", desc: "ML models that predict seasonal sales trends with 94% accuracy for retail.", link: "#" },
      { title: "BI Executive Dashboard", desc: "Visualized complex KPI data into a single, real-time command center for stakeholders.", link: "#" },
    ],
  },
  "mobile-solutions": {
    title: "Mobile Solutions",
    subtitle: "Native and cross-platform mobile apps designed for reach and performance.",
    cases: [
      { title: "Health & Fitness Native", desc: "High-performance iOS app with wearable device integration and live vitals tracking.", link: "#" },
      { title: "Field Tech Support Tool", desc: "Cross-platform tablet app for engineers working in zero-connectivity environments.", link: "#" },
    ],
  },
  "security-compliance": {
    title: "Security & Compliance",
    subtitle: "Protecting digital assets with industry-leading security protocols.",
    cases: [
      { title: "HIPAA Data Vault", desc: "Securing patient data for healthcare providers with zero-knowledge encryption.", link: "#" },
      { title: "Zero Trust Architecture", desc: "Implementing MFA and identity management for 50k+ corporate endpoints.", link: "#" },
    ],
  },
};
