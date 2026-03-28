import { servicesMetadataMap } from "../services-metadata";
import ServiceTemplate from "@/components/services/services-template";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: SlugProps) {
    const { slug } = await params;
    const metadata = servicesMetadataMap[slug];

    if (!metadata) return { title: "Services Not Found" };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};

export default async function ServicePage({ params }: SlugProps) {
    const { slug } = await params;
    const data = servicesMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <ServiceTemplate />;
};