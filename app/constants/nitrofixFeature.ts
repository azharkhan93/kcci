import {
  Droplets,
  Sparkles,
  Sprout,
  ShieldCheck,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface FeatureCard {
  id: string;
  step: string;
  title: string;
  badge: string;
  description: string;
  icon: LucideIcon;
  tag: string;
  accent: "emerald" | "sky" | "teal";
}

export interface NitrofixFeatureData {
  tag: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  cards: FeatureCard[];
  outcomes: { label: string; icon: LucideIcon }[];
}

export const NITROFIX_FEATURE_CONTENT: NitrofixFeatureData = {
  tag: "FEATURED INNOVATION",
  headingPrefix: "Meet ",
  headingHighlight: "NitroFIX™",
  subtitle:
    "Our flagship circular biopolymer hydrogel engineered from upcycled orchard biomass for precision water and nitrogen management.",
  ctaText: "Explore Product",
  ctaHref: "/nitrofix",
  cards: [
    {
      id: "nitrofix-core",
      step: "01",
      badge: "Biopolymer Innovation",
      title: "Circular Hydrogel Matrix",
      description:
        "Engineered from upcycled seasonal orchard prunings, forming active moisture micro-reservoirs in root zones.",
      icon: Sprout,
      tag: "100% Upcycled Biomass",
      accent: "emerald",
    },
    {
      id: "water-retention",
      step: "02",
      badge: "Up to 40% Saved",
      title: "Rhizosphere Hydro-Lock",
      description:
        "Holds hundreds of times its dry weight in soil moisture, protecting crops against heat stress and deep percolation waste.",
      icon: Droplets,
      tag: "Moisture Stability",
      accent: "sky",
    },
    {
      id: "nitrogen-management",
      step: "03",
      badge: "95% Retention",
      title: "Synchronized Nutrition",
      description:
        "Slow-release matrix delivers steady nitrogen ions directly to root hairs with zero groundwater chemical runoff.",
      icon: Sparkles,
      tag: "Nutrient Efficiency",
      accent: "teal",
    },
  ],
  outcomes: [
    { label: "Zero Groundwater Runoff", icon: ShieldCheck },
    { label: "Stable Rhizosphere Moisture", icon: Waves },
    { label: "Optimized Fertilizer Uptake", icon: Zap },
  ],
};
