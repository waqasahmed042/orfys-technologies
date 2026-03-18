import { slugify } from "@/utilities/slugify";

export const navigationMenus = {
    Services: [
        "Software Development",
        "Workflow Automation",
        "Integration Services",
        "Data Analytics",
        "Mobile Solutions",
        "Security & Compliance",
    ],

    Technologies: [
        "React",
        "Next.js",
        "Node.js",
        "API Development",
        "Python",
        "AI/ML",
        "AWS",
        "Cloud Infrastructure",
        "Docker",
        "DevOps",
        "n8n",
        "Automation Tools",
        "Firebase",
        "Realtime Database",
        "Data Visualization",
        "Dashboards",
    ],

    Industries: [
        "Healthcare & Finance",
        "E-Commerce & Logistics",
        "Gaming, Edu & Energy",
        "Crypto & Blockchain",
        "Media & Emerging",
    ],

    Expertise: [
        "Business Solutions",
        "Management Software",
        "Advanced Tech",
    ],
};

type FilterKeys = "service" | "tech" | "industry" | "expertise";
type NavigationKey = keyof typeof navigationMenus;

export const filterKeyMap: Record<NavigationKey, FilterKeys> = {
    Services: "service",
    Technologies: "tech",
    Industries: "industry",
    Expertise: "expertise",
};

export const projectsData = [
    {
        service: "Software Development",
        subService: "Enterprise Systems",
        title: "AI-Assisted Multi-lingual PIM System for Manufacturing",
        description:
            "Built a scalable product information management system with multi-language AI support for global manufacturing operations.",
        tech: ["React", "Node.js", "MongoDB", "AI APIs"],
        industry: "E-Commerce & Logistics",
        hiddenTags: [
            "PIM",
            "Product Management",
            "Multi-language",
            "AI Integration",
            "Manufacturing",
            "Scalable System",
        ],
    },
    {
        service: "Workflow Automation",
        subService: "Business Automation",
        title: "AI-Powered News Scanning & Reporting Automation",
        description:
            "Automated news aggregation, filtering, and report generation using AI workflows and APIs.",
        tech: ["n8n", "OpenAI", "Node.js", "Webhooks"],
        industry: "Media & Emerging",
        hiddenTags: [
            "Automation",
            "News Aggregation",
            "AI Workflow",
            "Content Processing",
            "Web Scraping",
        ],
    },
    {
        service: "Integration Services",
        subService: "Cloud Integrations",
        title: "Infrastructure & Database Migration to AWS",
        description:
            "Migrated legacy systems to AWS with secure API integrations and optimized cloud architecture.",
        tech: ["AWS", "Docker", "Node.js", "RDS"],
        industry: "Management Software",
        hiddenTags: [
            "AWS Migration",
            "Cloud Architecture",
            "DevOps",
            "CI/CD",
            "System Integration",
        ],
    },
    {
        service: "Data Analytics",
        subService: "Business Intelligence",
        title: "AI Blockchain Market Analysis Dashboard",
        description:
            "Developed a real-time analytics dashboard for crypto market trends using AI-driven insights.",
        tech: ["Python", "Next.js", "Chart.js", "APIs"],
        industry: "Crypto & Blockchain",
        hiddenTags: [
            "Crypto Analytics",
            "Real-time Data",
            "Dashboard",
            "AI Predictions",
            "Market Trends",
        ],
    },
    {
        service: "Mobile Solutions",
        subService: "Cross-Platform Apps",
        title: "Cocktail Recipes Mobile App with Smart Recommendations",
        description:
            "Built a cross-platform mobile app with personalized cocktail suggestions based on user preferences.",
        tech: ["React Native", "Firebase", "AI APIs"],
        industry: "Media & Emerging",
        hiddenTags: [
            "Mobile App",
            "Recommendation Engine",
            "User Personalization",
            "Food & Beverage",
            "Cross-platform",
        ],
    },
    {
        service: "Security & Compliance",
        subService: "Security Audits",
        title: "Enterprise Application Security & Compliance System",
        description:
            "Implemented security audits, vulnerability detection, and compliance tracking for enterprise applications.",
        tech: ["Node.js", "OWASP Tools", "JWT", "Cloud Security"],
        industry: "Healthcare & Finance",
        hiddenTags: [
            "Cybersecurity",
            "OWASP",
            "Vulnerability Scan",
            "Compliance",
            "Data Protection",
        ],
    },
].map((project) => ({ ...project, slug: slugify(project.title) }));