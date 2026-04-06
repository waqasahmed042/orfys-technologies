import React, { useState } from 'react';

const pageSize = 4;
const blogPosts = [
    {
        id: 1,
        date: "April 2, 2024",
        title: "Why AI-Generated Code Doesn't Work — and How to Fix It",
        excerpt: "AI-generated code looks right but often fails in real use. This article explores why it happens and how to fix it.",
        image: "https://placehold.co/600x400/49F3D3/ffffff?text=AI+Code",
        tags: ["C#", ".Net", "Outlook Add-in", "Dot Net"]
    },
    {
        id: 2,
        date: "March 30, 2026",
        title: "A Step-By-Step Guide to Outlook Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing Outlook add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/2299DD/ffffff?text=Outlook+Add-in",
        tags: ["C#", ".Net", "Outlook Add-in", "Dot Net"]
    },
    {
        id: 3,
        date: "January 17, 2026",
        title: "A Step-By-Step Guide to Excel Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing Excel add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/31BE7D/ffffff?text=Excel+Add-in",
        tags: ["C#", ".Net", "Excel Add-in", "Dot Net"]
    },
    {
        id: 4,
        date: "December 01, 2025",
        title: "A Step-By-Step Guide to Word Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing Word add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/3EA0E6/ffffff?text=Word+Add-in",
        tags: ["C#", ".Net", "Word Add-in", "Dot Net"]
    },
    {
        id: 5,
        date: "November 26, 2025",
        title: "A Step-By-Step Guide to PowerPoint Add-in Development",
        excerpt: "The article provides a comprehensive guide to developing PowerPoint add-ins, covering their definition, types, benefits over off-the-shelf solutions, and full cycle development process.",
        image: "https://placehold.co/600x400/F78B68/ffffff?text=PowerPoint+Add-in",
        tags: ["C#", ".Net", "PowerPoint Add-in", "Dot Net"]
    }
];

const categories = [
    { name: "General", count: 8 },
    { name: "AI/ML/Big Data", count: 2 },
    { name: "Project Management", count: 1 },
    { name: "Mobile App Development", count: 2 }
];

const Blogs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / pageSize);

    const currentPosts = blogPosts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    // Generate page numbers with ellipsis
    const getPagination = () => {
        const pages: (number | string)[] = [];
        const delta = 2;

        let left = Math.max(2, currentPage - delta);
        let right = Math.min(totalPages - 1, currentPage + delta);

        const hasLeftEllipsis = left > 2;
        const hasRightEllipsis = right < totalPages - 1;

        pages.push(1);

        if (hasLeftEllipsis) pages.push('...');

        for (let i = left; i <= right; i++) pages.push(i);

        if (hasRightEllipsis) pages.push('...');

        if (totalPages > 1) pages.push(totalPages);
        return pages;
    };

    return (
        <>
            <section
                className="relative w-full flex items-center mt-28 mb-12 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Blog List */}
                    <main className="lg:col-span-8 space-y-6">
                        {currentPosts.map((post) => (
                            <article key={post.id} className="flex flex-col md:flex-row gap-6 p-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-sm hover:shadow-md transition-all group">
                                <div className="w-full md:w-1/3 h-52 md:h-auto overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-2/3 flex flex-col">
                                    <span className="text-xs font-semibold text-[var(--text-secondary)] opacity-70 uppercase tracking-widest mb-2">{post.date}</span>
                                    <h2 className="text-xl md:text-2xl font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] cursor-pointer leading-tight mb-3">{post.title}</h2>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                                    <div className="flex flex-wrap gap-2 items-center pt-4 border-t border-[var(--border-default)]">
                                        <span className="text-[10px] font-bold text-[var(--text-secondary)] opacity-50 uppercase">Tags:</span>
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs text-[var(--accent-primary)] hover:underline cursor-pointer">
                                                {tag}{idx < post.tags.length - 1 ? ',' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}

                        {/* Pagination */}
                        <div className="py-8">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <nav className="flex pt-4 md:pt-5" aria-label="Pagination">
                                    <div className="flex flex-1 items-center">
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`flex items-center gap-x-1.5 text-sm font-semibold 
                                                border border-transparent rounded-lg px-3 py-2 transition-colors
                                                ${currentPage === 1
                                                    ? 'cursor-not-allowed opacity-50'
                                                    : 'cursor-pointer hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]'
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
                                            page === '...' ? (
                                                <span key={idx} className="inline-flex h-10 w-10 items-center justify-center text-sm font-medium text-gray-500">
                                                    ...
                                                </span>
                                            ) : (
                                                <button
                                                    key={idx}
                                                    onClick={() => handlePageChange(Number(page))}
                                                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm cursor-pointer font-medium transition-all 
                                                        ${currentPage === page
                                                            ? "bg-[var(--accent-primary)] text-white"
                                                            : "border border-gray-300 text-gray-500 hover:bg-gray-50"}`}
                                                >
                                                    {page}
                                                </button>
                                            )
                                        )}
                                    </div>

                                    <div className="flex flex-1 items-center justify-end">
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className={`flex items-center gap-x-1.5 text-sm font-semibold 
                                                border border-transparent rounded-lg px-3 py-2 transition-colors
                                                ${currentPage === totalPages
                                                    ? 'cursor-not-allowed opacity-50'
                                                    : 'cursor-pointer hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]'
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
                        </div>
                    </main>

                    {/* Right Column: Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search keyword..."
                                className="w-full p-4 pr-12 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/50 transition-all"
                            />
                            <div className="absolute right-4 top-4 text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* "Custom Fix" Card - This stays blue in both modes for brand consistency */}
                        <div className="bg-[var(--accent-primary)] text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">Looking for a Custom Fix?</h3>
                                <p className="text-sm opacity-90 mb-6">
                                    SCAND’s the company to call for smart solutions and easy-going consulting.
                                </p>
                                <p className="text-sm font-semibold mb-8">
                                    Shoot us a message and let's get started!
                                </p>
                                <button className="w-full bg-white text-[var(--accent-primary)] cursor-pointer font-semibold py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                                    Contact us
                                </button>
                            </div>

                            {/* Mountain Illustration Placeholder */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Categories */}
                        <div className="border border-[var(--border-default)] bg-[var(--bg-primary)] rounded-2xl overflow-hidden shadow-sm">
                            <div className="p-5 border-b border-[var(--border-default)] font-bold text-[var(--text-primary)] flex justify-between items-center">
                                Categories
                                <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                            <ul className="divide-y divide-[var(--border-default)]">
                                {categories.map((cat, i) => (
                                    <li key={i} className="p-4 flex justify-between text-sm text-[var(--text-secondary)] hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group">
                                        <span className="group-hover:text-[#0284c7] transition-colors">{cat.name}</span>
                                        <span className="opacity-50">({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
};

export default Blogs;