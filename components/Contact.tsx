import ScrollToTop from '@/hooks/userScrollToTop';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CgLayoutGrid } from 'react-icons/cg';
import { CiMonitor } from 'react-icons/ci';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { GiPaperClip } from 'react-icons/gi';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import Header from './Header';

const steps = [
    {
        id: 1,
        title: "Free consultation",
        desc: "Begin by discussing your project with our experts to explore potential solutions and define the path forward.",
        icon: <FaUserSecret size={20} />,
    },
    {
        id: 2,
        title: "Discovery call",
        desc: "Begin by discussing your project with our experts to explore potential solutions and define the path forward.",
        icon: <CiMonitor size={20} />,
    },
    {
        id: 3,
        title: "Technical feasibility & ETA",
        desc: "Assess the technical feasibility and receive an estimated timeline, so you know what to expect.",
        icon: <FiFileText size={20} />,
    },
    {
        id: 4,
        title: "Project Kick-Off",
        desc: "With everything in place, we begin building and refining your product, ensuring it's set for a great launch.",
        icon: <CgLayoutGrid size={20} />,
    },
];

const Contact: React.FC = () => {
    return (
        <>
            <CustomCursor />
            <Header />

            <section
                className="relative w-full py-20 px-6 mt-28 md:px-12 lg:px-24"
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Stepper */}
                    <div className="flex flex-col">
                        <h2
                            className="text-4xl font-bold mb-12"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Get started with us
                        </h2>

                        <div className="relative">
                            {/* Vertical Dashed Line */}
                            <div className="absolute left-[22px] top-2 bottom-0 w-px border-l-2 border-dashed border-gray-200 z-0"></div>

                            {steps.map((step, index) => (
                                <div key={step.id} className={`relative flex gap-6 ${index !== steps.length - 1 ? 'mb-12' : ''} z-10`}>
                                    {/* Icon Circle */}
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-white border shadow-sm"
                                        style={{ color: "var(--text-primary)", borderColor: "var(--border-default)" }}
                                    >
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <span
                                            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3"
                                            style={{ backgroundColor: "#f3f4f6", color: "var(--accent-primary)" }}
                                        >
                                            Step {step.id}
                                        </span>
                                        <h3
                                            className="text-lg font-bold mb-2"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed max-w-sm"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div
                        className="p-8 rounded-xl border"
                        style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-default)" }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                                        style={{ borderColor: "var(--border-default)" }}
                                    />
                                </div>
                                {/* Company */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Company</label>
                                    <input
                                        type="text"
                                        placeholder="Your Company Name"
                                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                                        style={{ borderColor: "var(--border-default)" }}
                                    />
                                </div>
                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                                        style={{ borderColor: "var(--border-default)" }}
                                    />
                                </div>
                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder="+92098989787"
                                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                                        style={{ borderColor: "var(--border-default)" }}
                                    />
                                </div>
                            </div>

                            {/* Textarea */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>How can we help you?</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your project"
                                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                                    style={{ borderColor: "var(--border-default)" }}
                                ></textarea>
                            </div>

                            {/* Attachment Button */}
                            <button
                                type="button"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors"
                                style={{ borderColor: "var(--border-default)", color: "var(--text-secondary)" }}
                            >
                                <div className="p-1 rounded bg-blue-50 text-blue-600">
                                    <GiPaperClip size={16} />
                                </div>
                                Attachment
                            </button>

                            {/* Checkboxes */}
                            <div className="space-y-3 pt-2">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                                    <span className="text-sm leading-tight" style={{ color: "var(--text-secondary)" }}>
                                        I agree with the collection & processing of my personal data in the Privacy Policy and Terms & Conditions.
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                className="button inline-flex items-center justify-center cursor-pointer px-7 py-3.5 text-base font-semibold rounded-lg border-2 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                                style={{
                                    borderColor: "var(--accent-primary)",
                                    color: "var(--accent-primary)",
                                }}
                            >
                                Book a Call
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Contact;