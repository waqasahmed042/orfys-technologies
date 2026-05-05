"use client";

import { companyInfo } from "@/lib/constants";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import React from "react";

const CTA: React.FC = () => {
  const ref = useGSAPAnimation({
    animationType: "fadeIn",
    duration: 1.2,
    delay: 0.3,
  });

  return (
    <>
      <section ref={ref as React.RefObject<HTMLElement>}>
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 md:p-16 relative text-center overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <span
              className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-4">Take
              the next step</span>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 mx-auto leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-violet-100 text-sm md:text-md lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's discuss how our automation solutions can streamline your operations and accelerate
              your growth. Join the future of efficient workflow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
                className="bg-white text-black px-10 rounded-xl py-3 font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Book a Call
              </a>
              <a
                href={`mailto:${companyInfo.email}?subject=Get%20a%20Demo`}
                className="border-2 border-white rounded-xl text-white px-10 py-3 font-bold hover:bg-white/10 transition-colors"
              >
                Get a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;