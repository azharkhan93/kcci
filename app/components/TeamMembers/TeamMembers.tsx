"use client";

import React from "react";
import { LAB_TEAM_MEMBERS, TEAM_MEMBERS_HEADER } from "@/app/constants/teamMembers";
import { TeamCard } from "./TeamCard";

export const TeamMembers: React.FC = () => {
  return (
    <section
      id="team"
      aria-label="Our Visionaries and Leadership Team"
      className="relative w-full py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-14">
       
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {TEAM_MEMBERS_HEADER.titlePart1}
            <span className="text-[#1b4332] font-extrabold">
              {TEAM_MEMBERS_HEADER.titlePart2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {TEAM_MEMBERS_HEADER.subtitle}
          </p>
        </div>

        {/* ── 3 Leadership Cards (Centered, Full Opacity, No Glitch Effects) ── */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
            {LAB_TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
