"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import { KCCI_MANDATE_PILLARS_CONTENT } from "@/app/constants/aboutKcci";

gsap.registerPlugin(ScrollTrigger);

export const KcciMandatePillars: React.FC = () => {
  const { eyebrow, headingPrefix, headingHighlight, subtitle, pillars } =
    KCCI_MANDATE_PILLARS_CONTENT;

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
            clipPath: "inset(0% 0% 18% 0%)",
            y: 28,
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            opacity: 1,
            duration: 0.78,
            stagger: 0.14,
            ease: "expo.out",
            clearProps: "transform,clipPath",
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="kcci-mandate"
      aria-label="Chamber Institutional Mandate"
      className="relative w-full py-12 sm:py-16 bg-white border-b border-[#6E2C00]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 space-y-1.5">
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

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.id}
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
                }}
                className="group relative flex p-[1.5px] bg-gradient-to-br from-[#D8992E]/55 via-[#6E2C00]/25 to-[#A61A28]/45 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 19px), calc(100% - 19px) 100%, 0 100%)",
                  }}
                  className="w-full h-full p-5 sm:p-6 bg-[#FBF7F2] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#6E2C00]/10 text-[#6E2C00]">
                        <Icon className="w-3.5 h-3.5 text-[#BB5D0E]" />
                        <h6 className="text-[10px] font-mono font-semibold uppercase tracking-wider">
                          {pillar.tag}
                        </h6>
                      </div>

                      <h6 className="text-xs font-mono font-bold text-[#A61A28]">
                        {pillar.number}
                      </h6>
                    </div>

                    <h3 className="text-lg font-bold font-space text-[#2B1203] leading-snug tracking-tight group-hover:text-[#6E2C00] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#514646] font-work-sans leading-relaxed pt-3 border-t border-[#6E2C00]/12">
                    {pillar.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
