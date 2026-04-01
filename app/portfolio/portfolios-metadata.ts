import type { Metadata } from "next";

export const caseStudies: Metadata = {
    title: "Case Studies",
    description:
        "Explore our case studies showcasing high-performance software solutions, custom web applications, workflow automation, and scalable technical architectures that help businesses grow through intelligent engineering.",
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

export const products: Metadata = {
    title: "Products",
    description:
        "Discover our innovative digital products designed to streamline workflows, enhance productivity, and empower businesses with scalable and intelligent technology solutions.",
};

export const productsMetadataMap: Record<string, Metadata> = {
    "products": {
        title: "Products",
        description: "Discover our innovative digital products designed to streamline workflows, enhance productivity, and empower businesses with scalable and intelligent technology solutions.",
    },

    // Dynamically generated from ourProducts data
    "saas-analytics-engine": {
        title: "SaaS Analytics Engine",
        description: "A high-scale multi-tenant platform with real-time collaboration and advanced reporting features.",
    },
    "enterprise-erp-portal": {
        title: "Enterprise ERP Portal",
        description: "Custom ERP system integrating finance, HR, and inventory management across multiple business units.",
    },
    "ai-document-processing": {
        title: "AI Document Processing",
        description: "Automated document classification and data extraction platform using machine learning.",
    },
    "hr-pipeline-automator": {
        title: "HR Pipeline Automator",
        description: "Automated recruitment workflow from job application to onboarding and digital contract signing.",
    },
    "financial-logic-engine": {
        title: "Financial Logic Engine",
        description: "Automated financial reporting system transforming Excel workflows into real-time dashboards.",
    },
    "customer-support-ticket-automation": {
        title: "Customer Support Ticket Automation",
        description: "AI-powered ticket routing and escalation workflow improving support response time.",
    },
    "omnichannel-api-bridge": {
        title: "Omnichannel API Bridge",
        description: "Unified API gateway synchronizing customer data across web, mobile, and retail systems.",
    },
    "global-payment-gateway": {
        title: "Global Payment Gateway",
        description: "Integrated multiple international payment providers with real-time fraud detection.",
    },
    "crm-erp-data-sync": {
        title: "CRM + ERP Data Sync",
        description: "Bi-directional integration syncing sales data between Salesforce CRM and SAP ERP.",
    },
    "predictive-revenue-model": {
        title: "Predictive Revenue Model",
        description: "Machine learning model predicting seasonal demand and revenue trends for retailers.",
    },
    "bi-executive-dashboard": {
        title: "BI Executive Dashboard",
        description: "Real-time business intelligence dashboard consolidating KPIs from multiple data sources.",
    },
    "customer-behavior-analytics": {
        title: "Customer Behavior Analytics",
        description: "Advanced analytics platform tracking user journeys and conversion funnels.",
    },
    "health-fitness-native-app": {
        title: "Health & Fitness Native App",
        description: "iOS and Android app with wearable integration and live health tracking.",
    },
    "field-technician-support-app": {
        title: "Field Technician Support App",
        description: "Offline-capable mobile app for engineers working in remote locations.",
    },
    "ecommerce-shopping-app": {
        title: "E-commerce Shopping App",
        description: "High-performance shopping app with secure payments and real-time order tracking.",
    },
    "hipaa-data-vault": {
        title: "HIPAA Data Vault",
        description: "Encrypted healthcare data storage platform ensuring strict HIPAA compliance.",
    },
    "zero-trust-security-architecture": {
        title: "Zero Trust Security Architecture",
        description: "Enterprise identity management with MFA and device-level access policies.",
    },
    "gdpr-compliance-monitoring-system": {
        title: "GDPR Compliance Monitoring System",
        description: "Automated compliance monitoring and data privacy auditing platform.",
    },
};