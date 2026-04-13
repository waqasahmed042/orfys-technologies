import { expertiseMetadataMap } from "../expertise-metadata";
import ExpertiesTemplate from "@/components/experties/expertise-template";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const metadata = expertiseMetadataMap[slug];

    if (!metadata) return { title: "Expertise Not Found" };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};

const ExpertiesPage = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const data = expertiseMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <ExpertiesTemplate />;
};

export default ExpertiesPage;