"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper, Sparkles } from "lucide-react";
import { Button } from "@/app/components/Button";

export interface CtaSectionProps {
  badge?: string;
  title?: string;
  buttonText?: string;
  imageSrc?: string;
  href?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  badge = "UPDATES FROM THE LAB",
  title = "THE DART NEWS",
  buttonText = "VIEW LATEST POSTS",
  imageSrc = "/hero-bg.jpg",
  href = "/research-projects",
  onButtonClick,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden bg-white min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex items-center border-y border-gray-100 ${className}`}
    >
      {/* ── Full Width Background Landscape & Sensor Station Image ── */}
      <Image
        src={imageSrc}
        alt="GIS Soil Science Lab Weather & Research Station"
        fill
        sizes="100vw"
        className="object-cover object-[center_35%] filter saturate-125 brightness-105"
      />

      {/* Airy High-Key White Gradient Overlays across full width */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/50 pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* ── Content Container Aligned to Page Grid (max-w-7xl) ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col items-start justify-center">
        {/* Kicker / Category Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50/90 border border-emerald-300/80 backdrop-blur-md mb-3 sm:mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">
            {badge}
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 uppercase font-sans tracking-tight leading-snug mb-5 sm:mb-6 max-w-3xl drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          {title}
        </h2>

        {/* CTA Button & Secondary Badge Row */}
        <div className="flex items-center gap-4 flex-wrap">
          {href ? (
            <Link href={href} className="inline-block">
              <Button
                variant="primary"
                size="lg"
                onClick={onButtonClick}
                className="rounded-full shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider font-extrabold text-xs sm:text-sm px-6 py-3.5 bg-[#1b4332] hover:bg-[#081c15] border-none text-white cursor-pointer whitespace-nowrap !gap-0"
              >
                <div className="inline-flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                  <span className="leading-none">{buttonText}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </Link>
          ) : (
            <Button
              variant="primary"
              size="lg"
              onClick={onButtonClick}
              className="rounded-full shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider font-extrabold text-xs sm:text-sm px-6 py-3.5 bg-[#1b4332] hover:bg-[#081c15] border-none text-white cursor-pointer whitespace-nowrap !gap-0"
            >
              <div className="inline-flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span className="leading-none">{buttonText}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          )}

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-700 bg-white/80 backdrop-blur-md px-4 py-3 rounded-full border border-gray-200/70 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#d99b26] flex-shrink-0" />
            <span>Weekly Field Reports &amp; Publications</span>
          </div>
        </div>
      </div>
    </section>
  );
};
