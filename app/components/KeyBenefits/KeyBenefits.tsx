"use client";

import React from "react";
import { KEY_BENEFITS_DATA, KEY_BENEFITS_HEADER } from "@/app/constants/keyBenefits";
import { useKeyBenefitsCarousel } from "./useKeyBenefitsCarousel";
import { BenefitContent } from "./BenefitContent";
import { BenefitCards } from "./BenefitCards";

export const KeyBenefits: React.FC = () => {
  const { currentIdx, containerRef, textContentRef, goToIndex, handleNext, handlePrev } =
    useKeyBenefitsCarousel({ totalItems: KEY_BENEFITS_DATA.length });

  const activeItem = KEY_BENEFITS_DATA[currentIdx];

  return (
    <section
      id="features"
      ref={containerRef}
      aria-label="Key Benefits for Modern Farmers"
      className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
       
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {KEY_BENEFITS_HEADER.titlePart1}
            <span className="text-[#1b4332] font-extrabold">{KEY_BENEFITS_HEADER.titlePart2}</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {KEY_BENEFITS_HEADER.subtitle}
          </p>
        </div>

        {/* ── Interactive Split Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Active Content & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <BenefitContent
              item={activeItem}
              currentIdx={currentIdx}
              totalItems={KEY_BENEFITS_DATA.length}
              textContentRef={textContentRef}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>

          {/* Right Column: Cascading Perspective Cards */}
          <div className="lg:col-span-7 flex items-center justify-start min-w-0">
            <BenefitCards
              items={KEY_BENEFITS_DATA}
              currentIdx={currentIdx}
              onSelect={goToIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
