"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import { BiPowerOff } from "react-icons/bi";
import {
    FaMicrochip, FaCheckCircle, FaReact, FaPython, FaNodeJs,
    FaAws, FaDatabase, FaDocker, FaApple,
    FaSalesforce, FaHubspot, FaSlack
} from 'react-icons/fa';
import {
    SiTypescript, SiPostgresql, SiOpenai, SiZapier,
    SiGooglecloud, SiFlutter, SiTableau
} from 'react-icons/si';

const integrationContent = {
    "software-development": {
        badge: "Tech-Agnostic Solutions",
        title: "Native Integrations with the tools you love.",
        desc: "We build bridges between your existing stack—CRM, ERP, Finance, and Communication tools.",
        features: ['Web Applications', 'Custom Software', 'Enterprise Systems', 'Scalable Cloud', 'Legacy Modernization', 'Microservices'],
        logos: [
            { icon: <FaReact size={32} />, name: 'Web Apps' },
            { icon: <SiTypescript size={32} />, name: 'Custom Sw' },
            { icon: <FaPython size={32} />, name: 'AI & Data' },
            { icon: <FaAws size={32} />, name: 'Cloud' },
            { icon: <SiPostgresql size={32} />, name: 'Database' },
            { icon: <FaDocker size={32} />, name: 'DevOps' }
        ]
    },
    "workflow-automation": {
        badge: "Efficiency First",
        title: "Seamlessly connect your business apps.",
        desc: "Automate data flow between your favorite platforms to eliminate manual entry and human error.",
        features: ['Zapier Expert', 'Make.com Logic', 'Custom Webhooks', 'Office 365 Sync', 'API Orchestration', 'Error Handling'],
        logos: [
            { icon: <SiZapier size={32} />, name: 'Zapier' },
            { icon: <FaSlack size={32} />, name: 'Slack' },
            { icon: <FaSalesforce size={32} />, name: 'Salesforce' },
            { icon: <FaHubspot size={32} />, name: 'HubSpot' },
            { icon: <FaDatabase size={32} />, name: 'Airtable' },
            { icon: <SiOpenai size={32} />, name: 'OpenAI' },
        ]
    },
    "integration-services": {
        badge: "Seamless Connectivity",
        title: "Connect your fragmented digital ecosystem.",
        desc: "We build secure bridges between your custom software and the world's most powerful APIs.",
        features: ['API Development', 'Webhook Orchestration', 'Real-time Data Sync', 'SaaS Connectivity', 'Middleware Solutions', 'Event-Driven Logic'],
        logos: [
            { icon: <SiZapier size={32} />, name: 'Zapier' },
            { icon: <FaNodeJs size={32} />, name: 'Webhooks' },
            { icon: <FaAws size={32} />, name: 'AWS Lambda' },
            { icon: <SiOpenai size={32} />, name: 'AI APIs' },
            { icon: <FaDatabase size={32} />, name: 'Rest API' },
            { icon: <SiGooglecloud size={32} />, name: 'GCP PubSub' },
        ]
    },
    "data-analytics": {
        badge: "Data-Driven Insights",
        title: "Visualize your success in real-time.",
        desc: "We integrate with your data sources to provide a single source of truth for your business metrics.",
        features: ['Custom Dashboards', 'ETL Pipelines', 'Big Data Ready', 'Predictive Modeling', 'Data Warehousing', 'Real-time Alerts'],
        logos: [
            { icon: <SiTableau size={32} />, name: 'Tableau' },
            { icon: <BiPowerOff size={32} />, name: 'Power BI' },
            { icon: <FaPython size={32} />, name: 'Pandas' },
            { icon: <SiPostgresql size={32} />, name: 'PostgreSQL' },
            { icon: <SiGooglecloud size={32} />, name: 'BigQuery' },
            { icon: <FaAws size={32} />, name: 'Redshift' },
        ]
    },
    "mobile-solutions": {
        badge: "Mobile Excellence",
        title: "Apps that feel native on every device.",
        desc: "Our mobile integrations ensure your app talks perfectly to your backend and cloud services.",
        features: ['iOS & Android', 'Push Notifications', 'Offline Sync', 'Biometric Auth', 'Payment Gateways', 'App Store Ready'],
        logos: [
            { icon: <FaApple size={32} />, name: 'iOS' },
            { icon: <SiFlutter size={32} />, name: 'Flutter' },
            { icon: <FaReact size={32} />, name: 'Native' },
            { icon: <FaDatabase size={32} />, name: 'Firebase' },
            { icon: <FaAws size={32} />, name: 'Amplify' },
            { icon: <FaNodeJs size={32} />, name: 'Rest API' },
        ]
    },
    "security-compliance": {
        badge: "Enterprise Grade Safety",
        title: "Protection that Scales with your Business.",
        desc: "We ensure your software meets global security standards and protects sensitive user data at every layer.",
        features: ['Data Encryption', 'GDPR/HIPAA Ready', 'Auth0 Integration', 'Penetration Testing', 'Identity Management', 'Secure Gateways'],
        logos: [
            { icon: <FaDatabase size={32} />, name: 'Encrypted DB' },
            { icon: <FaAws size={32} />, name: 'AWS Shield' },
            { icon: <SiTypescript size={32} />, name: 'Type Safety' },
            { icon: <FaDocker size={32} />, name: 'Isolated Env' },
            { icon: <FaMicrochip size={32} />, name: 'Hardware Sec' },
            { icon: <FaCheckCircle size={32} />, name: 'Compliance' },
        ]
    }
};

const Integrations: React.FC = () => {
    const pathname = usePathname();
    const staggerRef = useGSAPStagger({ stagger: 0.1, animationType: "fadeIn" });

    const currentKey = Object.keys(integrationContent).find(key => pathname.includes(key)) || "software-development";
    const content = integrationContent[currentKey as keyof typeof integrationContent];

    return (
        <section
            id="integrations"
            ref={staggerRef as React.RefObject<HTMLElement>}
            className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            {/* Left Content */}
            <div className="lg:w-1/2">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm mb-6"
                    style={{ backgroundColor: "rgba(147, 51, 234, 0.1)", color: "var(--accent-primary)" }}
                >
                    <FaMicrochip /> {content.badge}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
                    {content.title}
                </h2>

                <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                    {content.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {content.features.map(item => (
                        <div
                            key={item}
                            data-animate-item
                            className="flex items-center gap-3 text-sm font-semibold transition-transform hover:translate-x-1"
                            style={{ color: "var(--text-primary)" }}
                        >
                            <FaCheckCircle className="shrink-0" style={{ color: "var(--accent-primary)" }} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Grid: React Icons as Logos */}
            <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                {content.logos.map((tech, i) => (
                    <div
                        key={i}
                        data-animate-item
                        className="h-32 bg-white border rounded-3xl shadow-sm flex flex-col items-center justify-center gap-3 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 group"
                        style={{ borderColor: "var(--border-default)" }}
                    >
                        <div className="group-hover:text-[var(--accent-primary)] transition-colors duration-300 text-gray-400">
                            {tech.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[var(--text-primary)]">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Integrations;