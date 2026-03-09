"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { value: 4, suffix: "+", label: "YEARS OF EXPERTISE" },
    { value: 250, suffix: "+", label: "SUCCESSFUL PROJECTS" },
    { value: 5, suffix: "+", label: "MICROSOFT CERTIFIED DEVS" },
    { value: 98, suffix: "%", label: "CLIENT RETENTION" },
];

const logos = [
    "CompanyOne", "CompanyTwo", "CompanyThree", "CompanyFour",
    "CompanyFive", "CompanySix", "CompanySeven", "CompanyEight"
];

const TrustedCompanies: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Counter Animation
            const counters = document.querySelectorAll(".stat-number");
            counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute("data-target") || "0");
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 85%",
                    },
                });
            });

            // 2. Infinite Logo Marquee (Reliable Loop)
            const marquee = marqueeRef.current;
            if (marquee) {
                // We use xPercent: -50 because we have doubled the logo list
                // This ensures it resets perfectly at the halfway point
                tweenRef.current = gsap.to(marquee, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 20,
                    ease: "none",
                }).totalProgress(0.5); // Start mid-way for immediate movement
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => tweenRef.current?.pause();
    const handleMouseLeave = () => tweenRef.current?.play();

    return (
        <section
            ref={sectionRef}
            className="mb-16 overflow-hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2
                        className="text-xl sm:text-4xl font-bold mb-6 tracking-tight"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Trusted Companies
                    </h2>
                    <p
                        className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        We’ve partnered with fast-growing startups and established enterprises
                        to deliver high-impact software solutions and measurable growth.
                    </p>
                </div>

                {/* Counter section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-2">
                            <div
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                                style={{ color: "var(--accent-primary)" }}
                            >
                                <span className="stat-number" data-target={stat.value}>0</span>
                                <span>{stat.suffix}</span>
                            </div>
                            <p
                                className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-center uppercase opacity-80"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Moving logos section */}
                <div className="relative w-full overflow-hidden pt-10">
                    <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />

                    <div
                        ref={marqueeRef}
                        className="flex whitespace-nowrap gap-16 md:gap-32 items-center w-max"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="text-xl md:text-3xl font-black tracking-tighter opacity-25 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 cursor-default uppercase italic"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;