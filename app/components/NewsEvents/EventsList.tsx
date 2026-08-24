"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, User, ArrowRight, Sparkles } from "lucide-react";
import { LabEvent, LAB_EVENTS } from "@/app/constants/newsEvents";
import { Button } from "../Button";

export interface EventsListProps {
  events?: LabEvent[];
  className?: string;
}

export const EventsList: React.FC<EventsListProps> = ({
  events = LAB_EVENTS,
  className = "",
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* ── Section Title Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#8a5d0a] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d99b26]" />
            <span>Academic &amp; Outreach Calendar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
            Upcoming Workshops &amp; Symposia
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            Join our hands-on technical training sessions, district grower diagnostic camps, and scientific seminars.
          </p>
        </div>

        <Link
          href="/contact"
          className="text-xs font-bold text-[#1b4332] hover:text-[#081c15] self-start sm:self-auto hover:underline"
        >
          Propose an Event / Workshop →
        </Link>
      </div>

      {/* ── Events Timeline List ── */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
          >
            {/* Left: Date Stamp & Main Content */}
            <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
              {/* Date Box */}
              <div className="w-16 sm:w-20 rounded-2xl bg-gradient-to-br from-[#1b4332] to-[#081c15] text-white p-3 text-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <span className="block text-xl sm:text-2xl font-black leading-none text-[#d99b26]">
                  {event.dayMonth.day}
                </span>
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-200 mt-1">
                  {event.dayMonth.month}
                </span>
              </div>

              {/* Event Details */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-[#2d6a4f] font-bold">
                    {event.type}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-emerald-700 font-bold">
                    {event.status}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-gray-950 group-hover:text-[#1b4332] transition-colors leading-snug mb-2">
                  {event.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-3">
                  {event.description}
                </p>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d99b26]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1b4332]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span>{event.speaker}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="md:self-center flex-shrink-0">
              <Link href={event.registrationHref || "/contact"}>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Register / Inquire
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
