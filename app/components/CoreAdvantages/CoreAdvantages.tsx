"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import {
  CORE_ADVANTAGES_CONTENT,
  type CoreAdvantagesData,
} from "@/app/constants/about";

export interface CoreAdvantagesProps {
  data?: Partial<CoreAdvantagesData>;
  className?: string;
}

export const CoreAdvantages: React.FC<CoreAdvantagesProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...CORE_ADVANTAGES_CONTENT,
    ...data,
    telemetryHub: {
      ...CORE_ADVANTAGES_CONTENT.telemetryHub,
      ...(data.telemetryHub || {}),
      microGauges:
        data.telemetryHub?.microGauges ||
        CORE_ADVANTAGES_CONTENT.telemetryHub.microGauges,
    },
    pillars: data.pillars || CORE_ADVANTAGES_CONTENT.pillars,
  };

  return (
    <section
      className={`py-16 sm:py-24 bg-[#F3EAE0] border-b border-[#6E2C00]/15 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BB5D0E] animate-pulse" />
            {content.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B1203] font-space tracking-tight leading-tight">
            <span>{content.headingPrefix}</span>
            <span className="text-gradient-leaf">{content.headingHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#514646] font-work-sans">
            {content.subtitle}
          </p>
        </div>

        {/* Asymmetrical 2-Column Precision Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 cols): Dark Bark (#6E2C00) & Saffron Lacquer Telemetry Hub */}
          <div className="lg:col-span-5 relative rounded-3xl bg-gradient-to-br from-[#6E2C00] via-[#451B02] to-[#2B1203] text-[#FBF7F2] p-6 sm:p-8 border border-[#D8992E]/40 shadow-2xl overflow-hidden">
            {/* Ambient Kashmir Autumn Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#BB5D0E]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD37C]/12 rounded-full blur-3xl pointer-events-none" />

            {/* Decorative Kashmiri Khatamband Mandala SVG */}
            <svg
              className="absolute right-2 top-4 w-40 h-40 opacity-20 pointer-events-none"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#FFD37C"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <polygon
                points="80,14 98,62 146,80 98,98 80,146 62,98 14,80 62,62"
                stroke="#D8992E"
                strokeWidth="1.2"
                fill="none"
              />
              <circle cx="80" cy="80" r="38" stroke="#A61A28" strokeWidth="1.4" />
              <circle cx="80" cy="35" r="3" fill="#FFD37C" />
              <circle cx="125" cy="80" r="3" fill="#D8992E" />
              <circle cx="80" cy="125" r="3" fill="#A61A28" />
              <circle cx="35" cy="80" r="3" fill="#FFD37C" />
            </svg>

            <div className="relative z-10 space-y-6">
              {/* Console Status Tag */}
              <div className="flex items-center justify-between border-b border-[#FFD37C]/15 pb-4">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#FFD37C]">
                  <span className="w-2 h-2 rounded-full bg-[#FFD37C] animate-ping" />
                  <span>{content.telemetryHub.tag}</span>
                </div>
                <span className="text-[10px] font-mono text-[#FBF7F2]/60">
                  {content.telemetryHub.systemId}
                </span>
              </div>

              {/* Primary Metric Readout */}
              <div className="space-y-1.5 py-2">
                <span className="text-xs font-mono text-[#D8992E] uppercase tracking-wider block">
                  {content.telemetryHub.metricLabel}
                </span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-space text-white tracking-tight">
                  <span className="bg-gradient-to-r from-[#FFD37C] via-[#D8992E] to-[#FBF7F2] bg-clip-text text-transparent">
                    {content.telemetryHub.metricValue}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#FBF7F2]/80 font-work-sans">
                  {content.telemetryHub.metricDescription}
                </p>
              </div>

              {/* Micro Telemetry Matrix Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#FFD37C]/15">
                {content.telemetryHub.microGauges.map((gauge, gIdx) => (
                  <div
                    key={gIdx}
                    className="p-3 rounded-xl bg-white/5 border border-[#FFD37C]/15 space-y-1"
                  >
                    <span className="text-[10px] font-mono text-[#FFD37C] uppercase block">
                      {gauge.label}
                    </span>
                    <span className="text-xl font-bold font-space text-white">
                      {gauge.value}
                    </span>
                    <span className="text-[10px] text-[#FBF7F2]/65 font-work-sans block">
                      {gauge.sublabel}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer Assurance Tag */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFD37C]/90 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#D8992E]" />
                <span>{content.telemetryHub.assurance}</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Connected Precision Rail & Strata Rows */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8 space-y-6">
            {/* Continuous Vertical Glowing Rail Line */}
            <div className="absolute left-2 sm:left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#6E2C00] via-[#BB5D0E] to-[#FFD37C]/50" />

            {content.pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const badgeColor =
                idx === 0
                  ? "badge-nitrofix"
                  : idx === 1
                  ? "badge-nitrofix-orange"
                  : "badge-nitrofix-blue";

              return (
                <div key={pillar.id || idx} className="relative pl-6 sm:pl-8 group">
                 
                  <div className="absolute -left-[14px] sm:-left-[18px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFFDF9] border-2 border-[#7E393F] text-[#6E2C00] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#6E2C00] group-hover:text-[#FFD37C] transition-all duration-200">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>

                 
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] hover:bg-white border border-[#6E2C00]/15 hover:border-[#BB5D0E]/55 hover:shadow-md transition-all duration-300 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#514646]/70">
                          {pillar.number} {"//"}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${badgeColor}`}
                        >
                          {pillar.badge}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-[#6E2C00] bg-[#FFD37C]/20 px-2 py-0.5 rounded border border-[#D8992E]/35">
                        {pillar.metricLabel}:{" "}
                        <strong className="text-[#A61A28]">{pillar.metric}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-space text-[#2B1203] group-hover:text-[#6E2C00] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#514646] font-work-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
