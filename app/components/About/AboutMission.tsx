"use client";

import React from "react";
import {
  Target,
  Compass,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  MapPin,
  Leaf,
  GraduationCap,
  Cpu,
  Activity,
  Layers,
  Award,
} from "lucide-react";

export interface AboutMissionProps {
  className?: string;
}

interface MissionGoal {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MISSION_GOALS: MissionGoal[] = [
  {
    number: "01",
    title: "Precision Analytical Diagnostics",
    description: "Equipping growers and orchardists with rapid, sub-ppm soil, water, and foliar laboratory testing.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Drone & GIS Spatial Modeling",
    description: "Mapping spatial and temporal soil nutrient dynamics using drone multispectral and GIS interpolation.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Climate-Resilient Agronomy",
    description: "Developing adaptive crop management and drought tolerance protocols for temperate Himalayan zones.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Postgraduate Academic Training",
    description: "Fostering next-generation master's and doctoral research in digital soil science and geospatial tech.",
    icon: GraduationCap,
  },
];

const VISION_GOALS: MissionGoal[] = [
  {
    number: "01",
    title: "Premier Himalayan AgTech Hub",
    description: "Establishing SKUAST-Kashmir as the leading northern Himalayan center for digital precision agriculture.",
    icon: Award,
  },
  {
    number: "02",
    title: "In-Situ Sensor & Digital Twins",
    description: "Integrating real-time root zone profiling and IoT moisture telemetry into predictive crop digital twins.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Automated Phenotyping Trials",
    description: "Standardizing motorized rainout shelter infrastructure for drought kinetics and cultivar resilience.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Actionable Advisory Translation",
    description: "Translating benchtop ICP-OES and spectral findings into personalized, localized farmer fertilizer advisories.",
    icon: Layers,
  },
];

export const AboutMission: React.FC<AboutMissionProps> = ({ className = "" }) => {
  return (
    <div className={`space-y-12 sm:space-y-16 ${className}`}>
      {/* ── Block 1: Our Core Mission ── */}
      <div className="relative bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-48 bg-[#1b4332]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#2d6a4f] mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Our Core Mission</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight mb-3">
            Empowering Agriculture Through Precision Soil Diagnostics
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            The Division of Soil Science & Agricultural Chemistry at SKUAST-Kashmir delivers accredited wet chemistry, proximal spectral sensing, and precision GIS mapping to sustain long-term soil health and productivity.
          </p>
        </div>

        {/* 4 Aligned Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MISSION_GOALS.map((goal) => {
            const Icon = goal.icon;
            return (
              <div
                key={goal.number}
                className="bg-gray-50/80 hover:bg-[#1b4332]/5 rounded-2xl border border-gray-200/70 hover:border-[#1b4332]/30 p-5 transition-all duration-200 flex flex-col justify-between group/item"
              >
                <div>
                  {/* Top Row: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center group-hover/item:scale-105 group-hover/item:bg-[#1b4332] group-hover/item:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#d99b26]">
                      {goal.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-950 tracking-tight leading-snug mb-2 group-hover/item:text-[#1b4332] transition-colors">
                    {goal.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center gap-1 text-[11px] font-semibold text-[#1b4332]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Mandated Objective</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Block 2: Strategic Vision ── */}
      <div className="relative bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-48 bg-[#d99b26]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#8a5d0a] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#d99b26]" />
            <span>Strategic Vision</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight mb-3">
            A Leading Himalayan Hub for Digital Soil & Agronomy Twins
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Bridging field-scale farm operations with automated aerial telemetry, IoT sensors, and high-throughput spectrometry to future-proof valley agriculture against emerging climate volatility.
          </p>
        </div>

        {/* 4 Aligned Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VISION_GOALS.map((goal) => {
            const Icon = goal.icon;
            return (
              <div
                key={goal.number}
                className="bg-gray-50/80 hover:bg-[#d99b26]/5 rounded-2xl border border-gray-200/70 hover:border-[#d99b26]/30 p-5 transition-all duration-200 flex flex-col justify-between group/item"
              >
                <div>
                  {/* Top Row: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d99b26]/15 text-[#d99b26] flex items-center justify-center group-hover/item:scale-105 group-hover/item:bg-[#d99b26] group-hover/item:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#1b4332] bg-[#1b4332]/10 px-2 py-0.5 rounded-md">
                      {goal.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-950 tracking-tight leading-snug mb-2 group-hover/item:text-[#8a5d0a] transition-colors">
                    {goal.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center gap-1 text-[11px] font-semibold text-[#8a5d0a]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d99b26]" />
                  <span>2030 Precision Milestone</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
