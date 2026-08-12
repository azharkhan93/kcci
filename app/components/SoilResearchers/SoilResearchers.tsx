import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import {
  SOIL_RESEARCHERS_CONTENT,
  RESEARCHER_AVAILABLE_TESTS,
} from "@/app/constants/navigation";
import { TestsGrid } from "@/app/components/TestsGrid";

const { intro, preparation, collection, forms } = SOIL_RESEARCHERS_CONTENT;

export const SoilResearchers = (): React.ReactElement => (
  <div className="space-y-8 border-t border-gray-200 pt-8 w-full">

    {/* Intro */}
    <section className="space-y-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#582c83] tracking-tight">{intro.title}</h2>
      {intro.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-800 text-base md:text-lg leading-relaxed">{p}</p>
      ))}
    </section>

    {/* Preparation + Collection: side by side */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <section className="border border-gray-200 rounded-xl p-5 space-y-2">
        <h3 className="font-bold text-gray-900 text-base">{preparation.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{preparation.description}</p>
      </section>
      <section className="border border-gray-200 rounded-xl p-5 space-y-2">
        <h3 className="font-bold text-gray-900 text-base">{collection.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{collection.description}</p>
      </section>
    </div>

    {/* Forms */}
    <section className="space-y-4">
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
    </section>

    {/* Researcher Tests — reuses TestsGrid */}
    <TestsGrid
      tests={RESEARCHER_AVAILABLE_TESTS}
      title="Available Tests for Researchers"
      subtitle="Methods based on NCR-221 North Central Region soil testing procedures."
    />

  </div>
);
