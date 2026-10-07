"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export interface ContactMapProps {
  className?: string;
}

export const ContactMap: React.FC<ContactMapProps> = ({ className = "" }) => {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=Batamaloo+Srinagar+Jammu+and+Kashmir+190006`;

  return (
    <div
      id="lab-map"
      className={`relative w-full h-full min-h-[460px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 flex flex-col group ${className}`}
    >
      {/* ── Interactive Google Map Embedded Iframe (Full-bleed) ── */}
      <iframe
        title="Farm Health Innovations Headquarters Location"
        src="https://maps.google.com/maps?q=Batamaloo%20Srinagar%20Jammu%20and%20Kashmir&t=m&z=15&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full absolute inset-0 border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* ── Floating Minimalist Location Tag (Top-Left) ── */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md pointer-events-auto">
        <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <MapPin className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900 font-space leading-tight">
            Headquarters Office
          </p>
          <p className="text-[10px] text-slate-500 font-work-sans">
            Batamaloo, Srinagar, J&amp;K 190006
          </p>
        </div>
      </div>

      {/* ── Floating "Open in Google Maps" Button (Bottom-Right) ── */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-auto">
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#124413] hover:bg-[#081c15] text-white text-xs font-bold shadow-lg shadow-emerald-950/25 border border-emerald-500/20 backdrop-blur-md transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer font-space"
        >
          <Navigation className="w-3.5 h-3.5 text-emerald-400" />
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3 text-white/60" />
        </a>
      </div>
    </div>
  );
};
