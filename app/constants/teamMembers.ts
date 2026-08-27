export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
}

export const TEAM_MEMBERS_HEADER = {
  titlePart1: "Our Visionaries & ",
  titlePart2: "Core Team",
  subtitle:
    "Our comprehensive suite of professionals caters to a diverse team, ranging from agriculture professionals to renowned scientists and engineers.",
};

export const LAB_TEAM_MEMBERS: LeadershipMember[] = [
  {
    id: "dr-shabir-bangroo",
    name: "Dr. Shabir A. Bangroo",
    role: "Director",
    imageSrc: "/shabir.webp",
  },
  {
    id: "shahid-shafai",
    name: "Shahid S. Shafai",
    role: "CEO",
    imageSrc: "/shahid.webp",
  },
  {
    id: "wajahat-bandey",
    name: "Wajahat Bandey",
    role: "CTO",
    imageSrc: "/research/prediction-modeling.jpg",
  },
];
