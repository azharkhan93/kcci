"use client";

import React from "react";
import { Satellite, FlaskConical, Map, Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface SpecializationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SPECIALIZATIONS: SpecializationItem[] = [
  {
    id: "remote-sensing",
    title: "UAV & Satellite Remote Sensing",
    category: "Geospatial Analytics",
    description: "Multispectral, hyperspectral, and thermal aerial surveys capturing vegetation indices (NDVI, NDRE, CWSI) at millimetric ground resolution.",
    highlights: ["Sub-cm Canopy Mapping", "Thermal Water-Stress", "UAV Phenotyping"],
    href: "/research-projects",
    icon: Satellite,
  },
  {
    id: "soil-testing",
    title: "Analytical Soil & Water Chemistry",
    category: "Laboratory Science",
    description: "Automated benchtop spectrophotometry, ICP-OES elemental quantification, SMP buffer pH, and comprehensive heavy metal testing.",
    highlights: ["ICP-OES Multi-Element", "LECO CN Combustion", "48-Hour Turnaround"],
    href: "/soil-analysis",
    icon: FlaskConical,
  },
  {
    id: "gis-modeling",
    title: "Digital Soil Mapping & Variable Rate GIS",
    category: "Precision Agronomy",
    description: "Geostatistical spatial interpolation, elevation modeling, and prescription fertilizer mapping to eliminate over-application and runoff.",
    highlights: ["Prescription Fertility", "Topographic Wetness", "Soil Health Cards"],
    href: "/fertilizer",
    icon: Map,
  },
  {
    id: "climate-trials",
    title: "Rainout Shelter Drought Trials",
    category: "Climate Resilience",
    description: "Motorized automated rainout shelters equipped with minirhizotron optical root cameras and continuous in-situ moisture sensors.",
    highlights: ["Rainfall Exclusion", "In-Situ Root Depth", "Drought Kinetics"],
    href: "/research-projects/drap",
    icon: Sprout,
  },
];

export interface AboutSpecializationsProps {
  className?: string;
}

export const AboutSpecializations: React.FC<AboutSpecializationsProps> = ({
  className = "",
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* ── Section Header ── */}
      <div>
        <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#2d6a4f] mb-2">
          Core Capabilities
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
          What Sets Our Laboratory Apart
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl leading-relaxed">
          Combining laboratory-grade analytical wet chemistry with field-scale robotics and spatial machine learning algorithms.
        </p>
      </div>

      {/* ── Compact Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {SPECIALIZATIONS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Category Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2d6a4f]">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-1.5 group-hover:text-[#1b4332] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-3.5">
                  {item.description}
                </p>

                {/* Highlight Chips */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-gray-700 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-200/60"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-[#1b4332] hover:text-[#081c15] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Projects & Tests</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-gray-400 font-mono">Division Wing</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
