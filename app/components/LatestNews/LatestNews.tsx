"use client";

import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { LATEST_NEWS_CONTENT } from "@/app/constants/latestNews";

export const LatestNews: React.FC = () => {
  const { headingPrefix, headingHighlight, description, items } =
    LATEST_NEWS_CONTENT;

  return (
    <section
      id="latest-news"
      aria-label="Latest News and Updates"
      className="relative w-full py-10 sm:py-12 bg-[#F3EAE0] border-b border-[#6E2C00]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Aligned Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-4 mb-6 border-b border-[#6E2C00]/15">
          <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#2B1203] leading-none">
            {headingPrefix}
            <strong className="font-bold text-gradient-leaf">
              {headingHighlight}
            </strong>
          </h2>
          <p className="text-xs sm:text-[13px] text-[#514646] font-work-sans leading-snug max-w-md md:text-right">
            {description}
          </p>
        </div>

        {/* 4 Chamfered Clip-Path Editorial News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
              }}
              className="group relative flex p-[1.5px] bg-gradient-to-br from-[#D8992E]/60 via-[#6E2C00]/25 to-[#A61A28]/50 shadow-[0_10px_26px_-14px_rgba(43,18,3,0.28)] hover:shadow-[0_16px_34px_-12px_rgba(110,44,0,0.34)] hover:-translate-y-1 transition-all duration-300"
            >
              <div
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 17px), calc(100% - 17px) 100%, 0 100%)",
                }}
                className="flex flex-col w-full h-full bg-[#FBF7F2] overflow-hidden"
              >
                {/* Card Top Photo */}
                <div className="relative h-36 w-full overflow-hidden bg-[#2B1203] shrink-0">
                  <div
                    aria-label={item.imageAlt}
                    role="img"
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${item.imageSrc}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#1A0B06]/70 via-[#1A0B06]/15 to-transparent"
                  />
                  <h6 className="absolute bottom-2.5 left-3 inline-flex items-center px-2 py-0.5 rounded-full bg-[#1A0B06]/70 backdrop-blur-md border border-[#FFD37C]/30 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#FFD37C]">
                    {item.category}
                  </h6>
                </div>

                {/* Card Content with Strict Ellipsis Alignment */}
                <div className="flex flex-col justify-between flex-1 p-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-medium text-[#7E393F]">
                      <Calendar className="w-3 h-3 text-[#BB5D0E] shrink-0" />
                      <p>{item.date}</p>
                    </div>

                    <h3 className="text-[14.5px] font-bold font-space text-[#2B1203] leading-snug tracking-tight group-hover:text-[#6E2C00] transition-colors truncate">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#514646] font-work-sans leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-2.5 mt-3 pr-4 border-t border-[#6E2C00]/12 flex items-center justify-between text-[11px] font-mono font-semibold text-[#6E2C00] group-hover:text-[#A61A28] transition-colors">
                    <p>Read More</p>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
