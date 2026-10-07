import {
  Trees,
  Scissors,
  FlaskConical,
  Droplets,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  id: string;
  stepNumber: string;
  watermark: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  colorScheme: "emerald" | "amber" | "teal" | "sky" | "green";
  position: "bottom" | "top"; // Alternating node placement like reference
  badgeLabel?: string;
}

export interface OrchardProcessData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  steps: ProcessStep[];
}

export const ORCHARD_PROCESS_CONTENT: OrchardProcessData = {
  headingPrefix: "From orchard waste to ",
  headingHighlight: "farm value.",
  subtitle: "A continuous closed-loop sequence converting orchard pruning residues into precision soil inputs.",
  steps: [
    {
      id: "orchard",
      stepNumber: "01",
      watermark: "1",
      title: "Apple Orchard",
      shortDesc: "High-density fruit orchards generating seasonal branch prunings.",
      icon: Trees,
      colorScheme: "emerald",
      position: "bottom",
      badgeLabel: "Origin",
    },
    {
      id: "biomass",
      stepNumber: "02",
      watermark: "2",
      title: "Pruning Biomass",
      shortDesc: "Collected organic lignocellulosic residue diverted from burning.",
      icon: Scissors,
      colorScheme: "amber",
      position: "top",
      badgeLabel: "Harvest",
    },
    {
      id: "innovation",
      stepNumber: "03",
      watermark: "3",
      title: "Material Innovation",
      shortDesc: "Advanced biopolymer crosslinking transforms raw fiber into hydrogel.",
      icon: FlaskConical,
      colorScheme: "teal",
      position: "bottom",
      badgeLabel: "Synthesis",
    },
    {
      id: "nitrofix",
      stepNumber: "04",
      watermark: "4",
      title: "NitroFIX™",
      shortDesc: "Engineered soil input deploying moisture and nitrogen bio-locking.",
      icon: Droplets,
      colorScheme: "sky",
      position: "top",
      badgeLabel: "Product",
    },
    {
      id: "agriculture",
      stepNumber: "05",
      watermark: "5",
      title: "Smarter Agriculture",
      shortDesc: "Self-regulating root rhizosphere achieving peak harvest yield.",
      icon: Sprout,
      colorScheme: "green",
      position: "bottom",
      badgeLabel: "Impact",
    },
  ],
  eyebrow: ""
};
