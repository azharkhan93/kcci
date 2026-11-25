"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import {
  ChinarLeafSvg,
  KhatambandPatternOverlay,
  KashmirShamsaMedallionSvg,
  KashmirPinjrakariArchSvg,
  KashmirJamawarKalkaSvg,
  AutumnLeafDetailedSvg,
  ChinarBranchCanopySvg,
} from "@/app/components/KashmirMotifs";
import { NITROFIX_FEATURE_CONTENT } from "@/app/constants/nitrofixFeature";

export const NitrofixFeature: React.FC = () => {
  const {
    headingPrefix,
    headingHighlight,
    subtitle,
    ctaText,
    ctaHref,
    cards,
  } = NITROFIX_FEATURE_CONTENT;

  return (
    <section
      id="nitrofix-feature"
      className="relative w-full py-10 md:py-12 bg-[#FBF7F2] overflow-hidden"
    >
      {/* Subtle Background Kashmiri Khatamband Lattice & Hanging Autumn Canopy SVG */}
      <KhatambandPatternOverlay className="opacity-[0.035] text-[#6E2C00]" />
      <ChinarBranchCanopySvg
        side="right"
        className="hidden md:block absolute -top-2 right-0 w-[340px] lg:w-[430px] h-auto opacity-30"
      />
      <AutumnLeafDetailedSvg className="hidden xl:block absolute -left-8 bottom-2 w-28 h-36 opacity-20 -rotate-12 pointer-events-none select-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Explore Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-7">
          <div className="text-left max-w-2xl space-y-1">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#7E393F]">
              <ChinarLeafSvg className="w-3.5 h-3.5 text-[#A61A28]" />
              <span>Kashmir Craft × Bio-Polymer Precision</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2B1203] font-space tracking-tight">
              <span>{headingPrefix}</span>
              <span className="text-gradient-leaf font-bold">
                {headingHighlight}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#514646] font-work-sans">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <Link href={ctaHref || "/nitrofix"}>
              <Button variant="primary" size="sm">
                <span className="inline-flex items-center gap-1.5">
                  <span>{ctaText || "Explore Product"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* 3 Compact Cards Grid Enriched with Traditional Kashmiri Craft Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-center py-1">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isCenter = idx === 1;
            const isCore = idx === 0;

            return (
              <div
                key={card.id}
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
                }}
                className={`group relative p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:skew-y-0 hover:scale-100 ${
                  isCenter
                    ? "md:scale-[0.95] md:rotate-1 md:skew-y-1 md:z-10 shadow-sm"
                    : "scale-100"
                } ${
                  isCore
                    ? "bg-gradient-to-br from-[#FFD37C] via-[#D8992E]/50 to-[#A61A28]"
                    : isCenter
                      ? "bg-gradient-to-br from-[#D9C7B4] via-[#64691D]/45 to-[#64691D]"
                      : "bg-gradient-to-br from-[#D9C7B4] via-[#D8992E]/55 to-[#BB5D0E]"
                }`}
              >
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
                  }}
                  className={`relative flex flex-col justify-between h-full p-4 sm:p-5 overflow-hidden ${
                    isCore
                      ? "bg-gradient-to-br from-[#6E2C00] via-[#461B04] to-[#2B1203] text-[#FBF7F2]"
                      : "bg-[#FFFDF9] text-[#514646]"
                  }`}
                >
                  {/* Bespoke Traditional Kashmiri Craft SVG per Card */}
                  {isCore ? (
                    <>
                      <KhatambandPatternOverlay className="opacity-[0.06] text-[#FFD37C]" />
                      <KashmirShamsaMedallionSvg className="absolute -right-10 -bottom-10 w-40 h-40 text-[#FFD37C]/20 group-hover:text-[#FFD37C]/35 group-hover:rotate-12 transition-all duration-700 pointer-events-none select-none" />
                    </>
                  ) : isCenter ? (
                    <KashmirPinjrakariArchSvg className="absolute -right-5 -bottom-6 w-32 h-40 text-[#64691D]/12 group-hover:text-[#64691D]/20 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none" />
                  ) : (
                    <KashmirJamawarKalkaSvg className="absolute -right-5 -bottom-6 w-32 h-36 text-[#7E393F]/12 group-hover:text-[#BB5D0E]/22 group-hover:-rotate-6 transition-all duration-500 pointer-events-none select-none" />
                  )}

                  {/* Top: Header, Icon & Badge */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center ${
                            isCore
                              ? "bg-[#BB5D0E]/30 text-[#FFD37C]"
                              : isCenter
                                ? "bg-[#64691D]/12 text-[#64691D]"
                                : "bg-[#6E2C00]/10 text-[#6E2C00]"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold ${
                            isCore ? "text-[#FFD37C]/70" : "text-[#514646]/70"
                          }`}
                        >
                          {card.step}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold uppercase ${
                          isCore
                            ? "bg-[#FFD37C]/20 text-[#FFD37C]"
                            : isCenter
                              ? "bg-[#64691D]/12 text-[#64691D]"
                              : "bg-[#F3EAE0] text-[#7E393F]"
                        }`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-[15px] sm:text-base font-bold font-space tracking-tight ${
                        isCore ? "text-white" : "text-[#2B1203]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 font-work-sans leading-snug ${
                        isCore ? "text-[#FBF7F2]/80" : "text-[#514646]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom: Meta & Arrow */}
                  <Link
                    href={ctaHref || "/nitrofix"}
                    className={`relative z-10 pt-2.5 mt-3 pr-3 border-t flex items-center justify-between text-[11px] font-mono transition-colors ${
                      isCore
                        ? "border-[#FFD37C]/20 text-[#FFD37C] hover:text-white"
                        : "border-[#6E2C00]/15 text-[#514646] hover:text-[#6E2C00]"
                    }`}
                  >
                    <span className={isCore ? "text-[#FFD37C]" : ""}>
                      {card.tag}
                    </span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};
