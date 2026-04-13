import { industriesMetadataMap } from "../industries-metadata";
import IndustriesTemplate from "@/components/industries/industries-template";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const metadata = industriesMetadataMap[slug];

    if (!metadata) return { title: "Industry Not Found" };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};

const IndustriesPage = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const data = industriesMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <IndustriesTemplate />;
};

export default IndustriesPage;