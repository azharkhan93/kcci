export interface NavChildItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavChildItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", description: "Farm Health Innovations platform" },
  {
    label: "Products",
    href: "/nitrofix",
    description: "Proprietary inputs & innovations",
    children: [
      {
        label: "NitroFIX™",
        href: "/nitrofix",
        badge: "Flagship",
        description: "Circular biopolymer hydrogel & sustainable moisture matrix",
      },
    ],
  },
  { label: "About Us", href: "/about", description: "Who we are & our capabilities" },
  { label: "Contact", href: "/contact", description: "Inquiries, wholesale & partnership" },
];




export interface NavLink {
  label: string;
  href: string;
  iconName?:
    | "sprout"
    | "flask"
    | "wheat"
    | "droplet"
    | "leaf"
    | "sparkles"
    | "info"
    | "fileText"
    | "barChart"
    | "apple"
    | "flower"
    | "wrench";
}

export interface NavSection {
  title: string;
  links?: NavLink[];
  href?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  iconName: "sprout" | "flask" | "wheat" | "droplet" | "leaf" | "fileText";
}

export const BREADCRUMBS = [
  { label: "SKUAST-K Home", href: "#" },
  { label: "Faculty of Agriculture", href: "#" },
  { label: "Division of Soil Science", href: "#" },
  { label: "Soil Testing Laboratory", href: "#" },
];

export const TESTING_SERVICES_LINKS: NavLink[] = [
  { label: "Soil & Water Testing Intake", href: "/contact" },
  { label: "Drone / UAV & GIS Services", href: "/research-projects" },
  { label: "Precision Agronomy Trials", href: "/research-projects/drap" },
  { label: "Analytical Instrumentation", href: "/about" },
  { label: "Faculty & Soil Scientists", href: "/lab-members" },
  { label: "Research Bulletin & News", href: "/news-events" },
];

export const RESEARCH_LINKS: NavLink[] = [
  { label: "All Research Projects", href: "/research-projects" },
  { label: "D-RAP Drought Shelter Trial", href: "/research-projects/drap" },
  { label: "UAV Multispectral Mapping", href: "/research-projects/drone-sensors" },
  { label: "Laboratory Core Facilities", href: "/about" },
  { label: "Lab Members & Scholars", href: "/lab-members" },
  { label: "Helpdesk & Directions", href: "/contact" },
];


export const LAB_CONTACT_INFO = {
  title: "Farm Health Innovations Headquarters & Support",
  email: "admin@farmhealth.in",
  emails: [
    "admin@farmhealth.in",
    "support@farm2i.com",
  ],
  organization: "Farm Health Innovations",
  address: "4/3 S. D Colony Batamaloo, Srinagar, J&K-190006",
  addressLines: [
    "4/3 S. D Colony Batamaloo",
    "Srinagar, J&K-190006",
  ],
  phones: [
    "+91 94038 90112",
    "+91 9758083252",
  ],
  phone: "+91 94038 90112",
  hoursTitle: "Support Hours:",
  hours: "Mon – Sat: 9:00 AM – 5:30 PM IST",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "soil-analysis",
    title: "Soil Analysis",
    description:
      "Comprehensive soil health analysis at SKUAST-K Soil Testing Lab, testing for NPK, pH, organic carbon, micronutrients (Zn, Fe, Cu, Mn, B), and electrical conductivity.",
    linkText: "Learn about the soil tests",
    href: "/soil-analysis",
    iconName: "sprout",
  },
  {
    id: "lime-analysis",
    title: "Lime & Gypsum Analysis",
    description:
      "Analysis of agricultural lime and soil amendments for Kashmir orchards and agricultural fields to optimize soil pH and calcium availability.",
    linkText: "Learn about the lime test",
    href: "/lime-analysis",
    iconName: "flask",
  },
  {
    id: "plant-forage-grain",
    title: "Plant, Forage, & Grain Analysis",
    description:
      "Diagnostic tissue and grain analysis for apple orchards, saffron fields, rice, and forage crops to assess nutrient deficiencies.",
    linkText: "Learn about plant & forage tests",
    href: "/plant-forage-grain",
    iconName: "wheat",
  },
  {
    id: "water-analysis",
    title: "Irrigation & Water Analysis",
    description:
      "Testing of irrigation water suitability, stream runoff, and agricultural water safety across Kashmir valley farming regions.",
    linkText: "Learn about water testing",
    href: "/water-analysis",
    iconName: "droplet",
  },
];

export const SOIL_TESTING_LAB_CONTENT = {
  title: "Soil Testing Lab",
  paragraphs: [
    "The Division of Soil Science & Agricultural Chemistry at SKUAST-Kashmir (Shalimar Campus, Srinagar) provides high quality soil, plant, tissue, and water analysis for farmers, orchardists, researchers, and agricultural officers across Jammu & Kashmir.",
  ],
  cta: {
    title: "Know which tests you want to order?",
    subtitle: "Download the sample submission forms for each test and submit your samples today.",
    buttons: [
      { label: "Get the Forms", href: "/forms" },
      { label: "Pay Online", href: "/pay" },
    ],
  },
};

export const SOIL_ANALYSIS_CONTENT = {
  title: "Soil Analysis",
  paragraphs: [
    "Many different analyses for soil samples are conducted at the SKUAST-K Soil Testing Lab. The most common analyses requested include tests for pH, phosphorus (P), potassium (K), nitrate (NO₃), and organic matter.",
    "Soil samples are received at the Division of Soil Science building (Main Drive from Shalimar Road gate), processed in specialized ovens, ground, and analyzed. Test reports are emailed directly to farmers and researchers.",
  ],
  cta: {
    title: "Know which tests you want to order?",
    subtitle: "Download the forms for each test and submit your samples today.",
    buttons: [
      { label: "Get the Forms", href: "/forms" },
      { label: "Pay Online", href: "/pay" },
    ],
  },
  quickLinks: [
    { label: "For farmers & orchardists", href: "#" },
    { label: "For researchers & students", href: "#" },
  ],
};

