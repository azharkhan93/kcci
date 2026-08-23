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
  Layers,
} from "lucide-react";
import { LAB_CONTACT_INFO } from "@/app/constants/navigation";

export interface ContactMapProps {
  className?: string;
}

export const ContactMap: React.FC<ContactMapProps> = ({ className = "" }) => {
  const [copiedCoords, setCopiedCoords] = useState<boolean>(false);
  const [mapView, setMapView] = useState<"standard" | "satellite">("standard");

  const coordinates = "34.1485° N, 74.8732° E";
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=SKUAST-K+Shalimar+Srinagar+Jammu+and+Kashmir+190025`;

  const handleCopyCoords = () => {
    navigator.clipboard.writeText("34.1485, 74.8732");
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <div
      id="lab-map"
      className={`bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 md:p-10 shadow-sm ${className}`}
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Campus Location</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            Find the Soil & GIS Testing Laboratory
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
            Located within the Division of Soil Science, Faculty of Agriculture at SKUAST-K Main Campus, Shalimar, Srinagar.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl self-start md:self-auto border border-gray-200">
          <button
            type="button"
            onClick={() => setMapView("standard")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              mapView === "standard"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Interactive Map</span>
          </button>

          <button
            type="button"
            onClick={() => setMapView("satellite")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              mapView === "satellite"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#d99b26]" />
            <span>Satellite View</span>
          </button>
        </div>
      </div>

      {/* ── Map Container Frame with Overlays ── */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-300/80 shadow-inner min-h-[420px] md:min-h-[480px] bg-gray-100">
        {/* Google Maps Embed iframe */}
        <iframe
          title="SKUAST-K Soil Testing Laboratory Location"
          src={
            mapView === "satellite"
              ? "https://maps.google.com/maps?q=SKUAST-K%20Shalimar%20Srinagar%20Jammu%20and%20Kashmir&t=k&z=17&ie=UTF8&iwloc=&output=embed"
              : "https://maps.google.com/maps?q=SKUAST-K%20Shalimar%20Srinagar%20Jammu%20and%20Kashmir&t=m&z=15&ie=UTF8&iwloc=&output=embed"
          }
          className="w-full h-full min-h-[420px] md:min-h-[480px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Campus Badge (Top-Left) */}
        <div className="absolute top-4 left-4 z-10 max-w-[280px] sm:max-w-xs bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-xl p-3.5 shadow-lg">
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1b4332] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#1b4332]">
                Destination Landmark
              </p>
              <h4 className="text-xs font-extrabold text-gray-900 leading-tight">
                Division of Soil Science & GIS Lab
              </h4>
              <p className="text-[11px] text-gray-600 mt-0.5">
                SKUAST-K Main Campus, Shalimar, Srinagar
              </p>
            </div>
          </div>
        </div>

        {/* Floating Quick Action Overlay (Bottom-Right) */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-wrap items-center gap-2">
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* ── Location Guidance & Travel Notes ── */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
        {/* GPS Coordinates */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/60 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#1b4332]" />
              GPS Coordinates
            </span>
            <button
              type="button"
              onClick={handleCopyCoords}
              className="text-[11px] font-bold text-[#1b4332] hover:text-[#081c15] inline-flex items-center gap-1 cursor-pointer"
            >
              {copiedCoords ? (
                <>
                  <Check className="w-3 h-3 text-[#1b4332]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-gray-900">
            {coordinates}
          </p>
        </div>

        {/* Road & Transit Guidance */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/60 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-2">
            <Car className="w-3.5 h-3.5 text-[#1b4332]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Campus Entry & Parking
            </span>
          </div>
          <p className="text-xs text-gray-700 leading-snug">
            Enter via <span className="font-bold text-gray-900">Main Gate 1</span> on Shalimar Road. Visitor and sample-drop parking is available adjacent to the Faculty Block.
          </p>
        </div>

        {/* Airport & City Transit */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/60 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-2">
            <Plane className="w-3.5 h-3.5 text-[#d99b26]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Transit Distances
            </span>
          </div>
          <p className="text-xs text-gray-700 leading-snug">
            ~22 km from <span className="font-semibold text-gray-900">Sheikh ul-Alam Airport (SXR)</span>; ~14 km from Lal Chowk / Dal Lake Boulevard.
          </p>
        </div>
      </div>
    </div>
  );
};
