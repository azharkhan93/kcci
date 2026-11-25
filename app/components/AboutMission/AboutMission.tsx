"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import { ABOUT_MISSION_CONTENT, type AboutMissionData } from "@/app/constants/about";

export interface AboutMissionProps {
  data?: Partial<AboutMissionData>;
  className?: string;
}

export const AboutMission: React.FC<AboutMissionProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...ABOUT_MISSION_CONTENT,
    ...data,
    product: {
      ...ABOUT_MISSION_CONTENT.product,
      ...(data.product || {}),
    },
  };

  return (
    <section
      className={`relative py-16 sm:py-24 bg-[#FBF7F2] border-b border-[#6E2C00]/15 overflow-hidden ${className}`}
    >
      {/* Subtle Background Accent Aura */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD37C]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mission Narrative & Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-nitrofix text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#BB5D0E] animate-pulse" />
              {content.eyebrow}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space text-[#2B1203] tracking-tight leading-tight">
              <span>{content.headingPrefix}</span>
              <span className="text-gradient-leaf">{content.headingHighlight}</span>
            </h2>

            <div className="space-y-4 text-[#514646] font-work-sans text-sm sm:text-base leading-relaxed">
              {content.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "font-medium text-[#2B1203] text-base sm:text-lg leading-snug"
                      : "leading-relaxed"
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Verified Value-Chain Chips */}
            <div className="pt-3 flex flex-wrap gap-2 text-xs font-mono text-[#514646]">
              {content.chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF9] border border-[#6E2C00]/15"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7E393F]" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Product Packaging Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#F3EAE0] via-[#FFFDF9] to-[#F3EAE0] p-6 sm:p-8 border border-[#6E2C00]/20 shadow-xl overflow-hidden group">
              {/* Ambient Soft Glow Behind Product */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D8992E]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Top Badge Overlay */}
              <div className="flex items-center justify-between pb-4 border-b border-[#6E2C00]/15 relative z-10">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#6E2C00]">
                  <ChinarLeafSvg className="w-4 h-4 text-[#A61A28]" />
                  <span>INNOVATION SHOWCASE</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFD37C]/30 border border-[#D8992E]/50 text-[#6E2C00] text-[10px] font-mono font-bold uppercase">
                  Core Product
                </span>
              </div>

              {/* High-Resolution Product Asset */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[440px] my-3 flex items-center justify-center">
                <Image
                  src={content.product.image}
                  alt={content.product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                  preload
                />
              </div>

              {/* Bottom Product Details Capsule */}
              <div className="pt-3 border-t border-[#6E2C00]/15 flex items-center justify-between text-xs font-mono relative z-10">
                <div>
                  <span className="font-bold text-[#2B1203] block">
                    {content.product.badge}
                  </span>
                  <span className="text-[11px] text-[#514646]">
                    {content.product.caption}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[#FFD37C]/25 border border-[#BB5D0E]/35 text-[#6E2C00] font-bold text-[11px]">
                  {content.product.tag}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
