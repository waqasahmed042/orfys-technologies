"use client";

import { companyInfo } from "@/lib/constants";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export default function CTA() {
  const ref = useGSAPAnimation({
    animationType: "fadeIn",
    duration: 1.2,
    delay: 0.3,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-32"
      style={{
        background: `linear-gradient(to right, var(--accent-primary), var(--accent-secondary))`,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: "#FFFFFF" }}
        >
          Ready to Transform Your Business?
        </h2>
        <p
          className="text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: "#FFFFFF", opacity: 0.9 }}
        >
          Let's discuss how our automation solutions can streamline your
          operations and accelerate your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
            className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:opacity-90"
            style={{
              backgroundColor: "#FFFFFF",
              color: "var(--accent-primary)",
            }}
          >
            Book a Call
          </a>
          <a
            href={`mailto:${companyInfo.email}?subject=Get%20a%20Demo`}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            style={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
            }}
          >
            Get Demo
          </a>
        </div>
      </div>
    </section>
  );
}

