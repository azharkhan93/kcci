"use client";

import React from "react";
import {
  NITROFIX_WHO_WE_SERVE_CONTENT,
  type WhoWeServeData,
} from "@/app/constants/nitrofixProduct";

export interface NitrofixWhoWeServeProps {
  data?: Partial<WhoWeServeData>;
  className?: string;
}

export const NitrofixWhoWeServe: React.FC<NitrofixWhoWeServeProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...NITROFIX_WHO_WE_SERVE_CONTENT,
    ...data,
    groups: data.groups || NITROFIX_WHO_WE_SERVE_CONTENT.groups,
  };

  return (
    <section
      className={`py-16 sm:py-20 bg-[#fafcfb] border-b border-slate-200/80 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--nitrofix-green-lime)] animate-pulse" />
            {content.eyebrow}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-space tracking-tight leading-tight">
            <span>{content.headingPrefix}</span>
            <span className="text-gradient-leaf">{content.headingHighlight}</span>
          </h2>
        </div>

        {/* Minimal Clean Grid: Only Section Name & Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {content.groups.map((group, idx) => {
            const Icon = group.icon;

            return (
              <div
                key={group.id || idx}
                className="group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm sm:text-base font-bold font-space text-slate-900 group-hover:text-emerald-950 transition-colors">
                  {group.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
