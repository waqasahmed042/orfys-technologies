"use client";
import React from 'react';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import { developmentProcess } from '@/lib/constants';

const Process: React.FC = () => {
    const containerRef = useGSAPStagger({
        stagger: 0.12,
        duration: 0.7,
        animationType: "scale",
        delay: 0.1,
    });

    return (
        <section
            id="development-process"
            className="my-24"
            ref={containerRef}
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 tracking-tight"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Our Development Process
                    </h2>
                    <p
                        className="text-sm md:text-md lg:text-lg max-w-2xl mx-auto leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Empowering modern enterprises with bespoke software and intelligent
                        automation built to scale seamlessly with your ambitions.
                    </p>
                </div>

                <div className="relative">
                    {/* S-Line SVG */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 1200 600"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.1" />
                                    <stop offset="50%" stopColor="var(--accent-primary)" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 200 56 H 1000 C 1150 56, 1150 256, 1000 256 H 200 C 50 256, 50 456, 200 456 H 1000"
                                stroke="url(#line-glow)"
                                strokeWidth="3"
                                strokeDasharray="12 12"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Steps Grid */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 lg:gap-y-48 gap-x-12">
                        {developmentProcess.map((process, idx) => {
                            // Steps 2, 4, 6 (Indices 1, 3, 5) get the purple glow
                            const isGlowing = idx % 2 !== 0;

                            return (
                                <div
                                    key={idx}
                                    data-animate-item
                                    className="flex flex-col items-center text-center"
                                >

                                    {/* Icon Circle */}
                                    <div
                                        className={`group relative flex items-center justify-center w-20 h-20 rounded-full border 
                                            transition-all duration-500 ease-out ${isGlowing
                                                ? "scale-110 hover:scale-115 z-20"
                                                : "z-10 hover:scale-110"}`
                                        }
                                        style={{
                                            backgroundColor: "var(--bg-primary)",
                                            borderColor: isGlowing ? "var(--accent-primary)" : "#e5e7eb",
                                            boxShadow: isGlowing
                                                ? "0 0 30px rgba(147, 51, 234, 0.4)"
                                                : "none",
                                        }}
                                    >
                                        <div
                                            className={`transition-all duration-300 group-hover:scale-110
                                                ${isGlowing
                                                    ? "text-[var(--accent-primary)] group-hover:text-[var(--text-secondary)]"
                                                    : "text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]"
                                                }`}
                                        >
                                            <process.icon size={40} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-10 max-w-[260px]">
                                        <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                                            {process.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                            {process.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;