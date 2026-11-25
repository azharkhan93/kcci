import {
  Building2,
  Compass,
  Landmark,
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
    name: "The Kashmir Chamber of Commerce & Industry",
    description:
      "The Kashmir Chamber of Commerce and Industry has been constituted in the year 1924 by the prominent businessmen of Kashmir and its memorandum and articles of association has been sanctioned by his Highness Government in the year 1935.",
  },
  solutionsColumn: {
    title: "Industries & Areas",
    icon: Compass,
    links: [
      { label: "Kashmir Handicrafts", href: "/#key-sectors", badge: "GI Heritage" },
      { label: "Tourism & Hospitality", href: "/#key-sectors" },
      { label: "Information Technology", href: "/#key-sectors" },
      { label: "Agriculture & Ecology", href: "/#key-sectors" },
      { label: "General Trade & Industries", href: "/#key-sectors" },
    ],
  },
  companyColumn: {
    title: "Chamber Portal",
    icon: Landmark,
    links: [
      { label: "About the Chamber", href: "/about" },
      { label: "Latest News & Updates", href: "/#latest-news" },
      { label: "Member Voices", href: "/#testimonials" },
      { label: "Chamber Inquiries", href: "/contact" },
      { label: "Official Website", href: "https://thekcci.in/" },
    ],
  },
  contact: {
    title: "Chamber Secretariat",
    icon: Building2,
    address: "Mohidin Trust Building, Residency Road, Srinagar, India, 190001",
    emails: [
      {
        label: "thekashmirchamber@gmail.com",
        href: "mailto:thekashmirchamber@gmail.com",
      },
    ] as FooterLink[],
    phones: [
      { label: "+91 194 2452517", href: "tel:+911942452517" },
      { label: "+91 911943102168", href: "tel:+91911943102168" },
    ] as FooterLink[],
    hours: "Monday To Saturday - 10.00 - 07.00 · Sunday - Closed",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
