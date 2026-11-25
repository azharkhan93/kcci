"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ORCHARD_PROCESS_CONTENT } from "@/app/constants/orchardProcess";

export const OrchardProcess: React.FC = () => {
  const { headingPrefix, headingHighlight, subtitle, steps } = ORCHARD_PROCESS_CONTENT;
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pathGlowRef = useRef<SVGPathElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate SVG wave path drawing
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set([pathRef.current, pathGlowRef.current], {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to([pathRef.current, pathGlowRef.current], {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.out",
          delay: 0.1,
        });
      }

      // 2. Animate step badge nodes pop-in
      const validNodes = nodesRef.current.filter(Boolean);
      if (validNodes.length > 0) {
        gsap.fromTo(
          validNodes,
          { scale: 0, opacity: 0, y: 12 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.8)",
            delay: 0.35,
            clearProps: "transform",
          }
        );
      }

      // 3. Animate text cards fade-up
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            delay: 0.5,
            clearProps: "transform,opacity",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="orchard-process"
      aria-label="Orchard to Biomass Storytelling Sequence"
      className="relative w-full py-10 sm:py-12 bg-[#FBF7F2] border-b border-[#6E2C00]/15 overflow-hidden"
    >
      {/* ── Background Subtle Kashmir Harud Ambient Aura ── */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#FFD37C]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-5 right-1/4 w-[400px] h-[250px] bg-[#7E393F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Start-Aligned Section Header (Matching other sections) ── */}
        <div className="text-left max-w-2xl mb-7 sm:mb-8 space-y-1.5">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B1203] tracking-tight font-space leading-tight">
            <span>{headingPrefix}</span>
            <span className="text-gradient-leaf font-extrabold">
              {headingHighlight}
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#514646] font-work-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* ── 2. Desktop Horizontal Continuous SVG Wave (5 Steps, Compact 380px) ── */}
        <div className="hidden lg:block relative w-full h-[380px] select-none my-2">
          
          {/* Continuous Undulating Smooth S-Curve SVG Vector (Kashmir Harud Ribbon) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1100 380"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="orchardWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6E2C00" stopOpacity="0.92" />
                <stop offset="25%" stopColor="#7E393F" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#BB5D0E" stopOpacity="0.95" />
                <stop offset="80%" stopColor="#64691D" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D8992E" stopOpacity="0.95" />
              </linearGradient>

              <filter id="waveGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing Backdrop Stroke */}
            <path
              ref={pathGlowRef}
              d="M 50 240 C 120 240, 180 110, 290 110 C 400 110, 460 240, 560 240 C 660 240, 720 110, 830 110 C 940 110, 1000 240, 1050 240"
              stroke="url(#orchardWaveGradient)"
              strokeWidth="5"
              strokeOpacity="0.25"
              fill="none"
              filter="url(#waveGlow)"
            />

            {/* Sharp Foreground Primary Stroke */}
            <path
              ref={pathRef}
              d="M 50 240 C 120 240, 180 110, 290 110 C 400 110, 460 240, 560 240 C 660 240, 720 110, 830 110 C 940 110, 1000 240, 1050 240"
              stroke="url(#orchardWaveGradient)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>

          {/* 5 Positioning Columns on the Wave */}
          <div className="absolute inset-0 grid grid-cols-5 gap-3 pointer-events-none">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isHigh = step.position === "top";
              const isHovered = activeStep === idx;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center justify-between h-full pointer-events-auto group"
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Top Slot (Cards for low nodes OR Top Nodes for high nodes) */}
                  <div className="w-full flex flex-col items-center justify-center h-[140px]">
                    {!isHigh ? (
                      /* Text card positioned above the low node */
                      <div
                        ref={(el) => {
                          cardsRef.current[idx] = el;
                        }}
                        className="relative w-full text-center px-1.5 space-y-0.5 transition-all duration-300 group-hover:-translate-y-1"
                      >
                        {/* Chinar Watermark Number */}
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-5xl font-black font-space text-[#BB5D0E]/20 group-hover:text-[#BB5D0E]/35 transition-colors pointer-events-none select-none">
                          {step.watermark}
                        </span>

                        <h3 className="relative z-10 text-[15px] font-bold font-space text-[#2B1203]">
                          {step.title}
                        </h3>
                        <p className="relative z-10 text-xs text-[#514646] font-work-sans leading-snug max-w-[170px] mx-auto">
                          {step.shortDesc}
                        </p>
                      </div>
                    ) : (
                      /* High Badge Node (sitting on wave peak Y=110px) */
                      <div
                        ref={(el) => {
                          nodesRef.current[idx] = el;
                        }}
                        className="relative flex flex-col items-center justify-center mt-7"
                      >
                        {/* Glowing Squircle Housing */}
                        <div
                          className={`relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FFFDF9] border border-[#6E2C00]/20 shadow-lg transition-all duration-300 group-hover:scale-110 cursor-pointer ${
                            isHovered
                              ? "shadow-[#D8992E]/30 ring-3 ring-[#FFD37C]/55"
                              : "shadow-[#6E2C00]/10"
                          }`}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#BB5D0E]/12 text-[#6E2C00]">
                            <IconComp className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Step Pill in Walnut/Maroon below the node */}
                        <span className="mt-1.5 text-[10px] font-mono font-bold text-[#7E393F] transition-colors uppercase tracking-wider">
                          Step {step.stepNumber}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Slot (Low Nodes for low positions OR Cards for high nodes) */}
                  <div className="w-full flex flex-col items-center justify-center h-[140px]">
                    {!isHigh ? (
                      /* Low Badge Node (sitting on wave trough Y=240px) */
                      <div
                        ref={(el) => {
                          nodesRef.current[idx] = el;
                        }}
                        className="relative flex flex-col items-center justify-center mb-7"
                      >
                        <div
                          className={`relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FFFDF9] border border-[#6E2C00]/20 shadow-lg transition-all duration-300 group-hover:scale-110 cursor-pointer ${
                            isHovered
                              ? "shadow-[#D8992E]/30 ring-3 ring-[#FFD37C]/55"
                              : "shadow-[#6E2C00]/10"
                          }`}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#BB5D0E]/12 text-[#6E2C00]">
                            <IconComp className="w-4 h-4" />
                          </div>
                        </div>

                        <span className="mt-1.5 text-[10px] font-mono font-bold text-[#7E393F] transition-colors uppercase tracking-wider">
                          Step {step.stepNumber}
                        </span>
                      </div>
                    ) : (
                      /* Text card positioned below the high node */
                      <div
                        ref={(el) => {
                          cardsRef.current[idx] = el;
                        }}
                        className="relative w-full text-center px-1.5 space-y-0.5 transition-all duration-300 group-hover:translate-y-1"
                      >
                        {/* Chinar Watermark Number */}
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-5xl font-black font-space text-[#BB5D0E]/20 group-hover:text-[#BB5D0E]/35 transition-colors pointer-events-none select-none">
                          {step.watermark}
                        </span>

                        <h3 className="relative z-10 text-[15px] font-bold font-space text-[#2B1203]">
                          {step.title}
                        </h3>
                        <p className="relative z-10 text-xs text-[#514646] font-work-sans leading-snug max-w-[170px] mx-auto">
                          {step.shortDesc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 3. Mobile / Tablet Connected Vertical Storyline (5 Steps) ── */}
        <div className="block lg:hidden relative pl-6 space-y-6 my-4">
          {/* Vertical Connecting SVG Line */}
          <div className="absolute left-6 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#6E2C00] via-[#BB5D0E] to-[#D8992E]" />

          {steps.map((step) => {
            const IconComp = step.icon;

            return (
              <div key={step.id} className="relative flex items-start gap-3.5">
                {/* Step Node */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFFDF9] border border-[#6E2C00]/20 shadow-sm text-[#6E2C00] shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#6E2C00]/15 shadow-2xs flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#7E393F] uppercase tracking-wider">
                      Step {step.stepNumber} {"//"} {step.badgeLabel}
                    </span>
                    <span className="text-lg font-black font-space text-[#BB5D0E]/30">
                      {step.watermark}
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold font-space text-[#2B1203]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#514646] font-work-sans mt-0.5 leading-snug">
                    {step.shortDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
