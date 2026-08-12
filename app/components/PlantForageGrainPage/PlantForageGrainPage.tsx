import React from "react";
import {
  PLANT_FORAGE_GRAIN_CONTENT,
  PLANT_PRODUCER_TESTS,
  PLANT_RESEARCHER_TESTS,
} from "@/app/constants/navigation";
import { ContentBlock } from "@/app/components/ContentBlock";
import { TestsGrid } from "@/app/components/TestsGrid";

const {
  intro,
  producers,
  producersCollection,
  researchers,
  researchersCollection,
} = PLANT_FORAGE_GRAIN_CONTENT;

export const PlantForageGrainPage = (): React.ReactElement => (
  <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10">
    {/* Page Title & Overview */}
    <ContentBlock section={intro} headingLevel="h1" />

    {/* Section 1: For Producers */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <ContentBlock section={producers} headingLevel="h2" />
      <ContentBlock section={producersCollection} headingLevel="h3" />
      <TestsGrid
        tests={PLANT_PRODUCER_TESTS}
        title="Available Tests for Producers"
        subtitle="Digestion and extraction methods for producer plant, forage, and grain samples."
      />
    </div>

    {/* Section 2: For Researchers */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <ContentBlock section={researchers} headingLevel="h2" />
      <ContentBlock section={researchersCollection} headingLevel="h3" />
      <TestsGrid
        tests={PLANT_RESEARCHER_TESTS}
        title="Available Testing for Researchers"
        subtitle="Analytical procedures for experimental tissue, carbon/nitrogen combustion, and protein determination."
      />
    </div>
  </main>
);