export const SOIL_ANALYSIS_PAGE_CONTENT = {
  title: "Soil Analysis",
  paragraphs: [
    "Many different analyses for soil samples are conducted at the SKUAST-K Soil Testing Lab. The most common analyses requested include tests for pH, phosphorus (P), potassium (K), nitrate (NO\u2083), and organic matter. However, other analyses are performed on a daily basis including: calcium (Ca), magnesium (Mg), sodium (Na), cation exchange capacity (CEC), iron (Fe), zinc (Zn), copper (Cu), manganese (Mn), ammonium (NH\u2084), sulfate (SO\u2084), chloride (Cl), aluminum (Al), texture, soluble salts, and salt alkali.",
    "Soil samples are transferred to sterile, labeled containers and dried in a forced-air oven (unless analysis prohibits immediate oven drying). Once dry, they are ground with a pulverizing-type grinder and analyzed. When the data is complete and has been reviewed, sample data is emailed to the researcher or producer. Samples are kept on storage shelves for a time so samples may be available for additional analysis at the producer\u2019s request or may be returned upon request.",
  ],
  cta: {
    title: "Know which tests you want to order?",
    subtitle: "Download the forms for each test and submit your samples today.",
    buttons: [
      { label: "Get the Forms", href: "/forms" },
      { label: "Pay Online", href: "/pay" },
    ],
  },
  quickLinks: [
    { label: "For farmers \u0026 orchardists", href: "#" },
    { label: "For researchers \u0026 students", href: "#" },
  ],
};

export const SOIL_ANALYSIS_PRODUCERS_CONTENT = {
  title: "Soil Analysis for Producers & Homeowners",
  paragraphs: [
    "Samples that come into the lab are dried in an oven overnight and ground with a pulverizing-type grinder the next morning. The bulk of analysis will be completed after grinding or the following day. Once the data is complete and has been reviewed, sample information sheets are emailed to the producer or researcher.",
    "Samples are kept on storage shelves for a time so samples may be available for additional analysis by request.",
  ],
};

export const SOIL_SAMPLE_COLLECTION_CONTENT = {
  title: "Soil Sample Collection",
  intro:
    "Sample collection will vary depending on the tests being conducted and the type of soil being collected. Please label all samples and completely fill out the sample information sheets so lab analysis and processing can occur efficiently.",
  tipsHeading: "Before you get started, please read these tips for a successful soil sample collection:",
  tips: [
    "On long term reduced till or no-till fields, a split sample from the top 6 inches (i.e. 0 to 3 inches and 3 to 6 inches) is encouraged to assess pH and nutrient stratification near the surface.",
    "All row crops should be sampled to 6 inch depth and all permanent sod to 4 inches.",
    "For available nitrogen, chloride, or sulfur tests, please gather a sample of soil from 24 inches.",
    "For the zinc test, collect soil samples in a plastic container to avoid contamination from galvanized buckets or material made of rubber.",
    "Avoid sampling in old fence rows, dead furrows, low spots, feeding areas, and other areas that might give unusual results.",
    "Do not use heat for drying.",
  ],
  equipmentHeading: "You will need:",
  equipment: [
    "Auger or spade",
    "Clean pail",
    "Sampling tube",
    "Soil Sample Information Sheet",
    "Soil sample containers",
  ],
};

