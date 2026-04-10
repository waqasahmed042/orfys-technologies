import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import NoDataFound from './NoDataFound';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const pageSize = 4;

const blogPosts = [
    {
        id: 1,
        date: "April 2, 2024",
        title: "Why AI-Generated Code Doesn't Work — and How to Fix It",
        excerpt: "AI-generated code looks right but often fails in real use. This article explores why it happens and how to fix it.",
        image: "https://placehold.co/600x400/49F3D3/ffffff?text=AI+Code",
        tags: ["C#", "Node", "Outlook Add-in", "Python"],
        category: "AI/ML/Big Data"
    },
    {
        id: 2,
        date: "March 30, 2026",
        title: "A Step-By-Step Guide to Outlook Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing Outlook add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/2299DD/ffffff?text=Outlook+Add-in",
        tags: ["C#", ".Net", "Outlook Add-in", "Dot Net"],
        category: "General"
    },
    {
        id: 3,
        date: "January 17, 2026",
        title: "A Step-By-Step Guide to Excel Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing Excel add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/31BE7D/ffffff?text=Excel+Add-in",
        tags: ["React", "Express", "Excel Add-in", "Django"],
        category: "General"
    },
    {
        id: 4,
        date: "December 01, 2025",
        title: "A Step-By-Step Guide to Word Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing Word add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/3EA0E6/ffffff?text=Word+Add-in",
        tags: ["C#", ".Net", "Word Add-in", "Dot Net"],
        category: "General"
    },
    {
        id: 5,
        date: "November 26, 2025",
        title: "A Step-By-Step Guide to PowerPoint Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing PowerPoint add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/F78B68/ffffff?text=PowerPoint+Add-in",
        tags: ["C#", ".Net", "PowerPoint Add-in", "Dot Net"],
        category: "Project Management"
    }
];

const categoryNames = [
    "All",
    "General",
    "AI/ML/Big Data",
    "Project Management",
    "Mobile App Development"
];

