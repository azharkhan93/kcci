"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import {
  ChinarLeafSvg,
  KashmirPaisleySvg,
  SozniCornerFiligree,
  KhatambandPatternOverlay,
} from "@/app/components/KashmirMotifs";
import { PARTNER_CTA_CONTENT } from "@/app/constants/partnerCta";

export interface PartnerCtaProps {
  className?: string;
}

export const PartnerCta: React.FC<PartnerCtaProps> = ({ className = "" }) => {
  const {
    eyebrow,
    heading,
    description,
    secondaryNote,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
  } = PARTNER_CTA_CONTENT;

  return (
    <section
      id="partner-cta"
      aria-label="Partner With Us Section"
      className={`relative w-full py-10 sm:py-12 bg-[#F3EAE0] border-t border-b border-[#6E2C00]/20 overflow-hidden ${className}`}
    >
      {/* Subtle Kashmiri Khatamband Lattice */}
      <KhatambandPatternOverlay className="opacity-[0.045] text-[#6E2C00]" />

      {/* Left & Right Kashmiri Sozni / Paisley Handicraft SVGs */}
      <SozniCornerFiligree
        side="left"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[140%] w-auto max-w-[240px] sm:max-w-[300px] opacity-55"
      />
      <KashmirPaisleySvg className="absolute right-8 sm:right-24 top-1/2 -translate-y-1/2 w-28 sm:w-36 h-auto text-[#7E393F]/20 pointer-events-none select-none rotate-12" />
      <SozniCornerFiligree
        side="right"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[140%] w-auto max-w-[240px] sm:max-w-[300px] opacity-45"
      />

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          {/* ── Left Content (Max Width Constrained) ── */}
          <div className="max-w-xl space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#6E2C00]/10 border border-[#7E393F]/30 text-[#6E2C00] text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider">
              <ChinarLeafSvg className="w-3 h-3 text-[#A61A28]" />
              <h6>{eyebrow}</h6>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#2B1203] leading-tight">
              {heading}
            </h2>

            <p className="text-xs sm:text-sm text-[#514646] font-work-sans leading-relaxed max-w-lg">
              {description}
            </p>

            <p className="text-xs sm:text-sm font-medium text-[#7E393F] font-work-sans pt-0.5 max-w-lg">
              {secondaryNote}
            </p>
          </div>

          {/* ── Action Buttons ── */}
          <div className="flex flex-row items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <Link href={ctaHref || "/contact"} className="flex-1 sm:flex-initial">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto text-xs sm:text-base px-3.5 sm:px-7 py-2.5 sm:py-3.5"
              >
                <p className="inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  {ctaText}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </p>
              </Button>
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="flex-1 sm:flex-initial">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto text-xs sm:text-base px-3.5 sm:px-7 py-2.5 sm:py-3.5"
                >
                  <p className="whitespace-nowrap">{secondaryCtaText}</p>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
