"use client";

import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { KCCI_EVENTS_DATA } from "@/app/constants/eventsKcci";
import { ThreeVerticalEventMarquee } from "./ThreeVerticalEventMarquee";

export const KcciEventsShowcase: React.FC = () => {
  const {
    completedEyebrow,
    completedHeadingPrefix,
    completedHeadingHighlight,
    completedDescription,
    completedEvents,
    upcomingEyebrow,
    upcomingHeadingPrefix,
    upcomingHeadingHighlight,
    upcomingDescription,
    upcomingEvents,
  } = KCCI_EVENTS_DATA;

  return (
    <section
      id="kcci-events"
      aria-label="Chamber Conclaves & Events Showcase"
      className="relative w-full py-12 sm:py-16 bg-[#FBF7F2] border-b border-[#6E2C00]/15 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Grid: Left Column Completed Events | Right Column Upcoming 3D Marquee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── Left Column: Completed Events (Compact, No Images) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <h6 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#A61A28] mb-1.5">
                {completedEyebrow}
              </h6>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-space text-[#2B1203] tracking-tight">
                {completedHeadingPrefix}
                <strong className="font-bold bg-gradient-to-r from-[#A61A28] via-[#BB5D0E] to-[#6E2C00] bg-clip-text text-transparent">
                  {completedHeadingHighlight}
                </strong>
              </h2>

              <div
                aria-hidden="true"
                className="w-10 h-[2px] bg-gradient-to-r from-[#A61A28] to-[#FFD37C] mt-2 mb-2"
              />

              <p className="text-xs text-[#2B1203]/75 font-work-sans leading-relaxed">
                {completedDescription}
              </p>
            </div>

            {/* Compact Minimal List of Completed Events */}
            <div className="divide-y divide-[#6E2C00]/15 border-y border-[#6E2C00]/15">
              {completedEvents.slice(0, 3).map((ev) => (
                <div
                  key={ev.id}
                  className="py-3 group transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#A61A28] shrink-0" />
                      <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A61A28]">
                        {ev.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2B1203]/5 border border-[#6E2C00]/15">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#1E7E34] shrink-0" />
                      <p className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#1E7E34]">
                        Concluded
                      </p>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-bold font-space text-[#2B1203] group-hover:text-[#6E2C00] transition-colors leading-snug">
                    {ev.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#514646] font-work-sans">
                    <MapPin className="w-3 h-3 text-[#BB5D0E] shrink-0" />
                    <p className="truncate">{ev.venue}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Action Link */}
            <div className="pt-1">
              <Link
                href="/about/history"
                className="inline-flex items-center gap-1.5 text-xs font-space font-bold uppercase tracking-wider text-[#6E2C00] hover:text-[#A61A28] transition-colors"
              >
                <p>View Chamber Archives</p>
                <ArrowRight className="w-3.5 h-3.5 text-[#A61A28]" />
              </Link>
            </div>
          </div>

          {/* ── Right Column: Upcoming Events 3D Marquee (Name, Date, Venue, No Image) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 pb-1">
              <div>
                <h6 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#A61A28] mb-1">
                  {upcomingEyebrow}
                </h6>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-space text-[#2B1203] tracking-tight">
                  {upcomingHeadingPrefix}
                  <strong className="font-bold bg-gradient-to-r from-[#A61A28] via-[#BB5D0E] to-[#6E2C00] bg-clip-text text-transparent">
                    {upcomingHeadingHighlight}
                  </strong>
                </h2>
              </div>
              <p className="text-[11px] text-[#514646] font-work-sans sm:max-w-xs sm:text-right">
                {upcomingDescription}
              </p>
            </div>

            <div className="relative w-full h-[370px] sm:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F3EAE0]/75 via-[#FBF7F2] to-[#F3EAE0]/50 border border-[#6E2C00]/15 shadow-[inset_0_2px_12px_rgba(43,18,3,0.06)]">
              {/* Soft Edge Depth Vignettes for 3D perspective */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FBF7F2] via-[#FBF7F2]/80 to-transparent z-10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FBF7F2] via-[#FBF7F2]/80 to-transparent z-10"
              />

              {/* Three.js Continuous 3D Vertical Marquee (Strictly Name, Date, Venue) */}
              <ThreeVerticalEventMarquee
                events={upcomingEvents}
                speed={0.95}
                className="w-full h-full"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="text-[11px] text-[#514646] font-work-sans">
                Drag vertically or hover to pause the schedule
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-space font-bold uppercase tracking-wider text-[#6E2C00] hover:text-[#A61A28] transition-colors"
              >
                <p>Secretariat Desk</p>
                <ArrowRight className="w-3.5 h-3.5 text-[#A61A28]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
