import React from "react";
import Link from "next/link";
import { ServiceCard } from "../ServiceCard";
import { CtaSection } from "../CtaSection";
import { FertilizerRecommendations } from "../FertilizerRecommendations";
import { SampleDropoff } from "../SampleDropoff";
import { TeamSection } from "../TeamSection";
import {
  SOIL_TESTING_LAB_CONTENT,
  SERVICES_LIST,
  ServiceItem,
} from "@/app/constants/navigation";

export interface PageContentProps {
  title?: string;
  paragraphs?: string[];
  cta?: typeof SOIL_TESTING_LAB_CONTENT.cta;
  services?: ServiceItem[];
  showRecommendations?: boolean;
  showDropoff?: boolean;
  showTeam?: boolean;
  quickLinks?: { label: string; href: string }[];
  children?: React.ReactNode;
}

export const PageContent = ({
  title = SOIL_TESTING_LAB_CONTENT.title,
  paragraphs = SOIL_TESTING_LAB_CONTENT.paragraphs,
  cta = SOIL_TESTING_LAB_CONTENT.cta,
  services = SERVICES_LIST,
  showRecommendations = true,
  showDropoff = true,
  showTeam = true,
  quickLinks,
  children,
}: PageContentProps): React.ReactElement => {
  return (
    <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-10">
      {/* ── Page Main Title ─────────────────────────────────── */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#582c83] tracking-tight mb-4">
          {title}
        </h1>

        {/* ── Content Paragraphs ────────────────────────────── */}
        <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed w-full">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </div>

      {/* ── Highlighted CTA Box ── */}
      {cta && (
        <CtaSection title={cta.title} subtitle={cta.subtitle} />
      )}

      {/* ── Service / Feature Cards List Below CTA ──────────── */}
      {services && services.length > 0 && (
        <section className="space-y-4 pt-2 w-full">
          {services.map((service) => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </section>
      )}

      {/* ── Soil Fertilizer Recommendations Component ───────── */}
      {showRecommendations && (
        <div className="border-t border-gray-200 pt-8 w-full">
          <FertilizerRecommendations />
        </div>
      )}

      {/* ── Sample Drop-off Component with Campus Map ──────── */}
      {showDropoff && (
        <div className="border-t border-gray-200 pt-8 w-full">
          <SampleDropoff />
        </div>
      )}

      {/* ── Meet Our Faculty & Team Section (At Bottom) ─────── */}
      {showTeam && <TeamSection />}

      {/* ── Quick Links (If any) ───────────────────────────── */}
      {quickLinks && quickLinks.length > 0 && (
        <div className="space-y-4 mb-8 pt-4 w-full">
          {quickLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-lg md:text-xl font-bold text-[#582c83] hover:text-[#6e37a3] transition-colors group"
              >
                <span>{link.label}</span>
                <span className="text-[#d99b26] font-normal group-hover:translate-x-1 transition-transform">
                  ›
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}

      {children}
    </main>
  );
};
