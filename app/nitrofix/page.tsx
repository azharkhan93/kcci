"use client";

import React from "react";
import {
  NitrofixOverview,
  NitrofixWhy,
  NitrofixHowItWorks,
  NitrofixSustainability,
  NitrofixWhatsNext,
  NitrofixWhoWeServe,
  NitrofixApplications,
  PartnerCta,
} from "@/app/components";

export default function NitrofixProductPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ── 04. NITROFIX Product Hero & Studio Packaging Showcase ── */}
      <NitrofixOverview />

      {/* ── Why NitroFIX & Big Idea ── */}
      <NitrofixWhy />

      {/* ── 05. HOW NITROFIX WORKS ── */}
      <NitrofixHowItWorks />

      {/* ── 06. SUSTAINABILITY & Circular Upcycling ── */}
      <NitrofixSustainability />

      {/* ── 07. WHAT'S NEXT & Innovation Horizons ── */}
      <NitrofixWhatsNext />

      {/* ── 08. WHO WE SERVE & Minimal Stakeholder Nodes ── */}
      <NitrofixWhoWeServe />

      {/* ── 09. APPLICATIONS & Target Production Domains ── */}
      <NitrofixApplications />

      {/* ── Partner & Commercial Distribution CTA ── */}
      <PartnerCta />
    </main>
  );
}
