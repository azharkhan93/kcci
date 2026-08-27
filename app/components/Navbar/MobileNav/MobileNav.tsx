"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Mail, Phone } from "lucide-react";
import { NAV_ITEMS, LAB_CONTACT_INFO } from "@/app/constants/navigation";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, pathname }) => {
  if (!isOpen) return null;

  const isActive = (href: string) =>
    href === "/contact" ? pathname === "/contact" : pathname === "/" && href === "/#hero";

  return (
    <div className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 md:hidden">
      {/* Top Header */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <Image
            src="/farm2i.svg"
            alt="Farm2i"
            width={120}
            height={32}
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
      <nav className="flex-1 px-6 py-8 flex flex-col justify-center space-y-1">
        {NAV_ITEMS.map(({ label, href }) => {
          const active = isActive(href);

          return (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className={`group flex items-center justify-between py-3.5 border-b border-slate-100 transition-all ${
                active ? "text-[#1b4332] font-extrabold" : "text-slate-800 hover:text-[#1b4332] font-semibold"
              }`}
            >
              <span className="text-xl tracking-tight">{label}</span>
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  active ? "bg-[#1b4332] scale-125" : "bg-transparent group-hover:bg-slate-300"
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
            <span>support@farm2i.com</span>
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
