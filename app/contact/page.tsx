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
    <main className="flex flex-col bg-white min-h-screen pt-24  md:pt-28">
      
      <ContactHero
        badge="CONNECT WITH FARM2I"
        title="GET IN TOUCH WITH US"
        subtitle="Have questions about our satellite mapping, soil testing, IoT sensors, or precision agriculture platform? Our team is here to assist you."
      />

      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 space-y-12 md:space-y-16">
       
        <section aria-label="Contact Information">
          <ContactInfoCards />
        </section>

      
        <section aria-label="Direct Inquiry Form and Office Location">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
           
            <div className="md:col-span-7 flex">
              <ContactForm className="w-full h-full" />
            </div>

            
            <div className="md:col-span-5 flex">
              <ContactMap className="w-full h-full" />
            </div>
          </div>
        </section>
      </div>

    
      
    </main>
  );
}
