"use client";
import React, { useEffect } from "react";
import Hero from "./hero";
import NotFound from "@/app/not-found";
import { usePathname } from "next/navigation";
import Header from "../Header";
import ScrollToTop from "@/hooks/useScrollToTop";
import Footer from "@/components/Footer";
import { expertiesContent } from "@/lib/expertiesConstant";
import ExpertiesContent from "./expertiesContent";
import Testimonials from "../Testimonials";
import WhyOrfys from "../WhyOrfys";
import CTA from "../CTA";
import ChatWidget from "../chatWidget";

const ExpertiesTemplate: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const segments = pathname.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];

  // Find expertise content by slug instead of blogPosts
  const content = expertiesContent.find((item) => item.slug === slug);

  // Fallback if the slug doesn't exist in our data
  if (!content) {
    return <NotFound />;
  }

  return (
    <>
      <Header />

      <main className="bg-[var(--bg-primary)] min-h-screen">
        <Hero
          title={content.hero.title}
          description={content.hero.description}
          buttonText={content.hero.button}
          image={content.hero.image}
          imageAlt={content.hero.imageAlt}
        />

        <ExpertiesContent />
        <Testimonials />
        <WhyOrfys />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </>
  );
};

export default ExpertiesTemplate;