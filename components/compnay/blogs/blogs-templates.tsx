"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "./hero";
import Footer from "@/components/Footer";
import NotFound from "@/app/not-found";
import ScrollToTop from "@/hooks/useScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import { blogPosts } from "@/lib/companyConstant";
import Navigations from "./navigations";
import Introduction from "./introduction";
import KeyTakeaways from "./keyTakeaways";
import MainContent from "./mainContent";
import Conclusion from "./conclusion";
import BlogRelatedPosts from "./relatedPosts";

const BlogsTemplate = () => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const segments = pathname.split("/").filter(Boolean);
    const slug = segments[segments.length - 1];

    // Find blog by slug
    const content = blogPosts.find((item) => item.slug === slug);

    // Fallback if blog not found
    if (!content) {
        return <NotFound />;
    }

    const { blogDetails } = content;

    return (
        <>
            <CustomCursor />
            <Header />

            <main className="bg-[var(--bg-primary)] min-h-screen">
                {/* Hero Section */}
                <Hero
                    title={blogDetails.hero.title}
                    description={blogDetails.hero.description}
                    published={blogDetails.hero.published}
                    categories={blogDetails.hero.categories}
                    image={blogDetails.hero.image}
                    imageAlt={blogDetails.hero.imageAlt}
                />

                <Navigations />

                {/* Blog Content Sections */}
                <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-24">
                    <Introduction
                        title={blogDetails.content.introduction.title}
                        description={blogDetails.content.introduction.description}
                    />

                    <KeyTakeaways key_takeaways={blogDetails.content.key_takeaways} />
                    <MainContent main_content={[blogDetails.content.main_content]} />

                    {/* 4. Conclusion */}
                    <Conclusion conclusion={blogDetails.content.conclusion} />

                    {/* 5. Related Posts */}
                    <BlogRelatedPosts
                        currentSlug={slug}
                        relatedPosts={blogDetails.relatedPosts || []}
                    />
                </div>

                <Footer />
                <ScrollToTop />
            </main>
        </>
    );
};

export default BlogsTemplate;