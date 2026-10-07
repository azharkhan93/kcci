"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import { NITROFIX_FEATURE_CONTENT } from "@/app/constants/nitrofixFeature";

export const NitrofixFeature: React.FC = () => {
  const {
    headingPrefix,
    headingHighlight,
    subtitle,
    ctaText,
    ctaHref,
    cards,
    outcomes,
  } = NITROFIX_FEATURE_CONTENT;

  return (
    <section
      id="nitrofix-feature"
      className="relative w-full py-8 md:py-8 bg-white "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Explore Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 sm:mb-6">
          <div className="text-left max-w-2xl space-y-0.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-space tracking-tight">
              <span>{headingPrefix}</span>
              <span className="text-gradient-leaf font-bold">
                {headingHighlight}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-work-sans">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <Link href={ctaHref || "/nitrofix"}>
              <Button variant="primary" size="sm">
                <span className="inline-flex items-center gap-1.5">
                  <span>{ctaText || "Explore Product"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* 3 Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-center py-1">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isCenter = idx === 1;
            const isCore = idx === 0;

            return (
              <div
                key={card.id}
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
                }}
                className={`group relative p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:skew-y-0 hover:scale-100 ${
                  isCenter
                    ? "md:scale-[0.95] md:rotate-1 md:skew-y-1 md:z-10 shadow-sm"
                    : "scale-100"
                } ${
                  isCore
                    ? "bg-gradient-to-br from-emerald-400 via-emerald-600/30 to-emerald-400"
                    : isCenter
                      ? "bg-gradient-to-br from-slate-200 via-sky-200 to-sky-400"
                      : "bg-gradient-to-br from-slate-200 via-teal-200 to-teal-400"
                }`}
              >
                <div
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
                  }}
                  className={`relative flex flex-col justify-between h-full p-4 sm:p-4.5 ${
                    isCore
                      ? "bg-gradient-to-br from-[#0e2a1e] to-[#06140d] text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  {/* Top: Header, Icon & Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center ${
                            isCore
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {card.step}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold uppercase ${
                          isCore
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-[15px] sm:text-base font-bold font-space tracking-tight ${isCore ? "text-white" : "text-slate-900"}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 font-work-sans leading-snug ${isCore ? "text-emerald-100/75" : "text-slate-600"}`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom: Meta & Arrow */}
                  <Link
                    href={ctaHref || "/nitrofix"}
                    className="pt-2.5 mt-3 pr-3 border-t border-slate-100/30 flex items-center justify-between text-[11px] font-mono text-slate-500 hover:text-emerald-600 transition-colors"
                  >
                    <span className={isCore ? "text-emerald-300" : ""}>
                      {card.tag}
                    </span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};
