"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { KEY_SECTORS_CONTENT } from "@/app/constants/keySectors";
import { LATEST_NEWS_CONTENT } from "@/app/constants/latestNews";
import { OFFICE_BEARERS_CONTENT } from "@/app/constants/officeBearers";

export interface SearchResultItem {
  id: string;
  label: string;
  category: string;
  href: string;
  external?: boolean;
}

export interface NavbarSearchProps {
  items?: SearchResultItem[];
  placeholder?: string;
  onSelectItem?: () => void;
  className?: string;
}

const DEFAULT_SEARCH_ITEMS: SearchResultItem[] = [
  { id: "page-home", label: "Home", category: "Page", href: "/" },
  {
    id: "page-history",
    label: "Our History",
    category: "About Us",
    href: "/about/history",
  },
  {
    id: "page-about",
    label: "About Us",
    category: "About Us",
    href: "/about/about-us",
  },
  {
    id: "page-gallery",
    label: "Our Gallery",
    category: "About Us",
    href: "/about/gallery",
  },
  { id: "page-contact", label: "Contact", category: "Page", href: "/contact" },
  ...KEY_SECTORS_CONTENT.sectors.map((s) => ({
    id: `sector-${s.id}`,
    label: s.title,
    category: "Industry",
    href: s.href,
    external: true,
  })),
  ...LATEST_NEWS_CONTENT.items.map((n) => ({
    id: `news-${n.id}`,
    label: n.title,
    category: "News",
    href: n.href,
    external: true,
  })),
  ...OFFICE_BEARERS_CONTENT.members.map((m) => ({
    id: `member-${m.id}`,
    label: `${m.name} — ${m.role}`,
    category: "Committee",
    href: "/#office-bearers",
  })),
];

function renderHighlightedLabel(text: string, query: string): React.ReactNode {
  const q = query.trim();
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length);

  return (
    <>
      {before}
      <mark className="bg-[#FFD37C]/25 text-[#FFD37C] rounded-xs px-0.5 font-bold">
        {match}
      </mark>
      {after}
    </>
  );
}

