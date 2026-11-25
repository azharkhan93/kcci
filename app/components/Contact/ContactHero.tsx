"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  ChinarLeafSvg,
  KhatambandPatternOverlay,
  KashmirPaisleySvg,
} from "@/app/components/KashmirMotifs";

export interface ContactHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  breadcrumbLabel?: string;
  className?: string;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  // badge = "THE KASHMIR CHAMBER OF COMMERCE & INDUSTRY",
  title = "GET IN TOUCH WITH US",
  subtitle = "Have questions regarding trade facilitation, Certificate of Origin issuance, visa recommendation letters, membership, or general chamber inquiries? Our secretariat is here to assist you.",
  breadcrumbLabel = "Contact & Inquiries",
  className = "",
}) => {
  return (
    <section
      className={`relative w-full py-16 md:py-20 bg-gradient-to-b from-[#2B1203] via-[#4A1E05] to-[#6E2C00] text-[#FBF7F2] overflow-hidden ${className}`}
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
          <p className="text-white font-medium inline">{breadcrumbLabel}</p>
        </div>

        {/* Header Content */}
        <div className="max-w-3xl space-y-4">
        

          {/* Main Title */}
          <h1 className="text-2xl md:text-4xl font-bold font-space tracking-tight leading-[1.15] text-white uppercase">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#FBF7F2]/80 font-work-sans leading-relaxed pt-1 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
