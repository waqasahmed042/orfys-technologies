"use client";

import React from "react";
import { trustFactors } from "@/lib/constants";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import {
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaHeadset
} from "react-icons/fa";

const WhyOrfys: React.FC = () => {
  const containerRef = useGSAPStagger({
    stagger: 0.12,
    duration: 0.7,
    animationType: "scale",
    delay: 0.1,
  });

  // Updated helper to match your screenshot titles exactly
  const renderIcon = (title: string) => {
    const normalizedTitle = title.toLowerCase();

    if (normalizedTitle.includes("security")) return <FaShieldAlt />;
    if (normalizedTitle.includes("implementation") || normalizedTitle.includes("fast")) return <FaRocket />;
    if (normalizedTitle.includes("team") || normalizedTitle.includes("expert")) return <FaUsers />;
    if (normalizedTitle.includes("support") || normalizedTitle.includes("24/7")) return <FaHeadset />;

    return <FaRocket />; // Fallback
  };

  return (
    <section
      id="why-orfys"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="mb-24"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-lg md:text-2xl lg:text-4xl font-bold mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Why Choose Orfys?
          </h2>
          <p
            className="text-sm md:text-md lg:text-md leading-relaxed mb-12"
            style={{ color: "var(--text-secondary)" }}
          >
            Technology-focused expertise you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              data-animate-item
              className="text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                {/* Now calls the helper that correctly identifies the title */}
                {renderIcon(factor.title)}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {factor.title}
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrfys;