"use client";

import React from "react";
import { Sparkles, Lightbulb } from "lucide-react";
import { ProjectItem } from "@/app/constants/researchProjects";

export interface ProjectKeyFindingsProps {
  project: ProjectItem;
}

export const ProjectKeyFindings: React.FC<ProjectKeyFindingsProps> = ({ project }) => {
  return (
    <section className="w-full pt-8 sm:pt-10 border-t border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-[#1b4332]" />
        <h2 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight font-sans">
          Key Empirical Discoveries &amp; Impact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {project.keyFindings.map((finding, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-[#1b4332] mb-3 font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2 leading-snug">
                {finding.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                {finding.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
