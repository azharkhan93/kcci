"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { KhatambandPatternOverlay } from "@/app/components/KashmirMotifs";
import {
  KCCI_ABOUT_HERO_CONTENT,
  KCCI_GALLERY_HERO_CONTENT,
  KCCI_HISTORY_HERO_CONTENT,
  type KcciPageHeroData,
} from "@/app/constants/aboutKcci";
import {
  KCCI_SERVICES_HERO_CONTENT,
  KCCI_CERTIFICATES_HERO_CONTENT,
  KCCI_RECOMMENDATION_LETTERS_HERO_CONTENT,
  KCCI_TRADE_EXPORT_HERO_CONTENT,
  KCCI_BUSINESS_ADVISORY_HERO_CONTENT,
} from "@/app/constants/servicesKcci";

export interface KcciPageHeroProps {
  data: KcciPageHeroData;
  className?: string;
}

export const KcciPageHero: React.FC<KcciPageHeroProps> = ({
  data,
  className = "",
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.65,
            ease: "power3.out",
            transformOrigin: "left center",
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "expo.out",
            clearProps: "transform",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full pt-24 sm:pt-28 pb-10 sm:pb-12 bg-gradient-to-br from-[#2B1203] via-[#3A1705] to-[#1D0B02] text-[#FBF7F2] border-b border-[#FFD37C]/20 overflow-hidden ${className}`}
    >
      <KhatambandPatternOverlay className="opacity-[0.045] text-[#FFD37C]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold font-space tracking-tight leading-tight text-white">
            {data.title}
            <strong className="font-bold bg-gradient-to-r from-[#FFD37C] via-[#D8992E] to-[#BB5D0E] bg-clip-text text-transparent">
              {data.titleHighlight}
            </strong>
          </h1>

          <div
            ref={lineRef}
            aria-hidden="true"
            className="w-16 h-[2px] bg-gradient-to-r from-[#A61A28] via-[#FFD37C] to-transparent"
          />

          <p className="text-xs sm:text-sm md:text-[15px] text-[#FBF7F2]/80 font-work-sans leading-relaxed max-w-xl">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export const KcciAboutHero: React.FC = () => (
  <KcciPageHero data={KCCI_ABOUT_HERO_CONTENT} />
);

export const KcciHistoryHero: React.FC = () => (
  <KcciPageHero data={KCCI_HISTORY_HERO_CONTENT} />
);

export const KcciGalleryHero: React.FC = () => (
  <KcciPageHero data={KCCI_GALLERY_HERO_CONTENT} />
);

export const KcciServicesHero: React.FC = () => (
  <KcciPageHero data={KCCI_SERVICES_HERO_CONTENT} />
);

export const KcciCertificateIssuanceHero: React.FC = () => (
  <KcciPageHero data={KCCI_CERTIFICATES_HERO_CONTENT} />
);

export const KcciRecommendationLettersHero: React.FC = () => (
  <KcciPageHero data={KCCI_RECOMMENDATION_LETTERS_HERO_CONTENT} />
);

export const KcciTradeExportHero: React.FC = () => (
  <KcciPageHero data={KCCI_TRADE_EXPORT_HERO_CONTENT} />
);

export const KcciBusinessAdvisoryHero: React.FC = () => (
  <KcciPageHero data={KCCI_BUSINESS_ADVISORY_HERO_CONTENT} />
);
