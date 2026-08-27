import {
  Trees,
  Flower2,
  Sprout,
  Sparkles,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  metricLabel: string;
  metricValue: string;
  rating: number;
  icon: LucideIcon;
  cropTag: string;
}

export const TESTIMONIALS_HEADER = {
  titlePart1: "Trusted by Agri-Innovators & ",
  titlePart2: "Modern Farmers",
  subtitle:
    "Discover how orchardists, saffron cultivators, and progressive growers leverage Farm2i intelligence to maximize yield, protect crops, and optimize farm management.",
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Adil Mir",
    role: "Apple Farmer",
    location: "Shopian, Kashmir",
    quote:
      "The satellite monitoring feature has been a game-changer for our apple orchards. We've improved our fruit quality and yield by 35% using the advanced monitoring systems. The app has revolutionized how we manage our orchards.",
    metricLabel: "Quality & Yield",
    metricValue: "+35%",
    rating: 5,
    icon: Trees,
    cropTag: "Apple Orchards",
  },
  {
    id: "testimonial-2",
    name: "Mehbooba Qayoom",
    role: "Saffron Cultivator",
    location: "Pampore, Kashmir",
    quote:
      "Farm2i's soil testing feature gave us detailed insights into our saffron fields that we never had before. The on-demand recommendations helped us adjust nutrients at the right time, and we saw improvement in our yield this season.",
    metricLabel: "Nutrient Optimization",
    metricValue: "Targeted NPK",
    rating: 5,
    icon: Flower2,
    cropTag: "Saffron Cultivation",
  },
  {
    id: "testimonial-3",
    name: "Bashir Ahmad Dar",
    role: "Walnut Farmer",
    location: "Anantnag, Kashmir",
    quote:
      "The leaf testing feature detected early signs of disease in our walnut trees before it spread. With the on-demand recommendations, we knew exactly what to apply and when. It has completely changed how we protect our orchards.",
    metricLabel: "Foliar Health",
    metricValue: "Early Defense",
    rating: 5,
    icon: Sprout,
    cropTag: "Walnut Orchards",
  },
  {
    id: "testimonial-4",
    name: "Tariq Ahmad Wani",
    role: "High-Density Cherry Grower",
    location: "Baramulla, Kashmir",
    quote:
      "The hyperlocal weather radar and frost alerts helped us protect our cherry blossoms during critical spring cold snaps. Farm2i's timely notifications saved our entire season's harvest.",
    metricLabel: "Bloom Protection",
    metricValue: "100% Crop Saved",
    rating: 5,
    icon: Sparkles,
    cropTag: "Cherry Orchards",
  },
  {
    id: "testimonial-5",
    name: "Dr. Shabir Ahmad Malik",
    role: "Progressive Farm Consultant",
    location: "Pulwama, Kashmir",
    quote:
      "The visual data insights and real-time IoT soil sensors provide actionable intelligence right on our smartphones. We optimized our micro-irrigation schedules and reduced input waste significantly.",
    metricLabel: "Water & Input Savings",
    metricValue: "38% Saved",
    rating: 5,
    icon: Cpu,
    cropTag: "Smart Farm IoT",
  },
];
