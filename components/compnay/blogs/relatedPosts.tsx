import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/companyConstant';
import { BsArrowRight } from 'react-icons/bs';
import { RelatedPostsProps } from '@/utilities/types';

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentSlug, relatedPosts }) => {
    const related = blogPosts
        .filter(post => relatedPosts.includes(post.slug) && post.slug !== currentSlug)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <section id="related-articles">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mt-12 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((post) => (
                    <Link
                        key={post.slug}
                        href={`${post.slug}`}
                        className="group bg-[var(--bg-secondary)] rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--accent-primary)]/50 transition-all"
                    >
                        <div className="aspect-video relative">
                            <img
                                src={post.image}
                                alt={post.imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2 mb-3">
                                {post.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                                {post.description}
                            </p>
                            <div className="flex items-center gap-2 mt-6 text-[var(--accent-primary)] text-sm font-medium">
                                Read more
                                <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedPosts;