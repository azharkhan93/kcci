"use client";

import React from "react";
import {
  Hero,
  KeySectors,
  LatestNews,
  KcciEventsShowcase,
  Testimonials,
  OfficeBearers,
  PartnerCta,
  KcciHeritagePoetryBand,
} from "@/app/components";

export default function HomeContent() {
  return (
    <main className="flex flex-col bg-[#FBF7F2] relative">
      {/* ── 1. KCCI Hero Carousel ── */}
      <Hero />
     

      {/* ── 2. Our Industries & Areas ── */}
      <KeySectors />
      <KcciHeritagePoetryBand />

      {/* ── 3. Latest News & Updates ── */}
      <LatestNews />
       

      {/* ── 4. Chamber Summits & Upcoming Events (Three.js 3D Marquee) ── */}
      <KcciEventsShowcase />

      {/* ── 5. Member Voices & Regional Impact ── */}
      <Testimonials />

      {/* ── 6. Office Bearers & Executive Committee ── */}
      <OfficeBearers />

      {/* ── 7. Connect With KCCI CTA ── */}
      <PartnerCta />
       
    </main>
  );
}
