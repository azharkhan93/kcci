"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export interface ContactMapProps {
  className?: string;
}

export const ContactMap: React.FC<ContactMapProps> = ({ className = "" }) => {
  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Mohidin+Trust+Building+Residency+Road+Srinagar+190001";

  return (
    <div
      id="chamber-map"
      className={`relative w-full h-full min-h-[460px] rounded-3xl overflow-hidden border border-[#6E2C00]/20 shadow-sm bg-[#F3EAE0] flex flex-col group ${className}`}
    >
      {/* ── Interactive Google Map Embedded Iframe (Full-bleed) ── */}
      <iframe
        title="The Kashmir Chamber of Commerce & Industry Headquarters Location"
        src="https://maps.google.com/maps?q=Mohidin%20Trust%20Building%20Residency%20Road%20Srinagar%20190001&t=m&z=16&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full absolute inset-0 border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* ── Floating Minimalist Location Tag (Top-Left) ── */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#6E2C00]/20 shadow-md pointer-events-auto">
        <div className="w-7 h-7 rounded-xl bg-[#6E2C00] text-[#FFD37C] flex items-center justify-center shrink-0 shadow-xs">
          <MapPin className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#2B1203] font-space leading-tight">
            KCCI Secretariat Office
          </p>
          <p className="text-[10px] text-[#514646] font-work-sans">
            Mohidin Trust Building, Residency Road, Srinagar, 190001
          </p>
        </div>
      </div>

      {/* ── Floating "Open in Google Maps" Button (Bottom-Right) ── */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-auto">
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#6E2C00] hover:bg-[#7E393F] text-white text-xs font-bold shadow-lg shadow-[#6E2C00]/25 border border-[#FFD37C]/30 backdrop-blur-md transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer font-space"
        >
          <Navigation className="w-3.5 h-3.5 text-[#FFD37C]" />
          <p>Open in Google Maps</p>
          <ExternalLink className="w-3 h-3 text-white/70" />
        </a>
      </div>
    </div>
  );
};
