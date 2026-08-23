"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";

export interface GallerySlide {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  imageSrc: string;
  description: string;
}

const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: "uav-mapping",
    title: "Multispectral UAV Crop & Soil Surveillance",
    category: "Aerial Remote Sensing",
    location: "Shalimar Research Farm",
    date: "August 2026",
    imageSrc: "/research/drone-spatial.jpg",
    description:
      "Autonomous hexacopter drone flights conducting high-resolution multispectral imagery scans to map spatial variability and crop canopy vigor index.",
  },
  {
    id: "soil-spectrometry",
    title: "High-Precision Soil Chemistry & Spectrometry",
    category: "Proximal Sensing",
    location: "Central Soil Testing Lab",
    date: "July 2026",
    imageSrc: "/research/soil-sensing.jpg",
    description:
      "Laboratory optical spectrometry analyzing macronutrient distributions, soil color metrics, and organic carbon fractions from field samples.",
  },
  {
    id: "drip-monitoring",
    title: "Smart Tensiometer & Automated Drip Irrigation",
    category: "Precision Hydrology",
    location: "Zone-B Experimental Plot",
    date: "August 2026",
    imageSrc: "/research/water-management.jpg",
    description:
      "IoT sensor nodes monitoring volumetric water content (VWC) and soil matric potential for precision variable-rate water delivery.",
  },
  {
    id: "climate-trials",
    title: "Drought & Heat Stress Phenotyping Trials",
    category: "Climate Resilience",
    location: "Dryland Agronomy Field",
    date: "June 2026",
    imageSrc: "/research/climate-resiliency.jpg",
    description:
      "Field evaluation of crop physiological responses under induced moisture stress to identify resilient cultivars for regional farming.",
  },
  {
    id: "digital-twin",
    title: "Digital Twin & Root-Zone Moisture Dynamics",
    category: "AI Simulation & Modeling",
    location: "GIS Computational Lab",
    date: "August 2026",
    imageSrc: "/research/prediction-modeling.jpg",
    description:
      "3D hydrodynamic modeling simulating root-water uptake, capillary flux, and predictive crop hydration for yield forecasting.",
  },
];

export interface LabGalleryProps {
  className?: string;
}

export const LabGallery: React.FC<LabGalleryProps> = ({ className = "" }): React.ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = GALLERY_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay handler (pauses on hover)
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, nextSlide]);

  const currentSlide = GALLERY_SLIDES[currentIndex];

  return (
    <section className={`w-full bg-white py-10 sm:py-16 border-y border-gray-100 ${className}`}>
      {/* ── Standard 7xl Page Container (Aligned with Project Grid) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
        
        {/* ── Section Header (Aligned Left with Top Controls) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d99b26] animate-pulse" />
              <span>Field Activities &amp; Facilities</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Research in Action
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
              Explore our ongoing experimental field trials, UAV aerial mapping missions, and advanced precision laboratory infrastructure.
            </p>
          </div>

          {/* Header Controls (Prev/Next + Pause) */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#d99b26]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#1b4332]" />
                  <span>Auto</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2 rounded-xl bg-gray-100 hover:bg-[#1b4332] hover:text-white text-gray-700 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2 rounded-xl bg-gray-100 hover:bg-[#1b4332] hover:text-white text-gray-700 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Main Gallery Carousel Frame ── */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/90 shadow-md bg-gray-950 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slide Image Box */}
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px]">
            {GALLERY_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center"
                />

                {/* Dark Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/20 to-transparent" />
              </div>
            ))}

            {/* ── Floating Caption Overlay ── */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto max-w-xl z-20 pointer-events-none">
              <div className="pointer-events-auto bg-black/65 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/15 shadow-2xl text-white">
                {/* Category & Location Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#1b4332] text-emerald-100 border border-emerald-400/30">
                    {currentSlide.category}
                  </span>

                  <div className="flex items-center gap-1 text-[11px] text-gray-300 font-medium">
                    <MapPin className="w-3 h-3 text-[#d99b26]" />
                    <span>{currentSlide.location}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-gray-300 font-medium">
                    <Calendar className="w-3 h-3 text-amber-300" />
                    <span>{currentSlide.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug mb-1.5">
                  {currentSlide.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-gray-200 leading-relaxed line-clamp-2">
                  {currentSlide.description}
                </p>
              </div>
            </div>

            {/* ── Top Progress Bar Timer ── */}
            {isPlaying && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-30 overflow-hidden">
                <div
                  key={currentIndex}
                  className="h-full bg-[#d99b26] animate-[progressBar_5s_linear_infinite]"
                  style={{ width: "100%" }}
                />
              </div>
            )}
          </div>

          {/* ── Bottom Bar Navigation ── */}
          <div className="bg-gray-900/95 backdrop-blur-md px-4 sm:px-6 py-3 border-t border-white/10 flex items-center justify-between gap-4">
            {/* Slide Index Counter */}
            <div className="text-xs font-mono font-bold tracking-wider text-gray-300">
              <span className="text-[#d99b26] font-extrabold">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-gray-500 mx-1.5">/</span>
              <span className="text-gray-400">{String(totalSlides).padStart(2, "0")}</span>
            </div>

            {/* Pagination Indicator Pills */}
            <div className="flex items-center gap-2">
              {GALLERY_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#d99b26]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Quick Caption Tag */}
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
              <Layers className="w-3.5 h-3.5 text-[#d99b26]" />
              <span>Division Research Feed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
