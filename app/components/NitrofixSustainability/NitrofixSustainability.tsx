"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
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
      className={`py-16 sm:py-24 bg-[#F3EAE0] border-b border-[#6E2C00]/15 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Sustainable Route */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BB5D0E] animate-pulse" />
              {content.eyebrow}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B1203] font-space tracking-tight leading-tight">
              <span>{content.headingPrefix}</span>
              <span className="text-gradient-leaf">{content.headingHighlight}</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#514646] font-work-sans leading-relaxed">
              {content.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-[#2B1203] font-medium text-base sm:text-lg" : ""}>
                  {p}
                </p>
              ))}
            </div>

         
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#514646]">
              {content.chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF9] border border-[#6E2C00]/15 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7E393F]" />
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
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#6E2C00]/15 hover:border-[#BB5D0E]/55 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#BB5D0E]/12 group-hover:bg-[#6E2C00] text-[#6E2C00] group-hover:text-[#FFD37C] flex items-center justify-center shrink-0 font-mono font-bold text-sm transition-colors">
                  {step.step}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold font-space text-[#2B1203] group-hover:text-[#6E2C00] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#514646] font-work-sans leading-relaxed">
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
