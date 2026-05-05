"use client";
import React from "react";

const Subscribe: React.FC = () => {
    return (
        <section className="py-16 max-w-[1300px] mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] pt-6 px-4 md:p-16 relative text-center">

                {/* Content */}
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                        Stay ahead of the curve with Orfys Insights
                    </h2>

                    <p className="text-sm md:text-md lg:text-lg leading-relaxed text-blue-100 mb-10 text-lg">
                        Join 10,000+ engineers receiving weekly insights on AI,
                        architecture, and modern development. No spam, just pure value.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur rounded-2xl border border-white/20"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent border-none text-white placeholder-blue-100 focus:ring-0 px-6 py-4 rounded-xl outline-none"
                        />

                        <button
                            type="submit"
                            className="bg-white text-brand-purple cursor-pointer font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Subscribe Now
                        </button>
                    </form>

                    <p className="mt-4 p-4 md:p-2 text-xs text-blue-200">
                        No spam, just quality engineering. Unsubscribe anytime.
                    </p>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4" />
            </div>
        </section>
    );
};

export default Subscribe;