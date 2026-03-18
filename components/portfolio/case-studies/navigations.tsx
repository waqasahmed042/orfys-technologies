"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { projectsData } from "@/lib/portfolioConstants";
import NotFound from "@/app/not-found";
import Header from "@/components/Header";

gsap.registerPlugin(ScrollToPlugin);

const Navigations = () => {
    const pathname = usePathname();
    const heroLeftRef = useRef<HTMLDivElement>(null);
    const heroRightRef = useRef<HTMLDivElement>(null);

    const resultsList = [
        "Reduced regulatory risks by automatically checking each SEPA message for compliance with applicable EU requirements before execution. The architecture also supports integration with AI models for fraud-pattern detection, making the solution more future-proof.",
        "Improved operational efficiency by automating large-scale transaction filtering and limiting manual review to only truly suspicious cases.",
        "High performance under peak loads, providing stable processing of tens of thousands of SEPA requests per second in large banking environments.",
        "Better infrastructure resilience thanks to an active-active architecture, ensuring uninterrupted payment processing during maintenance and local hardware failures."
    ];

    const currentSegment = pathname.split("/").filter(Boolean).pop() || "";
    const content = projectsData.find((item) => item.slug === currentSegment);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        gsap.set(heroLeftRef.current, { opacity: 0, x: -30 });
        gsap.set(heroRightRef.current, { opacity: 0, x: 30 });

        tl.to(heroLeftRef.current, { opacity: 1, x: 0, duration: 0.8 })
            .to(heroRightRef.current, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4");
    }, []);

    if (!content) return <NotFound />;

    const navItems = [
        "Overview", "Challenge", "Main Goals", "Project Overview",
        "Solution", "Technology Stack", "Core Team", "Results"
    ];

    const scrollToSection = (id: string) => {
        const target = id.toLowerCase().replace(/\s+/g, '-');
        gsap.to(window, { duration: 0.8, scrollTo: { y: `#${target}`, offsetY: 80 } });
    };

    return (
        <>
            <Header />

            {/* STICKY NAV */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 py-4 shadow-sm">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-between gap-4">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-[11px] lg:text-[13px] font-bold text-blue-900/60 hover:text-blue-600 uppercase tracking-tighter lg:tracking-widest transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>

            {/* OVERVIEW SECTION */}
            <SectionWrapper id="overview" title="Overview Of Our Client" bgColor="bg-white">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div ref={heroLeftRef} className="space-y-6">
                        <p className="text-lg leading-relaxed">
                            Our client was a leading European banking institution, implementing SEPA payments and processing massive volumes of transfers every day.
                            They operated under strict regulatory oversight and required live compliance checks to ensure that every transaction followed EU standards.
                        </p>
                        <p className="text-lg leading-relaxed">
                            The bank needed a high-throughput solution that could integrate into their core payment pipelines, as well as maintain full auditability, zero downtime, and the ability to scale horizontally during peak periods.
                        </p>
                    </div>
                    <div ref={heroRightRef} className="flex justify-center bg-blue-50 rounded-3xl p-10">
                        <div className="w-full aspect-video bg-blue-100 rounded-xl flex items-center justify-center text-blue-400 italic">Client Overview Illustration</div>
                    </div>
                </div>
            </SectionWrapper>

            {/* CHALLENGE SECTION */}
            <SectionWrapper id="challenge" title="Challenge" bgColor="bg-blue-50/30">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 bg-white rounded-3xl p-10 shadow-sm border border-blue-50">
                        <div className="w-full aspect-square bg-blue-100 rounded-xl flex items-center justify-center text-blue-400 italic">Challenge Metrics Chart</div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-4">
                        <p>European banks face a unique combination of regulatory rigor and infrastructure pressure. Main challenges included:</p>
                        <ul className="space-y-4">
                            {[
                                "Strict and evolving EU regulations requiring compliance checks for every single transfer.",
                                "Extremely high throughput demands (tens of thousands of SEPA requests per second).",
                                "The need for zero downtime processing to avoid massive financial penalties.",
                                "Granular analysis of large batch files without losing batch-level context."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* MAIN GOALS */}
            <SectionWrapper id="main-goals" title="Main Goals" bgColor="bg-white">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4">
                        {[
                            "Automate ALR/AML compliance checks for instant SEPA payments.",
                            "Categorize transactions into Accepted, Suspicious, and Manual Review flows.",
                            "Integrate into core pipelines without introducing latency.",
                            "Use sharding and horizontal scaling to handle peak end-of-month loads.",
                            "Provide reliable message storage for audit trails and regulatory reporting."
                        ].map((goal, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                                <p className="font-medium">{goal}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-900 rounded-3xl p-10 text-white flex flex-col items-center justify-center text-center">
                        <div className="text-5xl font-bold mb-4">Goal:</div>
                        <div className="text-xl text-blue-200 uppercase tracking-widest font-bold">Zero Failure Scaling</div>
                    </div>
                </div>
            </SectionWrapper>

            {/* PROJECT OVERVIEW */}
            <SectionWrapper id="project-overview" title="Project Overview" bgColor="bg-blue-50/30">
                <div className="max-w-4xl space-y-6">
                    <p className="text-xl font-medium text-blue-900">High-throughput financial middleware platform based on stream processing.</p>
                    <p>Apache Kafka handled reliable ingestion and queueing, allowing the system to process massive SEPA flows without message loss. Results were stored in sharded MongoDB, enabling high-concurrency writes and fast lookups.</p>
                    <div className="grid md:grid-cols-2 gap-8 py-8">
                        <div className="p-6 bg-white rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-blue-600 mb-2">Resilience</h4>
                            <p>Active-active configuration to eliminate single points of failure during maintenance.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-blue-600 mb-2">Performance</h4>
                            <p>Consistently processed tens of thousands of requests per second on-premise.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* SOLUTION */}
            <SectionWrapper id="solution" title="Solution" bgColor="bg-white">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <p>Our solution intercepted large incoming SEPA batches, split them into individual transfers, and performed automated regulatory checks on both transaction-level messages and the batch as a whole.</p>
                        <div className="bg-blue-600 p-8 rounded-2xl text-white">
                            <h4 className="text-xl font-bold mb-4">Tri-State Classification:</h4>
                            <div className="grid grid-cols-3 gap-4 text-center text-xs font-bold uppercase">
                                <div className="p-2 border border-white/30 rounded">Accepted</div>
                                <div className="p-2 border border-white/30 rounded">Suspicious</div>
                                <div className="p-2 border border-white/30 rounded">Manual</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-blue-900">Key Engineering Features</h4>
                        <ul className="space-y-3 text-sm">
                            <li>• Lossless ingestion via Apache Kafka</li>
                            <li>• Full DORA (Digital Operational Resilience Act) compliance</li>
                            <li>• SaaS & On-Premise hybrid deployment models</li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* TECH STACK TABLE */}
            <SectionWrapper id="technology-stack" title="Technology Stack" bgColor="bg-blue-50/30">
                <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm">
                    <TechRow label="Backend" value="Java" />
                    <TechRow label="Message Broker" value="Apache Kafka (high-load queuing and streaming)" />
                    <TechRow label="Database" value="MongoDB (sharded cluster)" />
                    <TechRow label="Architecture" value="Distributed active-active failover setup" />
                    <TechRow label="Protocol" value="SEPA / ISO 20022" />
                </div>
            </SectionWrapper>

            {/* CORE TEAM */}
            <SectionWrapper id="core-team" title="Core Team" bgColor="bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { role: "Fintech Architect", desc: "Designed SEPA processing model" },
                        { role: "Systems Engineer", desc: "Kafka ingestion & synchronization" },
                        { role: "Database Expert", desc: "MongoDB sharding strategy" },
                        { role: "Compliance Devs", desc: "ALR/AML rule sets" },
                        { role: "SRE Engineers", desc: "High-availability cluster management" }
                    ].map((member, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 border-l-4 border-blue-600 bg-blue-50/50">
                            <div>
                                <h4 className="font-bold text-blue-900">{member.role}</h4>
                                <p className="text-sm">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* RESULTS */}
            <section id="results" className="bg-[#1b88ca] text-white py-20 px-6 sm:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    {/* Main Heading */}
                    <h2 className="text-5xl md:text-6xl font-semibold mb-10 tracking-tight">
                        Results
                    </h2>

                    {/* Intro Paragraph */}
                    <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-6xl opacity-95 font-light">
                        The system enabled reliable and high-speed verification of SEPA transaction compliance
                        at the scale required by major European banks. In particular, we achieved:
                    </p>

                    {/* Results List */}
                    <ul className="space-y-8 max-w-7xl">
                        {resultsList.map((item, index) => (
                            <li key={index} className="flex gap-4 items-start">
                                {/* Custom Bullet Point */}
                                <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-white mt-2.5 shadow-sm" />

                                <p className="text-lg md:text-xl leading-relaxed opacity-90 font-light">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

// --- SUB-COMPONENTS ---

const SectionWrapper = ({ children, title, id, bgColor }: { children: React.ReactNode, title: string, id: string, bgColor: string }) => (
    <section id={id} className={`py-24 ${bgColor}`}>
        <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 border-l-8 border-blue-600 pl-6">{title}</h2>
            {children}
        </div>
    </section>
);

const TechRow = ({ label, value }: { label: string, value: string }) => (
    <div className="grid grid-cols-3 border-b border-blue-50 last:border-0 hover:bg-blue-50/20 transition-colors">
        <div className="p-6 bg-blue-50/40 font-bold text-blue-900 text-xs uppercase tracking-widest">{label}</div>
        <div className="p-6 col-span-2 text-slate-600 text-sm">{value}</div>
    </div>
);

const ResultCard = ({ title, desc, label }: { title: string, desc: string, label?: string }) => (
    <div className="p-8 border border-white/20 rounded-2xl bg-white/5 hover:bg-white/10 transition-all flex flex-col justify-between">
        <div>
            {label && <span className="text-[10px] bg-white text-blue-600 px-2 py-1 rounded-full font-bold mb-4 inline-block">{label}</span>}
            <h4 className="text-xl font-bold mb-4">{title}</h4>
            <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default Navigations;