"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/hooks/userScrollToTop";
import { HeroProps } from "@/utilities/types";

const Hero: React.FC<HeroProps> = ({
    title,
    description,
    buttonText,
    image,
    imageAlt,
}) => {
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const left = leftContentRef.current;
        const right = rightContentRef.current;

        if (!left) return;

        // Initial state
        gsap.set(left, { opacity: 0, x: -30 });
        if (right) gsap.set(right, { opacity: 0, x: 30, scale: 0.95 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(left, {
            opacity: 1,
            x: 0,
            duration: 0.9
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

    return (
        <>
            <section
                className="relative w-full flex items-center mt-28 mb-12 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div ref={leftContentRef} className="space-y-4">
                            <h1
                                className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-white flex flex-row items-center gap-2"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {title}
                            </h1>

                            <p
                                className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed max-w-2xl"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact-us"
                                    className="px-8 py-4 bg-[var(--accent-primary)] text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-[var(--accent-primary)]/20"
                                >
                                    {buttonText}
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div
                            ref={rightContentRef}
                            className="relative w-full hidden lg:flex items-center justify-center"
                        >
                            <Image
                                src={image}
                                alt={imageAlt}
                                priority
                                className="w-full h-auto object-contain"
                                width={600}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <ScrollToTop />
        </>
    );
};

export default Hero;