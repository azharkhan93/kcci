"use client";

import React from "react";
import {
  STANDARDS_CONTENT,
  type StandardsData,
} from "@/app/constants/about";

export interface StandardsLedgerProps {
  data?: Partial<StandardsData>;
  className?: string;
}

export const StandardsLedger: React.FC<StandardsLedgerProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...STANDARDS_CONTENT,
    ...data,
    standards: data.standards || STANDARDS_CONTENT.standards,
  };

  return (
    <section
      className={`py-16 sm:py-20 bg-white border-b border-slate-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--nitrofix-green-lime)] animate-pulse" />
            {content.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-space text-slate-900 tracking-tight">
            {content.heading}
          </h2>
        </div>

        {/* Minimalist Architectural Divider Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b border-slate-200 py-4">
          {content.standards.map((val, idx) => {
            const ValIcon = val.icon;
            return (
              <div
                key={val.id || idx}
                className="py-6 md:py-4 px-0 md:px-8 first:pl-0 last:pr-0 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    STANDARD // 0{idx + 1}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors">
                    <ValIcon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-space text-slate-900 group-hover:text-emerald-900 transition-colors">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-work-sans leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
