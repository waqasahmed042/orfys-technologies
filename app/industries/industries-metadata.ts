import type { Metadata } from "next";

export const industries: Metadata = {
    title: "Our industries | Specialized Software Solutions",
    description:
        "Explore our industry-specific software solutions, tailored to meet the unique challenges of healthcare, finance, e-commerce, logistics, gaming, education, energy, crypto, media, and more.",
};

export const industriesMetadataMap: Record<string, Metadata> = {
    "case-studies": industries,

    // Healthcare & Finance
    "healthcare-software-solutions": {
        title: "Healthcare Software Solutions",
        description: "Advanced medical and healthcare software systems for hospitals, clinics, and digital health platforms.",
    },
    "fintech-software-solutions": {
        title: "FinTech Software Solutions",
        description: "Secure and scalable financial technology solutions including payments, wallets, and banking systems.",
    },
    "banking-software-solutions": {
        title: "Banking Software Solutions",
        description: "Core banking platforms, digital banking apps, and financial infrastructure systems.",
    },

    // E-Commerce & Logistics
    "ecommerce-software-solutions": {
        title: "E-Commerce Software Solutions",
        description: "Robust online store development, retail platforms, and shopping experiences.",
    },
    "product-information-management-pim": {
        title: "Product Information Management (PIM) Software",
        description: "Centralized product data management systems to streamline catalog and inventory workflows.",
    },
    "logistics-supply-chain-software-solutions": {
        title: "Logistics & Supply Chain Software",
        description: "Fleet, delivery, and supply chain management systems for logistics businesses.",
    },
    "warehouse-management-software-solutions": {
        title: "Warehouse Management Software",
        description: "Inventory tracking, storage optimization, and warehouse automation solutions.",
    },

    // Gaming, Edu & Energy
    "gaming-sports-software-solutions": {
        title: "Gaming & Sports Software Solutions",
        description: "Gaming, betting, and sports engagement platforms with real-time systems.",
    },
    "education-software-solutions": {
        title: "Education Software Solutions",
        description: "School, LMS, and e-learning platforms for modern education systems.",
    },
    "telecom-software-solutions": {
        title: "Telecom Software Solutions",
        description: "Connectivity platforms, telecom infrastructure systems, and communication technologies.",
    },
    "energy-utilities-software-solutions": {
        title: "Energy & Utilities Software",
        description: "Renewable energy systems, grid management, and utility monitoring platforms.",
    },

    // Crypto & Blockchain
    "cryptocurrency-software-solutions": {
        title: "Cryptocurrency Software Solutions",
        description: "Crypto exchanges, wallets, trading bots, and blockchain-powered financial tools.",
    },
    "blockchain-software-solutions": {
        title: "Blockchain Software Development",
        description: "DAO, DApps, and decentralized systems for secure digital ecosystems.",
    },
    "web3-software-solutions": {
        title: "Web3 & Metaverse Development",
        description: "NFT platforms, metaverse applications, and decentralized web experiences.",
    },

    // Media & Emerging
    "media-entertainment-software-solutions": {
        title: "Media & Entertainment Software",
        description: "Streaming platforms, content management systems, and digital media solutions.",
    },
    "iot-software-solutions": {
        title: "IoT Software Solutions",
        description: "Connected device ecosystems and smart automation platforms.",
    },
    "advertising-adtech-software-solutions": {
        title: "Advertising & AdTech Software",
        description: "Digital advertising platforms, campaign management, and marketing analytics systems.",
    },
};