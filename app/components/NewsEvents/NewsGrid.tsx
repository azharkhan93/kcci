"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, Newspaper, Tag } from "lucide-react";
import { NewsArticle, NEWS_ARTICLES } from "@/app/constants/newsEvents";

export interface NewsGridProps {
  articles?: NewsArticle[];
  className?: string;
}

const CATEGORIES = ["All", "Research News", "Field Trials", "Publications", "Lab Milestones"] as const;

export const NewsGrid: React.FC<NewsGridProps> = ({
  articles = NEWS_ARTICLES,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className={`space-y-6 sm:space-y-8 ${className}`}>
      {/* ── Filter Bar & Search ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#1b4332] text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news & tags..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[#1b4332] focus:border-[#1b4332] transition-all"
          />
        </div>
      </div>

      {/* ── Articles Grid ── */}
      {filteredArticles.length === 0 ? (
        <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-8 text-center">
          <Newspaper className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-700">No announcements match your search.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-bold text-[#1b4332] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-[#1b4332]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1b4332] bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-2xs border border-gray-200/60">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-gray-950 group-hover:text-[#1b4332] transition-colors leading-snug mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-1 mb-2">
                    {article.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-200/50"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-mono">
                  {article.author}
                </span>
                <Link
                  href="/research-projects"
                  className="text-xs font-bold text-[#1b4332] hover:text-[#081c15] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
