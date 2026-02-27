"use client";

import { products } from "@/lib/constants";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const productsContainer = productsRef.current;
    if (!section || !productsContainer) return;

    const productCards = productsContainer.querySelectorAll("[data-product-card]");

    // Set initial states - alternate left/right
    productCards.forEach((card, index) => {
      const element = card as HTMLElement;
      if (index % 2 === 0) {
        gsap.set(element, { opacity: 0, x: -80 });
      } else {
        gsap.set(element, { opacity: 0, x: 80 });
      }
    });

    // Animate with stagger
    const animation = gsap.to(productCards, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Our Products
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Custom software solutions and automation platforms designed for
            modern businesses
          </p>
        </div>

        <div ref={productsRef} className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              data-product-card
              className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(to bottom right, var(--bg-secondary), var(--bg-primary))`,
                borderColor: "var(--border-default)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor:
                      product.badgeColor === "blue"
                        ? "#2563eb"
                        : "var(--accent-primary)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={product.iconPath}
                    />
                  </svg>
                </div>
                <span
                  className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{
                    backgroundColor:
                      product.badgeColor === "blue"
                        ? "#dbeafe"
                        : "var(--bg-secondary)",
                    color:
                      product.badgeColor === "blue"
                        ? "#1e40af"
                        : "var(--accent-primary)",
                  }}
                >
                  {product.badge}
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {product.title}
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {product.description}
              </p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        color:
                          product.badgeColor === "blue"
                            ? "#2563eb"
                            : "var(--accent-primary)",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={product.ctaHref}
                className="inline-flex items-center font-semibold transition-colors hover:opacity-80"
                style={{
                  color:
                    product.badgeColor === "blue"
                      ? "#2563eb"
                      : "var(--accent-primary)",
                }}
              >
                {product.ctaText}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

