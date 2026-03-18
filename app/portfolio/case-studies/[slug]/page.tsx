import { notFound } from "next/navigation";
import { caseStudiesMetadataMap } from "../../portfolios-metadata";
import CaseStudiesTemplate from "@/components/portfolio/case-studies/case-studies-template";
import { projectsData } from "@/lib/portfolioConstants";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const decodedSlug = decodeURIComponent(params.slug);
    const metadata = caseStudiesMetadataMap[decodedSlug];

    if (!metadata) {
        return { title: "Case Study Not Found | Orfys" };
    };

    return metadata;
};

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    const decodedSlug = decodeURIComponent(params.slug);
    const project = projectsData.find((p) => p.slug === decodedSlug);
    console.log(project);

    return <CaseStudiesTemplate />;
};