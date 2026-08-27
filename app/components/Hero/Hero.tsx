"use client";

import React from "react";
import { HERO_SLIDES, type HeroSlideData } from "@/app/constants/hero";
import { useHeroCarousel } from "./useHeroCarousel";
import { HeroNav } from "./HeroNav";
import { HeroContent } from "./HeroContent";
import { HeroShowcase } from "./HeroShowcase";

export interface HeroProps {
  slides?: HeroSlideData[];
  autoPlayInterval?: number;
}

export const Hero: React.FC<HeroProps> = ({
  slides = HERO_SLIDES,
  autoPlayInterval = 5500,
}) => {
  const { currentIdx, goToSlide, handleNext, handlePrev, refs } =
    useHeroCarousel({ totalSlides: slides.length, autoPlayInterval });

  const {
    containerRef,
    title1Ref,
    title2Ref,
    descRef,
    metricsRef,
    actionsRef,
    imageClipRef,
    hudInfoRef,
  } = refs;

  const activeSlide = slides[currentIdx];

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-label="GIS Laboratory Showcase Hero"
      className="relative w-full min-h-[620px] md:h-[100dvh] md:max-h-[1080px] bg-white border-b border-slate-100 flex items-center justify-center overflow-hidden pt-18 sm:pt-20 md:pt-18 pb-8 md:pb-0 px-4 sm:px-6 lg:px-12"
    >
    
      <HeroNav
        slides={slides}
        currentIdx={currentIdx}
        onSelectSlide={goToSlide}
      />

     
      <div className="relative w-full max-w-7xl mx-auto z-10 pl-2  md:pl-28 pr-12 md:pr-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
         
          <div className="md:col-span-7 flex flex-col justify-center">
            <HeroContent
              slide={activeSlide}
              title1Ref={title1Ref}
              title2Ref={title2Ref}
              descRef={descRef}
              metricsRef={metricsRef}
              actionsRef={actionsRef}
            />
          </div>

          
          <div className="md:col-span-5 flex items-center justify-center">
            <HeroShowcase
              slide={activeSlide}
              imageClipRef={imageClipRef}
              hudInfoRef={hudInfoRef}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
