"use client";

import React from "react";
import {
  AboutHero,
  AboutLeadership,
  CtaSection,
} from "@/app/components";

export default function LabMembersPage() {
  return (
    <main className="flex flex-col bg-white min-h-screen pt-20 sm:pt-24 md:pt-28">
    
      <AboutHero
        badge="RESEARCH TEAM & SCHOLARS"
        title="MEET OUR FACULTY & LAB MEMBERS"
        subtitle="The dedicated soil scientists, GIS remote sensing analysts, doctoral scholars, and technical specialists powering precision agronomy and analytical laboratory operations at SKUAST-Kashmir."
      />

      {/* ── 2. Full Lab Members Directory ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        <section aria-label="Complete Team Directory">
          <AboutLeadership
            showFilter={true}
            title="All Faculty, Researchers & Scholars"
            subtitle="Browse our multidisciplinary team across faculty investigators, doctoral research fellows, and technical laboratory supervisors."
          />
        </section>
      </div>

      {/* ── 3. Collaborative Fellowship CTA ── */}
      <CtaSection
        badge="JOIN OUR RESEARCH"
        title="PURSUING POSTGRADUATE OR DOCTORAL RESEARCH?"
        buttonText="CONTACT DIVISION"
        href="/contact"
      />
    </main>
  );
}
