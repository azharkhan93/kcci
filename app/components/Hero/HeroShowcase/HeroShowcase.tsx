"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Sparkles, TreeDeciduous, Droplets, GitBranch } from "lucide-react";

export const HeroShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<"strata" | "macro">("strata");
  const cardRef = useRef<HTMLDivElement>(null);

 
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      rotationY: x * 6,
      rotationX: -y * 6,
      transformPerspective: 1200,
      ease: "power1.out",
      duration: 0.35,
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      duration: 0.5,
      overwrite: "auto",
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center relative w-full py-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Main Showcase Container with 3D Card Effect ── */}
      <div
        ref={cardRef}
        className="relative w-full max-w-xl rounded-3xl p-3.5 sm:p-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-emerald-500/30 shadow-[0_25px_60px_rgba(8,28,21,0.35),0_0_30px_rgba(16,185,129,0.15)] group transition-all duration-300"
      >
        {/* Soft Ambient Floor Glow */}
        <div className="absolute -bottom-6 inset-x-12 h-12 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* ── Top Bar: Mode Switcher & Telemetry Pill ── */}
        <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-800/80 mb-3 text-xs">
          {/* Scientific Mode Toggle */}
          <div className="flex items-center p-0.5 rounded-xl bg-slate-800/90 border border-slate-700/80">
            <button
              type="button"
              onClick={() => setViewMode("strata")}
              className={`px-3 py-1.5 rounded-lg font-bold text-[11px] sm:text-xs transition-all cursor-pointer font-space ${
                viewMode === "strata"
                  ? "bg-[#1b4332] text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Stratified Profile
            </button>
            <button
              type="button"
              onClick={() => setViewMode("macro")}
              className={`px-3 py-1.5 rounded-lg font-bold text-[11px] sm:text-xs transition-all cursor-pointer font-space ${
                viewMode === "macro"
                  ? "bg-[#1b4332] text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Hydrogel Macro (4K)
            </button>
          </div>

          {/* Live Telemetry Status Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>BIO-ACTIVE TELEMETRY</span>
          </div>
        </div>

        {/* ── Central High-Tech Visual Viewport ── */}
        <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-inner group/view">
          
          {/* Main Visual Imagery */}
          {viewMode === "strata" ? (
            <Image
              src="/hero/nitrofix-hero-strata.jpg"
              alt="Apple orchard stratified cross-section showing soil, water droplets, NitroFIX hydrogel material, and root system"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-center transition-transform duration-700 group-hover/view:scale-105"
            />
          ) : (
            <Image
              src="/hero/nitrofix-hydrogel-macro.jpg"
              alt="Microscopic close-up view of NitroFIX hydrogel biopolymer beads releasing nitrogen to roots in soil"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-center transition-transform duration-700 group-hover/view:scale-105"
            />
          )}

          {/* Dark Gradient Edge Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

          {/* Scientific Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          {/* Depth Scale on Left */}
          <div className="absolute top-3 left-3 flex flex-col justify-between h-[75%] text-[9px] sm:text-[10px] font-mono text-emerald-300/90 select-none pointer-events-none bg-black/50 px-2 py-1.5 rounded-lg border border-emerald-500/25 backdrop-blur-xs">
            <span className="font-bold">0.0m [Canopy]</span>
            <span>-0.4m [Water]</span>
            <span>-1.0m [Soil]</span>
            <span className="text-emerald-300 font-extrabold">-1.8m [NitroFIX™]</span>
            <span>-3.2m [Roots]</span>
          </div>

          {/* Strata Tag in Top-Right */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-400 text-emerald-200 text-xs font-bold shadow-lg backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-emerald-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span className="font-mono uppercase text-[11px]">
              {viewMode === "strata" ? "Orchard → Root Continuum" : "NitroFIX™ Biopolymer"}
            </span>
          </div>

          {/* Floating Live Telemetry Overlay in bottom container */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md text-white shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block">
                  {viewMode === "strata" ? "NITROFIX™ ROOT MATRIX" : "SLOW-RELEASE BIO-GEL"}
                </span>
                <span className="text-xs font-semibold text-slate-200 line-clamp-1 font-work-sans">
                  {viewMode === "strata"
                    ? "Apple orchard soil depth continuum & slow-release hydration"
                    : "Crosslinked biopolymer microspheres capturing nitrogen ions"}
                </span>
              </div>
            </div>

            <div className="text-right shrink-0 pl-2">
              <span className="text-xs sm:text-sm font-mono font-extrabold text-emerald-300">
                {viewMode === "strata" ? "95% Uptake" : "40% Water Saved"}
              </span>
              <span className="block text-[9px] text-slate-400 font-work-sans">
                {viewMode === "strata" ? "Zero Leaching" : "Active Hydration"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
