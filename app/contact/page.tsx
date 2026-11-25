"use client";

import React from "react";
import {
  ContactHero,
  ContactInfoCards,
  ContactForm,
  ContactMap,
} from "@/app/components";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F2] text-[#2B1203]">
      <ContactHero
        badge="THE KASHMIR CHAMBER OF COMMERCE & INDUSTRY"
        title="GET IN TOUCH WITH US"
        subtitle="Have questions regarding trade facilitation, Certificate of Origin issuance, visa recommendation letters, membership, or general chamber inquiries? Our secretariat is here to assist you."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12 md:space-y-14">
        <section aria-label="Contact Information">
          <ContactInfoCards />
        </section>

        <section aria-label="Direct Inquiry Form and Office Location">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col">
              <ContactForm className="w-full h-full" />
            </div>

            <div className="lg:col-span-5 flex flex-col min-h-[460px] lg:min-h-0">
              <ContactMap className="w-full h-full flex-1" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
