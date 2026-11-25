"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import { KCCI_OBJECTIVES_CONTENT } from "@/app/constants/aboutKcci";

gsap.registerPlugin(ScrollTrigger);

export const KcciObjectivesSection: React.FC = () => {
  const { eyebrow, headingPrefix, headingHighlight, subtitle, items } =
    KCCI_OBJECTIVES_CONTENT;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          {
            y: 26,
            rotateX: 10,
            opacity: 0,
            transformPerspective: 900,
          },
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "expo.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
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
      id="kcci-objectives"
      aria-label="Our Objectives"
      className="relative w-full py-12 sm:py-16 bg-[#FBF7F2] border-b border-[#6E2C00]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Intro & Objectives Header */}
        <div
          ref={headerRef}
          className="space-y-3 pb-6 mb-8 border-b border-[#6E2C00]/15 max-w-3xl"
        >
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
          <p className="text-xs sm:text-sm text-[#514646] font-work-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 7 Objectives Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isLead = idx === 0;

            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  isLead
                    ? "sm:col-span-2 bg-gradient-to-br from-[#3A1705] via-[#2B1203] to-[#1D0B02] text-[#FBF7F2] border-[#FFD37C]/35 shadow-[0_14px_34px_-14px_rgba(43,18,3,0.42)]"
                    : "bg-white border-[#6E2C00]/15 hover:border-[#BB5D0E]/45 shadow-xs hover:shadow-md text-[#2B1203]"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isLead
                          ? "bg-[#BB5D0E]/30 border border-[#FFD37C]/30 text-[#FFD37C]"
                          : "bg-[#F3EAE0] text-[#6E2C00] group-hover:bg-[#6E2C00] group-hover:text-[#FFD37C]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <h6
                      className={`text-[11px] font-mono font-bold ${
                        isLead ? "text-[#FFD37C]/80" : "text-[#BB5D0E]"
                      }`}
                    >
                      {item.number}
                    </h6>
                  </div>

                  <h3
                    className={`text-base font-bold font-space leading-snug tracking-tight ${
                      isLead ? "text-white" : "text-[#2B1203]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className={`mt-3 text-xs font-work-sans leading-relaxed ${
                    isLead ? "text-[#FBF7F2]/80" : "text-[#514646]"
                  }`}
                >
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
