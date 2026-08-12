import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import {
  WATER_ANALYSIS_CONTENT,
  WATER_AVAILABLE_TESTS,
} from "@/app/constants/navigation";
import { ContentBlock } from "@/app/components/ContentBlock";
import { TestsGrid } from "@/app/components/TestsGrid";

const { intro, sampleCollection, forms } = WATER_ANALYSIS_CONTENT;

export const WaterAnalysisPage = (): React.ReactElement => (
  <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10">
    {/* Page Title & Intro */}
    <ContentBlock section={intro} headingLevel="h1" />

    {/* Sample Collection */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <ContentBlock section={sampleCollection} headingLevel="h2" />
    </div>

    {/* Available Testing — reuses TestsGrid */}
    <div className="border-t border-gray-200 pt-8 space-y-6">
      <TestsGrid
        tests={WATER_AVAILABLE_TESTS}
        title="Available Testing"
        subtitle="Common irrigation and nutrient water quality packages offered by SKUAST-K Lab."
      />
    </div>

    {/* Forms */}
    <div className="border-t border-gray-200 pt-8 space-y-4">
      <h3 className="text-xl font-bold text-[#582c83]">{forms.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {forms.groups.map((group) => (
          <div key={group.label} className="space-y-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{group.label}</p>
            {group.links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 text-[#582c83] text-sm font-semibold hover:underline"
              >
                <FileText className="w-4 h-4 flex-shrink-0 text-[#d99b26]" />
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  </main>
);
