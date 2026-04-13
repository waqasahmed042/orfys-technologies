import { caseStudiesMetadataMap } from "../../portfolios-metadata";
import CaseStudiesTemplate from "@/components/portfolio/case-studies/case-studies-template";
import { SlugProps } from "@/utilities/types";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const metadata = caseStudiesMetadataMap[slug];

    if (!metadata) return { title: "Case Study Not Found" };

    return {
        title: metadata.title,
        description: metadata.description,
    };
};


const CaseStudyPage = async ({ params }: SlugProps) => {
    const { slug } = await params;
    const data = caseStudiesMetadataMap[slug];

    if (!data) {
        return notFound();
    };

    return <CaseStudiesTemplate />;
};

export default CaseStudyPage;