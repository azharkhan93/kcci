"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { type TestimonialItem } from "@/app/constants/testimonials";
import { TestimonialCard } from "../TestimonialCard";
import { useInView } from "@/app/hooks/useInView";

export interface TestimonialMarqueeProps {
  items: TestimonialItem[];
  speed?: number; // duration in seconds
}

export const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({
  items,
  speed = 35,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const isInView = useInView(containerRef, { threshold: 0.1 });

  // Seamless GSAP Infinite Loop Animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      ease: "none",
      duration: speed,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed]);

  // Performance: Pause GSAP ticker when scrolled off-screen
  useEffect(() => {
    if (!tweenRef.current) return;
    if (isInView) {
      tweenRef.current.play();
    } else {
      tweenRef.current.pause();
    }
  }, [isInView]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => {
    if (isInView) tweenRef.current?.play();
  };

  // Duplicate items for continuous seamless wrap
  const loopedItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_6%,white_94%,transparent)]"
    >
      <div ref={trackRef} className="flex gap-6 w-max items-center">
        {loopedItems.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
};
