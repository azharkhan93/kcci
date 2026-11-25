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
      className={`py-12 sm:py-16 bg-[#FBF7F2] border-b border-[#6E2C00]/15 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-8 sm:mb-10 space-y-2">
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

        {/* 2-Column Grid: Cards on Left, Product Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 6 Cards in a 2-Column Grid */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {content.items.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id || idx}
                  className="group p-4 sm:p-4.5 rounded-xl bg-[#FFFDF9] hover:bg-white border border-[#6E2C00]/15 hover:border-[#BB5D0E]/55 hover:shadow-lg transition-all duration-300 flex items-start gap-3 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#BB5D0E]/12 group-hover:bg-[#6E2C00] text-[#6E2C00] group-hover:text-[#FFD37C] flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] font-mono font-bold text-[#514646]/70 group-hover:text-[#7E393F] transition-colors block uppercase">
                      ADVANTAGE {"//"} 0{idx + 1}
                    </span>
                    <h3 className="text-xs sm:text-[13px] font-bold font-space text-[#2B1203] group-hover:text-[#6E2C00] transition-colors leading-snug">
                      {item.text}
                    </h3>
                  </div>
                </div>
              );
            })}

            {/* Big Idea Callout Card */}
            <div className="p-4 sm:p-4.5 rounded-xl bg-gradient-to-br from-[#6E2C00] via-[#451B02] to-[#2B1203] text-white border border-[#D8992E]/45 shadow-md flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#FFD37C]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8992E] shrink-0" />
                  <span>{content.bigIdeaTitle}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#FBF7F2]/80 font-work-sans leading-snug">
                  {content.bigIdeaText}
                </p>
              </div>
              <span className="text-[9px] font-mono text-[#FFD37C]/75 block">
                PLATFORM VISION {"//"} 2026+
              </span>
            </div>
          </div>

       
          <div className="lg:col-span-5 xl:col-span-5 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#6E2C00]/15 bg-gradient-to-b from-[#F3EAE0] via-[#FFFDF9] to-[#F3EAE0] shadow-sm p-4 sm:p-6 flex items-center justify-center">
            <Image
              src="/product.jpeg"
              alt="NitroFIX Packaging and Product"
              fill
              className="object-contain p-3 sm:p-5 transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              preload
            />
          </div>
        </div>

      </div>
    </section>
  );
};
