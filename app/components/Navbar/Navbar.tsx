"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { NAV_ITEMS } from "@/app/constants/navigation";
import { MegaDropdown } from "./MegaDropdown";
import { MobileNav } from "./MobileNav";
import { NavbarSearch } from "./NavbarSearch";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(
    null
  );
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setOpenDropdownLabel(null);
  }

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleOpenDropdown = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdownLabel(label);
  };

  const handleScheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdownLabel(null);
    }, 150);
  };

  const isItemActive = (
    href: string,
    subItems?: { href: string }[]
  ): boolean => {
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
    <>
      <header className="absolute top-0 inset-x-0 z-50 w-full bg-gradient-to-b from-[#1A0B06]/65 via-[#1A0B06]/25 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 py-2 md:py-2.5">
          {/* Left: KCCI Brand Logo */}
          <div className="justify-self-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group px-2 py-1 rounded-xl bg-[#1A0B06]/55 backdrop-blur-md border border-[#41D6BD]/30 shadow-md transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/logokcci-clear.png"
                alt="The Kashmir Chamber of Commerce & Industry (INC)"
                width={64}
                height={60}
                preload
                className="h-9 md:h-11 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center justify-self-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const hasSubItems = Boolean(item.subItems?.length);
              const active = isItemActive(item.href, item.subItems);
              const isDropdownOpen = openDropdownLabel === item.label;

              if (hasSubItems && item.subItems) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleOpenDropdown(item.label)}
                    onMouseLeave={handleScheduleClose}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdownLabel((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      aria-expanded={isDropdownOpen}
                      className={`relative inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 font-space py-2 cursor-pointer ${
                        active || isDropdownOpen
                          ? "text-[#FFD37C] font-bold"
                          : "text-white/85 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,211,124,0.45)]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen
                            ? "rotate-180 text-[#FFD37C]"
                            : "text-white/70"
                        }`}
                      />
                      {active && (
                        <div
                          aria-hidden="true"
                          className="absolute -bottom-1 inset-x-0 h-[2px] bg-[#FFD37C] rounded-full shadow-[0_0_8px_#FFD37C]"
                        />
                      )}
                    </button>

                    <MegaDropdown
                      isOpen={isDropdownOpen}
                      items={item.subItems}
                      pathname={pathname}
                      onClose={() => setOpenDropdownLabel(null)}
                      headerTitle={item.headerTitle}
                      headerSubtitle={item.headerSubtitle}
                      width={580}
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors duration-150 font-space py-2 ${
                    active
                      ? "text-[#FFD37C] font-bold"
                      : "text-white/85 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,211,124,0.45)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-1 inset-x-0 h-[2px] bg-[#FFD37C] rounded-full shadow-[0_0_8px_#FFD37C]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right End: Reusable Search + Mobile Menu Toggle */}
          <div className="flex items-center justify-end md:justify-self-end gap-2">
            <NavbarSearch />

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all border border-white/20 backdrop-blur-md active:scale-95 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Dedicated Modular Mobile Navigation Component */}
      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pathname={pathname}
      />
    </>
  );
};
