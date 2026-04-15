"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import Link from 'next/link';
import { FiArrowUpRight, FiLayers } from 'react-icons/fi';
import { ourProducts } from '@/lib/constants';

const Projects: React.FC = () => {
    const pathname = usePathname();
    const containerRef = useGSAPStagger({
        stagger: 0.2,
        duration: 0.6,
        animationType: "fadeIn",
    });

    // Finds current key or defaults to software-development
    const currentKey = Object.keys(ourProducts).find(key => pathname.toLowerCase().includes(key));
    const content = ourProducts[currentKey as keyof typeof ourProducts];

    return (
        <section
            id="projects"
            ref={containerRef as React.RefObject<HTMLElement>}
            className="my-24"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-7xl mx-auto px-6">
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
                <div
                    ref={containerRef as React.RefObject<HTMLDivElement>}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {content.cases.map((project, i) => (
                        <div
                            key={`${project.title}-${i}`}
                            data-animate-item
                            className="group bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-default)] transition-all duration-500"
                        >

                            {/* Visual Header */}
                            <div className="aspect-[16/9] bg-zinc-100 relative flex items-center justify-center rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <FiLayers className="text-5xl text-[var(--border-default)] group-hover:text-[var(--accent-primary)] transition-colors duration-500" />

                                {/* Category Tag */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] border border-[var(--border-default)] dark:bg-transparent dark:text-[var(--accent-primary)] dark:border-[var(--accent-primary)]">
                                        {project.title}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-[var(--text-secondary)] mb-8 line-clamp-2 leading-relaxed">
                                    {project.desc}
                                </p>

                                <Link
                                    href={`/portfolio/products/${project.slug}`}
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