import React from "react";
import {
  NUTRIENT_RECOMMENDATIONS_CONTENT,
  NUTRIENT_CALCULATORS_AND_TOOLS,
  NUTRIENT_PUBLICATIONS,
  SoilTest,
} from "@/app/constants/navigation";
import { ContentBlock } from "@/app/components/ContentBlock";
import { TestsGrid } from "@/app/components/TestsGrid";

export interface FertilizerRecommendationsProps {
  intro?: typeof NUTRIENT_RECOMMENDATIONS_CONTENT.intro;
  interpretations?: typeof NUTRIENT_RECOMMENDATIONS_CONTENT.interpretations;
  strategies?: typeof NUTRIENT_RECOMMENDATIONS_CONTENT.strategies;
  tools?: SoilTest[];
  publications?: SoilTest[];
  className?: string;
}

export const FertilizerRecommendations = ({
  intro = NUTRIENT_RECOMMENDATIONS_CONTENT.intro,
  interpretations = NUTRIENT_RECOMMENDATIONS_CONTENT.interpretations,
  strategies = NUTRIENT_RECOMMENDATIONS_CONTENT.strategies,
  tools = NUTRIENT_CALCULATORS_AND_TOOLS,
  publications = NUTRIENT_PUBLICATIONS,
  className = "",
}: FertilizerRecommendationsProps): React.ReactElement => {
  return (
    <main className={`flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10 ${className}`}>
      {/* ── Page Header & Overview ─────────────────────────── */}
      <ContentBlock section={intro} headingLevel="h1" />

      {/* ── Soil Interpretations & Guidelines ─────────────── */}
      <div className="border-t border-gray-200 pt-8 space-y-6">
        <ContentBlock section={interpretations} headingLevel="h2" />
      </div>

      {/* ── Calculators and Decision Tools (Reuses TestsGrid) ── */}
      <div className="border-t border-gray-200 pt-8">
        <TestsGrid
          tests={tools}
          title="Calculators & Decision Support Tools"
          subtitle="Excel workbooks and interactive mobile/web applications for crop fertilizer planning."
        />
      </div>

      {/* ── Extension Publications & Resources (Reuses TestsGrid) ── */}
      <div className="border-t border-gray-200 pt-8">
        <TestsGrid
          tests={publications}
          title="Soil & Fertilizer Extension Publications"
          subtitle="Technical guides, nutrient considerations, acid/saline soil management, and urea loss prevention."
        />
      </div>

      {/* ── Application Strategies & Regulations ───────────── */}
      <div className="border-t border-gray-200 pt-8 space-y-6">
        <ContentBlock section={strategies} headingLevel="h2" />
      </div>
    </main>
  );
};
