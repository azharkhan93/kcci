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
      className={`py-16 sm:py-20 bg-[#F3EAE0] border-b border-[#6E2C00]/15 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BB5D0E] animate-pulse" />
            {content.eyebrow}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B1203] font-space tracking-tight leading-tight">
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
                className="group p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#6E2C00]/15 hover:border-[#BB5D0E]/55 hover:shadow-md transition-all duration-200 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#BB5D0E]/12 group-hover:bg-[#6E2C00] text-[#6E2C00] group-hover:text-[#FFD37C] flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm sm:text-base font-bold font-space text-[#2B1203] group-hover:text-[#6E2C00] transition-colors">
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
