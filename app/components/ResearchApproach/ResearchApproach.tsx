"use client";

import React from "react";
import Image from "next/image";
import { Droplets, Sparkles, Plane, SunMedium, Activity } from "lucide-react";

export interface ResearchPillar {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: "water",
    title: "PRECISION WATER MANAGEMENT",
    category: "Hydrology & IoT",
    imageSrc: "/research/water-management.jpg",
    description: "In-situ soil moisture monitoring, smart variable rate irrigation & drip optimization.",
    icon: Droplets,
  },
  {
    id: "soil",
    title: "CROP & SOIL PROXIMAL SENSING",
    category: "Spectrometry",
    imageSrc: "/research/soil-sensing.jpg",
    description: "Active canopy reflectance, optical spectrometry & rapid lab-to-field nutrient profiling.",
    icon: Sparkles,
  },
  {
    id: "spatial",
    title: "SPATIAL & TEMPORAL ESTIMATES",
    category: "Drone & GIS",
    imageSrc: "/research/drone-spatial.jpg",
    description: "UAV multispectral mapping, high-res satellite remote sensing & GIS spatial analytics.",
    icon: Plane,
  },
  {
    id: "climate",
    title: "CLIMATE RESILIENCY",
    category: "Agronomy",
    imageSrc: "/research/climate-resiliency.jpg",
    description: "Drought adaptation research, field stress tolerance trials & crop resilience analytics.",
    icon: SunMedium,
  },
  {
    id: "modeling",
    title: "PREDICTION MODELING",
    category: "Digital Twin",
    imageSrc: "/research/prediction-modeling.jpg",
    description: "Digital twin crop simulations, AI moisture dynamics & predictive yield forecasting.",
    icon: Activity,
  },
];

export const ResearchApproach = (): React.ReactElement => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Section Kicker - Simple text format */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#2d6a4f]">
              Research, Teaching and Outreach Approach
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-gray-950 uppercase tracking-tight leading-[1.18] sm:leading-[1.15] mb-5">
            As Precision Agronomists, We Unlock Farm Potential Through Data-Driven Crop Management Solutions.
          </h2>

          {/* Key Areas Subhead */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-emerald-300" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-emerald-800">
              Key Areas
            </span>
            <div className="h-[1px] w-8 bg-emerald-300" />
          </div>
        </div>

        {/* ── 5 Pillar Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {RESEARCH_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col bg-white rounded-2xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={pillar.imageSrc}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />

                  {/* Subtle Gradient Shade on bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Micro Category Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-gray-900 bg-white/95 backdrop-blur-md">
                      <Icon className="w-3 h-3 text-emerald-700" />
                      {pillar.category}
                    </span>
                  </div>
                </div>

                {/* Card Content & Title */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Bold Title matching reference design */}
                    <h3 className="text-sm sm:text-[15px] font-black text-gray-900 uppercase tracking-tight leading-snug group-hover:text-emerald-800 transition-colors duration-200 mb-2">
                      {pillar.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Subtle Bottom Accent Indicator */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase group-hover:underline">
                      Explore Area →
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
