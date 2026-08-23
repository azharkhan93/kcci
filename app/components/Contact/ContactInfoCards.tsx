"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { LAB_CONTACT_INFO } from "@/app/constants/navigation";

export interface ContactInfoCardsProps {
  className?: string;
}

export const ContactInfoCards: React.FC<ContactInfoCardsProps> = ({
  className = "",
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {/* ── Card 1: Main Campus Location ── */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full border border-[#1b4332]/20">
            Physical Campus
          </span>
          <h3 className="text-lg font-bold text-gray-950 mt-2 mb-2">
            Division & Laboratory
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900 block">{LAB_CONTACT_INFO.organization}</span>
            {LAB_CONTACT_INFO.addressLines.map((line, idx) => (
              <span key={idx} className="block text-gray-600">{line}</span>
            ))}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">Main Agriculture Block</span>
          <a
            href="#lab-map"
            className="text-xs font-bold text-[#1b4332] hover:text-[#081c15] inline-flex items-center gap-1 group-hover:underline"
          >
            <span>View Map</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* ── Card 2: Direct Email ── */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Mail className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full border border-[#1b4332]/20">
            Official Inquiries
          </span>
          <h3 className="text-lg font-bold text-gray-950 mt-2 mb-2">
            Email Channels
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Primary email address for test bookings, report verification, and research collaborations.
          </p>
          <a
            href={`mailto:${LAB_CONTACT_INFO.email}`}
            className="text-xs sm:text-sm font-semibold text-[#1b4332] hover:underline block break-all font-mono"
          >
            {LAB_CONTACT_INFO.email}
          </a>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">Response within 24h</span>
          <button
            type="button"
            onClick={() => handleCopy(LAB_CONTACT_INFO.email, "email")}
            className="text-xs font-bold text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 cursor-pointer bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors"
            title="Copy Email"
          >
            {copiedKey === "email" ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#1b4332]" />
                <span className="text-[#1b4332] font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Card 3: Phone & Direct Line ── */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full border border-[#1b4332]/20">
            Telephone
          </span>
          <h3 className="text-lg font-bold text-gray-950 mt-2 mb-2">
            Direct Helpdesk
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Speak directly with our analytical lab staff and test coordinators.
          </p>
          <a
            href="tel:01942461271"
            className="text-sm sm:text-base font-bold text-[#1b4332] hover:underline block font-mono"
          >
            0194-2461271
          </a>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">EPABX Ext: 214</span>
          <a
            href="tel:01942461271"
            className="text-xs font-bold text-[#1b4332] hover:text-[#081c15] inline-flex items-center gap-1"
          >
            <span>Call Now</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ── Card 4: Operating Hours & Drop-off ── */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Clock className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full border border-[#1b4332]/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d99b26] animate-pulse" />
              Open Mon-Fri
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-950 mt-2 mb-2">
            Lab Schedule
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            <span className="font-semibold text-gray-900 block">Working Hours:</span>
            {LAB_CONTACT_INFO.hours}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">Sat-Sun: Closed</span>
          <span className="text-xs font-bold text-[#d99b26]">Counter Open</span>
        </div>
      </div>
    </div>
  );
};
