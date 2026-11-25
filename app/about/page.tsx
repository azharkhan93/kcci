"use client";

import React from "react";
import {
  AboutHero,
  KcciHeritagePoetryBand,
  AboutMission,
  WhatWeDo,
  CoreAdvantages,
 
  PartnerCta,
} from "@/app/components";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
   
      <AboutHero />

      <KcciHeritagePoetryBand />

    
      <AboutMission />

     
      <WhatWeDo />

     
      <CoreAdvantages />

    
    

      
      <PartnerCta />
    </main>
  );
}
