"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import technologies from "@/public/technologies/technologies.svg";
import gsap from 'gsap';
import PathSegments from '../pathSegments';
import Header from '../Header';
import Footer from '../Footer';
import TrustedCompanies from '../TrustedCompanies';
import Testimonials from '../Testimonials';
import WhyOrfys from '../WhyOrfys';
import CTA from '../CTA';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';

const Technologies = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeSidebarId, setActiveSidebarId] = useState<number>(1);

    const containerRef = useGSAPStagger({
        stagger: 0.15,
        duration: 0.8,
        animationType: "fadeIn",
        delay: 0.2,
    });

    const menuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // GSAP Hero Animation
    useEffect(() => {
        const left = leftContentRef.current;
        const right = rightContentRef.current;

        if (!left) return;

        // Set initial states
        gsap.set(left, { opacity: 0, x: -30 });
        if (right) gsap.set(right, { opacity: 0, x: 30, scale: 0.95 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(left, {
            opacity: 1,
            x: 0,
            duration: 0.9,
        })
            .to(right, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
            }, "-=0.6");

        return () => {
            tl.kill();
        };
    }, []);

    // Update vertical indicator position
    useEffect(() => {
        const activeEl = menuRefs.current[activeSidebarId];
        if (activeEl) {
            setIndicatorStyle({
                top: activeEl.offsetTop,
                height: activeEl.offsetHeight,
            });
        }
    }, [activeSidebarId, activeTab]);

    const tabs = [
        { id: 0, label: "Product Design" },
        { id: 1, label: "Engineering" },
        { id: 2, label: "Data & AI" },
        { id: 3, label: "ERP & CRM" },
    ];

    // Sidebar items per tab
    const sidebarData: Record<number, Array<{ id: number; label: string; icon: string; desc: string }>> = {
        0: [ // Product Design
            { id: 1, label: "UI/UX Design", icon: "🎨", desc: "Creating beautiful and intuitive user experiences." },
            { id: 2, label: "Prototyping", icon: "📐", desc: "Building interactive prototypes and wireframes." },
            { id: 3, label: "Design Systems", icon: "🧩", desc: "Consistent and scalable design languages." },
        ],
        1: [ // Engineering
            { id: 1, label: "Mobile", icon: "📱", desc: "Developing fast, reliable apps optimized for every device." },
            { id: 2, label: "Frontend", icon: "🌐", desc: "Creating responsive, attractive interfaces that users love." },
            { id: 3, label: "Backend", icon: "⚙️", desc: "Powering your product with scalable and secure server-side solutions." },
            { id: 4, label: "Database", icon: "🗄️", desc: "Managing data efficiently for smooth, uninterrupted performance." },
            { id: 5, label: "Devops", icon: "🚀", desc: "Streamlining development and deployment with automation and best practices." },
            { id: 6, label: "Security", icon: "🔒", desc: "Safeguarding your software with robust protection measures." },
        ],
        2: [ // Data & AI
            { id: 1, label: "Machine Learning", icon: "🤖", desc: "Building intelligent models and predictions." },
            { id: 2, label: "Data Engineering", icon: "📊", desc: "Processing and transforming large datasets." },
            { id: 3, label: "AI Integration", icon: "🧠", desc: "Embedding AI capabilities into applications." },
        ],
        3: [ // ERP & CRM
            { id: 1, label: "ERP Systems", icon: "🏢", desc: "Enterprise resource planning and automation." },
            { id: 2, label: "CRM Platforms", icon: "👥", desc: "Customer relationship and sales management." },
            { id: 3, label: "Integration", icon: "🔗", desc: "Seamless connectivity between business systems." },
        ],
    };

    const currentSidebar = sidebarData[activeTab] || sidebarData[0];

    // Technologies data
    const techData: Record<number, Record<number, Array<{ name: string; color: string }>>> = {
        0: { // Product Design
            1: [
                { name: "Figma", color: "#A259FF" },
                { name: "Sketch", color: "#000000" },
                { name: "Adobe XD", color: "#FF0000" },
                { name: "Framer", color: "#0055FF" },
                { name: "Webflow", color: "#4353FF" },
                { name: "Lottie", color: "#00C4B4" },
            ],
            2: [
                { name: "Figma", color: "#A259FF" },
                { name: "Proto.io", color: "#00B4FF" },
                { name: "InVision", color: "#FF2D55" },
                { name: "Principle", color: "#000000" },
            ],
            3: [
                { name: "Figma", color: "#A259FF" },
                { name: "Storybook", color: "#FF4785" },
                { name: "Zeroheight", color: "#4F46E5" },
            ],
        },
        1: { // Engineering
            1: [ // Mobile
                { name: "React Native", color: "#61DAFB" },
                { name: "Flutter", color: "#02569B" },
                { name: "Swift", color: "#FF6B00" },
                { name: "Kotlin", color: "#7F52FF" },
            ],
            2: [ // Frontend
                { name: "TailwindCSS", color: "#06b67f" },
                { name: "Bootstrap", color: "#7c3aed" },
                { name: "Material UI", color: "#00b4ff" },
                { name: "Untitled UI", color: "#6366f1" },
                { name: "Chakra UI", color: "#3b82f6" },
                { name: "Ant Design", color: "#1890ff" },
                { name: "Storybook", color: "#ff4785" },
                { name: "React JS", color: "#61dafb" },
                { name: "Next JS", color: "#000000" },
                { name: "Vue JS", color: "#42b883" },
            ],
            3: [ // Backend
                { name: "Node.js", color: "#339933" },
                { name: "NestJS", color: "#E0234E" },
                { name: "Django", color: "#092E20" },
                { name: "Laravel", color: "#FF2D20" },
            ],
            4: [ // Database
                { name: "PostgreSQL", color: "#336791" },
                { name: "MongoDB", color: "#47A248" },
                { name: "MySQL", color: "#4479A1" },
                { name: "Redis", color: "#DC382D" },
            ],
            5: [ // Devops
                { name: "Docker", color: "#2496ED" },
                { name: "Kubernetes", color: "#326CE5" },
                { name: "AWS", color: "#FF9900" },
            ],
            6: [ // Security
                { name: "OAuth", color: "#000000" },
                { name: "JWT", color: "#FF4081" },
                { name: "Auth0", color: "#EB5424" },
            ],
        },
        2: { // Data & AI
            1: [
                { name: "TensorFlow", color: "#FF6F00" },
                { name: "PyTorch", color: "#EE4C2C" },
                { name: "Scikit-learn", color: "#F7931E" },
            ],
            2: [
                { name: "Apache Spark", color: "#E25A1C" },
                { name: "Airflow", color: "#017CEE" },
                { name: "Kafka", color: "#000000" },
            ],
            3: [
                { name: "OpenAI", color: "#10A37F" },
                { name: "LangChain", color: "#000000" },
                { name: "Hugging Face", color: "#FFD21E" },
            ],
        },
        3: { // ERP & CRM
            1: [
                { name: "SAP", color: "#0070F2" },
                { name: "Oracle NetSuite", color: "#E31C2E" },
                { name: "Microsoft Dynamics", color: "#00A4EF" },
            ],
            2: [
                { name: "Salesforce", color: "#00A1E0" },
                { name: "HubSpot", color: "#FF7A59" },
            ],
            3: [
                { name: "Zapier", color: "#FF4A00" },
                { name: "MuleSoft", color: "#00A0DF" },
            ],
        },
    };

    const currentTechs = techData[activeTab]?.[activeSidebarId] || [];
    const activeSidebarLabel = currentSidebar.find(item => item.id === activeSidebarId)?.label || "UI/UX Design";

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                id="technologies"
                className="relative w-full flex items-center mt-28 mb-12 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div ref={leftContentRef} className="space-y-4">
                            <PathSegments />

                            <h1
                                className="text-2xl md:text-5xl font-bold leading-tight flex flex-row gap-2"
                                style={{ color: "var(--text-primary)" }}
                            >
                                Our <br />
                                <span className="text-[var(--accent-primary)]">Technologies</span>
                            </h1>

                            <p
                                className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                We leverage modern technologies, frameworks, and tools to build scalable web applications,
                                automation systems, and high-performance digital solutions tailored to real business needs.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact-us"
                                    className="px-8 py-4 bg-[var(--accent-primary)] text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-[var(--accent-primary)]/20"
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>

                        <div ref={rightContentRef} className="relative w-full hidden lg:flex items-center justify-center">
                            <Image src={technologies} alt="technologies" priority className="w-[500px] h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Technologies Section */}
            <section className="pb-24" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-22">
                    {/* Page Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                            Tools & Technologies
                        </h2>
                        <p className="text-sm md:text-md lg:text-lg max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                            Using cutting-edge tools to build future-ready apps. We use modern technologies to deliver top-tier custom
                            software solutions for businesses across Austin and beyond.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex gap-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setActiveSidebarId(sidebarData[tab.id][0].id);
                                    }}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer duration-300 border ${activeTab === tab.id
                                        ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white"
                                        : "border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Sidebar - Matches Screenshot */}
                        <div className="lg:col-span-3 relative pl-8">
                            <div
                                className="absolute -left-[4px] w-1 bg-[var(--accent-primary)] transition-all duration-500 ease-in-out"
                                style={{
                                    top: `${indicatorStyle.top}px`,
                                    height: `${indicatorStyle.height}px`
                                }}
                            >
                                <div className="absolute -bottom-2 -left-[6px] w-4 h-4 rounded-full bg-[var(--accent-primary)] border-4 border-white shadow-md"></div>
                            </div>

                            {currentSidebar.map((item) => (
                                <div
                                    key={item.id}
                                    ref={(el) => { menuRefs.current[item.id] = el; }}
                                    onClick={() => setActiveSidebarId(item.id)}
                                    className={`group cursor-pointer mb-10 last:mb-0 transition-all ${activeSidebarId === item.id ? "text-[var(--accent-primary)]" : "hover:text-[var(--accent-primary)]"
                                        }`}
                                >
                                    <div className="flex gap-4">
                                        <span className="text-3xl">{item.icon}</span>
                                        <div>
                                            <h3 className="text-xl font-semibold">{item.label}</h3>
                                            <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Technology Cards */}
                        <div
                            ref={containerRef as React.RefObject<HTMLDivElement>}
                            className="lg:col-span-9"
                        >
                            <h3 className="text-2xl font-semibold mb-8" style={{ color: "var(--text-primary)" }}>
                                {activeSidebarLabel}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                                {currentTechs.length > 0 ? (
                                    currentTechs.map((tech, index) => (
                                        <div
                                            key={index}
                                            data-animate-item
                                            className="border border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] rounded-2xl p-6 flex flex-col items-center justify-center transition-all hover:shadow-md hover:-translate-y-1"
                                        >
                                            <div
                                                className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-3xl font-bold"
                                                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
                                            >
                                                {tech.name[0]}
                                            </div>
                                            <p className="font-medium text-center text-sm" style={{ color: "var(--text-primary)" }}>
                                                {tech.name}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 col-span-full">No technologies available yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustedCompanies />
            <Testimonials />
            <WhyOrfys />
            <CTA />
            <Footer />
        </>
    );
};

export default Technologies;