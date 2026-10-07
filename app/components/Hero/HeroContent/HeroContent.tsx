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

     
      <div className="flex flex-wrap items-center gap-3.5 pt-2">
        <Link href={primaryCta?.href || "/nitrofix"}>
          <Button variant="primary" size="md">
            {primaryCta?.label || "Discover NitroFIX"}
          </Button>
        </Link>

        <Link href={secondaryCta?.href || "/contact"}>
          <Button variant="outline" size="md">
            {secondaryCta?.label || "Partner With Us"}
          </Button>
        </Link>
      </div>
    </div>
  );
};
