import React from "react";
import {
  LEAF_ANALYSIS_CONTENT,
  LEAF_SAMPLE_STEPS,
  LEAF_AVAILABLE_TESTS,
} from "@/app/constants/navigation";
import { ContentBlock } from "@/app/components/ContentBlock";
import { SampleSteps } from "@/app/components/SampleSteps";
import { TestsGrid } from "@/app/components/TestsGrid";

const { intro, collection } = LEAF_ANALYSIS_CONTENT;

export const LeafAnalysisPage = (): React.ReactElement => (
  <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10">
    {/* Intro Overview */}
    <ContentBlock section={intro} headingLevel="h1" />

    {/* Collection Guidelines */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <ContentBlock section={collection} headingLevel="h2" />
    </div>

    {/* Step-by-Step Collection Process — reuses SampleSteps */}
    <div className="border-t border-gray-200 pt-8">
      <SampleSteps steps={LEAF_SAMPLE_STEPS} title="Leaf Sample Collection Process" />
    </div>

    {/* Available Tests — reuses TestsGrid */}
    <div className="border-t border-gray-200 pt-8">
      <TestsGrid
        tests={LEAF_AVAILABLE_TESTS}
        title="Available Leaf Testing Packages"
        subtitle="Comprehensive foliar tissue diagnostics for field crops, vegetables, and temperate fruit orchards."
      />
    </div>
  </main>
);
