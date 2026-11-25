"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, ChevronDown, Globe, MapPin } from "lucide-react";
import { NAV_ITEMS } from "@/app/constants/navigation";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  pathname,
}) => {
  const [expandedLabel, setExpandedLabel] = useState<string | null>("About Us");

  if (!isOpen) return null;

  const isItemActive = (href: string, subItems?: { href: string }[]) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    if (subItems && subItems.length > 0) {
      return (
        pathname.startsWith(href) ||
        subItems.some((sub) => pathname.startsWith(sub.href))
      );
    }
    return pathname === href;
  };

  return (
    <div className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-[#FBF7F2] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 md:hidden">
      {/* Top Header */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-[#6E2C00]/15">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <Image
            src="/logokcci-dark.png"
            alt="The Kashmir Chamber of Commerce & Industry (INC)"
            width={56}
            height={53}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 rounded-full bg-[#F3EAE0] text-[#514646] hover:bg-[#E7D8C9] transition-colors cursor-pointer active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 px-6 py-6 flex flex-col justify-center space-y-1">
        {NAV_ITEMS.map((item) => {
          const hasSubItems = Boolean(item.subItems?.length);
          const active = isItemActive(item.href, item.subItems);
          const isExpanded = expandedLabel === item.label;

          if (hasSubItems && item.subItems) {
            return (
              <div key={item.label} className="border-b border-[#6E2C00]/15 py-2">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedLabel((prev) =>
                      prev === item.label ? null : item.label
                    )
                  }
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between py-2 text-left cursor-pointer"
                >
                  <p
                    className={`text-xl tracking-tight ${
                      active
                        ? "text-[#6E2C00] font-extrabold"
                        : "text-[#514646] font-semibold"
                    }`}
                  >
                    {item.label}
                  </p>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#A61A28]" : "text-[#514646]/70"
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pt-2 pb-1 space-y-2.5">
                    {item.subItems.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={onClose}
                          className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${
                            isSubActive
                              ? "bg-[#6E2C00]/10 border-[#7E393F]/45"
                              : "bg-[#F3EAE0]/75 border-[#6E2C00]/15 hover:border-[#BB5D0E]/45"
                          }`}
                        >
                          <div
                            role="img"
                            aria-label={sub.imageAlt}
                            className="w-14 h-12 rounded-lg shrink-0 bg-[#2B1203]"
                            style={{
                              backgroundImage: `url("${sub.imageSrc}")`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          />
                          <div className="min-w-0 flex-1 space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-sm font-bold font-space text-[#2B1203] truncate">
                                {sub.label}
                              </h4>
                              {sub.badge && (
                                <h6 className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase bg-[#6E2C00] text-[#FFD37C] shrink-0">
                                  {sub.badge}
                                </h6>
                              )}
                            </div>
                            <p className="text-[11px] text-[#514646] font-work-sans leading-snug line-clamp-2">
                              {sub.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`group flex items-center justify-between py-3.5 border-b border-[#6E2C00]/15 transition-all ${
                active
                  ? "text-[#6E2C00] font-extrabold"
                  : "text-[#514646] hover:text-[#6E2C00] font-semibold"
              }`}
            >
              <p className="text-xl tracking-tight">{item.label}</p>
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  active
                    ? "bg-[#A61A28] scale-125"
                    : "bg-transparent group-hover:bg-[#BB5D0E]/40"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions & Chamber Info */}
      <div className="p-6 border-t border-[#6E2C00]/15 bg-[#F3EAE0]/80 space-y-4">
        <div className="flex flex-col gap-1.5 text-xs text-[#514646]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#6E2C00]" />
            <p>Mohidin Trust Building, Residency Road, Srinagar</p>
          </div>
          <a
            href="https://thekcci.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#6E2C00] transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#6E2C00]" />
            <p>thekcci.in</p>
          </a>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="w-full py-3.5 px-4 rounded-xl bg-[#6E2C00] hover:bg-[#7E393F] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
        >
          Inquire &amp; Contact Us
          <ArrowRight className="w-4 h-4 text-[#FFD37C]" />
        </Link>
      </div>
    </div>
  );
};
