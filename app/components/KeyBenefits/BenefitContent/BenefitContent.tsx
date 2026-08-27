"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { type KeyBenefitItem } from "@/app/constants/keyBenefits";

export interface BenefitContentProps {
  item: KeyBenefitItem;
  currentIdx: number;
  totalItems: number;
  textContentRef: React.RefObject<HTMLDivElement | null>;
  onPrev: () => void;
  onNext: () => void;
}

export const BenefitContent: React.FC<BenefitContentProps> = ({
  item,
  currentIdx,
  totalItems,
  textContentRef,
  onPrev,
  onNext,
}) => {
  const currentFormatted = String(currentIdx + 1).padStart(2, "0");
  const totalFormatted = String(totalItems).padStart(2, "0");
  const progressPercent = ((currentIdx + 1) / totalItems) * 100;

  return (
    <div className="flex flex-col justify-between h-full space-y-8 max-w-lg">
      {/* Active Feature Text Container */}
      <div ref={textContentRef} className="space-y-4">
        {/* Kicker */}
        <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1b4332]">
          {item.kicker}
        </p>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          {item.description}
        </p>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-3">
          <Link
            href={item.btnHref}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{item.btnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom Slider Navigation Controls */}
      <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
        {/* Counter */}
        <div className="flex items-center gap-1.5 font-mono text-sm">
          <span className="font-bold text-slate-900">{currentFormatted}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-400 font-medium">{totalFormatted}</span>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden max-w-32">
          <div
            className="h-full bg-[#1b4332] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Prev / Next Chevrons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous feature"
            className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#1b4332] hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-[#1b4332] transition-colors cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next feature"
            className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#1b4332] hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-[#1b4332] transition-colors cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
