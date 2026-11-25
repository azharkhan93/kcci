"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FOOTER_DATA } from "@/app/constants/footer";
import {
  KhatambandPatternOverlay,
  SozniCornerFiligree,
} from "@/app/components/KashmirMotifs";

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();
  const { brand, solutionsColumn, companyColumn, contact, legal } = FOOTER_DATA;

  return (
    <footer
      aria-label="Site Footer"
      className={`relative bg-[#2B1203] text-[#FBF7F2] border-t border-[#6E2C00] overflow-hidden ${className}`}
    >
      {/* Top Gilded Sozni Border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#A61A28] via-[#FFD37C]/80 to-[#BB5D0E]" />

      {/* Subtle Kashmiri Khatamband Wood Lattice Pattern */}
      <KhatambandPatternOverlay className="opacity-[0.045] text-[#FFD37C]" />

      {/* Handcrafted Left & Right Kashmiri Sozni / Chinar Filigree SVGs */}
      <SozniCornerFiligree
        side="left"
        className="absolute left-0 top-0 h-full w-44 sm:w-60 opacity-45"
      />
      <SozniCornerFiligree
        side="right"
        className="absolute right-0 top-0 h-full w-44 sm:w-60 opacity-45"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
        
        {/* ── Main Bento Navigation Grid (12 Columns) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-[#FFD37C]/15">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="px-2.5 py-1.5 rounded-xl bg-[#FBF7F2]/95 backdrop-blur-md shadow-sm border border-[#FFD37C]/30 transition-transform group-hover:scale-105">
                <Image
                  src="/logokcci-dark.png"
                  alt="The Kashmir Chamber of Commerce & Industry (INC)"
                  width={56}
                  height={53}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#FBF7F2]/70 font-work-sans leading-relaxed max-w-sm">
              {brand.description}
            </p>
          </div>

          {/* Column 2: Technology & Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD37C] flex items-center gap-1.5">
              <solutionsColumn.icon className="w-3.5 h-3.5" />
              {solutionsColumn.title}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-work-sans">
              {solutionsColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href || "/"}
                    className="text-[#FBF7F2]/70 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <div
                      aria-hidden="true"
                      className="w-1 h-1 rounded-full bg-[#D8992E]/50 group-hover:bg-[#FFD37C] transition-colors"
                    />
                    <p>{link.label}</p>
                    {link.badge && (
                      <h6 className="text-[9px] px-1.5 py-0.2 rounded bg-[#BB5D0E]/30 text-[#FFD37C] font-mono">
                        {link.badge}
                      </h6>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ecosystem & Platform (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD37C] flex items-center gap-1.5">
              <companyColumn.icon className="w-3.5 h-3.5" />
              {companyColumn.title}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-work-sans">
              {companyColumn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href || "/contact"}
                    className="text-[#FBF7F2]/70 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <div
                      aria-hidden="true"
                      className="w-1 h-1 rounded-full bg-[#D8992E]/50 group-hover:bg-[#FFD37C] transition-colors"
                    />
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Inquiries & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD37C] flex items-center gap-1.5">
              <contact.icon className="w-3.5 h-3.5" />
              {contact.title}
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-2 text-[#FBF7F2]/80">
                <MapPin className="w-4 h-4 text-[#D8992E] shrink-0 mt-0.5" />
                <p className="leading-snug text-xs">{contact.address}</p>
              </div>

              {/* Emails as Interactive Pills */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {contact.emails.map((email) => (
                  <a
                    key={email.label}
                    href={email.href}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#BB5D0E]/25 border border-[#FFD37C]/15 hover:border-[#FFD37C]/45 text-xs font-mono text-[#FBF7F2]/80 hover:text-[#FFD37C] transition-colors"
                  >
                    <Mail className="w-3 h-3 text-[#D8992E]" />
                    <p>{email.label}</p>
                  </a>
                ))}
              </div>

              {/* Phones */}
              <div className="flex flex-wrap gap-2">
                {contact.phones.map((phone) => (
                  <a
                    key={phone.label}
                    href={phone.href}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#BB5D0E]/25 border border-[#FFD37C]/15 hover:border-[#FFD37C]/45 text-xs font-mono text-[#FBF7F2]/80 hover:text-[#FFD37C] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#D8992E]" />
                    <p>{phone.label}</p>
                  </a>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2 text-[#FBF7F2]/65 text-xs pt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#D8992E]" />
                <p>{contact.hours}</p>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Strip: Copyright & Legal Links ── */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-[#FBF7F2]/60">
          <div className="flex items-center gap-2">
            <p>&copy; {currentYear}</p>
            <p className="text-white font-bold">{brand.name}</p>
            <p className="text-[#BB5D0E]/80">{"//"}</p>
            <p className="text-[#FBF7F2]/60">Est. 1924 · Inc. 1935</p>
          </div>

          <div className="flex items-center gap-6">
            {legal.map((item, idx) => (
              <React.Fragment key={item.label}>
                {idx > 0 && <p className="text-[#BB5D0E]/70">•</p>}
                <Link
                  href={item.href || "/privacy"}
                  className="text-[#FBF7F2]/65 hover:text-[#FFD37C] transition-colors"
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
