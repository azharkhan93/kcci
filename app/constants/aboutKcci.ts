import {
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  Handshake,
  Lightbulb,
  Scale,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface KcciPageHeroData {
  title: string;
  titleHighlight: string;
  description: string;
}

export interface KcciObjectiveItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: LucideIcon;
}

export interface KcciMandatePillarItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface KcciHistoryMilestone {
  id: string;
  year: string;
  eraTag: string;
  title: string;
  description: string;
}

export const KCCI_ABOUT_HERO_CONTENT: KcciPageHeroData = {
  title: "About ",
  titleHighlight: "KCCI",
  description:
    "Established in 1934 as Kashmir’s apex business association championing economic growth, enterprise, and policy advocacy.",
};

export const KCCI_OBJECTIVES_CONTENT = {
  eyebrow: "Our Objectives",
  headingPrefix: "Welcome to ",
  headingHighlight: "The Kashmir Chamber of Commerce & Industry (KCCI)",
  subtitle:
    "Established in the year 1934, KCCI is the apex business association representing the diverse sectors and interests of the business community in the region. We are dedicated to promoting economic growth, fostering entrepreneurship, and advocating for the development of a dynamic and sustainable business environment in Kashmir.",
  items: [
    {
      id: "representing-business-community",
      number: "01",
      title: "Representing the Business Community",
      summary:
        "Acting as the unified apex voice for traders, artisans, exporters, industrialists, and service providers across Kashmir.",
      icon: Users,
    },
    {
      id: "promoting-trade-investment",
      number: "02",
      title: "Promoting Trade and Investment",
      summary:
        "Connecting regional enterprises with domestic and international markets while attracting sustainable capital inflows.",
      icon: TrendingUp,
    },
    {
      id: "capacity-building-skill-development",
      number: "03",
      title: "Capacity Building and Skill Development",
      summary:
        "Equipping entrepreneurs and workforce talent with modern operational practices, trade literacy, and technical readiness.",
      icon: GraduationCap,
    },
    {
      id: "networking-collaboration",
      number: "04",
      title: "Networking and Collaboration",
      summary:
        "Fostering partnerships between local enterprises, national trade councils, export bodies, and global business chambers.",
      icon: Handshake,
    },
    {
      id: "advocating-policy-reforms",
      number: "05",
      title: "Advocating Policy Reforms",
      summary:
        "Engaging policymakers through constructive dialogue to remove regulatory bottlenecks and improve ease of doing business.",
      icon: Scale,
    },
    {
      id: "supporting-entrepreneurship-innovation",
      number: "06",
      title: "Supporting Entrepreneurship and Innovation",
      summary:
        "Empowering startups, traditional craft innovators, and tech founders across emerging sectors in Jammu & Kashmir.",
      icon: Lightbulb,
    },
    {
      id: "business-services-support",
      number: "07",
      title: "Business Services and Support",
      summary:
        "Providing trade facilitation, advisory guidance, and institutional support for smooth regional commerce operations.",
      icon: Briefcase,
    },
  ] as KcciObjectiveItem[],
};

export const KCCI_MANDATE_PILLARS_CONTENT = {
  eyebrow: "Institutional Mandate",
  headingPrefix: "Bridging Policy, Industry & ",
  headingHighlight: "Global Markets",
  subtitle:
    "Focused advocacy, legislative guidance, and cost-effective trade promotion supporting Kashmir’s enterprise ecosystem.",
  pillars: [
    {
      id: "encourage-legislation",
      number: "01",
      tag: "Policy & Regulation",
      title: "Encourage Legislation in Businesses",
      description:
        "Legislation in an area will impact heavily on a business and how it operates. A business can face many costs due to legislation, making informed industry representation vital.",
      icon: Scale,
    },
    {
      id: "bridge-government-business",
      number: "02",
      tag: "Institutional Liaison",
      title: "Bridge the Gap between Government & Businesses",
      description:
        "We bring deep expertise and institutional capabilities leveraged to support Government and industry clients—understanding policy priorities and interacting effectively between government and enterprise.",
      icon: Building2,
    },
    {
      id: "promote-trade-commerce",
      number: "03",
      tag: "Domestic & Global Reach",
      title: "To Promote Trade, Commerce & Industries",
      description:
        "To promote external and domestic trade in a cost-effective manner by organizing and participating in international trade fairs in India and abroad.",
      icon: Globe,
    },
  ] as KcciMandatePillarItem[],
};

export const KCCI_HISTORY_HERO_CONTENT: KcciPageHeroData = {
  title: "Our ",
  titleHighlight: "History",
  description:
    "Constituted in 1924 and formally sanctioned in 1935 — over nine decades representing Kashmir’s trade and industry.",
};

