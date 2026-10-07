"use client";

import React from "react";
import Image from "next/image";
import { Info, Sprout } from "lucide-react";
import {
  NITROFIX_APPLICATIONS_CONTENT,
  type ApplicationsData,
} from "@/app/constants/nitrofixProduct";

export interface NitrofixApplicationsProps {
  data?: Partial<ApplicationsData>;
  productImage?: string;
  className?: string;
}

export const NitrofixApplications: React.FC<NitrofixApplicationsProps> = ({
  data = {},
  productImage = "/product.jpeg",
  className = "",
}) => {
  const content = {
    ...NITROFIX_APPLICATIONS_CONTENT,
    ...data,
    domains: data.domains || NITROFIX_APPLICATIONS_CONTENT.domains,
  };

  return (
    <section
      className={`py-10 sm:py-14 bg-white border-b border-slate-100 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Narrative, Compact 4-Card 2x2 Grid & Notice */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md badge-nitrofix text-[11px] font-mono font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--nitrofix-green-lime)] animate-pulse" />
                {content.eyebrow}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-space tracking-tight leading-tight">
                <span>{content.headingPrefix}</span>
                <span className="text-gradient-leaf">{content.headingHighlight}</span>
              </h2>

              <p className="text-xs text-slate-600 font-work-sans leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Compact 2x2 Grid of Exactly 4 Application Domains */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {content.domains.map((domain, idx) => {
                const DomainIcon = domain.icon;

                return (
                  <div
                    key={domain.id || idx}
                    className="group p-3 sm:p-3.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100/70 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white flex items-center justify-center transition-colors">
                        <DomainIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                        {domain.tag}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-bold font-space text-slate-900 group-hover:text-emerald-950 transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-[10.5px] text-slate-600 font-work-sans leading-relaxed line-clamp-2">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact Crop-Specific Validation Notice */}
            <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/70 flex items-center gap-2 text-[10.5px] font-mono text-emerald-900">
              <Info className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <p className="leading-tight">
                {content.validationNotice}
              </p>
            </div>
          </div>

          {/* Right Column: Compact Studio Packaging Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 via-white to-slate-50/80 p-4 sm:p-5 border border-slate-200/90 shadow-lg overflow-hidden group">
              {/* Soft Ambient Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top Tag Overlay */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 relative z-10">
                <div className="flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-emerald-800">
                  <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                  <span>COMMERCIAL INPUT</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-[9px] font-mono font-bold uppercase">
                  Flagship Product
                </span>
              </div>

              {/* Compact High-Resolution Product Asset Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] max-h-[260px] my-2 flex items-center justify-center">
                <Image
                  src={productImage}
                  alt="NitroFIX Sustainable Fertilizer Solutions Packaging"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>

              {/* Bottom Product Details Capsule */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono relative z-10">
                <div>
                  <span className="font-bold text-slate-900 block leading-tight">
                    NitroFIX™ Biopolymer Matrix
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Dual Action Hydrogel System
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-orange-100/80 border border-orange-200 text-orange-800 font-bold text-[10px]">
                  1 kg Pack
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
