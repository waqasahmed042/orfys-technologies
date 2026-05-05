"use client";
import React from "react";
import { services } from "@/lib/constants";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const Services: React.FC = () => {
    const containerRef = useGSAPStagger({
        stagger: 0.15,
        duration: 0.8,
        animationType: "fadeIn",
        delay: 0.2,
    });

    return (
        <section
            id="services"
            ref={containerRef as React.RefObject<HTMLElement>}
            className="py-12 relative overflow-hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Our Services
                    </h2>
                    <p
                        className="text-sm md:text-md lg:text-lg max-w-2xl mx-auto"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Comprehensive solutions to automate and optimize your business
                        processes
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.iconPath;

                        return (
                            <div
                                key={index}
                                data-animate-item
                                className="relative rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl border border-white/5 flex flex-col items-center text-center"
                                style={{ backgroundColor: "var(--bg-primary)" }}
                            >
                                {/* Icon Container with Blob Background */}
                                <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                                    <div
                                        className="absolute inset-0 bg-no-repeat bg-contain bg-center opacity-80"
                                        style={{
                                            backgroundImage: `url(${typeof service.bgImg === "string"
                                                ? service.bgImg
                                                : service.bgImg.src
                                                })`,
                                        }}
                                    />
                                    <Icon className="relative z-10 text-white text-4xl" />
                                </div>

                                <h3
                                    className="text-lg md:text-xl lg:text-2xl font-bold mb-3"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="text-sm md:text-md lg:text-md leading-relaxed mb-12"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {service.description}
                                </p>

                                {/* Learn more section */}
                                <div className="absolute bottom-6 right-8">
                                    <Link
                                        href={service.route}
                                        className="group/link flex items-center gap-1 text-sm font-bold tracking-wider cursor-pointer"
                                        style={{ color: "var(--accent-primary)" }}
                                    >
                                        <span className="relative">
                                            Learn More
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--accent-primary)] transition-all duration-300 group-hover/link:w-full" />
                                        </span>

                                        <FiArrowUpRight
                                            className="text-md transition-all duration-300 
                                                group-hover/link:-translate-x-0.5
                                                group-hover/link:translate-y-0.5 
                                                group-hover/link:rotate-45"
                                        />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;