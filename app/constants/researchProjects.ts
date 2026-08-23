export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFinding {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  imageSrc: string;
  summary: string;
  overview: string;
  objectives: string[];
  keyFindings: ProjectFinding[];
  metrics: ProjectMetric[];
  equipment: string[];
  leadTeam: string[];
  fundingAgency: string;
  leadInvestigator: string;
  location: string;
  duration: string;
  status: "Active" | "Ongoing" | "Completed";
  tags: string[];
  href?: string;
  linkText?: string;
}

export const RESEARCH_PROJECTS_DATA: ProjectItem[] = [
  {
    id: "drap",
    title: "Drought Resilient Alfalfa Production (D-RAP)",
    year: "2024",
    category: "Climate Resilience",
    imageSrc: "/research/drap-shelter.jpg",
    summary:
      "Investigating physiological responses, root architecture adaptations, and water-use efficiency of alfalfa cultivars under automated rainout shelter drought conditions.",
    overview:
      "The D-RAP project investigates the physiological, biochemical, and morphological mechanisms enabling perennial alfalfa (Medicago sativa L.) cultivars to thrive under severe moisture-deficit conditions in temperate climatic zones. Utilizing automated, motorized rainout shelters coupled with continuous in-situ root-zone profiling, the research evaluates drought recovery kinetics, biomass accumulation, and crude protein persistence across controlled soil moisture gradients.",
    objectives: [
      "Quantify root architecture depth and density distributions under progressive terminal moisture stress.",
      "Evaluate non-destructive spectral vegetation indices (NDVI, NDRE) for rapid drought-stress phenotyping.",
      "Determine physiological stomatal conductance and water-use efficiency (WUE) under variable deficit regimes.",
      "Develop actionable agronomic management protocols for high-altitude drought-vulnerable forage growers.",
    ],
    keyFindings: [
      {
        title: "Drought-Adapted Cultivar Selection",
        description:
          "Identified two superior cold-and-drought resilient germplasms exhibiting 28% higher deep-root biomass and enhanced stomatal regulation during extended dry spells.",
      },
      {
        title: "Spectral Stress Delineation",
        description:
          "Calibrated red-edge spectral indices that detect cellular hydration deficits 4 to 6 days prior to visible canopy wilting symptoms.",
      },
      {
        title: "Biomass & Protein Retention",
        description:
          "Demonstrated that targeted pulse deficit irrigation maintains 91% of baseline crude protein content while reducing seasonal irrigation volume by 32%.",
      },
    ],
    metrics: [
      { label: "Water Savings", value: "32%" },
      { label: "Test Area", value: "4.5 Ha" },
      { label: "Cultivars Evaluated", value: "18 Lines" },
      { label: "Sensor Density", value: "64 Nodes" },
    ],
    equipment: [
      "Motorized Automated Rainout Shelters",
      "Decagon 5TE Moisture & Temperature Probes",
      "CID Bio-Science CI-600 Root Imager",
      "LI-6800 Portable Photosynthesis System",
    ],
    leadTeam: [
      "Dr. M. A. Bhat (Principal Agronomist)",
      "Dr. S. A. Wani (Soil Physics Specialist)",
      "Er. Z. A. Dar (Instrumentation Lead)",
    ],
    fundingAgency: "ICAR & SKUAST-K Kashmir Research Board",
    leadInvestigator: "Division of Soil Science & Agricultural Chemistry",
    location: "Main Experimental Farm, Shalimar Campus, Srinagar",
    duration: "2024 – 2026 (36 Months)",
    status: "Active",
    tags: ["Drought Tolerance", "Rainout Shelter", "Forage Agronomy", "Root Dynamics"],
    href: "/research-projects/drap",
  },
  {
    id: "precision-irrigation",
    title: "Precision Irrigation & In-Situ Moisture Sensor Networks",
    year: "2024",
    category: "Precision Water Management",
    imageSrc: "/research/water-management.jpg",
    summary:
      "Developing wireless LoRaWAN soil matric potential tensiometers and automated variable-rate drip irrigation delivery to maximize crop yield per drop.",
    overview:
      "This initiative deploys an industrial IoT network of wireless, solar-powered matric potential tensiometers and dielectric moisture probes across diverse horticultural orchard blocks. By coupling continuous soil telemetry with micro-climate evapotranspiration (ET0) stations, the system automatically triggers precision variable-rate drip cycles to maintain optimum root-zone water tension while eliminating percolation losses.",
    objectives: [
      "Design and deploy solar-powered multi-depth LoRaWAN soil tensiometer nodes operating autonomously in remote field plots.",
      "Develop closed-loop automated valve actuation algorithms calibrated against crop-specific matric potential thresholds.",
      "Evaluate nutrient fertigation efficiency and nitrate leaching reductions under precision pulse-drip schedules.",
      "Provide open cloud-telemetry dashboards for real-time grower access to soil hydration curves.",
    ],
    keyFindings: [
      {
        title: "Percolation Loss Mitigation",
        description:
          "Achieved a 41% reduction in seasonal water consumption compared to conventional timer-based flood and furrow systems.",
      },
      {
        title: "Nutrient Leaching Reduction",
        description:
          "Reduced sub-root nitrate leaching by 35% through micro-pulse fertigation synchrony.",
      },
      {
        title: "Autonomous Sensor Reliability",
        description:
          "Demonstrated 99.6% LoRaWAN packet delivery across a 6.8 km line-of-sight topographical basin.",
      },
    ],
    metrics: [
      { label: "Irrigation Reduction", value: "41%" },
      { label: "Telemetry Range", value: "6.8 km" },
      { label: "Battery Autonomy", value: "100% Solar" },
      { label: "Data Interval", value: "15 min" },
    ],
    equipment: [
      "LoRaWAN Soil Matric Tensiometers",
      "Campbell Scientific CR1000X Data Loggers",
      "Automated Solenoid Drip Actuators",
      "Vantage Pro2 Weather Station",
    ],
    leadTeam: [
      "Dr. F. A. Shah (Irrigation Engineer)",
      "Er. T. Ali (IoT & Wireless Systems)",
      "Dr. B. Hussain (Soil Fertility Lead)",
    ],
    fundingAgency: "Department of Agriculture & Water Resources",
    leadInvestigator: "Precision Agriculture & Soil Water Laboratory",
    location: "High-Density Apple Research Block, Shalimar",
    duration: "2024 – 2027 (48 Months)",
    status: "Active",
    tags: ["IoT Tensiometry", "Variable Rate Irrigation", "VWC Profiling", "Smart Drip"],
    href: "/research-projects/precision-irrigation",
  },
  {
    id: "uav-remote-sensing",
    title: "UAV Multispectral Remote Sensing for Spatial Yield Prediction",
    year: "2025",
    category: "Spatial & Temporal Estimates",
    imageSrc: "/research/drone-spatial.jpg",
    summary:
      "High-resolution multispectral and thermal drone imaging campaigns integrated with satellite data to compute NDVI, NDRE, and spatial nitrogen deficiency maps.",
    overview:
      "Combining low-altitude unmanned aerial vehicle (UAV) multispectral sensors with European Space Agency Sentinel-2 satellite constellations to create unified spatial-temporal crop diagnostic models. The project establishes machine learning pipelines that translate sub-decimeter surface reflectance into prescription fertilizer maps and preseason yield estimations.",
    objectives: [
      "Execute high-cadence aerial multispectral flights across critical vegetative and reproductive phenological stages.",
      "Derive robust non-destructive canopy nitrogen and chlorophyll indices validated by ground spectrophotometry.",
      "Calibrate radiative transfer models (PROSAIL) with empirical field canopy geometries.",
      "Generate sub-parcel variable-rate fertilizer recommendation layers for precision farm equipment.",
    ],
    keyFindings: [
      {
        title: "Nitrogen Diagnostic Precision",
        description:
          "Achieved an R² of 0.88 in predicting canopy nitrogen content using red-edge normalized difference vegetation index (NDRE).",
      },
      {
        title: "Spatial Yield Forecasting",
        description:
          "Pre-harvest yield estimation delivered with 94.2% accuracy 30 days ahead of mechanical harvest.",
      },
      {
        title: "Variable Rate Prescriptions",
        description:
          "Reduced synthetic nitrogen fertilizer usage by 24 kg N/ha without diminishing target biomass output.",
      },
    ],
    metrics: [
      { label: "Spatial Resolution", value: "2.4 cm/px" },
      { label: "Model Accuracy", value: "94.2%" },
      { label: "Spectral Bands", value: "5 Bands + Thermal" },
      { label: "Surveyed Area", value: "120+ Ha" },
    ],
    equipment: [
      "DJI Matrice 300 RTK Hexacopter",
      "MicaSense RedEdge-P Multispectral Sensor",
      "FLIR Vue Pro R Thermal Camera",
      "Trimble Catalyst RTK GNSS Ground Base",
    ],
    leadTeam: [
      "Dr. Z. A. Rather (Remote Sensing Lead)",
      "Er. S. Farooq (GIS Data Scientist)",
      "Dr. M. A. Wani (Agronomy Associate)",
    ],
    fundingAgency: "National GIS & Remote Sensing Initiative",
    leadInvestigator: "Remote Sensing & GIS Wing, SKUAST-K",
    location: "Regional Agricultural Research Basin, Kashmir Valley",
    duration: "2025 – 2026 (24 Months)",
    status: "Ongoing",
    tags: ["Drone Mapping", "Multispectral", "NDVI Indices", "Spatial GIS", "Yield Model"],
    href: "/research-projects/uav-remote-sensing",
  },
  {
    id: "proximal-sensing",
    title: "Proximal Soil Color & Optical Spectrometry Modeling",
    year: "2024",
    category: "Crop & Soil Proximal Sensing",
    imageSrc: "/research/soil-sensing.jpg",
    summary:
      "Rapid lab and in-field visible-near infrared (Vis-NIR) spectroscopy modeling for non-destructive soil organic carbon and cation exchange capacity estimation.",
    overview:
      "Developing chemometric calibrations for rapid optical soil property quantification using benchtop and portable diffuse reflectance Vis-NIR spectrometers (350–2500 nm). The project bypasses traditional hazardous chemical extraction workflows by predicting soil organic carbon (SOC), clay content, pH, and exchangeable cations in under 60 seconds per sample.",
    objectives: [
      "Build a localized spectral library covering major agro-ecological soil orders of Jammu & Kashmir.",
      "Develop partial least squares regression (PLSR) and random forest (RF) prediction algorithms for primary fertility attributes.",
      "Validate hand-held portable color spectrometers against standard Walkley-Black organic carbon assays.",
      "Establish an open spectral database for regional researchers and agricultural extension specialists.",
    ],
    keyFindings: [
      {
        title: "Rapid Organic Carbon Assay",
        description:
          "Demonstrated rapid Vis-NIR prediction of SOC with R² = 0.91 and Root Mean Square Error (RMSE) < 0.18%.",
      },
      {
        title: "Zero Chemical Waste",
        description:
          "Eliminated hazardous dichromate and acid reagent consumption for routine carbon screening.",
      },
      {
        title: "In-Situ Portability",
        description:
          "Achieved 87% diagnostic concordance between field-portable optical probes and benchtop laboratory spectrometers.",
      },
    ],
    metrics: [
      { label: "Assay Time", value: "< 60 sec" },
      { label: "Spectral Range", value: "350–2500 nm" },
      { label: "Carbon R²", value: "0.91" },
      { label: "Database Size", value: "1,400+ Spectra" },
    ],
    equipment: [
      "ASD FieldSpec 4 Hi-Res Spectroradiometer",
      "Nix Pro 2 Color Sensor Spectrophotometer",
      "Agilent Cary 630 FTIR Spectrometer",
      "Precision Ball Mill Soil Grinder",
    ],
    leadTeam: [
      "Dr. A. H. Lone (Soil Chemist)",
      "Dr. T. Ali (Spectroscopy Analyst)",
      "Dr. M. Khan (Laboratory Director)",
    ],
    fundingAgency: "Soil Chemistry Research Fund & NABL Division",
    leadInvestigator: "Division of Soil Science & Analytical Chemistry",
    location: "Central Soil Science Laboratory, Shalimar",
    duration: "2024 – 2025 (24 Months)",
    status: "Active",
    tags: ["Vis-NIR Spectroscopy", "Soil Organic Carbon", "Elemental Assay", "Chemometrics"],
    href: "/research-projects/proximal-sensing",
  },
  {
    id: "digital-twin-modeling",
    title: "Digital Twin 3D Hydrodynamic Moisture Flux in Kashmir Soils",
    year: "2025",
    category: "Prediction Modeling",
    imageSrc: "/research/prediction-modeling.jpg",
    summary:
      "3D finite element hydrodynamic modeling simulating root water extraction, capillary dynamics, and predictive drought forecasting under variable climatic scenarios.",
    overview:
      "Constructing a high-fidelity computational digital twin of orchard and cereal soil-plant-atmosphere continuums (SPAC). Utilizing 3D Richards equation numerical solvers and root uptake sink terms, the platform dynamically simulates unsaturated zone moisture fluxes, capillary rise from shallow water tables, and climate change scenario resilience.",
    objectives: [
      "Formulate 3D finite-element hydrological simulation meshes calibrated to local soil water retention curves (SWRC).",
      "Integrate live edge IoT telemetry feeds for real-time model state-updating and boundary condition assimilation.",
      "Forecast root-zone moisture deficit thresholds up to 14 days in advance under warming climate projections.",
      "Deploy an interactive web-based digital twin cockpit for research agronomists.",
    ],
    keyFindings: [
      {
        title: "Early Deficit Forecasting",
        description:
          "Accurately predicted critical root-zone wilting thresholds 10 days in advance of field sensor indications.",
      },
      {
        title: "Root Flux Resolution",
        description:
          "Resolved differential layer-specific water uptake across deep taproots versus shallow lateral fibrous root systems.",
      },
      {
        title: "Scenario Stress Testing",
        description:
          "Simulated heatwave shock events to evaluate protective irrigation pulse timing.",
      },
    ],
    metrics: [
      { label: "Forecast Horizon", value: "14 Days" },
      { label: "Simulation Res", value: "1 cm³ Grid" },
      { label: "Model Concordance", value: "96.1%" },
      { label: "Compute Platform", value: "Cloud HPC" },
    ],
    equipment: [
      "High-Performance Computational GPU Cluster",
      "HYDRUS-3D Hydrological Modeling Engine",
      "Decagon Meter Group HYPROP Water Retention System",
      "Real-Time Telemetry API Integration",
    ],
    leadTeam: [
      "Dr. G. A. Parrey (Computational Soil Scientist)",
      "Dr. N. A. Dar (Hydrology Modeling Specialist)",
      "Er. S. Farooq (Software Architect)",
    ],
    fundingAgency: "AI & Computational Agronomy Board",
    leadInvestigator: "Computational Soil Modeling Group, SKUAST-K",
    location: "Computational Agronomy Center, Srinagar",
    duration: "2025 – 2027 (36 Months)",
    status: "Ongoing",
    tags: ["Digital Twin", "3D Root Hydrology", "AI Forecasting", "Finite Element", "SPAC Model"],
    href: "/research-projects/digital-twin-modeling",
  },
];
