import {
  Palette,
  Compass,
  Cpu,
  Sprout,
  Factory,
  type LucideIcon,
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  metricLabel: string;
  metricValue: string;
  rating: number;
  icon: LucideIcon;
  sectorTag: string;
}

export const TESTIMONIALS_HEADER = {
  titlePart1: "Member Voices & ",
  titlePart2: "Regional Impact",
  subtitle:
    "How Kashmir’s artisans, entrepreneurs, exporters, and growers build stronger global links through KCCI.",
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Tariq Ahmad Mir",
    role: "Pashmina & Craft Exporter",
    location: "Srinagar, Kashmir",
    quote:
      "Chamber trade delegations opened direct European buyer channels for our GI-certified Pashmina weavers while preserving traditional craftsmanship.",
    metricLabel: "Export Growth",
    metricValue: "+38%",
    rating: 5,
    icon: Palette,
    sectorTag: "Kashmir Handicrafts",
  },
  {
    id: "testimonial-2",
    name: "Farooq Ahmad Bhat",
    role: "Heritage Houseboat Proprietor",
    location: "Dal Lake, Srinagar",
    quote:
      "Coordinated seasonal tourism campaigns and hospitality dialogues have strengthened bookings and year-round employment for our local staff.",
    metricLabel: "Occupancy Lift",
    metricValue: "4-Season",
    rating: 5,
    icon: Compass,
    sectorTag: "Tourism",
  },
  {
    id: "testimonial-3",
    name: "Sanaullah Khan",
    role: "Software Studio Founder",
    location: "Rangreth IT Park, J&K",
    quote:
      "KCCI’s export council MoUs and policy advocacy helped young Kashmiri tech startups connect directly with national and global enterprise clients.",
    metricLabel: "Client Links",
    metricValue: "3x Reach",
    rating: 5,
    icon: Cpu,
    sectorTag: "Information Technology",
  },
  {
    id: "testimonial-4",
    name: "Mehbooba Qayoom",
    role: "Saffron & Horticulture Producer",
    location: "Pampore, Kashmir",
    quote:
      "Connecting farmers with agri-input innovators and cold-chain partners significantly reduced post-harvest loss across our saffron and orchard clusters.",
    metricLabel: "Yield Value",
    metricValue: "+32%",
    rating: 5,
    icon: Sprout,
    sectorTag: "Agriculture",
  },
  {
    id: "testimonial-5",
    name: "Bashir Ahmad Dar",
    role: "Agro-Processing Unit Director",
    location: "Lassipora Industrial Estate",
    quote:
      "Unified chamber representation streamlined infrastructure upgrades and power reliability for dozens of manufacturing units in our estate.",
    metricLabel: "Unit Output",
    metricValue: "51 Estates",
    rating: 5,
    icon: Factory,
    sectorTag: "Industries",
  },
];