export const KCCI_HISTORY_TIMELINE_CONTENT = {
  eyebrow: "Centenary Chronicle",
  headingPrefix: "Heritage & Institutional ",
  headingHighlight: "Milestones",
  subtitle:
    "Key foundational eras that shaped Kashmir’s premier chamber of commerce from 1924 to today.",
  charterImageSrc: "/hero/autum1.webp",
  charterImageAlt: "Kashmir autumn Chinar heritage representing KCCI legacy since 1924",
  charterQuote:
    "The Kashmir Chamber of Commerce and Industry has been constituted in the year 1924 by the prominent businessmen of Kashmir and its memorandum and articles of association has been sanctioned by his Highness Government in the year 1935.",
  milestones: [
    {
      id: "milestone-1924",
      year: "1924",
      eraTag: "Foundation",
      title: "Constituted by Prominent Businessmen of Kashmir",
      description:
        "Visionary merchants, craft exporters, and enterprise leaders laid the foundation of KCCI to create a collective platform safeguarding regional trade and industry.",
    },
    {
      id: "milestone-1934",
      year: "1934",
      eraTag: "Establishment",
      title: "Established as Kashmir’s Apex Business Association",
      description:
        "Formalized as the premier representative institution uniting diverse sectors—from handicrafts and horticulture to general commerce—under a shared economic mandate.",
    },
    {
      id: "milestone-1935",
      year: "1935",
      eraTag: "Royal Sanction",
      title: "Memorandum & Articles Sanctioned by His Highness Government",
      description:
        "Received formal constitutional sanction in 1935, cementing the Chamber’s institutional standing as the authoritative bridge between government and Kashmir’s business community.",
    },
    {
      id: "milestone-present",
      year: "91st AGM",
      eraTag: "2025–27 Continuity",
      title: "Modern Global Trade, MoUs & Regional Stewardship",
      description:
        "Guided by its elected 21-member Executive Committee and Office Bearers, KCCI continues championing GI crafts, IT export councils, tourism, and industrial growth across J&K.",
    },
  ] as KcciHistoryMilestone[],
};

export interface KcciGalleryItem {
  id: string;
  title: string;
  category: "Events & MoUs" | "Governance" | "Heritage" | "Crafts & Tourism";
  caption: string;
  imageSrc: string;
  imageAlt: string;
}

export const KCCI_GALLERY_HERO_CONTENT: KcciPageHeroData = {
  title: "Our ",
  titleHighlight: "Gallery",
  description:
    "Visual archive of Chamber summits, strategic MoUs, Kashmiri craftsmanship, and regional enterprise.",
};

export const KCCI_SUMMITS_GALLERY_CONTENT = {
  heading: "Trade Summits & Governance",
  description:
    "Key bilateral MoUs, export council meetings, and chamber executive assemblies advancing Kashmir’s regional commerce.",
  items: [
    {
      id: "gallery-esc-mou",
      title: "KCCI & ESC MoU Signing Ceremony",
      category: "Events & MoUs",
      caption:
        "Memorandum of Understanding signed at SKICC, Srinagar to boost software and IT exports.",
      imageSrc: "/hero/img3.jpeg",
      imageAlt: "KCCI and ESC MoU signing ceremony at SKICC Srinagar",
    },
    {
      id: "gallery-egm",
      title: "Extra Ordinary General Meeting",
      category: "Governance",
      caption:
        "Office bearers and chamber members deliberating policy, trade welfare, and regional priorities.",
      imageSrc: "/hero/img2.jpg",
      imageAlt: "The Kashmir Chamber of Commerce and Industry Extra Ordinary General Meeting",
    },
    {
      id: "gallery-leadership-assembly",
      title: "Chamber Leadership & Policy Conclave",
      category: "Governance",
      caption:
        "Leadership deliberations on cross-sector industrial priorities and state economic representation.",
      imageSrc: "/hero/img1.jpg",
      imageAlt: "KCCI leadership assembly and trade policy session",
    },
  ] as KcciGalleryItem[],
};

export const KCCI_HERITAGE_GALLERY_CONTENT = {
  heading: "Artisan Heritage & Landscapes",
  description:
    "Centuries of GI-protected needlework, historic houseboats on Dal Lake, and timeless autumn Chinar foliage.",
  items: [
    {
      id: "gallery-handicrafts",
      title: "Aari & Sozni Craft Heritage",
      category: "Crafts & Tourism",
      caption:
        "Intricate floral needlework representing Kashmir’s GI-protected artisan communities.",
      imageSrc: "/sectors/kashmir-handicrafts.jpg",
      imageAlt: "Traditional Kashmiri floral Aari embroidery textile",
    },
    {
      id: "gallery-dal-houseboats",
      title: "Dal Lake Heritage Hospitality",
      category: "Crafts & Tourism",
      caption:
        "Carved wooden houseboats and Shikaras anchoring Srinagar’s four-season tourism economy.",
      imageSrc: "/hero/img5.webp",
      imageAlt: "Dal Lake wooden houseboats and Shikara in Srinagar",
    },
    {
      id: "gallery-autumn-canal",
      title: "Autumn Chinar Waterfront",
      category: "Heritage",
      caption:
        "Golden-crimson Harud foliage framing historic waterways across the Kashmir Valley.",
      imageSrc: "/hero/autum1.webp",
      imageAlt: "Shikara cruising beneath autumn Chinar trees in Kashmir",
    },
    {
      id: "gallery-mughal-waterfall",
      title: "Mughal Garden Autumn Canopy",
      category: "Heritage",
      caption:
        "Terraced stonework and vibrant Chinar foliage reflecting Kashmir’s cultural heritage.",
      imageSrc: "/hero/img6.jpg",
      imageAlt: "Autumn waterfall in Kashmiri Mughal garden framed by Chinar leaves",
    },
    {
      id: "gallery-kashmir-tourism",
      title: "Kashmir Valley Scenic Horizons",
      category: "Crafts & Tourism",
      caption:
        "Lush mountain meadows and pristine alpine valleys attracting global travellers.",
      imageSrc: "/sectors/kashmir-tourism.webp",
      imageAlt: "Pristine Kashmiri valley and mountain vistas",
    },
  ] as KcciGalleryItem[],
};
