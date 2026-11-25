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
            } pr-3 py-2.5 bg-[#FBF7F2] border ${
              error
                ? "border-[#A61A28] focus:ring-[#A61A28]/20 focus:border-[#A61A28]"
                : "border-[#6E2C00]/25 focus:ring-[#BB5D0E]/20 focus:border-[#6E2C00]"
            } rounded-xl text-sm text-[#2B1203] placeholder-[#514646]/50 transition-all focus:bg-white focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
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