export interface StepItem {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export const SOIL_SAMPLE_STEPS: StepItem[] = [
  {
    step: 1,
    title: "Field Grid",
    description: "Map the area and divide fields into uniform zones with similar soil texture, color, slope, and crop history.",
    iconName: "map",
  },
  {
    step: 2,
    title: "Sample Depth",
    description: "Take 20–30 cores per zone, mix thoroughly in a clean container, then fill the sample container from this mixture.",
    iconName: "layers",
  },
  {
    step: 3,
    title: "Label Samples",
    description: "Label each container clearly with a Sample ID and record each ID on the information sheet.",
    iconName: "tag",
  },
  {
    step: 4,
    title: "Air Dry Samples",
    description: "Air dry samples immediately — especially for nitrogen tests or samples being shipped to the lab.",
    iconName: "wind",
  },
];

export interface SoilTest {
  name: string;
  description: string;
  iconName?: string;
  price?: string;
  priceNum?: number;
  turnaroundTime?: string;
  sampleRequired?: string;
  category?: string;
}

export const SOIL_AVAILABLE_TESTS: SoilTest[] = [
  {
    name: "Routine Fertility",
    description: "Tests pH, lime requirement, phosphorus, and potassium. Recommended for most fields.",
    iconName: "sprout",
    price: "₹250",
    priceNum: 250,
    turnaroundTime: "2-3 Days",
    sampleRequired: "500g Dry Soil",
    category: "Soil Analysis",
  },
  {
    name: "Profile Nitrogen",
    description: "Measures residual nitrates to 24-inch depth. Samples must be air dried within 24 hours.",
    iconName: "flask",
    price: "₹180",
    priceNum: 180,
    turnaroundTime: "1-2 Days",
    sampleRequired: "500g Soil (Air Dried)",
    category: "Soil Analysis",
  },
  {
    name: "Available Zinc",
    description: "For high-yield corn/soybean on eroded or sandy, low-organic soils.",
    iconName: "zap",
    price: "₹200",
    priceNum: 200,
    turnaroundTime: "2-3 Days",
    sampleRequired: "250g Soil",
    category: "Soil Analysis",
  },
  {
    name: "Available Iron",
    description: "Assesses iron chlorosis risk on calcareous soils for sorghum, soybeans, and corn.",
    iconName: "atom",
    price: "₹200",
    priceNum: 200,
    turnaroundTime: "2-3 Days",
    sampleRequired: "250g Soil",
    category: "Soil Analysis",
  },
  {
    name: "KCl Extractable Aluminum",
    description: "Detects toxic aluminum in extremely acidic soils (pH ≤ 5) where lime is unavailable.",
    iconName: "alert-triangle",
    price: "₹300",
    priceNum: 300,
    turnaroundTime: "3-4 Days",
    sampleRequired: "250g Soil",
    category: "Soil Analysis",
  },
  {
    name: "Profile Sulfate-Sulfur",
    description: "Tests sulfur availability to 24 inches on low-organic, sandy soils.",
    iconName: "cloud",
    price: "₹220",
    priceNum: 220,
    turnaroundTime: "2-3 Days",
    sampleRequired: "500g Soil",
    category: "Soil Analysis",
  },
  {
    name: "Profile Chlorides",
    description: "24-inch depth sampling. Primarily recommended for wheat chloride response.",
    iconName: "droplets",
    price: "₹200",
    priceNum: 200,
    turnaroundTime: "2-3 Days",
    sampleRequired: "500g Soil",
    category: "Soil Analysis",
  },
  {
    name: "Organic Matter",
    description: "Quantifies nitrogen, sulfur, and micronutrient reserves. Useful for herbicide rate decisions.",
    iconName: "leaf",
    price: "₹150",
    priceNum: 150,
    turnaroundTime: "1-2 Days",
    sampleRequired: "250g Soil",
    category: "Soil Analysis",
  },
];

export const SOIL_RESEARCHERS_CONTENT = {
  intro: {
    title: "Soil Analysis for Researchers",
    paragraphs: [
      "Researchers come to the Soil Testing Lab for in-depth analysis tailored to their needs. Samples are transferred to sterile containers, dried in a forced-air oven, ground with a pulverizing grinder, and analyzed. Results are emailed upon completion; samples may be returned upon request.",
    ],
  },
  preparation: {
    title: "Soil Preparation",
    description:
      "Soil is dried overnight at 60°C, then ground to pass a 2mm sieve. Iron samples are air-dried to prevent inflated values. Nitrogen samples are dried immediately to halt bacterial conversion.",
  },
  collection: {
    title: "Soil Sample Collection",
    description:
      "Sample collection varies by experiment. Label all samples and fill out information sheets completely to ensure efficient lab processing.",
  },
  forms: {
    title: "Forms",
    groups: [
      {
        label: "For State of Kashmir / SKUAST-K Research:",
        links: [
          { label: "Scooped Soil Sample Information & Order Sheet (PDF)", href: "/forms/scooped-state.pdf" },
          { label: "Weighed Soil Sample Information & Order Sheet (PDF)", href: "/forms/weighed-state.pdf" },
        ],
      },
      {
        label: "For External Research Agencies:",
        links: [
          { label: "Scooped Soil Sample Information & Order Sheet (PDF)", href: "/forms/scooped-external.pdf" },
          { label: "Weighed Soil Sample Information & Order Sheet (PDF)", href: "/forms/weighed-external.pdf" },
        ],
      },
    ],
  },
};

export const RESEARCHER_AVAILABLE_TESTS: SoilTest[] = [
  { name: "pH & Buffer pH", description: "Measured in 1:1 soil-water slurry. Buffer pH via SMP technique.", iconName: "flask", price: "₹100", priceNum: 100, turnaroundTime: "1 Day", sampleRequired: "2g Soil", category: "Research Soil" },
  { name: "Melich III Phosphorus", description: "Universal extractant for multi-element analysis on 2g prepared soil.", iconName: "flask", price: "₹200", priceNum: 200, turnaroundTime: "2-3 Days", sampleRequired: "2g Soil", category: "Research Soil" },
  { name: "Bray Phosphorus", description: "HCl-ammonium fluoride extractant for plant-available P with colorimetric assay.", iconName: "flask", price: "₹180", priceNum: 180, turnaroundTime: "2 Days", sampleRequired: "2g Soil", category: "Research Soil" },
  { name: "Olsen Phosphorus", description: "Recommended for calcareous soils (pH > 7.5). Sodium bicarbonate extractant.", iconName: "flask", price: "₹200", priceNum: 200, turnaroundTime: "2 Days", sampleRequired: "2g Soil", category: "Research Soil" },
  { name: "Exchangeable Cations (Ca, Mg, K, Na)", description: "Extracted with 1M ammonium acetate, analyzed by Flame AAS or ICP.", iconName: "atom", price: "₹350", priceNum: 350, turnaroundTime: "3 Days", sampleRequired: "2g Soil", category: "Research Soil" },
  { name: "Cation Exchange Capacity (CEC)", description: "Displacement method with saturating ammonium acetate; NH₄⁺ colorimetric.", iconName: "atom", price: "₹400", priceNum: 400, turnaroundTime: "3-4 Days", sampleRequired: "2g Soil", category: "Research Soil" },
  { name: "DTPA Micronutrients (Cu, Fe, Mn, Zn)", description: "DTPA chelate extraction analyzed by Flame AAS or ICP.", iconName: "zap", price: "₹450", priceNum: 450, turnaroundTime: "3-4 Days", sampleRequired: "10g Soil", category: "Research Soil" },
  { name: "Nitrogen (NH₄⁺ & NO₃⁻)", description: "1M KCl extraction, cadmium reduction for nitrate, flow analyzer colorimetric.", iconName: "flask", price: "₹250", priceNum: 250, turnaroundTime: "2 Days", sampleRequired: "2g Soil", category: "Research Soil" },
  { name: "Soluble Salts", description: "Conductivity of saturated paste extract (mmhos/cm).", iconName: "droplets", price: "₹150", priceNum: 150, turnaroundTime: "1-2 Days", sampleRequired: "50g Soil", category: "Research Soil" },
  { name: "Salt Alkali", description: "Full saline/sodic analysis: soluble salts, sodium levels, pH, Na risk classification.", iconName: "alert-triangle", price: "₹350", priceNum: 350, turnaroundTime: "2-3 Days", sampleRequired: "50g Soil", category: "Research Soil" },
  { name: "Texture (Hydrometer Method)", description: "Sand, silt, and clay estimated by hydrometer with dispersant.", iconName: "layers", price: "₹300", priceNum: 300, turnaroundTime: "3 Days", sampleRequired: "50g Soil", category: "Research Soil" },
  { name: "Chloride", description: "Calcium nitrate extraction from 10g soil; Mercury Thiocyanate colorimetric method.", iconName: "droplets", price: "₹200", priceNum: 200, turnaroundTime: "2 Days", sampleRequired: "10g Soil", category: "Research Soil" },
  { name: "Sulfate", description: "Monocalcium phosphate extraction, turbidimetric flow analyzer.", iconName: "cloud", price: "₹220", priceNum: 220, turnaroundTime: "2-3 Days", sampleRequired: "10g Soil", category: "Research Soil" },
  { name: "Aluminum", description: "1M KCl extraction, ICP spectrometry. Recommended for pH ≤ 5.5.", iconName: "alert-triangle", price: "₹300", priceNum: 300, turnaroundTime: "3 Days", sampleRequired: "5g Soil", category: "Research Soil" },
  { name: "Total Carbon & Nitrogen (LECO)", description: "LECO TruSpec CN combustion analyzer for total C and N (% by weight).", iconName: "atom", price: "₹500", priceNum: 500, turnaroundTime: "4-5 Days", sampleRequired: "0.35g Soil", category: "Research Soil" },
  { name: "Organic Matter (Loss on Ignition)", description: "1g soil dried at 150°C/2hr, ignited at 400°C/3hr per modified NCR-221 method.", iconName: "leaf", price: "₹150", priceNum: 150, turnaroundTime: "1-2 Days", sampleRequired: "1g Soil", category: "Research Soil" },
];

// Aliases for compatibility
export const HOME_INTRO = SOIL_TESTING_LAB_CONTENT.paragraphs[0];
export const HOME_CTA = SOIL_TESTING_LAB_CONTENT.cta;

// ── Generic reusable content block type ───────────────────
export interface ContentSection {
  title: string;
  iconName?: string;
  badge?: string;
  paragraphs: string[];
  downloadLabel?: string;
  downloadHref?: string;
}

export const LIME_ANALYSIS_CONTENT: {
  intro: ContentSection;
  availableTesting: ContentSection;
  sampleCollection: ContentSection;
} = {
  intro: {
    title: "Lime Analysis",
    iconName: "mountain",
    badge: "Agricultural Lime",
    paragraphs: [
      "Agricultural lime analysis is commonly conducted for producers and lime quarries. Samples are oven dried before analysis, which can cause analytical time to vary depending on moisture content.",
      "Reported data includes the results of the chemical and mechanical analysis: fineness factor, calcium carbonate equivalent, effective calcium carbonate, weight on 8-mesh sieve, weight on 60-mesh sieve, and weight through 60-mesh sieve.",
    ],
  },
  availableTesting: {
    title: "Available Testing",
    iconName: "flask",
    paragraphs: [
      "The SKUAST-K Soil Testing Lab offers one package for agricultural lime: fineness factor, CaCO₃ equivalent, effective calcium carbonate, weight on 8-mesh, 60-mesh, and through 60-mesh sieves. A signed report including all parameters is issued on completion.",
    ],
  },
  sampleCollection: {
    title: "Sample Collection",
    iconName: "layers",
    paragraphs: [
      "Remove the top 12 inches of each sample area to eliminate eroded material. Take approximately 10 profile samples to a depth of 5 feet (where possible). Combine samples and submit in a water-tight container.",
    ],
    downloadLabel: "Download the Lime Analysis Form (PDF)",
    downloadHref: "/forms/lime-analysis.pdf",
  },
};

export const PLANT_FORAGE_GRAIN_CONTENT = {
  intro: {
    title: "Plant, Forage, & Grain Analysis",
    iconName: "wheat",
    badge: "Nutritional & Nitrate Testing",
    paragraphs: [
      "Plant, forage, and grain samples are submitted for nutritional status and nitrate testing. Comprehensive nutrient analysis includes nitrogen (N), phosphorus (P), potassium (K), calcium (Ca), magnesium (Mg), zinc (Zn), iron (Fe), copper (Cu), manganese (Mn), sulfate-sulfur (SO₄-S), and chloride (Cl).",
      "Analysis turnaround time depends largely on sample moisture content. Splitting plant samples immediately after collection accelerates drying and reduces lab turnaround. Results are reported directly via email or phone.",
    ],
  },
  producers: {
    title: "For Producers",
    iconName: "sprout",
    badge: "Crop Health & Yield Optimization",
    paragraphs: [
      "Nutritional status and nitrate levels provide critical insights into plant health and growth potential. Results are emailed or phoned to producers as soon as calculations are completed.",
    ],
  },
  producersCollection: {
    title: "Sample Collection Guidelines",
    iconName: "layers",
    paragraphs: [
      "Plant collection must target the correct plant part and growth stage. Completely remove soil from plant tissue before submitting.",
      "• Corn: Collect 15–20 ear leaves (or the leaf opposite/below the ear shoot) at green silk.",
      "• Sorghum: Collect 15–20 flag leaves at flowering.",
      "• Soybeans: Collect 25 sets of top fully developed leaflets (without petioles) when first pods are ½ to 1 inch.",
      "• Wheat: Collect 25–30 flag leaves at flowering.",
      "• Forage / Bales: Probe 1 sample for every 5 round bales or 100 square bales across 40 acres.",
    ],
    downloadLabel: "Download Plant Sample Information & Order Sheet (PDF)",
    downloadHref: "/forms/plant-sample-info.pdf",
  },
  researchers: {
    title: "For Researchers",
    iconName: "flask",
    badge: "In-Depth Tissue Analysis",
    paragraphs: [
      "Tissue analysis is conducted across specific growth stages to quantify elemental concentration for macro and micronutrients. Leftover sample tissue can be returned upon request.",
    ],
  },
  researchersCollection: {
    title: "Researcher Sample Collection & Forms",
    iconName: "tag",
    paragraphs: [
      "Sample collection varies by experiment design. Label all containers clearly and fill out information sheets completely to ensure rapid processing.",
    ],
    downloadLabel: "Download Researcher Order Sheet — SKUAST-K & External (PDF)",
    downloadHref: "/forms/plant-researcher-order.pdf",
  },
};

export const PLANT_PRODUCER_TESTS: SoilTest[] = [
  {
    name: "Sulfuric Acid Hydrogen Peroxide Digestion",
    description: "0.25g sample digested with H₂SO₄ & H₂O₂ at 300°C. Analysis for Potassium (K⁺) by Flame AAS.",
    iconName: "flask",
  },
  {
    name: "Salicylic-Sulfuric Acid Digestion",
    description: "0.25g sample treated with salicylic-sulfuric acid, thiosulfate, and SST-Auto catalyst tablet at 385°C.",
    iconName: "atom",
  },
  {
    name: "Nitric-Perchloric Acid Digestion",
    description: "0.25g sample digested with HNO₃ & HClO₄ at 200°C. AAS/ICP analysis for Ca²⁺, Mg²⁺, K⁺, Cu⁺, Fe³⁺, Mn²⁺, Zn⁺, and SO₄²⁻.",
    iconName: "zap",
  },
  {
    name: "Nitrogen & Phosphorus",
    description: "Digested plant material analyzed simultaneously using Technicon AAII auto-analyzer colorimetric method 334-74W/B.",
    iconName: "sprout",
  },
];

export const PLANT_RESEARCHER_TESTS: SoilTest[] = [
  {
    name: "Sulfuric Acid Hydrogen Peroxide Digestion",
    description: "Digestion at 285°C. Nitrogen analyzed on Alpkem RFA; Phosphorus & Potassium analyzed on ICP.",
    iconName: "flask",
  },
  {
    name: "Salicylic-Sulfuric Acid Digestion",
    description: "Techator block digestion at 385°C. Nitrogen analyzed on Alpkem RFA; Phosphorus on ICP.",
    iconName: "atom",
  },
  {
    name: "Nitric-Perchloric Acid Digestion",
    description: "ICP Spectrometry analysis for B, Ca²⁺, Mg²⁺, K⁺, Cu⁺, Fe³⁺, Mn²⁺, Zn⁺, and SO₄²⁻.",
    iconName: "zap",
  },
  {
    name: "Total Carbon & Nitrogen",
    description: "LECO TruSpec CN combustion analyzer reports total C and N on weight percent basis (0.15g tissue).",
    iconName: "leaf",
  },
  {
    name: "Protein",
    description: "Grain protein converted from total N by 5.7 (wheat) or 6.25 (other grains and plant tissue).",
    iconName: "wheat",
  },
];

export const WATER_ANALYSIS_CONTENT = {
  intro: {
    title: "Water Analysis",
    iconName: "droplet",
    badge: "Irrigation & Nutrient Quality",
    paragraphs: [
      "We offer water analysis for nutrient content and irrigation water quality for producers. (Note: Full drinking water potability testing is not offered).",
      "The most common test requested by producers is irrigation water quality, evaluating electrical conductivity (E.C.), sodium (Na), nitrate-nitrogen (NO₃-N), ammonium-nitrogen (NH₄-N), sulfur (S), and chloride (Cl). Additional custom parameters are available upon request.",
    ],
  },
  sampleCollection: {
    title: "Sample Collection Guidelines",
    iconName: "layers",
    paragraphs: [
      "Use a clean container and flush pipes or storage tanks thoroughly before collecting to remove stagnant water. Submit samples as soon as possible.",
      "Keep samples in a cool, dark location away from direct sunlight, which can alter nutrient concentrations. Label containers clearly and fill out information sheets completely.",
    ],
  },
  forms: {
    title: "Forms",
    groups: [
      {
        label: "For Homeowners & Producers:",
        links: [
          { label: "Water Sample Information & Order Sheet (PDF)", href: "/forms/water-sample-info.pdf" },
        ],
      },
      {
        label: "For Researchers & Agencies:",
        links: [
          { label: "State of Kashmir / SKUAST-K Order Sheet (PDF)", href: "/forms/water-state-order.pdf" },
          { label: "External Agency Order Sheet (PDF)", href: "/forms/water-external-order.pdf" },
        ],
      },
    ],
  },
};

export const WATER_AVAILABLE_TESTS: SoilTest[] = [
  {
    name: "Nitrate Analysis",
    description: "Evaluates nitrate-nitrogen content in irrigation water to calculate credits and reduce commercial nitrogen fertilizer application.",
    iconName: "flask",
    price: "₹200",
    priceNum: 200,
    turnaroundTime: "1-2 Days",
    sampleRequired: "500mL Water",
    category: "Water Analysis",
  },
  {
    name: "Irrigation Water Quality",
    description: "Measures electrical conductivity (EC) and soluble sodium percentage (Na%) to assess salinity hazard and soil permeability risk.",
    iconName: "droplets",
    price: "₹350",
    priceNum: 350,
    turnaroundTime: "2-3 Days",
    sampleRequired: "1L Water",
    category: "Water Analysis",
  },
  {
    name: "Specialized / Custom Water Testing",
    description: "Custom analyses for ammonium, sulfur, chloride, and specific ions available upon request with SKUAST-K Soil Testing Lab.",
    iconName: "sparkles",
    price: "₹500",
    priceNum: 500,
    turnaroundTime: "3-5 Days",
    sampleRequired: "1L Water",
    category: "Water Analysis",
  },
];

export const LEAF_ANALYSIS_CONTENT = {
  intro: {
    title: "Leaf Analysis",
    iconName: "leaf",
    badge: "Foliar Tissue & Micronutrient Diagnostic",
    paragraphs: [
      "The SKUAST-K Soil Testing Lab routinely tests for leaf nutrient content across fruit orchards, field crops, and horticultural species.",
      "Submitting the precise leaf or plant part at the correct developmental stage is critical for accurate diagnostic interpretation. Please contact the lab or your local county extension office for specific leaf analysis and collection guidelines.",
    ],
  },
  collection: {
    title: "Leaf Collection & Handling Guidelines",
    iconName: "layers",
    paragraphs: [
      "Target recent, fully expanded leaves from current season shoots. Completely remove surface dust with a clean, dry cloth or paper towel.",
      "Place collected leaf tissues in clean paper bags to allow air circulation. Avoid sealed plastic bags which cause rapid decomposition.",
    ],
    downloadLabel: "Download Leaf Analysis Information & Order Sheet (PDF)",
    downloadHref: "/forms/leaf-analysis-info.pdf",
  },
};

export const LEAF_SAMPLE_STEPS: StepItem[] = [
  {
    step: 1,
    title: "Select Healthy Leaves",
    description: "Choose 20–30 mature, fully expanded leaves from current growth shoots at shoulder height.",
    iconName: "leaf",
  },
  {
    step: 2,
    title: "Clean Surface Dust",
    description: "Gently wipe leaves with a dry paper towel to remove dust. Do not wash thoroughly with water.",
    iconName: "wind",
  },
  {
    step: 3,
    title: "Pack in Paper Bag",
    description: "Place leaves in a breathable paper bag with Sample ID. Never use airtight plastic bags.",
    iconName: "tag",
  },
  {
    step: 4,
    title: "Deliver Promptly",
    description: "Ship or drop off samples immediately to prevent decomposition and nutrient degradation.",
    iconName: "flask",
  },
];

export const LEAF_AVAILABLE_TESTS: SoilTest[] = [
  {
    name: "Primary Foliar Macronutrients (N, P, K)",
    description: "Tests total nitrogen, phosphorus, and potassium levels in leaf tissue to evaluate mid-season nutritional status.",
    iconName: "sprout",
    price: "₹350",
    priceNum: 350,
    turnaroundTime: "3 Days",
    sampleRequired: "30-40 Leaves",
    category: "Leaf / Tissue",
  },
  {
    name: "Complete Micronutrient Profile (Ca, Mg, Fe, Zn, Cu, Mn, B)",
    description: "Quantifies essential secondary and trace elements to prevent micro-deficiencies and yield bottlenecks.",
    iconName: "atom",
    price: "₹600",
    priceNum: 600,
    turnaroundTime: "4-5 Days",
    sampleRequired: "30-40 Leaves",
    category: "Leaf / Tissue",
  },
  {
    name: "Diagnostic Deficiency & Toxicity Screening",
    description: "Targeted foliar screening for troubleshooting leaf chlorosis, tip burn, necrosis, or suspected spray injury.",
    iconName: "sparkles",
    price: "₹500",
    priceNum: 500,
    turnaroundTime: "3-4 Days",
    sampleRequired: "30-40 Leaves",
    category: "Leaf / Tissue",
  },
  {
    name: "Kashmir Valley Orchard Foliar Package (Apple, Pear, Walnut)",
    description: "Tailored leaf analysis package specifically calibrated for Kashmir temperate fruit orchards to optimize fertilization.",
    iconName: "apple",
    price: "₹750",
    priceNum: 750,
    turnaroundTime: "3-4 Days",
    sampleRequired: "40 Leaves",
    category: "Leaf / Tissue",
  },
];

export const NUTRIENT_RECOMMENDATIONS_CONTENT = {
  intro: {
    title: "Nutrient Recommendations",
    iconName: "sparkles",
    badge: "Fertilizer & Soil Health Management",
    paragraphs: [
      "Managing soil health and nutrients is crucial to plant health and crop growth. Here, we've collected articles, publications, calculators, and decision-support tools to help you make sound soil fertilizer decisions.",
    ],
  },
  interpretations: {
    title: "Soil Interpretations & Fertilizer Recommendations",
    iconName: "layers",
    paragraphs: [
      "Development of sound nutrient management programs involves a wide range of information. Soil test records are an important piece of required information, but other factors such as soil moisture conditions, land ownership/tenure, crop and cropping sequence, pest management, cultural practices, environmental issues, and other management items are vital for developing sound nutrient management programs.",
    ],
    downloadLabel: "Read More: Soil Interpretations & Nutrient Management Guidelines (PDF)",
    downloadHref: "/publications/soil-interpretations.pdf",
  },
  strategies: {
    title: "Fertilizer Application Strategies",
    iconName: "sprout",
    badge: "Best Management Practices",
    paragraphs: [
      "Maximum direct fertilizer applications, split nitrogen applications, deep placement, and banding strategies optimize nutrient uptake while preventing environmental leaching, runoff, and ammonia volatilization.",
      "Refer to the Department of Agriculture, Pesticides and Fertilizer Program commercial fertilizer laws and guidelines for regulatory application limits.",
    ],
  },
};

export const NUTRIENT_CALCULATORS_AND_TOOLS: SoilTest[] = [
  {
    name: "Fertilizer Recommendations — Excel Workbook (2025 Update)",
    description: "Offline spreadsheet workbook (.xlsx) for field-specific nutrient planning, lime requirement calculation, and N-P-K recommendation output.",
    iconName: "fileText",
  },
  {
    name: "Fertilizer Recommendations — Mobile & Web Application",
    description: "Interactive online calculator tool to input soil test values (pH, P, K, NO₃) and yield goals for instant fertilizer rate calculations.",
    iconName: "sparkles",
  },
  {
    name: "Plant Tissue Test Interpretation Tool — Web Application",
    description: "Diagnostic foliar interpretation application to compare leaf analytical values against sufficiency ranges for field and orchard crops.",
    iconName: "leaf",
  },
];

export const NUTRIENT_PUBLICATIONS: SoilTest[] = [
  {
    name: "Chloride in Kashmir: Plant, Soil & Fertilizer Considerations",
    description: "Technical extension publication on chloride soil testing, wheat response curves, and fertilizer recommendations (PDF).",
    iconName: "flask",
  },
  {
    name: "Sulfur in Kashmir: Plant, Soil & Fertilizer Considerations",
    description: "Evaluation of sulfate-sulfur profile depth sampling and yield response on low-organic and sandy soils (PDF).",
    iconName: "cloud",
  },
  {
    name: "Fertilizing Gardens & Lawns in Kashmir",
    description: "Practical guides for garden vegetable fertilization, lawn nitrogen maintenance, and soil pH management (PDF).",
    iconName: "sprout",
  },
  {
    name: "The Effects of Nitrogen Fertilizer on Soil & Liming Acid Soils",
    description: "Impact of long-term N application on soil acidification, CEC, and effective calcium carbonate liming requirements (PDF).",
    iconName: "atom",
  },
  {
    name: "Management of Saline & Sodic Soils",
    description: "Diagnostic parameters for electrical conductivity (EC), exchangeable sodium percentage (ESP), and gypsum reclamation (PDF).",
    iconName: "droplets",
  },
  {
    name: "Management Practices Affecting Nitrogen Loss from Urea",
    description: "Strategies to minimize urease volatilization losses using nitrogen inhibitors, incorporation, and timing (PDF).",
    iconName: "wind",
  },
  {
    name: "Nutrient Management Plan & Commercial Fertilizer Regulations",
    description: "Comprehensive farm nutrient management template developed in accordance with Department of Agriculture commercial laws (PDF).",
    iconName: "tag",
  },
];

export interface FormItem {
  title: string;
  category: string;
  fileFormat: string;
  href: string;
  subtitle?: string;
}

export interface FormCategoryGroup {
  category: string;
  iconName: string;
  badge: string;
  forms: FormItem[];
}

export const SAMPLE_FORMS_DATA: {
  title: string;
  subtitle: string;
  shippingPrompt: string;
  shippingBtnText: string;
  shippingHref: string;
  categories: FormCategoryGroup[];
} = {
  title: "Start Your Sample Submission",
  subtitle:
    "To get started, choose the form that corresponds with the tests you want completed. After collecting your sample and filling out the form, generate your shipping label and send your samples to SKUAST-K Soil Testing Laboratory.",
  shippingPrompt: "Ready to ship your samples?",
  shippingBtnText: "Create Your Shipping Label",
  shippingHref: "https://www.ups.com/ship",
  categories: [
    {
      category: "Soil Test Forms",
      iconName: "sprout",
      badge: "Soil Analysis",
      forms: [
        { title: "Soil Sample Information Sheet for Farmers", category: "Producers", fileFormat: "PDF", href: "/forms/soil-farmers.pdf" },
        { title: "Flower and Ornamental Soil Analysis Form", category: "Horticulture", fileFormat: "PDF", href: "/forms/soil-flower-ornamental.pdf" },
        { title: "Lawn and Turf Soil Analysis Form", category: "Turfgrass", fileFormat: "PDF", href: "/forms/soil-lawn-turf.pdf" },
        { title: "Vegetable, Fruit, & Nut Soil Analysis Form", category: "Orchards", fileFormat: "PDF", href: "/forms/soil-[#1b4332]fruit-nut.pdf" },
        { title: "State of Kashmir / SKUAST-K Agency — Scooped Soil Sample", category: "Research", fileFormat: "PDF", href: "/forms/soil-state-scooped.pdf" },
        { title: "State of Kashmir / SKUAST-K Agency — Weighed Soil Sample", category: "Research", fileFormat: "PDF", href: "/forms/soil-state-weighed.pdf" },
        { title: "External Research Agency — Scooped Soil Sample", category: "Research", fileFormat: "PDF", href: "/forms/soil-external-scooped.pdf" },
        { title: "External Research Agency — Weighed Soil Sample", category: "Research", fileFormat: "PDF", href: "/forms/soil-external-weighed.pdf" },
      ],
    },
    {
      category: "Lime Analysis Forms",
      iconName: "mountain",
      badge: "Lime Quarry & Agriculture",
      forms: [
        { title: "Agricultural Lime Analysis Form", category: "Lime Package", fileFormat: "PDF", href: "/forms/lime-analysis.pdf" },
      ],
    },
    {
      category: "Plant, Forage, & Grain Analysis Forms",
      iconName: "wheat",
      badge: "Tissue & Crop",
      forms: [
        { title: "Producer Plant, Forage, & Grain Analysis Form", category: "Producers", fileFormat: "PDF", href: "/forms/plant-producer.pdf" },
        { title: "State of Kashmir / SKUAST-K Agency Plant Analysis Form", category: "Research", fileFormat: "PDF", href: "/forms/plant-state.pdf" },
        { title: "External Research Agency Plant Analysis Form", category: "Research", fileFormat: "PDF", href: "/forms/plant-external.pdf" },
      ],
    },
    {
      category: "Water Analysis Forms",
      iconName: "droplets",
      badge: "Irrigation & Water Quality",
      forms: [
        { title: "Producer Water Sample Information & Order Sheet", category: "Producers", fileFormat: "PDF", href: "/forms/water-producer.pdf" },
        { title: "State of Kashmir / SKUAST-K Agency Water Analysis Form", category: "Research", fileFormat: "PDF", href: "/forms/water-state.pdf" },
        { title: "External Research Agency Water Analysis Form", category: "Research", fileFormat: "PDF", href: "/forms/water-external.pdf" },
      ],
    },
  ],
};

export const EQUIPMENTS_CONTENT = {
  intro: {
    title: "Laboratory & Field Sampling Equipment",
    iconName: "wrench",
    badge: "State-of-the-Art Instrumentation",
    paragraphs: [
      "The SKUAST-K Soil Testing Laboratory is equipped with advanced analytical instrumentation, precision field sampling tools, and specialized sample preparation apparatus.",
      "Our equipment ensures high-throughput testing, sub-ppm analytical precision, and strict compliance with North Central Region (NCR-221) and Indian Council of Agricultural Research (ICAR) standardized soil & plant analytical procedures.",
    ],
  },
  fieldSampling: {
    title: "Field Sampling Equipment",
    iconName: "layers",
    badge: "Field Collection",
    paragraphs: [
      "Precision sampling tools designed for extracting representative, non-contaminated soil cores, profile samples, and crop tissue specimens across orchard and field conditions.",
    ],
  },
  analyticalInstruments: {
    title: "High-Precision Laboratory Instrumentation",
    iconName: "flask",
    badge: "Analytical Instrumentation",
    paragraphs: [
      "Advanced spectrophotometers, automated flow analyzers, and elemental combustion analyzers for accurate quantification of macro, micro, and heavy metal ions.",
    ],
  },
  samplePrep: {
    title: "Sample Preparation & Processing Equipment",
    iconName: "sparkles",
    badge: "Sample Prep & Processing",
    paragraphs: [
      "Controlled drying ovens, pulverizing grinders, mechanical shakers, and wet digestion blocks for sample stabilization and matrix homogenization.",
    ],
  },
};

export const FIELD_SAMPLING_EQUIPMENT: SoilTest[] = [
  {
    name: "Stainless Steel Core Augers & Sampling Probes",
    description: "Heavy-duty 0–6\", 0–12\", and 0–24\" depth probes designed to extract clean, un-contaminated soil cores without metal cross-contamination.",
    iconName: "sprout",
  },
  {
    name: "24-Inch Profile Subsoil Sampler",
    description: "Specialized deep-profile auger for subsoil nitrate (NO₃-N), chloride (Cl), and sulfate-sulfur depth profiling.",
    iconName: "layers",
  },
  {
    name: "Forage & Hay Probe Sampler",
    description: "Stainless steel serrated tip probe designed to sample round and square hay bales to 18-inch depth for tissue quality testing.",
    iconName: "wheat",
  },
  {
    name: "Sterile Liquid & Water Sampling Containers",
    description: "Nalgene non-leaching HDPE bottles for irrigation water collection, EC testing, and soluble salt profiling.",
    iconName: "droplets",
  },
];

export const ANALYTICAL_INSTRUMENTS: SoilTest[] = [
  {
    name: "ICP-OES Spectrometer (Inductively Coupled Plasma)",
    description: "Simultaneous multi-element detection for P, K, Ca, Mg, S, Fe, Zn, Cu, Mn, B, and heavy metals at sub-ppm sensitivity.",
    iconName: "atom",
  },
  {
    name: "Flame Atomic Absorption Spectrophotometer (AAS)",
    description: "High-accuracy flame atomic absorption instrument dedicated to exchangeable cations (Ca²⁺, Mg²⁺, K⁺, Na⁺).",
    iconName: "flask",
  },
  {
    name: "LECO TruSpec CN Combustion Analyzer",
    description: "High-temperature elemental combustion furnace reporting total carbon and total nitrogen on a weight percent basis.",
    iconName: "sparkles",
  },
  {
    name: "Automated Continuous Flow Injection Analyzer (Alpkem / Technicon)",
    description: "Dual-channel automated colorimetric analyzer for inorganic nitrogen (NO₃⁻, NH₄⁺) and Bray/Olsen phosphorus.",
    iconName: "zap",
  },
  {
    name: "Automated Benchtop pH & Electrical Conductivity (EC) Station",
    description: "Digital multi-electrode workstation measuring 1:1 soil-water pH, SMP buffer pH, and saturated paste EC (mmhos/cm).",
    iconName: "droplets",
  },
  {
    name: "Mercury Thiocyanate Flow Cell Colorimeter",
    description: "Specialized colorimetric analyzer dedicated to chloride extraction analysis in plant tissue and subsoil samples.",
    iconName: "cloud",
  },
];

export const SAMPLE_PREP_EQUIPMENT: SoilTest[] = [
  {
    name: "Forced-Air Sample Drying Ovens (60°C)",
    description: "Temperature-controlled high-volume convection ovens for overnight soil and plant tissue drying without thermal degradation.",
    iconName: "wind",
  },
  {
    name: "Heavy-Duty Soil Pulverizing Grinder & 2mm Sieve Mill",
    description: "High-torque pulverizing mill grinding dried soil to pass through standardized 2mm stainless steel mesh sieves.",
    iconName: "mountain",
  },
  {
    name: "Techator & Kimax Temperature-Programmed Acid Digestion Blocks",
    description: "Fume-hood enclosed block digesters operating at 200°C–385°C for Nitric-Perchloric and Salicylic-Sulfuric wet digestions.",
    iconName: "flask",
  },
  {
    name: "Hydrometer Sedimentation & Mechanical Soil Shaker Station",
    description: "High-speed dispersing stirrer and Bouyoucos hydrometer cylinders for soil sand, silt, and clay particle size estimation.",
    iconName: "layers",
  },
];

export const ALL_TESTS_MASTER_LIST: SoilTest[] = [
  ...SOIL_AVAILABLE_TESTS,
  ...RESEARCHER_AVAILABLE_TESTS,
  ...WATER_AVAILABLE_TESTS,
  ...LEAF_AVAILABLE_TESTS,
];







