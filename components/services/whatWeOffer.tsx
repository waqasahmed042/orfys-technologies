"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import { IoBarChartOutline, IoPieChartOutline } from "react-icons/io5";
import {
    LuGlobe, LuLayers, LuCpu, LuCloud, LuZap, LuSettings,
    LuWorkflow, LuFileJson, LuLink, LuPuzzle, LuShare2,
    LuSmartphone, LuTablet, LuShieldCheck, LuLock, LuActivity, LuTrendingUp
} from "react-icons/lu";

const serviceContent = {
    "software-development": {
        title: "Software Development",
        subtitle: "Comprehensive engineering solutions to build, deploy, and scale your digital vision.",
        items: [
            { icon: <LuGlobe />, title: "Web Applications", desc: "Modern, scalable web platforms using React and Next.js." },
            { icon: <LuLayers />, title: "Custom Software", desc: "Tailored business solutions designed for unique operational requirements." },
            { icon: <LuCpu />, title: "Enterprise Systems", desc: "Large-scale tools engineered for complex data environments." },
            { icon: <LuCloud />, title: "Cloud Architecture", desc: "Cloud-native solutions built for high availability and performance." }
        ]
    },
    "workflow-automation": {
        title: "Workflow Automation",
        subtitle: "Eliminate bottlenecks and boost efficiency with intelligent process automation.",
        items: [
            { icon: <LuZap />, title: "Business Automation", desc: "Streamline repetitive daily tasks and eliminate manual data entry." },
            { icon: <LuFileJson />, title: "Office Add-ins", desc: "Custom Word, Excel, and Outlook automation for productivity." },
            { icon: <LuSettings />, title: "Process Optimization", desc: "Digital workflows designed to identify and fix operational gaps." },
            { icon: <LuWorkflow />, title: "Logic & Triggers", desc: "Complex event-based automation for real-time business logic." }
        ]
    },
    "integration-services": {
        title: "Integration Services",
        subtitle: "Connecting your fragmented systems into a unified, high-performing digital ecosystem.",
        items: [
            { icon: <LuLink />, title: "API Development", desc: "Secure and scalable API endpoints for seamless data flow." },
            { icon: <LuPuzzle />, title: "Third-Party Sync", desc: "Connecting CRMs, ERPs, and Finance tools like Zapier and Make." },
            { icon: <LuCloud />, title: "Cloud Integrations", desc: "Deep connectivity between Azure, AWS, and SaaS platforms." },
            { icon: <LuShare2 />, title: "Legacy Bridging", desc: "Connecting modern frontends to older backend legacy systems." }
        ]
    },
    "data-analytics": {
        title: "Data Analytics",
        subtitle: "Turn raw data into actionable insights with professional visualization and intelligence.",
        items: [
            { icon: <IoBarChartOutline />, title: "Data Visualization", desc: "Interactive dashboards that make complex data easy to understand." },
            { icon: <IoPieChartOutline />, title: "Business Intelligence", desc: "Deep-dive analytics to drive data-informed decision making." },
            { icon: <LuTrendingUp />, title: "Predictive Analytics", desc: "Using historical data to forecast trends and business outcomes." },
            { icon: <LuActivity />, title: "Real-time Monitoring", desc: "Live tracking of KPIs and operational performance metrics." }
        ]
    },
    "mobile-solutions": {
        title: "Mobile Solutions",
        subtitle: "Native and cross-platform mobile apps designed for reach and performance.",
        items: [
            { icon: <LuSmartphone />, title: "iOS Development", desc: "High-performance native applications for the Apple ecosystem." },
            { icon: <LuTablet />, title: "Android Development", desc: "Scalable and responsive apps for the diverse Android market." },
            { icon: <LuLayers />, title: "Cross-Platform", desc: "Efficient development using React Native or Flutter for all devices." },
            { icon: <LuZap />, title: "Mobile UI/UX", desc: "Touch-first design focused on user retention and engagement." }
        ]
    },
    "security-compliance": {
        title: "Security & Compliance",
        subtitle: "Protecting your digital assets and ensuring your operations meet global standards.",
        items: [
            { icon: <LuShieldCheck />, title: "Application Security", desc: "End-to-end protection against common web and mobile threats." },
            { icon: <LuLock />, title: "Compliance Solutions", desc: "Aligning your tech stack with industry standards like GDPR or HIPAA." },
            { icon: <LuCpu />, title: "Data Integrity", desc: "Ensuring your business data remains accurate and protected." },
            { icon: <LuActivity />, title: "Security Audits", desc: "Continuous monitoring and vulnerability assessments." }
        ]
    }
};

const WhatWeOffer: React.FC = () => {
    const pathname = usePathname();
    const staggerRef = useGSAPStagger({ stagger: 0.1, animationType: "fadeIn" });

    const currentKey = Object.keys(serviceContent).find(key => pathname.includes(key)) || "software-development";
    const content = serviceContent[currentKey as keyof typeof serviceContent];

    return (
        <section
            id="services-covered"
            ref={staggerRef as React.RefObject<HTMLElement>}
            className="py-24 px-6 max-w-7xl mx-auto"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            {/* Dynamic Header */}
            <div className="mb-16 flex justify-center items-center flex-col">
                <h2 className="text-lg md:text-2xl lg:text-5xl font-bold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
                    Our Services
                </h2>
                <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
                    {content.subtitle}
                </p>
            </div>

            {/* Dynamic 4-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.items.map((service, i) => (
                    <div
                        key={i}
                        data-animate-item
                        className="p-8 rounded-3xl border transition-all duration-300 group shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col items-start"
                        style={{
                            backgroundColor: "var(--bg-secondary)",
                            borderColor: "var(--border-default)"
                        }}
                    >
                        {/* Dynamic Icon Container */}
                        <div
                            className="text-4xl mb-6 p-4 rounded-2xl transition-transform group-hover:scale-110 group-hover:rotate-3"
                            style={{
                                color: "var(--accent-primary)",
                                backgroundColor: "rgba(147, 51, 234, 0.05)"
                            }}
                        >
                            {service.icon}
                        </div>

                        {/* Dynamic Content */}
                        <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                            {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeOffer;