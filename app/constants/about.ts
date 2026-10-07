import {
  Package,
  FlaskConical,
  Truck,
  Sparkles,
  Cpu,
  Handshake,
  Activity,
  Layers,
  Radio,
  Award,
  Sprout,
  Globe2,
  type LucideIcon,
} from "lucide-react";

// ── 1. Hero Data Types ──
export interface AboutHeroData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
}

// ── 2. Mission & Product Showcase Data Types ──
export interface AboutProductData {
  image: string;
  alt: string;
  badge: string;
  caption: string;
  tag: string;
}

export interface AboutMissionData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  paragraphs: string[];
  chips: string[];
  product: AboutProductData;
}

// ── 3. What We Do Data Types ──
export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface WhatWeDoClosingData {
  tag: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface WhatWeDoData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  services: ServiceItem[];
  closing?: WhatWeDoClosingData;
}


// ── 4. Core Advantages Data Types ──
export interface AdvantagePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  metric: string;
  metricLabel: string;
}

export interface TelemetryGauge {
  label: string;
  value: string;
  sublabel: string;
}

export interface TelemetryHubData {
  tag: string;
  systemId: string;
  metricLabel: string;
  metricValue: string;
  metricDescription: string;
  microGauges: TelemetryGauge[];
  assurance: string;
}

export interface CoreAdvantagesData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  telemetryHub: TelemetryHubData;
  pillars: AdvantagePillar[];
}

// ── 5. Standards Data Types ──
export interface StandardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StandardsData {
  eyebrow: string;
  heading: string;
  standards: StandardItem[];
}

// ── Complete Static Content Export ──
export const ABOUT_HERO_CONTENT: AboutHeroData = {
  eyebrow: "ABOUT FARM HEALTH INNOVATIONS",
  headingPrefix: "Agriculture is changing. ",
  headingHighlight: "So are we.",
  subtitle:
    "Building practical agricultural innovation that is useful, scalable, and ready for real-world farms.",
};

export const ABOUT_MISSION_CONTENT: AboutMissionData = {
  eyebrow: "02 — ABOUT FARM HEALTH INNOVATIONS",
  headingPrefix: "Agriculture is changing. ",
  headingHighlight: "So are we.",
  paragraphs: [
    "Farm Health Innovations Private Limited works across agricultural inputs and emerging agri-tech solutions, with a focus on products that make sense for real markets and real farms.",
    "From the wholesale supply of fertilizers and agrochemical products to our own product-development initiatives, we are building a business around one simple idea: agricultural innovation should be useful, scalable and ready for the future.",
    "We bring together agricultural markets, product development and innovation to create opportunities across the agri-value chain.",
  ],
  chips: [
    "Reliable Wholesale Inputs",
    "In-House Product Development",
    "Agri-Value Chain Integration",
  ],
  product: {
    image: "/product.jpeg",
    alt: "NitroFIX Sustainable Fertilizer Solutions Packaging",
    badge: "NitroFIX™ Biopolymer Hydrogel",
    caption: "Sustainable Fertilizer & Moisture Matrix",
    tag: "1 kg Pack",
  },
};

export const WHAT_WE_DO_CONTENT: WhatWeDoData = {
  eyebrow: "03 — WHAT WE DO",
  headingPrefix: "Inputs today. ",
  headingHighlight: "Innovation for tomorrow.",
  subtitle:
    "Comprehensive capabilities spanning traditional input supply and next-generation agri-technologies.",
  services: [
    {
      id: "fertilizer-wholesale",
      title: "Fertilizer wholesale and supply",
      icon: Package,
      description:
        "Dependable bulk supply and wholesale distribution of standard and specialty fertilizers.",
    },
    {
      id: "agrochemical-supply",
      title: "Agrochemical wholesale and supply",
      icon: FlaskConical,
      description:
        "Certified crop protection and agrochemical products tailored for commercial growers.",
    },
    {
      id: "sourcing-distribution",
      title: "Agricultural product sourcing and distribution",
      icon: Truck,
      description:
        "Robust sourcing networks and regional distribution channels connecting quality inputs to farms.",
    },
    {
      id: "product-development",
      title: "Agri-product development",
      icon: Sparkles,
      description:
        "In-house formulation and R&D for next-generation inputs including NitroFIX™ biopolymers.",
    },
    {
      id: "tech-solutions",
      title: "Technology-led agricultural solutions",
      icon: Cpu,
      description:
        "Integrating smart agronomy, field telemetry, and water-nutrient retention technologies.",
    },
    {
      id: "strategic-partnerships",
      title: "Strategic partnerships and distribution",
      icon: Handshake,
      description:
        "Collaborating with growers, institutions, and distributors to scale viable farm innovations.",
    },
  ],
  closing: {
    tag: "CONNECTING PRODUCTS & GROWERS",
    text: "Whether you need dependable agricultural inputs or want to take an innovative product to market, Farm Health Innovations is built to connect products with the people and businesses who need them.",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact",
  },
};

