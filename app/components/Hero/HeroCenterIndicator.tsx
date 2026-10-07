"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { HERO_BG_SLIDES } from "@/app/constants/hero";

export interface HeroCenterIndicatorProps {
  currentIdx: number;
  totalSlides: number;
  isPlaying: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (idx: number) => void;
  onTogglePlay: () => void;
}

export const HeroCenterIndicator: React.FC<HeroCenterIndicatorProps> = ({
  currentIdx,
  totalSlides,
  isPlaying,
  onPrev,
  onNext,
  onSelectSlide,
  onTogglePlay,
}) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 hover:bg-black/55 border border-white/15 backdrop-blur-md shadow-2xl transition-all">
      {/* Prev Button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Centered Bullet/Pill Dots */}
      <div className="flex items-center gap-2 px-1">
        {HERO_BG_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIdx;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => onSelectSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
              className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                isActive
                  ? "w-8 sm:w-10 h-2 bg-emerald-400 shadow-md shadow-emerald-400/60 ring-2 ring-white/40"
                  : "w-2.5 h-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Divider */}
      <div className="w-[1px] h-3.5 bg-white/20" />

      {/* Numeric Slide Counter */}
      <div className="text-[11px] font-mono font-bold text-white/90 select-none">
        <span className="text-emerald-300">0{currentIdx + 1}</span>
        <span className="text-white/40">/</span>
        <span className="text-white/60">0{totalSlides}</span>
      </div>

      {/* Play/Pause Button */}
      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        className="p-1 rounded-full text-white/60 hover:text-white transition-colors cursor-pointer ml-0.5"
      >
        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
      </button>
    </div>
  );
};
