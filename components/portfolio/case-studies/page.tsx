"use client";
import React, { useState, useMemo } from "react";
import Hero from "@/components/portfolio/hero";
import Image from "next/image";
import services from '@/public/portfolio/services.png';
import Footer from "@/components/Footer";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import { IoIosArrowDown } from "react-icons/io";

const navigationMenus = {
    "Services": ["Software Development", "Workflow Automation", "Integration Services", "Data Analytics", "Mobile Solutions", "Security & Compliance"],
    "Technologies": ["Frontend", "Backend", "Database", "Mobile", "Cloud", "Tools"],
    "Industries": ["Healthcare & Finance", "E-Commerce & Logistics", "Gaming, Edu & Energy", "Crypto & Blockchain", "Media & Emerging"],
    "Expertise": ["Business Solutions", "Management Software", "Advanced Tech"]
};

const projectsData = [
    { title: "Cocktail Recipes Bot", tags: ["Mobile Solutions", "Mobile", "Cloud"] },
    { title: "AI Blockchain Consultant for Real-Time Market Analysis", tags: ["Data Analytics", "Crypto & Blockchain", "Backend"] },
    { title: "AI-Powered News Scanning and Reporting Agent", tags: ["Workflow Automation", "Media & Emerging", "Tools"] },
    { title: "Custom PIM System for Spare Parts Management", tags: ["Software Development", "Business Solutions", "Database"] },
    { title: "AI-Assisted Multi-lingual PIM in Manufacturing", tags: ["Software Development", "Advanced Tech", "Frontend"] },
    { title: "Infrastructure & Database Migration to AWS", tags: ["Integration Services", "Management Software", "Cloud"] },
];

const CaseStudies: React.FC = () => {
    const [hoveredBtn, setHoveredBtn] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<keyof typeof navigationMenus | null>(null);
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({
        Services: "",
        Technologies: "",
        Industries: "",
        Expertise: ""
    });

    const handleSelectChange = (key: string, value: string) => {
        setSelectedFilters((prev) => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setSelectedFilters({ Services: "", Technologies: "", Industries: "", Expertise: "" });
    };

    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            const activeFilters = Object.values(selectedFilters).filter(val => val !== "");
            if (activeFilters.length === 0) return true;
            return activeFilters.every(filterValue => project.tags.includes(filterValue));
        });
    }, [selectedFilters]);

    // Apply the GSAP Hook to the grid container
    const containerRef = useGSAPStagger({
        stagger: 0.12,
        duration: 0.7,
        animationType: "scale",
        delay: 0.1,
    });

    // Generate a unique string based on current filters to force hook reset
    const filterKey = useMemo(() => {
        return Object.values(selectedFilters).join("-") || "all";
    }, [selectedFilters]);

    return (
        <>
            <main className="bg-[var(--bg-primary)] min-h-screen">
                <Hero />

                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0 space-y-4">
                        {(Object.keys(navigationMenus) as Array<keyof typeof navigationMenus>).map((key) => (
                            <div key={key} className="relative group">
                                <select
                                    value={selectedFilters[key]}
                                    onChange={(e) => handleSelectChange(key, e.target.value)}
                                    onFocus={() => setOpenDropdown(key)}
                                    onBlur={() => setOpenDropdown(null)}
                                    className="w-full p-3 border rounded appearance-none bg-transparent text-sm focus:outline-none transition-all cursor-pointer"
                                    style={{
                                        borderColor: "var(--text-secondary)",
                                        color: "var(--text-primary)"
                                    }}
                                >
                                    <option className="bg-[var(--bg-primary)] text-[var(--text-primary)]" value="">
                                        All {key}
                                    </option>
                                    {navigationMenus[key].map((item) => (
                                        <option key={item} className="bg-[var(--bg-primary)] text-[var(--text-primary)]" value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>

                                <div
                                    className={`pointer-events-none absolute inset-y-0 right-3 flex items-center transition-transform duration-300 ${openDropdown === key ? "rotate-180" : "rotate-0"
                                        }`}
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={clearFilters}
                            onMouseEnter={() => setHoveredBtn(true)}
                            onMouseLeave={() => setHoveredBtn(false)}
                            className="w-full cursor-pointer py-3 border text-sm font-bold rounded transition-all duration-300"
                            style={{
                                borderColor: "var(--accent-primary)",
                                color: hoveredBtn ? "#ffffff" : "var(--accent-primary)",
                                backgroundColor: hoveredBtn ? "var(--accent-primary)" : "transparent"
                            }}
                        >
                            Clear Filter
                        </button>
                    </aside>

                    {/* Case Studies Grid */}
                    <div className="flex-grow">
                        <div
                            key={filterKey}
                            ref={containerRef as React.RefObject<HTMLDivElement>}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-start"
                        >
                            {filteredProjects.map((item, idx) => (
                                <div
                                    key={`${filterKey}-${idx}`}
                                    data-animate-item
                                    className="group cursor-pointer border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--accent-primary)] relative"
                                    style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-default)" }}
                                >
                                    {/* Image Area */}
                                    <div
                                        className="h-40 flex items-center justify-center bg-[#f0f4f8] border-b relative overflow-hidden"
                                        style={{ borderColor: "var(--border-default)" }}
                                    >
                                        <Image
                                            src={services}
                                            alt="Services"
                                            className="transform transition-transform duration-500 ease-out group-hover:scale-110 z-0"
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-5 pt-0 relative z-10">
                                        <div className="flex flex-wrap gap-1.5 -mt-3.5 mb-3">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[9px] uppercase tracking-tighter font-bold px-2 py-0.5 rounded text-white shadow-sm"
                                                    style={{ backgroundColor: "var(--accent-primary)" }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3
                                            className="text-sm font-bold leading-tight group-hover:text-[var(--accent-primary)] transition-colors duration-300"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20 w-full font-semibold">
                                <p style={{ color: "var(--text-secondary)" }}>No Results. Please, clear filter.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default CaseStudies;