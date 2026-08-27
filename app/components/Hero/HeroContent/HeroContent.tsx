"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type HeroSlideData } from "@/app/constants/hero";

export interface HeroContentProps {
  slide: HeroSlideData;
  categoryRef?: React.RefObject<HTMLDivElement | null>;
  title1Ref: React.RefObject<HTMLSpanElement | null>;
  title2Ref: React.RefObject<HTMLSpanElement | null>;
  descRef: React.RefObject<HTMLParagraphElement | null>;
  metricsRef: React.RefObject<HTMLDivElement | null>;
  actionsRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  slide,
  title1Ref,
  title2Ref,
  descRef,
  metricsRef,
  actionsRef,
}) => (
  <div className="flex flex-col justify-center text-left z-10 space-y-6 max-w-xl md:pl-8 lg:pl-16">
    {/* Elegant Editorial Headline */}
    <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-medium text-slate-900 tracking-tight leading-[1.08]">
      <div className="overflow-hidden py-0.5">
        <span
          ref={title1Ref}
          className="inline-block transform-gpu font-normal text-slate-900"
        >
          {slide.titleLines[0]}
        </span>
      </div>
      <div className="overflow-hidden py-0.5">
        <span
          ref={title2Ref}
          className="inline-block text-[#1b4332] transform-gpu font-semibold"
        >
          {slide.titleLines[1]}
        </span>
      </div>
    </h1>

    {/* Description Paragraph */}
    <p
      ref={descRef}
      className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal"
    >
      {slide.shortDescription}
    </p>

    {/* Minimal Pill Tags */}
    <div ref={metricsRef} className="flex flex-wrap items-center gap-2.5 pt-1">
      {slide.tags.map((tag) => (
        <span
          key={tag}
          className="px-4 py-1.5 rounded-full bg-white/90 border border-slate-300/80 text-xs font-medium text-slate-700 shadow-2xs hover:border-[#1b4332] hover:text-[#1b4332] transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Action CTA Button */}
    <div ref={actionsRef} className="pt-2">
      <Link
        href={slide.primaryBtnHref}
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1b4332] hover:bg-[#081c15] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] group"
      >
        <span>{slide.primaryBtnText}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);
