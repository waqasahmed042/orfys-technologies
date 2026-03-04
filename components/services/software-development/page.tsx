"use client";

import React from "react";
import Link from "next/link";
import {
    FiCheckCircle,
    FiChevronDown,
    FiCode,
    FiLayers,
    FiSmartphone,
    FiCpu,
    FiArrowUpRight,
    FiStar,
} from "react-icons/fi";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PathSegments from "../pathSegments";
import Hero from "../hero";

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">{title}</h2>
        {subtitle && <p className="text-[var(--text-secondary)] text-lg max-w-2xl font-medium">{subtitle}</p>}
    </div>
);

// Data for services, testimonials, and FAQs
const servicesCovered = [
    {
        title: "Custom Web Apps",
        desc: "Tailored web platforms built with React and Next.js for maximum performance.",
        icon: <FiCode />
    },
    {
        title: "Mobile Solutions",
        desc: "Native-feel iOS and Android applications using React Native and Flutter.",
        icon: <FiSmartphone />
    },
    {
        title: "Scalable Architecture",
        desc: "Robust cloud-native backends designed to handle enterprise-level traffic.",
        icon: <FiLayers />
    },
    {
        title: "AI Integration",
        desc: "Intelligent automation and AI-powered features for modern workflows.",
        icon: <FiCpu />
    }
];

// In a real application, these would likely come from a CMS or database
const testimonials = [
    {
        name: "Alex Chen",
        role: "CTO, Nexus Dynamics",
        content: "Orfys Technologies didn't just build an app; they built a scalable engine for our business. Their technical expertise is second to none.",
        rating: 5
    },
    {
        name: "Sarah Jenkins",
        role: "Founder, Bloom Retail",
        content: "The custom mobile solution they delivered transformed our customer engagement. The attention to detail in the UI is incredible.",
        rating: 5
    },
    {
        name: "Marcus Thorne",
        role: "Operations Manager, LogiTech",
        content: "Seamless integration and zero downtime. They took our complex legacy systems and modernized them into a high-performance cloud stack.",
        rating: 5
    }
];

// FAQs would also typically be dynamic, but here we hardcode them for simplicity
const faqs = [
    {
        q: "How long does the development process take?",
        a: "Timelines vary depending on project complexity. A typical MVP usually takes 8-12 weeks, while larger enterprise solutions may take 6+ months."
    },
    {
        q: "Do you offer post-launch maintenance?",
        a: "Yes, we provide dedicated support and maintenance packages to ensure your software stays secure and updated."
    }
];

const SoftwareDevelopment: React.FC = () => {
    const heroRef = useGSAPAnimation({ animationType: "fadeIn", duration: 1 });
    const staggerRef = useGSAPStagger({ stagger: 0.1, animationType: "fadeIn" });

    return (
        <>
            <Header />
            <main className="bg-[var(--bg-primary)] mt-20 min-h-screen">

                {/* HERO SECTION */}
                <Hero />

                {/* WHAT WE OFFER */}
                <section className="py-24 bg-[var(--bg-secondary)]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <SectionHeader
                            title="What Does Our Service Cover?"
                            subtitle="Comprehensive engineering solutions to build, deploy, and scale your digital vision."
                        />
                        <div ref={staggerRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {servicesCovered.map((service, i) => (
                                <div key={i} data-animate-item className="p-8 bg-[var(--bg-primary)] border border-white/5 rounded-2xl hover:border-[var(--accent-primary)] transition-all group shadow-sm hover:shadow-xl">
                                    <div className="text-4xl text-[var(--accent-primary)] mb-6 group-hover:scale-110 transition-transform inline-block">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{service.title}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. WHEN & WHY */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <SectionHeader title="When do you need it?" />
                            <div className="space-y-4">
                                {[
                                    "When your legacy systems no longer support your growth.",
                                    "When you need a custom solution that off-the-shelf software can't provide.",
                                    "When you're launching a new product and need a robust MVP.",
                                    "When you want to unify your brand experience across web and mobile."
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 items-start p-5 rounded-xl bg-[var(--bg-secondary)] border border-white/5 hover:border-[var(--accent-primary)]/20 transition-colors">
                                        <FiCheckCircle className="text-[var(--accent-primary)] text-xl mt-1 shrink-0" />
                                        <p className="text-[var(--text-secondary)] font-medium">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 flex flex-col justify-center">
                            <SectionHeader title="Why choose Orfys?" />
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                In a digital-first world, your software is your business. We help you eliminate manual bottlenecks,
                                increase operational speed, and provide your customers with a world-class interface.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5">
                                    <h4 className="text-[var(--accent-primary)] font-bold text-3xl mb-1">100%</h4>
                                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest font-bold">Custom Code</p>
                                </div>
                                <div className="p-6 rounded-2xl border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5">
                                    <h4 className="text-[var(--accent-primary)] font-bold text-3xl mb-1">99.9%</h4>
                                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest font-bold">Uptime Target</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. CASE STUDIES */}
                <section className="py-24 bg-[var(--bg-secondary)]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <SectionHeader title="Case Studies" subtitle="Engineering excellence in action." />
                        <div className="grid md:grid-cols-2 gap-10">
                            {[1, 2].map((item) => (
                                <div key={item} className="group overflow-hidden rounded-2xl bg-[var(--bg-primary)] border border-white/5 shadow-md">
                                    <div className="aspect-video bg-zinc-800 relative flex items-center justify-center">
                                        <span className="text-zinc-600 font-bold uppercase tracking-widest">Project 0{item} Preview</span>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Enterprise Product 0{item}</h3>
                                        <p className="text-[var(--text-secondary)] mb-6">A deep dive into custom-built automation and real-time visualization.</p>
                                        <Link href="#" className="group/link inline-flex items-center gap-2 text-[var(--accent-primary)] font-bold uppercase text-xs tracking-widest">
                                            <span className="relative">
                                                View Case Study
                                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--accent-primary)] transition-all duration-300 group-hover/link:w-full" />
                                            </span>
                                            <FiArrowUpRight className="text-lg transition-all duration-300 group-hover/link:rotate-45" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. CLIENT TESTIMONIALS (Review Cards) */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <SectionHeader title="What Our Customers Are Saying" centered />
                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((t, i) => (
                                <div key={i} className="p-8 bg-[var(--bg-secondary)] border border-white/5 rounded-2xl relative">
                                    <div className="flex gap-1 text-orange-400 mb-6">
                                        {[...Array(t.rating)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                                    </div>
                                    <p className="text-[var(--text-secondary)] italic mb-8 leading-relaxed">"{t.content}"</p>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[var(--text-primary)]">{t.name}</span>
                                        <span className="text-xs text-[var(--accent-primary)] uppercase tracking-wider font-bold">{t.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. FAQS */}
                <section className="py-24 bg-[var(--bg-secondary)]">
                    <div className="max-w-4xl mx-auto px-6 lg:px-12">
                        <SectionHeader title="Frequently Asked Questions" centered />
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-[var(--bg-primary)] border border-white/5 rounded-2xl overflow-hidden cursor-pointer">
                                    <summary className="flex justify-between items-center p-6 list-none font-bold text-[var(--text-primary)] text-lg">
                                        {faq.q}
                                        <FiChevronDown className="transition-transform duration-300 group-open:rotate-180 text-[var(--accent-primary)]" />
                                    </summary>
                                    <div className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
};

export default SoftwareDevelopment;