"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import {
  KCCI_SUMMITS_GALLERY_CONTENT,
  KCCI_HERITAGE_GALLERY_CONTENT,
  type KcciGalleryItem,
} from "@/app/constants/aboutKcci";

interface CylinderGalleryProps {
  id: string;
  heading: string;
  description: string;
  items: KcciGalleryItem[];
  direction?: 1 | -1;
  duration?: number;
  className?: string;
  onSelectImage: (item: KcciGalleryItem) => void;
}

const CompactCylinderStage: React.FC<CylinderGalleryProps> = ({
  id,
  heading,
  description,
  items,
  direction = 1,
  duration = 24,
  className = "",
  onSelectImage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const rotTweenRef = useRef<gsap.core.Tween | null>(null);
  const floatTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cylinder = cylinderRef.current;
    if (!cylinder) return;

    const ctx = gsap.context(() => {
      rotTweenRef.current = gsap.to(cylinder, {
        rotationY: direction === 1 ? 360 : -360,
        duration,
        ease: "none",
        repeat: -1,
      });

      floatTweenRef.current = gsap.to(cylinder, {
        y: 10,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => {
      rotTweenRef.current?.kill();
      floatTweenRef.current?.kill();
      ctx.revert();
    };
  }, [direction, duration]);

  const handleMouseEnter = () => {
    if (rotTweenRef.current) {
      gsap.to(rotTweenRef.current, {
        timeScale: 0.15,
        duration: 0.45,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (rotTweenRef.current) {
      gsap.to(rotTweenRef.current, {
        timeScale: 1,
        duration: 0.55,
        ease: "power2.inOut",
      });
    }
  };

  const numPanels = 6;
  const angleStep = 360 / numPanels;

  return (
    <section
      id={id}
      aria-label={heading}
      className={`relative w-full py-10 sm:py-14 border-b border-[#6E2C00]/15 select-none ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Heading & Description */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-space text-[#2B1203] tracking-tight">
            {heading}
          </h2>
          <div
            aria-hidden="true"
            className="w-10 h-[2px] bg-gradient-to-r from-[#A61A28] to-[#FFD37C] mt-2 mb-2.5"
          />
          <p className="text-xs sm:text-sm text-[#2B1203]/75 font-work-sans leading-relaxed">
            {description}
          </p>
        </div>

        {/* Compact 3D Cylindrical Stage */}
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[340px] sm:h-[390px] flex items-center justify-center [perspective:1200px] overflow-hidden"
        >
          {/* Subtle Top & Bottom Edge Vignettes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FBF7F2] via-[#FBF7F2]/80 to-transparent z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FBF7F2] via-[#FBF7F2]/80 to-transparent z-10"
          />

          {/* 3D Cylindrical Drum */}
          <div
            ref={cylinderRef}
            className="relative w-[210px] sm:w-[250px] md:w-[270px] h-[260px] sm:h-[300px] [transform-style:preserve-3d]"
          >
            {Array.from({ length: numPanels }).map((_, panelIdx) => {
              const item = items[panelIdx % items.length];
              if (!item) return null;

              const panelAngle = panelIdx * angleStep;
              const panelY = (panelIdx - (numPanels - 1) / 2) * 12;

              return (
                <div
                  key={`${id}-panel-${panelIdx}`}
                  className="absolute inset-0 [transform-style:preserve-3d] transition-shadow duration-300"
                  style={{
                    transform: `rotateY(${panelAngle}deg) translateZ(240px) translateY(${panelY}px)`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => onSelectImage(item)}
                    aria-label={item.imageAlt}
                    className="group relative w-full h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-[#FFD37C]/65 via-[#6E2C00]/30 to-[#A61A28]/50 shadow-[0_12px_28px_-10px_rgba(43,18,3,0.32)] hover:shadow-[0_18px_36px_-8px_rgba(110,44,0,0.42)] transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="relative w-full h-full rounded-[14.5px] overflow-hidden bg-[#1A0B06]">
                      <div
                        role="img"
                        aria-label={item.imageAlt}
                        className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{
                          backgroundImage: `url("${item.imageSrc}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1A0B06]/30 via-transparent to-[#FFD37C]/15 group-hover:opacity-50 transition-opacity duration-300"
                      />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const KcciSummitsGallery: React.FC<{
  onSelectImage?: (item: KcciGalleryItem) => void;
}> = ({ onSelectImage }) => {
  const [internalLightbox, setInternalLightbox] =
    useState<KcciGalleryItem | null>(null);

  const handleSelect = onSelectImage ?? setInternalLightbox;

  return (
    <>
      <CompactCylinderStage
        id="kcci-summits-gallery"
        heading={KCCI_SUMMITS_GALLERY_CONTENT.heading}
        description={KCCI_SUMMITS_GALLERY_CONTENT.description}
        items={KCCI_SUMMITS_GALLERY_CONTENT.items}
        direction={1}
        duration={25}
        className="bg-[#FBF7F2]"
        onSelectImage={handleSelect}
      />

      {internalLightbox && (
        <GalleryLightboxModal
          item={internalLightbox}
          onClose={() => setInternalLightbox(null)}
        />
      )}
    </>
  );
};

export const KcciHeritageGallery: React.FC<{
  onSelectImage?: (item: KcciGalleryItem) => void;
}> = ({ onSelectImage }) => {
  const [internalLightbox, setInternalLightbox] =
    useState<KcciGalleryItem | null>(null);

  const handleSelect = onSelectImage ?? setInternalLightbox;

  return (
    <>
      <CompactCylinderStage
        id="kcci-heritage-gallery"
        heading={KCCI_HERITAGE_GALLERY_CONTENT.heading}
        description={KCCI_HERITAGE_GALLERY_CONTENT.description}
        items={KCCI_HERITAGE_GALLERY_CONTENT.items}
        direction={-1}
        duration={28}
        className="bg-[#FBF7F2]"
        onSelectImage={handleSelect}
      />

      {internalLightbox && (
        <GalleryLightboxModal
          item={internalLightbox}
          onClose={() => setInternalLightbox(null)}
        />
      )}
    </>
  );
};

export const GalleryLightboxModal: React.FC<{
  item: KcciGalleryItem;
  onClose: () => void;
}> = ({ item, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.imageAlt}
      onClick={onClose}
      className="fixed inset-0 z-[110] bg-[#160804]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[#FFD37C]/35 shadow-2xl bg-[#1A0B06]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo preview"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#1A0B06]/80 border border-[#FFD37C]/35 text-white hover:bg-[#FFD37C] hover:text-[#2B1203] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div
          role="img"
          aria-label={item.imageAlt}
          className="w-full h-[340px] sm:h-[540px] bg-[#1A0B06]"
          style={{
            backgroundImage: `url("${item.imageSrc}")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export const KcciGallerySection: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<KcciGalleryItem | null>(
    null
  );

  return (
    <>
      <KcciSummitsGallery onSelectImage={setLightboxItem} />
      <KcciHeritageGallery onSelectImage={setLightboxItem} />
      {lightboxItem && (
        <GalleryLightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </>
  );
};
