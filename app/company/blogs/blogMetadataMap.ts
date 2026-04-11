import type { Metadata } from "next";
import { blogPosts } from "@/lib/companyConstant";

export const blogMetadataMap: Record<string, Metadata> = Object.fromEntries(
    (blogPosts ?? []).map((post) => [
        post.slug,
        {
            title: post.title,
            description: post.description,
            openGraph: {
                title: post.title,
                description: post.description,
                images: [post.image]
            },
        },
    ])
);