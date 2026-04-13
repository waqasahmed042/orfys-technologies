import { companyMetadataMap } from "../company-metadata";
import CompanyTemplate from "@/components/compnay/company-template";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const metadata = companyMetadataMap[slug];

    if (!metadata) return { title: "Company Not Found" };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};

const CompanyPage = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const data = companyMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <CompanyTemplate />;
};

export default CompanyPage;