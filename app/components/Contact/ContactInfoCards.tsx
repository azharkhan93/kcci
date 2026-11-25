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
      {/* ── Card 1: Registered Office Location ── */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-[#6E2C00]/15 p-6 shadow-xs hover:shadow-md hover:border-[#BB5D0E]/50 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#6E2C00]/10 text-[#6E2C00] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <MapPin className="w-6 h-6" />
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7E393F] block font-mono">
            Chamber Secretariat
          </p>
          <h3 className="text-lg font-bold text-[#2B1203] font-space mt-1 mb-2">
            Address &amp; Location
          </h3>
          <div className="text-xs text-[#514646] leading-relaxed">
            <p className="font-semibold text-[#2B1203] mb-1">
              {LAB_CONTACT_INFO.organization}
            </p>
            <p>{LAB_CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#6E2C00]/10 flex items-center justify-between">
          <p className="text-xs text-[#514646]/80 font-medium">Residency Road, Srinagar</p>
          <a
            href="#chamber-map"
            className="text-xs font-bold text-[#6E2C00] hover:text-[#A61A28] inline-flex items-center gap-1 group-hover:underline"
          >
            <p>View Map</p>
            <p>↓</p>
          </a>
        </div>
      </div>

      {/* ── Card 2: Direct Emails ── */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-[#6E2C00]/15 p-6 shadow-xs hover:shadow-md hover:border-[#BB5D0E]/50 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#6E2C00]/10 text-[#6E2C00] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7E393F] block font-mono">
            Official E-mail
          </p>
          <h3 className="text-lg font-bold text-[#2B1203] font-space mt-1 mb-2">
            Secretariat Mail
          </h3>

          <div className="space-y-1.5 pt-1">
            {LAB_CONTACT_INFO.emails.map((email, idx) => (
              <div key={email} className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-xs font-semibold text-[#6E2C00] hover:underline truncate font-mono"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(email, `email-${idx}`)}
                  className="text-[#514646]/60 hover:text-[#6E2C00] p-1 rounded transition-colors cursor-pointer"
                  title={`Copy ${email}`}
                >
                  {copiedKey === `email-${idx}` ? (
                    <Check className="w-3 h-3 text-[#64691D]" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#6E2C00]/10 flex items-center justify-between">
          <p className="text-xs text-[#514646]/80 font-medium">Official Inquiries</p>
          <p className="text-xs font-bold text-[#64691D]">Active</p>
        </div>
      </div>

      {/* ── Card 3: Phone Numbers ── */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-[#6E2C00]/15 p-6 shadow-xs hover:shadow-md hover:border-[#BB5D0E]/50 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#6E2C00]/10 text-[#6E2C00] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Phone className="w-6 h-6" />
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7E393F] block font-mono">
            Phone Numbers
          </p>
          <h3 className="text-lg font-bold text-[#2B1203] font-space mt-1 mb-2">
            Chamber Helpline
          </h3>

          <div className="space-y-2 pt-1">
            {LAB_CONTACT_INFO.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#6E2C00] hover:underline font-mono"
              >
                <p>{phone}</p>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#6E2C00]/10 flex items-center justify-between">
          <p className="text-xs text-[#514646]/80 font-medium">Landline &amp; Mobile</p>
          <p className="text-xs font-bold text-[#6E2C00]">Mon–Sat</p>
        </div>
      </div>

      {/* ── Card 4: Operating Hours ── */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-[#6E2C00]/15 p-6 shadow-xs hover:shadow-md hover:border-[#BB5D0E]/50 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#6E2C00]/10 text-[#6E2C00] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Clock className="w-6 h-6" />
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7E393F] block font-mono">
            Office Schedule
          </p>
          <h3 className="text-lg font-bold text-[#2B1203] font-space mt-1 mb-2">
            Office Hours
          </h3>
          <div className="text-xs text-[#514646] leading-relaxed mb-2 space-y-1">
            <p className="font-semibold text-[#2B1203]">Monday To Saturday - 10.00 - 07.00</p>
            <p className="text-[#A61A28] font-medium">Sunday - Closed</p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#6E2C00]/10 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Sunday - Closed</p>
          <p className="text-xs font-bold text-[#64691D]">Working Days</p>
        </div>
      </div>
    </div>
  );
};
