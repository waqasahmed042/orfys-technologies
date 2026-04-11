"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "./hero";
import Footer from "@/components/Footer";
import NotFound from "@/app/not-found";
import ScrollToTop from "@/hooks/userScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import { blogPosts } from "@/lib/companyConstant";

const BlogsTemplate = () => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const segments = pathname.split("/").filter(Boolean);
    const slug = segments[segments.length - 1];

    // find blog by slug
    const content = blogPosts.find((item) => item.slug === slug);

    // Fallback
    if (!content) {
        return <NotFound />;
    };

    return (
        <>
            <CustomCursor />
            <Header />

            <main className="bg-[var(--bg-primary)] min-h-screen">
                <Hero
                    title={content.blogDetails.hero.title}
                    description={content.blogDetails.hero.description}
                    buttonText={content.blogDetails.hero.button}
                    image={content.blogDetails.hero.image}
                    imageAlt={content.blogDetails.hero.imageAlt}
                />

                <Footer />
                <ScrollToTop />
            </main>
        </>
    );
};

export default BlogsTemplate;