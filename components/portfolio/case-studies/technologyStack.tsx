import { TechCategory, TechCard } from '@/utilities/types';
import React, { useState, useRef, useEffect } from 'react';

const TechnologyStack: React.FC = () => {
    const [activeId, setActiveId] = useState<TechCategory>('frontend');
    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
    const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const menuItems: { id: TechCategory; label: string }[] = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'broker', label: 'Message Broker' },
        { id: 'database', label: 'Database' },
        { id: 'architecture', label: 'Architecture' },
        { id: 'protocol', label: 'Protocol Support' },
    ];

    const techData: Record<TechCategory, TechCard[]> = {
        frontend: [
            { title: "React", icon: "☕", description: "Enterprise-grade backend development providing the core logic for high-performance transaction processing." },
            { title: "Tailwind CSS", icon: "🍃", description: "Robust framework for microservices and cloud-native applications." }
        ],
        backend: [
            { title: "Java", icon: "☕", description: "Enterprise-grade backend development providing the core logic for high-performance transaction processing." },
            { title: "Spring Boot", icon: "🍃", description: "Robust framework for microservices and cloud-native applications." }
        ],
        broker: [
            { title: "Apache Kafka", icon: "⚙️", description: "High-load queuing and streaming for lossless message ingestion and real-time processing." }
        ],
        database: [
            { title: "MongoDB", icon: "📊", description: "Sharded cluster implementation ensuring horizontal scalability and high availability." }
        ],
        architecture: [
            { title: "Distributed Architecture", icon: "🏗️", description: "Active-active failover setup eliminating single points of failure for DORA compliance." }
        ],
        protocol: [
            { title: "SEPA / ISO 20022", icon: "🏦", description: "Full support for modern financial messaging standards and automated compliance screening." }
        ]
    };

    // Effect to update line position
    useEffect(() => {
        const activeElement = menuRefs.current[activeId];
        if (activeElement) {
            setIndicatorStyle({
                top: activeElement.offsetTop,
                height: activeElement.offsetHeight
            });
        }
    }, [activeId]);

    return (
        <section
            id="technology-stack"
            className="py-20 bg-[var(--bg-primary)] relative overflow-hidden"
        >
            <div className='max-w-[1400px] mx-auto px-6 mb-6'>
                <h2 className="text-lg md:text-4xl font-semibold text-[var(--accent-primary)] tracking-tight">
                    Technology Stack
                </h2>

                <p className="text-sm md:text-[16px] my-2 leading-relaxed text-[var(--text-secondary)]">
                    To satisfy strict regulatory requirements and establish stable processing under extreme transaction loads,
                    we selected the following technologies:
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* LEFT SIDE: Sidebar */}
                <div className="lg:col-span-4 border-l-4 border-slate-100 relative pl-12 space-y-12 py-2">
                    <div
                        className="absolute -left-[4px] w-1 bg-[var(--accent-primary)] transition-all duration-500 ease-in-out"
                        style={{
                            top: `${indicatorStyle.top}px`,
                            height: `${indicatorStyle.height}px`
                        }}
                    >
                        <div className="absolute -bottom-2 -left-[6px] w-4 h-4 rounded-full bg-[var(--accent-primary)] border-4 border-white shadow-md"></div>
                    </div>

                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            ref={(el) => { menuRefs.current[item.id] = el; }}
                            onClick={() => setActiveId(item.id)}
                            className="group cursor-pointer select-none hover:text-[var(--accent-primary)]"
                        >
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${activeId === item.id ? 'text-[var(--accent-primary)]' : ''}`}>
                                {item.label}
                            </h3>
                            <p className="text-sm text-slate-400 mt-2 max-w-xs leading-relaxed">
                                Scalable solutions designed for modern banking infrastructure.
                            </p>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE: Dynamic Content */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 content-start min-h-[450px]">
                    {techData[activeId].map((card, index) => (
                        <div
                            key={`${activeId}-${index}`}
                            className="p-8 rounded-[32px] border border-slate-100 bg-[var(--bg-primary)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl border border-slate-100">
                                {card.icon}
                            </div>

                            <h4 className="text-xl font-bold text-[var(--text-primary)]">
                                {card.title}
                            </h4>

                            <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologyStack;