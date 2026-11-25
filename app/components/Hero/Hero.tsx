"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import { HERO_BG_SLIDES } from "@/app/constants/hero";
import { useHeroCarousel } from "./useHeroCarousel";
import { HeroMorphBackdrop } from "./HeroMorphBackdrop";
import { HeroCenterIndicator } from "./HeroCenterIndicator";

export const Hero: React.FC = () => {
  const {
    currentIdx,
    prevIdx,
    goToSlide,
    pauseByInteraction,
    resumeByInteraction,
    setSlideLayerRef,
    swipeHandlers,
    refs,
  } = useHeroCarousel({
    totalSlides: HERO_BG_SLIDES.length,
    autoPlayInterval: 6500,
  });

  const {
    containerRef,
    morphBackdropRef,
    textContainerRef,
    kickerLineRef,
    kickerTextRef,
    headlineRef,
    headlinePrefixRef,
    headlineHighlightRef,
    descRef,
    actionsRef,
  } = refs;

  const currentSlide = HERO_BG_SLIDES[currentIdx] || HERO_BG_SLIDES[0];
  const slideIndexLabel = String(currentIdx + 1).padStart(2, "0");

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="The Kashmir Chamber of Commerce and Industry Hero"
      {...swipeHandlers}
      className="relative w-full h-[100vh] bg-[#1C0F0A] flex items-center justify-start overflow-hidden touch-pan-y"
    >
      {/* Screen-reader live announcement on slide change */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIdx + 1} of {HERO_BG_SLIDES.length}: {currentSlide.tag}.{" "}
        {currentSlide.headlinePrefix}
        {currentSlide.headlineHighlight}
      </p>

      {/* ── 1. Full-Bleed Background Backdrop with GSAP Morph Reveal ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        {HERO_BG_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIdx;
          const isPrevious = idx === prevIdx && prevIdx !== currentIdx;
          const layerClass = isActive
            ? "z-[2]"
            : isPrevious
              ? "z-[1]"
              : "hidden";

          return (
            <div
              key={slide.id}
              ref={setSlideLayerRef(idx)}
              role={isActive ? "img" : undefined}
              aria-label={isActive ? slide.imageAlt : undefined}
              aria-hidden={!isActive}
              className={`absolute inset-0 w-full h-full ${layerClass}`}
              style={{
                backgroundImage: `url("${slide.imageSrc}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}

        <div className="absolute inset-0 w-full h-full z-[3]">
          <HeroMorphBackdrop
            ref={morphBackdropRef}
            slides={HERO_BG_SLIDES}
            activeIdx={currentIdx}
            noiseScale={3.5}
            edge={0.15}
            drift={0.5}
          />
        </div>
      </div>

      {/* ── Light Contrast Overlay Between Background Images (z-0) and Contents (z-20) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-10"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.52) 32%, rgba(0, 0, 0, 0.18) 58%, rgba(0, 0, 0, 0) 82%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 sm:h-28"
          style={{
            background:
              "linear-gradient(to top, #FBF7F2 0%, rgba(251, 247, 242, 0.65) 32%, rgba(251, 247, 242, 0.18) 68%, rgba(251, 247, 242, 0) 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />
      </div>

      {/* ── 2. Vertically Centered Editorial Content (Left) ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col justify-center">
        <div
          ref={textContainerRef}
          className="max-w-xl lg:max-w-[560px] space-y-5 sm:space-y-6"
        >
          {/* Minimal Architectural Kicker (Rule Draw + Chinar Motif + Masked Text) */}
          <div className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.22em] text-[#FFD37C]/95">
            <div
              ref={kickerLineRef}
              className="h-[1px] w-6 bg-[#D8992E] origin-left"
              aria-hidden="true"
            />
            <ChinarLeafSvg className="w-3.5 h-3.5 text-[#D8992E] shrink-0" />
            <div className="overflow-hidden inline-block">
              <h6 ref={kickerTextRef as React.Ref<HTMLHeadingElement>} className="inline-block">
                {slideIndexLabel} / {currentSlide.tag}
              </h6>
            </div>
          </div>

          {/* Primary Headline with Clip-Mask & Split Reveal */}
          <h1
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-[2.85rem] font-medium text-[#FBF7F2] tracking-[-0.025em] leading-[1.12] font-space max-w-xl"
          >
            <strong ref={headlinePrefixRef} className="inline font-medium">
              {currentSlide.headlinePrefix}
            </strong>
            <strong
              ref={headlineHighlightRef}
              className="inline bg-gradient-to-r from-[#FFD37C] via-[#D8992E] to-[#BB5D0E] bg-clip-text text-transparent font-semibold"
            >
              {currentSlide.headlineHighlight}
            </strong>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={descRef}
            className="text-sm sm:text-base md:text-[1.0625rem] text-[#FBF7F2]/85 leading-relaxed font-normal max-w-lg font-work-sans"
          >
            {currentSlide.supportingText}
          </p>

          {/* Clean Staggered Dual Actions */}
          <div
            ref={actionsRef}
            className="flex flex-row items-center gap-2 sm:gap-3 pt-1 w-full sm:w-auto"
          >
            <Link
              href={currentSlide.primaryCtaHref || "/#key-sectors"}
              className="flex-1 min-w-0 sm:flex-initial group"
            >
              <Button
                variant="primary"
                size="sm"
                className="w-full sm:w-auto text-[11px] sm:text-sm px-2.5 sm:px-5 py-2 sm:py-3 whitespace-nowrap !rounded-lg sm:!rounded-xl flex-row-reverse gap-1 sm:gap-2"
                icon={
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                }
              >
                {currentSlide.primaryCtaText}
              </Button>
            </Link>

            <Link
              href={currentSlide.secondaryCtaHref || "/contact"}
              className="flex-1 min-w-0 sm:flex-initial"
            >
              <Button
                variant="primary"
                size="sm"
                className="w-full sm:w-auto text-[11px] sm:text-sm px-2.5 sm:px-5 py-2 sm:py-3 whitespace-nowrap !rounded-lg sm:!rounded-xl"
              >
                {currentSlide.secondaryCtaText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── 3. Extreme Right-End Viewport Thumbnail Row (Vertically Centered on Desktop) ── */}
      <div className="absolute right-0 bottom-5 sm:bottom-8 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-30 pointer-events-auto max-w-full">
        <HeroCenterIndicator
          currentIdx={currentIdx}
          slides={HERO_BG_SLIDES}
          onSelectSlide={(idx) => goToSlide(idx)}
          onPauseInteraction={pauseByInteraction}
          onResumeInteraction={resumeByInteraction}
        />
      </div>
    </section>
  );
};
