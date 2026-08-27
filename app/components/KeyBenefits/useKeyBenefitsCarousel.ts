"use client";

import { useCarousel, type UseCarouselOptions } from "@/app/hooks/useCarousel";

export type UseKeyBenefitsCarouselProps = UseCarouselOptions;

export function useKeyBenefitsCarousel(props: UseKeyBenefitsCarouselProps) {
  return useCarousel(props);
}
