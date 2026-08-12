"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Truck,
  Sprout,
  Mountain,
  Wheat,
  Droplets,
  LucideIcon,
  Filter,
  Download,
} from "lucide-react";
import { SAMPLE_FORMS_DATA } from "@/app/constants/navigation";
import { Button } from "@/app/components/Button";
import { PriceListTable } from "@/app/components/PriceListTable";

const iconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  mountain: Mountain,
  wheat: Wheat,
  droplets: Droplets,
};

const FORM_CATEGORIES = [
  { id: "all", label: "All Forms", icon: Filter },
  { id: "Soil Test Forms", label: "Soil Analysis", icon: Sprout },
  { id: "Lime Analysis Forms", label: "Lime Analysis", icon: Mountain },
  {
    id: "Plant, Forage, & Grain Analysis Forms",
    label: "Plant & Leaf",
    icon: Wheat,
  },
  { id: "Water Analysis Forms", label: "Water Analysis", icon: Droplets },
];

export const GetFormsPage = (): React.ReactElement => {
  const [selectedFormCategory, setSelectedFormCategory] =
    useState<string>("all");

  const {
    title,
    subtitle,
    shippingPrompt,
    shippingBtnText,
    shippingHref,
    categories,
  } = SAMPLE_FORMS_DATA;

  const filteredCategories = categories.filter(
    (catGroup) =>
      selectedFormCategory === "all" ||
      catGroup.category === selectedFormCategory
  );

  return (
    <main className="flex-1 min-w-0 bg-white px-3 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 w-full space-y-12">
      {/* ── 1. Page Title & Intro Header ─────────────────────────── */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#582c83] tracking-tight">
          {title}
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl">
          {subtitle}
        </p>
      </div>

      {/* ── 2. Official Analysis Price List & Rates (Top Priority Alignment) ── */}
      <section className="space-y-6">
        <PriceListTable />
      </section>

      {/* ── 3. Downloadable Submission Forms (Minimal & Filterable Grid) ── */}
      <section className="space-y-6 border-t border-gray-200 pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Download Test Submission Forms
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Select your test category below to download official sample order sheets in PDF format.
            </p>
          </div>
        </div>

        {/* Form Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-gray-50/80 p-2 rounded-2xl border border-gray-200">
          {FORM_CATEGORIES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedFormCategory(id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedFormCategory === id
                  ? "bg-[#582c83] text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Minimal Form Cards Grid */}
        <div className="space-y-6">
          {filteredCategories.map((catGroup) => {
            const CategoryIcon = iconMap[catGroup.iconName] ?? FileText;

            return (
              <div key={catGroup.category} className="space-y-3">
                <div className="flex items-center gap-2 pt-1">
                  <CategoryIcon className="w-4 h-4 text-[#582c83]" />
                  <h3 className="font-bold text-gray-900 text-base">
                    {catGroup.category}
                  </h3>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {catGroup.forms.length} PDF(s)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {catGroup.forms.map((form) => (
                    <Link
                      key={form.title}
                      href={form.href}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200/90 hover:border-purple-300 hover:bg-purple-50/40 transition-all duration-150 group bg-white shadow-2xs"
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#582c83] flex items-center justify-center flex-shrink-0 group-hover:bg-[#582c83] group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm leading-snug group-hover:text-[#582c83] transition-colors truncate">
                            {form.title}
                          </h4>
                          <span className="text-[11px] text-gray-400 font-medium">
                            {form.category} • Official PDF Form
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 group-hover:bg-[#582c83] text-gray-700 group-hover:text-white text-xs font-bold transition-all flex-shrink-0">
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Download</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 4. Shipping & Courier Logistics (Clean Bottom Section) ───── */}
      <section className="bg-purple-50/70 border border-purple-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#582c83] flex items-center justify-center flex-shrink-0 shadow-xs">
            <Truck className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#582c83] uppercase tracking-widest">
              Shipping & Courier Dispatch
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
              {shippingPrompt}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
              Generate a pre-addressed courier shipping label to send your prepared samples directly to SKUAST-K Kashmir Lab.
            </p>
          </div>
        </div>

        <a
          href={shippingHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-full sm:w-auto"
        >
          <Button
            variant="secondary"
            size="md"
            icon={<Truck className="w-4 h-4 text-white" />}
            className="w-full sm:w-auto text-xs"
          >
            {shippingBtnText}
          </Button>
        </a>
      </section>
    </main>
  );
};
