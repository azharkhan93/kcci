"use client";

import React from "react";
import { ResearchProjectsList, CtaSection } from "@/app/components";
import { RESEARCH_PROJECTS_DATA } from "@/app/constants/researchProjects";

export default function ResearchProjectsPage() {
  return (
    <main className="flex flex-col bg-white min-h-screen pt-24 sm:pt-28 md:pt-32">
    
      <ResearchProjectsList
        projects={RESEARCH_PROJECTS_DATA}
        title="RESEARCH PROJECTS"
                subtitle="Advancing precision agronomy, automated soil sensing, remote sensing modeling, and climate resilience through empirical field experiments."
      />

      {/* Lab News CTA Section */}
      <CtaSection
        badge="STAY UPDATED"
        title="FOLLOW OUR RESEARCH UPDATES"
        buttonText="EXPLORE ALL POSTS"
      />
    </main>
  );
}
