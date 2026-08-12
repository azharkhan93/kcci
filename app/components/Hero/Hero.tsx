import React from "react";
import Image from "next/image";

export interface HeroProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const Hero = ({
  title = "Soil Testing Lab",
  imageSrc = "/hero-bg.svg",
  imageAlt = "SKUAST-K Soil Testing Laboratory",
}: HeroProps): React.ReactElement => {
  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-r from-[#1e0b36] via-[#582c83] to-[#2a1244]">
      {/* ── Responsive Aspect Ratio Banner Container ───────────────────── */}
      <div className="relative w-full aspect-[21/8] sm:aspect-[21/7] md:aspect-[21/6] max-h-[380px] min-h-[180px] flex items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 saturate-[1.05]"
        />

        {/* Subtle Dark Gradient Overlay for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* ── Title Overlay Band at Bottom Left Aligned with Main Content ── */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-10 lg:px-16 pointer-events-none z-10">
          <div className="inline-block bg-[#582c83]/95 backdrop-blur-xs px-4 sm:px-6 py-2.5 sm:py-3.5 shadow-xl pointer-events-auto border-t-2 border-[#d99b26]">
            <h1 className="text-white font-extrabold text-lg sm:text-2xl md:text-3xl tracking-wide">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Accent Gold & Purple Border Stripe */}
      <div className="h-1.5 bg-[#582c83] border-t border-[#d99b26]/50 w-full" />
    </header>
  );
};
