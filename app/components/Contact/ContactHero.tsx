"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface ContactHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  breadcrumbLabel?: string;
  className?: string;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  badge = "CONNECT WITH FARM HEALTH INNOVATIONS",
  title = "GET IN TOUCH WITH US",
  subtitle = "Have questions about NitroFIX™, product orders, orchard applications, bulk supplies, or commercial distribution? Our team is here to assist you.",
  breadcrumbLabel = "Contact & Inquiries",
  className = "",
}) => {
  return (
    <section
      className={`relative w-full py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0c2419] text-white overflow-hidden ${className}`}
    >
      {/* Ambient Molecular Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-300/80 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-white font-medium">{breadcrumbLabel}</span>
        </div>

        {/* Header Content */}
        <div className="max-w-3xl space-y-4">
          {/* Section Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {badge}
          </div>

          {/* Main Title */}
          <h1 className="text-2xl  md:text-4xl font-bold font-space tracking-tight leading-[1.15] text-white uppercase">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-work-sans leading-relaxed pt-1 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
