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
  autoPlayInterval = 6500,
}: UseHeroCarouselOptions) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const currentIdxRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const isMountedRef = useRef(true);
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Sync ref with state
  currentIdxRef.current = currentIdx;

  const containerRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { threshold: 0.15 });

  // ── Elegant GSAP Slide Reveal Entrance (100% Sharp with clearProps) ──
  const playEntranceReveal = useCallback(() => {
    if (!isMountedRef.current || !textContainerRef.current) return;

    // First ensure any previous filter/blur styles are completely cleared
    if (actionsRef.current) {
      actionsRef.current.style.filter = "none";
    }
    if (headlineRef.current) {
      headlineRef.current.style.filter = "none";
    }
    if (descRef.current) {
      descRef.current.style.filter = "none";
    }

    const targets = [
      headlineRef.current,
      descRef.current,
      actionsRef.current,
    ].filter(Boolean);

    if (targets.length === 0) return;
    gsap.killTweensOf(targets);

    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        isAnimatingRef.current = false;
        if (!isMountedRef.current) return;
        const liveTargets = [
          headlineRef.current,
          descRef.current,
          actionsRef.current,
        ].filter(Boolean);
        if (liveTargets.length > 0) {
          gsap.set(liveTargets, {
            clearProps: "transform,opacity,filter",
          });
        }
      },
    });

    activeTimelineRef.current = tl;

    // 1. Animate Headline (Smooth vertical rise & fade)
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        {
          y: 28,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power4.out",
        },
        0,
      );
    }

    // 2. Animate Description text (Staggered subtle rise)
    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        {
          y: 18,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        0.1,
      );
    }

    // 3. Animate CTA Buttons (Clean scale & slide-up with ZERO blur)
    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current,
        {
          y: 16,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "back.out(1.4)",
        },
        0.18,
      );
    }
  }, []);

  // ── Smooth Slide Transition Orchestrator ──
  const goToSlide = useCallback(
    (newIndex: number) => {
      const activeIdx = currentIdxRef.current;
      if (!isMountedRef.current || isAnimatingRef.current || newIndex === activeIdx) return;
      isAnimatingRef.current = true;

      const nextIdx = (newIndex + totalSlides) % totalSlides;

      const exitTargets = [
        headlineRef.current,
        descRef.current,
        actionsRef.current,
      ].filter(Boolean);

      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }

      // Exit Timeline: Staggered clean fade out
      if (exitTargets.length > 0) {
        gsap.killTweensOf(exitTargets);
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (!isMountedRef.current) return;
            setCurrentIdx(nextIdx);
            currentIdxRef.current = nextIdx;
            requestAnimationFrame(() => {
              if (isMountedRef.current) {
                playEntranceReveal();
              }
            });
          },
        });
        activeTimelineRef.current = exitTl;
        exitTl.to(exitTargets, {
          y: -14,
          opacity: 0,
          duration: 0.22,
          stagger: 0.03,
          ease: "power2.in",
        });
      } else {
        setCurrentIdx(nextIdx);
        currentIdxRef.current = nextIdx;
        isAnimatingRef.current = false;
      }
    },
    [totalSlides, playEntranceReveal],
  );

  const handleNext = useCallback(
    () => goToSlide((currentIdxRef.current + 1) % totalSlides),
    [goToSlide, totalSlides],
  );

  const handlePrev = useCallback(
    () => goToSlide((currentIdxRef.current - 1 + totalSlides) % totalSlides),
    [goToSlide, totalSlides],
  );

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Initial Load / Viewport Entrance
  useEffect(() => {
    isMountedRef.current = true;
    const ctx = gsap.context(() => {
      playEntranceReveal();
    }, containerRef);

    return () => {
      isMountedRef.current = false;
      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }
      ctx.revert();
    };
  }, [playEntranceReveal]);

  // Clean Autoplay Loop (Active only when visible in viewport and playing, without high-frequency render thrashing)
  useEffect(() => {
    if (!isInView || !isPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isInView, isPlaying, handleNext, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, handleNext, handlePrev]);

  return {
    currentIdx,
    isPlaying,
    progressPercent: 0,
    isInView,
    goToSlide,
    handleNext,
    handlePrev,
    togglePlay,
    setIsPlaying,
    refs: {
      containerRef,
      textContainerRef,
      headlineRef,
      descRef,
      actionsRef,
      bgContainerRef,
    },
  };
}
