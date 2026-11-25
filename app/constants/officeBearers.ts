export interface OfficeBearerMember {
  id: string;
  name: string;
  role: string;
  details: string;
  message: string;
  imageSrc: string;
  order: string;
}

export interface OfficeBearersData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  members: OfficeBearerMember[];
}

export const OFFICE_BEARERS_CONTENT: OfficeBearersData = {
  eyebrow: "Executive Governance · 2025–27 Term",
  headingPrefix: "Office Bearers & ",
  headingHighlight: "Executive Committee",
  subtitle:
    "Elected leadership representing Kashmir’s 21-member Executive Committee across trade, handicrafts, tourism, horticulture, and industry.",
  members: [
    {
      id: "javid-ahmad-tenga",
      name: "Javid Ahmad Tenga",
      role: "President",
      details: "Apex Chamber Leadership · 91st AGM",
      message:
        "Championing transparent policy dialogue, export growth, and resilient enterprise across Jammu & Kashmir.",
      imageSrc: "/office-bearers/president.jpg",
      order: "01",
    },
    {
      id: "umer-nazir-tibetbaqal",
      name: "Dr. Umer Nazir Tibetbaqal",
      role: "Senior Vice President",
      details: "Executive Committee · Trade Policy",
      message:
        "Strengthening collaboration between industry associations, financial institutions, and regional entrepreneurs.",
      imageSrc: "/office-bearers/sr-vice-president.jpg",
      order: "02",
    },
    {
      id: "farooq-amin",
      name: "Farooq Amin",
      role: "Junior Vice President",
      details: "Executive Committee · Sector Outreach",
      message:
        "Expanding member engagement across horticulture, tourism, hospitality, and emerging youth-led businesses.",
      imageSrc: "/office-bearers/jr-vice-president.jpg",
      order: "03",
    },
    {
      id: "faiz-ahmad-bakshi",
      name: "Faiz Ahmad Bakshi",
      role: "Secretary General",
      details: "Chamber Secretariat & Administration",
      message:
        "Coordinating executive resolutions, inter-state MoUs, and structured institutional representation for all sectors.",
      imageSrc: "/office-bearers/secretary-general.jpg",
      order: "04",
    },
    {
      id: "akib-chaya",
      name: "Akib Chaya",
      role: "Joint Secretary General",
      details: "Executive Committee · Member Coordination",
      message:
        "Supporting modern commerce initiatives, startup partnerships, and responsive trader redressal mechanisms.",
      imageSrc: "/office-bearers/joint-secretary.jpg",
      order: "05",
    },
    {
      id: "amir-manzoor-guna",
      name: "Amir Manzoor Guna",
      role: "Treasurer",
      details: "Finance & Chamber Governance",
      message:
        "Upholding fiscal stewardship and sustainable resource planning to support chamber programs and trade fairs.",
      imageSrc: "/office-bearers/treasurer.jpg",
      order: "06",
    },
  ],
};
