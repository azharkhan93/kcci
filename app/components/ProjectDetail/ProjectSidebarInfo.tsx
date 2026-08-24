"use client";

import React from "react";
import { Cpu, Users, Tag, Mail } from "lucide-react";
import { ProjectItem } from "@/app/constants/researchProjects";

export interface ProjectSidebarInfoProps {
  project: ProjectItem;
}

export const ProjectSidebarInfo: React.FC<ProjectSidebarInfoProps> = ({ project }) => {
  return (
    <aside className="w-full space-y-6">
      {/* ── Equipment & Instrumentation Card ── */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="w-4 h-4 text-[#2d6a4f]" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900">
            Instrumentation &amp; Equipment
          </h3>
        </div>

        <ul className="space-y-2.5">
          {project.equipment.map((eq, idx) => (
            <li key={idx} className="text-xs text-gray-700 font-medium flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] mt-1.5 flex-shrink-0" />
              <span>{eq}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Lead Research Team ── */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-[#1b4332]" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900">
            Research Investigators
          </h3>
        </div>

        <ul className="space-y-2.5">
          {project.leadTeam.map((member, idx) => (
            <li key={idx} className="text-xs text-gray-700 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-200 border border-emerald-400 flex-shrink-0" />
              <span>{member}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Tags ── */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-gray-500" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900">
            Research Tags
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs text-gray-600 font-medium">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-gray-500 hover:text-[#2d6a4f] transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Collaboration CTA Card ── */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#2d6a4f] to-[#1b4332] text-white shadow-md">
        <h4 className="text-base font-extrabold uppercase tracking-tight mb-2">
          Collaborate on this Trial
        </h4>
        <p className="text-xs text-emerald-100 leading-relaxed mb-4">
          Interested in joint trials, dataset access, or precision instrumentation consultation?
        </p>
        <a
          href="mailto:contact@skuasth-soillab.org"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-[#1b4332] hover:bg-emerald-50 text-xs font-bold transition-all shadow-xs"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Inquire with Lab Lead</span>
        </a>
      </div>
    </aside>
  );
};
