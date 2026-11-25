export interface LatestNewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface LatestNewsData {
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  items: LatestNewsItem[];
}

export const LATEST_NEWS_CONTENT: LatestNewsData = {
  headingPrefix: "Latest ",
  headingHighlight: "News & Updates",
  description:
    "Recent chamber initiatives, meetings, and regional trade updates across Kashmir.",
  items: [
    {
      id: "kcci-esc-mou",
      category: "IT & Exports",
      date: "Press Release",
      title: "KCCI & ESC Sign MoU for IT Exports in J&K",
      summary:
        "Strategic partnership signed at SKICC, Srinagar to boost software exports and tech growth.",
      imageSrc: "/hero/img3.jpeg",
      imageAlt:
        "KCCI and Electronics and Computer Software Export Promotion Council MoU signing ceremony at SKICC Srinagar",
      href: "https://thekcci.in/index.php/pages/k2/information-technology",
    },
    {
      id: "kcci-egm-srinagar",
      category: "Governance",
      date: "Chamber Notice",
      title: "Extra Ordinary General Meeting Convenes",
      summary:
        "Trade delegates met in Srinagar to review regional policy priorities and trader welfare.",
      imageSrc: "/hero/img2.jpg",
      imageAlt:
        "The Kashmir Chamber of Commerce and Industry Extra Ordinary General Meeting in Srinagar",
      href: "https://thekcci.in/index.php/pages/k2/general-trade",
    },
    {
      id: "kashmir-handicrafts-push",
      category: "Handicrafts",
      date: "Trade Focus",
      title: "GI Protection & Global Reach for Artisans",
      summary:
        "Programs backing Pashmina and Sozni artisans through global craft fairs and buyer links.",
      imageSrc: "/sectors/kashmir-handicrafts.jpg",
      imageAlt: "Traditional Kashmiri floral Sozni and Aari embroidery craft",
      href: "https://thekcci.in/index.php/pages/k2/handicrafts",
    },
    {
      id: "kashmir-tourism-growth",
      category: "Tourism",
      date: "Sector Update",
      title: "Year-Round Sustainable Tourism Drive",
      summary:
        "Joint hospitality efforts expanding heritage tourism and seasonal jobs across the Valley.",
      imageSrc: "/sectors/kashmir-tourism.webp",
      imageAlt: "Dal Lake wooden houseboats and Shikara in Srinagar, Kashmir",
      href: "https://thekcci.in/index.php/pages/k2/tourism",
    },
  ],
};
