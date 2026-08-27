"use client";

import React from "react";
import { Star, MapPin, Quote } from "lucide-react";
import { type TestimonialItem } from "@/app/constants/testimonials";

export interface TestimonialCardProps {
  item: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="relative flex-shrink-0 select-none group w-[310px] sm:w-[350px] md:w-[380px] p-[1.5px] bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 hover:from-[#1b4332]/60 hover:to-[#1b4332] shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl"
      style={{
        clipPath: "polygon(0% 0%, calc(100% - 22px) 0%, 100% 22px, 100% 100%, 0% 100%)",
      }}
    >
      {/* Inner Card Container with Matching Chamfer ClipPath */}
      <div
        className="relative w-full h-full bg-white p-5 sm:p-6 flex flex-col justify-between space-y-3.5 rounded-2xl"
        style={{
          clipPath: "polygon(0% 0%, calc(100% - 21px) 0%, 100% 21px, 100% 100%, 0% 100%)",
        }}
      >
        {/* Subtle Top-Right Chamfer Accent Node */}
        <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-slate-100 to-transparent pointer-events-none" />

        {/* Quote Icon Watermark */}
        <Quote className="absolute top-3.5 right-6 w-8 h-8 text-slate-100 pointer-events-none -z-0" />

        {/* Top Header: Star Ratings + Impact Metric Pill */}
        <div className="relative z-10 flex items-center justify-between gap-2 pr-4">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-[#1b4332]">
            <span className="w-1 h-1 rounded-full bg-[#1b4332]" />
            <span className="truncate">{item.metricLabel}:</span>
            <span className="font-extrabold">{item.metricValue}</span>
          </div>
        </div>

        {/* Testimonial Quote (Snug line spacing without excessive gap) */}
        <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic line-clamp-3">
          &ldquo;{item.quote}&rdquo;
        </p>

        {/* Bottom Author Row */}
        <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <Icon className="w-4 h-4" />
            </div>

            <div className="min-w-0">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug truncate group-hover:text-[#1b4332] transition-colors">
                {item.name}
              </h4>
              <p className="text-[11px] text-slate-500 truncate">{item.role}</p>
            </div>
          </div>

          {/* Location & Crop Tag */}
          <div className="flex flex-col items-end flex-shrink-0">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[9px] font-mono font-medium text-slate-600 truncate">
              {item.cropTag}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
              <MapPin className="w-2.5 h-2.5 text-[#1b4332]" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
