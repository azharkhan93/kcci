"use client";

import React from "react";
import Link from "next/link";
import {
  Sprout,
  FlaskConical,
  Wheat,
  Droplet,
  Leaf,
  FileText,
  LucideIcon,
} from "lucide-react";
import type { ServiceItem } from "@/app/constants/navigation";
import { useNavigation } from "@/app/context/NavigationContext";

export interface ServiceCardProps {
  item?: ServiceItem;
  title?: string;
  description?: string;
  linkText?: string;
  href?: string;
  iconName?: ServiceItem["iconName"];
  customIcon?: React.ReactNode;
  className?: string;
}

const iconMap: Record<NonNullable<ServiceItem["iconName"]>, LucideIcon> = {
  sprout: Sprout,
  flask: FlaskConical,
  wheat: Wheat,
  droplet: Droplet,
  leaf: Leaf,
  fileText: FileText,
};

export const ServiceCard = ({
  item,
  title,
  description,
  linkText,
  href,
  iconName,
  customIcon,
  className = "",
}: ServiceCardProps): React.ReactElement => {
  const cardTitle = title || item?.title || "Soil Analysis";
  const cardDesc = description || item?.description || "";
  const cardLinkText = linkText || item?.linkText || "Learn more";
  const cardHref = href || item?.href || "#";
  const cardIconName = iconName || item?.iconName || "sprout";

  const IconComponent = iconMap[cardIconName] || Sprout;

  let navSetActiveHref: ((href: string) => void) | undefined;
  try {
    const nav = useNavigation();
    navSetActiveHref = nav.setActiveHref;
  } catch {
    // Fallback if rendered outside NavigationProvider
  }

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navSetActiveHref && cardHref && cardHref !== "#") {
      navSetActiveHref(cardHref);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <article
      className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-4 border-b border-gray-100 last:border-b-0 w-full ${className}`}
    >
      {/* ── Compact Circular Icon Badge ───────────────────────── */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 border-[#d99b26] flex items-center justify-center flex-shrink-0 bg-white shadow-xs p-3">
        {customIcon ? (
          customIcon
        ) : (
          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#1b4332] stroke-[1.75]" />
        )}
      </div>

      {/* ── Text Content Block (Expands to Full Width) ────────── */}
      <div className="flex-1 min-w-0 space-y-1.5 w-full">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1b4332] tracking-tight">
          {cardTitle}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-normal w-full">
          {cardDesc}
        </p>
        <div className="pt-0.5">
          <a
            href={cardHref}
            onClick={handleLinkClick}
            className="inline-flex items-center gap-1 text-[#1b4332] font-bold text-sm sm:text-base hover:text-[#081c15] transition-colors group cursor-pointer"
          >
            <span>{cardLinkText}</span>
            <span className="text-[#d99b26] font-normal group-hover:translate-x-1 transition-transform">
              ›
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};
