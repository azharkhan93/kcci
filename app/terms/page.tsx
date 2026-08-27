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
    <main className="flex flex-col bg-white min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16">
  
      <ContactHero
        badge="FARM2I LEGAL & POLICIES"
        title="TERMS AND CONDITIONS"
        subtitle={TERMS_DATA.intro}
        breadcrumbLabel="Terms & Conditions"
      />

      {/* ── Document Body ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Last Updated Badge */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-mono pb-2 border-b border-slate-100">
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>Last updated: {TERMS_DATA.lastUpdated}</span>
        </div>

        {/* Structured Sections */}
        <div className="space-y-8 divide-y divide-slate-100">
          {TERMS_DATA.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className={`space-y-4 ${idx > 0 ? "pt-8" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm font-black text-[#1b4332] px-2.5 py-0.5 rounded-lg bg-emerald-50 border border-emerald-200/60">
                  0{idx + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.bullets && (
                <ul className="space-y-2.5 pt-1">
                  {section.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-700"
                    >
                      {section.id === "contact-us" ? (
                        <a
                          href={`mailto:${bullet}`}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[#1b4332] font-semibold text-sm hover:bg-emerald-100 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-emerald-700" />
                          <span>{bullet}</span>
                        </a>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
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
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p className="font-medium">{TERMS_DATA.footerNote}</p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 text-xs sm:text-sm font-semibold">
          <Link
            href="/privacy"
            className="text-[#1b4332] hover:underline inline-flex items-center gap-1"
          >
            <span>View Privacy Policy</span>
            <ChevronRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="text-[#1b4332] hover:underline inline-flex items-center gap-1"
          >
            <span>Need Help? Contact Us</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
