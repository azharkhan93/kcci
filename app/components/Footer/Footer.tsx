"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Satellite,
} from "lucide-react";
import {
  LAB_CONTACT_INFO,
  TESTING_SERVICES_LINKS,
  RESEARCH_LINKS,
} from "@/app/constants/navigation";

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative bg-[#081c15] text-white border-t border-[#1b4332]/60 overflow-hidden ${className}`}>
      {/* Very Minimal Dark Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a231b] via-[#081c15] to-[#061711] pointer-events-none" />

      {/* Geometric Square Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #10b981 1px, transparent 1px),
            linear-gradient(to bottom, #10b981 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Subtle Geometric Square Outlines (Right side) */}
      <div className="absolute -top-12 right-12 w-64 h-64 border border-emerald-400/10 pointer-events-none" />
      <div className="absolute top-6 right-24 w-44 h-44 border border-emerald-400/10 pointer-events-none" />
      <div className="absolute top-18 right-36 w-24 h-24 border border-emerald-400/10 pointer-events-none" />

      {/* Subtle Geometric Square Outlines (Left side) */}
      <div className="absolute -bottom-16 left-8 w-56 h-56 border border-emerald-400/10 pointer-events-none" />
      <div className="absolute bottom-4 left-24 w-36 h-36 border border-emerald-400/10 pointer-events-none" />
      <div className="absolute bottom-16 left-36 w-20 h-20 border border-emerald-400/10 pointer-events-none" />

      {/* Top Accent Strip */}      <div className="w-full h-1 bg-gradient-to-r from-[#1b4332] via-[#059669] to-[#10b981]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
             
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#1b4332] to-[#081c15] rounded-xl text-emerald-400 border border-emerald-400/40 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Satellite className="w-6 h-6" />
              </div>

              
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white leading-none">
                  GIS SOIL SCIENCE LAB
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-400 font-bold mt-1">
                  Remote Sensing and GIS
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Division of Soil Science &amp; Agricultural Chemistry, SKUAST-Kashmir. Advancing precision agronomy, automated soil sensing, drone multispectral imagery, and climate-resilient soil fertility management.
            </p>

            {/* University Tag */}
            <div className="pt-1 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SKUAST-K Shalimar Main Campus, Srinagar</span>
            </div>
          </div>

          {/* ── Col 2: Analytical & Testing Services (3 cols) ── */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Testing &amp; Services</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {TESTING_SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Research & Quick Links (2 cols) ── */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Research</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {RESEARCH_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Official Contact & Intake Hours (3 cols) ── */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Laboratory Contact</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  Division of Soil Science, SKUAST-K Main Campus, Shalimar Road, Srinagar, J&amp;K 190025
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${LAB_CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  {LAB_CONTACT_INFO.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:01942461271"
                  className="text-gray-300 hover:text-white font-mono transition-colors"
                >
                  {LAB_CONTACT_INFO.phone}
                </a>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-2.5 text-gray-300 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Lab Hours: {LAB_CONTACT_INFO.hours}</span>
                  <span className="text-[11px] text-gray-400">Sample Drop-off: 10:00 AM – 3:30 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} <span className="text-white font-semibold">GIS Soil Science Lab</span> — Division of Soil Science &amp; Agricultural Chemistry, SKUAST-K. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Helpdesk &amp; Directions
            </Link>
            <span>•</span>
            <a
              href="http://skuastkashmir.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>SKUAST-K Official Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
