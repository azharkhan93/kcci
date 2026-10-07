"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { ContactHero } from "@/app/components";
import { PRIVACY_DATA } from "@/app/constants/privacy";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ContactHero
        badge="DATA PROTECTION & PRIVACY"
        title="PRIVACY POLICY"
        subtitle={PRIVACY_DATA.intro}
        breadcrumbLabel="Privacy Policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 space-y-10">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-mono pb-2 border-b border-slate-100">
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>Last updated: {PRIVACY_DATA.lastUpdated}</span>
        </div>

        <div className="space-y-8 divide-y divide-slate-100">
          {PRIVACY_DATA.sections.map((section, idx) => (
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

              {section.subsections && (
                <div className="space-y-6 pt-2">
                  {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-2.5">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                        {sub.subtitle}
                      </h3>
                      {sub.content && (
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {sub.content}
                        </p>
                      )}
                      {sub.bullets && (
                        <ul className="space-y-2 pt-1">
                          {sub.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                              <span className="leading-snug">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
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

              {/* Note if any */}
              {section.note && (
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs sm:text-sm font-semibold text-[#1b4332]">
                  {section.note}
                </div>
              )}
            </section>
          ))}
        </div>

     
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p className="font-medium">{PRIVACY_DATA.footerNote}</p>
        </div>

      
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 text-xs sm:text-sm font-semibold">
          <Link
            href="/terms"
            className="text-[#1b4332] hover:underline inline-flex items-center gap-1"
          >
            <span>View Terms &amp; Conditions</span>
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
