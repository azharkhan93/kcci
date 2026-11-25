"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import { KCCI_HISTORY_TIMELINE_CONTENT } from "@/app/constants/aboutKcci";

gsap.registerPlugin(ScrollTrigger);

const STEP_OFFSET_CLASSES = [
  "lg:mt-0",
  "lg:mt-7",
  "lg:mt-2",
  "lg:mt-9",
];

export const KcciHistoryTimeline: React.FC = () => {
  const {
    eyebrow,
    headingPrefix,
    headingHighlight,
    subtitle,
    charterImageSrc,
    charterImageAlt,
    charterQuote,
    milestones,
  } = KCCI_HISTORY_TIMELINE_CONTENT;

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const charterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          {
            y: 34,
            rotateX: 12,
            opacity: 0,
            transformPerspective: 1000,
          },
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 0.78,
            stagger: 0.12,
            ease: "expo.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (charterRef.current) {
        gsap.fromTo(
          charterRef.current,
          { clipPath: "inset(0% 0% 14% 0%)", y: 24, opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "expo.out",
            clearProps: "transform,clipPath",
            scrollTrigger: {
              trigger: charterRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kcci-history-archive"
      aria-label="Historical Chronicle of KCCI"
      className="relative w-full py-12 sm:py-16 bg-[#FBF7F2] border-b border-[#6E2C00]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 pb-5 mb-10 border-b border-[#6E2C00]/15">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#7E393F]">
              <ChinarLeafSvg className="w-3.5 h-3.5 text-[#BB5D0E]" />
              <h6>{eyebrow}</h6>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#2B1203] leading-tight">
              {headingPrefix}
              <strong className="font-bold text-gradient-leaf">
                {headingHighlight}
              </strong>
            </h2>
          </div>

          <p className="text-xs sm:text-[13px] text-[#514646] font-work-sans leading-snug max-w-md lg:text-right">
            {subtitle}
          </p>
        </div>

        {/* Unique Asymmetric Stepped Architectural Era Columns (No Timeline) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start"
        >
          {milestones.map((milestone, idx) => {
            const isHighlighted = idx % 2 === 0;
            const stepClass = STEP_OFFSET_CLASSES[idx] ?? "lg:mt-0";

            return (
              <article
                key={milestone.id}
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
                }}
                className={`group relative flex p-[1.5px] transition-all duration-300 hover:-translate-y-1 ${stepClass} ${
                  isHighlighted
                    ? "bg-gradient-to-br from-[#FFD37C]/70 via-[#BB5D0E]/40 to-[#A61A28]/55 shadow-[0_14px_34px_-14px_rgba(43,18,3,0.35)]"
                    : "bg-gradient-to-br from-[#D8992E]/45 via-[#6E2C00]/20 to-[#A61A28]/35 shadow-sm"
                }`}
              >
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 17px), calc(100% - 17px) 100%, 0 100%)",
                  }}
                  className={`relative w-full p-5 sm:p-6 flex flex-col justify-between min-h-[245px] overflow-hidden ${
                    isHighlighted
                      ? "bg-gradient-to-br from-[#3A1705] via-[#2B1203] to-[#1D0B02] text-[#FBF7F2]"
                      : "bg-white text-[#2B1203]"
                  }`}
                >
                  {isHighlighted && (
                    <ChinarLeafSvg className="absolute -right-6 -bottom-6 w-28 h-28 text-[#FFD37C]/12 pointer-events-none select-none" />
                  )}

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h6
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                          isHighlighted
                            ? "bg-white/10 text-[#FFD37C] border border-[#FFD37C]/25"
                            : "bg-[#F3EAE0] text-[#7E393F]"
                        }`}
                      >
                        {milestone.eraTag}
                      </h6>
                      <div
                        aria-hidden="true"
                        className={`h-[1px] flex-1 ${
                          isHighlighted ? "bg-[#FFD37C]/20" : "bg-[#6E2C00]/15"
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-3xl sm:text-4xl font-bold font-space tracking-tight leading-none ${
                        isHighlighted ? "text-[#FFD37C]" : "text-[#A61A28]"
                      }`}
                    >
                      {milestone.year}
                    </h3>

                    <h4
                      className={`text-[15px] font-bold font-space leading-snug ${
                        isHighlighted ? "text-white" : "text-[#2B1203]"
                      }`}
                    >
                      {milestone.title}
                    </h4>
                  </div>

                  <p
                    className={`relative z-10 mt-4 pt-3 border-t text-xs font-work-sans leading-relaxed ${
                      isHighlighted
                        ? "border-[#FFD37C]/15 text-[#FBF7F2]/80"
                        : "border-[#6E2C00]/12 text-[#514646]"
                    }`}
                  >
                    {milestone.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Architectural Split Charter Monograph Below */}
        <div
          ref={charterRef}
          className="mt-12 rounded-2xl overflow-hidden border border-[#6E2C00]/15 bg-white shadow-[0_14px_34px_-16px_rgba(43,18,3,0.16)] grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-5 relative min-h-[210px] bg-[#2B1203]">
            <div
              role="img"
              aria-label={charterImageAlt}
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${charterImageSrc}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A0B06]/20 to-[#1A0B06]/55"
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="inline-flex items-center gap-2 text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#7E393F]">
              <Quote className="w-3.5 h-3.5 text-[#BB5D0E]" />
              <h6>Constitutional Charter · 1924 &amp; 1935</h6>
            </div>

            <p className="text-sm sm:text-base text-[#2B1203] font-work-sans leading-relaxed">
              {charterQuote}
            </p>

            <div className="pt-3 border-t border-[#6E2C00]/12 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#6E2C00]">
              <p>The Kashmir Chamber of Commerce &amp; Industry (INC)</p>
              <p>Sanctioned by His Highness Government · 1935</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
