"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import { NITROFIX_BENEFITS_CONTENT } from "@/app/constants/nitrofixBenefits";

interface AccentStyle {
  sideRail: string;
  sideGlow: string;
  cardAura: string;
  iconBg: string;
  iconHover: string;
  iconText: string;
  iconBorder: string;
  numHover: string;
  borderHover: string;
  tagBg: string;
}

const ACCENT_MAP: Record<string, AccentStyle> = {
  sky: {
    sideRail: "bg-gradient-to-b from-[#64691D] via-[#BB5D0E] to-[#6E2C00]",
    sideGlow: "bg-[#64691D]/25",
    cardAura: "from-[#64691D]/10 via-transparent to-transparent",
    iconBg: "bg-[#64691D]/10",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-[#64691D] group-hover:to-[#6E2C00] group-hover:text-white group-hover:border-[#64691D] group-hover:shadow-md group-hover:shadow-[#64691D]/25",
    iconText: "text-[#64691D]",
    iconBorder: "border-[#64691D]/25",
    numHover: "group-hover:from-[#64691D] group-hover:to-[#6E2C00]",
    borderHover: "hover:border-[#64691D]/60 hover:shadow-[#64691D]/10",
    tagBg: "text-[#64691D] group-hover:text-[#6E2C00]",
  },
  emerald: {
    sideRail: "bg-gradient-to-b from-[#A61A28] via-[#7E393F] to-[#6E2C00]",
    sideGlow: "bg-[#7E393F]/25",
    cardAura: "from-[#7E393F]/10 via-transparent to-transparent",
    iconBg: "bg-[#7E393F]/10",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-[#7E393F] group-hover:to-[#6E2C00] group-hover:text-white group-hover:border-[#7E393F] group-hover:shadow-md group-hover:shadow-[#6E2C00]/25",
    iconText: "text-[#7E393F]",
    iconBorder: "border-[#7E393F]/25",
    numHover: "group-hover:from-[#A61A28] group-hover:to-[#6E2C00]",
    borderHover: "hover:border-[#7E393F]/60 hover:shadow-[#6E2C00]/10",
    tagBg: "text-[#7E393F] group-hover:text-[#6E2C00]",
  },
  teal: {
    sideRail: "bg-gradient-to-b from-[#FFD37C] via-[#D8992E] to-[#BB5D0E]",
    sideGlow: "bg-[#D8992E]/25",
    cardAura: "from-[#FFD37C]/20 via-transparent to-transparent",
    iconBg: "bg-[#FFD37C]/25",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-[#D8992E] group-hover:to-[#BB5D0E] group-hover:text-white group-hover:border-[#D8992E] group-hover:shadow-md group-hover:shadow-[#BB5D0E]/25",
    iconText: "text-[#BB5D0E]",
    iconBorder: "border-[#D8992E]/40",
    numHover: "group-hover:from-[#D8992E] group-hover:to-[#BB5D0E]",
    borderHover: "hover:border-[#D8992E]/70 hover:shadow-[#BB5D0E]/10",
    tagBg: "text-[#BB5D0E] group-hover:text-[#6E2C00]",
  },
  amber: {
    sideRail: "bg-gradient-to-b from-[#D8992E] via-[#BB5D0E] to-[#6E2C00]",
    sideGlow: "bg-[#BB5D0E]/25",
    cardAura: "from-[#BB5D0E]/10 via-transparent to-transparent",
    iconBg: "bg-[#BB5D0E]/12",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-[#BB5D0E] group-hover:to-[#6E2C00] group-hover:text-white group-hover:border-[#BB5D0E] group-hover:shadow-md group-hover:shadow-[#6E2C00]/25",
    iconText: "text-[#BB5D0E]",
    iconBorder: "border-[#BB5D0E]/30",
    numHover: "group-hover:from-[#BB5D0E] group-hover:to-[#6E2C00]",
    borderHover: "hover:border-[#BB5D0E]/60 hover:shadow-[#6E2C00]/10",
    tagBg: "text-[#BB5D0E] group-hover:text-[#6E2C00]",
  },
};

export const NitrofixBenefits: React.FC = () => {
  const { tag, headingPrefix, headingHighlight, subtitle, cards } = NITROFIX_BENEFITS_CONTENT;

  return (
    <section
      id="nitrofix-benefits"
      aria-label="NitroFIX Benefits Section"
      className="relative w-full py-10 md:py-12 bg-[#FBF7F2] overflow-hidden"
    >
      {/* ── Ambient Kashmir Harud Glows ── */}
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-[#FFD37C]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-5 right-10 w-80 h-80 bg-[#7E393F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Compact Start-Aligned Header ── */}
        <div className="text-left max-w-2xl mb-6 sm:mb-7 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md badge-nitrofix text-[10px] font-mono font-semibold uppercase tracking-wider">
            <ChinarLeafSvg className="w-3 h-3 text-[#A61A28]" />
            {tag}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#2B1203] font-space tracking-tight">
            <span>{headingPrefix}</span>
            <span className="text-gradient-leaf font-extrabold">
              {headingHighlight}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#514646] font-work-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* ── 2. Compact Four Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
          {cards.map((card) => {
            const IconComp = card.icon;
            const style = ACCENT_MAP[card.accent] || ACCENT_MAP.emerald;

            return (
              <div
                key={card.id}
                className={`group relative flex flex-col justify-between p-5 sm:p-5.5 min-h-[220px] sm:min-h-[235px] rounded-xl bg-[#FFFDF9] border border-[#6E2C00]/15 shadow-2xs hover:shadow-lg ${style.borderHover} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* ── Side Effect: Vertical Edge Glow Rail ── */}
                <div
                  className={`absolute top-3 bottom-3 left-0 w-1 rounded-r-full ${style.sideRail} opacity-60 group-hover:opacity-100 group-hover:w-1.5 transition-all duration-300`}
                />
                
                {/* ── Side Ambient Light Spill on Hover ── */}
                <div
                  className={`absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-24 rounded-full ${style.sideGlow} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* ── Top-Corner Radial Gradient Aura ── */}
                <div
                  className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${style.cardAura} rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-125`}
                />

                {/* ── Top Section: Sequence Number + Icon Housing ── */}
                <div className="space-y-3.5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-2xl sm:text-3xl font-black font-space tracking-tight bg-gradient-to-br from-[#D6C6B6] via-[#BFA995] to-[#A68C75] bg-clip-text text-transparent ${style.numHover} transition-all duration-300`}
                    >
                      {card.number}
                    </span>

                    <div className="relative">
                      <div
                        className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${style.iconBg} ${style.iconBorder} border ${style.iconText} ${style.iconHover} transition-all duration-300 group-hover:scale-105 shadow-2xs`}
                      >
                        <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:scale-105" />
                      </div>
                    </div>
                  </div>

                  {/* Card Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-space text-[#2B1203] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#514646] font-work-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* ── Bottom Section: Meta Tag ── */}
                <div className="relative z-10 pt-3 mt-3.5 border-t border-[#6E2C00]/10 flex items-center justify-between text-[11px] font-mono text-[#514646]/70 transition-colors">
                  <span className={`font-semibold ${style.tagBg} transition-colors`}>
                    Advantage {card.number}
                  </span>
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FBF7F2] border border-[#6E2C00]/15 group-hover:border-[#BB5D0E]/45 group-hover:bg-[#FFD37C]/25 group-hover:text-[#6E2C00] transition-all duration-300">
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
