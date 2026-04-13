import { productsMetadataMap } from "../../portfolios-metadata";
import ProductsTemplate from "@/components/portfolio/products/products-template";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: SlugProps) => {
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

const ProductsPage = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const data = productsMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <ProductsTemplate />;
};

export default ProductsPage;