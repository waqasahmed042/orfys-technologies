import { expertiesMetadataMap } from "../experties-metadata";
import ExpertiesTemplate from "@/components/experties/experties-template";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: SlugProps) {
    const { slug } = await params;
    const metadata = expertiesMetadataMap[slug];

    if (!metadata) return { title: "Case Study Not Found" };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};

export default async function CaseStudyPage({ params }: SlugProps) {
    const { slug } = await params;
    const data = expertiesMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <ExpertiesTemplate />;
};