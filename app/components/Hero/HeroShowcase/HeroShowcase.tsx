"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { type HeroSlideData } from "@/app/constants/hero";

export interface HeroShowcaseProps {
  slide: HeroSlideData;
  imageClipRef: React.RefObject<HTMLDivElement | null>;
  hudInfoRef: React.RefObject<HTMLDivElement | null>;
  onPrev: () => void;
  onNext: () => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({
  slide,
  imageClipRef,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      rotationY: x * 8,
      rotationX: -y * 8,
      transformPerspective: 1200,
      ease: "power1.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      duration: 0.6,
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center relative w-full py-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Floating Showcase Container */}
      <div
        ref={cardRef}
        className="relative flex items-center justify-center group"
      >
        {/* Soft Ambient Floor Shadow */}
        <div className="absolute -bottom-8 w-64 sm:w-80 h-12 bg-slate-950/15 rounded-full blur-2xl pointer-events-none transform scale-95 transition-transform duration-500 group-hover:scale-105" />

        {/* 3D Precision Lens Frame */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-4 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 shadow-[0_30px_70px_rgba(0,0,0,0.18),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-4px_8px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300">
          
          {/* Outer Lens Bevel Ring */}
          <div className="w-full h-full rounded-full p-2.5 bg-gradient-to-tr from-slate-400 via-slate-200 to-slate-100 shadow-[inset_0_3px_6px_rgba(0,0,0,0.25)] flex items-center justify-center">
            
            {/* Inner Circular Viewport with GSAP Reveal */}
            <div
              ref={imageClipRef}
              className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 shadow-inner"
            >
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 260px, (max-width: 1200px) 340px, 380px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Realistic Lens Curved Reflection / Glass Glare */}
              <div className="absolute top-2 right-4 w-28 h-16 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-full rotate-[-25deg] blur-xs pointer-events-none" />
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/35 pointer-events-none" />
            </div>
          </div>

          {/* Diagnostic Lens Handle Accent (Matching 3D Magnifier Look) */}
          <div className="absolute -bottom-7 -right-7 w-12 sm:w-16 h-20 sm:h-24 bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800 rounded-3xl rotate-[-42deg] shadow-xl border border-white/20 pointer-events-none -z-10" />
        </div>
      </div>
    </div>
  );
};
