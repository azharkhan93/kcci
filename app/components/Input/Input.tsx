"use client";

import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      icon,
      error,
      helperText,
      containerClassName = "",
      className = "",
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className={`w-full space-y-1 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-gray-700 tracking-tight"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3 text-gray-400 pointer-events-none flex items-center justify-center">
              {icon}
            </span>
          )}

          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            className={`w-full ${
              icon ? "pl-9" : "pl-3"
            } pr-3 py-2.5 bg-gray-50/80 border ${
              error
                ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                : "border-gray-300 focus:ring-[#1b4332]/20 focus:border-[#1b4332]"
            } rounded-xl text-sm text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
            {...props}
          />
        </div>

        {error ? (
          <p className="text-xs text-red-500 font-medium pt-0.5">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-gray-500 pt-0.5">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
