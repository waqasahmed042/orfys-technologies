"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PathSegments from './pathSegments';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { contentMap } from '@/lib/servicesConstants';

const Hero = () => {
    const pathname = usePathname();
    const heroRef = useGSAPAnimation({ animationType: "fadeIn", duration: 1 });

    // Identify the current service from the URL (last segment)
    const currentSegment = pathname.split("/").filter(Boolean).pop() || "default";
    const content = contentMap[currentSegment] || contentMap["default"];

    return (
        <section
            ref={heroRef as React.RefObject<HTMLElement>}
            className="relative min-h-[550px] flex items-center w-full bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url('/services/hero-img.webp')"
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 py-20">
                {/* Breadcrumbs */}
                <PathSegments />

                <div className="max-w-3xl space-y-4">
                    <h1 className="text-3xl md:text-6xl font-bold leading-tight text-white flex flex-row items-center gap-2">
                        {content.title} <br />
                        <span className="text-[var(--accent-primary)]">{content.highlight}</span>
                    </h1>
                    <p className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed max-w-2xl">
                        {content.desc}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-[var(--accent-primary)] text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-[var(--accent-primary)]/20"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;