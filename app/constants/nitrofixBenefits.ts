import { Droplets, FlaskConical, Sprout, Recycle, type LucideIcon } from "lucide-react";

export interface BenefitCard {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "sky" | "emerald" | "amber" | "teal";
}

export interface NitrofixBenefitsData {
  tag: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  cards: BenefitCard[];
}

export const NITROFIX_BENEFITS_CONTENT: NitrofixBenefitsData = {
  tag: "ADVANTAGES",
  headingPrefix: "NitroFIX ",
  headingHighlight: "Benefits.",
  subtitle: "Engineered to optimize crop resilience, nutrient uptake, and resource sustainability.",
  cards: [
    {
      id: "water-retention",
      number: "01",
      title: "Water Retention",
      description: "Helps support water availability around the crop.",
      icon: Droplets,
      accent: "sky",
    },
    {
      id: "nitrogen-management",
      number: "02",
      title: "Nitrogen Management",
      description: "Designed for controlled nitrogen availability.",
      icon: FlaskConical,
      accent: "emerald",
    },
    {
      id: "agricultural-biomass",
      number: "03",
      title: "Agricultural Biomass",
      description: "Built around a renewable agricultural biomass resource.",
      icon: Sprout,
      accent: "teal",
    },
    {
      id: "resource-efficiency",
      number: "04",
      title: "Resource Efficiency",
      description: "Designed with more efficient agricultural resource use in mind.",
      icon: Recycle,
      accent: "amber",
    },
  ],
};
