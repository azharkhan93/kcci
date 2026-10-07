export interface PartnerCtaData {
  eyebrow: string;
  heading: string;
  description: string;
  secondaryNote: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export const PARTNER_CTA_CONTENT: PartnerCtaData = {
  eyebrow: "PARTNER WITH US",
  heading: "Let's move agriculture forward.",
  description:
    "We partner with distributors, commercial growers, and research institutions to scale practical biopolymer soil innovations.",
  secondaryNote:
    "Interested in NitroFIX™ inputs or collaborative field trials? Let's talk.",
  ctaText: "Start a Conversation",
  ctaHref: "/contact",
  secondaryCtaText: "Explore NitroFIX™",
  secondaryCtaHref: "/#nitrofix-feature",
};
