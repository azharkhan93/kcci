"use client";

import React from "react";
import { type HeroSlideData } from "@/app/constants/hero";

export interface HeroNavProps {
  slides: HeroSlideData[];
  currentIdx: number;
  onSelectSlide: (index: number) => void;
}


const DESKTOP_LEFT_ARC = [
  { top: "82%", left: "95px", rotate: "24deg" },
  { top: "61%", left: "148px", rotate: "8deg" },
  { top: "39%", left: "148px", rotate: "-8deg" },
  { top: "18%", left: "95px", rotate: "-24deg" },
];


const MOBILE_RIGHT_ARC = [
  { top: "18%", right: "24px", rotate: "24deg" },
  { top: "38%", right: "38px", rotate: "8deg" },
  { top: "58%", right: "38px", rotate: "-8deg" },
  { top: "78%", right: "24px", rotate: "-24deg" },
];

export const HeroNav: React.FC<HeroNavProps> = ({
  slides,
  currentIdx,
  onSelectSlide,
}) => (
  <>
    {/* ── 1. Desktop Left-Side Curved Arc (Visible on Desktop only) ── */}
    <div className="hidden md:block absolute inset-y-0 left-0 w-48 pointer-events-none select-none z-20">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,0 C 220,300 220,700 0,1000"
          fill="none"
          stroke="#1b4332"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {slides.map((slide, idx) => {
        const isActive = idx === currentIdx;
        const pos = DESKTOP_LEFT_ARC[idx] || DESKTOP_LEFT_ARC[0];

        return (
          <button
            key={`desktop-left-${slide.id}`}
            type="button"
            onClick={() => onSelectSlide(idx)}
            aria-label={`Go to slide ${idx + 1}: ${slide.titleLines.join(" ")}`}
            style={{
              top: pos.top,
              left: pos.left,
              transform: `translate(-50%, -50%) rotate(${pos.rotate})`,
            }}
            className={`absolute pointer-events-auto rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none ${
              isActive
                ? "w-11 h-11 lg:w-12 lg:h-12 bg-[#1b4332] text-white shadow-xl shadow-[#1b4332]/35 scale-110 z-30 ring-3 ring-white"
                : "w-8 h-8 lg:w-9 lg:h-9 bg-white/95 text-slate-600 border border-slate-300 hover:border-[#1b4332] hover:text-[#1b4332] hover:scale-110 shadow-xs z-20 backdrop-blur-xs"
            }`}
          >
            <span
              className={`font-mono ${
                isActive
                  ? "text-sm lg:text-base font-bold text-white"
                  : "text-xs font-semibold text-slate-600"
              }`}
            >
              0{idx + 1}
            </span>
          </button>
        );
      })}
    </div>

    {/* ── 2. Mobile/Tablet Right-Side Curved Arc (Visible on Mobile only) ── */}
    <div className="md:hidden absolute inset-y-0 right-0 w-20 sm:w-28 pointer-events-none select-none z-20">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 80 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 80,0 C 10,300 10,700 80,1000"
          fill="none"
          stroke="#1b4332"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {slides.map((slide, idx) => {
        const isActive = idx === currentIdx;
        const pos = MOBILE_RIGHT_ARC[idx] || MOBILE_RIGHT_ARC[0];

        return (
          <button
            key={`mobile-right-${slide.id}`}
            type="button"
            onClick={() => onSelectSlide(idx)}
            aria-label={`Go to slide ${idx + 1}: ${slide.titleLines.join(" ")}`}
            style={{
              top: pos.top,
              right: pos.right,
              transform: `translate(50%, -50%) rotate(${pos.rotate})`,
            }}
            className={`absolute pointer-events-auto rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none ${
              isActive
                ? "w-8 h-8 bg-[#1b4332] text-white shadow-lg shadow-[#1b4332]/30 scale-110 z-30 ring-2 ring-white"
                : "w-6 h-6 bg-white/95 text-slate-600 border border-slate-300 hover:border-[#1b4332] hover:text-[#1b4332] shadow-2xs z-20"
            }`}
          >
            <span
              className={`font-mono ${
                isActive
                  ? "text-[10px] font-bold text-white"
                  : "text-[9px] font-semibold text-slate-600"
              }`}
            >
              0{idx + 1}
            </span>
          </button>
        );
      })}
    </div>
  </>
);
