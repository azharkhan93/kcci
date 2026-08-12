import React from "react";
import { CheckCircle2, Package, Sprout } from "lucide-react";
import {
  SOIL_ANALYSIS_PRODUCERS_CONTENT,
  SOIL_SAMPLE_COLLECTION_CONTENT,
  SOIL_SAMPLE_STEPS,
} from "@/app/constants/navigation";
import { SampleSteps } from "@/app/components/SampleSteps";

const producers = SOIL_ANALYSIS_PRODUCERS_CONTENT;
const collection = SOIL_SAMPLE_COLLECTION_CONTENT;

export const SoilSampleCollection = (): React.ReactElement => (
  <div className="space-y-10 border-t border-gray-200 pt-8 w-full">
    {/* ── Producers Overview ─────────────────────────────── */}
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#582c83] flex items-center justify-center flex-shrink-0">
          <Sprout className="w-5 h-5 text-amber-300" />
        </div>
        <div>
          <p className="text-xs font-bold text-[#582c83] uppercase tracking-widest">
            For Producers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            {producers.title}
          </h2>
        </div>
      </div>
      <div className="space-y-3 text-gray-700 text-base leading-relaxed">
        {producers.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>

    {/* ── Collection Guide ───────────────────────────────── */}
    <section className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#582c83] tracking-tight">
        {collection.title}
      </h2>
      <p className="text-gray-800 text-base md:text-lg leading-relaxed">
        {collection.intro}
      </p>

      {/* Tips */}
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-gray-900">
          {collection.tipsHeading}
        </h3>
        <ul className="space-y-2.5">
          {collection.tips.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed"
            >
              <CheckCircle2 className="w-4 h-4 text-[#582c83] flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Equipment */}
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
          <Package className="w-4 h-4 text-[#582c83]" />
          {collection.equipmentHeading}
        </h3>
        <ul className="space-y-1.5 pl-2">
          {collection.equipment.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-gray-700 text-sm md:text-base"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#582c83] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* ── Reusable Sample Collection Steps ──────────────── */}
    <SampleSteps steps={SOIL_SAMPLE_STEPS} />
  </div>
);
