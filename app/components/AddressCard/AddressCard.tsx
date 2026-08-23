import React from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { LAB_CONTACT_INFO } from "@/app/constants/navigation";

export interface AddressCardProps {
  title?: string;
  email?: string;
  organization?: string;
  addressLines?: string[];
  phone?: string;
  hoursTitle?: string;
  hours?: string;
  className?: string;
}

export const AddressCard = ({
  title = LAB_CONTACT_INFO.title,
  email = LAB_CONTACT_INFO.email,
  organization = LAB_CONTACT_INFO.organization,
  addressLines = LAB_CONTACT_INFO.addressLines,
  phone = LAB_CONTACT_INFO.phone,
  hoursTitle = LAB_CONTACT_INFO.hoursTitle,
  hours = LAB_CONTACT_INFO.hours,
  className = "",
}: AddressCardProps): React.ReactElement => {
  return (
    <div
      className={`bg-white p-7 space-y-6 text-gray-900 border border-gray-300 ${className}`}
    >
      {/* ── Title ─────────────────────────────────────────── */}
      <div className="border-b border-gray-200 pb-3">
        <h3 className="font-bold text-xl text-[#1b4332] tracking-tight">
          {title}
        </h3>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">
          {organization}
        </p>
      </div>

      {/* ── Details List with Unified Theme Color Icon Badges ── */}
      <div className="space-y-5">
        {/* Email */}
        <div className="flex items-center gap-3.5 pb-3 border-b border-gray-100">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#1b4332] flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-gray-500">Email Us</p>
            <a
              href={`mailto:${email}`}
              className="text-[#1b4332] font-semibold text-sm hover:underline transition-colors block break-words"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Location Address */}
        <div className="flex items-start gap-3.5 pb-3 border-b border-gray-100">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#1b4332] flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-gray-500">Campus Location</p>
            <address className="not-italic text-sm text-gray-800 leading-snug font-medium pt-0.5">
              {addressLines.map((line, idx) => (
                <p key={idx} className={idx === 0 ? "font-bold text-gray-950" : ""}>
                  {line}
                </p>
              ))}
            </address>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3.5 pb-3 border-b border-gray-100">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#1b4332] flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-gray-500">Contact Number</p>
            <p className="text-sm font-bold text-gray-950">{phone}</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#1b4332] flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-gray-500">{hoursTitle}</p>
            <p className="text-sm text-gray-800 font-bold">{hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
