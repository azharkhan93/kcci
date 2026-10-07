"use client";

import React from "react";
import { ChevronDown, ArrowDown } from "lucide-react";
import { HERO_STRATA_LAYERS, type StrataLayer } from "@/app/constants/hero";

export interface HeroStrataFlowProps {
  activeLayerId: string;
  onSelectLayer: (layerId: string) => void;
}

export const HeroStrataFlow: React.FC<HeroStrataFlowProps> = ({
  activeLayerId,
  onSelectLayer,
}) => {
  return (
    <div className="w-full bg-slate-900/90 text-white rounded-2xl p-4 border border-emerald-500/20 backdrop-blur-md shadow-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Stratified Depth Continuum
          </span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 font-semibold">
          Canopy → Rhizosphere
        </span>
      </div>

      {/* 5-Step Stratified Flow List */}
      <div className="space-y-1.5">
        {HERO_STRATA_LAYERS.map((layer, index) => {
          const isActive = layer.id === activeLayerId;
          const IconComponent = layer.icon;
          const isLast = index === HERO_STRATA_LAYERS.length - 1;

          return (
            <React.Fragment key={layer.id}>
              <button
                type="button"
                onClick={() => onSelectLayer(layer.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-950/80 border border-emerald-400/60 text-white shadow-lg shadow-emerald-950/50 scale-[1.01]"
                    : "bg-slate-800/40 hover:bg-slate-800 border border-transparent hover:border-slate-700 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-emerald-500 text-slate-950 shadow-xs"
                        : "bg-slate-700/70 text-slate-300"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold tracking-tight uppercase ${isActive ? "text-emerald-300 font-mono" : "text-white"}`}>
                        {layer.title}
                      </span>
                      {isActive && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-400/20 text-emerald-300 uppercase">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-right pl-2 shrink-0">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? "text-emerald-300" : "text-slate-400"}`}>
                    {layer.metric}
                  </span>
                  <span className="block text-[9px] text-slate-500 font-mono">
                    {layer.depth}
                  </span>
                </div>
              </button>

              {!isLast && (
                <div className="flex justify-center my-0.5 opacity-60">
                  <ChevronDown className="w-3.5 h-3.5 text-emerald-500/70" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
