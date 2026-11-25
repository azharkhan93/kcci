"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import {
  ChinarLeafSvg,
  KhatambandPatternOverlay,
  KashmirPaisleySvg,
} from "@/app/components/KashmirMotifs";
import {
  NITROFIX_OVERVIEW_CONTENT,
  type NitrofixOverviewData,
} from "@/app/constants/nitrofixProduct";

export interface NitrofixOverviewProps {
  data?: Partial<NitrofixOverviewData>;
  className?: string;
}

export const NitrofixOverview: React.FC<NitrofixOverviewProps> = ({
  data = {},
  className = "",
}) => {
  const content = {
    ...NITROFIX_OVERVIEW_CONTENT,
    ...data,
  };

  return (
    <section
      className={`relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#2B1203] via-[#4A1E05] to-[#6E2C00] text-[#FBF7F2] overflow-hidden ${className}`}
    >
      <KhatambandPatternOverlay className="opacity-[0.06] text-[#FFD37C]" />
      <KashmirPaisleySvg className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 w-36 sm:w-48 h-auto text-[#FFD37C]/14 pointer-events-none select-none rotate-12" />

      {/* Warm Harud Amber & Chinar Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#BB5D0E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFD37C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#FFD37C]/85 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#FFD37C]/40" />
          <span className="text-[#FBF7F2]/65">Products</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#FFD37C]/40" />
          <span className="text-white font-medium">NitroFIX™</span>
        </div>

        {/* Compact Hero Canopy */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#BB5D0E]/25 border border-[#FFD37C]/35 text-[#FFD37C] text-xs font-mono font-semibold uppercase tracking-wider">
            <ChinarLeafSvg className="w-3.5 h-3.5 text-[#D8992E]" />
            {content.eyebrow}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space tracking-tight leading-[1.15]">
            <span>{content.headingPrefix}</span>
            <span className="bg-gradient-to-r from-[#FFD37C] via-[#D8992E] to-[#BB5D0E] bg-clip-text text-transparent">
              {content.headingHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#FBF7F2]/80 font-work-sans leading-relaxed pt-1 max-w-2xl">
            {content.subtitle}
          </p>

          {content.ctaLabel && content.ctaHref && (
            <div className="pt-3">
              <Link href={content.ctaHref}>
                <Button variant="primary" size="md">
                  <span className="inline-flex items-center gap-2">
                    <span>{content.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
