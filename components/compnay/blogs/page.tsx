"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NoDataFound from '../NoDataFound';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { blogPosts, categoryNames } from '@/lib/companyConstant';
import Footer from '@/components/Footer';
import { trending } from './author';

const Blogs: React.FC = () => {
    const pageSize = 4;
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

    // Filter by category + title + description + tags
    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === "All" || post.category === selectedCategory;

            const search = searchTerm.toLowerCase();

            const matchesSearch =
                post.title.toLowerCase().includes(search) ||
                post.description.toLowerCase().includes(search) ||
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <>
            <section
                ref={containerRef}
                className="relative w-full flex items-start mt-16 mb-12 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="w-full max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Blog List - Scrollable */}
                    <main className="lg:col-span-8 space-y-6 order-2 lg:order-1">
                        {currentPosts.length > 0 ? (
                            currentPosts.map((post) => (
                                <Link href={`blogs/${post.slug}`} key={post.id}>
                                    <article
                                        key={post.id}
                                        data-animate-item
                                        className="flex flex-col md:flex-row gap-6 p-5 my-2 cursor-pointer rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-sm hover:shadow-md transition-all group"
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

                                            <h2 className="text-md md:text-lg lg:text-xl font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] cursor-pointer leading-tight mb-3">
                                                {post.title}
                                            </h2>

                                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-grow">
                                                {post.description}
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
                                                        onClick={() => {
                                                            setSearchTerm(tag);
                                                            setCurrentPage(1);
                                                        }}
                                                        className="text-xs text-[var(--accent-primary)] hover:underline cursor-pointer"
                                                    >
                                                        {tag} {idx < post.tags.length - 1 ? "," : ""}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
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
                                                <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Previous
                                        </button>
                                    </div>

                                    <div className="hidden md:flex md:items-center gap-2">
                                        {getPagination().map((page, idx) =>
                                            page === "..." ? (
                                                <span key={idx} className="inline-flex h-10 w-10 items-center justify-center text-sm font-medium text-gray-500">
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
                                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        )}
                    </main>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="lg:col-span-4 order-1 lg:order-2 lg:sticky self-start">
                        <div className="space-y-4">
                            {/* Search */}
                            <div className="relative mt-2">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                    <CiSearch className="h-5 w-5" />
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    placeholder="Search by title, description, or tags..."
                                    className="w-full pl-12 pr-4 py-4 border border-[var(--border-default)] rounded-xl 
                                     text-[var(--text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-0 transition-all"
                                />
                            </div>

                            {/* CTA Card */}
                            <div className="bg-[var(--accent-primary)] text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4">Looking for a Custom Fix?</h3>
                                    <p className="text-sm opacity-90 mb-6">
                                        Orfys Technologies — the company to call for smart solutions and easy-going consulting.
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
                                    flex justify-between items-center cursor-pointer
                                    transition-colors active:bg-slate-100"
                                >
                                    Categories
                                    <IoIosArrowDown
                                        className={`w-5 h-5 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCategoriesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <ul className="divide-y divide-[var(--border-default)]">
                                        {categories.map((cat, i) => (
                                            <li
                                                key={i}
                                                onClick={() => handleCategoryClick(cat.name)}
                                                className={`p-4 flex justify-between text-sm cursor-pointer transition-all group ${selectedCategory === cat.name
                                                    ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-semibold"
                                                    : "text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)]"
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



                            <div className="border border-[var(--border-default)] bg-[var(--bg-primary)] rounded-2xl p-6 shadow-sm">
                                <h4 className="text-sm font-extrabold uppercase tracking-widest mb-5 text-[var(--text-primary)]">
                                    Trending Topics
                                </h4>
                                <ul className="space-y-3">
                                    {trending.map((item, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={`/blogs/${item.slug}`}
                                                className="text-sm block transition-colors group"
                                                style={{ color: "var(--text-primary)" }}
                                            >
                                                <span className="group-hover:text-[var(--accent-primary)] transition-colors">
                                                    {item.label}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
};

export default Blogs;