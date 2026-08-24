"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { NewsArticle } from "@/app/constants/newsEvents";

export interface FeaturedArticleProps {
  article: NewsArticle;
  className?: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  article,
  className = "",
}) => {
  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-gray-200/80 bg-white shadow-xs hover:shadow-md transition-all duration-300 group ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left / Top Image Canvas */}
        <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden bg-gray-900">
          <Image
            src={article.imageSrc}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

          {/* Floating Badge - Simple text */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white bg-black/80 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#d99b26]" />
              <span>Spotlight Feature</span>
            </span>
          </div>
        </div>

        {/* Right / Bottom Content */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Meta category & Date */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">
              <span className="font-bold text-[#2d6a4f]">
                {article.category}
              </span>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 text-gray-500 font-medium normal-case">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.date}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 text-gray-500 font-medium normal-case">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight leading-snug group-hover:text-[#1b4332] transition-colors mb-3">
              {article.title}
            </h2>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              {article.summary}
            </p>

            {/* Tags - Simple text format */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6 text-xs text-gray-500 font-medium">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author & Action Link */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <User className="w-3.5 h-3.5 text-[#1b4332]" />
              <span className="font-semibold">{article.author}</span>
            </div>

            <Link
              href="/research-projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4332] hover:text-[#081c15] group-hover:translate-x-0.5 transition-transform"
            >
              <span>Read Full Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
