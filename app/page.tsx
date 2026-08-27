"use client";

import React from "react";
import {
  Hero,
  KeyBenefits,
  WhyChooseUs,
  AppGallery,
  Testimonials,
  TeamMembers,
  CtaSection,
} from "@/app/components";

export default function HomeContent() {
  return (
    <main className="flex flex-col bg-white relative">
      <Hero />
      <KeyBenefits />
      <WhyChooseUs />
      <AppGallery />
      <Testimonials />
      <TeamMembers />
      <CtaSection />
    </main>
  );
}
