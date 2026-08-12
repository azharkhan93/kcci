"use client";

import React from "react";
import {
  FileDown,
  CreditCard,
  ClipboardCheck,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/app/components/Button";
import { useNavigation } from "@/app/context/NavigationContext";

export interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Know which tests you want to order?",
  subtitle = "Download the sample submission forms for each test and submit your samples today.",
  className = "",
}) => {
  const { setActiveHref, showPayComingSoon, openBookingModal } =
    useNavigation();

  return (
    <section
      className={`bg-purple-50/70 p-6 sm:p-8 md:p-10 rounded-2xl border border-purple-200/90 w-full space-y-4 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#582c83] text-white flex items-center justify-center shadow-xs flex-shrink-0">
          <ClipboardCheck className="w-5 h-5 text-amber-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#582c83] tracking-tight">
          {title}
        </h2>
      </div>

      <p className="text-purple-900/90 italic text-base sm:text-lg max-w-3xl leading-relaxed">
        {subtitle}
      </p>

      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2">
        <Button
          variant="primary"
          size="sm"
          icon={<CalendarCheck className="w-4 h-4 text-amber-300" />}
          onClick={() => openBookingModal()}
          className="text-xs sm:text-sm py-2 px-3 sm:px-4"
        >
          Book Tests Online
        </Button>

        <Button
          variant="secondary"
          size="sm"
          icon={<FileDown className="w-4 h-4 text-white" />}
          onClick={() => setActiveHref("/forms")}
          className="text-xs sm:text-sm py-2 px-3 sm:px-4"
        >
          Get the Forms
        </Button>

        <Button
          variant="outline"
          size="sm"
          icon={<CreditCard className="w-4 h-4 text-[#d99b26]" />}
          onClick={() => showPayComingSoon()}
          className="col-span-2 sm:col-span-1 text-xs sm:text-sm py-2 px-3 sm:px-4 relative group"
        >
          <span>Pay Online</span>
          <span className="ml-1.5 px-1.5 py-0.5 text-[10px] sm:text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
            Coming Soon
          </span>
        </Button>
      </div>
    </section>
  );
};
