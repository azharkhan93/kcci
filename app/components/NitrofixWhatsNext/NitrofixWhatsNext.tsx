"use client";

import React from "react";
import { Sparkles, Workflow, Sprout, ArrowRight } from "lucide-react";
import {
  NITROFIX_WHATS_NEXT_CONTENT,
  type WhatsNextData,
} from "@/app/constants/nitrofixProduct";

export interface NitrofixWhatsNextProps {
  data?: Partial<WhatsNextData>;
  className?: string;
}

export const NitrofixWhatsNext: React.FC<NitrofixWhatsNextProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...NITROFIX_WHATS_NEXT_CONTENT,
    ...data,
    paragraphs: data.paragraphs || NITROFIX_WHATS_NEXT_CONTENT.paragraphs,
    horizons: data.horizons || NITROFIX_WHATS_NEXT_CONTENT.horizons,
  };

  return (
    <section
      className={`py-16 sm:py-20 bg-white border-b border-slate-100 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Narrative Context */}
          <div className="lg:col-span-5 space-y-5 text-left sticky top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--nitrofix-green-lime)] animate-pulse" />
              {content.eyebrow}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-space tracking-tight leading-tight">
              <span>{content.headingPrefix}</span>
              <span className="text-gradient-leaf">{content.headingHighlight}</span>
            </h2>

            <div className="relative pl-4 border-l-2 border-emerald-500/40 space-y-3">
              {content.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-xs sm:text-sm text-slate-600 font-work-sans leading-relaxed ${
                    idx === 0 ? "text-slate-800 font-medium sm:text-base" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50/80 px-3 py-2 rounded-xl border border-emerald-200/60 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>PLATFORM HORIZONS // 2026+</span>
            </div>
          </div>

          {/* Right Column: Unique Progressive Timeline / List */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8">
            {/* Continuous Vertical Laser Trail */}
            <div className="absolute left-2 sm:left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600/20" />

            <ul role="list" className="space-y-6">
              {content.horizons.map((h, idx) => {
                const Icon = h.icon;
                const isCurrent = idx === 0;

                return (
                  <li key={idx} className="relative pl-6 sm:pl-8 group">
                    {/* Stepped Timeline Node */}
                    <div
                      className={`absolute -left-[14px] sm:-left-[18px] top-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center shadow-sm transition-all duration-300 ${
                        isCurrent
                          ? "bg-emerald-600 border-emerald-400 text-white scale-110 shadow-emerald-500/20"
                          : "bg-white border-slate-300 text-slate-600 group-hover:border-emerald-500 group-hover:text-emerald-700"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Content Ledger Row */}
                    <div
                      className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 border ${
                        isCurrent
                          ? "bg-slate-900 text-white border-emerald-500/40 shadow-xl"
                          : "bg-slate-50/80 hover:bg-white text-slate-900 border-slate-200/80 hover:border-emerald-500/40 hover:shadow-md"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-mono font-bold ${
                              isCurrent ? "text-emerald-400" : "text-slate-400"
                            }`}
                          >
                            HORIZON 0{idx + 1} //
                          </span>
                          <span
                            className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                              isCurrent ? "text-emerald-300" : "text-emerald-800"
                            }`}
                          >
                            {h.phase}
                          </span>
                        </div>

                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                            isCurrent
                              ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-300"
                              : idx === 1
                              ? "badge-nitrofix-orange"
                              : "badge-nitrofix-blue"
                          }`}
                        >
                          {h.status}
                        </span>
                      </div>

                      <h3
                        className={`text-base sm:text-lg font-bold font-space ${
                          isCurrent ? "text-white" : "text-slate-900 group-hover:text-emerald-950"
                        }`}
                      >
                        {h.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm font-work-sans leading-relaxed mt-1 ${
                          isCurrent ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {h.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
