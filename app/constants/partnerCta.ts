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
  eyebrow: "THE KASHMIR CHAMBER OF COMMERCE",
  heading: "Moving Kashmir's trade & industry forward.",
  description:
    "Connecting artisans, industrial estates, exporters, hospitality leaders, and enterprises across Jammu & Kashmir since 1924.",
  secondaryNote:
    "Interested in chamber membership, trade delegations, or regional partnerships? Let's connect.",
  ctaText: "Contact the Chamber",
  ctaHref: "/contact",
  secondaryCtaText: "Explore Industries",
  secondaryCtaHref: "/#key-sectors",
};
