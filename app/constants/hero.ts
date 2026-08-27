import { Satellite, Microscope, CloudSun, BrainCircuit, type LucideIcon } from "lucide-react";

export interface HeroSlideData {
  id: string;
  titleLines: [string, string];
  shortDescription: string;
  tags: string[];
  primaryBtnText: string;
  primaryBtnHref: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  coordinates: string;
}

export interface ArcNodePosition {
  top: string;
  left: string;
  mobileLeft?: string;
  rotate: string;
}

export const ARC_NODES: ArcNodePosition[] = [
  { top: "82%", left: "95px", mobileLeft: "42px", rotate: "24deg" },
  { top: "61%", left: "148px", mobileLeft: "62px", rotate: "8deg" },
  { top: "39%", left: "148px", mobileLeft: "62px", rotate: "-8deg" },
  { top: "18%", left: "95px", mobileLeft: "42px", rotate: "-24deg" },
];

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: "satellite-mapping",
    titleLines: ["Satellite Mapping", "& Monitoring"],
    shortDescription:
      "Access high-resolution satellite imagery updated regularly to track vegetation health and plan precision interventions.",
    tags: ["NDVI Analysis", "Field Boundaries", "Multi-Spectral"],
    primaryBtnText: "Download App",
    primaryBtnHref: "#cta-section",
    imageSrc: "/research/drone-spatial.jpg",
    imageAlt: "Satellite Mapping and Field Boundary Analytics",
    icon: Satellite,
    coordinates: "34°08'45\"N 74°52'20\"E",
  },
  {
    id: "soil-intelligence",
    titleLines: ["Real-Time Soil", "& Nutrient Health"],
    shortDescription:
      "Measure in-situ NPK, pH, and soil moisture with sensor arrays to optimize fertilizer inputs and boost crop yields.",
    tags: ["NPK Diagnostics", "Moisture Sensing", "pH Profiling"],
    primaryBtnText: "Download App",
    primaryBtnHref: "#cta-section",
    imageSrc: "/research/soil-sensing.jpg",
    imageAlt: "Real-time Soil Diagnostics and Sensor Telemetry",
    icon: Microscope,
    coordinates: "34°09'12\"N 74°53'04\"E",
  },
  {
    id: "hyperlocal-weather",
    titleLines: ["Hyperlocal Weather", "& Climate Radar"],
    shortDescription:
      "Forecast microclimate shifts and irrigation needs with real-time telemetry to protect fields from drought and frost.",
    tags: ["Microclimate Radar", "Drought Prediction", "Irrigation AI"],
    primaryBtnText: "Download App",
    primaryBtnHref: "#cta-section",
    imageSrc: "/research/climate-resiliency.jpg",
    imageAlt: "Hyperlocal Weather Radar and Climate Simulation",
    icon: CloudSun,
    coordinates: "34°07'30\"N 74°51'10\"E",
  },
  {
    id: "farm-ai-analytics",
    titleLines: ["Predictive GeoAI", "& Yield Advisory"],
    shortDescription:
      "Transform aerial and ground data into actionable automated advisory to boost farm productivity and crop profit.",
    tags: ["Yield Forecasts", "Automated Advisory", "Historical Data"],
    primaryBtnText: "Download App",
    primaryBtnHref: "#cta-section",
    imageSrc: "/research/prediction-modeling.jpg",
    imageAlt: "Predictive Farm Intelligence and Yield Analytics",
    icon: BrainCircuit,
    coordinates: "34°06'15\"N 74°50'05\"E",
  },
];
