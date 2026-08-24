"use client";

import React from "react";
import { CheckCircle2, FileText, Target } from "lucide-react";
import { ProjectItem } from "@/app/constants/researchProjects";

export interface ProjectOverviewProps {
  project: ProjectItem;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* ── Research Overview & Background ── */}
      <section className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#2d6a4f]" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight">
            Research Background &amp; Methodology
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
          {project.overview}
        </p>
      </section>

      {/* ── Objectives Checklist ── */}
      <section className="space-y-4 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-[#2d6a4f]" />
          <h3 className="text-lg sm:text-xl font-extrabold text-[#1b4332] uppercase tracking-tight">
            Key Objectives &amp; Milestones
          </h3>
        </div>

        <ul className="space-y-3">
          {project.objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                {obj}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
