"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { BlogsHeroProps } from "@/utilities/types";

const Hero: React.FC<BlogsHeroProps> = ({
    title,
    description,
    tag_line,
    published,
    categories,
    image,
    imageAlt,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const content = contentRef.current;
        const imageEl = imageRef.current;

        if (!content) return;

        gsap.set(content, { opacity: 0, x: -30 });
        if (imageEl) gsap.set(imageEl, { opacity: 0, x: 30, scale: 0.95 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(content, {
            opacity: 1,
            x: 0,
            duration: 0.9,
        }).to(
            imageEl,
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
        <section
            className="pt-32 pb-20 overflow-hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div ref={contentRef}>
                        <div className="flex items-center gap-3 mb-6">
                            <span
                                className="px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider"
                                style={{
                                    backgroundColor: "var(--tags-primary)",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {tag_line}
                            </span>

                            <span
                                className="text-sm italic"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Published: {published}
                            </span>
                        </div>

                        <h1
                            className="text-xl md:text-2xl lg:text-5xl font-bold leading-[1.1] mb-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            {title}
                        </h1>

                        <p
                            className="text-sm md:text-md lg:text-lg leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {categories.map((cat) => (
                                <span
                                    key={cat}
                                    className="text-xs font-semibold px-3 py-1 rounded-md"
                                    style={{
                                        backgroundColor: "var(--tags-primary)",
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    #{cat}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div ref={imageRef} className="relative hidden lg:flex justify-center">
                        <Image
                            src={image}
                            alt={imageAlt}
                            priority
                            className="w-full h-auto object-contain"
                            width={600}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;