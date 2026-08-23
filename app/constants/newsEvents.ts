export interface NewsArticle {
  id: string;
  title: string;
  category: "Research News" | "Field Trials" | "Publications" | "Lab Milestones";
  summary: string;
  date: string;
  readTime: string;
  author: string;
  imageSrc: string;
  tags: string[];
  featured?: boolean;
}

export interface LabEvent {
  id: string;
  title: string;
  type: "Workshop & Training" | "Symposium" | "Farmer Outreach" | "Field Demonstration";
  date: string;
  dayMonth: { day: string; month: string };
  time: string;
  location: string;
  speaker: string;
  status: "Upcoming" | "Registration Open" | "Completed";
  description: string;
  registrationHref?: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "nature-paper-root-dynamics",
    title: "Breakthrough Study: In-Situ Root Water Uptake Kinetics Under Induced Heat Stress in Kashmir Apples",
    category: "Publications",
    summary: "Our research team published multi-year findings on deep root moisture extraction using automated minirhizotrons and IoT tensiometers, identifying critical thermal threshold points.",
    date: "August 18, 2026",
    readTime: "5 min read",
    author: "Division Research Wing",
    imageSrc: "/research/climate-resiliency.jpg",
    tags: ["Root Architecture", "Climate Resilience", "Apple Orchards"],
    featured: true,
  },
  {
    id: "drone-uav-valley-survey",
    title: "Division Deploys Hexacopter Fleet for Sub-Centimeter Nutrient Mapping Across 5,000 Hectares",
    category: "Field Trials",
    summary: "High-throughput aerial multispectral sensors mapped nitrogen and potassium spatial variability across North Kashmir fruit belts, enabling variable-rate prescription maps.",
    date: "August 12, 2026",
    readTime: "4 min read",
    author: "Dr. In-Charge GIS & RS Unit",
    imageSrc: "/research/drone-spatial.jpg",
    tags: ["UAV Imaging", "GIS Mapping", "Precision Nitrogen"],
    featured: false,
  },
  {
    id: "icp-oes-accreditation",
    title: "Central Instrumentation Facility Achieves NABL Quality Standard for Sub-PPM Trace Elemental Profiling",
    category: "Lab Milestones",
    summary: "The laboratory's ICP-OES and LECO CN combustion suites completed formal ISO/IEC accreditation for 24-parameter soil, heavy metal, and plant tissue analytical services.",
    date: "July 29, 2026",
    readTime: "3 min read",
    author: "Analytical Lab Coordinator",
    imageSrc: "/research/soil-sensing.jpg",
    tags: ["ICP-OES", "NABL Standard", "Heavy Metals"],
    featured: false,
  },
  {
    id: "smart-tensiometer-network",
    title: "Autonomous Drip-Irrigation Sensor Mesh Shows 34% Water Savings in High-Density Orchards",
    category: "Research News",
    summary: "Longitudinal trials under automated rainout shelters demonstrate that automated soil matric potential triggers significantly reduce water usage while boosting fruit caliber.",
    date: "July 15, 2026",
    readTime: "4 min read",
    author: "Precision Hydrology Group",
    imageSrc: "/research/water-management.jpg",
    tags: ["IoT Sensors", "Water Efficiency", "Precision Drip"],
    featured: false,
  },
  {
    id: "icar-grant-sanction",
    title: "ICAR Sanctions ₹1.8 Crore Collaborative Research Project for AI-Driven Digital Soil Health Twins",
    category: "Lab Milestones",
    summary: "National funding secured to train multimodal spatial models integrating satellite SAR telemetry, drone multispectral feeds, and laboratory benchtop spectral signatures.",
    date: "June 30, 2026",
    readTime: "3 min read",
    author: "Prof. (Dr.) Farooq Ahmad Lone",
    imageSrc: "/research/prediction-modeling.jpg",
    tags: ["ICAR Grant", "Digital Twin", "Multimodal AI"],
    featured: false,
  },
  {
    id: "drap-shelter-launch",
    title: "Motorized D-RAP Rainout Facility Initiates Alfalfa Cold & Moisture Deprivation Experiment",
    category: "Field Trials",
    summary: "Standardized rainout exclusion trials commence to evaluate drought tolerance and nodulation vigor in cold-arid germplasms under controlled exclusion shelters.",
    date: "June 14, 2026",
    readTime: "4 min read",
    author: "Doctoral Research Lead",
    imageSrc: "/research/drap-shelter.jpg",
    tags: ["Rainout Shelter", "D-RAP Trials", "Agronomy"],
    featured: false,
  },
];

export const LAB_EVENTS: LabEvent[] = [
  {
    id: "gis-uav-workshop-2026",
    title: "3-Day Hands-on Training: Drone Remote Sensing & GIS in Precision Agriculture",
    type: "Workshop & Training",
    date: "September 15-17, 2026",
    dayMonth: { day: "15", month: "SEP" },
    time: "10:00 AM - 4:30 PM IST",
    location: "GIS Computational Lab & Shalimar Research Farm",
    speaker: "Dr. In-Charge GIS Unit & DGCA Certified Pilots",
    status: "Registration Open",
    description: "Intensive training for postgraduate students and field agronomists covering flight planning, RTK GNSS georeferencing, and multispectral index generation.",
    registrationHref: "/contact",
  },
  {
    id: "farmer-soil-health-camp",
    title: "District Soil & Water Health Diagnostic Camp for Valley Orchardists",
    type: "Farmer Outreach",
    date: "September 24, 2026",
    dayMonth: { day: "24", month: "SEP" },
    time: "09:30 AM - 3:00 PM IST",
    location: "Central Soil Testing Lab, Faculty of Horticulture",
    speaker: "Division Analytical Officers & Soil Chemists",
    status: "Upcoming",
    description: "On-the-spot SMP buffer pH testing, quick electrical conductivity screening, and personalized fertilizer dosage card issuance for local growers.",
    registrationHref: "/contact",
  },
  {
    id: "himalayan-agtech-symposium",
    title: "National Symposium on Digital Twins & Remote Sensing in Mountain Agriculture",
    type: "Symposium",
    date: "October 08-09, 2026",
    dayMonth: { day: "08", month: "OCT" },
    time: "09:00 AM - 5:30 PM IST",
    location: "Main University Auditorium, SKUAST-K Shalimar",
    speaker: "Eminent Scientists from ICAR, IARI & SKUAST-K",
    status: "Upcoming",
    description: "Keynote addresses, technical paper sessions, and industry demonstrations on climate resilience, satellite remote sensing, and soil microbiome diagnostics.",
    registrationHref: "/contact",
  },
];
