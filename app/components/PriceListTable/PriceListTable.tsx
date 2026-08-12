"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Clock,
  FlaskConical,
  Sprout,
  Droplets,
  Leaf,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import {
  ALL_TESTS_MASTER_LIST,
  SoilTest,
} from "@/app/constants/navigation";
import { useNavigation } from "@/app/context/NavigationContext";

export interface PriceListTableProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const CATEGORIES = [
  { id: "all", label: "All Tests", icon: Filter },
  { id: "Soil Analysis", label: "Soil Analysis", icon: Sprout },
  { id: "Research Soil", label: "Research Soil", icon: FlaskConical },
  { id: "Water Analysis", label: "Water Analysis", icon: Droplets },
  { id: "Leaf / Tissue", label: "Leaf & Tissue", icon: Leaf },
];

export const PriceListTable: React.FC<PriceListTableProps> = ({
  title = "Official Soil & Sample Analysis Price List",
  subtitle = "Standard testing fees approved by Division of Soil Science & Agricultural Chemistry, SKUAST-Kashmir.",
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  let navOpenBooking: ((testName?: string) => void) | undefined;
  try {
    const nav = useNavigation();
    navOpenBooking = nav.openBookingModal;
  } catch {
    // fallback
  }

  const filteredTests = useMemo(() => {
    return ALL_TESTS_MASTER_LIST.filter((test) => {
      const matchesCategory =
        selectedCategory === "all" || test.category === selectedCategory;
      const matchesSearch =
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className={`space-y-6 w-full ${className}`}>
      {/* Table Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#582c83] tracking-tight">
              {title}
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              FY 2026 Rate Card
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-1 max-w-3xl">{subtitle}</p>
        </div>
      </div>

      {/* Controls Bar: Category Tabs + Search Input */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-gray-50/80 p-3 rounded-2xl border border-gray-200">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === id
                  ? "bg-[#582c83] text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72 flex-shrink-0">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search test name or parameter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-xl text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#582c83]/20 focus:border-[#582c83]"
          />
        </div>
      </div>

      {/* Price Table View */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-purple-950 text-white text-xs font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4 font-semibold">Test Name & Parameters</th>
                <th className="py-3.5 px-4 font-semibold">Sample Required</th>
                <th className="py-3.5 px-4 font-semibold">Turnaround</th>
                <th className="py-3.5 px-4 font-semibold text-right">Testing Fee</th>
                <th className="py-3.5 px-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredTests.length > 0 ? (
                filteredTests.map((test) => (
                  <tr
                    key={test.name}
                    className="hover:bg-purple-50/40 transition-colors group"
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-gray-900 text-sm group-hover:text-[#582c83] transition-colors">
                        {test.name}
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5 line-clamp-2">
                        {test.description}
                      </p>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-xs text-gray-600 font-medium">
                      {test.sampleRequired || "Standard Sample"}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-xs text-gray-600">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 font-medium border border-gray-200">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {test.turnaroundTime || "2-3 Days"}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-right">
                      <span className="text-sm font-extrabold text-[#582c83] bg-purple-100/90 px-3 py-1 rounded-full border border-purple-200">
                        {test.price || "₹250"}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => navOpenBooking?.(test.name)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#582c83] hover:bg-[#452267] text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                      >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        <span>Book</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500 text-sm">
                    No matching tests found for "{searchQuery}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
