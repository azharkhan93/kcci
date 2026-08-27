"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  CTA_HEADER_DEFAULT,
  CTA_STATS,
  CTA_PLATFORMS,
  type PlatformKey,
} from "@/app/constants/cta";

export interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  demoButtonText?: string;
  demoHref?: string;
  className?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = CTA_HEADER_DEFAULT.title,
  subtitle = CTA_HEADER_DEFAULT.subtitle,
  demoButtonText = CTA_HEADER_DEFAULT.demoButtonText,
  demoHref = CTA_HEADER_DEFAULT.demoHref,
  className = "",
}) => {
  const [platform, setPlatform] = useState<PlatformKey>("ios");
  const active = CTA_PLATFORMS[platform];

  return (
    <section
      id="cta-section"
      className={`relative w-full bg-white text-slate-900 py-10 sm:py-14 border-t border-slate-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ── Left Pitch & Metrics (7 cols) ── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              {subtitle}
            </p>

            <div className="flex items-center gap-4 flex-wrap pt-1">
              <Link
                href={demoHref}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#1b4332] hover:bg-[#081c15] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>{demoButtonText}</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </Link>

              <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#1b4332]" />
                <span>Instant Cloud Setup</span>
              </div>
            </div>

            {/* Mapped Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-slate-200 max-w-md">
              {CTA_STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">{value}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Scanner Card (5 cols) ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[270px] sm:max-w-[290px] bg-slate-50 border border-slate-200/80 rounded-3xl p-4 sm:p-5 shadow-sm space-y-3.5">
              <h3 className="text-center font-bold text-base sm:text-lg text-slate-900">
                Scan to Download
              </h3>

              {/* Mapped OS Segmented Selector */}
              <div className="grid grid-cols-2 p-1 bg-slate-200/70 rounded-xl border border-slate-300/60 gap-1">
                {(Object.entries(CTA_PLATFORMS) as [PlatformKey, (typeof CTA_PLATFORMS)[PlatformKey]][]).map(([key, { name, Icon }]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPlatform(key)}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      platform === key ? "bg-white text-[#1b4332] shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{name}</span>
                  </button>
                ))}
              </div>

            
              <div className="bg-white p-3 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center shadow-xs">
                <Image
                  src="/qr-code.svg"
                  alt="Scan QR Code to download Farm2i App"
                  width={144}
                  height={144}
                  className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
                />
              </div>

              <p className="text-[11px] text-slate-600 text-center leading-snug">
                Scan with your camera to download on the{" "}
                <span className="font-semibold text-slate-900">{active.store}</span>
              </p>

              {/* Dynamic OS Action */}
              <a
                href={active.href}
                className="w-full py-2 px-3 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-98"
              >
                <active.Icon className="w-3.5 h-3.5" />
                <span>Download for {active.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
