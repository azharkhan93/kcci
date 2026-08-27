import { Layers, Sparkles, Mail, type LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  icon: LucideIcon;
  links: FooterLink[];
}

export const FOOTER_BRAND = {
  name: "Farm2i",
  kicker: "Precision Agriculture & GIS",
  description:
    "Empowering farmers, researchers, and enterprises with high-resolution satellite field monitoring, IoT soil telemetry, and data-driven agricultural intelligence.",
  statusText: "Farm2i Cloud & Sensors Active",
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Solutions & Features",
    icon: Layers,
    links: [
      { label: "High-Res Satellite Imagery", href: "/#features" },
      { label: "Satellite Field Monitoring", href: "/#features" },
      { label: "Soil & Leaf Testing", href: "/#features" },
      { label: "Smart Sensor Integration", href: "/#features" },
      { label: "App Screenshot Gallery", href: "/#app-gallery" },
    ],
  },
  {
    title: "Platform & Company",
    icon: Sparkles,
    links: [
      { label: "Why Choose Farm2i", href: "/#why-choose-us" },
      { label: "Leadership Team", href: "/#team" },
      { label: "Client Testimonials", href: "/#testimonials" },
      { label: "Download Mobile App", href: "/#cta-section" },
      { label: "Contact & Helpdesk", href: "/contact" },
    ],
  },
];

export const FOOTER_CONTACT = {
  title: "Contact & Inquiries",
  icon: Mail,
  address: "4/3 S. D Colony Batamaloo, Srinagar, J&K-190006",
  emails: [
    "support@farm2i.com",
    "farm2isolutions@gmail.com",
    "admin@farmhealth.in",
  ],
  phones: [
    { label: "+91 94038 90112", href: "tel:+919403890112" },
    { label: "+91 9758083252", href: "tel:+919758083252" },
  ],
  hours: "Mon – Sat: 9:00 AM – 5:30 PM IST",
  ctaText: "Request Inquiries",
  ctaHref: "/contact",
};
