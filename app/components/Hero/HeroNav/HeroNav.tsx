"use client";

import React from "react";
import {
  HERO_STRATA_LAYERS,
  SLIDER_DESKTOP_ARC,
  SLIDER_MOBILE_ARC,
  type StrataLayer,
} from "@/app/constants/hero";

export interface HeroNavProps {
  currentIdx: number;
  onSelectSlide: (index: number) => void;
  progressPercent?: number;
}

export const HeroNav: React.FC<HeroNavProps> = ({
  currentIdx,
  onSelectSlide,
  progressPercent = 0,
}) => {
  return (
    <>
      {/* ── 1. Desktop Left-Side Scientific Curved Depth Arc ── */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-48 pointer-events-none select-none z-20">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 1000"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Outer Guide Arc */}
          <path
            d="M 0,50 C 220,300 220,700 0,950"
            fill="none"
            stroke="#1b4332"
            strokeOpacity="0.18"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          {/* Luminous Inner Gradient Glow */}
          <path
            d="M 0,50 C 220,300 220,700 0,950"
            fill="none"
            stroke="url(#emeraldGlowLine)"
            strokeWidth="2.5"
            strokeDasharray="6 8"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <linearGradient id="emeraldGlowLine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#2d6a4f" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>

        {/* 5 Interactive Strata Nodes */}
        {HERO_STRATA_LAYERS.map((layer, idx) => {
          const isActive = idx === currentIdx;
          const pos = SLIDER_DESKTOP_ARC[idx] || SLIDER_DESKTOP_ARC[0];
          const IconComp = layer.icon;

          return (
            <div
              key={`desktop-arc-${layer.id}`}
              style={{
                top: pos.top,
                left: pos.left,
                transform: `translate(-50%, -50%) rotate(${pos.rotate})`,
              }}
              className="absolute pointer-events-auto group/node"
            >
              <button
                type="button"
                onClick={() => onSelectSlide(idx)}
                aria-label={`Switch to slide 0${idx + 1}: ${layer.title}`}
                className={`relative flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? "w-12 h-12 bg-gradient-to-br from-[#1b4332] to-[#081c15] text-white shadow-xl shadow-emerald-950/60 scale-115 z-30 ring-3 ring-emerald-400/80"
                    : "w-9 h-9 bg-white/95 text-slate-600 border border-slate-300 hover:border-emerald-600 hover:text-emerald-800 hover:scale-110 shadow-xs z-20 backdrop-blur-md"
                }`}
              >
                {/* SVG Progress Ring on active */}
                {isActive && (
                  <svg className="absolute -inset-1 w-14 h-14 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
                    <circle
                      cx="22"
                      cy="22"
                      r="19"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeDasharray="120"
                      strokeDashoffset={120 - (120 * progressPercent) / 100}
                      className="transition-all duration-100 ease-linear"
                    />
                  </svg>
                )}

                <span
                  className={`font-mono transition-colors ${
                    isActive
                      ? "text-xs font-bold text-white"
                      : "text-[11px] font-semibold text-slate-700"
                  }`}
                >
                  0{idx + 1}
                </span>

                {/* Pulsing Active Beacon */}
                {isActive && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                )}
              </button>

              {/* Hover Tooltip showing Strata Title & Depth */}
              <div
                style={{ transform: `rotate(${-parseFloat(pos.rotate)}deg)` }}
                className={`absolute left-14 top-1/2 -translate-y-1/2 min-w-[160px] p-2 rounded-xl bg-slate-900/95 border border-emerald-500/30 text-white backdrop-blur-md shadow-2xl transition-all duration-200 pointer-events-none ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover/node:opacity-100 group-hover/node:translate-x-0"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <IconComp className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                    {layer.shortTitle}
                  </span>
                </div>
                <p className="text-xs font-bold leading-tight text-white">
                  {layer.title}
                </p>
                <span className="text-[9px] font-mono text-slate-400 block mt-0.5">
                  {layer.depth} • {layer.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── 2. Mobile/Tablet Right-Side Curved Arc ── */}
      <div className="lg:hidden absolute inset-y-0 right-0 w-20 pointer-events-none select-none z-20">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 80 1000"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 80,50 C 10,300 10,700 80,950"
            fill="none"
            stroke="#1b4332"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {HERO_STRATA_LAYERS.map((layer, idx) => {
          const isActive = idx === currentIdx;
          const pos = SLIDER_MOBILE_ARC[idx] || SLIDER_MOBILE_ARC[0];

          return (
            <button
              key={`mobile-arc-${layer.id}`}
              type="button"
              onClick={() => onSelectSlide(idx)}
              aria-label={`Slide ${idx + 1}: ${layer.title}`}
              style={{
                top: pos.top,
                right: pos.right,
                transform: `translate(50%, -50%) rotate(${pos.rotate})`,
              }}
              className={`absolute pointer-events-auto rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none ${
                isActive
                  ? "w-8 h-8 bg-[#1b4332] text-white shadow-lg shadow-emerald-900/50 scale-110 z-30 ring-2 ring-emerald-400"
                  : "w-6 h-6 bg-white/95 text-slate-700 border border-slate-300 hover:border-emerald-600 shadow-2xs z-20"
              }`}
            >
              <span
                className={`font-mono ${
                  isActive
                    ? "text-[10px] font-bold text-white"
                    : "text-[9px] font-semibold text-slate-700"
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
};
