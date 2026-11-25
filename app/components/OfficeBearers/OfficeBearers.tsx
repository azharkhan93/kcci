"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Quote, ShieldCheck } from "lucide-react";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import { OFFICE_BEARERS_CONTENT } from "@/app/constants/officeBearers";

function getCircularOffset(index: number, active: number, total: number): number {
  let diff = (index - active) % total;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export const OfficeBearers: React.FC = () => {
  const { eyebrow, headingPrefix, headingHighlight, subtitle, members } =
    OFFICE_BEARERS_CONTENT;
  const total = members.length;

  const [activeIdx, setActiveIdx] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeInnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoTimerRef = useRef<gsap.core.Tween | null>(null);
  const hasMountedRef = useRef(false);
  const prevOffsetsRef = useRef<number[]>(
    members.map((_, idx) => getCircularOffset(idx, 0, total))
  );
  const touchStartXRef = useRef<number | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      setActiveIdx(((idx % total) + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handlePause = () => {
    autoTimerRef.current?.pause();
  };

  const handleResume = () => {
    autoTimerRef.current?.resume();
  };

  // Initial GSAP Header Reveal
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Coverflow Positioning + GSAP Active Reveal + Auto-Slide
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      members.forEach((_, idx) => {
        const card = cardsRef.current[idx];
        if (!card) return;

        const offset = getCircularOffset(idx, activeIdx, total);
        const absOffset = Math.abs(offset);
        const prevOffset = prevOffsetsRef.current[idx] ?? offset;
        const wrappedAcross = Math.abs(offset - prevOffset) > 2;

        const targetProps: gsap.TweenVars = {
          xPercent: offset * 76,
          z: offset === 0 ? 55 : absOffset === 1 ? -75 : absOffset === 2 ? -175 : -250,
          rotateY: offset === 0 ? 0 : offset * -24,
          scale: offset === 0 ? 1.03 : absOffset === 1 ? 0.87 : absOffset === 2 ? 0.73 : 0.6,
          opacity: offset === 0 ? 1 : absOffset === 1 ? 0.62 : absOffset === 2 ? 0.28 : 0,
          zIndex: 40 - absOffset * 10,
          transformPerspective: 1350,
          transformOrigin: "center center",
        };

        if (prefersReduced || !hasMountedRef.current || wrappedAcross) {
          gsap.set(card, targetProps);
        } else {
          gsap.to(card, {
            ...targetProps,
            duration: 0.82,
            ease: "expo.out",
            overwrite: "auto",
          });
        }

        const inner = activeInnerRefs.current[idx];
        if (offset === 0 && inner && !prefersReduced && hasMountedRef.current) {
          gsap.fromTo(
            inner.children,
            { y: 10, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.05,
              ease: "power2.out",
              overwrite: "auto",
            }
          );
        }

        prevOffsetsRef.current[idx] = offset;
      });

      hasMountedRef.current = true;

      autoTimerRef.current?.kill();
      autoTimerRef.current = gsap.delayedCall(4.5, () => {
        setActiveIdx((prev) => (prev + 1) % total);
      });
    }, sectionRef);

    return () => {
      autoTimerRef.current?.kill();
      ctx.revert();
    };
  }, [activeIdx, members, total]);

  return (
    <section
      ref={sectionRef}
      id="office-bearers"
      aria-label="Office Bearers and Executive Committee"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={(e) => {
        touchStartXRef.current = e.changedTouches[0]?.clientX ?? null;
        handlePause();
      }}
      onTouchEnd={(e) => {
        const startX = touchStartXRef.current;
        const endX = e.changedTouches[0]?.clientX ?? null;
        if (startX !== null && endX !== null) {
          const delta = startX - endX;
          if (Math.abs(delta) > 40) {
            if (delta > 0) goNext();
            else goPrev();
          }
        }
        touchStartXRef.current = null;
        handleResume();
      }}
      className="relative w-full py-14 sm:py-16 bg-white text-[#2B1203] border-t border-b border-[#6E2C00]/12 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean White Header */}
        <div
          ref={headerRef}
          className="pb-5 mb-8 border-b border-[#6E2C00]/15"
        >
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

            <p className="text-xs sm:text-[13px] text-[#514646] font-work-sans leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* 3D Coverflow Stage (Portrait + Details + Message) */}
        <div
          className="relative h-[255px] sm:h-[245px] w-full flex items-center justify-center"
          style={{
            perspective: "1350px",
            transformStyle: "preserve-3d",
          }}
        >
          {members.map((member, idx) => {
            const offset = getCircularOffset(idx, activeIdx, total);
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            const isVisibleWing = absOffset <= 2;

            return (
              <div
                key={member.id}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                onClick={() => {
                  if (!isActive) goTo(idx);
                }}
                role={!isActive && isVisibleWing ? "button" : undefined}
                tabIndex={!isActive && isVisibleWing ? 0 : undefined}
                onKeyDown={(e) => {
                  if (
                    !isActive &&
                    isVisibleWing &&
                    (e.key === "Enter" || e.key === " ")
                  ) {
                    e.preventDefault();
                    goTo(idx);
                  }
                }}
                aria-hidden={!isVisibleWing}
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                }}
                className={`absolute w-[310px] sm:w-[460px] h-[220px] sm:h-[215px] rounded-2xl p-[1.5px] transition-shadow duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-[#FFD37C] via-[#BB5D0E] to-[#A61A28] shadow-[0_24px_50px_-16px_rgba(43,18,3,0.28)]"
                    : isVisibleWing
                      ? "bg-gradient-to-br from-[#6E2C00]/25 to-[#A61A28]/20 shadow-lg cursor-pointer"
                      : "pointer-events-none"
                }`}
              >
                <div
                  className={`relative h-full w-full rounded-[14.5px] overflow-hidden flex ${
                    isActive
                      ? "bg-[#FBF7F2] text-[#2B1203]"
                      : "bg-[#F3EAE0] text-[#2B1203]"
                  }`}
                >
                  {/* Left Portrait Photo */}
                  <div className="relative w-[36%] sm:w-[38%] h-full shrink-0 bg-[#2B1203] overflow-hidden">
                    <div
                      role="img"
                      aria-label={`${member.name} — ${member.role}`}
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("${member.imageSrc}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#1A0B06]/35 via-transparent to-transparent"
                    />
                  </div>

                  {/* Right Details & Executive Message */}
                  <div
                    ref={(el) => {
                      activeInnerRefs.current[idx] = el;
                    }}
                    className="relative flex-1 p-3.5 sm:p-4 flex flex-col justify-between min-w-0"
                  >
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1 text-[9.5px] font-mono font-semibold uppercase tracking-wider text-[#7E393F]">
                        <ShieldCheck className="w-3 h-3 text-[#BB5D0E] shrink-0" />
                        <h6 className="truncate">{member.details}</h6>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold font-space text-[#2B1203] leading-snug tracking-tight truncate">
                        {member.name}
                      </h3>

                      <p className="text-xs font-semibold font-work-sans text-[#A61A28]">
                        {member.role}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#6E2C00]/12 flex items-start gap-1.5">
                      <Quote className="w-3.5 h-3.5 text-[#BB5D0E]/70 shrink-0 mt-0.5" />
                      <p className="text-[11px] sm:text-xs text-[#514646] font-work-sans leading-relaxed line-clamp-3">
                        {member.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
