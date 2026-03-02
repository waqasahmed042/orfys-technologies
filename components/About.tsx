"use client";

import Image from "next/image";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import about_us from "@/public/about-us.png";

export default function About() {
  const ref = useGSAPAnimation({
    animationType: "fadeIn",
    duration: 1,
    delay: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content - Kept original text */}
          <div className="space-y-6">
            <h2
              className="text-xl md:text-2xl lg:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              About Orfys Technologies
            </h2>
            <p
              className="text-sm md:text-md lg:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Orfys Technologies is a forward-thinking software development
              company specializing in software development and workflow automation. We
              empower businesses to eliminate repetitive tasks, optimize
              operations, and scale efficiently through custom web solutions and
              intelligent automation.
            </p>
            <p
              className="text-sm md:text-md lg:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Our team combines deep technical expertise with business acumen to
              deliver solutions that not only work flawlessly but also drive
              measurable results for your organization.
            </p>
          </div>

          <div className="relative">
            <div
              className="rounded-tl-[120px] lg:rounded-tl-[200px] rounded-2xl overflow-hidden shadow-2xl aspect-[5/4] relative border border-white/10"
            >
              <Image
                src={about_us}
                alt="Orfys Technologies team collaborating"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>

            {/* Soft glow behind the image to match the premium feel */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--accent-primary)] opacity-5 blur-[100px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};