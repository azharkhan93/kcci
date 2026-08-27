import {
  Satellite,
  Activity,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  Icon: LucideIcon;
  features?: string[];
}

export const APP_GALLERY_HEADER = {
  titlePart1: "App Screenshot ",
  titlePart2: "Gallery",
  subtitle:
    "Take a closer look at farm2i's intuitive interface and powerful features in action.",
};

export const APP_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "high-res-satellite-imagery",
    title: "High-Resolution Satellite Imagery",
    description:
      "Monitor your fields from above with regularly updated satellite imagery. Track crop health, identify problem areas, and plan interventions with precision.",
    imageSrc: "/research/drone-spatial.jpg",
    Icon: Satellite,
    features: [
      "NDVI vegetation analysis",
      "Crop stress detection",
      "Field boundary mapping",
    ],
  },
  {
    id: "satellite-mapping-monitoring",
    title: "Satellite Mapping & Monitoring",
    description:
      "Access high-resolution satellite imagery of your fields updated regularly. Track vegetation health, monitor field boundaries, and plan interventions with precision mapping.",
    imageSrc: "/research/prediction-modeling.jpg",
    Icon: Activity,
    features: [
      "NDVI vegetation analysis",
      "Field boundary mapping",
      "Multi-spectral imaging",
      "Historical imagery comparison",
    ],
  },
  {
    id: "soil-leaf-testing",
    title: "Soil & Leaf Testing",
    description:
      "Request professional soil and leaf testing directly from the app. Our team collects samples, analyses them in the lab, and delivers on-demand recommendations tailored to your crop and field conditions.",
    imageSrc: "/research/soil-sensing.jpg",
    Icon: FlaskConical,
    features: [
      "Raise a test request in-app",
      "Professional sample collection",
      "Detailed lab analysis reports",
      "On-demand expert recommendations",
    ],
  },
];
