"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPAnimationOptions {
  animationType?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "custom";
  delay?: number;
  duration?: number;
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  once?: boolean;
  customAnimation?: (element: HTMLElement) => gsap.core.Tween;
}

export function useGSAPAnimation(options: UseGSAPAnimationOptions = {}) {
  const {
    animationType = "fadeIn",
    delay = 0,
    duration = 1,
    trigger,
    start = "top 80%",
    end = "bottom 20%",
    once = true,
    customAnimation,
  } = options;

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const initialStyles: gsap.TweenVars = {};
    
    switch (animationType) {
      case "fadeIn":
        initialStyles.opacity = 0;
        initialStyles.y = 30;
        break;
      case "slideUp":
        initialStyles.opacity = 0;
        initialStyles.y = 50;
        break;
      case "slideLeft":
        initialStyles.opacity = 0;
        initialStyles.x = -50;
        break;
      case "slideRight":
        initialStyles.opacity = 0;
        initialStyles.x = 50;
        break;
      case "scale":
        initialStyles.opacity = 0;
        initialStyles.scale = 0.9;
        break;
    }

    gsap.set(element, initialStyles);

    // Create animation
    const animation = customAnimation
      ? customAnimation(element)
      : gsap.to(element, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
        });

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger || element,
      start,
      end,
      animation,
      toggleActions: once ? "play none none none" : "play none play reverse",
    });

    return () => {
      scrollTrigger.kill();
      animation.kill();
    };
  }, [animationType, delay, duration, trigger, start, end, once, customAnimation]);

  return elementRef;
}

