"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { companyMenu } from "@/lib/constants";
import Hero from "./hero";
import Footer from "@/components/Footer";
import NotFound from "@/app/not-found";
import ScrollToTop from "@/hooks/useScrollToTop";
import CustomCursor from "../CustomCursor";
import Header from "../Header";

const CompanyTemplate = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSegment =
    pathname.split("/").filter(Boolean).pop() || "company";

  // Find the menu item by matching the path segment
  const menuItem = companyMenu.find((item) => {
    const itemSegment = item.path.split("/").pop();
    return itemSegment === currentSegment;
  });

  // Extract the correct nested object (aboutUS, blogs, news, etc.)
  let content: any = null;

  if (menuItem) {
    if (currentSegment === "about-us") content = menuItem.aboutUS;
    else if (currentSegment === "blogs") content = menuItem.blogs;
    // else if (currentSegment === "news") content = menuItem.news;
    else if (currentSegment === "people") content = menuItem.people;
    else if (currentSegment === "careers") content = menuItem.careers;
    else if (currentSegment === "engagement-models") content = menuItem.engagementModels;
  };

  // Fallback if no data found
  if (!content) {
    return <NotFound />;
  };

  return (
    <>
      <CustomCursor />
      <Header />

      <main className="bg-[var(--bg-primary)] min-h-screen">
        {/* Hero Section - Passing data from companyMenu */}
        <Hero
          title={content.title}
          description={content.description}
          buttonText={content.button}
          image={content.image}
          imageAlt={content.imageAlt}
        />

        {/* Footer Section */}
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default CompanyTemplate;