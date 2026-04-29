import React from 'react';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import TrustedCompanies from '../TrustedCompanies';

const ExpertiesContent: React.FC = () => {
    const containerRef = useGSAPStagger({
        stagger: 0.15,
        duration: 0.8,
        animationType: "fadeIn",
        delay: 0.2,
    });

    return (
        <>
            <section
                ref={containerRef}
                className="relative w-full flex flex-col mt-28 mb-12 overflow-hidden"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                {/* What Would They Get Working With Us */}
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
                                What You Get Working With Us
                            </h2>
                            <p className="text-sm md:text-md lg:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                                Transform your marketing operations with measurable results and next-level efficiency.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "10x Faster Campaign Launch",
                                    desc: "Automate creative generation, A/B testing, and deployment across all channels."
                                },
                                {
                                    title: "Hyper-Personalized Targeting",
                                    desc: "AI-driven audience segmentation and predictive analytics for maximum conversion."
                                },
                                {
                                    title: "Real-Time Performance Insights",
                                    desc: "Unified dashboard with AI recommendations to optimize every campaign instantly."
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    data-animate-item
                                    className="bg-white p-8 rounded-3xl flex flex-col border hover:shadow-xl transition-all"
                                    style={{
                                        backgroundColor: "var(--bg-secondary)",
                                        borderColor: "var(--border-default)"
                                    }}
                                >
                                    <div className="w-12 h-12 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded-2xl flex items-center justify-center mb-6 text-3xl font-bold">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{item.title}</h3>
                                    <p className="text-sm md:text-md text-[var(--text-secondary)]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <TrustedCompanies />

                {/* What We Offer */}
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center mb-8">
                            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
                                What We Offer
                            </h2>
                            <p className="text-sm md:text-md lg:text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                                End-to-end technological solutions tailored for modern advertising and marketing agencies.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "AI Campaign Manager", desc: "Intelligent platform to plan, execute, and optimize multi-channel campaigns automatically." },
                                { title: "Creative Intelligence Suite", desc: "Generate high-converting ad creatives, copy, and visuals in seconds using generative AI." },
                                { title: "Audience Intelligence", desc: "Deep insights into customer behavior with predictive modeling and lookalike audiences." },
                                { title: "Unified Analytics Dashboard", desc: "Real-time performance tracking across all platforms with actionable AI recommendations." },
                                { title: "Automation & Workflows", desc: "Streamline repetitive tasks like bidding, reporting, and content distribution." },
                                { title: "Compliance & Brand Safety", desc: "Built-in tools to ensure regulatory compliance and protect brand reputation." }
                            ].map((offer, i) => (
                                <div
                                    key={i}
                                    data-animate-item
                                    className="
                                        p-8 rounded-2xl transition-all duration-300 group
                                        bg-white border border-[var(--border-default)]
                                        shadow-sm hover:shadow-2xl hover:-translate-y-2
                                    "
                                    style={{
                                        backgroundColor: "var(--bg-secondary)",
                                        borderColor: "var(--border-default)"
                                    }}
                                >
                                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 group-hover:text-purple-600 transition-colors">
                                        {offer.title}
                                    </h3>

                                    <p className="text-sm md:text-md text-[var(--text-secondary)] leading-relaxed">
                                        {offer.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
};

export default ExpertiesContent;
