import React from "react";
import { Map, Layers, Tag, Wind, Sprout, FlaskConical, LucideIcon } from "lucide-react";
import type { StepItem } from "@/app/constants/navigation";

export interface SampleStepsProps {
  steps: StepItem[];
  title?: string;
}

const stepIconMap: Record<string, LucideIcon> = {
  map: Map,
  layers: Layers,
  tag: Tag,
  wind: Wind,
  sprout: Sprout,
  flask: FlaskConical,
};

export const SampleSteps = ({
  steps,
  title = "How to Collect Your Sample",
}: SampleStepsProps): React.ReactElement => (
  <section className="space-y-6 w-full">
    {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}

    {/* Desktop: horizontal stepper with connector lines */}
    <div className="hidden sm:flex items-start gap-0 w-full">
      {steps.map(({ step, title: stepTitle, description, iconName }, idx) => {
        const Icon = stepIconMap[iconName] ?? Map;
        const isLast = idx === steps.length - 1;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center text-center flex-1 min-w-0 px-2">
              <div className="w-16 h-16 rounded-full bg-[#582c83] flex items-center justify-center shadow-md mb-3 flex-shrink-0">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold text-[#582c83] uppercase tracking-widest mb-1">
                Step {step}
              </span>
              <h4 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{stepTitle}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
            </div>

            {!isLast && (
              <div className="flex items-start pt-7 flex-shrink-0 px-1">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <path
                    d="M0 8 H26 M22 3 L28 8 L22 13"
                    stroke="#d99b26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>

    {/* Mobile: vertical stepper */}
    <div className="flex sm:hidden flex-col gap-0">
      {steps.map(({ step, title: stepTitle, description, iconName }, idx) => {
        const Icon = stepIconMap[iconName] ?? Map;
        const isLast = idx === steps.length - 1;

        return (
          <div key={step} className="flex items-start gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#582c83] flex items-center justify-center shadow-sm">
                <Icon className="w-5 h-5 text-white" />
              </div>
              {!isLast && <div className="w-0.5 h-10 bg-[#d99b26]/50 mt-1" />}
            </div>

            <div className="pb-8">
              <span className="text-xs font-bold text-[#582c83] uppercase tracking-widest">
                Step {step}
              </span>
              <h4 className="font-bold text-gray-900 text-sm mt-0.5 mb-1">{stepTitle}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
