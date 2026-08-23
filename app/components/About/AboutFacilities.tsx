"use client";

import React from "react";
import { Microscope, Zap, Shield, Cpu, Wind, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface FacilityItem {
  name: string;
  category: string;
  description: string;
  specs: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FACILITIES: FacilityItem[] = [
  {
    name: "ICP-OES Spectrometry Suite",
    category: "Analytical Chemistry",
    description: "Inductively Coupled Plasma Optical Emission Spectrometry for simultaneous sub-ppm detection of macro, micro, and toxic trace elements.",
    specs: "Multi-element simultaneous detection (P, K, Ca, Mg, S, Fe, Zn, Cu, Mn, B, Pb, Cd)",
    icon: Zap,
  },
  {
    name: "Flame Atomic Absorption (AAS)",
    category: "Cation Quantification",
    description: "High-precision hollow cathode lamp spectrophotometer dedicated to exchangeable bases and soil cation exchange capacity (CEC).",
    specs: "Exchangeable Ca²⁺, Mg²⁺, K⁺, Na⁺ with standardized background correction",
    icon: Microscope,
  },
  {
    name: "Automated Rainout Shelters",
    category: "Climate Infrastructure",
    description: "Motorized steel rainout shelters activated by precision rain sensors for uninterrupted controlled drought stress experiments.",
    specs: "Real-time rainfall exclusion with automated motorized drive & minirhizotron root tubes",
    icon: Wind,
  },
  {
    name: "LECO CN Combustion Analyzer",
    category: "Elemental Carbon/Nitrogen",
    description: "High-temperature furnace combustion determining total organic carbon (TOC) and total nitrogen in soil and plant tissue.",
    specs: "Direct dry combustion at 950°C–1050°C with thermal conductivity detection",
    icon: Cpu,
  },
];

export interface AboutFacilitiesProps {
  className?: string;
}

export const AboutFacilities: React.FC<AboutFacilitiesProps> = ({
  className = "",
}) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Research Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            State-of-the-Art Analytical Instrumentation
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            Our Shalimar facility houses advanced analytical suites supporting accredited soil, plant tissue, and agricultural water diagnostics.
          </p>
        </div>

        <Link
          href="/equipments"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4332] hover:text-[#081c15] self-start sm:self-auto hover:underline"
        >
          <span>View All Equipment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* ── Facilities Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FACILITIES.map((facility, idx) => {
          const Icon = facility.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full border border-[#1b4332]/20">
                    {facility.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-950 mb-1.5 group-hover:text-[#1b4332] transition-colors">
                  {facility.name}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {facility.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="font-medium truncate max-w-[280px]">
                  {facility.specs}
                </span>
                <span className="font-bold text-[#1b4332] flex-shrink-0">Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
