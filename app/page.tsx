"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/services/page";
import Process from "@/components/Process";
import TrustedCompanies from "@/components/TrustedCompanies";
import Testimonials from "@/components/Testimonials";
import WhyOrfys from "@/components/WhyOrfys";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <TrustedCompanies />
      <Testimonials />
      <WhyOrfys />
      <CTA />
    </>
  );
};
