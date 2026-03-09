"use client";
import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { TestimonialData } from '@/utilities/types';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';

const testimonials: TestimonialData[] = [
    {
        id: 1,
        name: "Aurélien D'Aquino",
        role: "Client at ScaleFlex, France",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "Waqas delivered exceptional work with impressive quality and a strong commitment to excellence from start to finish. He demonstrated not only strong technical expertise but also a very supportive attitude."
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Product Manager at TechFlow",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "Working with the team was a breeze. The attention to detail in the UI components was exactly what we needed for our rebranding. Highly recommended."
    },
    {
        id: 3,
        name: "Marcus Thorne",
        role: "Founder of DevScale",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 5,
        text: "Extremely professional and fast. The communication was top-notch, and the final delivery exceeded our expectations. Will definitely be working together again."
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Design Lead at Creative Agency",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        text: "The integration was seamless. They understood our design language perfectly and translated it into clean, maintainable code."
    },
    {
        id: 5,
        name: "David Chen",
        role: "CTO at FinTech Solutions",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 5,
        text: "Technical expertise is 10/10. They solved complex architectural issues that other developers struggled with. Delivery was on time."
    }
];

const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => (
    <div
        className="p-8 rounded-3xl border transition-all duration-300 flex flex-col gap-4 h-full select-none shadow-sm hover:shadow-xl group"
        style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border-default)"
        }}
    >
        <div className="flex items-center gap-4">
            <img src={data.image} alt={data.name} className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
            <div>
                <h3 className="font-bold text-lg leading-tight" style={{ color: "var(--text-primary)" }}>{data.name}</h3>
                <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{data.role}</p>
            </div>
        </div>

        <div className="flex gap-1 text-yellow-400">
            {[...Array(data.rating)].map((_, i) => (
                <HiStar key={i} size={20} />
            ))}
        </div>

        <p className="text-sm leading-relaxed line-clamp-4" style={{ color: "var(--text-secondary)" }}>
            {data.text}
        </p>
    </div>
);

const Testimonials: React.FC = () => {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const containerRef = useGSAPStagger({
        stagger: 0.15,
        duration: 0.8,
        animationType: "fadeIn",
        delay: 0.2,
    });

    const { ref: sectionRef } = useScrollAnimation<HTMLElement>({
        threshold: 0.1,
    });

    useGSAP(() => {
        if (!sliderRef.current) return;
        const gap = 24;
        const cardElement = sliderRef.current.children[0] as HTMLElement;
        const moveDistance = cardElement.offsetWidth + gap;

        gsap.to(sliderRef.current, {
            x: -(index * moveDistance),
            duration: 0.6,
            ease: "power2.out",
        });
    }, [index]);

    const next = () => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 786;
        const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 3;
        if (index < maxIndex) setIndex(prev => prev + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(prev => prev - 1);
    };

    const isAtStart = index === 0;
    const isAtEnd = index >= (typeof window !== 'undefined' && window.innerWidth < 768 ? testimonials.length - 1 : testimonials.length - 3);

    // Reusable Navigation Buttons component
    const NavigationButtons = ({ className }: { className?: string }) => (
        <div className={`flex gap-4 ${className}`}>
            <button
                onClick={prev}
                disabled={isAtStart}
                className={`p-2.5 rounded-full border transition-all active:scale-90 
                    ${isAtStart ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}`}
                style={{
                    borderColor: "var(--border-default)",
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)"
                }}
            >
                <HiChevronLeft size={24} />
            </button>

            <button
                onClick={next}
                disabled={isAtEnd}
                className={`p-2.5 rounded-full border transition-all active:scale-90 
                    ${isAtEnd ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}`}
                style={{
                    borderColor: "var(--border-default)",
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)"
                }}
            >
                <HiChevronRight size={24} />
            </button>
        </div>
    );

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="px-6 md:py-12 mb-12 overflow-hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <h2 className="text-xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
                            What Our Clients Say
                        </h2>
                        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                            Trusted by leaders worldwide
                        </p>
                    </div>

                    {/* Desktop Navigation: Hidden on Mobile */}
                    <NavigationButtons className="hidden md:flex" />
                </div>

                {/* Slider Container */}
                <div
                    className="relative mb-10 md:mb-0"
                    ref={containerRef as React.RefObject<HTMLDivElement>}
                >
                    <div
                        className="flex"
                        style={{ gap: '24px' }}
                        ref={sliderRef}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                data-animate-item
                                className="w-full md:w-[calc((100%-48px)/3)] shrink-0"
                            >
                                <TestimonialCard data={item} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation: Visible only on Mobile, Centered Below Cards */}
                <NavigationButtons className="flex md:hidden justify-center mt-8" />
            </div>
        </section>
    );
};

export default Testimonials;