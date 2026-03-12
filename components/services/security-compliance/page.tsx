"use client";
import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/services/hero";
import WhyOrfys from "@/components/WhyOrfys";
import Integrations from "@/components/services/integrations";
import WhatWeOffer from "@/components/services/whatWeOffer";
import Projects from "@/components/services/products";
import Testimonials from "@/components/Testimonials";
import Faqs from "../faqs";

const SecurityCompliance: React.FC = () => {
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

        {/* Client testimonials */}
        <Testimonials />

        {/* Faqs */}
        <Faqs />
      </main>

      <Footer />
    </>
  );
};

export default SecurityCompliance;