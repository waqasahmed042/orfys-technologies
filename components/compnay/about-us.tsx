"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import about_us from "@/public/company/about-us.svg"
import CTA from "../CTA";
import Testimonials from "../Testimonials";
import TrustedCompanies from "../TrustedCompanies";
import WhyOrfys from "../WhyOrfys";

const AboutUS: React.FC = () => {
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
                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div
                            ref={leftContentRef}
                            className="space-y-4"
                        >
                            <h1
                                className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-white flex flex-row items-center gap-2"
                                style={{ color: "var(--text-primary)" }}
                            >
                                More Than Code — We Build Partnerships
                            </h1>

                            <p
                                className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed max-w-2xl"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                At Orfys Technologies, we’re not just developers — we’re partners in your growth.
                                We collaborate closely with clients to build smart, scalable software solutions
                                that drive business success. By understanding your goals and applying our tech
                                expertise, we turn complex ideas into clean, functional products.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div
                            ref={rightContentRef}
                            className="relative w-full hidden lg:flex items-center justify-center"
                        >
                            <Image
                                src={about_us}
                                alt="About US"
                                priority
                                className="w-full h-auto object-contain"
                                width={600}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TrustedCompanies />
            <Testimonials />
            <WhyOrfys />
            <CTA />
        </>
    )
};

export default AboutUS
