"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/app/constants/navigation";
import { MobileNav } from "./MobileNav";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Automatically close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/contact" ? pathname === "/contact" : pathname === "/" && href === "/#hero";

  return (
    <>
      <header className="absolute top-0 inset-x-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-slate-200/80">
        <div className="w-full h-[2.5px] bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#52b788]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
          {/* Farm2i SVG Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/farm2i.svg"
              alt="Farm2i"
              width={120}
              height={36}
              priority
              className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  className={`relative py-1 text-xs sm:text-sm font-semibold transition-colors duration-150 ${
                    active ? "text-[#1b4332] font-bold" : "text-slate-600 hover:text-[#1b4332]"
                  }`}
                >
                  {label}
                  {active && <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-[#1b4332] rounded-full" />}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all border border-slate-200 active:scale-95 cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Dedicated Modular Mobile Navigation Component */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} pathname={pathname} />
    </>
  );
};
