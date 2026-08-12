"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sprout,
  FlaskConical,
  Wheat,
  Droplet,
  Leaf,
  Sparkles,
  Info,
  FileText,
  BarChart3,
  Apple,
  Flower2,
  Wrench,
  LucideIcon,
  Menu,
  ChevronDown,
} from "lucide-react";
import { AddressCard } from "../AddressCard";
import type { NavSection } from "@/app/constants/navigation";
import { useNavigation } from "@/app/context/NavigationContext";

export type { NavSection };

export interface SidebarProps {
  sections: NavSection[];
  activeHref?: string;
  activeSection?: string;
  maxNavHeight?: string;
  showAddressCard?: boolean;
  onSelectTab?: (href: string) => void;
  className?: string;
}

const navIconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  flask: FlaskConical,
  wheat: Wheat,
  droplet: Droplet,
  leaf: Leaf,
  sparkles: Sparkles,
  info: Info,
  fileText: FileText,
  barChart: BarChart3,
  apple: Apple,
  flower: Flower2,
  wrench: Wrench,
};

export const Sidebar = ({
  sections,
  activeHref: propActiveHref,
  activeSection = "Lab Overview",
  maxNavHeight = "max-h-[600px]",
  showAddressCard = true,
  onSelectTab,
  className = "",
}: SidebarProps): React.ReactElement => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  let navActiveHref = propActiveHref;
  let navSetActiveHref: ((href: string) => void) | undefined;

  try {
    const nav = useNavigation();
    navActiveHref = nav.activeHref;
    navSetActiveHref = nav.setActiveHref;
  } catch {
    // Fallback if rendered outside NavigationProvider
  }

  const currentActiveHref = navActiveHref ?? propActiveHref ?? "/";

  // Find currently active link label for mobile toggle display
  let currentActiveLabel = "Lab Overview";
  sections.forEach((sec) => {
    if (sec.links) {
      const match = sec.links.find((l) => l.href === currentActiveHref);
      if (match) currentActiveLabel = match.label;
    }
  });

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (navSetActiveHref) {
      navSetActiveHref(href);
    }
    if (onSelectTab) {
      onSelectTab(href);
    }
    setMobileOpen(false); // Close mobile menu after selection
  };

  return (
    <>
      {/* ── Mobile Overlay Backdrop (Closes menu when clicking outside) ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-2xs md:hidden animate-in fade-in duration-150"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`w-full md:w-72 lg:w-80 flex-shrink-0 flex flex-col gap-4 py-4 md:py-8 md:sticky md:top-6 self-start relative z-40 md:z-auto ${className}`}
      >
        {/* ── Mobile Navigation Toggle Button (< md) ───────────── */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-between bg-[#582c83] text-white px-4 py-3 rounded-2xl shadow-md cursor-pointer transition-all active:scale-[0.99]"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Menu className="w-5 h-5 text-amber-300 flex-shrink-0" />
            <div className="text-left min-w-0">
              <span className="text-[10px] uppercase font-bold text-purple-200 block tracking-wider">
                Lab Navigation
              </span>
              <span className="font-bold text-sm truncate block">
                {currentActiveLabel}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-xl text-xs font-semibold flex-shrink-0">
            <span>{mobileOpen ? "Close" : "Menu"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* ── Floating Overlay Navigation Container on Mobile (< md) / Static Sidebar on Desktop (md+) ── */}
        <div
          className={`${
            mobileOpen ? "block" : "hidden md:block"
          } absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-purple-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-50 slide-in-from-top-2 duration-200 max-h-[75vh] overflow-y-auto custom-scrollbar md:static md:z-auto md:mt-0 md:bg-transparent md:border-none md:rounded-none md:shadow-none md:max-h-none md:overflow-visible`}
        >
          <div className="bg-white border border-gray-300 md:rounded-none flex flex-col overflow-hidden">
            <nav
              className={`flex flex-col ${maxNavHeight} overflow-y-auto custom-scrollbar`}
            >
              {sections.map((section, sectionIdx) => {
                const hasLinks = section.links && section.links.length > 0;
                const isSectionActive =
                  (section.href &&
                    (currentActiveHref === section.href ||
                      (section.href === "/" &&
                        (currentActiveHref === "/" ||
                          currentActiveHref === "overview")))) ||
                  activeSection === section.title;

                return (
                  <div
                    key={section.title}
                    className={`flex flex-col ${
                      sectionIdx > 0 ? "border-t-2 border-gray-300" : ""
                    }`}
                  >
                    {/* Section Title — clickable if href is set */}
                    {section.href ? (
                      <a
                        href={section.href}
                        onClick={(e) => handleLinkClick(e, section.href!)}
                        className={`px-5 md:px-6 py-3.5 md:py-4 border-b border-gray-300 sticky top-0 z-10 flex items-center justify-between transition-colors cursor-pointer ${
                          isSectionActive
                            ? "bg-[#582c83] text-white"
                            : "bg-gray-100 hover:bg-purple-50"
                        }`}
                      >
                        <h2
                          className={`font-bold text-base md:text-lg tracking-tight ${
                            isSectionActive ? "text-white" : "text-[#582c83]"
                          }`}
                        >
                          {section.title}
                        </h2>
                      </a>
                    ) : (
                      <div
                        className={`px-5 md:px-6 py-3.5 md:py-4 border-b border-gray-300 sticky top-0 z-10 transition-colors ${
                          isSectionActive ? "bg-[#582c83]" : "bg-gray-100"
                        }`}
                      >
                        <h2
                          className={`font-bold text-base md:text-lg tracking-tight ${
                            isSectionActive ? "text-white" : "text-[#582c83]"
                          }`}
                        >
                          {section.title}
                        </h2>
                      </div>
                    )}

                    {/* Section Nav Links with Icons & Bottom Borders */}
                    {hasLinks && (
                      <ul className="flex flex-col">
                        {section.links!.map((link) => {
                          const isActive = currentActiveHref === link.href;
                          const IconComp = link.iconName
                            ? navIconMap[link.iconName]
                            : null;

                          return (
                            <li
                              key={link.href}
                              className="border-b border-gray-200 last:border-b-0"
                            >
                              <Link
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`flex items-center gap-3 px-5 md:px-6 py-3 text-sm md:text-base transition-all duration-150 cursor-pointer ${
                                  isActive
                                    ? "font-bold text-[#582c83] bg-purple-50/90 border-l-4 border-[#582c83] pl-4 md:pl-5"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#582c83]"
                                }`}
                              >
                                {IconComp && (
                                  <IconComp
                                    className={`w-4 h-4 flex-shrink-0 ${
                                      isActive ? "text-[#582c83]" : "text-gray-400"
                                    }`}
                                  />
                                )}
                                <span>{link.label}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Separate Address / Contact Details Block (Desktop sidebar) */}
          {showAddressCard && (
            <div className="hidden md:block mt-4">
              <AddressCard />
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
