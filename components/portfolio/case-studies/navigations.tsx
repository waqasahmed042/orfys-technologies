"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { projectsData } from "@/lib/portfolioConstants";
import NotFound from "@/app/not-found";
import Header from "@/components/Header";

gsap.registerPlugin(ScrollToPlugin);

const Navigations = () => {
    const pathname = usePathname();
    const heroLeftRef = useRef<HTMLDivElement>(null);
    const heroRightRef = useRef<HTMLDivElement>(null);

    const currentSegment = pathname.split("/").filter(Boolean).pop() || "";
    const content = projectsData.find((item) => item.slug === currentSegment);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        gsap.set(heroLeftRef.current, { opacity: 0, x: -30 });
        gsap.set(heroRightRef.current, { opacity: 0, x: 30 });

        tl.to(heroLeftRef.current, { opacity: 1, x: 0, duration: 0.8 })
            .to(heroRightRef.current, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4");
    }, []);

    if (!content) return <NotFound />;

    const navItems = [
        "Overview", "Challenge", "Main Goals", "Project Overview",
        "Solution", "Technology Stack", "Core Team", "Results"
    ];

    const scrollToSection = (id: string) => {
        const target = id.toLowerCase().replace(/\s+/g, '-');
        gsap.to(window, { duration: 0.8, scrollTo: { y: `#${target}`, offsetY: 80 } });
    };

    return (
        <>
            <Header />

            <nav className="py-8">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-[14px] font-medium cursor-pointer underline underline-offset-8 transition-all duration-200 
                                text-[var(--text-secondary)] decoration-[var(--border-default)]
                                hover:text-[var(--accent-secondary)] hover:decoration-[var(--accent-secondary)]"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navigations;