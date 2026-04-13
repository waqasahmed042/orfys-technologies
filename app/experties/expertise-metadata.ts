import type { Metadata } from "next";

export const expertise: Metadata = {
    title: "Our Expertise | Specialized Software Solutions",
    description:
        "Explore our specialized expertise in DMS, BPM, ERP, and advanced technologies like AR/VR and Big Data. We build high-performance software tailored for complex business needs.",
};

export const expertiseMetadataMap: Record<string, Metadata> = {
    "case-studies": expertise,

    // Business Solutions
    "documents-management-systems-dms": {
        title: "Documents Management Systems (DMS) Solutions",
        description: "Organized digital filing and secure document management systems to streamline enterprise data workflows.",
    },
    "business-process-management-bpm": {
        title: "Business Process Management (BPM) & Automation",
        description: "Optimize and automate your business workflows to increase operational efficiency and reduce manual errors.",
    },
    "enterprise-asset-management-eam": {
        title: "Enterprise Asset Management (EAM) Software",
        description: "Comprehensive asset tracking and lifecycle management solutions for industrial and enterprise scale.",
    },
    "facility-management-software-fm": {
        title: "Facility Management Software (FM) Solutions",
        description: "Digital tools for infrastructure maintenance, space management, and facility operations.",
    },

    // Management Software
    "human-resource-management-hrm": {
        title: "Human Resource Management (HRM) Systems",
        description: "Custom staff management and payroll tools designed to simplify human resources and talent retention.",
    },
    "digital-publishing-software-dps": {
        title: "Digital Publishing Software (DPS) Development",
        description: "Modern content distribution platforms for digital media, publishers, and corporate communications.",
    },
    "digital-rights-management-drm": {
        title: "Digital Rights Management (DRM) Solutions",
        description: "Secure your intellectual property with robust digital rights management and content protection tools.",
    },
    "product-lifecycle-management-plm": {
        title: "Product Lifecycle Management (PLM) Systems",
        description: "End-to-end product roadmap technology to manage products from conception through design and manufacturing.",
    },

    // Advanced Tech
    "ar-vr-solutions": {
        title: "AR/VR Solutions | Immersive Technology",
        description: "Cutting-edge Augmented and Virtual Reality experiences for training, marketing, and industrial applications.",
    },
    "big-data-software": {
        title: "Big Data Software & Analytics",
        description: "Large-scale data processing and analytics solutions to turn massive datasets into actionable business insights.",
    },
    "cad-software": {
        title: "Custom CAD Software Development",
        description: "Specialized engineering design tools and computer-aided design software for technical industries.",
    },
    "customer-relationship-crm": {
        title: "Custom Customer Relationship (CRM) Systems",
        description: "Tailored client management systems to enhance customer engagement and sales pipeline visibility.",
    },
    "enterprise-resource-planning-erp": {
        title: "Enterprise Resource Planning (ERP) Solutions",
        description: "Unified business logic systems to integrate finance, supply chain, and operations into one platform.",
    },
};