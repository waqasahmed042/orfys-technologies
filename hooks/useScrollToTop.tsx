"use client";

import { useEffect, useState } from "react";
import { LuMouse, LuChevronsUp } from "react-icons/lu";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down by 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        };
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                type="button"
                onClick={scrollToTop}
                className={`
                    flex flex-col items-center gap-1 transition-all duration-300 transform cursor-pointer
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
                    hover:scale-110 active:scale-95`}
                style={{
                    backgroundColor: "transparent",
                    color: "var(--accent-primary)"
                }}
            >
                <LuChevronsUp size={24} strokeWidth={1} className="font-light" />
                <LuMouse size={32} strokeWidth={1} className="font-light" />
            </button>
        </div>
    );
};