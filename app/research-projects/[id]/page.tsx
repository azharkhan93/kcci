import React from "react";
import { notFound } from "next/navigation";
import {
  ProjectHeader,
  ProjectHeroMedia,
  ProjectOverview,
  ProjectKeyFindings,
  ProjectSidebarInfo,
  CtaSection,
} from "@/app/components";
import { RESEARCH_PROJECTS_DATA } from "@/app/constants/researchProjects";

export function generateStaticParams() {
  return RESEARCH_PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = RESEARCH_PROJECTS_DATA.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-white min-h-screen pt-24 sm:pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10">
        {/* Component 1: Project Header with Breadcrumb & Metadata */}
        <ProjectHeader project={project} />

        {/* Component 2: Featured Media Banner & Key Metric Chips */}
        <ProjectHeroMedia project={project} />

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 sm:mt-12">
          {/* Main Column (8 cols): Overview, Objectives & Discoveries */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Component 3: Overview & Objectives */}
            <ProjectOverview project={project} />

            {/* Component 4: Key Empirical Discoveries */}
            <ProjectKeyFindings project={project} />
          </div>

          {/* Sidebar Column (4 cols): Equipment, Team, Tags & Inquire */}
          <div className="lg:col-span-4">
            {/* Component 5: Sidebar Specs & Team */}
            <ProjectSidebarInfo project={project} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CtaSection
        badge="PRECISION FIELD RESEARCH"
        title="EXPLORE MORE RESEARCH INITIATIVES"
        buttonText="VIEW ALL RESEARCH PROJECTS"
      />
    </main>
  );
}
