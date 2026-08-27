"use client";

import { useState, useEffect, type RefObject } from "react";

export interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView(
  targetRef: RefObject<HTMLElement | null>,
  options: UseInViewOptions = {},
): boolean {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = false } = options;
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = targetRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce) {
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef, threshold, rootMargin, triggerOnce]);

  return isInView;
}
