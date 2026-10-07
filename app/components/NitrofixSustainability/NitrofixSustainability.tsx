"use client";

import React from "react";
import { CheckCircle2, Recycle, ArrowRight, Sprout, Trees } from "lucide-react";
import {
  NITROFIX_SUSTAINABILITY_CONTENT,
  type SustainabilityData,
} from "@/app/constants/nitrofixProduct";

export interface NitrofixSustainabilityProps {
  data?: Partial<SustainabilityData>;
  className?: string;
}

export const NitrofixSustainability: React.FC<NitrofixSustainabilityProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...NITROFIX_SUSTAINABILITY_CONTENT,
    ...data,
    paragraphs:
      data.paragraphs || NITROFIX_SUSTAINABILITY_CONTENT.paragraphs,
    chips: data.chips || NITROFIX_SUSTAINABILITY_CONTENT.chips,
    cycleSteps:
      data.cycleSteps || NITROFIX_SUSTAINABILITY_CONTENT.cycleSteps,
  };

  return (
    <section
      className={`py-16 sm:py-24 bg-[#fafcfb] border-b border-slate-200/80 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Sustainable Route */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--nitrofix-green-lime)] animate-pulse" />
              {content.eyebrow}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-space tracking-tight leading-tight">
              <span>{content.headingPrefix}</span>
              <span className="text-gradient-leaf">{content.headingHighlight}</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-work-sans leading-relaxed">
              {content.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-slate-800 font-medium text-base sm:text-lg" : ""}>
                  {p}
                </p>
              ))}
            </div>

         
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-700">
              {content.chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3-Step Circular Pathway Visual */}
          <div className="lg:col-span-6 space-y-4">
            {content.cycleSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 font-mono font-bold text-sm transition-colors">
                  {step.step}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold font-space text-slate-900 group-hover:text-emerald-950 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-work-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
