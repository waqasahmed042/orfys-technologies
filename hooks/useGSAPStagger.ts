"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPStaggerOptions {
  stagger?: number;
  delay?: number;
  duration?: number;
  animationType?: "fadeIn" | "slideUp" | "scale";
  start?: string;
  end?: string;
  once?: boolean;
}

export function useGSAPStagger(options: UseGSAPStaggerOptions = {}) {
  const {
    stagger = 0.1,
    delay = 0,
    duration = 0.6,
    animationType = "fadeIn",
    start = "top 80%",
    end = "bottom 20%",
    once = true,
  } = options;

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll("[data-animate-item]");

    if (children.length === 0) return;

    // Set initial state
    children.forEach((child) => {
      const element = child as HTMLElement;
      switch (animationType) {
        case "fadeIn":
          gsap.set(element, { opacity: 0, y: 30 });
          break;
        case "slideUp":
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case "scale":
          gsap.set(element, { opacity: 0, scale: 0.9 });
          break;
      }
    });

    // Create stagger animation
    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: "power3.out",
    });

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start,
      end,
      animation,
      toggleActions: once ? "play none none none" : "play none play reverse",
    });

    return () => {
      scrollTrigger.kill();
      animation.kill();
    };
  }, [stagger, delay, duration, animationType, start, end, once]);

  return containerRef;
}

