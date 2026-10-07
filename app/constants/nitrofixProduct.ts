import {
  Droplets,
  FlaskConical,
  Sprout,
  ShieldCheck,
  Layers,
  Recycle,
  Sparkles,
  Award,
  Users,
  Building2,
  Store,
  Truck,
  GraduationCap,
  Handshake,
  Workflow,
  Trees,
  Carrot,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

// ── 04. NitroFIX Hero & Overview Types ──
export interface NitrofixOverviewData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}


// ── Why NitroFIX Types ──
export interface WhyNitrofixItem {
  id: string;
  text: string;
  icon: LucideIcon;
}

export interface NitrofixWhyData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  items: WhyNitrofixItem[];
  bigIdeaTitle: string;
  bigIdeaText: string;
}

// ── 05. How Nitrofix Works Types ──
export interface HowItWorksPillar {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
}

export interface HowItWorksData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  paragraphs: string[];
  pillars: HowItWorksPillar[];
}

// ── 06. Sustainability Types ──
export interface SustainabilityData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  paragraphs: string[];
  chips: string[];
  cycleSteps: { step: string; title: string; desc: string }[];
}

// ── 07. What's Next Types ──
export interface WhatsNextHorizon {
  phase: string;
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
}

export interface WhatsNextData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  paragraphs: string[];
  horizons: WhatsNextHorizon[];
}

// ── 08. Who We Serve Types ──
export interface StakeholderGroup {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface WhoWeServeData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  groups: StakeholderGroup[];
}

// ── 09. Applications Types ──
export interface ApplicationDomain {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
}

export interface ApplicationsData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  domains: ApplicationDomain[];
  validationNotice: string;
}

// ── Complete Static Content Export ──
export const NITROFIX_OVERVIEW_CONTENT: NitrofixOverviewData = {
  eyebrow: "04 — NITROFIX",
  headingPrefix: "NitroFIX™ ",
  headingHighlight: "Sustainable Soil & Moisture Matrix",
  subtitle:
    "An innovative hydrogel-based agricultural solution engineered to support root-zone water retention and controlled nitrogen availability using upcycled orchard biomass.",
  ctaLabel: "Inquire About NitroFIX",
  ctaHref: "/contact?subject=NitroFIX%20Inquiry",
};


export const NITROFIX_WHY_CONTENT: NitrofixWhyData = {
  eyebrow: "WHY NITROFIX",
  headingPrefix: "Why ",
  headingHighlight: "NitroFIX",
  subtitle: "A smarter approach to managing water and nutrients around the crop.",
  items: [
    {
      id: "water-retention",
      text: "Helps support water retention",
      icon: Droplets,
    },
    {
      id: "nitrogen-control",
      text: "Designed for controlled nitrogen availability",
      icon: FlaskConical,
    },
    {
      id: "renewable-biomass",
      text: "Built around a renewable agricultural biomass resource",
      icon: Sprout,
    },
    {
      id: "resource-efficient",
      text: "Created with resource-efficient farming in mind",
      icon: Recycle,
    },
    {
      id: "nutrient-approach",
      text: "A new approach to managing water and nutrients around the crop",
      icon: ShieldCheck,
    },
  ],
  bigIdeaTitle: "One product. A bigger idea.",
  bigIdeaText:
    "NitroFIX is more than a single product concept. It is the starting point for a broader approach to smarter nutrient management — one that can evolve with crop needs, market needs and agricultural innovation.",
};

export const NITROFIX_HOW_IT_WORKS_CONTENT: HowItWorksData = {
  eyebrow: "05 — HOW NITROFIX WORKS",
  headingPrefix: "Simple idea. ",
  headingHighlight: "Smart material.",
  paragraphs: [
    "NitroFIX uses a specially engineered hydrogel system designed to hold water while supporting controlled nitrogen availability.",
    "The concept also gives apple orchard pruning biomass a new purpose by bringing it into an innovative agricultural product pathway.",
  ],
  pillars: [
    {
      number: "01",
      title: "Engineered Hydrogel System",
      description:
        "Designed to absorb and hold water directly in the root rhizosphere, buffering crops against dry spells and irregular irrigation.",
      icon: Droplets,
      badge: "Water Retention",
    },
    {
      number: "02",
      title: "Controlled Nitrogen Availability",
      description:
        "Stabilizes nitrogen compounds around the root zone, delivering steady nutrient access and reducing wash-away losses.",
      icon: FlaskConical,
      badge: "Nutrient Control",
    },
    {
      number: "03",
      title: "Upcycled Biomass Pathway",
      description:
        "Transforms seasonal apple orchard pruning residues into functional, value-added agricultural input materials.",
      icon: Sprout,
      badge: "Circular Material",
    },
  ],
};

export const NITROFIX_SUSTAINABILITY_CONTENT: SustainabilityData = {
  eyebrow: "06 — SUSTAINABILITY",
  headingPrefix: "From orchard waste ",
  headingHighlight: "to farm value.",
  paragraphs: [
    "Every season, orchards generate pruning biomass. We see an opportunity where others may see waste.",
    "NitroFIX explores a circular route for apple pruning biomass — transforming an agricultural residue into a useful material for an agricultural input. It is one step toward making better use of what agriculture already produces.",
  ],
  chips: [
    "100% Upcycled Pruning Biomass",
    "Circular Agro-Material Route",
    "Zero Agricultural Burning",
    "Soil-Safe Organic Origin",
  ],
  cycleSteps: [
    {
      step: "01",
      title: "Seasonal Orchard Prunings",
      desc: "Collecting branches and wood residues generated annually across regional orchards.",
    },
    {
      step: "02",
      title: "Circular Biopolymer Processing",
      desc: "Transforming raw lignocellulosic fiber into a high-capacity hydrogel matrix.",
    },
    {
      step: "03",
      title: "Return to the Root Zone",
      desc: "Applying value-added inputs back into agricultural soils to retain water and nutrients.",
    },
  ],
};

export const NITROFIX_WHATS_NEXT_CONTENT: WhatsNextData = {
  eyebrow: "07 — WHAT'S NEXT",
  headingPrefix: "One platform. ",
  headingHighlight: "More possibilities.",
  paragraphs: [
    "NitroFIX is our current product and the first step in a wider product-development journey.",
    "As the platform evolves, we see opportunities to explore additional nutrient-focused formulations and agricultural applications designed for different crop and market needs.",
    "New products will be introduced as they move from development to market.",
  ],
  horizons: [
    {
      phase: "CURRENT FLAGSHIP",
      title: "NitroFIX™ Hydrogel Matrix",
      description:
        "Active soil hydrogel supporting water retention and nitrogen stabilization from circular biomass.",
      status: "In Market",
      icon: Sprout,
    },
    {
      phase: "FORMULATION R&D",
      title: "Nutrient-Focused Formulations",
      description:
        "Targeted multi-element blends engineered for specialized macro and micronutrient uptake profiles.",
      status: "In Development",
      icon: Sparkles,
    },
    {
      phase: "APPLICATION EXPANSION",
      title: "Crop-Specific Delivery Systems",
      description:
        "Tailored matrices designed for protected cultivation, commercial horticulture, and field crops.",
      status: "Pipeline",
      icon: Workflow,
    },
  ],
};

export const NITROFIX_WHO_WE_SERVE_CONTENT: WhoWeServeData = {
  eyebrow: "08 — WHO WE SERVE",
  headingPrefix: "Built for the people ",
  headingHighlight: "moving agriculture forward.",
  groups: [
    {
      id: "farmers-growers",
      title: "Farmers and growers",
      icon: Users,
    },
    {
      id: "orchard-horticulture",
      title: "Orchard and horticulture businesses",
      icon: Trees,
    },
    {
      id: "agri-input-dealers",
      title: "Agri-input dealers",
      icon: Store,
    },
    {
      id: "fertilizer-distributors",
      title: "Fertilizer and agrochemical distributors",
      icon: Truck,
    },
    {
      id: "agricultural-enterprises",
      title: "Agricultural enterprises",
      icon: Building2,
    },
    {
      id: "research-partners",
      title: "Research and technology partners",
      icon: GraduationCap,
    },
    {
      id: "strategic-partners",
      title: "Strategic business partners",
      icon: Handshake,
    },
  ],
};

export const NITROFIX_APPLICATIONS_CONTENT: ApplicationsData = {
  eyebrow: "09 — APPLICATIONS",
  headingPrefix: "Made with ",
  headingHighlight: "real agricultural needs in mind.",
  description:
    "NitroFIX is being developed for agricultural situations where water and nitrogen management matter. Potential application areas include horticulture, vegetables, nurseries, protected cultivation and other crop production systems, subject to crop-specific validation.",
  domains: [
    {
      id: "horticulture",
      title: "Horticulture & Orchards",
      tag: "High-Value Tree Crops",
      description:
        "Apple, pear, stone fruits, and walnut orchards where summer moisture stress and leaching affect yield and fruit size.",
      icon: Trees,
    },
    {
      id: "vegetables",
      title: "Vegetables & Open Field",
      tag: "Intensive Cultivation",
      description:
        "High-demand vegetable crops benefiting from uniform root moisture and continuous nitrogen availability.",
      icon: Carrot,
    },
    {
      id: "nurseries",
      title: "Nurseries & Propagation",
      tag: "Seedlings & Young Grafts",
      description:
        "Container and potting substrates where water retention reduces transplant shock and frequent watering cycles.",
      icon: Sprout,
    },
    {
      id: "protected-cultivation",
      title: "Protected Cultivation",
      tag: "Polyhouses & Shade Nets",
      description:
        "Controlled environment systems seeking higher nutrient efficiency and optimized irrigation regimes.",
      icon: Warehouse,
    },
  ],
  validationNotice:
    "Application recommendations and dosage parameters are subject to crop-specific validation and local soil conditions.",
};

