"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CERTIFICATES_ISSUANCE_FEATURES,
  RECOMMENDATION_LETTERS_FEATURES,
  type ServiceFeatureItem,
} from "@/app/constants/servicesKcci";

export interface ServiceGridProps {
  eyebrow: string;
  heading: string;
  description: string;
  features: ServiceFeatureItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export const KcciServiceGrid: React.FC<ServiceGridProps> = ({
  eyebrow,
  heading,
  description,
  features,
  ctaLabel = "Inquire with Chamber",
  ctaHref = "/contact",
}) => {
  return (
    <section className="relative w-full py-14 sm:py-20 bg-[#FBF7F2] border-b border-[#6E2C00]/15 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h6 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#A61A28] mb-2">
            {eyebrow}
          </h6>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-[#2B1203] tracking-tight">
            {heading}
          </h2>
          <div
            aria-hidden="true"
            className="w-12 h-[2px] bg-gradient-to-r from-[#A61A28] via-[#FFD37C] to-transparent mt-2.5 mb-3"
          />
          <p className="text-xs sm:text-sm md:text-[15px] text-[#2B1203]/75 font-work-sans leading-relaxed">
            {description}
          </p>
        </div>

        {/* 4-Pillar Architectural Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-white to-[#F9F4EE] border border-[#6E2C00]/15 p-5 shadow-[0_10px_24px_-12px_rgba(43,18,3,0.18)] hover:shadow-[0_16px_36px_-10px_rgba(110,44,0,0.28)] hover:border-[#FFD37C]/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2B1203] text-[#FFD37C] border border-[#FFD37C]/30 flex items-center justify-center shadow-inner group-hover:bg-[#6E2C00] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      {feature.badge && (
                        <h6 className="px-2 py-0.5 rounded-full bg-[#6E2C00]/10 border border-[#6E2C00]/20 text-[9.5px] font-mono font-bold uppercase text-[#6E2C00]">
                          {feature.badge}
                        </h6>
                      )}
                      <p className="text-xs font-mono font-bold text-[#6E2C00]/40">
                        {feature.number}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-space text-[#2B1203] group-hover:text-[#6E2C00] transition-colors mb-2 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#2B1203]/75 font-work-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#6E2C00]/10 flex items-center justify-between text-[11px] font-mono text-[#6E2C00]/70 group-hover:text-[#6E2C00]">
                  <p>Inquire with Chamber</p>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#2B1203] text-[#FBF7F2] border border-[#FFD37C]/25 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold font-space text-white">
              Need Certificate Attestation or Recommendation Letters?
            </h4>
            <p className="text-xs sm:text-sm text-[#FBF7F2]/75 font-work-sans">
              Our trade facilitation desk and secretariat process documents on all official chamber working days.
            </p>
          </div>

          <Link
            href={ctaHref}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FFD37C] to-[#D8992E] text-[#2B1203] font-space text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4 text-[#2B1203]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const KcciCertificateIssuanceSection: React.FC = () => (
  <KcciServiceGrid
    eyebrow="Statutory Trade Certification"
    heading="Issuance of Certificates"
    description="Authorized Non-Preferential Certificate of Origin issuance, commercial invoice authentication, and export document endorsements."
    features={CERTIFICATES_ISSUANCE_FEATURES}
    ctaLabel="Request Certificate Attestation"
    ctaHref="/contact"
  />
);

export const KcciRecommendationLettersSection: React.FC = () => (
  <KcciServiceGrid
    eyebrow="Institutional Endorsements"
    heading="Recommendation Letters"
    description="Official chamber visa recommendation letters, delegation credentials, and commercial standing endorsements for global travel."
    features={RECOMMENDATION_LETTERS_FEATURES}
    ctaLabel="Request Recommendation Letter"
    ctaHref="/contact"
  />
);

// Backward compatibility aliases
export const KcciTradeExportSection = KcciCertificateIssuanceSection;
export const KcciBusinessAdvisorySection = KcciRecommendationLettersSection;
