"use client";

import React from "react";
import {
  AboutHero,
  AboutMission,
  WhatWeDo,
  CoreAdvantages,
  StandardsLedger,
  PartnerCta,
} from "@/app/components";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
   
      <AboutHero />

    
      <AboutMission />

     
      <WhatWeDo />

     
      <CoreAdvantages />

    
      <StandardsLedger />

      
      <PartnerCta />
    </main>
  );
}
