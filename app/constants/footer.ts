import {
  Cpu,
  Sparkles,
  Mail,
  type LucideIcon,
} from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterColumn {
  title: string;
  icon: LucideIcon;
  links: FooterLink[];
}

export const FOOTER_DATA = {
  brand: {
    name: "Farm Health Innovations",
    description:
      "Farm Health Innovations supplies high-performing crop inputs today while developing smarter, sustainable technologies for tomorrow — from trusted agrochemicals to circular biopolymer hydrogels.",
  },
  solutionsColumn: {
    title: "Technology & Products",
    icon: Cpu,
    links: [
      { label: "NitroFIX™ Biopolymer Matrix", href: "/nitrofix", badge: "Core" },
      { label: "Flagship Innovation Overview", href: "/#nitrofix-feature" },
      { label: "Water & Nutrient Efficiency", href: "/#nitrofix-benefits" },
      { label: "Circular Biomass Upcycling", href: "/#orchard-process" },
      { label: "Target Application Domains", href: "/nitrofix" },
    ],
  },
  companyColumn: {
    title: "Ecosystem & Platform",
    icon: Sparkles,
    links: [
      { label: "About Us & Vision", href: "/about" },
      { label: "Core Agricultural Advantages", href: "/about" },
      { label: "Verified Quality Standards", href: "/about" },
      { label: "Enterprise & Partner Inquiry", href: "/contact" },
      { label: "Technical Support & Inquiries", href: "/contact" },
    ],
  },
  contact: {
    title: "Direct Inquiries & Headquarters",
    icon: Mail,
    address: "4/3 S. D Colony Batamaloo, Srinagar, J&K-190006",
    emails: [
      { label: "admin@farmhealth.in", href: "mailto:admin@farmhealth.in" },
      { label: "support@farm2i.com", href: "mailto:support@farm2i.com" },
    ],
    phones: [
      { label: "+91 94038 90112", href: "tel:+919403890112" },
      { label: "+91 9758083252", href: "tel:+919758083252" },
    ],
    hours: "Mon – Sat: 9:00 AM – 5:30 PM IST",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security & Compliance", href: "/terms" },
  ],
};
