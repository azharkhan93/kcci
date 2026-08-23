"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Satellite } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research Projects", href: "/research-projects" },
  { label: "Lab Members", href: "/lab-members" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = (): React.ReactElement => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="absolute top-0 inset-x-0 z-50 w-full bg-black/45 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10">
      <div className="w-full h-[2.5px] bg-gradient-to-r from-[#1b4332] via-[#059669] to-[#10b981]" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 rounded-lg bg-[#1b4332] text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
            <Satellite className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-white leading-none group-hover:text-emerald-400 transition-colors">
            Remote Sensing &amp; GIS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                href={href}
                className={`relative py-1 text-xs sm:text-sm font-semibold transition-colors duration-150 ${
                  active ? "text-emerald-400 font-bold" : "text-gray-200 hover:text-emerald-300"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-emerald-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden p-1.5 rounded-lg text-gray-200 hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav (Dark Glassmorphic) */}
      {isOpen && (
        <div className="md:hidden bg-black/85 backdrop-blur-2xl border-t border-white/10 px-4 py-3 space-y-1 shadow-2xl">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                  active
                    ? "bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-bold"
                    : "text-gray-200 hover:bg-white/10 hover:text-emerald-300"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
