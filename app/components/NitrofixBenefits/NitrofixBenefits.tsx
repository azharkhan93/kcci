"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
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
    sideRail: "bg-gradient-to-b from-sky-400 via-cyan-500 to-blue-600",
    sideGlow: "bg-sky-400/25",
    cardAura: "from-sky-500/8 via-transparent to-transparent",
    iconBg: "bg-sky-50",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-sky-400 group-hover:shadow-md group-hover:shadow-sky-500/25",
    iconText: "text-sky-600",
    iconBorder: "border-sky-200/80",
    numHover: "group-hover:from-sky-600 group-hover:to-blue-600",
    borderHover: "hover:border-sky-400/80 hover:shadow-sky-500/10",
    tagBg: "text-sky-600 group-hover:text-sky-700",
  },
  emerald: {
    sideRail: "bg-gradient-to-b from-emerald-400 via-teal-500 to-emerald-700",
    sideGlow: "bg-emerald-400/25",
    cardAura: "from-emerald-500/8 via-transparent to-transparent",
    iconBg: "bg-emerald-50",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-md group-hover:shadow-emerald-500/25",
    iconText: "text-emerald-600",
    iconBorder: "border-emerald-200/80",
    numHover: "group-hover:from-emerald-600 group-hover:to-teal-600",
    borderHover: "hover:border-emerald-400/80 hover:shadow-emerald-500/10",
    tagBg: "text-emerald-600 group-hover:text-emerald-700",
  },
  teal: {
    sideRail: "bg-gradient-to-b from-teal-400 via-emerald-500 to-teal-700",
    sideGlow: "bg-teal-400/25",
    cardAura: "from-teal-500/8 via-transparent to-transparent",
    iconBg: "bg-teal-50",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-emerald-600 group-hover:text-white group-hover:border-teal-400 group-hover:shadow-md group-hover:shadow-teal-500/25",
    iconText: "text-teal-600",
    iconBorder: "border-teal-200/80",
    numHover: "group-hover:from-teal-600 group-hover:to-emerald-600",
    borderHover: "hover:border-teal-400/80 hover:shadow-teal-500/10",
    tagBg: "text-teal-600 group-hover:text-teal-700",
  },
  amber: {
    sideRail: "bg-gradient-to-b from-amber-400 via-emerald-500 to-teal-600",
    sideGlow: "bg-amber-400/25",
    cardAura: "from-amber-500/8 via-transparent to-transparent",
    iconBg: "bg-amber-50",
    iconHover: "group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-emerald-600 group-hover:text-white group-hover:border-amber-400 group-hover:shadow-md group-hover:shadow-amber-500/25",
    iconText: "text-amber-600",
    iconBorder: "border-amber-200/80",
    numHover: "group-hover:from-amber-600 group-hover:to-emerald-600",
    borderHover: "hover:border-amber-400/80 hover:shadow-amber-500/10",
    tagBg: "text-amber-600 group-hover:text-amber-700",
  },
};

export const NitrofixBenefits: React.FC = () => {
  const { tag, headingPrefix, headingHighlight, subtitle, cards } = NITROFIX_BENEFITS_CONTENT;

  return (
    <section
      id="nitrofix-benefits"
      aria-label="NitroFIX Benefits Section"
      className="relative w-full py-10 md:py-12 bg-white  overflow-hidden"
    >
      {/* ── Ambient Background Glows ── */}
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-5 right-10 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Compact Start-Aligned Header ── */}
        <div className="text-left max-w-2xl mb-6 sm:mb-7 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {tag}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-space tracking-tight">
            <span>{headingPrefix}</span>
            <span className="bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#40916c] bg-clip-text text-transparent font-extrabold">
              {headingHighlight}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-work-sans leading-relaxed">
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
                className={`group relative flex flex-col justify-between p-5 sm:p-5.5 min-h-[220px] sm:min-h-[235px] rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg ${style.borderHover} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
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
                      className={`text-2xl sm:text-3xl font-black font-space tracking-tight bg-gradient-to-br from-slate-300 via-slate-400 to-slate-400 bg-clip-text text-transparent ${style.numHover} transition-all duration-300`}
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
                    <h3 className="text-base sm:text-lg font-bold font-space text-slate-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-work-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* ── Bottom Section: Meta Tag ── */}
                <div className="relative z-10 pt-3 mt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 transition-colors">
                  <span className={`font-semibold ${style.tagBg} transition-colors`}>
                    Advantage {card.number}
                  </span>
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-50 border border-slate-100 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-300">
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
