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

      {/* Badges Row - Simple text format */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-4 text-xs font-semibold uppercase tracking-wider">
        <span className="text-[#2d6a4f] font-bold">
          {project.category}
        </span>
        <span className="text-gray-300">•</span>
        <span className="text-gray-600 font-bold">
          {project.year}
        </span>
        <span className="text-gray-300">•</span>
        <span className="inline-flex items-center gap-1.5 text-amber-700 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {project.status} Project
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-gray-950 uppercase tracking-tight leading-tight mb-6">
        {project.title}
      </h1>

      {/* Metadata Strip - Clean layout with perfect alignment and no overlapping */}
      <div className="py-5 my-6 border-y border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-xs text-gray-700">
        <div className="flex items-start gap-2.5 min-w-0">
          <Building2 className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-0.5">Funding Agency</span>
            <span className="font-bold text-gray-900 leading-snug block break-words">{project.fundingAgency}</span>
          </div>
        </div>

        <div className="flex items-start gap-2.5 min-w-0">
          <Clock className="w-4 h-4 text-[#1b4332] flex-shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-0.5">Timeline / Duration</span>
            <span className="font-bold text-gray-900 leading-snug block break-words">{project.duration}</span>
          </div>
        </div>

        <div className="flex items-start gap-2.5 min-w-0">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-0.5">Trial Location</span>
            <span className="font-bold text-gray-900 leading-snug block break-words">{project.location}</span>
          </div>
        </div>

        <div className="flex items-start gap-2.5 min-w-0">
          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-0.5">Lead Investigator</span>
            <span className="font-bold text-gray-900 leading-snug block break-words">{project.leadInvestigator}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
