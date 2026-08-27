"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  APP_GALLERY_HEADER,
  APP_GALLERY_ITEMS,
} from "@/app/constants/appGallery";
import { useCarousel } from "@/app/hooks/useCarousel";

export interface AppGalleryProps {
  className?: string;
}

export const AppGallery: React.FC<AppGalleryProps> = ({ className = "" }) => {
  const {
    currentIdx,
    containerRef,
    textContentRef,
    pause,
    resume,
  } = useCarousel({
    totalItems: APP_GALLERY_ITEMS.length,
    autoPlayInterval: 4500,
  });

  const imageRef = useRef<HTMLDivElement>(null);
  const currentItem = APP_GALLERY_ITEMS[currentIdx];

  // GSAP Image Cross-Fade on Slide Change
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0.3, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [currentIdx]);

  return (
    <section
      ref={containerRef}
      id="app-gallery"
      aria-label="App Screenshot Gallery"
      onMouseEnter={pause}
      onMouseLeave={resume}
      className={`relative w-full py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-14">
        {/* ── Section Header ── */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {APP_GALLERY_HEADER.titlePart1}
            <span className="text-[#1b4332] font-extrabold">
              {APP_GALLERY_HEADER.titlePart2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {APP_GALLERY_HEADER.subtitle}
          </p>
        </div>

        {/* ── 2-Column Showcase ── */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-5xl">
            {/* ── Left Content (With Right Border & Padding) ── */}
            <div
              ref={textContentRef}
              className="space-y-4 flex flex-col justify-center text-left md:border-r md:border-slate-200/80 md:pr-8 lg:pr-12"
            >
              {/* Step Number Indicator */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm font-black text-[#1b4332] px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/60">
                  0{currentIdx + 1}
                </span>
                <span className="h-px w-8 bg-slate-200" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentItem.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                {currentItem.description}
              </p>

              {/* Feature Points */}
              {currentItem.features && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentItem.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ── Right Image ── */}
            <div className="flex justify-center md:justify-end">
              <div
                ref={imageRef}
                className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200/80"
              >
                <Image
                  key={currentItem.id}
                  src={currentItem.imageSrc}
                  alt={currentItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
