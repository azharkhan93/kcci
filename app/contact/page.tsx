"use client";

import React from "react";
import {
  ContactHero,
  ContactInfoCards,
  ContactForm,
  ContactMap,
  CtaSection,
} from "@/app/components";

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-white min-h-screen pt-20 sm:pt-24 md:pt-28">
      {/* ── Contact Hero / Breadcrumbs ── */}
      <ContactHero
        badge="CONNECT WITH OUR LAB"
        title="GET IN TOUCH WITH US"
        subtitle="Have questions about our soil and GIS research, want to submit field samples, or explore academic and industry research partnerships? Our laboratory team is here to assist you."
      />

      {/* ── Content Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        {/* ── 1. Contact Information Cards ── */}
        <section aria-label="Lab Contact Information">
          <ContactInfoCards />
        </section>

        {/* ── 2. Direct Inquiry Form ── */}
        <section aria-label="Send Inquiry">
          <ContactForm />
        </section>

        {/* ── 3. Interactive Map & Campus Directions ── */}
        <section aria-label="Campus Location Map">
          <ContactMap />
        </section>
      </div>

      {/* ── Lab Updates CTA Section ── */}
      <CtaSection
        badge="STAY UPDATED"
        title="FOLLOW OUR RESEARCH UPDATES"
        buttonText="EXPLORE ALL POSTS"
      />
    </main>
  );
}
