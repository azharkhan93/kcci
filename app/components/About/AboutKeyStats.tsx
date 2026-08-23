"use client";

import React from "react";
import { FlaskConical, Plane, Microscope, Award } from "lucide-react";

export interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STATS: StatItem[] = [
  {
    value: "15,000+",
    label: "Soil & Water Tests",
    description: "High-precision analytical profiling for growers, researchers, and government agricultural programs.",
    icon: FlaskConical,
  },
  {
    value: "50+",
    label: "Active Field Trials",
    description: "Longitudinal agronomic research spanning automated rainout shelters and precision nutrient plots.",
    icon: Microscope,
  },
  {
    value: "4",
    label: "UAV & Sensor Fleets",
    description: "Multispectral, hyperspectral, and thermal aerial imaging platforms with sub-centimeter ground resolution.",
    icon: Plane,
  },
  {
    value: "100+",
    label: "Scholarly Theses",
    description: "M.Sc. and Ph.D. dissertations conducted utilizing Division of Soil Science laboratory infrastructure.",
    icon: Award,
  },
];

export interface AboutKeyStatsProps {
  className?: string;
}

export const AboutKeyStats: React.FC<AboutKeyStatsProps> = ({ className = "" }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {STATS.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-gray-950 font-sans tracking-tight mb-1">
                {stat.value}
              </p>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4332] mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d99b26]">
                Institutional Impact
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1b4332]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
