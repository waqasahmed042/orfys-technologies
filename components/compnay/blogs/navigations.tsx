"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navigations = () => {
    const heroLeftRef = useRef<HTMLDivElement>(null);
    const heroRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        gsap.set(heroLeftRef.current, { opacity: 0, x: -30 });
        gsap.set(heroRightRef.current, { opacity: 0, x: 30 });

        tl.to(heroLeftRef.current, { opacity: 1, x: 0, duration: 0.8 })
            .to(heroRightRef.current, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4");
    }, []);

    const navItems = ["Introduction", "Key Takeaways", "Main Content", "Conclusion", "Related Articles"];

    const scrollToSection = (id: string) => {
        const target = id.toLowerCase().replace(/\s+/g, '-');
        gsap.to(window, { duration: 0.8, scrollTo: { y: `#${target}`, offsetY: 80 } });
    };

    return (
        <>
            <nav className="py-8">
                <div className="max-w-[1300px] mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6">
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