"use client";

import Image from "next/image";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

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
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-6">
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              About Orfys Technologies
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Orfys Technologies is a forward-thinking software development
              company specializing in software development and workflow automation. We
              empower businesses to eliminate repetitive tasks, optimize
              operations, and scale efficiently through custom web solutions and
              intelligent automation.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Our team combines deep technical expertise with business acumen to
              deliver solutions that not only work flawlessly but also drive
              measurable results for your organization.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[5/4] relative">
            <Image
              src="/path/to/your/image.jpg"
              alt="Orfys Technologies team collaborating"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}