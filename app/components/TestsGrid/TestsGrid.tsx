import React from "react";
import {
  Sprout,
  FlaskConical,
  Zap,
  Atom,
  AlertTriangle,
  Cloud,
  Droplets,
  Leaf,
  CircleDot,
  Clock,
  LucideIcon,
} from "lucide-react";
import type { SoilTest } from "@/app/constants/navigation";
import { useNavigation } from "@/app/context/NavigationContext";

export interface TestsGridProps {
  tests: SoilTest[];
  title: string;
  subtitle?: string;
}

const iconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  flask: FlaskConical,
  zap: Zap,
  atom: Atom,
  "alert-triangle": AlertTriangle,
  cloud: Cloud,
  droplets: Droplets,
  leaf: Leaf,
};

export const TestsGrid = ({
  tests,
  title,
  subtitle,
}: TestsGridProps): React.ReactElement => {
  let navOpenBooking: ((testName?: string) => void) | undefined;
  try {
    const nav = useNavigation();
    navOpenBooking = nav.openBookingModal;
  } catch {
    // fallback if used outside provider
  }

  return (
    <section className="space-y-5 w-full">
      <div>
        <h3 className="text-xl font-bold text-[#582c83]">{title}</h3>
        {subtitle && <p className="text-gray-500 text-sm mt-0.5">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tests.map(({ name, description, iconName, price, turnaroundTime }) => {
          const Icon =
            iconName && iconMap[iconName] ? iconMap[iconName] : CircleDot;

          return (
            <div
              key={name}
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200/90 hover:border-purple-300 hover:bg-purple-50/30 transition-all duration-150 group"
            >
              {/* Icon Badge */}
              <div className="w-9 h-9 rounded-lg bg-[#582c83]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#582c83]/20 transition-colors">
                <Icon className="w-4 h-4 text-[#582c83]" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1 space-y-1.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h4 className="font-semibold text-gray-900 text-sm leading-snug">
                    {name}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    {price && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-100 text-[#582c83] border border-purple-200">
                        {price}
                      </span>
                    )}
                    {turnaroundTime && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {turnaroundTime}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-xs leading-relaxed">
                  {description}
                </p>

                {navOpenBooking && (
                  <button
                    onClick={() => navOpenBooking?.(name)}
                    className="pt-0.5 text-xs font-semibold text-[#582c83] hover:text-[#3d1e5c] inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Book test</span> →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
