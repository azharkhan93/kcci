"use client";

import React from "react";
import { HERITAGE_POETRY_MASK_ITEMS } from "@/app/constants/heritagePoetry";

/**
 * Compact, borderless Kashmir Heritage & Handicrafts image-masked Kashmiri poetry section,
 * designed to sit cleanly right below the About Hero.
 */
export const KcciHeritagePoetryBand: React.FC = () => {
  return (
    <section
      id="kashmir-heritage-poetry"
      aria-label="Kashmir Heritage and Handicrafts Kashmiri Poetry"
      className="relative w-full py-8 sm:py-10 bg-[#FBF7F2] overflow-hidden select-none"
    >
      {/* Subtle sweeping halftone dot matrix behind masked Kashmiri verse (borderless) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full opacity-45"
        viewBox="0 0 1200 180"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="about-poetry-halftone"
            width="16"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-12)"
          >
            <ellipse
              cx="8"
              cy="6"
              rx="3.4"
              ry="1.8"
              fill="#6E2C00"
              fillOpacity="0.1"
            />
          </pattern>
          <radialGradient id="about-poetry-fade" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="75%" stopColor="white" stopOpacity="0.45" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="about-poetry-mask">
            <rect width="1200" height="180" fill="url(#about-poetry-fade)" />
          </mask>
        </defs>
        <rect
          width="1200"
          height="180"
          fill="url(#about-poetry-halftone)"
          mask="url(#about-poetry-mask)"
        />
      </svg>

      {/* Borderless Two-Column Compact Alignment */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {HERITAGE_POETRY_MASK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2 sm:gap-5"
            >
              {/* Left Side: Compact English Label & Meaning */}
              <div className="text-left sm:max-w-[230px] shrink-0">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[#A61A28] mb-0.5">
                  {item.attribution}
                </p>
                <h3 className="text-sm sm:text-[15px] font-bold font-space text-[#2B1203] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#514646] font-work-sans leading-relaxed mt-0.5">
                  {item.translation}
                </p>
              </div>

              {/* Right Side: Giant Masked Kashmiri Word + Image-Masked 2-Line Kashmiri Verse */}
              <div className="flex flex-col items-end text-right flex-1 min-w-0">
                <div
                  style={{
                    filter: "drop-shadow(0 10px 12px rgba(43, 18, 3, 0.24))",
                  }}
                >
                  <p
                    dir="rtl"
                    lang="ks"
                    className="font-kashmiri font-black text-4xl sm:text-[44px] leading-[1.35] bg-cover bg-no-repeat text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `url('${item.displayMaskImage}')`,
                      backgroundPosition: item.imagePosition ?? "center",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.maskedDisplayWord}
                  </p>
                </div>

                <div
                  className="space-y-0.5 mt-0.5"
                  style={{
                    filter: "drop-shadow(0 6px 8px rgba(43, 18, 3, 0.16))",
                  }}
                >
                  {item.poetryLines.map((line, idx) => (
                    <p
                      key={idx}
                      dir="rtl"
                      lang="ks"
                      className="font-kashmiri font-extrabold text-sm sm:text-base leading-[1.65] bg-cover bg-no-repeat text-transparent bg-clip-text"
                      style={{
                        backgroundImage: `url('${item.poetryMaskImage}')`,
                        backgroundPosition:
                          idx === 0 ? "center 35%" : "center 65%",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
