"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ourProducts } from "@/lib/constants";
import case_studies from "@/public/portfolio/case-studies.svg";
import NotFound from "@/app/not-found";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/hooks/userScrollToTop";

const PortfolioHero = () => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSlug = pathname.split("/").filter(Boolean).pop() || "";

    // Helper function to generate slug from title (consistent with your earlier approach)
    const generateSlug = (title: string): string => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
    };

    // Find the correct case across all categories
    let content = null;

    for (const category of Object.values(ourProducts)) {
        const foundCase = category.cases.find((caseItem) =>
            generateSlug(caseItem.title) === currentSlug
        );
        if (foundCase) {
            content = {
                ...foundCase,
                categoryTitle: category.title,
            };
            break;
        };
    };

    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const left = leftContentRef.current;
        const right = rightContentRef.current;

        if (!left) return;

        gsap.set(left, { opacity: 0, x: -30 });
        if (right) gsap.set(right, { opacity: 0, x: 30, scale: 0.95 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(left, {
            opacity: 1,
            x: 0,
            duration: 0.9,
        }).to(
            right,
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
            },
            "-=0.6"
        );

        return () => {
            tl.kill();
        };
    }, []);

    if (!content) {
        return (
            <>
                <NotFound />
            </>
        );
    };

    return (
        <>
            <CustomCursor />
            <Header />

            <section
                id="case-studies"
                className="relative w-full flex items-center mt-32 mb-12 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* LEFT CONTENT */}
                        <div ref={leftContentRef} className="space-y-4">
                            <h1
                                className="text-2xl md:text-5xl font-bold leading-tight flex flex-col gap-2"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {content.title}
                            </h1>

                            <p
                                className="text-sm md:text-md lg:text-lg leading-relaxed max-w-2xl"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {content.desc}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#"
                                    className="px-8 py-4 bg-[var(--accent-primary)] text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-[var(--accent-primary)]/20"
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div
                            ref={rightContentRef}
                            className="relative w-full hidden lg:flex items-center justify-center"
                        >
                            <Image
                                src={case_studies}
                                alt="case studies"
                                width={600}
                                height={400}
                                priority
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <ScrollToTop />
        </>
    );
};

export default PortfolioHero;