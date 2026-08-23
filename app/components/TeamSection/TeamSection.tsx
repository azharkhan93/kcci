import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCheck, Mail, ArrowRight } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  email: string;
  imageSrc?: string;
}

export interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  directoryHref?: string;
  className?: string;
}

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Prof. (Dr.) Farooq Ahmad Lone",
    role: "Head, Division of Soil Science",
    specialization: "Soil Fertility & Chemistry",
    email: "headsoilscience@skuastkashmir.ac.in",
    imageSrc: "/faculty/prof_farooq.jpg",
  },
  {
    name: "Dr. Senior Soil Scientist",
    role: "In-Charge, Soil Testing Lab",
    specialization: "Micronutrients & Soil Testing",
    email: "soiltesting@skuastkashmir.ac.in",
    imageSrc: "/faculty/dr_gis_pi.jpg",
  },
  {
    name: "Er. Technical Officer",
    role: "Senior Lab Analyst",
    specialization: "Water Quality & Plant Analysis",
    email: "wateranalysis@skuastkashmir.ac.in",
    imageSrc: "/faculty/dr_analytical_coord.jpg",
  },
];

export const TeamSection = ({
  title = "Meet Our Faculty & Team",
  subtitle = "Our dedicated team of scientists, researchers, and lab analysts at SKUAST-K Division of Soil Science.",
  members = DEFAULT_TEAM_MEMBERS,
  directoryHref = "/about#team",
  className = "",
}: TeamSectionProps): React.ReactElement => {
  return (
    <section className={`space-y-6 py-8 border-t border-gray-200 ${className}`}>
      {/* ── Section Title Header ──────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332] tracking-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1 max-w-2xl">
            {subtitle}
          </p>
        </div>
        <Link
          href={directoryHref}
          className="inline-flex items-center gap-2 text-[#1b4332] font-bold text-base hover:text-[#081c15] transition-colors group flex-shrink-0"
        >
          <span>View Full Faculty Directory</span>
          <ArrowRight className="w-4 h-4 text-[#d99b26] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* ── Team Grid Cards ───── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-emerald-300 transition-colors space-y-3"
          >
            <div className="flex items-center gap-3">
              {member.imageSrc ? (
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-emerald-100 shadow-2xs">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl bg-emerald-50 text-[#1b4332] flex items-center justify-center font-bold text-lg flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-[#1b4332]" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-tight truncate">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#1b4332] mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 font-medium pt-1">
              Specialization: <span className="text-gray-800">{member.specialization}</span>
            </p>
            <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-600">
              <Mail className="w-3.5 h-3.5 text-[#1b4332] flex-shrink-0" />
              <a
                href={`mailto:${member.email}`}
                className="hover:underline hover:text-[#1b4332] font-semibold text-[#1b4332] truncate"
              >
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
