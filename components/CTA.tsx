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
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative mx-auto px-6 py-8 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)`,
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: 'white' }}
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm font-medium tracking-wide uppercase">
          Take the next step
        </div>

        <h2
          className="text-lg md:text-2xl lg:text-4xl font-bold flex flex-row justify-center items-center mb-2"
          style={{ color: "#FFFFFF" }}
        >
          Ready to Transform <br className="hidden md:block" />
          <span className="text-white/80">Your Business?</span>
        </h2>

        <p
          className="text-sm md:text-md lg:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#FFFFFF", opacity: 0.9 }}
        >
          Let&apos;s discuss how our automation solutions can streamline your
          operations and accelerate your growth. Join the future of efficient workflow.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            style={{
              backgroundColor: "#FFFFFF",
              color: "var(--accent-primary)",
            }}
          >
            Book a Call
          </a>

          <a
            href={`mailto:${companyInfo.email}?subject=Get%20a%20Demo`}
            className="inline-flex items-center justify-center px-10 py-3.5 border-2 font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white hover:text-[#9333ea] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            style={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            Get a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;