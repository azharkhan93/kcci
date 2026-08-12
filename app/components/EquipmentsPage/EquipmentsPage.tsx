import React from "react";
import {
  EQUIPMENTS_CONTENT,
  FIELD_SAMPLING_EQUIPMENT,
  ANALYTICAL_INSTRUMENTS,
  SAMPLE_PREP_EQUIPMENT,
} from "@/app/constants/navigation";
import { ContentBlock } from "@/app/components/ContentBlock";
import { TestsGrid } from "@/app/components/TestsGrid";

const { intro, fieldSampling, analyticalInstruments, samplePrep } = EQUIPMENTS_CONTENT;

export const EquipmentsPage = (): React.ReactElement => (
  <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10">
    {/* Page Overview */}
    <ContentBlock section={intro} headingLevel="h1" />

    {/* Section 1: Analytical Instruments (reuses TestsGrid) */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <ContentBlock section={analyticalInstruments} headingLevel="h2" />
      <TestsGrid
        tests={ANALYTICAL_INSTRUMENTS}
        title="High-Precision Laboratory Instruments"
        subtitle="ICP-OES, Flame AAS, LECO Combustion Analyzer, and Automated Flow Analyzers."
      />
    </div>

    {/* Section 2: Field Sampling Equipment (reuses TestsGrid) */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <ContentBlock section={fieldSampling} headingLevel="h2" />
      <TestsGrid
        tests={FIELD_SAMPLING_EQUIPMENT}
        title="Field Sampling & Collection Tools"
        subtitle="Stainless steel augers, core probes, subsoil samplers, and hay core probes."
      />
    </div>

    {/* Section 3: Sample Preparation Equipment (reuses TestsGrid) */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <ContentBlock section={samplePrep} headingLevel="h2" />
      <TestsGrid
        tests={SAMPLE_PREP_EQUIPMENT}
        title="Sample Preparation & Digestion Apparatus"
        subtitle="Forced-air drying ovens, pulverizing sieving mills, and block digesters."
      />
    </div>
  </main>
);
