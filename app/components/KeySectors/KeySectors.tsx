"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { KEY_SECTORS_CONTENT } from "@/app/constants/keySectors";
import {
  ChinarLeafSvg,
  KhatambandPatternOverlay,
} from "@/app/components/KashmirMotifs";

export const KeySectors: React.FC = () => {
  const { headingPrefix, headingHighlight, subtitle, sectors } =
    KEY_SECTORS_CONTENT;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSector = sectors[activeIndex] ?? sectors[0];
  const ActiveIcon = activeSector.icon;

  return (
    <section
      id="key-sectors"
      aria-label="Our Industries and Areas"
      className="relative w-full pt-8 sm:pt-10 pb-10 sm:pb-12 bg-[#FBF7F2] border-b border-[#6E2C00]/15 overflow-hidden"
    >
      {/* Right-Side 40% Width Chinar Background Layer (Left Side Removed) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[40%] pointer-events-none select-none z-0"
        style={{
          backgroundImage: 'url("/chinar.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#FBF7F2]/45 via-[#FBF7F2]/72 to-[#FBF7F2]" />
      </div>

      {/* Soft Light Top Seam Veil Blending Hero Parchment Edge into Chinar Leaf Texture */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-14 sm:h-16 bg-gradient-to-b from-[#FBF7F2] via-[#FBF7F2]/45 to-transparent pointer-events-none select-none z-[1]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Editorial Split Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 lg:gap-8 pb-4 mb-6 border-b border-[#6E2C00]/15">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2B1203] font-space tracking-tight leading-none shrink-0">
            {headingPrefix}
            <strong className="font-bold text-gradient-leaf">
              {headingHighlight}
            </strong>
          </h2>

          <p className="text-xs sm:text-[13px] text-[#514646] font-work-sans leading-snug max-w-lg lg:text-right">
            {subtitle}
          </p>
        </div>

        {/* Unique Non-Card Architectural Layout: Left Live Spotlight + Right 2x4 Hairline Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Live Active Sector Visual Plate */}
          <a
            href={activeSector.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group lg:col-span-4 relative flex p-[1.5px] rounded-2xl bg-gradient-to-br from-[#FFD37C]/55 via-[#6E2C00]/30 to-[#A61A28]/45 shadow-[0_14px_34px_-14px_rgba(43,18,3,0.4)] hover:shadow-[0_18px_42px_-12px_rgba(110,44,0,0.48)] transition-all duration-300"
          >
            <div className="relative w-full flex flex-col justify-between min-h-[220px] lg:min-h-0 p-5 rounded-[14.5px] overflow-hidden bg-[#2B1203] text-[#FBF7F2] ring-1 ring-inset ring-white/10">
              {/* Spotlight Background: Full-Bleed Image OR Khatamband + Chinar Plate */}
              {activeSector.bgImage ? (
                <>
                  <div
                    key={activeSector.id}
                    aria-hidden="true"
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                    style={{
                      backgroundImage: `url("${activeSector.bgImage}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#160804]/95 via-[#1C0D07]/60 to-[#160804]/25 pointer-events-none"
                  />
                </>
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-[#5C2505] via-[#3A1604] to-[#210C02] pointer-events-none"
                  />
                  <KhatambandPatternOverlay className="opacity-[0.06] text-[#FFD37C]" />
                  <ChinarLeafSvg className="absolute -right-6 -bottom-6 w-40 h-40 text-[#FFD37C]/15 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 pointer-events-none select-none" />
                </>
              )}

              {/* Spotlight Top Metadata */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1A0B06]/55 backdrop-blur-md border border-[#FFD37C]/25">
                  <ActiveIcon className="w-3.5 h-3.5 text-[#FFD37C]" />
                  <h6 className="text-[11px] font-mono tracking-wider text-[#FFD37C]">
                    {activeSector.number} / 0{sectors.length}
                  </h6>
                </div>

                <div className="w-7 h-7 rounded-full inline-flex items-center justify-center bg-[#1A0B06]/45 backdrop-blur-md border border-[#FFD37C]/25 text-[#FFD37C] transition-all duration-200 group-hover:bg-[#FFD37C] group-hover:text-[#2B1203] group-hover:border-[#FFD37C]">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Spotlight Bottom Active Details */}
              <div className="relative z-10 pt-10 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold font-space text-white tracking-tight leading-snug drop-shadow-xs">
                  {activeSector.title}
                </h3>
                <p className="text-xs text-[#FBF7F2]/85 font-work-sans leading-relaxed">
                  {activeSector.description}
                </p>
                <div className="pt-1">
                  <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD37C]/15 border border-[#FFD37C]/30 text-[11px] font-mono text-[#FFD37C] group-hover:bg-[#FFD37C] group-hover:text-[#2B1203] group-hover:border-[#FFD37C] transition-colors">
                    Explore Sector
                    <ArrowUpRight className="w-3 h-3" />
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Right Column: Open 2-Column Hairline Directory (Zero Card Boxes) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t border-[#6E2C00]/15">
            {sectors.map((sector, idx) => {
              const IconComp = sector.icon;
              const isActive = idx === activeIndex;

              return (
                <a
                  key={sector.id}
                  href={sector.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  className={`group relative flex items-start gap-3 py-3 sm:py-3.5 px-2.5 sm:px-4 border-b border-[#6E2C00]/12 sm:odd:border-r sm:odd:border-[#6E2C00]/12 transition-colors duration-200 focus-visible:outline-none focus-visible:bg-[#6E2C00]/[0.05] ${
                    isActive
                      ? "bg-[#6E2C00]/[0.04]"
                      : "hover:bg-[#6E2C00]/[0.03]"
                  }`}
                >
                  {/* Active Left Spine Indicator */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-2.5 bottom-2.5 w-[2px] transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-b from-[#A61A28] to-[#D8992E] opacity-100"
                        : "bg-[#BB5D0E] opacity-0 group-hover:opacity-60"
                    }`}
                  />

                  {/* Left Gutter: Index Number */}
                  <h6
                    className={`pt-0.5 text-[11px] font-mono font-semibold tabular-nums shrink-0 transition-colors ${
                      isActive
                        ? "text-[#A61A28]"
                        : "text-[#BB5D0E]/75 group-hover:text-[#A61A28]"
                    }`}
                  >
                    {sector.number}
                  </h6>

                  {/* Main Content Column */}
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <IconComp
                          className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                            isActive
                              ? "text-[#6E2C00]"
                              : "text-[#7E393F]/75 group-hover:text-[#6E2C00]"
                          }`}
                        />
                        <h3 className="text-[13.5px] sm:text-sm font-bold font-space text-[#2B1203] tracking-tight truncate">
                          {sector.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                          isActive
                            ? "text-[#A61A28] translate-x-0.5 -translate-y-0.5"
                            : "text-[#514646]/45 group-hover:text-[#A61A28] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </div>

                    <p className="text-[11.5px] sm:text-xs text-[#514646] font-work-sans leading-[1.45] line-clamp-2">
                      {sector.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
    </section>
  );
};
