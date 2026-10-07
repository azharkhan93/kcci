"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FOOTER_DATA } from "@/app/constants/footer";

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();
  const { brand, solutionsColumn, companyColumn, contact, legal } = FOOTER_DATA;

  return (
    <footer
      aria-label="Site Footer"
      className={`relative bg-[#05130c] text-white border-t border-emerald-950/80 overflow-hidden ${className}`}
    >
     
      <svg
        className="absolute left-0 top-0 h-full w-44 sm:w-60 pointer-events-none opacity-15"
        viewBox="0 0 240 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-30 40 L90 40 L140 90 L140 220 L80 280 L-30 280"
          stroke="#10b981"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M-20 80 L70 80 L110 120 L110 250 L50 310"
          stroke="#34d399"
          strokeWidth="1"
        />
        <path
          d="M0 150 L50 150 L90 190 L90 350"
          stroke="#059669"
          strokeWidth="1"
        />
        <circle cx="140" cy="90" r="2.5" fill="#34d399" />
        <circle cx="110" cy="120" r="2" fill="#10b981" />
        <circle cx="90" cy="190" r="2" fill="#059669" />
      </svg>

      {/* ── Right Side Light SVG Circuit Lines ── */}
      <svg
        className="absolute right-0 top-0 h-full w-44 sm:w-60 pointer-events-none opacity-15"
        viewBox="0 0 240 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M270 40 L150 40 L100 90 L100 220 L160 280 L270 280"
          stroke="#10b981"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M260 80 L170 80 L130 120 L130 250 L190 310"
          stroke="#34d399"
          strokeWidth="1"
        />
        <path
          d="M240 150 L190 150 L150 190 L150 350"
          stroke="#059669"
          strokeWidth="1"
        />
        <circle cx="100" cy="90" r="2.5" fill="#34d399" />
        <circle cx="130" cy="120" r="2" fill="#10b981" />
        <circle cx="150" cy="190" r="2" fill="#059669" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
        
        {/* ── Main Bento Navigation Grid (12 Columns) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-white/20 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Farm Health Innovations"
                  width={140}
                  height={36}
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-work-sans leading-relaxed max-w-sm">
              {brand.description}
            </p>
          </div>

          {/* Column 2: Technology & Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <solutionsColumn.icon className="w-3.5 h-3.5" />
              <span>{solutionsColumn.title}</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-work-sans">
              {solutionsColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href || "/nitrofix"}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors" />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ecosystem & Platform (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <companyColumn.icon className="w-3.5 h-3.5" />
              <span>{companyColumn.title}</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-work-sans">
              {companyColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href || "/contact"}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Inquiries & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <contact.icon className="w-3.5 h-3.5" />
              <span>{contact.title}</span>
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-xs">{contact.address}</span>
              </div>

              {/* Emails as Interactive Pills */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {contact.emails.map((email) => (
                  <a
                    key={email.label}
                    href={email.href}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-emerald-200 transition-colors"
                  >
                    <Mail className="w-3 h-3 text-emerald-400" />
                    <span>{email.label}</span>
                  </a>
                ))}
              </div>

              {/* Phones */}
              <div className="flex flex-wrap gap-2">
                {contact.phones.map((phone) => (
                  <a
                    key={phone.label}
                    href={phone.href}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-emerald-200 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-emerald-400" />
                    <span>{phone.label}</span>
                  </a>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2 text-slate-400 text-xs pt-0.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contact.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Strip: Copyright & Legal Links ── */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear}</span>
            <span className="text-white font-bold">{brand.name}</span>
            <span className="text-slate-600">//</span>
            <span className="text-slate-400">NitroFIX™</span>
          </div>

          <div className="flex items-center gap-6">
            {legal.map((item, idx) => (
              <React.Fragment key={item.label}>
                {idx > 0 && <span className="text-slate-700">•</span>}
                <Link
                  href={item.href || "/privacy"}
                  className="text-slate-400 hover:text-emerald-300 transition-colors"
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
