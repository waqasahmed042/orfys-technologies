"use client";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import screenshot_1 from "@/public/services/blob1.png";
import screenshot_2 from "@/public/services/blob2.png";
import screenshot_3 from "@/public/services/blob3.png";
import screenshot_4 from "@/public/services/blob4.png";
import screenshot_5 from "@/public/services/blob5.png";
import screenshot_6 from "@/public/services/blob6.png";
import Image from "next/image";

const screenshots = [
    screenshot_1,
    screenshot_2,
    screenshot_3,
    screenshot_4,
    screenshot_5,
    screenshot_6
];

const ScreenShots: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
    };

    return (
        <section
            id="screenshots"
            className="py-10 md:py-20 bg-[var(--bg-primary)]"
        >
            <div className="max-w-[1300px] mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-semibold text-[var(--accent-primary)] tracking-tight mb-12 md:mb-16">
                    Screenshots
                </h2>

                {/* Screenshot Area */}
                <div className="flex flex-col items-center">
                    <Image
                        src={screenshots[activeIndex]}
                        alt={`Screenshot ${activeIndex + 1}`}
                        width={200}
                        height={200}
                    />

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        {/* Left Arrow */}
                        <button
                            onClick={handlePrev}
                            className="text-[var(--accent-primary)] hover:opacity-70 transition cursor-pointer"
                            aria-label="Previous Screenshot"
                        >
                            <BiChevronLeft size={20} strokeWidth={1.8} />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-3">
                            {screenshots.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 ${activeIndex === index
                                        ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] scale-110"
                                        : "bg-transparent border-[var(--accent-primary)] opacity-80 hover:opacity-100"
                                        }`}
                                    aria-label={`Go to screenshot ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            className="text-[var(--accent-primary)] hover:opacity-70 transition cursor-pointer"
                            aria-label="Next Screenshot"
                        >
                            <BiChevronRight size={20} strokeWidth={1.8} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScreenShots;