import {
  Palette,
  Compass,
  Cpu,
  GraduationCap,
  Globe,
  Sprout,
  Trees,
  Factory,
  type LucideIcon,
} from "lucide-react";

export interface KeySectorItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  bgImage?: string;
}

export interface KeySectorsData {
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  sectors: KeySectorItem[];
}

export const KEY_SECTORS_CONTENT: KeySectorsData = {
  headingPrefix: "Our ",
  headingHighlight: "Industries & Areas",
  subtitle:
    "Core sectors driving craftsmanship, agriculture, sustainable industry, trade, and regional growth across Kashmir.",
  sectors: [
    {
      id: "kashmir-handicrafts",
      number: "01",
      title: "Kashmir Handicrafts",
      description:
        "Our vision guided by our mandate is to preserve, develop and proliferate exquisite arts and crafts of Kashmir.",
      href: "https://thekcci.in/index.php/pages/k2/handicrafts",
      icon: Palette,
      bgImage: "/sectors/kashmir-handicrafts.jpg",
    },
    {
      id: "tourism",
      number: "02",
      title: "Tourism",
      description:
        "Tourism opens up a new window for resources, both investments and employment generation as well as socio-economic development.",
      href: "https://thekcci.in/index.php/pages/k2/tourism",
      icon: Compass,
      bgImage: "/sectors/kashmir-tourism.webp",
    },
    {
      id: "information-technology",
      number: "03",
      title: "Information Technology",
      description:
        "To facilitate planning, designing, implementing and managing a wide range of IT initiatives at department / organization levels, in J&K.",
      href: "https://thekcci.in/index.php/pages/k2/information-technology",
      icon: Cpu,
    },
    {
      id: "education",
      number: "04",
      title: "Education",
      description:
        "Improving education in Kashmir is essential for poverty reduction and empowering future generations across the Valley.",
      href: "https://thekcci.in/index.php/pages/k2/eduation",
      icon: GraduationCap,
    },
    {
      id: "general-trade",
      number: "05",
      title: "General Trade",
      description:
        "To serve as a reference point in the UT of Jammu and Kashmir for Indian Industry and the International Business Community.",
      href: "https://thekcci.in/index.php/pages/k2/general-trade",
      icon: Globe,
    },
    {
      id: "agriculture",
      number: "06",
      title: "Agriculture",
      description:
        "We aim to strengthen an enabling environment to enhance contribution of Horticulture, Agriculture, Sericulture and Floriculture.",
      href: "https://thekcci.in/index.php/pages/k2/agriculture",
      icon: Sprout,
    },
    {
      id: "environment-ecology",
      number: "07",
      title: "Environment & Ecology",
      description:
        "Our constitution obligates State as well as citizens to protect and improve the environment.",
      href: "https://thekcci.in/index.php/pages/k2/environment-ecology",
      icon: Trees,
    },
    {
      id: "industries",
      number: "08",
      title: "Industries",
      description:
        "Development of industrial infrastructure has been the focus of our attention, with 51 industrial estates and many more in progress.",
      href: "https://thekcci.in/index.php/pages/k2/industries",
      icon: Factory,
    },
  ],
};
