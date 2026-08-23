"use client";

import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/app/constants/researchProjects";

export interface ProjectHeroMediaProps {
  project: ProjectItem;
}

export const ProjectHeroMedia: React.FC<ProjectHeroMediaProps> = ({ project }) => {
  return (
    <div className="w-full relative my-8 sm:my-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-md bg-gray-950">
      {/* Landscape Image */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px]">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center"
        />

        {/* Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent pointer-events-none" />

        {/* ── Key Metrics Overlay Chips (Bottom of Media) ── */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 bg-black/60 backdrop-blur-xl p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/15 shadow-xl text-white">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-2 text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 font-sans tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-gray-300 tracking-wider mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
