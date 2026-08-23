"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Mail, Award, ShieldCheck, ChevronRight, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button";
import { LAB_TEAM_MEMBERS, LeadershipMember } from "@/app/constants/teamMembers";

export interface AboutLeadershipProps {
  members?: LeadershipMember[];
  limit?: number;
  title?: string;
  subtitle?: string;
  badge?: string;
  showFilter?: boolean;
  viewAllHref?: string;
  className?: string;
}

export const AboutLeadership: React.FC<AboutLeadershipProps> = ({
  members = LAB_TEAM_MEMBERS,
  limit,
  title = "Scientific Investigators & Faculty",
  subtitle = "Distinguished agronomists, soil chemists, and remote sensing scientists directing cutting-edge field and laboratory research.",
  badge = "FACULTY & LEADERSHIP",
  showFilter = false,
  viewAllHref,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    members.forEach((m) => {
      if (m.category) cats.add(m.category);
    });
    return ["All", ...Array.from(cats)];
  }, [members]);

  const filteredMembers = useMemo(() => {
    if (selectedCategory === "All") return members;
    return members.filter((m) => m.category === selectedCategory);
  }, [members, selectedCategory]);

  const displayedMembers = useMemo(() => {
    if (limit && limit > 0) {
      return filteredMembers.slice(0, limit);
    }
    return filteredMembers;
  }, [filteredMembers, limit]);

  return (
    <div className={`space-y-8 ${className}`}>
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Optional Category Filters (for full directory view) */}
          {showFilter && categories.length > 2 && (
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar mt-5 pt-1 pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#1b4332] text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4332] hover:text-[#081c15] self-start sm:self-auto hover:underline"
          >
            <span>View Full Directory ({members.length})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* ── Leadership / Team Grid with Images ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedMembers.map((leader) => (
          <div
            key={leader.id}
            className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            <div>
              {/* Member Photo & Role Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border-2 border-[#1b4332]/20 shadow-xs group-hover:border-[#1b4332] transition-colors">
                  <Image
                    src={leader.imageSrc}
                    alt={leader.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full border border-[#1b4332]/20 inline-block mb-1">
                    {leader.category}
                  </span>
                  <h3 className="font-extrabold text-base text-gray-950 leading-snug group-hover:text-[#1b4332] transition-colors truncate">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#1b4332] mt-0.5 leading-snug">
                    {leader.role}
                  </p>
                  <span className="text-[10px] font-medium text-gray-400 font-mono block mt-0.5">
                    {leader.qualification}
                  </span>
                </div>
              </div>

              {/* Specializations & Division */}
              <div className="space-y-2 text-xs text-gray-600 pt-3 border-t border-gray-100 mb-4">
                <p className="flex items-start gap-1.5 leading-tight">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1b4332] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{leader.division}</span>
                </p>
                <p className="flex items-start gap-1.5 leading-tight">
                  <Award className="w-3.5 h-3.5 text-[#1b4332] flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-900">{leader.specialization}</span>
                </p>
              </div>

              {/* Optional Research Focus Tags */}
              {leader.researchFocus && leader.researchFocus.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {leader.researchFocus.slice(0, 2).map((focus, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-gray-600 bg-gray-50 px-2 py-0.5 rounded border border-gray-200/60"
                    >
                      #{focus}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Action */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <a
                href={`mailto:${leader.email}`}
                className="text-xs font-semibold text-[#1b4332] hover:underline inline-flex items-center gap-1.5 break-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Email</span>
              </a>
              <span className="text-[10px] text-gray-400 font-mono">SKUAST-K</span>
            </div>
          </div>
        ))}
      </div>

     
      {viewAllHref && limit && limit < filteredMembers.length && (
        <div className="mt-8 text-center">
          <Link href={viewAllHref}>
            <Button variant="primary">
              Explore All Lab Members ({members.length})
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
