"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { HERO_BG_SLIDES, type HeroBackgroundSlide } from "@/app/constants/hero";

export interface HeroCenterIndicatorProps {
  currentIdx: number;
  slides?: HeroBackgroundSlide[];
  onSelectSlide: (idx: number) => void;
  onPauseInteraction?: () => void;
  onResumeInteraction?: () => void;
}

export const HeroCenterIndicator: React.FC<HeroCenterIndicatorProps> = ({
  currentIdx,
  slides = HERO_BG_SLIDES,
  onSelectSlide,
  onPauseInteraction,
  onResumeInteraction,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLSpanElement>(null);

  const total = slides.length;
  const nextIdx = (currentIdx + 1) % total;

  // Ordered 2-slide window based on active slide: [Active, Next]
  const visibleIndices = total > 1 ? [currentIdx, nextIdx] : [currentIdx];

  // Reveal cards one by one from the extreme right edge into the viewport
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const items = Array.from(row.children) as HTMLElement[];
      if (prefersReduced) {
        gsap.fromTo(items, { opacity: 0 }, { opacity: 1, duration: 0.25, stagger: 0.08 });
        return;
      }

      gsap.fromTo(
        items,
        {
          x: 160,
          opacity: 0,
          scale: 0.9,
          clipPath: "inset(0% 0% 0% 100%)",
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.78,
          stagger: 0.16,
          ease: "expo.out",
          clearProps: "transform,opacity,clipPath",
        },
      );

      if (sheenRef.current) {
        gsap.fromTo(
          sheenRef.current,
          { xPercent: -120, opacity: 0.75 },
          {
            xPercent: 220,
            opacity: 0,
            duration: 1.0,
            delay: 0.18,
            ease: "power2.out",
          },
        );
      }
    }, rowRef);

    return () => ctx.revert();
  }, [currentIdx]);

  return (
    <div
      onMouseEnter={onPauseInteraction}
      onMouseLeave={onResumeInteraction}
      onFocus={onPauseInteraction}
      onBlur={onResumeInteraction}
      className="flex items-center justify-end overflow-hidden py-3 pl-4 pr-2 sm:pr-4 select-none"
      role="region"
      aria-label="Hero slide thumbnails"
    >
      <div
        ref={rowRef}
        className="flex flex-row items-center gap-3 sm:gap-4"
        role="tablist"
        aria-label="Choose a slide"
      >
        {visibleIndices.map((slideIdx, slot) => {
          const slide = slides[slideIdx];
          if (!slide) return null;
          const isActive = slot === 0;
          const slideNum = String(slideIdx + 1).padStart(2, "0");

          return (
            <button
              key={`${slide.id}-${slot}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectSlide(slideIdx)}
              aria-label={`Slide ${slideIdx + 1}: ${slide.tag}`}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD37C] shrink-0 ${
                isActive
                  ? "w-44 h-28 sm:w-52 sm:h-32 lg:w-60 lg:h-[144px] shadow-[0_18px_40px_rgba(0,0,0,0.55),0_0_24px_rgba(255,211,124,0.22)] ring-1 ring-[#FFD37C]/75"
                  : "w-32 h-22 sm:w-36 sm:h-24 lg:w-44 lg:h-[110px] opacity-75 hover:opacity-100 hover:scale-[1.03] shadow-lg"
              }`}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.tag}
                fill
                unoptimized
                sizes="(max-width: 640px) 176px, 240px"
                className="object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Active Slide Subtle Bottom Contrast & Warm Gold Accent Base Effect */}
              {isActive ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1203]/70 via-transparent to-transparent pointer-events-none" />
                  <span
                    ref={sheenRef}
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#FFD37C]/30 to-transparent -skew-x-12 pointer-events-none"
                  />
                  <div className="absolute inset-x-3 bottom-2 flex items-center justify-between gap-2 pointer-events-none">
                    <h6 className="text-[11px] font-mono font-bold text-[#FFD37C] tracking-wider">
                      {slideNum}
                    </h6>
                    <p className="text-[11px] font-medium text-white truncate">
                      {slide.tag}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#A61A28] via-[#BB5D0E] to-[#FFD37C]"
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
