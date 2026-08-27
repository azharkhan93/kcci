"use client";

import React from "react";
import Image from "next/image";
import { type LeadershipMember } from "@/app/constants/teamMembers";

export interface TeamCardProps {
  member: LeadershipMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#1b4332]/40 transition-all duration-300">
      
      <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-slate-100 overflow-hidden">
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

    
      <div className="py-4 px-4 text-center space-y-1 bg-white border-t border-slate-100">
        <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#1b4332] transition-colors truncate">
          {member.name}
        </h3>

        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1b4332]">
          {member.role}
        </p>
      </div>
    </div>
  );
};
