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
      className={`py-16 sm:py-24 bg-[#fafcfb] border-b border-slate-200/80 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--nitrofix-green-lime)] animate-pulse" />
            {content.eyebrow}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-space tracking-tight leading-tight">
            <span>{content.headingPrefix}</span>
            <span className="text-gradient-leaf">{content.headingHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-work-sans">
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
                className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                      CAPABILITY // 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-space text-slate-900 group-hover:text-emerald-950 transition-colors">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-xs sm:text-sm text-slate-600 font-work-sans leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="group-hover:text-emerald-700 font-medium transition-colors">
                    Enterprise Solutions
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
