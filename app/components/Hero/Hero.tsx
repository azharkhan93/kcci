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
     
      <div className="relative w-full h-[100dvh] min-h-[580px] md:h-[680px]">
       
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />

        {/* Minimal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50 pointer-events-none" />
        
        {/* Geometric Square Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

  
        <div className="absolute inset-0 z-10 flex items-center justify-center select-none">
          <div className="max-w-4xl w-full mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center">
           
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white mb-3">
              {subtitle}
            </span>

            
            <h1 className="text-white font-black text-5xl md:text-6xl uppercase tracking-tight leading-[1.1] w-full md:max-w-2xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-12 md:h-20 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
