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
  badge = "CONNECT WITH OUR LAB",
  title = "GET IN TOUCH WITH US",
  subtitle = "Have questions about our soil and GIS research, want to submit field samples, or explore academic and industry research partnerships? Our laboratory team is here to assist you.",
  breadcrumbLabel = "Contact & Inquiries",
  className = "",
}) => {
  return (
    <section className={`relative w-full pt-8 pb-10 sm:pb-14 border-b border-slate-100 ${className}`}>
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1b4332_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1b4332] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#1b4332] font-semibold">{breadcrumbLabel}</span>
        </nav>

        {/* Header Content */}
        <div className="max-w-3xl">
          {/* Section Kicker */}
          <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#2d6a4f] mb-3">
            {badge}
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 uppercase tracking-tight leading-tight mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
