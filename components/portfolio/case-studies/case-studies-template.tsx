"use client";
import React from "react";
import Hero from "@/components/portfolio/case-studies/hero";
import Navigations from "./navigations";

const CaseStudiesTemplate: React.FC = () => {
  return (
    <>
      <main className="bg-[var(--bg-primary)] min-h-screen">
        {/* Hero section */}
        <Hero />

        <Navigations />
      </main>
    </>
  );
};

export default CaseStudiesTemplate;