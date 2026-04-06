"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import Image from "next/image";
import about_us from "@/public/company/about-us/about.png";
import our_mission from "@/public/company/about-us/our-mission.webp";
import our_vision from "@/public/company/about-us/our-vision.png";
import CTA from "../CTA";
import Testimonials from "../Testimonials";
import TrustedCompanies from "../TrustedCompanies";
import WhyOrfys from "../WhyOrfys";
import Link from 'next/link';

interface CounterProps {
    target: number;
    duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) observer.observe(countRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (startTimestamp === null) startTimestamp = timestamp;

            // progress calculation
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, target, duration]);

    return <span ref={countRef}>{count}</span>;
};

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

    const stats = [
        { value: 25, label: "Years of Experience", suffix: "+" },
        { value: 250, label: "Full Time Engineers", suffix: "+" },
        { value: 400, label: "Customers Worldwide", suffix: "+" },
        { value: 900, label: "Successful Projects", suffix: "+" },
    ];

    return (
        <>
            {/* About US */}
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

            {/* Our Mission */}
            <section
                className="relative w-full flex items-center mt-28 mb-12 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Image */}
                        <div
                            ref={leftContentRef}
                            className="relative w-full hidden lg:flex items-center justify-center"
                        >
                            <Image
                                src={our_mission}
                                alt="About US"
                                priority
                                className="w-full h-auto object-contain"
                                width={600}
                                height={500}
                            />
                        </div>

                        {/* Right Content */}
                        <div
                            ref={rightContentRef}
                            className="space-y-4"
                        >
                            <h1
                                className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-white flex flex-row items-center gap-2"
                                style={{ color: "var(--text-primary)" }}
                            >
                                Our Mission
                            </h1>

                            <p
                                className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed max-w-2xl"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                At Orfys Technologies, our mission is focused on your growth and ambitions. We design technology
                                solutions that align with your vision, tackling your unique challenges and delivering real,
                                measurable results. As one of the rapidly growing tech companies in Pakistan, we pride ourselves
                                on being your partner, offering innovation that adapts to your needs and evolves alongside your
                                business. Together, we take every opportunity to create impactful, lasting change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision */}
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
                                Our Vision
                            </h1>

                            <p
                                className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed max-w-2xl"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                We envision a future where your vision leads to innovation. At Orfys Technologies,
                                we’re committed to empowering you with technology that transforms ideas into
                                results, turning challenges into growth opportunities, and unlocking your full potential.
                                <br /><br />
                                We envision a future where your vision leads to innovation. AtOrfys Technologies,
                                we’re committed to empowering you with technology that transforms ideas into
                                results, turning challenges into growth opportunities, and unlocking your full potential.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div
                            ref={rightContentRef}
                            className="relative w-full hidden lg:flex items-center justify-center"
                        >
                            <Image
                                src={our_vision}
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

            <section
                className="relative w-full py-28 px-6 md:px-12 lg:px-24 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <h2
                        className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Orfys Technologies Overview
                    </h2>

                    {/* Description Text */}
                    <p
                        className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed mb-20"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Orfys Technologies is a software development company in Warsaw, Poland. The company is focused on custom software development outsourcing across multiple
                        <Link href="/technologies">
                            <span
                                className="cursor-pointer underline ml-1"
                                style={{ color: "var(--accent-secondary)" }}
                            >
                                technologies
                            </span>
                        </Link>
                        {" "} including .NET, Java, PHP, JavaScript, and C++. With more than 25+ years in IT and 900 successful projects for dozens of customers globally and over 250
                        highly experienced engineers on board, we are rated as one of the top software outsourcing companies in Eastern Europe.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                {/* Circle Container */}
                                <div
                                    className="w-40 h-40 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                    style={{ borderColor: "var(--accent-primary)" }}
                                >
                                    <div
                                        className="text-4xl md:text-5xl font-bold flex items-center"
                                        style={{ color: "var(--accent-primary)" }}
                                    >
                                        <Counter target={stat.value} />
                                        <span>{stat.suffix}</span>
                                    </div>
                                </div>

                                {/* Label */}
                                <p
                                    className="mt-6 text-lg font-medium text-center"
                                    style={{ color: "var(--accent-primary)" }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
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