const Blogs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const containerRef = useGSAPStagger({
        stagger: 0.15,
        duration: 0.8,
        animationType: "fadeIn",
        delay: 0.2,
    });

    // Dynamic categories count based on posts
    const categories = useMemo(() => {
        return categoryNames.map((name) => ({
            name,
            count:
                name === "All"
                    ? blogPosts.length
                    : blogPosts.filter((post) => post.category === name).length
        }));
    }, []);

    // Filter by category + title + excerpt + tags
    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === "All" || post.category === selectedCategory;

            const search = searchTerm.toLowerCase();

            const matchesSearch =
                post.title.toLowerCase().includes(search) ||
                post.excerpt.toLowerCase().includes(search) ||
                post.category.toLowerCase().includes(search) ||
                post.tags.some((tag) => tag.toLowerCase().includes(search));

            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, selectedCategory]);

    const totalPages = Math.ceil(filteredPosts.length / pageSize);

    const currentPosts = filteredPosts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const getPagination = () => {
        const pages: (number | string)[] = [];
        const delta = 2;

        if (totalPages <= 1) return pages;

        const left = Math.max(2, currentPage - delta);
        const right = Math.min(totalPages - 1, currentPage + delta);

        pages.push(1);

        if (left > 2) pages.push("...");

        for (let i = left; i <= right; i++) {
            pages.push(i);
        }

        if (right < totalPages - 1) pages.push("...");

        pages.push(totalPages);

        return pages;
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full flex items-center mt-16 mb-12 overflow-hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Blog List */}
                <main className="lg:col-span-8 space-y-6 order-2 lg:order-1">
                    {currentPosts.length > 0 ? (
                        currentPosts.map((post) => (
                            <article
                                key={post.id}
                                data-animate-item
                                className="flex flex-col md:flex-row gap-6 p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-full md:w-1/3 h-52 md:h-auto overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="w-full md:w-2/3 flex flex-col">
                                    <span className="text-xs font-semibold text-[var(--text-secondary)] opacity-70 uppercase tracking-widest mb-2">
                                        {post.date}
                                    </span>

                                    <h2 className="text-xl md:text-2xl font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] cursor-pointer leading-tight mb-3">
                                        {post.title}
                                    </h2>

                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="mb-4">
                                        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                                            {post.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 items-center pt-4 border-t border-[var(--border-default)]">
                                        <span className="text-[10px] font-bold text-[var(--text-secondary)] opacity-50 uppercase">
                                            Tags:
                                        </span>

                                        {post.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                data-animate-item
                                                onClick={() => {
                                                    setSearchTerm(tag);
                                                    setCurrentPage(1);
                                                }}
                                                className="text-xs text-[var(--accent-primary)] hover:underline cursor-pointer"
                                            >
                                                {tag}
                                                {idx < post.tags.length - 1 ? "," : ""}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <NoDataFound
                            category={selectedCategory}
                            clearCategory={() => setSelectedCategory("All")}
                        />
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="py-8">
                            <nav
                                className="flex items-center justify-between pt-4 md:pt-5"
                                aria-label="Pagination"
                            >
                                <div className="flex flex-1">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`flex items-center gap-x-1.5 text-sm font-semibold border border-transparent rounded-lg px-3 py-2 transition-colors ${currentPage === 1
                                            ? "cursor-not-allowed opacity-30"
                                            : "cursor-pointer hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]"
                                            }`}
                                    >
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M15 6L9 12L15 18"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Previous
                                    </button>
                                </div>

                                <div className="hidden md:flex md:items-center gap-2">
                                    {getPagination().map((page, idx) =>
                                        page === "..." ? (
                                            <span
                                                key={idx}
                                                data-animate-item
                                                className="inline-flex h-10 w-10 items-center justify-center text-sm font-medium text-gray-500"
                                            >
                                                ...
                                            </span>
                                        ) : (
                                            <button
                                                key={idx}
                                                onClick={() => handlePageChange(Number(page))}
                                                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm cursor-pointer font-medium transition-all ${currentPage === page
                                                    ? "bg-[var(--accent-primary)] text-white"
                                                    : "border border-gray-300 text-gray-500 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    )}
                                </div>

                                <div className="flex flex-1 justify-end">
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`flex items-center gap-x-1.5 text-sm font-semibold border border-transparent rounded-lg px-3 py-2 transition-colors ${currentPage === totalPages
                                            ? "cursor-not-allowed opacity-30"
                                            : "cursor-pointer hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]"
                                            }`}
                                    >
                                        Next
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M9 6L15 12L9 18"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    )}
                </main>

                {/* Right Column: Sidebar */}
                <aside className="lg:col-span-4 space-y-8 order-1 lg:order-2">
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            <CiSearch className="h-5 w-5" />
                        </div>

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search by title, excerpt, or tags..."
                            className="w-full pl-12 pr-4 py-4 border border-[var(--border-default)] rounded-xl 
                                 text-[var(--text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-0 transition-all"
                        />
                    </div>

                    {/* CTA Card */}
                    <div className="bg-[var(--accent-primary)] text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-4">Looking for a Custom Fix?</h3>
                            <p className="text-sm opacity-90 mb-6">
                                Orfys Technologies the company to call for smart solutions and easy-going consulting.
                            </p>
                            <Link href="/contact-us" className="inline-block w-full sm:w-auto">
                                <button className="w-full bg-white text-[var(--accent-primary)] cursor-pointer font-semibold py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg px-6">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="border border-[var(--border-default)] bg-[var(--bg-primary)] rounded-2xl overflow-hidden shadow-sm">
                        <div
                            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                            className="p-5 border-b border-[var(--border-default)] font-bold text-[var(--text-primary)] 
                                flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 
                                transition-colors active:bg-slate-100"
                        >
                            Categories
                            <IoIosArrowDown
                                className={`w-5 h-5 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`}
                            />
                        </div>

                        {/* Smooth Collapsible Content */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCategoriesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="divide-y divide-[var(--border-default)]">
                                {categories.map((cat, i) => (
                                    <li
                                        key={i}
                                        onClick={() => handleCategoryClick(cat.name)}
                                        className={`p-4 flex justify-between text-sm cursor-pointer transition-all group ${selectedCategory === cat.name
                                            ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-semibold"
                                            : "text-[var(--text-secondary)] hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                            }`}
                                    >
                                        <span className="group-hover:text-[var(--accent-primary)] transition-colors">
                                            {cat.name}
                                        </span>
                                        <span className="opacity-50">({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Blogs;