"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import {
  FOOTER_BRAND,
  FOOTER_COLUMNS,
  FOOTER_CONTACT,
} from "@/app/constants/footer";

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative bg-white text-slate-900 border-t border-slate-200 overflow-hidden ${className}`}
    >
      {/* ── Light Green Fade on Left & Right Sides (White Center) ── */}
      <div className="absolute inset-y-0 left-0 w-72 sm:w-96 bg-gradient-to-r from-emerald-100/60 via-emerald-50/25 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-72 sm:w-96 bg-gradient-to-l from-emerald-100/60 via-emerald-50/25 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* ── Brand Column with Farm2i SVG Logo (4 cols) ── */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Image
                src="/farm2i.svg"
                alt="Farm2i"
                width={130}
                height={38}
                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {FOOTER_BRAND.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-[#1b4332]">
              <span className="w-2 h-2 rounded-full bg-[#1b4332] animate-pulse" />
              <span>{FOOTER_BRAND.statusText}</span>
            </div>
          </div>

          {/* ── Mapped Nav Columns (4 cols total) ── */}
          {FOOTER_COLUMNS.map(({ title, icon: Icon, links }, idx) => (
            <div
              key={title}
              className={`${idx === 0 ? "lg:col-span-2" : "lg:col-span-2"} space-y-4`}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1b4332] flex items-center gap-1.5 font-mono">
                <Icon className="w-3.5 h-3.5" />
                <span>{title}</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-[#1b4332] hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1b4332] transition-colors" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact & Inquiries (4 cols) ── */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1b4332] flex items-center gap-1.5 font-mono">
              <FOOTER_CONTACT.icon className="w-3.5 h-3.5" />
              <span>{FOOTER_CONTACT.title}</span>
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-[#1b4332] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{FOOTER_CONTACT.address}</span>
              </div>

              {/* Emails */}
              <div className="space-y-1 pt-0.5">
                {FOOTER_CONTACT.emails.map((email) => (
                  <div key={email} className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-[#1b4332] flex-shrink-0" />
                    <a
                      href={`mailto:${email}`}
                      className="text-slate-600 hover:text-[#1b4332] transition-colors truncate font-medium"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>

              
              <div className="flex items-center gap-4 flex-wrap pt-0.5">
                {FOOTER_CONTACT.phones.map((phone) => (
                  <div key={phone.label} className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#1b4332] flex-shrink-0" />
                    <a
                      href={phone.href}
                      className="text-slate-600 hover:text-[#1b4332] font-mono text-xs transition-colors font-medium"
                    >
                      {phone.label}
                    </a>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2 text-slate-500 pt-1 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#1b4332] flex-shrink-0 mt-0.5" />
                <span>{FOOTER_CONTACT.hours}</span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href={FOOTER_CONTACT.ctaHref}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-98 transition-all"
                >
                  <span>{FOOTER_CONTACT.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Copyright & Legal Links ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center">
            <span>&copy; {currentYear}</span>
            <span className="text-slate-900 font-bold">{FOOTER_BRAND.name}</span>
            <span>All rights reserved.</span>
          </p>

          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-[#1b4332] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms" className="hover:text-[#1b4332] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
