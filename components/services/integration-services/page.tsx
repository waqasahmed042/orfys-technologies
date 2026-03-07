"use client";

import React from "react";
import Link from "next/link";
import {
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiCpu,
  FiArrowUpRight,
  FiStar
} from "react-icons/fi";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import Footer from "@/components/Footer";
import Hero from "../hero";
import WhyOrfys from "@/components/WhyOrfys";
import Integrations from "../integrations";
import WhatWeOffer from "../whatWeOffer";
import Projects from "../projects";

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
    <h2 className="text-2xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">{title}</h2>
    {subtitle && <p className="text-sm md:text-md lg:text-lg text-[var(--text-secondary)] max-w-2xl font-medium">{subtitle}</p>}
  </div>
);

// In a real application, these would likely come from a CMS or database
const testimonials = [
  {
    name: "Alex Chen",
    role: "CTO, Nexus Dynamics",
    content: "Orfys Technologies didn't just build an app; they built a scalable engine for our business. Their technical expertise is second to none.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom Retail",
    content: "The custom mobile solution they delivered transformed our customer engagement. The attention to detail in the UI is incredible.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Operations Manager, LogiTech",
    content: "Seamless integration and zero downtime. They took our complex legacy systems and modernized them into a high-performance cloud stack.",
    rating: 5
  }
];

// FAQs would also typically be dynamic, but here we hardcode them for simplicity
const faqs = [
  {
    q: "How long does the development process take?",
    a: "Timelines vary depending on project complexity. A typical MVP usually takes 8-12 weeks, while larger enterprise solutions may take 6+ months."
  },
  {
    q: "Do you offer post-launch maintenance?",
    a: "Yes, we provide dedicated support and maintenance packages to ensure your software stays secure and updated."
  }
];

const IntegrationServices: React.FC = () => {
  return (
    <>
      <main className="bg-[var(--bg-primary)] min-h-screen">
        {/* Hero section */}
        <Hero />

        {/* Why choose orfys technologies */}
        <WhyOrfys />

        {/* What we offer */}
        <WhatWeOffer />

        {/* Technologies */}
        <Integrations />

        {/* Projects Overview */}
        <Projects />

        {/* CLIENT TESTIMONIALS (Review Cards) */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader title="What Our Customers Are Saying" centered />
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="p-8 bg-[var(--bg-secondary)] border border-white/5 rounded-2xl relative">
                  <div className="flex gap-1 text-orange-400 mb-6">
                    {[...Array(t.rating)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                  </div>
                  <p className="text-[var(--text-secondary)] italic mb-8 leading-relaxed">"{t.content}"</p>
                  <div className="flex flex-col">
                    <span className="font-bold text-[var(--text-primary)]">{t.name}</span>
                    <span className="text-xs text-[var(--accent-primary)] uppercase tracking-wider font-bold">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <SectionHeader title="Frequently Asked Questions" centered />
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-[var(--bg-primary)] border border-white/5 rounded-2xl overflow-hidden cursor-pointer">
                  <summary className="flex justify-between items-center p-6 list-none font-bold text-[var(--text-primary)] text-lg">
                    {faq.q}
                    <FiChevronDown className="transition-transform duration-300 group-open:rotate-180 text-[var(--accent-primary)]" />
                  </summary>
                  <div className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IntegrationServices;