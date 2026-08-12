"use client";

import React from "react";
import { CreditCard, X, Sparkles } from "lucide-react";
import { useNavigation } from "@/app/context/NavigationContext";

export const PayComingSoonModal: React.FC = () => {
  const { payModalOpen, setPayModalOpen, setActiveHref } = useNavigation();

  if (!payModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-purple-100 relative space-y-5 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setPayModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#582c83] flex items-center justify-center flex-shrink-0">
            <CreditCard className="w-6 h-6 text-[#582c83]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Pay Online</h3>
              <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                Coming Soon
              </span>
            </div>
            <p className="text-xs text-gray-500 font-medium">SKUAST-K Soil Testing Portal</p>
          </div>
        </div>

        {/* Feature Notice Banner */}
        <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-4 text-sm text-amber-900 space-y-1.5">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-amber-900">Online Payment Gateway Integration</p>
          </div>
          <p className="text-amber-800 text-xs leading-relaxed pl-6">
            Direct online card & UPI payments are currently being configured for SKUAST-Kashmir Soil Testing Lab.
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-3 pt-1 text-sm text-gray-700 leading-relaxed">
          <p>
            Please download the required sample submission forms and submit payment along with your soil, plant, or water samples directly at the laboratory counter.
          </p>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={() => setPayModalOpen(false)}
            className="px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              setPayModalOpen(false);
              setActiveHref("/forms");
            }}
            className="px-4 py-2.5 rounded-xl bg-[#582c83] hover:bg-[#462368] text-white text-sm font-semibold shadow-xs transition-colors"
          >
            Get the Forms
          </button>
        </div>
      </div>
    </div>
  );
};
