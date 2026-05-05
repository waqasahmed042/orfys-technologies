"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "./hero";
import NotFound from "@/app/not-found";
import { blogPosts } from "@/lib/companyConstant";
import Author from "./author";
import Navigations from "./navigations";
import Introduction from "./introduction";
import KeyTakeaways from "./keyTakeaways";
import Analysis from "./analysis";
import Conclusion from "./conclusion";
import RelatedPosts from "./relatedPosts";
import Subscribe from "@/components/subscribe";

const BlogsTemplate = () => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const segments = pathname.split("/").filter(Boolean);
    const slug = segments[segments.length - 1];

    const content = blogPosts.find((item) => item.slug === slug);

    if (!content) return <NotFound />;

    const { blogDetails } = content;
    const author = blogDetails.author ?? {
        img: "",
        name: "",
        role: "",
        bio: "",
    };

    return (
        <>
            <main className="bg-[var(--bg-primary)] min-h-screen">
                <Hero {...blogDetails.hero} />

                <Navigations />

                <section className="py-16">
                    <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* SIDEBAR */}
                            <Author
                                img={author.img}
                                name={author.name}
                                role={author.role}
                                bio={author.bio}
                            />

                            {/* MAIN CONTENT */}
                            <article className="lg:col-span-9 space-y-20">
                                <Introduction
                                    title={blogDetails.content.introduction.title}
                                    description={blogDetails.content.introduction.description}
                                />

                                <KeyTakeaways
                                    key_takeaways={blogDetails.content.key_takeaways}
                                />

                                <Analysis
                                    title={blogDetails.content.analysis.title}
                                    description={blogDetails.content.analysis.description}
                                    pro_tip_title={blogDetails.content.analysis.pro_tip_title}
                                    pro_tip_description={blogDetails.content.analysis.pro_tip_description}
                                    conclusion={blogDetails.content.analysis.conclusion}
                                />

                                <Conclusion
                                    conclusion={blogDetails.content.conclusion}
                                />
                            </article>
                        </div>

                        <RelatedPosts
                            currentSlug={slug}
                            relatedPosts={blogDetails.relatedPosts || []}
                        />

                        <Subscribe />
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlogsTemplate;