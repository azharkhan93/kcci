"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useInView } from "@/app/hooks/useInView";

export interface UseHeroCarouselOptions {
  totalSlides: number;
  autoPlayInterval?: number;
}

export function useHeroCarousel({
  totalSlides,
  autoPlayInterval = 5500,
}: UseHeroCarouselOptions) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const isAnimatingRef = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const imageClipRef = useRef<HTMLDivElement>(null);
  const hudInfoRef = useRef<HTMLDivElement>(null);

  
  const isInView = useInView(containerRef, { threshold: 0.2 });

 
  const goToSlide = useCallback(
    (newIndex: number) => {
      if (isAnimatingRef.current || newIndex === currentIdx) return;
      isAnimatingRef.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIdx(newIndex);
          isAnimatingRef.current = false;
        },
      });

      tl.to([title1Ref.current, title2Ref.current], {
        yPercent: 110,
        opacity: 0,
        duration: 0.25,
        stagger: 0.02,
        ease: "power3.in",
      }).to(
        [descRef.current, metricsRef.current, actionsRef.current],
        { y: 12, opacity: 0, duration: 0.2, stagger: 0.02, ease: "power2.in" },
        "-=0.2",
      );

      if (imageClipRef.current) {
        tl.to(
          imageClipRef.current,
          { opacity: 0.2, scale: 0.96, duration: 0.28, ease: "power2.inOut" },
          0,
        );
      }
      if (hudInfoRef.current) {
        tl.to(
          hudInfoRef.current,
          { opacity: 0, y: 8, duration: 0.2, ease: "power2.in" },
          0,
        );
      }
    },
    [currentIdx],
  );

  const handleNext = useCallback(
    () => goToSlide((currentIdx + 1) % totalSlides),
    [currentIdx, goToSlide, totalSlides],
  );
  const handlePrev = useCallback(
    () => goToSlide((currentIdx - 1 + totalSlides) % totalSlides),
    [currentIdx, goToSlide, totalSlides],
  );

  // Autoplay Loop: Pauses automatically when off-screen
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isInView, handleNext, autoPlayInterval]);

  // Responsive GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        { isMobile: "(max-width: 768px)", isDesktop: "(min-width: 769px)" },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };
          const tl = gsap.timeline();

          tl.fromTo(
            [title1Ref.current, title2Ref.current],
            { yPercent: 120, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: isMobile ? 0.45 : 0.6,
              stagger: 0.07,
              ease: "power4.out",
            },
          )
            .fromTo(
              descRef.current,
              { y: 14, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
              "-=0.3",
            )
            .fromTo(
              metricsRef.current,
              { y: 12, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
              "-=0.25",
            )
            .fromTo(
              actionsRef.current,
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
              "-=0.2",
            );

          if (imageClipRef.current) {
            gsap.fromTo(
              imageClipRef.current,
              { scale: isMobile ? 1.04 : 1.06, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: isMobile ? 0.5 : 0.65,
                ease: "power3.out",
              },
            );
          }
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentIdx]);

  return {
    currentIdx,
    isInView,
    goToSlide,
    handleNext,
    handlePrev,
    refs: {
      containerRef,
      title1Ref,
      title2Ref,
      descRef,
      metricsRef,
      actionsRef,
      imageClipRef,
      hudInfoRef,
    },
  };
}
