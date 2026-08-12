"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Search } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export interface SelectProps {
  label?: string;
  icon?: React.ReactNode;
  options: (SelectOption | string)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  icon,
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  searchable = false,
  disabled = false,
  error,
  helperText,
  containerClassName = "",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options array into SelectOption objects
  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  // Find currently selected option
  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = normalizedOptions.filter(
    (opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (opt.sublabel && opt.sublabel.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className={`w-full space-y-1 relative ${containerClassName}`} ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-semibold text-gray-700 tracking-tight">
          {label}
        </label>
      )}

      {/* Select Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 ${
          icon ? "pl-9" : "pl-3.5"
        } pr-3 py-2.5 bg-gray-50/80 border ${
          error
            ? "border-red-400 focus:ring-red-200"
            : isOpen
            ? "border-[#582c83] ring-2 ring-[#582c83]/20 bg-white"
            : "border-gray-300 hover:border-gray-400"
        } rounded-xl text-sm transition-all text-left cursor-pointer disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      >
        {icon && (
          <span className="absolute left-3 text-gray-400 pointer-events-none flex items-center justify-center">
            {icon}
          </span>
        )}

        <span className={`truncate font-medium ${selectedOption ? "text-gray-900" : "text-gray-400"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#582c83]" : ""
          }`}
        />
      </button>

      {/* Dropdown Options Popover Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-purple-100 rounded-2xl shadow-xl overflow-hidden animate-in fade-in-50 slide-in-from-top-2 duration-150">
          {/* Optional Search Input */}
          {searchable && (
            <div className="p-2 border-b border-gray-100 bg-gray-50">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#582c83]"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="max-h-56 overflow-y-auto py-1 custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full px-3.5 py-2.5 text-xs text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-purple-50 text-[#582c83] font-bold"
                        : "text-gray-700 hover:bg-gray-50 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {opt.icon && <span className="flex-shrink-0">{opt.icon}</span>}
                      <div className="min-w-0">
                        <p className="truncate">{opt.label}</p>
                        {opt.sublabel && (
                          <p className="text-[10px] text-gray-400 font-normal truncate">
                            {opt.sublabel}
                          </p>
                        )}
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-[#582c83] flex-shrink-0" />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-3 text-xs text-gray-400 text-center">
                No matching options found
              </div>
            )}
          </div>
        </div>
      )}

      {error ? (
        <p className="text-xs text-red-500 font-medium pt-0.5">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500 pt-0.5">{helperText}</p>
      ) : null}
    </div>
  );
};
