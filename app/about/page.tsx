"use client";

import React from "react";
import {
  AboutHero,
  AboutKeyStats,
  AboutMission,
  AboutSpecializations,
  AboutFacilities,
  AboutLeadership,
  CtaSection,
} from "@/app/components";

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-white min-h-screen pt-20 sm:pt-24 md:pt-28">
      {/* ── 1. Hero Header (Matching ContactHero Style) ── */}
      <AboutHero
        badge="EST. DIVISION OF SOIL SCIENCE"
        title="ABOUT OUR GIS & SOIL SCIENCE LABORATORY"
        subtitle="Pioneering precision agriculture, remote sensing analytics, in-situ root profiling, and digital soil health diagnostics across the temperate agricultural ecosystems of Jammu & Kashmir."
      />

      {/* ── 2. Content Sections Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
        {/* Key Metrics / Highlights */}
        <section aria-label="Key Laboratory Statistics">
          <AboutKeyStats />
        </section>

        {/* Mission & Strategic Vision */}
        <section aria-label="Mission and Vision">
          <AboutMission />
        </section>

        {/* Core Specializations & Capabilities */}
        <section aria-label="Core Capabilities">
          <AboutSpecializations />
        </section>

        {/* Analytical Facilities & Infrastructure */}
        <section aria-label="Research Facilities">
          <AboutFacilities />
        </section>

        {/* Scientific Leadership & Faculty (Showing 3 members preview) */}
        <section id="team" aria-label="Faculty and Leadership">
          <AboutLeadership
            limit={3}
            viewAllHref="/lab-members"
            title="Scientific Investigators & Faculty"
            subtitle="Meet our principal investigators and senior scientists directing cutting-edge field and laboratory research."
          />
        </section>
      </div>

      {/* ── 3. Collaborative Research CTA ── */}
      <CtaSection
        badge="JOIN OUR RESEARCH"
        title="EXPLORE COLLABORATIVE RESEARCH WITH OUR FACULTY"
        buttonText="GET IN TOUCH"
        href="/contact"
      />
    </main>
  );
}
