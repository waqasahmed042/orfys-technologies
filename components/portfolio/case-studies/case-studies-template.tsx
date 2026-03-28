"use client";
import React from "react";
import Hero from "@/components/portfolio/case-studies/hero";
import Navigations from "./navigations";
import ClientOverview from "./clientOverview";
import Challenge from "./challenge";
import MainGoal from "./mainGoal";
import ProjectOverview from "./projectOverview";
import Solution from "./solution";
import TechnologyStack from "./technologyStack";
import CoreTeam from "./coreTeam";
import Result from "./result";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { projectsData } from "@/lib/portfolioConstants";
import NotFound from "@/app/not-found";

const CaseStudiesTemplate: React.FC = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop() || "";

  // Find the data for the current project
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <>
      <main className="bg-[var(--bg-primary)] min-h-screen">
        {/* Hero section */}
        <Hero />

        <Navigations />
        <ClientOverview
          data={project.clientOverview || { illustration: "", title: "", paragraphs: [], bulletin: [] }}
        />

        <Challenge
          data={project.challenge || { illustration: "", title: "", paragraphs: [], bulletin: [] }}
        />

        <MainGoal
          data={project.mainGoals || { illustration: "", title: "", paragraphs: [], bulletin: [] }}
        />

        <ProjectOverview
          data={project.projectOverview || { illustration: "", title: "", paragraphs: [], bulletin: [] }}
        />

        <Solution
          data={project.solution || { illustration: "", title: "", paragraphs: [], bulletin: [] }}
        />

        <TechnologyStack />

        <CoreTeam
          data={project.coreTeam || { illustration: "", title: "", paragraphs: [], bulletin: [] }}
        />

        <Result
          data={project.result || { illustration: "", title: "", paragraphs: [], bulletin: [] }}
        />

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
};

export default CaseStudiesTemplate;