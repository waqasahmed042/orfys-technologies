"use client";

import { products } from "@/lib/constants";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheck, FaArrowRight } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
};

const Products: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const productsContainer = productsRef.current;
    if (!section || !productsContainer) return;

    const productCards = productsContainer.querySelectorAll("[data-product-card]");

    // Set initial states - subtle slide up and fade
    gsap.set(productCards, { opacity: 0, y: 40 });

    const animation = gsap.to(productCards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Our Products
          </h2>
          <p
            className="text-sm md:text-md lg:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Custom software solutions and automation platforms designed for
            modern businesses looking to scale effortlessly.
          </p>
        </div>

        {/* Product Grid */}
        <div ref={productsRef} className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              data-product-card
              className="group rounded-[2.5rem] p-10 border transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
              }}
            >
              <div className="flex items-start justify-between mb-8">
                {/* Icon Container */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: product.badgeColor === "blue" ? "#eff6ff" : "#f5f3ff",
                    color: product.badgeColor === "blue" ? "#2563eb" : "var(--accent-primary)",
                    border: `1px solid ${product.badgeColor === "blue" ? "#dbeafe" : "#ede9fe"}`
                  }}
                >
                  {/* Rendering dynamic SVG path or fallback to generic FaBox */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.iconPath} />
                  </svg>
                </div>

                {/* Status Badge */}
                <span
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full"
                  style={{
                    backgroundColor: product.badgeColor === "blue" ? "#dbeafe" : "white",
                    color: product.badgeColor === "blue" ? "#1e40af" : "var(--accent-primary)",
                    border: `1px solid var(--border-default)`
                  }}
                >
                  {product.badge}
                </span>
              </div>

              <h3
                className="text-lg md:text-xl lg:text-3xl font-bold mb-2 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {product.title}
              </h3>

              <p
                className="text-sm md:text-md lg:text-lg leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {product.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-10">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm font-medium">
                    <span
                      className="mr-3 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                      style={{
                        backgroundColor: product.badgeColor === "blue" ? "#dbeafe" : "#f3e8ff",
                        color: product.badgeColor === "blue" ? "#2563eb" : "var(--accent-primary)"
                      }}
                    >
                      <FaCheck />
                    </span>
                    <span style={{ color: "var(--text-primary)" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <a
                href={product.ctaHref}
                className="inline-flex items-center font-bold text-sm transition-all group-hover:gap-3"
                style={{
                  color: product.badgeColor === "blue" ? "#2563eb" : "var(--accent-primary)",
                }}
              >
                {product.ctaText}
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;