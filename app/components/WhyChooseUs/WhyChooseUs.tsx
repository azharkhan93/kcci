"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { WHY_CHOOSE_HEADER, WHY_CHOOSE_ITEMS } from "@/app/constants/whyChooseUs";

export interface WhyChooseUsProps {
  className?: string;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ className = "" }) => (
  <section id="why-choose-us" className={`relative w-full py-16 md:py-24 bg-white border-b border-slate-100 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      {/* Header & CTA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {WHY_CHOOSE_HEADER.titlePart1}
            <span className="text-[#1b4332] font-extrabold">{WHY_CHOOSE_HEADER.titlePart2}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{WHY_CHOOSE_HEADER.subtitle}</p>
        </div>
        <Link
          href={WHY_CHOOSE_HEADER.ctaHref}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all self-start md:self-auto"
        >
          <span>{WHY_CHOOSE_HEADER.ctaText}</span>
          <ArrowRight className="w-4 h-4 text-emerald-300" />
        </Link>
      </div>

      {/* Connected Architectural Pillar Strip */}
      <div className="border-y border-slate-200/90 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 grid grid-cols-1 md:grid-cols-3">
        {WHY_CHOOSE_ITEMS.map(({ id, number, title, description, Icon, highlight }) => (
          <div key={id} className="group p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8 hover:bg-slate-50/70 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-black text-[#1b4332] px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/60">{number}</span>
                <span className="h-px w-8 bg-slate-200 group-hover:w-14 group-hover:bg-[#1b4332] transition-all duration-300" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#1b4332] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#1b4332] transition-colors">{title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-[#1b4332] transition-colors pt-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
