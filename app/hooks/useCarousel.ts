"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { useInView } from "./useInView";

export interface UseCarouselOptions {
  totalItems: number;
  autoPlayInterval?: number;
}

export function useCarousel({
  totalItems,
  autoPlayInterval = 5000,
}: UseCarouselOptions) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentIdxRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  currentIdxRef.current = currentIdx;

  const isInView = useInView(containerRef, { threshold: 0.15 });

  const triggerTextReveal = useCallback(() => {
    if (textContentRef.current) {
      gsap.killTweensOf(textContentRef.current);
      gsap.fromTo(
        textContentRef.current,
        { opacity: 0.2, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }
  }, []);

  const goToIndex = useCallback(
    (newIdx: number) => {
      if (newIdx === currentIdxRef.current) return;
      setCurrentIdx(newIdx);
      currentIdxRef.current = newIdx;
      triggerTextReveal();
    },
    [triggerTextReveal]
  );

  const handleNext = useCallback(() => {
    const nextIdx = (currentIdxRef.current + 1) % totalItems;
    setCurrentIdx(nextIdx);
    currentIdxRef.current = nextIdx;
    triggerTextReveal();
  }, [totalItems, triggerTextReveal]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIdxRef.current - 1 + totalItems) % totalItems;
    setCurrentIdx(prevIdx);
    currentIdxRef.current = prevIdx;
    triggerTextReveal();
  }, [totalItems, triggerTextReveal]);

  // Autoplay Loop (Active only when visible in viewport and not paused)
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      if (!isPausedRef.current) {
        handleNext();
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isInView, handleNext, autoPlayInterval]);

  const pause = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  return {
    currentIdx,
    isInView,
    containerRef,
    textContentRef,
    goToIndex,
    handleNext,
    handlePrev,
    pause,
    resume,
  };
}
