import {
  Activity,
  Layers,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  highlight: string;
}

export const WHY_CHOOSE_HEADER = {
  titlePart1: "Why Choose ",
  titlePart2: "Farm2i",
  subtitle:
    "Experience the future of agriculture with a comprehensive management system designed to streamline operations, boost productivity, and maximize profitability.",
  ctaText: "Start Your Journey",
  ctaHref: "/contact",
};

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "precision-crop-health",
    number: "01",
    title: "Precision Crop Health",
    description:
      "Monitor crop vitality index, moisture levels, and distress signals in real-time using advanced satellite imagery and IoT sensors.",
    Icon: Activity,
    highlight: "Real-Time Telemetry",
  },
  {
    id: "smart-resource-tracking",
    number: "02",
    title: "Smart Resource Tracking",
    description:
      "Automate inventory flows for seeds, fertilizers, and equipment. Prevent shortages and reduce waste with predictive tracking.",
    Icon: Layers,
    highlight: "Zero-Waste Operations",
  },
  {
    id: "live-field-intelligence",
    number: "03",
    title: "Live Field Intelligence",
    description:
      "Receive instant alerts on weather shifts, soil anomalies, and pest risks directly to your dashboard to take immediate action.",
    Icon: Radio,
    highlight: "Proactive Risk Shield",
  },
];
