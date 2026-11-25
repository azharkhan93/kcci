"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ChinarLeafSvg } from "@/app/components/KashmirMotifs";
import type { NavSubItem } from "@/app/constants/navigation";

export interface MegaDropdownProps {
  isOpen: boolean;
  items: NavSubItem[];
  pathname: string;
  onClose: () => void;
  width?: number | string;
  height?: number | string;
  headerTitle?: string;
  headerSubtitle?: string;
}

const toCssSize = (value?: number | string): string | undefined => {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
};

export const MegaDropdown: React.FC<MegaDropdownProps> = ({
  isOpen,
  items,
  pathname,
  onClose,
  width = 580,
  height = "auto",
  headerTitle = "The Kashmir Chamber of Commerce",
  headerSubtitle = "Est. 1924 · Sanctioned 1935",
}) => {
  if (!isOpen || items.length === 0) return null;

  const resolvedWidth = toCssSize(width);
  const resolvedHeight = toCssSize(height);

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      style={{
        width: resolvedWidth ? `min(92vw, ${resolvedWidth})` : undefined,
      }}
    >
      <div
        className="relative flex flex-col justify-between rounded-2xl bg-[#2B1203]/96 backdrop-blur-2xl border border-[#FFD37C]/25 p-3.5 sm:p-4 shadow-[0_24px_56px_-14px_rgba(26,11,6,0.7)] ring-1 ring-white/10 overflow-hidden"
        style={{
          minHeight: resolvedHeight !== "auto" ? resolvedHeight : undefined,
          height: resolvedHeight !== "auto" ? resolvedHeight : undefined,
        }}
      >
        {/* Top Accent Gradient Hairline */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#A61A28] via-[#FFD37C] to-[#BB5D0E]"
        />

        {/* Dropdown Header */}
        <div className="flex items-center justify-between gap-4 pb-2.5 mb-2.5 border-b border-[#FFD37C]/15">
          <div className="inline-flex items-center gap-2 text-[10.5px] font-mono font-bold uppercase tracking-[0.16em] text-[#FFD37C]">
            <ChinarLeafSvg className="w-3.5 h-3.5 text-[#D8992E]" />
            <h6>{headerTitle}</h6>
          </div>
          <p className="text-[10px] font-mono text-[#FBF7F2]/60">
            {headerSubtitle}
          </p>
        </div>

        {/* Sub-Page Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
          {items.map((sub) => {
            const isSubActive = pathname === sub.href;

            return (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={onClose}
                className={`group relative flex flex-col justify-between rounded-xl overflow-hidden border transition-all duration-300 ${
                  isSubActive
                    ? "border-[#FFD37C]/65 bg-[#3D1A06] shadow-[0_12px_28px_-10px_rgba(255,211,124,0.25)]"
                    : "border-[#FFD37C]/15 bg-[#1D0B02]/85 hover:border-[#FFD37C]/45 hover:-translate-y-0.5"
                }`}
              >
                {/* Compact Card Image Banner */}
                <div className="relative h-24 w-full overflow-hidden bg-[#160804]">
                  <div
                    role="img"
                    aria-label={sub.imageAlt}
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${sub.imageSrc}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#1D0B02] via-[#1D0B02]/35 to-transparent"
                  />

                  <div className="absolute top-2 inset-x-2 flex items-center justify-between gap-2">
                    {sub.badge && (
                      <h6 className="px-2 py-0.5 rounded-full bg-[#1A0B06]/75 backdrop-blur-md border border-[#FFD37C]/30 text-[9px] font-mono font-semibold uppercase tracking-wider text-[#FFD37C]">
                        {sub.badge}
                      </h6>
                    )}

                    <div className="ml-auto w-5 h-5 rounded-full inline-flex items-center justify-center bg-[#1A0B06]/60 border border-[#FFD37C]/25 text-[#FFD37C] group-hover:bg-[#FFD37C] group-hover:text-[#2B1203] transition-colors">
                      <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Copy */}
                <div className="p-2.5 space-y-0.5 flex-1 flex flex-col justify-center">
                  <h3 className="text-[13px] font-bold font-space text-white group-hover:text-[#FFD37C] transition-colors leading-snug">
                    {sub.label}
                  </h3>
                  <p className="text-[11px] text-[#FBF7F2]/75 font-work-sans leading-snug line-clamp-2">
                    {sub.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
