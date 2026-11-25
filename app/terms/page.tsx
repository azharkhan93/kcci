"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Mail,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { ContactHero } from "@/app/components";
import { TERMS_DATA } from "@/app/constants/terms";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F2] text-[#514646]">
  
      <ContactHero
        badge="FARM HEALTH INNOVATIONS LEGAL & POLICIES"
        title="TERMS AND CONDITIONS"
        subtitle={TERMS_DATA.intro}
        breadcrumbLabel="Terms & Conditions"
      />

      {/* ── Document Body ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Last Updated Badge */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#514646]/80 font-mono pb-2 border-b border-[#6E2C00]/15">
          <Calendar className="w-4 h-4 text-[#7E393F]" />
          <span>Last updated: {TERMS_DATA.lastUpdated}</span>
        </div>

        {/* Structured Sections */}
        <div className="space-y-8 divide-y divide-[#6E2C00]/15">
          {TERMS_DATA.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className={`space-y-4 ${idx > 0 ? "pt-8" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm font-black text-[#6E2C00] px-2.5 py-0.5 rounded-lg bg-[#FFD37C]/25 border border-[#D8992E]/40">
                  0{idx + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B1203] tracking-tight">
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <p className="text-sm sm:text-base text-[#514646] leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.bullets && (
                <ul className="space-y-2.5 pt-1">
                  {section.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#514646]"
                    >
                      {section.id === "contact-us" ? (
                        <a
                          href={`mailto:${bullet}`}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FFD37C]/20 border border-[#D8992E]/45 text-[#6E2C00] font-semibold text-sm hover:bg-[#FFD37C]/35 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-[#7E393F]" />
                          <span>{bullet}</span>
                        </a>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#BB5D0E] flex-shrink-0 mt-1" />
                          <span className="leading-snug">{bullet}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-6 rounded-2xl bg-[#F3EAE0] border border-[#6E2C00]/15 text-xs sm:text-sm text-[#514646] leading-relaxed">
          <p className="font-medium">{TERMS_DATA.footerNote}</p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center justify-between pt-6 border-t border-[#6E2C00]/15 text-xs sm:text-sm font-semibold">
          <Link
            href="/privacy"
            className="text-[#6E2C00] hover:text-[#A61A28] hover:underline inline-flex items-center gap-1"
          >
            <span>View Privacy Policy</span>
            <ChevronRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="text-[#6E2C00] hover:text-[#A61A28] hover:underline inline-flex items-center gap-1"
          >
            <span>Need Help? Contact Us</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
