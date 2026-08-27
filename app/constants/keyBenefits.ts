import {
  BarChart3,
  Satellite,
  Cpu,
  FlaskConical,
  BellRing,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export interface KeyBenefitItem {
  id: string;
  category: string;
  kicker: string;
  title: string;
  description: string;
  btnText: string;
  btnHref: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  tags: string[];
}

export const KEY_BENEFITS_HEADER = {
  titlePart1: "Smarter Technology for ",
  titlePart2: "Modern Farmers",
  subtitle:
    "farm2i combines cutting-edge technology with agriculture expertise to provide solutions that make farming smarter, more efficient, and sustainable.",
};

export const KEY_BENEFITS_DATA: KeyBenefitItem[] = [
  {
    id: "visual-data-insights",
    category: "VISUAL DATA INSIGHTS",
    kicker: "REAL-TIME CROP INTELLIGENCE",
    title: "Visual Data Insights",
    description:
      "Access charts and heatmaps showing crop health, soil moisture levels, and growth predictions at a glance.",
    btnText: "EXPLORE INSIGHTS",
    btnHref: "/contact",
    imageSrc: "/research/prediction-modeling.jpg",
    imageAlt: "Visual crop data heatmaps and analytics",
    icon: BarChart3,
    tags: ["Heatmaps", "Moisture Curves", "Yield Forecast"],
  },
  {
    id: "satellite-monitoring",
    category: "SATELLITE MONITORING",
    kicker: "HIGH-RESOLUTION FIELD ORBIT",
    title: "Satellite Monitoring",
    description:
      "Track crop growth and farm conditions using high-resolution satellite imagery updated regularly.",
    btnText: "EXPLORE SATELLITE",
    btnHref: "/contact",
    imageSrc: "/research/drone-spatial.jpg",
    imageAlt: "High-resolution satellite farm monitoring",
    icon: Satellite,
    tags: ["NDVI Index", "Boundary Mapping", "Sentinel-2"],
  },
  {
    id: "smart-sensor-integration",
    category: "SMART SENSOR INTEGRATION",
    kicker: "IN-SITU IOT TELEMETRY",
    title: "Smart Sensor Integration",
    description:
      "Get real-time data from on-farm IoT sensors that monitor temperature, humidity, soil conditions, and more.",
    btnText: "EXPLORE SENSORS",
    btnHref: "/contact",
    imageSrc: "/research/soil-sensing.jpg",
    imageAlt: "IoT farm sensor telemetry integration",
    icon: Cpu,
    tags: ["NPK Telemetry", "Ambient Humidity", "Soil Moisture"],
  },
  {
    id: "soil-testing-services",
    category: "SOIL TESTING SERVICES",
    kicker: "PRECISION LAB DIAGNOSTICS",
    title: "Soil Testing Services",
    description:
      "Request soil sample pickup and receive comprehensive lab-tested insights delivered straight to your app.",
    btnText: "EXPLORE TESTING",
    btnHref: "/contact",
    imageSrc: "/research/drap-shelter.jpg",
    imageAlt: "Professional soil sample testing and pickup",
    icon: FlaskConical,
    tags: ["Doorstep Pickup", "Certified Lab", "App Reports"],
  },
  {
    id: "customized-alerts",
    category: "CUSTOMIZED ALERTS",
    kicker: "PROACTIVE SMART NOTIFICATIONS",
    title: "Customized Alerts",
    description:
      "Receive personalized notifications about weather changes, optimal harvest times, and potential issues.",
    btnText: "EXPLORE ALERTS",
    btnHref: "/contact",
    imageSrc: "/research/climate-resiliency.jpg",
    imageAlt: "Real-time weather and crop risk alerts",
    icon: BellRing,
    tags: ["Weather Warnings", "Harvest Timing", "Pest Risk"],
  },
  {
    id: "user-friendly-interface",
    category: "USER-FRIENDLY INTERFACE",
    kicker: "SEAMLESS FARM MANAGEMENT",
    title: "User-Friendly Interface",
    description:
      "Designed for everyone – from small family farmers to large agricultural enterprises, with no tech expertise needed.",
    btnText: "EXPLORE INTERFACE",
    btnHref: "/contact",
    imageSrc: "/research/water-management.jpg",
    imageAlt: "Simple and intuitive farm app dashboard",
    icon: LayoutDashboard,
    tags: ["Intuitive UI", "Multilingual", "Zero Learning Curve"],
  },
];
