import { productsMetadataMap } from "../../portfolios-metadata";
import ProductsTemplate from "@/components/portfolio/products/products-template";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const metadata = productsMetadataMap[slug];

    if (!metadata) {
        return {
            title: "Product Not Found",
            description: "The requested product could not be found.",
        };
    };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = productsMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <ProductsTemplate />;
};