import {
  TreeDeciduous,
  Droplets,
  Layers,
  Sparkles,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

export interface HeroBackgroundSlide {
  id: string;
  badge?: string;
  headlinePrefix: string;
  headlineHighlight: string;
  supportingText: string;
  imageSrc: string;
  imageAlt: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  tag: string;
}

export interface StrataLayer {
  id: string;
  depth: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
  color: string;
  accentBg: string;
  glowHex: string;
  badge: string;
  hotspotTop: string;
  hotspotLeft: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export interface ArcNodePosition {
  top: string;
  left?: string;
  right?: string;
  rotate: string;
}

export const SLIDER_DESKTOP_ARC: ArcNodePosition[] = [
  { top: "16%", left: "90px", rotate: "-22deg" },
  { top: "33%", left: "140px", rotate: "-11deg" },
  { top: "50%", left: "155px", rotate: "0deg" },
  { top: "67%", left: "140px", rotate: "11deg" },
  { top: "84%", left: "90px", rotate: "22deg" },
];

export const SLIDER_MOBILE_ARC: ArcNodePosition[] = [
  { top: "16%", right: "22px", rotate: "20deg" },
  { top: "32%", right: "34px", rotate: "10deg" },
  { top: "48%", right: "38px", rotate: "0deg" },
  { top: "64%", right: "34px", rotate: "-10deg" },
  { top: "80%", right: "22px", rotate: "-20deg" },
];

export const HERO_STRATA_LAYERS: StrataLayer[] = [
  {
    id: "orchard",
    depth: "Surface Level (0m)",
    title: "FARM / ORCHARD",
    shortTitle: "Canopy",
    subtitle: "Apple orchard canopy & surface ecosystem",
    metric: "100%",
    metricLabel: "Canopy Photosynthetic Vitality",
    icon: TreeDeciduous,
    color: "text-emerald-700",
    accentBg: "bg-emerald-50 border-emerald-200",
    glowHex: "#10b981",
    badge: "Canopy Strata",
    hotspotTop: "16%",
    hotspotLeft: "50%",
    imageSrc: "/hero/nitrofix-hero-strata.jpg",
    imageAlt:
      "Apple orchard stratified soil, hydrogel material and root system cross-section",
    description:
      "High-density apple orchard ecosystem engineered for peak photosynthetic conversion and climate resilience.",
  },
  {
    id: "water",
    depth: "-0.2m to -0.6m",
    title: "Water droplets",
    shortTitle: "Moisture",
    subtitle: "Micro-precipitation capture & infiltration",
    metric: "40%",
    metricLabel: "Irrigation Conservation Rate",
    icon: Droplets,
    color: "text-sky-600",
    accentBg: "bg-sky-50 border-sky-200",
    glowHex: "#0ea5e9",
    badge: "Hydration Strata",
    hotspotTop: "38%",
    hotspotLeft: "32%",
    imageSrc: "/hero/nitrofix-water-dynamics.jpg",
    imageAlt:
      "Micro-irrigation droplets and water infiltration dynamics in apple orchard soil",
    description:
      "Surface water droplets and micro-irrigation channeled directly downward, preventing evaporative runoff.",
  },
  {
    id: "soil",
    depth: "-0.6m to -1.4m",
    title: "Soil structure",
    shortTitle: "Soil Matrix",
    subtitle: "Organic aggregate & aeration channels",
    metric: "6.8 pH",
    metricLabel: "Balanced Soil Stratum",
    icon: Layers,
    color: "text-amber-700",
    accentBg: "bg-amber-50 border-amber-200",
    glowHex: "#f59e0b",
    badge: "Soil Matrix",
    hotspotTop: "54%",
    hotspotLeft: "68%",
    imageSrc: "/hero/nitrofix-hero-strata.jpg",
    imageAlt: "Enriched organic soil structure and capillary aeration channels",
    description:
      "Rich crumb soil structure with open pore networks that facilitate optimal gaseous exchange and moisture retention.",
  },
  {
    id: "nitrofix",
    depth: "-1.4m to -2.2m",
    title: "NitroFIX material",
    shortTitle: "NitroFIX™",
    subtitle: "Smart hydrogel biopolymer & nitrogen matrix",
    metric: "95%",
    metricLabel: "Nitrogen Leaching Prevention",
    icon: Sparkles,
    color: "text-emerald-600",
    accentBg: "bg-emerald-100/80 border-emerald-300",
    glowHex: "#059669",
    badge: "Core Technology",
    hotspotTop: "68%",
    hotspotLeft: "42%",
    imageSrc: "/hero/nitrofix-hydrogel-macro.jpg",
    imageAlt:
      "Microscopic macro view of NitroFIX hydrogel granules releasing nutrients to roots",
    description:
      "Next-generation crosslinked hydrogel granules that lock moisture and slow-release nitrogen ions directly into root zones.",
  },
  {
    id: "roots",
    depth: "-2.2m to -3.5m",
    title: "Root system",
    shortTitle: "Rhizosphere",
    subtitle: "Deep rhizosphere capillary absorption",
    metric: "+32%",
    metricLabel: "Root Hair Nutrient Uptake",
    icon: GitBranch,
    color: "text-teal-700",
    accentBg: "bg-teal-50 border-teal-200",
    glowHex: "#14b8a6",
    badge: "Rhizosphere",
    hotspotTop: "84%",
    hotspotLeft: "58%",
    imageSrc: "/hero/nitrofix-roots-nutrition.jpg",
    imageAlt:
      "Apple tree deep root system absorbing slow-release nutrients in fertile soil",
    description:
      "Expansive, healthy root architecture absorbing slow-release nutrients and stored hydration under zero moisture stress.",
  },
];

export const HERO_BG_SLIDES: HeroBackgroundSlide[] = [
  {
    id: "nitrofix-core",
    headlinePrefix: "Smarter farming starts with ",
    headlineHighlight: "smarter inputs.",
    supportingText:
      "Practical agricultural solutions built for smarter water and nutrient management.",
    imageSrc: "/hero/nitrofix-hero-strata.jpg",
    imageAlt:
      "Apple orchard stratified soil, hydrogel material and root system cross-section",
    primaryCtaText: "Discover NitroFIX",
    primaryCtaHref: "/nitrofix",
    secondaryCtaText: "Partner With Us",
    secondaryCtaHref: "/contact",
    tag: "Overview",
  },
  {
    id: "water-management",
    headlinePrefix: "Targeted root hydration with ",
    headlineHighlight: "zero runoff.",
    supportingText:
      "Advanced hydrogel micro-reservoirs cut water losses by 40% while sustaining deep root vitality.",
    imageSrc: "/hero/nitrofix-water-dynamics.jpg",
    imageAlt:
      "Micro-irrigation droplets and water infiltration dynamics in apple orchard soil",
    primaryCtaText: "Discover NitroFIX",
    primaryCtaHref: "/nitrofix",
    secondaryCtaText: "Partner With Us",
    secondaryCtaHref: "/contact",
    tag: "Water Management",
  },
  {
    id: "hydrogel-matrix",
    headlinePrefix: "Slow-release matrix for ",
    headlineHighlight: "95% N-retention.",
    supportingText:
      "Biopolymer formulation eliminates fertilizer leaching and boosts seasonal crop yields.",
    imageSrc: "/hero/nitrofix-hydrogel-macro.jpg",
    imageAlt:
      "Microscopic macro view of NitroFIX hydrogel granules releasing nutrients to roots",
    primaryCtaText: "Discover NitroFIX",
    primaryCtaHref: "/nitrofix",
    secondaryCtaText: "Partner With Us",
    secondaryCtaHref: "/contact",
    tag: "NitroFIX™ Matrix",
  },
];

export const HERO_DATA = {
  headline: "Smarter farming starts with smarter inputs.",
  headlinePrefix: "Smarter farming starts with ",
  headlineHighlight: "smarter inputs.",
  supportingText:
    "Practical agricultural solutions built for smarter water and nutrient management.",
  primaryCta: {
    label: "Discover NitroFIX",
    href: "/nitrofix",
  },
  secondaryCta: {
    label: "Partner With Us",
    href: "/contact",
  },
  slides: HERO_BG_SLIDES,
};
