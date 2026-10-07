import React from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  icon,
  className = "",
  children,
  ...rest
}: ButtonProps): React.ReactElement => {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={`btn-${variant} btn-${size} inline-flex items-center justify-center whitespace-nowrap font-bold cursor-pointer transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${className}`}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <Loader2 className="animate-spin h-5 w-5 text-current flex-shrink-0" />
      ) : (
        icon && <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
    </button>
  );
};
