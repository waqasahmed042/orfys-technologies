import React from 'react';
import { AuthorProps } from '@/utilities/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

export const trending = [
    { label: "AI Code Generation", slug: "why-ai-generated-code-doesnt-work-and-how-to-fix-it" },
    { label: "AI Tools for developers", slug: "ai-tools-for-developers-in-2026" },
    { label: "React Performance Optimization", slug: "react-performance-optimization-techniques" },
    { label: "Next.js App Router", slug: "nextjs-app-router-deep-dive" },
    { label: "TypeScript Best Practices", slug: "typescript-best-practices-for-large-projects" },
    { label: "Node.js Architecture", slug: "clean-architecture-in-nodejs-backend" },
];

const Author: React.FC<AuthorProps> = ({
    img,
    name,
    role,
    bio
}) => {
    return (
        <aside className="lg:col-span-3">
            <div className="sticky top-40 space-y-10">
                {/* Author */}
                <div className="text-center lg:text-left">
                    <Image
                        src={img}
                        alt={name}
                        className="w-24 h-24 rounded-2xl mx-auto lg:mx-0 object-cover mb-4 border"
                        style={{ borderColor: "#d3a4ff33" }}
                    />

                    <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--text-primary)" }}
                    >
                        {name}
                    </h3>

                    <p
                        className="text-sm mb-2"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        {role}
                    </p>

                    <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        {bio}
                    </p>

                    <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 text-[var(--text-secondary)]">
                        <a href="#" className="group">
                            <FaLinkedin
                                size={18}
                                className="transition-colors group-hover:text-[var(--accent-primary)]"
                            />
                        </a>

                        <a href="#" className="group">
                            <FaGithub
                                size={18}
                                className="transition-colors group-hover:text-[var(--accent-primary)]"
                            />
                        </a>

                        <a href="#" className="group">
                            <FaStackOverflow
                                size={18}
                                className="transition-colors group-hover:text-[var(--accent-primary)]"
                            />
                        </a>
                    </div>
                </div>

                {/* Trending */}
                <div>
                    <h4
                        className="text-sm font-extrabold uppercase tracking-widest mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Trending Topics
                    </h4>

                    <ul className="space-y-2">
                        {trending.map((item) => (
                            <li key={item.slug}>
                                <Link
                                    href={`${item.slug}`}
                                    className="text-sm flex items-center justify-between transition-colors group"
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
    );
};

export default Author;