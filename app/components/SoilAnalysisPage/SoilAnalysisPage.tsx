import React from "react";
import { SOIL_ANALYSIS_PAGE_CONTENT } from "@/app/constants/navigation";
import { SoilSampleCollection } from "@/app/components/SoilSampleCollection";
import { SoilAvailableTests } from "@/app/components/SoilAvailableTests";
import { SoilResearchers } from "@/app/components/SoilResearchers";
import { CtaSection } from "@/app/components/CtaSection";

const { title, paragraphs } = SOIL_ANALYSIS_PAGE_CONTENT;

export const SoilAnalysisPage = (): React.ReactElement => (
  <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10">
    {/* Title & Intro */}
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#582c83] tracking-tight mb-4">
        {title}
      </h1>
      <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>

    {/* Highlighted CTA Section */}
    <CtaSection
      title={SOIL_ANALYSIS_PAGE_CONTENT.cta.title}
      subtitle={SOIL_ANALYSIS_PAGE_CONTENT.cta.subtitle}
    />

    {/* Producers: Sample Collection & Steps */}
    <SoilSampleCollection />

    {/* Available Tests for Producers */}
    <SoilAvailableTests />

    {/* Researchers: Preparation, Forms & Researcher Tests */}
    <SoilResearchers />
  </main>
);
