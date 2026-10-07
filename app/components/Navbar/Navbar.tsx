"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Sprout, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/app/constants/navigation";
import { MobileNav } from "./MobileNav";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

 
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Track scroll position for subtle background enhancement on scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled((prev) => {
            const next = window.scrollY > 40;
            return prev !== next ? next : prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const isItemActive = (href: string, children?: { href: string }[]) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    if (href === "/nitrofix" && (pathname === "/nitrofix" || pathname.startsWith("/products"))) return true;
    if (children?.some((c) => pathname === c.href || pathname.startsWith("/products"))) return true;
    return false;
  };



  return (
    <>
      <header
        className={`absolute top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="w-full bg-gradient-to-r from-emerald-500/60 via-emerald-400 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 md:py-2">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo-white.png"
              alt="Farm Health Innovations"
              width={140}
              height={36}
              priority
              className="h-7 md:h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isItemActive(item.href, item.children);

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`relative inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 font-space cursor-pointer py-2 ${
                        active || isDropdownOpen
                          ? "text-emerald-300 font-bold"
                          : "text-white/85 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                      }`}
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-emerald-400" : "text-white/60"
                        }`}
                      />
                      {active && (
                        <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]" />
                      )}
                    </button>

                    {/* Dropdown Menu Panel */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-emerald-500/30 p-2 shadow-2xl ring-1 ring-white/10">
                          <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase text-emerald-400/80 tracking-wider">
                            Proprietary Innovations
                          </div>

                          <div className="space-y-1">
                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setIsDropdownOpen(false)}
                                  className={`group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                                    isChildActive
                                      ? "bg-emerald-500/20 border border-emerald-400/40 text-white"
                                      : "hover:bg-white/10 text-slate-200 hover:text-white"
                                  }`}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors">
                                    <Sprout className="w-4 h-4" />
                                  </div>

                                  <div className="flex-1 space-y-0.5">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-sm font-bold font-space text-white group-hover/item:text-emerald-300 transition-colors">
                                        {child.label}
                                      </span>
                                      {child.badge && (
                                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                    {child.description && (
                                      <p className="text-[11px] text-slate-300 font-work-sans leading-tight line-clamp-2">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>

                                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-emerald-300 group-hover/item:translate-x-0.5 transition-all self-center" />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors duration-150 font-space py-2 ${
                    active
                      ? "text-emerald-300 font-bold"
                      : "text-white/85 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all border border-white/20 backdrop-blur-md active:scale-95 cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
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
