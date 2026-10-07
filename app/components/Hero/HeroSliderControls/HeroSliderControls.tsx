"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles } from "lucide-react";
import { HERO_STRATA_LAYERS } from "@/app/constants/hero";

export interface HeroSliderControlsProps {
  currentIdx: number;
  totalSlides: number;
  isPlaying: boolean;
  progressPercent: number;
  onPrev: () => void;
  onNext: () => void;
  onTogglePlay: () => void;
  onSelectSlide: (idx: number) => void;
}

export const HeroSliderControls: React.FC<HeroSliderControlsProps> = ({
  currentIdx,
  totalSlides,
  isPlaying,
  progressPercent,
  onPrev,
  onNext,
  onTogglePlay,
  onSelectSlide,
}) => {
  const activeLayer = HERO_STRATA_LAYERS[currentIdx] || HERO_STRATA_LAYERS[0];

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
      {/* ── Left: Quick Stratum Pill Selector ── */}
      <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/90 border border-slate-200 shadow-xs backdrop-blur-md overflow-x-auto max-w-full no-scrollbar">
        {HERO_STRATA_LAYERS.map((layer, idx) => {
          const isActive = idx === currentIdx;
          const IconComp = layer.icon;

          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => onSelectSlide(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-[#1b4332] text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-[#1b4332] hover:bg-emerald-50/80"
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-emerald-300" : "text-slate-400"}`} />
              <span>{layer.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* ── Right: Play/Pause, Counter & Prev/Next Arrows ── */}
      <div className="flex items-center gap-2.5">
        {/* Play/Pause Toggle */}
        <button
          type="button"
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause auto slide" : "Play auto slide"}
          className="p-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#1b4332] border border-slate-200 shadow-2xs transition-all cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Slide Counter & Mini Progress */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-mono">
          <span className="font-extrabold text-[#1b4332]">0{currentIdx + 1}</span>
          <div className="w-12 h-1.5 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-[#1b4332] transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-slate-400 font-medium">0{totalSlides}</span>
        </div>

        {/* Prev & Next Buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous slide"
            className="p-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#1b4332] border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next slide"
            className="p-2 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white border border-transparent shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
