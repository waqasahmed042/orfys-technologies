"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navigations = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState("Description");

    const navItems = [
        "Description",
        "Main functions",
        "Main Features",
        "Screenshots",
        "Customization"
    ];

    useEffect(() => {
        const el = navRef.current;
        if (!el) return;

        gsap.set(el, { opacity: 0, y: -20 });

        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    const scrollToSection = (item: string) => {
        const target = document.getElementById(
            item.toLowerCase().replace(/\s+/g, "-")
        );

        if (!target) return;

        setActive(item);

        gsap.to(window, {
            duration: 0.8,
            scrollTo: {
                y: target,
                offsetY: 100,
            },
            ease: "power3.out",
        });
    };

    return (
        <div
            ref={navRef}
            className="sticky top-20 z-40 backdrop-blur-md border-b"
            style={{
                backgroundColor: "color-mix(in srgb, var(--bg-primary) 85%, transparent)",
                borderColor: "var(--border-default)",
            }}
        >
            <div className="max-w-[1300px] mx-auto px-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
                <div className="flex items-center space-x-10 h-14 whitespace-nowrap">
                    {navItems.map((item) => {
                        const isActive = active === item;

                        return (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-sm h-full flex items-center cursor-pointer transition-all duration-200"
                                style={{
                                    color: isActive
                                        ? "var(--accent-primary)"
                                        : "var(--text-secondary)",
                                    borderBottom: isActive
                                        ? "2px solid var(--accent-primary)"
                                        : "2px solid transparent",
                                    fontWeight: isActive ? 600 : 500,
                                }}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navigations;