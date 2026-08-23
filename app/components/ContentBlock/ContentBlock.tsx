import React from "react";
import Link from "next/link";
import {
  Mountain,
  FlaskConical,
  Layers,
  Map,
  Leaf,
  Wind,
  Sprout,
  Tag,
  Download,
  LucideIcon,
} from "lucide-react";
import type { ContentSection } from "@/app/constants/navigation";

const iconMap: Record<string, LucideIcon> = {
  mountain: Mountain,
  flask: FlaskConical,
  layers: Layers,
  map: Map,
  leaf: Leaf,
  wind: Wind,
  sprout: Sprout,
  tag: Tag,
};

interface ContentBlockProps {
  section: ContentSection;
  headingLevel?: "h1" | "h2" | "h3";
}

export const ContentBlock = ({
  section,
  headingLevel = "h2",
}: ContentBlockProps): React.ReactElement => {
  const { title, iconName, badge, paragraphs, downloadLabel, downloadHref } = section;
  const Icon = (iconName && iconMap[iconName]) ? iconMap[iconName] : null;
  const Heading = headingLevel;

  return (
    <section className="space-y-4 w-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-[#1b4332] flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-amber-300" />
          </div>
        )}
        <div>
          {badge && (
            <p className="text-xs font-bold text-[#1b4332] uppercase tracking-widest">{badge}</p>
          )}
          <Heading className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            {title}
          </Heading>
        </div>
      </div>

      {/* Body paragraphs */}
      <div className="space-y-3 text-gray-700 text-base leading-relaxed">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      {/* Optional download link */}
      {downloadLabel && downloadHref && (
        <Link
          href={downloadHref}
          className="inline-flex items-center gap-2 text-[#1b4332] font-semibold text-sm hover:underline mt-1"
        >
          <Download className="w-4 h-4 text-[#d99b26]" />
          {downloadLabel}
        </Link>
      )}
    </section>
  );
};
