"use client";

import React from "react";
import {
  NITROFIX_HOW_IT_WORKS_CONTENT,
  type HowItWorksData,
} from "@/app/constants/nitrofixProduct";

export interface NitrofixHowItWorksProps {
  data?: Partial<HowItWorksData>;
  className?: string;
}

export const NitrofixHowItWorks: React.FC<NitrofixHowItWorksProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...NITROFIX_HOW_IT_WORKS_CONTENT,
    ...data,
    paragraphs: data.paragraphs || NITROFIX_HOW_IT_WORKS_CONTENT.paragraphs,
    pillars: data.pillars || NITROFIX_HOW_IT_WORKS_CONTENT.pillars,
  };

  return (
    <section
      className={`py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--nitrofix-green-lime)] animate-pulse" />
            {content.eyebrow}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-space tracking-tight leading-tight">
            <span>{content.headingPrefix}</span>
            <span className="text-gradient-leaf">{content.headingHighlight}</span>
          </h2>

          <div className="space-y-2 text-sm sm:text-base text-slate-600 font-work-sans leading-relaxed">
            {content.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const badgeColor =
              idx === 0
                ? "badge-nitrofix-blue"
                : idx === 1
                ? "badge-nitrofix"
                : "badge-nitrofix-orange";

            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      MECHANISM // {pillar.number}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-space text-slate-900 group-hover:text-emerald-950 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-work-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
