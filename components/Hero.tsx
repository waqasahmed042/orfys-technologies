"use client";

import { companyInfo } from "@/lib/constants";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftContentRef.current;
    const right = rightContentRef.current;

    if (!left) return;


    gsap.set(left, { opacity: 0, y: 30 });
    if (right) gsap.set(right, { opacity: 0, y: 30, scale: 0.95 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(left, {
      opacity: 1,
      y: 0,
      duration: 0.9,
    });

    if (right) {
      tl.to(
        right,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
        },
        "-=0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-primary), var(--bg-secondary))`,
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div ref={leftContentRef} className="space-y-6">
            <div className="space-y-3">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1]"
                style={{ color: "var(--text-primary)" }}
              >
                Build. Automate. Scale.
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl font-semibold"
                style={{ color: "var(--accent-primary)" }}
              >
                Software Development & Workflow Automation
              </p>
            </div>

            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Transform your business with custom software solutions and intelligent
              automation. We build modern, scalable systems that streamline
              workflows and accelerate your growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white rounded-lg shadow-lg transition hover:shadow-xl"
                style={{
                  background: `linear-gradient(to right, var(--accent-primary), var(--accent-secondary))`,
                }}
              >
                Book a Call
              </a>

              <a
                href={`mailto:${companyInfo.email}?subject=Get%20a%20Demo`}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-lg border-2 transition hover:bg-[var(--bg-secondary)]"
                style={{
                  borderColor: "var(--accent-primary)",
                  color: "var(--accent-primary)",
                }}
              >
                Get a Demo
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div ref={rightContentRef} className="relative w-full hidden lg:flex items-center justify-center">
            <div
              className="relative w-full max-w-[520px] aspect-square rounded-3xl p-8 lg:p-12 flex items-center justify-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-primary), var(--bg-secondary))`,
              }}
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div
                  className="absolute top-8 right-8 w-48 h-48 rounded-full blur-3xl opacity-40"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                ></div>
                <div
                  className="absolute bottom-8 left-8 w-48 h-48 rounded-full blur-3xl opacity-25"
                  style={{ backgroundColor: "var(--accent-secondary)" }}
                ></div>
              </div>

              {/* Abstract Automation Visualization */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-full h-full max-w-[420px]">
                  {/* Automation Flow Elements */}
                  <div
                    className="absolute top-4 left-[20%] w-14 h-14 rounded-lg transform rotate-12 shadow-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-20 right-[20%] w-18 h-18 bg-orange-400 rounded-full shadow-xl flex items-center justify-center">
                    <svg
                      className="w-9 h-9 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-20 left-[30%] w-20 h-20 bg-blue-500 rounded-xl shadow-xl flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <div
                    className="absolute bottom-4 right-[30%] w-16 h-16 rounded-lg transform -rotate-12 shadow-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent-secondary)" }}
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>

                  {/* Connecting Automation Flow */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 420 420"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                  >
                    <path
                      d="M 84 84 Q 210 140 336 84 T 336 280"
                      stroke="#fb923c"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      className="opacity-50"
                    />
                    <path
                      d="M 70 210 Q 210 185 350 210"
                      stroke="#fb923c"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                      className="opacity-35"
                    />
                  </svg>

                  {/* Growth Chart */}
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 flex gap-2 items-end">
                    <div
                      className="w-2 h-12 rounded-t"
                      style={{ backgroundColor: "var(--accent-primary)", opacity: 0.7 }}
                    ></div>
                    <div
                      className="w-2 h-16 rounded-t"
                      style={{ backgroundColor: "var(--accent-primary)", opacity: 0.8 }}
                    ></div>
                    <div
                      className="w-2 h-20 rounded-t"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    ></div>
                    <div
                      className="w-2 h-14 rounded-t"
                      style={{ backgroundColor: "var(--accent-primary)", opacity: 0.7 }}
                    ></div>
                    <div
                      className="w-2 h-18 rounded-t"
                      style={{ backgroundColor: "var(--accent-primary)", opacity: 0.8 }}
                    ></div>
                  </div>

                  {/* Circular Progress */}
                  <div
                    className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-20 h-20 border-8 rounded-full"
                    style={{
                      borderColor: "var(--accent-primary)",
                      borderTopColor: "var(--accent-secondary)",
                      opacity: 0.7,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
