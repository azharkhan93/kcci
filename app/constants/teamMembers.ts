export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  division: string;
  category: "Faculty & PIs" | "Postdoctoral & PhD" | "Technical Staff";
  specialization: string;
  qualification: string;
  email: string;
  imageSrc: string;
  researchFocus?: string[];
}

export const LAB_TEAM_MEMBERS: LeadershipMember[] = [
  {
    id: "prof-farooq-lone",
    name: "Prof. (Dr.) Farooq Ahmad Lone",
    role: "Head & Professor",
    division: "Division of Soil Science & Agricultural Chemistry",
    category: "Faculty & PIs",
    specialization: "Soil Fertility, Mineral Nutrition & Heavy Metal Dynamics",
    qualification: "Ph.D. Soil Chemistry, Post-Doc",
    email: "headsoilscience@skuastkashmir.ac.in",
    imageSrc: "/faculty/prof_farooq.jpg",
    researchFocus: ["Micronutrient Dynamics", "Orchard Soil Chemistry", "Heavy Metal Remediation"],
  },
  {
    id: "dr-gis-pi",
    name: "Dr. In-Charge GIS & RS Unit",
    role: "Senior Soil Scientist & Principal Investigator",
    division: "GIS, Drone & Precision Agronomy Laboratory",
    category: "Faculty & PIs",
    specialization: "UAV Multispectral Phenotyping, In-Situ Sensor Networks & GIS",
    qualification: "Ph.D. Agronomy & Precision Agriculture",
    email: "soiltesting@skuastkashmir.ac.in",
    imageSrc: "/faculty/dr_gis_pi.jpg",
    researchFocus: ["Drone Multispectral Imaging", "Digital Soil Health Mapping", "IoT Soil Moisture"],
  },
  {
    id: "dr-analytical-coord",
    name: "Dr. Analytical Laboratory Coordinator",
    role: "Senior Scientific Officer",
    division: "ICP-OES & Elemental Analysis Facility",
    category: "Faculty & PIs",
    specialization: "Spectrophotometry, Micronutrient Extraction & Water Diagnostics",
    qualification: "Ph.D. Agricultural Chemistry",
    email: "wateranalysis@skuastkashmir.ac.in",
    imageSrc: "/faculty/dr_analytical_coord.jpg",
    researchFocus: ["ICP-OES Diagnostics", "Water Quality Indices", "Soil CEC Dynamics"],
  },
  {
    id: "dr-soil-microbiologist",
    name: "Dr. Soil Microbiology Specialist",
    role: "Assistant Professor & Scientist",
    division: "Soil Biology & Bio-Fertilizer Laboratory",
    category: "Faculty & PIs",
    specialization: "Rhizosphere Microbiome, Carbon Mineralization & Mycorrhizae",
    qualification: "Ph.D. Soil Microbiology",
    email: "soilbiology@skuastkashmir.ac.in",
    imageSrc: "/faculty/prof_farooq.jpg",
    researchFocus: ["Rhizosphere Ecology", "Bio-Organic Fertilizers", "Soil Health Biological Indices"],
  },
  {
    id: "phd-drap-lead",
    name: "Er. Doctoral Research Scholar (D-RAP Lead)",
    role: "Senior Research Fellow (Ph.D. Candidate)",
    division: "Automated Rainout Shelter Facility",
    category: "Postdoctoral & PhD",
    specialization: "Alfalfa Drought Stress Kinetics & Root Architecture",
    qualification: "M.Sc. Agronomy (Gold Medalist)",
    email: "drap.research@skuastkashmir.ac.in",
    imageSrc: "/faculty/dr_gis_pi.jpg",
    researchFocus: ["Automated Rainout Trials", "Minirhizotron Root Imaging", "Alfalfa Germplasms"],
  },
  {
    id: "phd-hyperspectral",
    name: "Scholar Hyperspectral Analyst",
    role: "Doctoral Researcher (Ph.D. Candidate)",
    division: "Remote Sensing & UAV Processing Wing",
    category: "Postdoctoral & PhD",
    specialization: "Red-Edge Vegetation Indices & Soil Proximal Reflectance",
    qualification: "M.Sc. Geoinformatics",
    email: "geoinformatics@skuastkashmir.ac.in",
    imageSrc: "/faculty/dr_analytical_coord.jpg",
    researchFocus: ["Hyperspectral Spectral Unmixing", "NDRE Stress Phenotyping", "Valley Soil Reflectance"],
  },
  {
    id: "tech-icp-analyst",
    name: "Senior Laboratory Analytical Officer",
    role: "Technical Laboratory Supervisor",
    division: "Central Instrumentation Facility",
    category: "Technical Staff",
    specialization: "LECO CN Combustion, Atomic Absorption & Auto-Analyzers",
    qualification: "B.Tech Agricultural Engineering",
    email: "labsupervision@skuastkashmir.ac.in",
    imageSrc: "/faculty/prof_farooq.jpg",
    researchFocus: ["Quality Assurance Protocols", "Sample Batch Accessioning", "ISO Method Standardizations"],
  },
  {
    id: "tech-field-operator",
    name: "Precision UAV Pilot & Field Surveyor",
    role: "Drone Operations & Field Coordinator",
    division: "Precision Farming & Field Experimental Station",
    category: "Technical Staff",
    specialization: "RTK-GNSS Ground Control, Flight Mission Planning & Orthomosaics",
    qualification: "DGCA Certified Remote Pilot",
    email: "uavflight@skuastkashmir.ac.in",
    imageSrc: "/faculty/dr_gis_pi.jpg",
    researchFocus: ["RTK-GPS Field Georeferencing", "Thermal Mission Planning", "High-Altitude Flight Operations"],
  },
];
