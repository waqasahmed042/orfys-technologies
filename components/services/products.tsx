"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { ourProducts } from '@/lib/constants';

const Projects: React.FC = () => {
    const pathname = usePathname();
    const staggerRef = useGSAPStagger({ stagger: 0.2, animationType: "fadeIn" });

    // Finds current key or defaults to software-development
    const currentKey = Object.keys(ourProducts).find(key => pathname.toLowerCase().includes(key));
    const content = ourProducts[currentKey as keyof typeof ourProducts];

    return (
        <section
            id="projects"
            ref={staggerRef as React.RefObject<HTMLElement>}
            className="my-24"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-16 flex justify-center items-center flex-col">
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
                        Our Projects
                    </h2>
                    <p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }}>
                        {content.subtitle}
                    </p>
                </div>

                {/* Case Study Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {content.cases.map((project, i) => (
                        <div
                            key={i}
                            data-animate-item
                            className="group overflow-hidden rounded-2xl bg-[var(--bg-secondary)] border border-white/5 shadow-md transition-all duration-300 hover:border-[var(--accent-primary)]/20"
                        >
                            {/* Project Preview Placeholder */}
                            <div className="aspect-video bg-zinc-900/50 relative flex items-center justify-center overflow-hidden">
                                <span className="text-zinc-700 font-bold uppercase text-xs tracking-[0.2em] group-hover:text-[var(--accent-primary)] transition-colors duration-500">
                                    {content.title} Project 0{i + 1}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">
                                    {project.desc}
                                </p>

                                <Link
                                    href={project.link}
                                    className="group/link inline-flex items-center gap-2 text-[var(--accent-primary)] font-bold uppercase text-[10px] tracking-[0.15em]"
                                >
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
    );
};

export default Projects;