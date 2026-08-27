"use client";

import React from "react";
import Image from "next/image";
import { type KeyBenefitItem } from "@/app/constants/keyBenefits";

export interface BenefitCardsProps {
  items: KeyBenefitItem[];
  currentIdx: number;
  onSelect: (index: number) => void;
}

export const BenefitCards: React.FC<BenefitCardsProps> = ({
  items,
  currentIdx,
  onSelect,
}) => {
  // Reorder items so active card is first, followed by upcoming cards in a continuous cycle
  const orderedCards = items.map((_, i) => {
    const targetIdx = (currentIdx + i) % items.length;
    return { item: items[targetIdx], originalIdx: targetIdx, offset: i };
  });

  return (
    <div className="relative w-full flex items-end justify-start gap-3 sm:gap-4 lg:gap-5 overflow-visible py-2">
      {orderedCards.slice(0, 3).map(({ item, originalIdx, offset }) => {
        const isMain = offset === 0;

        return (
          <div
            key={item.id}
            onClick={() => onSelect(originalIdx)}
            className={`relative flex flex-col flex-shrink-0 cursor-pointer select-none group transition-all duration-400 ease-out ${
              isMain
                ? "w-[210px] sm:w-[245px] lg:w-[270px] opacity-100 z-30"
                : offset === 1
                ? "w-[175px] sm:w-[205px] lg:w-[225px] opacity-85 hover:opacity-100 z-20"
                : "w-[145px] sm:w-[170px] lg:w-[190px] opacity-65 hover:opacity-90 z-10"
            }`}
          >
            {/* Top Category Label */}
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase truncate mb-2 px-1">
              {item.category}
            </span>

            {/* Card Body */}
            <div
              className={`relative w-full rounded-2xl overflow-hidden bg-slate-900 transition-all duration-300 ${
                isMain
                  ? "h-[350px] sm:h-[390px] ring-2 ring-[#1b4332] shadow-xl shadow-[#1b4332]/25"
                  : offset === 1
                  ? "h-[300px] sm:h-[335px] border border-slate-200 shadow-md"
                  : "h-[260px] sm:h-[290px] border border-slate-200 shadow-sm"
              }`}
            >
              {/* Image */}
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 210px, 270px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Frosted Gradient Caption Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-3.5 sm:p-4 flex flex-col justify-end text-white">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-semibold mb-0.5 truncate">
                  {item.category}
                </span>
                <span className="text-xs sm:text-sm font-bold line-clamp-1 leading-snug">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
