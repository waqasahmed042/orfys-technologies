"use client";
import React, { useEffect, useRef } from "react";
import Navigations from "./navigations";
import MainFunctions from "./mainFunctions";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { ourProducts } from "@/lib/constants";
import NotFound from "@/app/not-found";
import Header from "@/components/Header";
import ScrollToTop from "@/hooks/useScrollToTop";
import Hero from "./hero";
import Description from "./description";
import Customization from "./customization";
import MainFeatures from "./mainFeatures";
import ScreenShots from "./screenShots";
import ChatWidget from "@/components/chatWidget";

const ProductsTemplate: React.FC = () => {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").filter(Boolean).pop() || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to generate slug from title (consistent with your earlier approach)
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  // Find the correct case across all categories
  let content = null;

  for (const category of Object.values(ourProducts)) {
    const foundCase = category.cases.find((caseItem) =>
      generateSlug(caseItem.title) === currentSlug
    );
    if (foundCase) {
      content = {
        ...foundCase,
        categoryTitle: category.title,
      };
      break;
    };
  };

  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftContentRef.current;
    const right = rightContentRef.current;

    if (!left) return;

    gsap.set(left, { opacity: 0, x: -30 });
    if (right) gsap.set(right, { opacity: 0, x: 30, scale: 0.95 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(left, {
      opacity: 1,
      x: 0,
      duration: 0.9,
    }).to(
      right,
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Find project by slug (now using clean slug)
  const project = Object.values(ourProducts)
    .flatMap((category) =>
      category.cases.map((caseItem) => ({
        ...caseItem,
        category: category.title,
        slug: caseItem.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
      }))
    )
    .find((p) => p.slug === currentSlug);

  if (!project) {
    return <NotFound />;
  };

  return (
    <>
      <main className="bg-[var(--bg-primary)] min-h-screen">
        <Header />
        <Hero />

        <Navigations />
        <Description
          data={project.description || {
            illustration: "Description Illustration",
            title: "Main Functions",
            paragraphs: [],
            bulletin: []
          }}
        />

        <MainFunctions
          data={project.mainFunctions || {
            illustration: "Main Functions Illustration",
            title: "Main Functions",
            paragraphs: [],
            bulletin: []
          }}
        />

        <MainFeatures
          data={project.mainFeatures || {
            illustration: "Main Features Illustration",
            title: "Main Features",
            paragraphs: [],
            bulletin: []
          }}
        />

        <ScreenShots />
        <Customization />

        <Footer />
        <ScrollToTop />
        <ChatWidget />
      </main>
    </>
  );
};

export default ProductsTemplate;