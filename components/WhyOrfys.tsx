"use client";

import { trustFactors } from "@/lib/constants";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";

export default function WhyOrfys() {
  const containerRef = useGSAPStagger({
    stagger: 0.12,
    duration: 0.7,
    animationType: "scale",
    delay: 0.1,
  });

  return (
    <section
      id="why-orfys"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-32"
      style={{
        background: `linear-gradient(to bottom right, var(--bg-secondary), var(--bg-primary))`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Why Choose Orfys?
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Technology-focused expertise you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              data-animate-item
              className="text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={factor.iconPath}
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {factor.title}
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

