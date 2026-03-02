"use client";

import React from "react";
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
          {services.map((service, index) => {
            const Icon = service.iconPath;

            return (
              <div
                key={index}
                data-animate-item
                className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
                style={{ backgroundColor: "var(--bg-primary)" }}
              >
                {/* Icon Container with Blob Background */}
                <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-no-repeat bg-contain bg-center"
                    style={{
                      backgroundImage: `url(${typeof service.bgImg === "string"
                        ? service.bgImg
                        : service.bgImg.src
                        })`,
                    }}
                  />

                  {/* Icons Component */}
                  <Icon className="relative z-10 text-white text-4xl" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};