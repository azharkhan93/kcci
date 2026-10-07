"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/Button";
import { HERO_BG_SLIDES } from "@/app/constants/hero";
import { useHeroCarousel } from "./useHeroCarousel";
import { HeroCenterIndicator } from "./HeroCenterIndicator";

export const Hero: React.FC = () => {
  const {
    currentIdx,
    isPlaying,
    goToSlide,
    handleNext,
    handlePrev,
    togglePlay,
    refs,
  } = useHeroCarousel({
    totalSlides: HERO_BG_SLIDES.length,
    autoPlayInterval: 6500,
  });

  const { containerRef, textContainerRef, headlineRef, descRef, actionsRef } = refs;
  const currentSlide = HERO_BG_SLIDES[currentIdx] || HERO_BG_SLIDES[0] || {
    headlinePrefix: "Smarter farming starts with ",
    headlineHighlight: "smarter inputs.",
    supportingText: "Practical agricultural solutions built for smarter water and nutrient management.",
    primaryCtaText: "Discover NitroFIX",
    primaryCtaHref: "/nitrofix",
    secondaryCtaText: "Partner With Us",
    secondaryCtaHref: "/contact",
  };

  return (
    <section
      id="hero"
      ref={containerRef as React.RefObject<HTMLElement>}
      aria-label="Farm Health Innovations - NitroFIX Hero"
      className="relative w-full min-h-[100dvh] bg-slate-950 flex items-center justify-start overflow-hidden"
    >
      {/* ── 1. Full-Bleed Background Cover Images Slider ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        {HERO_BG_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIdx;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* ── High-Contrast Multi-Layered Overlays ── */}
        {/* Dark Left-to-Right Scrim for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/40 z-10" />
        
        {/* Subtle Top & Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85 z-10" />

        {/* High-Tech Emerald Bio-Glow Aura in Top Right */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* ── 2. Main Hero Content with GSAP Reveal Hooks ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-24 text-left flex flex-col justify-center">
        <div ref={textContainerRef} className="max-w-xl lg:max-w-2xl space-y-5 sm:space-y-6">
          
          {/* Primary Headline with GSAP Reveal Ref */}
          <h1
            ref={headlineRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium text-white tracking-tight leading-[1.18] font-space drop-shadow-md max-w-xl"
          >
            <span>{currentSlide.headlinePrefix}</span>
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent font-semibold">
              {currentSlide.headlineHighlight}
            </span>
          </h1>

          {/* Supporting Text with GSAP Reveal Ref */}
          <p
            ref={descRef}
            className="text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed font-normal max-w-lg font-work-sans drop-shadow-sm"
          >
            {currentSlide.supportingText}
          </p>

          {/* Standard Button Group with GSAP Reveal Ref */}
          <div ref={actionsRef} className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link href={currentSlide.primaryCtaHref || "#"}>
              <Button variant="primary" size="md">
                {currentSlide.primaryCtaText}
              </Button>
            </Link>

            <Link href={currentSlide.secondaryCtaHref || "/contact"}>
              <Button variant="outline" size="md">
                {currentSlide.secondaryCtaText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── 3. Centered Bottom Slider Indicator ── */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-30 flex justify-center items-center pointer-events-auto">
        <HeroCenterIndicator
          currentIdx={currentIdx}
          totalSlides={HERO_BG_SLIDES.length}
          isPlaying={isPlaying}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectSlide={goToSlide}
          onTogglePlay={togglePlay}
        />
      </div>
    </section>
  );
};
