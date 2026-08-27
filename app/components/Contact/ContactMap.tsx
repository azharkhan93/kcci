"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Compass,
  Copy,
  Check,
  ExternalLink,
  Car,
  Plane,
} from "lucide-react";
import { LAB_CONTACT_INFO } from "@/app/constants/navigation";

export interface ContactMapProps {
  className?: string;
}

export const ContactMap: React.FC<ContactMapProps> = ({ className = "" }) => {
  const [copiedCoords, setCopiedCoords] = useState<boolean>(false);

  const coordinates = "34.0754° N, 74.7915° E";
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=Batamaloo+Srinagar+Jammu+and+Kashmir+190006`;

  const handleCopyCoords = () => {
    navigator.clipboard.writeText("34.0754, 74.7915");
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <div
      id="lab-map"
      className={`bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm ${className}`}
    >
      
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#2d6a4f] mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Map &amp; Directions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Find Farm2i Headquarters
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
          {LAB_CONTACT_INFO.address}
        </p>
      </div>

     
      <div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-slate-300/80 shadow-inner min-h-[300px] sm:min-h-[340px] bg-slate-100 mb-6">
        
        <iframe
          title="Farm2i Headquarters Location"
          src="https://maps.google.com/maps?q=Batamaloo%20Srinagar%20Jammu%20and%20Kashmir&t=m&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full min-h-[300px] sm:min-h-[340px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Campus Badge (Top-Left) */}
        <div className="absolute top-3 left-3 z-10 max-w-[240px] sm:max-w-xs bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 shadow-md">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1b4332] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#1b4332]">
                Farm2i Headquarters
              </p>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">
                4/3 S. D Colony Batamaloo
              </h4>
              <p className="text-[10px] text-slate-600 mt-0.5">
                Srinagar, J&amp;K 190006
              </p>
            </div>
          </div>
        </div>

        {/* Floating Quick Action Overlay (Bottom-Right) */}
        <div className="absolute bottom-3 right-3 z-10">
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* ── Location Guidance & Travel Notes ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
        {/* GPS Coordinates */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#1b4332]" />
              GPS Coords
            </span>
            <button
              type="button"
              onClick={handleCopyCoords}
              className="text-[10px] font-bold text-[#1b4332] hover:text-[#081c15] inline-flex items-center gap-1 cursor-pointer"
            >
              {copiedCoords ? (
                <>
                  <Check className="w-2.5 h-2.5 text-[#1b4332]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-2.5 h-2.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="font-mono text-xs font-bold text-slate-900 truncate">
            {coordinates}
          </p>
        </div>

       
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 flex flex-col justify-between">
          <div className="flex items-center gap-1 mb-1.5">
            <Car className="w-3 h-3 text-[#1b4332]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              City Transit
            </span>
          </div>
          <p className="text-[11px] text-slate-700 leading-snug">
            Accessible via bypass highway and Srinagar central routes.
          </p>
        </div>

        {/* Airport & City Transit */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 flex flex-col justify-between">
          <div className="flex items-center gap-1 mb-1.5">
            <Plane className="w-3 h-3 text-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Distances
            </span>
          </div>
          <p className="text-[11px] text-slate-700 leading-snug">
            ~11 km to Airport (SXR); ~3 km to Lal Chowk center.
          </p>
        </div>
      </div>
    </div>
  );
};
