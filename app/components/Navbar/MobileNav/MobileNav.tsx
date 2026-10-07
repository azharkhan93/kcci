"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Mail, Phone, ChevronDown, Sprout } from "lucide-react";
import { NAV_ITEMS, LAB_CONTACT_INFO } from "@/app/constants/navigation";

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
  const [productsExpanded, setProductsExpanded] = useState(true);

  if (!isOpen) return null;

  const isItemActive = (href: string, children?: { href: string }[]) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    if (href === "/nitrofix" && (pathname === "/nitrofix" || pathname.startsWith("/products"))) return true;
    if (children?.some((c) => pathname === c.href || pathname.startsWith("/products"))) return true;
    return false;
  };



  return (
    <div className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 md:hidden">
      {/* Top Header */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <Image
            src="/logo.png"
            alt="Farm Health Innovations"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 px-6 py-6 flex flex-col justify-center space-y-1">
        {NAV_ITEMS.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const active = isItemActive(item.href, item.children);

          if (hasChildren) {
            return (
              <div key={item.label} className="border-b border-slate-100 py-2">
                <div className="flex items-center justify-between py-2">
                  <span className="text-xl font-semibold tracking-tight text-slate-800">
                    {item.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => setProductsExpanded((prev) => !prev)}
                    className="p-1 text-slate-500 hover:text-slate-800"
                    aria-label="Toggle products submenu"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        productsExpanded ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                </div>

                {productsExpanded && (
                  <div className="pl-3 pr-1 py-2 space-y-2">
                    {item.children?.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                            isChildActive
                              ? "bg-emerald-50 border border-emerald-300 text-[#1b4332]"
                              : "bg-slate-50 border border-slate-200/80 text-slate-800 hover:bg-emerald-50/50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Sprout className="w-4 h-4" />
                          </div>
                          <div className="flex-1 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base font-bold font-space">
                                {child.label}
                              </span>
                              {child.badge && (
                                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold uppercase bg-emerald-600 text-white">
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            {child.description && (
                              <p className="text-xs text-slate-600 font-work-sans">
                                {child.description}
                              </p>
                            )}
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
              className={`group flex items-center justify-between py-3.5 border-b border-slate-100 transition-all ${
                active
                  ? "text-[#1b4332] font-extrabold"
                  : "text-slate-800 hover:text-[#1b4332] font-semibold"
              }`}
            >
              <span className="text-xl tracking-tight">{item.label}</span>
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  active
                    ? "bg-[#1b4332] scale-125"
                    : "bg-transparent group-hover:bg-slate-300"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions & Contact */}
      <div className="p-6 border-t border-slate-100 bg-slate-50/70 space-y-4">
        <div className="flex flex-col gap-1.5 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>admin@farmhealth.in</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>+91 94038 90112</span>
          </div>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="w-full py-3.5 px-4 rounded-xl bg-[#1b4332] hover:bg-[#081c15] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
        >
          <span>Inquire &amp; Contact Us</span>
          <ArrowRight className="w-4 h-4 text-emerald-300" />
        </Link>
      </div>
    </div>
  );
};
