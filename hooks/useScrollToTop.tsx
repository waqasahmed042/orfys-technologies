"use client";
import { ScrollToTopProps } from "@/utilities/types";
import { useEffect, useState } from "react";
import { LuMouse, LuChevronsUp } from "react-icons/lu";

export default function ScrollToTop({ chatOpen = false }: ScrollToTopProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollY =
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            setIsVisible(scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const scrollElement = document.scrollingElement || document.documentElement;
        scrollElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Dynamic positioning based on chat state
    const bottomPosition = chatOpen ? "bottom-[380px]" : "bottom-22";

    return (
        <div className={`fixed ${bottomPosition} right-6 z-40 transition-all duration-300`}>
            <button
                type="button"
                onClick={scrollToTop}
                className={`
                    flex flex-col items-center gap-1
                    transition-all duration-300 transform
                    cursor-pointer
                    ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                    }
                    hover:scale-110 active:scale-95
                `}
                style={{
                    backgroundColor: "transparent",
                    color: "var(--accent-primary)",
                }}
            >
                <LuChevronsUp size={24} strokeWidth={1} />
                <LuMouse size={32} strokeWidth={1} />
            </button>
        </div>
    );
};