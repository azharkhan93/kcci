"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/Button";
import { PARTNER_CTA_CONTENT } from "@/app/constants/partnerCta";

export interface PartnerCtaProps {
  className?: string;
}

export const PartnerCta: React.FC<PartnerCtaProps> = ({ className = "" }) => {
  const {
    eyebrow,
    heading,
    description,
    secondaryNote,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
  } = PARTNER_CTA_CONTENT;

  return (
    <section
      id="partner-cta"
      aria-label="Partner With Us Section"
      className={`relative w-full py-10 sm:py-12 bg-[#fafcfb] border-t border-b border-slate-200/80 overflow-hidden ${className}`}
    >
      {/* ── Left Side Gradient SVGs (Precision Contours & Bio-Nodes) ── */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[150%] w-auto max-w-[280px] sm:max-w-[360px] pointer-events-none opacity-60 select-none"
        viewBox="0 0 360 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cta-left-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cta-left-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="cta-left-glow" cx="10%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#fafcfb" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient subtle light glow */}
        <circle cx="40" cy="130" r="140" fill="url(#cta-left-glow)" />

        {/* Precision geometric contour curves */}
        <path
          d="M-30,20 C50,45 110,95 135,160 C150,195 140,230 100,260"
          stroke="url(#cta-left-grad-1)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-10,60 C70,85 145,130 165,190 C175,225 155,250 120,280"
          stroke="url(#cta-left-grad-2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M10,110 C85,130 160,165 190,230"
          stroke="url(#cta-left-grad-1)"
          strokeWidth="1"
          fill="none"
        />

      
        <circle cx="135" cy="160" r="3" fill="#10b981" opacity="0.6" />
        <circle cx="165" cy="190" r="2.5" fill="#0d9488" opacity="0.5" />
      </svg>

      {/* ── Right Side Gradient SVGs (Organic Flow & Wave Ribbons) ── */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[170%] w-auto max-w-[420px] sm:max-w-[540px] pointer-events-none select-none"
        viewBox="0 0 540 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cta-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="35%" stopColor="#059669" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#0d9488" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="cta-wave-grad-2" x1="10%" y1="90%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
            <stop offset="45%" stopColor="#10b981" stopOpacity="0.35" />
            <stop offset="90%" stopColor="#84cc16" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="cta-fill-band" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="80%" stopColor="#0d9488" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
          </linearGradient>

          <radialGradient id="cta-right-glow" cx="75%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#fafcfb" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft focal radial glow */}
        <rect x="0" y="0" width="540" height="300" fill="url(#cta-right-glow)" />

        {/* Gradient fill ribbon band */}
        <path
          d="M120,290 C220,250 310,300 420,220 C480,170 510,100 560,70 L560,140 C500,180 450,250 340,290 Z"
          fill="url(#cta-fill-band)"
        />

        {/* Dynamic undulating wave strokes */}
        <path
          d="M120,290 C220,250 310,300 420,220 C480,170 510,100 560,70"
          stroke="url(#cta-wave-grad-1)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M170,300 C260,265 345,315 440,240 C490,190 520,130 570,100"
          stroke="url(#cta-wave-grad-2)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
        />
        <path
          d="M90,260 C190,220 270,270 380,190 C440,140 480,70 530,40"
          stroke="url(#cta-wave-grad-1)"
          strokeWidth="1"
          opacity="0.6"
          fill="none"
        />

        {/* Innovation / telemetry accent nodes */}
        <circle cx="420" cy="220" r="3.5" fill="#10b981" />
        <circle cx="420" cy="220" r="7.5" stroke="#10b981" strokeWidth="1" opacity="0.3" />
        <circle cx="440" cy="240" r="2.5" fill="#0d9488" />
        <circle cx="380" cy="190" r="3" fill="#34d399" />
      </svg>

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          {/* ── Left Content (Max Width Constrained) ── */}
          <div className="max-w-xl space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {eyebrow}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-slate-900 leading-tight">
              <span>{heading}</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-work-sans leading-relaxed max-w-lg">
              {description}
            </p>

            <p className="text-xs sm:text-sm font-medium text-emerald-800 font-work-sans pt-0.5 max-w-lg">
              {secondaryNote}
            </p>
          </div>

          {/* ── Action Buttons ── */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href={ctaHref || "/contact"}>
              <Button variant="primary" size="md">
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span>{ctaText}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link href={secondaryCtaHref}>
                <Button variant="outline" size="md">
                  <span className="whitespace-nowrap">{secondaryCtaText}</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
