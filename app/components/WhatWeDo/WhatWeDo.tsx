"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { WHAT_WE_DO_CONTENT, type WhatWeDoData } from "@/app/constants/about";

export interface WhatWeDoProps {
  data?: Partial<WhatWeDoData>;
  className?: string;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...WHAT_WE_DO_CONTENT,
    ...data,
    services: data.services || WHAT_WE_DO_CONTENT.services,
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

        {/* 6 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {content.services.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.id || idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-[#6E2C00]/15 shadow-xs hover:shadow-xl hover:border-[#BB5D0E]/55 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#514646]/70 group-hover:text-[#7E393F] transition-colors">
                      CAPABILITY {"//"} 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#BB5D0E]/12 group-hover:bg-[#6E2C00] text-[#6E2C00] group-hover:text-[#FFD37C] flex items-center justify-center transition-colors">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-space text-[#2B1203] group-hover:text-[#6E2C00] transition-colors">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-xs sm:text-sm text-[#514646] font-work-sans leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#6E2C00]/10 flex items-center justify-between text-xs font-mono text-[#514646]/70">
                  <span className="group-hover:text-[#6E2C00] font-medium transition-colors">
                    Enterprise Solutions
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:text-[#BB5D0E]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
