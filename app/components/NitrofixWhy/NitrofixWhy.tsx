"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import {
  NITROFIX_WHY_CONTENT,
  type NitrofixWhyData,
} from "@/app/constants/nitrofixProduct";

export interface NitrofixWhyProps {
  data?: Partial<NitrofixWhyData>;
  className?: string;
}

export const NitrofixWhy: React.FC<NitrofixWhyProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...NITROFIX_WHY_CONTENT,
    ...data,
    items: data.items || NITROFIX_WHY_CONTENT.items,
  };

  return (
    <section
      className={`py-12 sm:py-16 bg-white border-b border-slate-100 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-8 sm:mb-10 space-y-2">
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

        {/* 2-Column Grid: Cards on Left, Product Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 6 Cards in a 2-Column Grid */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {content.items.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id || idx}
                  className="group p-4 sm:p-4.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex items-start gap-3 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/70 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-emerald-700 transition-colors block uppercase">
                      ADVANTAGE // 0{idx + 1}
                    </span>
                    <h3 className="text-xs sm:text-[13px] font-bold font-space text-slate-900 group-hover:text-emerald-950 transition-colors leading-snug">
                      {item.text}
                    </h3>
                  </div>
                </div>
              );
            })}

            {/* Big Idea Callout Card */}
            <div className="p-4 sm:p-4.5 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c2419] text-white border border-emerald-500/40 shadow-md flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{content.bigIdeaTitle}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 font-work-sans leading-snug">
                  {content.bigIdeaText}
                </p>
              </div>
              <span className="text-[9px] font-mono text-emerald-300/70 block">
                PLATFORM VISION // 2026+
              </span>
            </div>
          </div>

       
          <div className="lg:col-span-5 xl:col-span-5 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 shadow-sm p-4 sm:p-6 flex items-center justify-center">
            <Image
              src="/product.jpeg"
              alt="NitroFIX Packaging and Product"
              fill
              className="object-contain p-3 sm:p-5 transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};
