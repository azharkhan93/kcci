import { Apple, Smartphone, type LucideIcon } from "lucide-react";

export interface CtaStatItem {
  value: string;
  label: string;
}

export interface CtaPlatformItem {
  name: string;
  store: string;
  Icon: LucideIcon;
  href: string;
}

export const CTA_HEADER_DEFAULT = {
  title: "Ready to Transform Your Farming?",
  subtitle:
    "Join thousands of growers using Farm2i to optimize yields and practice precision agriculture.",
  demoButtonText: "Request Demo",
  demoHref: "/contact",
};

export const CTA_STATS: readonly CtaStatItem[] = [
  { value: "1000+", label: "Active Users" },
  { value: "18+", label: "Regions" },
  { value: "99.4%", label: "Uptime" },
] as const;

export const CTA_PLATFORMS = {
  ios: {
    name: "iOS",
    store: "App Store",
    Icon: Apple,
    href: "#ios-download",
  },
  android: {
    name: "Android",
    store: "Google Play",
    Icon: Smartphone,
    href: "#android-download",
  },
} as const;

export type PlatformKey = keyof typeof CTA_PLATFORMS;