export const NavbarSearch: React.FC<NavbarSearchProps> = ({
  items = DEFAULT_SEARCH_ITEMS,
  placeholder = "Search sectors, news, leaders...",
  onSelectItem,
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [mobileInputOpen, setMobileInputOpen] = useState(false);
  const [highlightedIdx, setHighlightedIdx] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return items.slice(0, 5);
    return items
      .filter(
        (item) =>
          item.label.toLowerCase().includes(trimmed) ||
          item.category.toLowerCase().includes(trimmed)
      )
      .slice(0, 6);
  }, [items, query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setMobileInputOpen(false);
      }
    };

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        desktopInputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setMobileInputOpen(false);
        desktopInputRef.current?.blur();
        mobileInputRef.current?.blur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  const handleSelect = () => {
    setIsOpen(false);
    setMobileInputOpen(false);
    setQuery("");
    setHighlightedIdx(0);
    onSelectItem?.();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filteredResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIdx((prev) => (prev + 1) % filteredResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIdx(
        (prev) => (prev - 1 + filteredResults.length) % filteredResults.length
      );
    } else if (e.key === "Enter") {
      const selected = filteredResults[highlightedIdx];
      if (!selected) return;
      e.preventDefault();
      if (selected.external) {
        window.open(selected.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.assign(selected.href);
      }
      handleSelect();
    }
  };

  return (
    <div ref={containerRef} className={`relative flex items-center ${className}`}>
      {/* Desktop Expandable Rounded-MD Search Bar */}
      <div className="group/search relative hidden md:flex items-center gap-2 w-56 lg:w-64 focus-within:w-64 lg:focus-within:w-72 px-3 py-1.5 rounded-md bg-[#1A0B06]/65 backdrop-blur-md border border-[#FFD37C]/30 focus-within:border-[#FFD37C] focus-within:bg-[#1A0B06]/90 focus-within:shadow-[0_0_0_3px_rgba(255,211,124,0.16),0_12px_28px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out overflow-hidden">
        <Search className="w-3.5 h-3.5 text-[#FFD37C]/80 group-focus-within/search:text-[#FFD37C] transition-colors shrink-0" />

        <input
          ref={desktopInputRef}
          type="search"
          value={query}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleInputKeyDown}
          onChange={(e) => {
            setQuery(e.target.value);
            setHighlightedIdx(0);
            setIsOpen(true);
          }}
          placeholder={placeholder}
          aria-label="Search site"
          className="w-full bg-transparent text-xs text-white placeholder:text-white/55 font-work-sans focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />

        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setHighlightedIdx(0);
              desktopInputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="text-white/60 hover:text-[#FFD37C] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        ) : (
          <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[9.5px] font-mono text-[#FFD37C]/80 shrink-0 group-focus-within/search:opacity-0 transition-opacity">
            ⌘K
          </kbd>
        )}

        {/* Animated Focus Accent Line */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-[#A61A28] via-[#FFD37C] to-[#BB5D0E] scale-x-0 group-focus-within/search:scale-x-100 origin-left transition-transform duration-300"
        />
      </div>

      {/* Mobile Compact Rounded-MD Search Trigger */}
      <button
        type="button"
        onClick={() => {
          setMobileInputOpen((prev) => !prev);
          setIsOpen(true);
          setTimeout(() => mobileInputRef.current?.focus(), 50);
        }}
        aria-label="Open search"
        aria-expanded={mobileInputOpen}
        className="md:hidden p-2.5 rounded-md bg-white/15 hover:bg-white/25 text-white transition-all border border-white/20 backdrop-blur-md active:scale-95 cursor-pointer"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Results / Mobile Search Panel */}
      {(isOpen || mobileInputOpen) && (
        <div className="absolute right-0 top-full mt-2.5 w-[min(90vw,340px)] rounded-lg bg-[#2B1203]/96 backdrop-blur-2xl border border-[#FFD37C]/30 p-2.5 shadow-[0_24px_54px_-12px_rgba(20,8,3,0.8)] ring-1 ring-white/10 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          {/* Mobile Search Input inside Panel */}
          <div className="flex md:hidden items-center gap-2 px-3 py-2 mb-2 rounded-md bg-[#1A0B06]/75 border border-[#FFD37C]/30 focus-within:border-[#FFD37C]">
            <Search className="w-3.5 h-3.5 text-[#FFD37C]/85 shrink-0" />
            <input
              ref={mobileInputRef}
              type="search"
              value={query}
              onKeyDown={handleInputKeyDown}
              onChange={(e) => {
                setQuery(e.target.value);
                setHighlightedIdx(0);
              }}
              placeholder={placeholder}
              aria-label="Search site"
              className="w-full bg-transparent text-xs text-white placeholder:text-white/55 font-work-sans focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setHighlightedIdx(0);
                }}
                aria-label="Clear search"
                className="text-white/60 hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between px-2 pb-1.5 mb-1 border-b border-[#FFD37C]/15 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#FFD37C]/80">
            <h6>{query.trim() ? "Matching Results" : "Quick Links"}</h6>
            {query.trim() && (
              <p className="text-[#FBF7F2]/60">
                {filteredResults.length} found
              </p>
            )}
          </div>

          {filteredResults.length > 0 ? (
            <ul className="space-y-1 max-h-64 overflow-y-auto">
              {filteredResults.map((result, idx) => {
                const isHighlighted = idx === highlightedIdx;
                const content = (
                  <>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold font-space text-white group-hover:text-[#FFD37C] transition-colors truncate">
                        {renderHighlightedLabel(result.label, query)}
                      </div>
                      <div className="text-[10px] font-mono text-[#FBF7F2]/55">
                        {result.category}
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD37C]/55 group-hover:text-[#FFD37C] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                );

                const itemClasses = `group flex items-center justify-between gap-2 px-2.5 py-2 rounded-md transition-colors ${
                  isHighlighted ? "bg-white/12" : "hover:bg-white/10"
                }`;

                return (
                  <li
                    key={result.id}
                    onMouseEnter={() => setHighlightedIdx(idx)}
                  >
                    {result.external ? (
                      <a
                        href={result.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleSelect}
                        className={itemClasses}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={result.href}
                        onClick={handleSelect}
                        className={itemClasses}
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-2.5 py-4 text-center text-xs text-[#FBF7F2]/60 font-work-sans">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
};
