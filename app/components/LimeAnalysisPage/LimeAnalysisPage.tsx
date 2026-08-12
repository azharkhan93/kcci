import React from "react";
import { LIME_ANALYSIS_CONTENT } from "@/app/constants/navigation";
import { ContentBlock } from "@/app/components/ContentBlock";

const { intro, availableTesting, sampleCollection } = LIME_ANALYSIS_CONTENT;

export const LimeAnalysisPage = (): React.ReactElement => (
  <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10">
    <ContentBlock section={intro} headingLevel="h1" />
    <div className="border-t border-gray-200 pt-8 space-y-8">
      <ContentBlock section={availableTesting} headingLevel="h2" />
      <ContentBlock section={sampleCollection} headingLevel="h2" />
    </div>
  </main>
);
