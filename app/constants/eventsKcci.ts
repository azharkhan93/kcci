export interface KcciEventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  venue: string;
  status: "Featured Event" | "Upcoming Event" | "Annual Flagship" | "Completed";
  badge?: string;
  summary?: string;
  highlights?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface KcciCompletedEventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  status: "Completed";
  summary: string;
}

export const KCCI_EVENTS_DATA = {
  eyebrow: "Chamber Conclaves & Calendar",
  headingPrefix: "Chamber Conclaves & ",
  headingHighlight: "Events",
  subtitle:
    "Review historic trade MoUs concluded by KCCI alongside the upcoming calendar of international buyer-seller meets and artisan expos.",
  
  // Completed / Concluded Chamber Events (Left Column)
  completedEyebrow: "PAST CONCLAVES & ARCHIVES",
  completedHeadingPrefix: "Concluded & ",
  completedHeadingHighlight: "Completed Events",
  completedDescription:
    "Key bilateral MoUs, export agreements, and general assemblies successfully concluded by KCCI.",
  completedEvents: [
    {
      id: "completed-esc-mou-signing",
      title: "MoU Signing Ceremony with ESC for Global IT & Electronics Promotion",
      category: "Strategic MoUs",
      date: "June 22, 2025",
      venue: "SKICC Chashma Shahi, Srinagar",
      status: "Completed",
      summary:
        "Historic bilateral MoU executed with the Electronics and Computer Software Export Promotion Council (ESC) to facilitate technology trade from J&K.",
    },
    {
      id: "completed-agm-88",
      title: "88th Annual General Meeting & Trade Representation Assembly",
      category: "Governance & Assembly",
      date: "September 15, 2025",
      venue: "KCCI Central Secretariat, Residency Road",
      status: "Completed",
      summary:
        "Assembly of executive committee and general body reviewing regional export facilitation charters and handicraft fiscal reforms.",
    },
    {
      id: "completed-pashmina-gi-conclave",
      title: "Kashmir GI Handicrafts & Pashmina Verification Conclave",
      category: "GI Crafts & Heritage",
      date: "November 10–12, 2025",
      venue: "Kashmir Haat Exhibition Complex, Srinagar",
      status: "Completed",
      summary:
        "Artisan convention on QR-code GI certification and direct overseas procurement protocols for Pashmina shawls and silk carpets.",
    },
    {
      id: "completed-gulf-delegation-meet",
      title: "Bilateral Gulf & Middle East Trade Delegation Round Table",
      category: "Export Promotion",
      date: "December 04, 2025",
      venue: "SKICC Waterfront, Srinagar",
      status: "Completed",
      summary:
        "High-level bilateral round table with Middle East trade delegates focused on Kashmiri saffron, dry fruits, and handloom exports.",
    },
  ] as KcciCompletedEventItem[],

  // Upcoming Events (Right Column Marquee - strictly Name, Date, Venue, No Image)
  upcomingEyebrow: "CHAMBER CALENDAR",
  upcomingHeadingPrefix: "Upcoming ",
  upcomingHeadingHighlight: "Events Schedule",
  upcomingDescription:
    "Continuous 3D schedule of upcoming trade expos, IT summits, and buyer-seller meets.",
  upcomingEvents: [
    {
      id: "upcoming-gi-handicrafts-expo",
      title: "Kashmir GI Handicrafts & Artisan Global Expo",
      category: "Handicrafts & GI Heritage",
      date: "April 18–20, 2026",
      venue: "SKICC Waterfront, Srinagar",
      status: "Upcoming Event",
      badge: "Handicrafts Expo",
      summary:
        "Premier craft exposition dedicated to authentic GI-certified Kashmiri crafts connecting master artisans directly with national and overseas buyers.",
    },
    {
      id: "upcoming-esc-it-summit",
      title: "KCCI & ESC Global Software & Tech Conclave",
      category: "Export Promotion & MoUs",
      date: "May 14–16, 2026",
      venue: "Chamber Conclave Hall, Residency Road",
      status: "Upcoming Event",
      badge: "Strategic MoU",
      summary:
        "Joint bilateral conclave boosting digital exports, IT startups, and cross-border tech partnerships across Jammu & Kashmir.",
    },
    {
      id: "upcoming-egm-governance",
      title: "Extra Ordinary General Body Meeting & Policy Dialogue",
      category: "Governance & Assembly",
      date: "June 20, 2026",
      venue: "KCCI Central Secretariat, Srinagar",
      status: "Upcoming Event",
      badge: "Executive Assembly",
      summary:
        "Assembly of chamber members and industry leaders to deliberate on commercial sector welfare and economic representations.",
    },
    {
      id: "upcoming-heritage-tourism",
      title: "Dal Lake Heritage Tourism & Hospitality Forum",
      category: "Tourism & Ecology",
      date: "August 12–14, 2026",
      venue: "Dal Lake Waterfront Pavilion, Srinagar",
      status: "Upcoming Event",
      badge: "Hospitality Forum",
      summary:
        "Convening houseboat owners, tour operators, and chamber delegates to advance Srinagar’s four-season tourism infrastructure.",
    },
    {
      id: "upcoming-chinar-buyer-seller",
      title: "Autumn Chinar International Buyer-Seller Meet",
      category: "Trade & Commerce",
      date: "September 24–26, 2026",
      venue: "SKICC Grand Auditorium, Srinagar",
      status: "Upcoming Event",
      badge: "Flagship Meet",
      summary:
        "Annual chamber convention uniting international trade delegations and buying houses during Kashmir's golden Harud season.",
    },
    {
      id: "upcoming-artisan-pavilion",
      title: "Mughal Garden Autumn Artisan Pavilion",
      category: "Handicrafts & Heritage",
      date: "October 08–10, 2026",
      venue: "Nishat-Shalimar Heritage Gardens, Srinagar",
      status: "Upcoming Event",
      badge: "Artisan Pavilion",
      summary:
        "Open-air artisan demonstration showcasing centuries of Kashmiri wood carving, paper-mâché, and copperware engraving.",
    },
  ] as KcciEventItem[],

  // Backward compatibility alias
  events: [
    {
      id: "upcoming-gi-handicrafts-expo",
      title: "Kashmir GI Handicrafts & Artisan Global Expo",
      category: "Handicrafts & GI Heritage",
      date: "April 18–20, 2026",
      venue: "SKICC Waterfront, Srinagar",
      status: "Upcoming Event",
      badge: "Handicrafts Expo",
      summary:
        "Premier craft exposition dedicated to authentic GI-certified Kashmiri crafts.",
    },
    {
      id: "upcoming-esc-it-summit",
      title: "KCCI & ESC Global Software & Tech Conclave",
      category: "Export Promotion & MoUs",
      date: "May 14–16, 2026",
      venue: "Chamber Conclave Hall, Residency Road",
      status: "Upcoming Event",
      badge: "Strategic MoU",
      summary:
        "Joint bilateral conclave boosting digital exports and tech partnerships.",
    },
    {
      id: "upcoming-egm-governance",
      title: "Extra Ordinary General Body Meeting & Policy Dialogue",
      category: "Governance & Assembly",
      date: "June 20, 2026",
      venue: "KCCI Central Secretariat, Srinagar",
      status: "Upcoming Event",
      badge: "Executive Assembly",
      summary:
        "Assembly of chamber members deliberating on regional commercial welfare.",
    },
    {
      id: "upcoming-heritage-tourism",
      title: "Dal Lake Heritage Tourism & Hospitality Forum",
      category: "Tourism & Ecology",
      date: "August 12–14, 2026",
      venue: "Dal Lake Waterfront Pavilion, Srinagar",
      status: "Upcoming Event",
      badge: "Hospitality Forum",
      summary:
        "Convening stakeholders to advance Kashmir’s four-season tourism infrastructure.",
    },
    {
      id: "upcoming-chinar-buyer-seller",
      title: "Autumn Chinar International Buyer-Seller Meet",
      category: "Trade & Commerce",
      date: "September 24–26, 2026",
      venue: "SKICC Grand Auditorium, Srinagar",
      status: "Upcoming Event",
      badge: "Flagship Meet",
      summary:
        "Annual chamber convention uniting international buyers during Harud season.",
    },
    {
      id: "upcoming-artisan-pavilion",
      title: "Mughal Garden Autumn Artisan Pavilion",
      category: "Handicrafts & Heritage",
      date: "October 08–10, 2026",
      venue: "Nishat-Shalimar Heritage Gardens, Srinagar",
      status: "Upcoming Event",
      badge: "Artisan Pavilion",
      summary:
        "Open-air artisan demonstration showcasing centuries of Kashmiri crafts.",
    },
  ] as KcciEventItem[],
};
