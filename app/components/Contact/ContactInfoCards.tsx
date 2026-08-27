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
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2d6a4f] block">
            Headquarters
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
            Office Location
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900 block mb-1">
              {LAB_CONTACT_INFO.organization}
            </span>
            <span>{LAB_CONTACT_INFO.address}</span>
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Batamaloo, Srinagar</span>
          <a
            href="#lab-map"
            className="text-xs font-bold text-[#1b4332] hover:text-[#081c15] inline-flex items-center gap-1 group-hover:underline"
          >
            <span>View Map</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* ── Card 2: Direct Emails ── */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Mail className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2d6a4f] block">
            Official Inquiries
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
            Email Channels
          </h3>

          <div className="space-y-1.5 pt-1">
            {LAB_CONTACT_INFO.emails.map((email, idx) => (
              <div key={email} className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-xs font-semibold text-[#1b4332] hover:underline truncate font-mono"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(email, `email-${idx}`)}
                  className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors cursor-pointer"
                  title={`Copy ${email}`}
                >
                  {copiedKey === `email-${idx}` ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Response within 24h</span>
          <span className="text-xs font-bold text-emerald-600">Active</span>
        </div>
      </div>

      {/* ── Card 3: Phone Lines ── */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2d6a4f] block">
            Telephone Support
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
            Direct Helpdesk
          </h3>

          <div className="space-y-2 pt-1">
            {LAB_CONTACT_INFO.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#1b4332] hover:underline font-mono"
              >
                <span>{phone}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Customer Support</span>
          <span className="text-xs font-bold text-[#1b4332]">Call Mon–Sat</span>
        </div>
      </div>

      {/* ── Card 4: Operating Hours ── */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2d6a4f] block">
            Working Schedule
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
            Office Hours
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-2">
            <span className="font-semibold text-slate-900 block">Support Hours:</span>
            {LAB_CONTACT_INFO.hours}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Sunday: Closed</span>
          <span className="text-xs font-bold text-emerald-600">Open Now</span>
        </div>
      </div>
    </div>
  );
};
