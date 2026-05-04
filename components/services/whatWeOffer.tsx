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
import { ServiceSection } from '@/utilities/types';

const serviceContent: Record<string, ServiceSection> = {
    "software-development": {
        title: "Software Development",
        subtitle: "Comprehensive engineering solutions to build, deploy, and scale your digital vision.",
        items: [
            {
                icon: <LuGlobe />,
                title: "Web Applications",
                desc: "Modern, scalable web platforms using React and Next.js.",
                longDesc: "We build high-performance web applications using React and Next.js with a focus on scalability, performance, SEO, and seamless cross-device user experiences."
            },
            {
                icon: <LuLayers />,
                title: "Custom Software",
                desc: "Tailored business solutions designed for unique operational requirements.",
                longDesc: "Custom-built solutions tailored to your business workflows, improving efficiency, automation, and long-term scalability across your operations."
            },
            {
                icon: <LuCpu />,
                title: "Enterprise Systems",
                desc: "Large-scale tools engineered for complex data environments.",
                longDesc: "Enterprise-grade systems designed to handle complex logic, high traffic, and large-scale data processing with robust architecture."
            },
            {
                icon: <LuCloud />,
                title: "Cloud Architecture",
                desc: "Cloud-native solutions built for high availability and performance.",
                longDesc: "We design and deploy cloud-native architectures on AWS and Azure ensuring high availability, security, scalability, and cost efficiency."
            }
        ]
    },

    "workflow-automation": {
        title: "Workflow Automation",
        subtitle: "Eliminate bottlenecks and boost efficiency with intelligent process automation.",
        items: [
            {
                icon: <LuZap />,
                title: "Business Automation",
                desc: "Streamline repetitive daily tasks.",
                longDesc: "Automate repetitive workflows, reduce manual effort, and increase operational efficiency with intelligent automation systems."
            },
            {
                icon: <LuFileJson />,
                title: "Office Add-ins",
                desc: "Custom Office automation.",
                longDesc: "Build powerful Word, Excel, and Outlook add-ins that enhance productivity and integrate directly with your workflows."
            },
            {
                icon: <LuSettings />,
                title: "Process Optimization",
                desc: "Identify and fix workflow gaps.",
                longDesc: "Analyze and redesign business processes to remove inefficiencies and improve overall system performance."
            },
            {
                icon: <LuWorkflow />,
                title: "Logic & Triggers",
                desc: "Event-based automation.",
                longDesc: "Implement smart triggers and logic-based automation to respond to real-time events across systems."
            }
        ]
    },

    "integration-services": {
        title: "Integration Services",
        subtitle: "Connecting systems into a unified ecosystem.",
        items: [
            {
                icon: <LuLink />,
                title: "API Development",
                desc: "Secure API endpoints.",
                longDesc: "Develop scalable and secure APIs that allow seamless communication between different systems and platforms."
            },
            {
                icon: <LuPuzzle />,
                title: "Third-Party Sync",
                desc: "Connect external tools.",
                longDesc: "Integrate CRMs, ERPs, and SaaS tools like Zapier and Make into a unified workflow."
            },
            {
                icon: <LuCloud />,
                title: "Cloud Integrations",
                desc: "Connect cloud platforms.",
                longDesc: "Enable deep integrations between AWS, Azure, and cloud-based applications."
            },
            {
                icon: <LuShare2 />,
                title: "Legacy Bridging",
                desc: "Modern + legacy systems.",
                longDesc: "Bridge old legacy systems with modern applications without disrupting existing infrastructure."
            }
        ]
    },

    "data-analytics": {
        title: "Data Analytics",
        subtitle: "Turn data into insights.",
        items: [
            {
                icon: <IoBarChartOutline />,
                title: "Data Visualization",
                desc: "Interactive dashboards.",
                longDesc: "Build powerful dashboards that transform raw data into meaningful, visual insights for decision-making."
            },
            {
                icon: <IoPieChartOutline />,
                title: "Business Intelligence",
                desc: "Deep analytics.",
                longDesc: "Leverage BI tools to analyze trends, performance metrics, and business opportunities."
            },
            {
                icon: <LuTrendingUp />,
                title: "Predictive Analytics",
                desc: "Forecast trends.",
                longDesc: "Use historical data and machine learning to predict future trends and business outcomes."
            },
            {
                icon: <LuActivity />,
                title: "Real-time Monitoring",
                desc: "Live tracking.",
                longDesc: "Monitor KPIs and systems in real-time for immediate insights and faster decisions."
            }
        ]
    },

    "mobile-solutions": {
        title: "Mobile Solutions",
        subtitle: "Apps built for performance.",
        items: [
            {
                icon: <LuSmartphone />,
                title: "iOS Development",
                desc: "Native iOS apps.",
                longDesc: "Develop high-performance native iOS applications optimized for Apple devices and ecosystem."
            },
            {
                icon: <LuTablet />,
                title: "Android Development",
                desc: "Android apps.",
                longDesc: "Build scalable Android applications that perform across a wide range of devices."
            },
            {
                icon: <LuLayers />,
                title: "Cross-Platform",
                desc: "React Native / Flutter.",
                longDesc: "Create apps for both iOS and Android using a single codebase with modern frameworks."
            },
            {
                icon: <LuZap />,
                title: "Mobile UI/UX",
                desc: "User-first design.",
                longDesc: "Design intuitive mobile experiences that improve engagement and retention."
            }
        ]
    },

    "security-compliance": {
        title: "Security & Compliance",
        subtitle: "Protect your systems.",
        items: [
            {
                icon: <LuShieldCheck />,
                title: "Application Security",
                desc: "Secure applications.",
                longDesc: "Implement security best practices to protect apps from vulnerabilities and threats."
            },
            {
                icon: <LuLock />,
                title: "Compliance Solutions",
                desc: "Meet standards.",
                longDesc: "Ensure your systems comply with GDPR, HIPAA, and industry regulations."
            },
            {
                icon: <LuCpu />,
                title: "Data Integrity",
                desc: "Protect data.",
                longDesc: "Maintain accuracy and consistency of business-critical data across systems."
            },
            {
                icon: <LuActivity />,
                title: "Security Audits",
                desc: "Continuous monitoring.",
                longDesc: "Conduct regular audits and monitoring to identify and fix vulnerabilities."
            }
        ]
    }
};

