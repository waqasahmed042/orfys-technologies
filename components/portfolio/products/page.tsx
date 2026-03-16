"use client";
import React, { useState, useMemo } from "react";
import Hero from "@/components/portfolio/hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiArrowUpRight, FiLayers, FiChevronDown } from "react-icons/fi";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import { ourProducts } from "@/lib/constants";

const Products: React.FC = () => {
    const [filter, setFilter] = useState<string>("all");

    const containerRef = useGSAPStagger({
        stagger: 0.1,
        duration: 0.6,
        animationType: "scale",
    });

    const filteredCases = useMemo(() => {
        if (filter === "all") {
            return Object.values(ourProducts).flatMap((s) =>
                s.cases.map((c) => ({ ...c, category: s.title }))
            );
        }
        const service = ourProducts[filter as keyof typeof ourProducts];
        return service ? service.cases.map((c) => ({ ...c, category: service.title })) : [];
    }, [filter]);

    const categories = [
        { id: "all", label: "All Products" },
        ...Object.keys(ourProducts).map((key) => ({
            id: key,
            label: ourProducts[key as keyof typeof ourProducts].title,
        })),
    ];

    return (
        <>
            <main className="bg-[var(--bg-primary)] min-h-screen">
                <Hero />

                <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">

                    <div className="mb-8">
                        {/* Mobile Filter Navigation */}
                        <div className="md:hidden">
                            <div className="relative group">
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="w-full appearance-none bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest focus:outline-none focus:border-[var(--accent-primary)] transition-all cursor-pointer"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id} className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">
                                            {cat.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--accent-primary)]">
                                    <FiChevronDown className="text-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop Filter Navigation */}
                        <div className="hidden md:flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer duration-300 border ${filter === cat.id
                                        ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white"
                                        : "border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products Cards */}
                    <div
                        ref={containerRef as React.RefObject<HTMLDivElement>}
                        key={filter}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredCases.map((project, i) => (
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
                                            {project.category}
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
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Products;