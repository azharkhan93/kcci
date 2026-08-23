"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Building2, Clock, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/app/constants/researchProjects";

export interface ProjectHeaderProps {
  project: ProjectItem;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="w-full pb-8 sm:pb-10 border-b border-gray-100">
      {/* Back Link */}
      <Link
        href="/research-projects"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-[#2d6a4f] transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to All Research Projects</span>
      </Link>

      {/* Badges Row */}
      <div className="flex flex-wrap items-center gap-2.5 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-50 text-[#2d6a4f] border border-emerald-200/80">
          {project.category}
        </span>

        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#1b4332] border border-emerald-200/80">
          {project.year}
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          {project.status} Project
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-gray-950 uppercase tracking-tight leading-tight mb-6 font-sans">
        {project.title}
      </h1>

      {/* Metadata Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50/80 border border-gray-200/70 text-xs text-gray-700">
        <div className="flex items-center gap-2.5">
          <Building2 className="w-4 h-4 text-[#2d6a4f] flex-shrink-0" />
          <div>
            <span className="block text-[10px] uppercase font-bold text-gray-600">Funding Agency</span>
            <span className="font-bold text-gray-900 truncate block">{project.fundingAgency}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-[#1b4332] flex-shrink-0" />
          <div>
            <span className="block text-[10px] uppercase font-bold text-gray-600">Timeline / Duration</span>
            <span className="font-bold text-gray-900 truncate block">{project.duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <div>
            <span className="block text-[10px] uppercase font-bold text-gray-600">Trial Location</span>
            <span className="font-bold text-gray-900 truncate block">{project.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <div>
            <span className="block text-[10px] uppercase font-bold text-gray-600">Lead Investigator</span>
            <span className="font-bold text-gray-900 truncate block">{project.leadInvestigator}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
