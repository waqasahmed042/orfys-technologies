"use client";

import React from "react";
import { trustFactors } from "@/lib/constants";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import {
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

const WhyOrfys: React.FC = () => {
  const containerRef = useGSAPStagger({
    stagger: 0.15,
    duration: 0.8,
    animationType: "scale",
    delay: 0.1,
  });

  // Icon mapper
  const getIcon = (title: string) => {
    const t = title.toLowerCase();

    if (t.includes("security")) return <FaShieldAlt />;
    if (t.includes("fast") || t.includes("implementation")) return <FaBolt />;
    if (t.includes("team") || t.includes("expert")) return <FaUsers />;
    if (t.includes("support")) return <FaHeadset />;

    return <FaBolt />;
  };

  return (
    <section
      id="why-orfys"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-20 text-white overflow-hidden"
    >
      {/* 🔥 Background Gradient (MAIN FIX) */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0f17_0%,#0b0f17_60%,#1a1333_100%)]" />

      {/* Purple Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600/20 to-transparent blur-2xl" />

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Orfys?
          </h2>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            We don't just write code; we build strategic digital assets that
            drive business growth and operational efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              data-animate-item
              className="flex space-x-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="w-16 h-16 shrink-0 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-2xl">
                {getIcon(factor.title)}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {factor.title}
                </h3>

                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrfys;