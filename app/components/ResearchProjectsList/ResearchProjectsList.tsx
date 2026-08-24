"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink, Calendar, Building2, Tag, CheckCircle2 } from "lucide-react";
import { Button } from "../Button";
import {
  ProjectItem,
  RESEARCH_PROJECTS_DATA,
} from "@/app/constants/researchProjects";

export interface ResearchProjectsListProps {
  projects?: ProjectItem[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  limit?: number;
  viewAllHref?: string;
  onProjectClick?: (project: ProjectItem) => void;
  className?: string;
}

export const ResearchProjectsList: React.FC<ResearchProjectsListProps> = ({
  projects = RESEARCH_PROJECTS_DATA,
  title = "RESEARCH PROJECTS",
  subtitle = "Explore our cutting-edge field research initiatives, automated trials, and precision agronomy research programs.",
  showFilters = true,
  limit,
  viewAllHref,
  onProjectClick,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    projects.forEach((p) => cats.add(p.category));
    return ["All", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const displayedProjects = useMemo(() => {
    if (limit && limit > 0) {
      return filteredProjects.slice(0, limit);
    }
    return filteredProjects;
  }, [filteredProjects, limit]);

  return (
    <section className={`w-full bg-white py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ── Section Title ── */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-950 uppercase tracking-tight leading-none mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* ── Filter Pills (Optional) ── */}
          {showFilters && categories.length > 2 && (
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar mt-6 pt-2 pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#2d6a4f] text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Projects List (Matching Reference Design Layout) ── */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {displayedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/research-projects/${project.id}`}
              onClick={() => onProjectClick?.(project)}
              className="group relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 p-4 sm:p-6 rounded-2xl border border-gray-200/80 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer block"
            >
              {/* ── Project Thumbnail Image (Left) ── */}
              <div className="relative w-full md:w-[360px] lg:w-[420px] aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status indicator - simple text */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 bg-white/95 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* ── Project Content Details (Right) ── */}
              <div className="flex flex-col justify-between flex-1 min-w-0 h-full py-1">
                <div>
                  {/* Year & Category Tag */}
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider">
                    <span className="font-bold text-[#2d6a4f]">
                      {project.year}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-950 tracking-tight leading-snug group-hover:text-[#2d6a4f] transition-colors duration-200 mb-3">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Meta Details - Simple text format */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-600 mb-5">
                    {project.fundingAgency && (
                      <div className="inline-flex items-center gap-1.5 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-[#2d6a4f]" />
                        <span>{project.fundingAgency}</span>
                      </div>
                    )}
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-gray-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── View Project Action Link (Matching Reference Look) ── */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2d6a4f] group-hover:text-[#1b4332] group-hover:translate-x-1 transition-all duration-200">
                    <span>{project.linkText || "VIEW PROJECT"}</span>
                    <ChevronRight className="w-4 h-4 text-[#2d6a4f] group-hover:translate-x-1 transition-transform" />
                  </span>

                  <span className="text-xs text-gray-400 font-medium group-hover:text-gray-600">
                    Read Report →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

       
        {viewAllHref && (
          <div className="mt-12 text-center">
            <Link href={viewAllHref}>
              <Button variant="primary">
                Explore All Research Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
