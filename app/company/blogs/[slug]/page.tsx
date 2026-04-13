import { blogMetadataMap } from "../blogMetadataMap";
import BlogsTemplate from "@/components/compnay/blogs/blogs-templates";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const metadata = blogMetadataMap[slug];

    if (!metadata) return { title: "Blogs Not Found" };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};

const BlogsPage = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const data = blogMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <BlogsTemplate />;
};

export default BlogsPage;