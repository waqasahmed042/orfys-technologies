import type { Metadata } from "next";

export const caseStudies: Metadata = {
    title: "Case Studies",
    description:
        "Explore our case studies showcasing high-performance software solutions, custom web applications, workflow automation, and scalable technical architectures that help businesses grow through intelligent engineering.",
};

export const products: Metadata = {
    title: "Products",
    description:
        "Discover our innovative digital products designed to streamline workflows, enhance productivity, and empower businesses with scalable and intelligent technology solutions.",
};

export const caseStudiesMetadataMap: Record<string, Metadata> = {
    "case-studies": caseStudies,

    "ai-assisted-multi-lingual-pim-system-for-manufacturing": {
        title: "AI-Assisted Multi-lingual PIM System for Manufacturing",
        description: "Built a scalable product information management system with multi-language AI support for global manufacturing operations.",
    },

    "ai-powered-news-scanning-reporting-automation": {
        title: "AI-Powered News Scanning & Reporting Automation",
        description: "Automated news aggregation, filtering, and report generation using AI workflows and APIs.",
    },

    "infrastructure-database-migration-to-aws": {
        title: "Infrastructure & Database Migration to AWS",
        description: "Migrated legacy systems to AWS with secure API integrations and optimized cloud architecture.",
    },

    "ai-blockchain-market-analysis-dashboard": {
        title: "AI Blockchain Market Analysis Dashboard",
        description: "Developed a real-time analytics dashboard for crypto market trends using AI-driven insights.",
    },

    "cocktail-recipes-mobile-app-with-smart-recommendations": {
        title: "Cocktail Recipes Mobile App | Orfys Case Study",
        description: "Built a cross-platform mobile app with personalized cocktail suggestions based on user preferences.",
    },

    "enterprise-application-security-compliance-system": {
        title: "Enterprise Application Security & Compliance System",
        description: "Implemented security audits, vulnerability detection, and compliance tracking for enterprise applications.",
    }
};