export const CORE_ADVANTAGES_CONTENT: CoreAdvantagesData = {
  eyebrow: "CORE ADVANTAGES",
  headingPrefix: "Why Choose ",
  headingHighlight: "Farm Health Innovations & NitroFIX",
  subtitle:
    "Our integrated technology stack delivers unprecedented root-zone precision and resource savings.",
  telemetryHub: {
    tag: "ACTIVE BIO-MATRIX TELEMETRY",
    systemId: "SYS // 2026.4",
    metricLabel: "Validated Performance Impact",
    metricValue: "95%",
    metricDescription:
      "Average Nitrogen & Moisture retention direct to active root rhizosphere.",
    microGauges: [
      { label: "Water Savings", value: "40% Less", sublabel: "Deep percolation cut" },
      { label: "Feedstock", value: "100% Circular", sublabel: "Orchard prunings" },
    ],
    assurance: "Verified by Multi-Season Regional Trials",
  },
  pillars: [
    {
      id: "precision-crop-health",
      number: "01",
      title: "Precision Crop Health",
      subtitle: "Active Rhizosphere Bio-Lock",
      description:
        "Continuous monitoring of soil moisture, root nutrient absorption, and foliar distress signals using synchronized IoT telemetry and biopolymer stabilization.",
      icon: Activity,
      badge: "Real-Time Telemetry",
      metric: "40%",
      metricLabel: "Water Demand Reduction",
    },
    {
      id: "circular-biomass",
      number: "02",
      title: "Circular Biomass Synthesis",
      subtitle: "100% Upcycled Agricultural Fiber",
      description:
        "We convert seasonal apple orchard branch prunings into high-expansion, biodegradable cationic hydrogels, eliminating burning and landfill disposal.",
      icon: Layers,
      badge: "Zero-Waste Pipeline",
      metric: "100%",
      metricLabel: "Renewable Feedstock",
    },
    {
      id: "live-field-intelligence",
      number: "03",
      title: "Live Field Intelligence",
      subtitle: "Data-Driven Agronomic Shield",
      description:
        "High-resolution GIS satellite monitoring paired with targeted slow-release nutrition prevents nutrient leaching and optimizes fertilizer efficiency.",
      icon: Radio,
      badge: "Proactive Risk Shield",
      metric: "95%",
      metricLabel: "Nitrogen Retention Rate",
    },
  ],
};

export const STANDARDS_CONTENT: StandardsData = {
  eyebrow: "OUR STANDARDS",
  heading: "Built on Evidence, Integrity, and Impact",
  standards: [
    {
      id: "scientific-rigor",
      number: "01",
      title: "Scientific Rigor",
      description:
        "Every formulation is validated through replicated multi-season field trials and soil lab telemetry.",
      icon: Award,
    },
    {
      id: "circular-sustainability",
      number: "02",
      title: "Circular Sustainability",
      description:
        "Upcycling regional farm waste into premium inputs to foster regenerative local economies.",
      icon: Sprout,
    },
    {
      id: "farmer-first-economics",
      number: "03",
      title: "Farmer-First Economics",
      description:
        "Lowering input costs for irrigation and chemical fertilizers while boosting overall crop quality.",
      icon: Globe2,
    },
  ],
};

export const ABOUT_PAGE_CONTENT = {
  hero: ABOUT_HERO_CONTENT,
  mission: ABOUT_MISSION_CONTENT,
  whatWeDo: WHAT_WE_DO_CONTENT,
  coreAdvantages: CORE_ADVANTAGES_CONTENT,
  standards: STANDARDS_CONTENT,
};

