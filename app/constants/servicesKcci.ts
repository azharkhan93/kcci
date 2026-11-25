import {
  FileCheck,
  Globe2,
  FileText,
  Stamp,
  Award,
  Plane,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { KcciPageHeroData } from "./aboutKcci";

export interface ServiceFeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export const KCCI_SERVICES_HERO_CONTENT: KcciPageHeroData = {
  title: "Chamber ",
  titleHighlight: "Services",
  description:
    "Authoritative statutory attestations, Certificate of Origin issuance, and official Visa Recommendation Letters supporting Kashmir’s business community.",
};

export const KCCI_CERTIFICATES_HERO_CONTENT: KcciPageHeroData = {
  title: "Issuance of ",
  titleHighlight: "Certificates",
  description:
    "Statutory issuance of Non-Preferential Certificates of Origin and official attestation of commercial export invoices under Ministry of Commerce & Industry guidelines.",
};

export const CERTIFICATES_ISSUANCE_FEATURES: ServiceFeatureItem[] = [
  {
    id: "certificate-of-origin",
    number: "01",
    title: "Non-Preferential Certificate of Origin",
    description:
      "Designated agency authorized by the DGFT to issue official Non-Preferential Certificates of Origin for consignments exported from Jammu & Kashmir to global destinations.",
    icon: FileCheck,
    badge: "DGFT Authorized",
  },
  {
    id: "invoice-attestation",
    number: "02",
    title: "Commercial Invoice Attestation",
    description:
      "Authentication and official chamber seal verification of commercial invoices, packing lists, and export declarations required by international customs authorities.",
    icon: Stamp,
    badge: "Statutory Seal",
  },
  {
    id: "trade-documentation",
    number: "03",
    title: "Export Contract & Bill Attestation",
    description:
      "Verification and certified endorsement of international sales contracts, agency agreements, certificates of analysis, and transport documentation.",
    icon: FileText,
    badge: "Export Trade",
  },
  {
    id: "customs-compliance",
    number: "04",
    title: "GI Crafts & Consignment Verification",
    description:
      "Official verification and origin certification for Kashmir’s GI-protected handicrafts, hand-knotted silk carpets, Pashmina shawls, saffron, and dry fruits.",
    icon: Award,
    badge: "GI Origin",
  },
];

export const KCCI_RECOMMENDATION_LETTERS_HERO_CONTENT: KcciPageHeroData = {
  title: "Recommendation ",
  titleHighlight: "Letters",
  description:
    "Official chamber recommendation letters addressed to foreign embassies, high commissions, and consulates facilitating business visas for international trade.",
};

export const RECOMMENDATION_LETTERS_FEATURES: ServiceFeatureItem[] = [
  {
    id: "visa-recommendation-embassy",
    number: "01",
    title: "Embassy Visa Recommendation Letters",
    description:
      "Official chamber letters issued to foreign embassies and visa application centers vouching for bona fide members travelling abroad for trade negotiations and conferences.",
    icon: Plane,
    badge: "Visa Desk",
  },
  {
    id: "trade-delegation-credentials",
    number: "02",
    title: "Trade Delegation Endorsement",
    description:
      "Institutional credentials and official sponsorship letters for chamber business delegations participating in international buyer-seller meets and bilateral summits.",
    icon: Globe2,
    badge: "Global Delegations",
  },
  {
    id: "member-standing-verification",
    number: "03",
    title: "Good Standing & Chamber Verification",
    description:
      "Formal letters confirming active membership, financial standing, and commercial integrity of Kashmiri enterprises partnering with international corporate clients.",
    icon: ShieldCheck,
    badge: "Member Standing",
  },
  {
    id: "tender-consortium-support",
    number: "04",
    title: "Tender & Consortium Introduction",
    description:
      "Chamber letters of introduction and institutional backing for member enterprises bidding on national and international development tenders and joint ventures.",
    icon: Building2,
    badge: "Institutional",
  },
];

// Compatibility aliases
export const KCCI_TRADE_EXPORT_HERO_CONTENT = KCCI_CERTIFICATES_HERO_CONTENT;
export const TRADE_EXPORT_FEATURES = CERTIFICATES_ISSUANCE_FEATURES;
export const KCCI_BUSINESS_ADVISORY_HERO_CONTENT = KCCI_RECOMMENDATION_LETTERS_HERO_CONTENT;
export const BUSINESS_ADVISORY_FEATURES = RECOMMENDATION_LETTERS_FEATURES;
