"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/Button";
import { HERO_DATA } from "@/app/constants/hero";

export const HeroContent: React.FC = () => {
  const { headlinePrefix, headlineHighlight, supportingText, primaryCta, secondaryCta } =
    HERO_DATA;

  return (
    <div className="flex flex-col justify-center text-left z-10 space-y-6 sm:space-y-8 max-w-2xl py-4 sm:py-6">
    
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium text-slate-900 tracking-tight leading-[1.18] font-space max-w-xl">
        <span>{headlinePrefix}</span>
        <span className="text-gradient-leaf font-bold">
          {headlineHighlight}
        </span>
      </h1>

    
      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-lg font-work-sans">
        {supportingText}
      </p>

     
      <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 pt-2 w-full sm:w-auto">
        <Link href={primaryCta?.href || "/nitrofix"} className="flex-1 sm:flex-initial">
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-auto text-xs sm:text-base px-3.5 sm:px-7 py-2.5 sm:py-3.5 whitespace-nowrap"
          >
            {primaryCta?.label || "Discover NitroFIX"}
          </Button>
        </Link>

        <Link href={secondaryCta?.href || "/contact"} className="flex-1 sm:flex-initial">
          <Button
            variant="outline"
            size="md"
            className="w-full sm:w-auto text-xs sm:text-base px-3.5 sm:px-7 py-2.5 sm:py-3.5 whitespace-nowrap"
          >
            {secondaryCta?.label || "Partner With Us"}
          </Button>
        </Link>
      </div>
    </div>
  );
};
