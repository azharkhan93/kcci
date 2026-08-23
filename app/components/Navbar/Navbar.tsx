"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Satellite, ChevronRight, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { LAB_CONTACT_INFO } from "@/app/constants/navigation";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", description: "Lab overview & precision soil research" },
  { label: "About", href: "/about", description: "Mission, team vision & core facilities" },
  { label: "Research Projects", href: "/research-projects", description: "Field trials, D-RAP & UAV mapping" },
  { label: "Lab Members", href: "/lab-members", description: "Principal investigators, PhDs & staff" },
  { label: "News & Events", href: "/news-events", description: "Workshops, symposiums & bulletins" },
  { label: "Contact", href: "/contact", description: "Sample intake, inquiries & directions" },
];

export const Navbar = (): React.ReactElement => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
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

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 active:scale-95"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── Full Width & Full Height Premium Mobile Drawer ── */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-black/95 backdrop-blur-3xl flex flex-col justify-between overflow-y-auto animate-in fade-in zoom-in-95 duration-200 md:hidden">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1b4332]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar inside Drawer */}
          <div className="relative z-10 w-full px-5 py-4 flex items-center justify-between border-b border-white/10 bg-black/40">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1b4332] text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Satellite className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-tight text-white leading-none">
                  GIS SOIL SCIENCE LAB
                </span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mt-0.5">
                  Remote Sensing &amp; GIS
                </span>
              </div>
            </Link>

           
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links List */}
          <div className="relative z-10 flex-1 px-5 py-6 space-y-2.5 overflow-y-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400/80 px-2 mb-2">
              Navigation Menu
            </p>

            {NAV_ITEMS.map(({ label, href, description }, index) => {
              const active = isActive(href);
              const num = String(index + 1).padStart(2, "0");

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-200 border ${
                    active
                      ? "bg-gradient-to-r from-emerald-950/70 to-[#1b4332]/50 border-emerald-500/40 text-white shadow-lg shadow-emerald-950/40"
                      : "bg-white/[0.04] border-white/5 text-gray-200 hover:bg-white/[0.08] hover:border-white/15 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        active
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                          : "bg-white/5 text-gray-400 group-hover:text-emerald-400"
                      }`}
                    >
                      {num}
                    </span>
                    <div className="min-w-0">
                      <span className={`block text-base font-bold leading-tight ${active ? "text-emerald-300 font-extrabold" : "text-white"}`}>
                        {label}
                      </span>
                      {description && (
                        <span className="block text-[11px] text-gray-400 truncate mt-0.5 group-hover:text-gray-300">
                          {description}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                    active
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-white/5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5"
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Drawer Footer with Quick Contact & Action */}
          <div className="relative z-10 p-5 border-t border-white/10 bg-black/60 space-y-3.5">
            <div className="flex flex-col gap-1.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="truncate">{LAB_CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-[11px] text-gray-400">SKUAST-K Shalimar Campus, Srinagar</span>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#1b4332] via-[#059669] to-[#10b981] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 active:scale-[0.98] transition-transform"
            >
              <span>Inquire &amp; Drop-off Samples</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
