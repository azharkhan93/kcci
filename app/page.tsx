"use client";

import React from "react";
import { Leaf, Droplets, Sparkles, ShieldCheck } from "lucide-react";
import {
  Hero,
  NitrofixFeature,
  NitrofixBenefits,
  OrchardProcess,
  PartnerCta,
} from "@/app/components";

export default function HomeContent() {
  return (
    <main className="flex flex-col bg-white relative">
      {/* ── 1. Hero Canopy Slider ── */}
      <Hero />

      {/* ── 2. Flagship Innovation & Core Agricultural Solutions Header ── */}
      <section className="pt-10 md:pt-14 pb-5 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left Content Column */}
            <div className="max-w-2xl xl:max-w-3xl space-y-2.5">
            

              {/* Main Section Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space text-slate-900 tracking-tight leading-tight">
                <span>Supplying Agricultural Inputs Today. </span>
                <span className="text-gradient-leaf">Developing Smarter AgTech for Tomorrow.</span>
              </h2>

              {/* Simple, Clear Strategic Intro */}
              <p className="text-sm sm:text-base text-slate-600 font-work-sans leading-relaxed">
                Farm Health Innovations is an agricultural company supplying high-performing crop inputs today while developing smarter, sustainable technologies for tomorrow.
              </p>
            </div>

            {/* Right Side: Innovation Highlight Badges */}
            <div className="flex flex-wrap lg:justify-end gap-2 lg:max-w-sm xl:max-w-md shrink-0 self-start lg:self-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-semibold text-xs font-mono shadow-2xs">
                <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Flagship: NitroFIX™
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/70 text-emerald-800 border border-emerald-200/60 text-xs font-mono shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Upcycled Orchard Biomass
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200/60 text-xs font-mono shadow-2xs">
                <Droplets className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                Up to 40% Water Saved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/60 text-xs font-mono shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                95% Fertilizer Efficiency
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                Zero Chemical Runoff
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Product Highlights & Agricultural Solutions ── */}
      <NitrofixFeature />
      <NitrofixBenefits />
      <OrchardProcess />
      <PartnerCta />
    </main>
  );
}
