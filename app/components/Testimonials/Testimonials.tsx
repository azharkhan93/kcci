"use client";

import React from "react";
import { TESTIMONIALS_DATA, TESTIMONIALS_HEADER } from "@/app/constants/testimonials";
import { TestimonialMarquee } from "./TestimonialMarquee";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-label="Farm2i Client Testimonials"
      className="relative w-full py-20 md:py-28 border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10 lg:space-y-14">
        {/* ── Section Header ── */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {TESTIMONIALS_HEADER.titlePart1}
            <span className="text-[#1b4332] font-extrabold">
              {TESTIMONIALS_HEADER.titlePart2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {TESTIMONIALS_HEADER.subtitle}
          </p>
        </div>
      </div>

      {/* ── Seamless GSAP Marquee Container with More Horizontal Breathing Room ── */}
      <div className="mt-8 sm:mt-12 w-full px-4 sm:px-8">
        <TestimonialMarquee items={TESTIMONIALS_DATA} speed={34} />
      </div>
    </section>
  );
};
