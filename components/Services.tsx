"use client";

import { services } from "@/lib/constants";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";

export default function Services() {
  const containerRef = useGSAPStagger({
    stagger: 0.15,
    duration: 0.8,
    animationType: "fadeIn",
    delay: 0.2,
  });

  return (
    <section
      id="services"
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
            Our Services
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Comprehensive solutions to automate and optimize your business
            processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-animate-item
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--bg-primary)" }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--accent-primary)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={service.iconPath}
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

