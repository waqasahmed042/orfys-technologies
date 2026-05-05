"use client";

import React, { useState, useEffect, useMemo } from "react";
import Hero from "@/components/portfolio/hero";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaTimes } from "react-icons/fa";
import Footer from "@/components/Footer";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import { projectsData } from "@/lib/portfolioConstants";
import WhyOrfys from "@/components/WhyOrfys";
import Subscribe from "@/components/subscribe";
import { FiArrowUpRight } from "react-icons/fi";

const ITEMS_PER_PAGE = 6;
const filters = [
    "All Projects",
    "E-Commerce",
    "Media & AI",
    "Software",
    "Blockchain",
    "Healthcare",
];

const CaseStudies: React.FC = () => {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("All Projects");
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const showClear = activeFilter !== "All Projects" || search !== "";

    const handleClearFilters = () => {
        setSearch("");
        setActiveFilter("All Projects");
    };

    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE);
    }, [activeFilter, search]);

    // Combined filter logic (category + search)
    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            const matchesCategory =
                activeFilter === "All Projects" ||
                project.industry?.toLowerCase() === activeFilter.toLowerCase();

            const matchesSearch =
                !search ||
                project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.tech.some((t) =>
                    t.toLowerCase().includes(search.toLowerCase())
                );

            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, search]);
    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const containerRef = useGSAPStagger({
        stagger: 0.12,
        duration: 0.7,
        animationType: "scale",
        delay: 0.1,
    });

    return (
        <>
            <Hero />

            {/* Filter Bar */}
            <section
                className="sticky top-20 z-30 backdrop-blur-md border-b py-4"
                style={{
                    backgroundColor: "color-mix(in srgb, var(--bg-primary) 85%, transparent)",
                    borderColor: "var(--border-default)",
                }}
            >
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">

                        {/* Filters */}
                        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 md:pb-0">
                            {filters.map((filter) => {
                                const isActive = activeFilter === filter;

                                return (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium whitespace-nowrap transition-all duration-200
                                                ${isActive
                                                ? "bg-purple-600 text-white shadow-sm"
                                                : "border border-gray-300 text-gray-600 hover:border-purple-500 hover:text-purple-600"
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">

                            {/* Search */}
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search tech stack..."
                                    className="pl-10 pr-4 py-2 rounded-xl text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-56 md:w-64"
                                />
                            </div>

                            {/* Clear Filter */}
                            {showClear && (
                                <button
                                    onClick={handleClearFilters}
                                    className="flex items-center cursor-pointer text-red-500 text-sm font-medium hover:underline"
                                >
                                    <FaTimes className="mr-1 text-xs" />
                                    Clear Filter
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <div className="py-20 max-w-[1250px] mx-auto px-6">
                <div
                    ref={containerRef as React.RefObject<HTMLDivElement>}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.length === 0 ? (
                        <div className="col-span-full text-center py-20">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                No projects found matching your criteria.
                            </h3>
                        </div>
                    ) : (
                        visibleProjects.map((item, idx) => (
                            <div
                                key={idx}
                                className="group"
                                data-animate-item
                            >
                                <div className="bg-[var(--bg-primary)] rounded-xl border border-[var(--border-default)] overflow-hidden transition-all duration-300 hover:-translate-y-2">

                                    {/* Image */}
                                    <div className="h-56 relative overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-purple-600 font-bold shadow-sm">
                                                {item.industry}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className="text-lg text-[var(--text-primary)] font-bold mb-2">
                                            {item.title}
                                        </h3>

                                        {/* Description (ADD this in your data if missing) */}
                                        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                                            {item.description || "High-performance scalable system designed for modern enterprise needs."}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.tech.slice(0, 3).map((t) => (
                                                <span
                                                    key={t}
                                                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-semibold"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href={`/portfolio/case-studies/${item.slug
                                                .toLowerCase()
                                                .replace(/[^a-z0-9]+/g, "-")
                                                .replace(/^-|-$/g, "")}`}
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
                            </div>
                        ))
                    )}
                </div>

                {/* Load More Button */}
                {visibleProjects.length < filteredProjects.length && (
                    <div className="mt-12 flex justify-center">
                        <button
                            className="border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] cursor-pointer px-8 py-3 rounded-xl font-semibold hover:bg-[var(--accent-primary)] hover:text-white transition-all"
                            onClick={() => setVisibleCount(visibleCount + ITEMS_PER_PAGE)}
                        >
                            Load More Projects
                        </button>
                    </div>
                )}
            </div>

            <WhyOrfys />
            <Subscribe />

            <Footer />
        </>
    );
};

export default CaseStudies;