const WhatWeOffer: React.FC = () => {
    const pathname = usePathname();
    const staggerRef = useGSAPStagger({ stagger: 0.1, animationType: "fadeIn" });

    const currentKey =
        Object.keys(serviceContent).find(key => pathname.includes(key)) ||
        "software-development";

    const content = serviceContent[currentKey];

    return (
        <section
            id="services-covered"
            ref={staggerRef as React.RefObject<HTMLElement>}
            className="my-16 max-w-[1260px] mx-auto px-6 max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-16 flex justify-center items-center flex-col text-center">
                <h2
                    className="text-lg md:text-2xl lg:text-5xl font-bold mb-6 tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                >
                    Our Services
                </h2>
                <p
                    className="text-lg max-w-3xl"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {content.subtitle}
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.items.map((service, i) => {
                    const isLarge = i % 3 === 0;

                    return (
                        <div
                            key={i}
                            data-animate-item
                            className={`
                                p-8 rounded-2xl transition-all duration-300 group 
                                shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col
                                ${isLarge ? "lg:col-span-2" : "lg:col-span-1"}
                            `}
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                borderColor: "var(--border-default)"
                            }}
                        >
                            <div className="text-4xl mb-6 p-4 rounded-2xl bg-purple-100 text-purple-600 w-fit">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                {isLarge
                                    ? service.longDesc || service.desc
                                    : service.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhatWeOffer;