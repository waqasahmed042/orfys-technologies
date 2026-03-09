"use client";
import React, { useState } from 'react';
import { useGSAPStagger } from '@/hooks/useGSAPStagger';
import { LuPlus, LuMinus } from "react-icons/lu";
import { usePathname } from 'next/navigation';

const serviceFaqs = {
    "software-development": [
        { question: "What technologies do you specialize in?", answer: "We specialize in modern stacks including React, Next.js, TypeScript, Node.js, and Python, ensuring your software is scalable and future-proof." },
        { question: "Do you offer custom software maintenance?", answer: "Yes, we provide ongoing maintenance and security updates to ensure your custom systems remain efficient as your business grows." }
    ],
    "workflow-automation": [
        { question: "Can you automate existing manual spreadsheets?", answer: "Absolutely. We can connect Excel or Google Sheets to platforms like Slack, CRMs, or custom databases to automate data entry and reporting." },
        { question: "Which automation platforms do you support?", answer: "We are experts in Zapier, Make.com, and custom Node.js/Python scripts for complex business logic that standard tools can't handle." }
    ],
    "integration-services": [
        { question: "Can you build custom APIs for our platform?", answer: "Yes, we design and deploy secure, documented REST and GraphQL APIs tailored to your specific ecosystem requirements." },
        { question: "How do you handle security during integrations?", answer: "We use OAuth2, JWT, and end-to-end encryption to ensure that data moving between your systems is never compromised." }
    ],
    "data-analytics": [
        { question: "Can you integrate real-time data from multiple sources?", answer: "Yes, we build ETL pipelines that aggregate data from CRMs, ERPs, and marketing tools into a single real-time dashboard." },
        { question: "Which visualization tools do you work with?", answer: "We specialize in Power BI, Tableau, and custom-built D3.js or Chart.js visualizations for high-performance needs." }
    ],
    "mobile-solutions": [
        { question: "Do you develop for both iOS and Android?", answer: "Yes, we primarily use React Native and Flutter to deliver high-performance apps for both platforms from a single codebase." },
        { question: "Can my mobile app work offline?", answer: "We implement local database caching and background synchronization so your users can stay productive even without an internet connection." }
    ],
    "security-compliance": [
        { question: "Are your solutions GDPR or HIPAA compliant?", answer: "Yes, we follow industry-standard encryption and data handling protocols to ensure your software meets global regulatory requirements." },
        { question: "How often do you perform security audits?", answer: "We integrate automated vulnerability scanning into our CI/CD pipelines and perform manual code reviews for every major release." }
    ]
};

const Faqs: React.FC = () => {
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const currentKey = (Object.keys(serviceFaqs).find(key => pathname.includes(key)) || "software-development") as keyof typeof serviceFaqs;
    const currentFaqs = serviceFaqs[currentKey];

    const containerRef = useGSAPStagger({
        stagger: 0.1,
        duration: 0.8,
        animationType: "fadeIn",
        delay: 0.2,
    });

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faqs"
            ref={containerRef as React.RefObject<HTMLElement>}
            className="mb-16 px-6 max-w-4xl mx-auto"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            {/* Header */}
            <div className="mb-12 flex justify-center items-center flex-col text-center">
                <h2 className="text-lg text-2xl md:text-4xl font-bold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>
                    Frequently Asked Questions
                </h2>
                <p className="text-sm md:text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                    Find answers to common questions regarding our {currentKey.replace('-', ' ')} solutions.
                </p>
            </div>

            {/* Faqs List */}
            <div className="space-y-4">
                {currentFaqs.map((faq, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <div
                            key={i}
                            data-animate-item
                            className="rounded-2xl border transition-all duration-300 overflow-hidden"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                borderColor: isOpen ? "var(--accent-primary)" : "var(--border-default)"
                            }}
                        >
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full flex justify-between items-center cursor-pointer p-6 md:p-8 text-left outline-none"
                            >
                                <span className="text-lg md:text-xl font-semibold pr-8" style={{ color: "var(--text-primary)" }}>
                                    {faq.question}
                                </span>
                                <div
                                    className="shrink-0 transition-transform duration-300"
                                    style={{ color: isOpen ? "var(--accent-primary)" : "var(--text-secondary)" }}
                                >
                                    {isOpen ? <LuMinus size={24} /> : <LuPlus size={24} />}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div
                                    className="p-6 md:p-8 pt-0 text-base md:text-lg leading-relaxed border-t"
                                    style={{
                                        color: "var(--text-secondary)",
                                        borderColor: "rgba(255,255,255,0.05)"
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Faqs;