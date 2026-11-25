"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, ChevronUp, Quote, Star } from "lucide-react";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import {
  TESTIMONIALS_DATA,
  TESTIMONIALS_HEADER,
} from "@/app/constants/testimonials";

function getWrappedOffset(index: number, activeIndex: number, total: number): number {
  const half = Math.floor(total / 2);
  return ((index - activeIndex + total + half) % total) - half;
}

export const Testimonials: React.FC = () => {
  const total = TESTIMONIALS_DATA.length;
  const [activeIdx, setActiveIdx] = useState(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoTimerRef = useRef<gsap.core.Tween | null>(null);
  const prevOffsetsRef = useRef<number[]>(
    TESTIMONIALS_DATA.map((_, idx) => getWrappedOffset(idx, 0, total))
  );
  const directionRef = useRef<1 | -1>(1);
  const touchStartYRef = useRef<number | null>(null);

  const goTo = useCallback(
    (targetIdx: number) => {
      const normalized = ((targetIdx % total) + total) % total;
      const offset = getWrappedOffset(normalized, activeIdx, total);
      directionRef.current = offset < 0 ? -1 : 1;
      setActiveIdx(normalized);
    },
    [activeIdx, total]
  );

  const goNext = useCallback(() => {
    directionRef.current = 1;
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    directionRef.current = -1;
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handlePause = () => {
    autoTimerRef.current?.pause();
  };

  const handleResume = () => {
    autoTimerRef.current?.resume();
  };

  useEffect(() => {
    const dir = directionRef.current;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      TESTIMONIALS_DATA.forEach((_, idx) => {
        const card = cardsRef.current[idx];
        if (!card) return;

        const offset = getWrappedOffset(idx, activeIdx, total);
        const prevOffset = prevOffsetsRef.current[idx] ?? offset;
        const wrappedAround = Math.abs(offset - prevOffset) > 2;

        const isActive = offset === 0;
        const isAdjacent = Math.abs(offset) === 1;

        const targetProps: gsap.TweenVars = {
          y: isActive ? 0 : isAdjacent ? offset * 56 : offset * 44,
          z: isActive ? 0 : isAdjacent ? -85 : -190,
          rotateX: isActive ? 0 : isAdjacent ? offset * -22 : offset * -30,
          scale: isActive ? 1 : isAdjacent ? 0.91 : 0.8,
          opacity: isActive ? 1 : isAdjacent ? 0.5 : 0,
          zIndex: isActive ? 30 : isAdjacent ? 20 : 10,
          transformPerspective: 1000,
          transformOrigin: "center center",
        };

        if (prefersReduced || wrappedAround) {
          gsap.set(card, targetProps);
        } else if (isActive && prevOffset !== 0) {
          // 3D Vertical Flip-Reveal entrance for newly active card
          gsap.fromTo(
            card,
            {
              y: dir * 48,
              z: -110,
              rotateX: dir * -72,
              scale: 0.9,
              opacity: 0.35,
              zIndex: 30,
              transformPerspective: 1000,
              transformOrigin: "center center",
            },
            {
              ...targetProps,
              duration: 0.78,
              ease: "back.out(1.15)",
              overwrite: "auto",
            }
          );
        } else {
          gsap.to(card, {
            ...targetProps,
            duration: 0.7,
            ease: "expo.out",
            overwrite: "auto",
          });
        }

        prevOffsetsRef.current[idx] = offset;
      });

      autoTimerRef.current?.kill();
      autoTimerRef.current = gsap.delayedCall(5.5, () => {
        directionRef.current = 1;
        setActiveIdx((prev) => (prev + 1) % total);
      });
    }, stageRef);

    return () => {
      autoTimerRef.current?.kill();
      ctx.revert();
    };
  }, [activeIdx, total]);

  return (
    <section
      id="testimonials"
      aria-label="Member Voices and Testimonials"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={(e) => {
        touchStartYRef.current = e.changedTouches[0]?.clientY ?? null;
        handlePause();
      }}
      onTouchEnd={(e) => {
        const startY = touchStartYRef.current;
        const endY = e.changedTouches[0]?.clientY ?? null;
        if (startY !== null && endY !== null) {
          const delta = startY - endY;
          if (Math.abs(delta) > 36) {
            if (delta > 0) goNext();
            else goPrev();
          }
        }
        touchStartYRef.current = null;
        handleResume();
      }}
      className="relative w-full py-16 sm:py-20 bg-[#FBF7F2] overflow-hidden"
    >
      <div
        ref={stageRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Header + Compact Vertical Member Selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-3">
                <h6 className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#7E393F]">
                  {String(activeIdx + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")} · Kashmir Voices
                </h6>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous testimonial"
                    className="w-7 h-7 rounded-full border border-[#6E2C00]/20 bg-[#F3EAE0]/80 hover:bg-[#6E2C00] text-[#2B1203] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next testimonial"
                    className="w-7 h-7 rounded-full border border-[#6E2C00]/20 bg-[#F3EAE0]/80 hover:bg-[#6E2C00] text-[#2B1203] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#2B1203] leading-tight">
                {TESTIMONIALS_HEADER.titlePart1}
                <strong className="font-bold text-gradient-leaf">
                  {TESTIMONIALS_HEADER.titlePart2}
                </strong>
              </h2>

              <p className="text-xs sm:text-[13px] text-[#514646] font-work-sans leading-snug">
                {TESTIMONIALS_HEADER.subtitle}
              </p>
            </div>

            {/* Compact Vertical Member Index */}
            <div className="divide-y divide-[#6E2C00]/10 border-t border-b border-[#6E2C00]/12">
              {TESTIMONIALS_DATA.map((item, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(idx)}
                    className={`w-full flex items-center justify-between gap-3 py-1.5 px-2 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#6E2C00]/[0.05] text-[#2B1203]"
                        : "text-[#514646] hover:bg-[#6E2C00]/[0.03] hover:text-[#2B1203]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        aria-hidden="true"
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${
                          isSelected
                            ? "bg-[#A61A28] scale-125"
                            : "bg-[#6E2C00]/25"
                        }`}
                      />
                      <p className="text-xs font-bold font-space truncate">
                        {item.name}
                      </p>
                    </div>
                    <h6
                      className={`text-[10.5px] font-mono shrink-0 ${
                        isSelected
                          ? "text-[#7E393F] font-semibold"
                          : "text-[#514646]/70"
                      }`}
                    >
                      {item.sectorTag}
                    </h6>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Compact 3D Vertical Flip-Reveal Card Stage */}
          <div className="lg:col-span-7 relative h-[300px] sm:h-[305px] flex items-center justify-center">
            <div
              className="relative w-full max-w-[360px] sm:max-w-[390px] mx-auto h-[212px] sm:h-[218px]"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {TESTIMONIALS_DATA.map((item, idx) => {
                const Icon = item.icon;
                const offset = getWrappedOffset(idx, activeIdx, total);
                const isActive = offset === 0;
                const isAdjacent = Math.abs(offset) === 1;

                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      cardsRef.current[idx] = el;
                    }}
                    onClick={() => {
                      if (!isActive) goTo(idx);
                    }}
                    role={isAdjacent ? "button" : undefined}
                    tabIndex={isAdjacent ? 0 : undefined}
                    onKeyDown={(e) => {
                      if (isAdjacent && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        goTo(idx);
                      }
                    }}
                    aria-hidden={!isActive && !isAdjacent}
                    style={{
                      willChange: "transform, opacity",
                      backfaceVisibility: "hidden",
                    }}
                    className={`absolute inset-0 w-full rounded-2xl p-[1.5px] transition-shadow duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-[#FFD37C]/70 via-[#BB5D0E]/45 to-[#A61A28]/60 shadow-[0_20px_42px_-16px_rgba(43,18,3,0.45)]"
                        : isAdjacent
                          ? "bg-gradient-to-br from-[#6E2C00]/30 to-[#A61A28]/25 shadow-[0_10px_24px_-12px_rgba(43,18,3,0.2)] cursor-pointer"
                          : "pointer-events-none"
                    }`}
                  >
                    <div
                      className={`relative h-full w-full flex flex-col justify-between px-4 py-6 sm:px-5 sm:py-6 rounded-[14.5px] overflow-hidden ${
                        isActive
                          ? "bg-gradient-to-br from-[#4A1C03] via-[#2B1203] to-[#1D0B02] text-[#FBF7F2]"
                          : "bg-[#F3EAE0] text-[#2B1203]"
                      }`}
                    >
                      {isActive && (
                        <ChinarLeafSvg className="absolute -right-6 -bottom-6 w-32 h-32 text-[#FFD37C]/15 pointer-events-none select-none" />
                      )}

                      {/* Top Tag & Rating + Metric */}
                      <div
                        className={`relative z-10 flex items-center justify-between gap-2 pb-3 border-b ${
                          isActive
                            ? "border-[#FFD37C]/15"
                            : "border-[#6E2C00]/12"
                        }`}
                      >
                        <div
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono ${
                            isActive
                              ? "bg-[#FBF7F2]/10 border border-[#FFD37C]/25 text-[#FFD37C]"
                              : "bg-[#6E2C00]/10 text-[#6E2C00]"
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          <h6>{item.sectorTag}</h6>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="hidden sm:flex items-center gap-0.5">
                            {Array.from({ length: item.rating }).map((_, s) => (
                              <Star
                                key={s}
                                className={`w-2.5 h-2.5 ${
                                  isActive
                                    ? "fill-[#FFD37C] text-[#FFD37C]"
                                    : "fill-[#BB5D0E] text-[#BB5D0E]"
                                }`}
                              />
                            ))}
                          </div>
                          <p
                            className={`text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-md ${
                              isActive
                                ? "bg-[#BB5D0E]/35 text-[#FFD37C]"
                                : "bg-[#6E2C00]/10 text-[#6E2C00]"
                            }`}
                          >
                            {item.metricValue}
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative z-10 flex items-start gap-2 py-3">
                        <Quote
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isActive ? "text-[#FFD37C]/60" : "text-[#BB5D0E]/60"
                          }`}
                        />
                        <p
                          className={`text-xs sm:text-[13px] font-work-sans leading-relaxed line-clamp-3 ${
                            isActive ? "text-[#FBF7F2]/95" : "text-[#514646]"
                          }`}
                        >
                          {item.quote}
                        </p>
                      </div>

                      {/* Author Footer */}
                      <div
                        className={`relative z-10 pt-3 border-t flex items-center justify-between gap-3 ${
                          isActive
                            ? "border-[#FFD37C]/15"
                            : "border-[#6E2C00]/12"
                        }`}
                      >
                        <div className="min-w-0">
                          <h3
                            className={`text-xs font-bold font-space truncate ${
                              isActive ? "text-white" : "text-[#2B1203]"
                            }`}
                          >
                            {item.name}
                          </h3>
                          <p
                            className={`text-[10.5px] font-work-sans truncate ${
                              isActive ? "text-[#FFD37C]/80" : "text-[#514646]"
                            }`}
                          >
                            {item.role} · {item.location}
                          </p>
                        </div>

                        <h6
                          className={`text-[10px] font-mono shrink-0 ${
                            isActive ? "text-[#FFD37C]/70" : "text-[#7E393F]"
                          }`}
                        >
                          {item.metricLabel}
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
