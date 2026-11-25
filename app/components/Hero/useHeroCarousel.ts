"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { useInView } from "@/app/hooks/useInView";
import type { HeroMorphHandle } from "./HeroMorphBackdrop";

export interface UseHeroCarouselOptions {
  totalSlides: number;
  autoPlayInterval?: number;
}

export type SlideDirection = 1 | -1;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function subscribeVisibility(onChange: () => void) {
  if (typeof document === "undefined") return () => {};
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

function getVisibilitySnapshot() {
  if (typeof document === "undefined") return false;
  return document.visibilityState === "hidden";
}

const getServerFalseSnapshot = () => false;

export function useHeroCarousel({
  totalSlides,
  autoPlayInterval = 6500,
}: UseHeroCarouselOptions) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [direction, setDirection] = useState<SlideDirection>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPausedByInteraction, setIsPausedByInteraction] = useState(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerFalseSnapshot,
  );
  const isTabHidden = useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    getServerFalseSnapshot,
  );

  const currentIdxRef = useRef(0);
  const isMountedRef = useRef(true);
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const bgTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const elapsedMsRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  // Swipe tracking refs
  const swipeStartRef = useRef<{
    x: number;
    y: number;
    pointerId: number;
  } | null>(null);

  useEffect(() => {
    currentIdxRef.current = currentIdx;
  }, [currentIdx]);

  const containerRef = useRef<HTMLElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const morphBackdropRef = useRef<HeroMorphHandle>(null);
  const morphStateRef = useRef({ progress: 1 });
  const slideLayerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const kickerLineRef = useRef<HTMLDivElement>(null);
  const kickerTextRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const headlinePrefixRef = useRef<HTMLElement>(null);
  const headlineHighlightRef = useRef<HTMLElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLSpanElement>(null);
  const circleProgressRef = useRef<SVGCircleElement>(null);

  const setSlideLayerRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      slideLayerRefs.current[index] = el;
    },
    [],
  );

  const isInView = useInView(containerRef, { threshold: 0.15 });

  // Subtle GPU micro-parallax on active backdrop (desktop fine pointers only)
  useEffect(() => {
    const container = containerRef.current;
    const bgLayer = bgLayerRef.current;
    if (!container || !bgLayer || prefersReducedMotion) return;
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const xTo = gsap.quickTo(bgLayer, "x", {
      duration: 0.9,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(bgLayer, "y", {
      duration: 0.9,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      xTo(-nx * 14);
      yTo(-ny * 10);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      gsap.set(bgLayer, { clearProps: "x,y" });
    };
  }, [prefersReducedMotion]);

  const getAllAnimatedTargets = useCallback((): HTMLElement[] => {
    const actionChildren = actionsRef.current
      ? (Array.from(actionsRef.current.children) as HTMLElement[])
      : [];
    const candidates: Array<HTMLElement | null> = [
      kickerLineRef.current,
      kickerTextRef.current,
      headlineRef.current,
      headlinePrefixRef.current,
      headlineHighlightRef.current,
      descRef.current,
      actionsRef.current,
      ...actionChildren,
    ];
    return candidates.filter((el): el is HTMLElement => el !== null);
  }, []);

  const getExitTargets = useCallback((): HTMLElement[] => {
    const candidates: Array<HTMLElement | null> = [
      kickerTextRef.current,
      headlineRef.current,
      descRef.current,
      actionsRef.current,
    ];
    return candidates.filter((el): el is HTMLElement => el !== null);
  }, []);

  // ── GSAP-Driven FBM Luminance Morph Dissolve Reveal ──
  const playBackdropReveal = useCallback(
    (incomingIdx: number, outgoingIdx: number | null, dir: SlideDirection) => {
      if (bgTimelineRef.current) {
        bgTimelineRef.current.kill();
      }
      gsap.killTweensOf(morphStateRef.current);

      const tl = gsap.timeline({
        onComplete: () => {
          if (!isMountedRef.current) return;
          setPrevIdx(null);
        },
      });
      bgTimelineRef.current = tl;

      if (prefersReducedMotion || outgoingIdx === null) {
        morphStateRef.current.progress = 1;
        morphBackdropRef.current?.renderMorph(
          incomingIdx,
          incomingIdx,
          1,
          dir,
        );
        setPrevIdx(null);
        return;
      }

      const morphState = morphStateRef.current;
      morphState.progress = 0;

      const easeInOutQuint = (t: number): number => {
        const x = Math.min(Math.max(t, 0), 1);
        return x < 0.5 ? 16 * x ** 5 : 1 - (-2 * x + 2) ** 5 / 2;
      };

      tl.to(
        morphState,
        {
          progress: 1,
          duration: 1.5,
          ease: easeInOutQuint,
          onUpdate: () => {
            morphBackdropRef.current?.renderMorph(
              outgoingIdx,
              incomingIdx,
              morphState.progress,
              dir,
            );
          },
        },
        0,
      );
    },
    [prefersReducedMotion],
  );

  // ── Choreographed Architectural GSAP Text Reveal ──
  const playEntranceReveal = useCallback(() => {
    if (!isMountedRef.current || !textContainerRef.current) return;

    const allTargets = getAllAnimatedTargets();
    if (allTargets.length === 0) return;

    gsap.killTweensOf(allTargets);

    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
    }

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => {
        if (!isMountedRef.current) return;
        const liveTargets = getAllAnimatedTargets();
        if (liveTargets.length > 0) {
          gsap.set(liveTargets, {
            clearProps: "transform,opacity,clipPath",
          });
        }
      },
    });

    activeTimelineRef.current = tl;

    if (prefersReducedMotion) {
      const fadeTargets = getExitTargets();
      tl.fromTo(
        fadeTargets,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, stagger: 0.04, ease: "power2.out" },
      );
      return;
    }

    // 1. Hairline rule draw + masked kicker text lift
    if (kickerLineRef.current) {
      tl.fromTo(
        kickerLineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.55, transformOrigin: "left center" },
        0,
      );
    }

    if (kickerTextRef.current) {
      tl.fromTo(
        kickerTextRef.current,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.6 },
        0.04,
      );
    }

    // 2. Architectural clip-mask reveal on H1 + staggered prefix/highlight glide
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { clipPath: "inset(0% 0% 100% 0%)", y: 20, opacity: 0.01 },
        {
          clipPath: "inset(-8% 0% -14% 0%)",
          y: 0,
          opacity: 1,
          duration: 0.85,
        },
        0.08,
      );
    }

    if (headlinePrefixRef.current) {
      tl.fromTo(
        headlinePrefixRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.72 },
        0.1,
      );
    }

    if (headlineHighlightRef.current) {
      tl.fromTo(
        headlineHighlightRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.78 },
        0.18,
      );
    }

    // 3. Supporting description smooth clip & lift
    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { clipPath: "inset(0% 0% 100% 0%)", y: 16, opacity: 0 },
        {
          clipPath: "inset(-5% 0% -10% 0%)",
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.22,
      );
    }

    // 4. Staggered CTA buttons entrance
    if (actionsRef.current) {
      const buttons = Array.from(actionsRef.current.children) as HTMLElement[];
      gsap.set(actionsRef.current, { opacity: 1, y: 0 });
      if (buttons.length > 0) {
        tl.fromTo(
          buttons,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            stagger: 0.08,
            ease: "power3.out",
          },
          0.3,
        );
      }
    }
  }, [prefersReducedMotion, getAllAnimatedTargets, getExitTargets]);

  const syncProgressVisuals = useCallback((ratio: number) => {
    const clamped = Math.min(Math.max(ratio, 0), 1);
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${clamped})`;
    }
    if (circleProgressRef.current) {
      circleProgressRef.current.style.strokeDashoffset = String(1 - clamped);
    }
  }, []);

  // ── Interruptible Slide Transition Orchestrator ──
  const goToSlide = useCallback(
    (newIndex: number, explicitDirection?: SlideDirection) => {
      if (totalSlides <= 1 || !isMountedRef.current) return;

      const activeIdx = currentIdxRef.current;
      const nextIdx = ((newIndex % totalSlides) + totalSlides) % totalSlides;
      if (nextIdx === activeIdx) return;

      const inferredDir: SlideDirection =
        explicitDirection ?? (nextIdx > activeIdx ? 1 : -1);
      setDirection(inferredDir);

      // Reset both progress indicators immediately
      elapsedMsRef.current = 0;
      lastTickRef.current = performance.now();
      syncProgressVisuals(0);

      const exitTargets = getExitTargets();

      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }

      if (exitTargets.length > 0) {
        gsap.killTweensOf(exitTargets);
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (!isMountedRef.current) return;
            setPrevIdx(activeIdx);
            setCurrentIdx(nextIdx);
            currentIdxRef.current = nextIdx;
            requestAnimationFrame(() => {
              if (isMountedRef.current) {
                playBackdropReveal(nextIdx, activeIdx, inferredDir);
                playEntranceReveal();
              }
            });
          },
        });
        activeTimelineRef.current = exitTl;

        if (!prefersReducedMotion && kickerLineRef.current) {
          exitTl.to(
            kickerLineRef.current,
            { scaleX: 0, opacity: 0, duration: 0.14, ease: "power2.in" },
            0,
          );
        }

        exitTl.to(
          exitTargets,
          {
            y: prefersReducedMotion ? 0 : -12,
            opacity: 0,
            duration: prefersReducedMotion ? 0.14 : 0.17,
            stagger: prefersReducedMotion ? 0 : 0.02,
            ease: "power2.in",
          },
          0,
        );
      } else {
        setPrevIdx(activeIdx);
        setCurrentIdx(nextIdx);
        currentIdxRef.current = nextIdx;
      }
    },
    [
      totalSlides,
      playBackdropReveal,
      playEntranceReveal,
      prefersReducedMotion,
      getExitTargets,
      syncProgressVisuals,
    ],
  );

  const handleNext = useCallback(
    () => goToSlide(currentIdxRef.current + 1, 1),
    [goToSlide],
  );

  const handlePrev = useCallback(
    () => goToSlide(currentIdxRef.current - 1, -1),
    [goToSlide],
  );

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const pauseByInteraction = useCallback(() => {
    setIsPausedByInteraction(true);
  }, []);

  const resumeByInteraction = useCallback(() => {
    setIsPausedByInteraction(false);
  }, []);

  // Initial Load / Viewport Entrance
  useEffect(() => {
    isMountedRef.current = true;
    const morphState = morphStateRef.current;
    const ctx = gsap.context(() => {
      playEntranceReveal();
    }, containerRef);

    return () => {
      isMountedRef.current = false;
      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }
      if (bgTimelineRef.current) {
        bgTimelineRef.current.kill();
      }
      gsap.killTweensOf(morphState);
      ctx.revert();
    };
  }, [playEntranceReveal]);

  // Precision Pause-Resumable Progress & Autoplay Loop (60fps DOM-only updates)
  const isActivelyRunning =
    isPlaying &&
    isInView &&
    !isPausedByInteraction &&
    !isTabHidden &&
    totalSlides > 1;

  useEffect(() => {
    if (!isActivelyRunning) {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      return;
    }

    lastTickRef.current = performance.now();

    const tick = (now: number) => {
      if (!isMountedRef.current) return;

      const delta = Math.max(0, now - lastTickRef.current);
      lastTickRef.current = now;
      elapsedMsRef.current += delta;

      const ratio = Math.min(elapsedMsRef.current / autoPlayInterval, 1);
      syncProgressVisuals(ratio);

      if (elapsedMsRef.current >= autoPlayInterval) {
        elapsedMsRef.current = 0;
        goToSlide(currentIdxRef.current + 1, 1);
        return;
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [
    isActivelyRunning,
    autoPlayInterval,
    goToSlide,
    currentIdx,
    syncProgressVisuals,
  ]);

  // Keyboard Navigation (Arrows when in view, ignores form inputs)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, handleNext, handlePrev]);

  // Touch / Pointer Swipe Support (preserves vertical page scroll)
  const onPointerDown = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest("a, button, [role='button'], input, select")) return;

    swipeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      pointerId: e.pointerId,
    };
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const start = swipeStartRef.current;
      swipeStartRef.current = null;
      if (!start || start.pointerId !== e.pointerId) return;

      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;

      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        if (dx < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    },
    [handleNext, handlePrev],
  );

  const onPointerCancel = useCallback(() => {
    swipeStartRef.current = null;
  }, []);

  return {
    currentIdx,
    prevIdx,
    direction,
    isPlaying,
    isActivelyRunning,
    prefersReducedMotion,
    progressPercent: 0,
    isInView,
    goToSlide,
    handleNext,
    handlePrev,
    togglePlay,
    setIsPlaying,
    pauseByInteraction,
    resumeByInteraction,
    setSlideLayerRef,
    swipeHandlers: {
      onPointerDown,
      onPointerUp,
      onPointerCancel,
    },
    refs: {
      containerRef,
      bgLayerRef,
      morphBackdropRef,
      textContainerRef,
      kickerLineRef,
      kickerTextRef,
      headlineRef,
      headlinePrefixRef,
      headlineHighlightRef,
      descRef,
      actionsRef,
      bgContainerRef,
      progressBarRef,
      circleProgressRef,
    },
  };
}
