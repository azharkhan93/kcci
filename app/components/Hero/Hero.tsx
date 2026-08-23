import React from "react";
import Image from "next/image";

export interface HeroProps {
  subtitle?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const Hero = ({
  subtitle = "REMOTE SENSING & GIS",
  title = "GIS SOIL SCIENCE LABORATORY",
  imageSrc = "/hero-bg.jpg",
  imageAlt = "GIS Soil Science Laboratory Research Station",
}: HeroProps): React.ReactElement => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ── Hero Container ── */}
      <div className="relative w-full h-[100dvh] min-h-[580px] md:h-[680px]">
        {/* Landscape Photography */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />

        {/* ── Professional Cinematic Atmospheric Scrim Overlays ── */}
        {/* Top Dark Header Scrim for Navbar Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/5 pointer-events-none" />
        
        {/* Subtle Radial Vignette for Center Text Legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />

  
        <div className="absolute inset-0 z-10 flex items-center justify-center select-none">
          <div className="max-w-5xl w-full mx-auto px-2 md:px-8 text-center flex flex-col items-center justify-center">
            {/* Kicker Pill Badge */}
           
              
              <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-white">
                {subtitle}
              </span>
           

            
            <h1 className="text-white font-black text-3xl  md:text-6xl  uppercase tracking-tight leading-tight max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              {title}
            </h1>
          </div>
        </div>

        {/* Bottom Smooth Transition to Page Grid */}
        <div className="absolute bottom-0 inset-x-0 h-12 md:h-20 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
