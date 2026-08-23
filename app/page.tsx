"use client";

import React from "react";
import {
  Hero,
  ResearchApproach,
  LabGallery,
  ResearchProjectsList,
  CtaSection,
} from "@/app/components";
import { RESEARCH_PROJECTS_DATA } from "@/app/constants/researchProjects";

export default function HomeContent() {
  return (
    <main className="flex flex-col bg-white relative">
      <Hero />
      <ResearchApproach />
      <LabGallery />
      <ResearchProjectsList
        projects={RESEARCH_PROJECTS_DATA}
        showFilters={false}
        limit={2}
        viewAllHref="/research-projects"
      />
      <CtaSection />
    </main>
  );
}
