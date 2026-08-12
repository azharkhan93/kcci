import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";

export interface SampleDropoffProps {
  title?: string;
  description?: string;
  mapImageSrc?: string;
  mapImageAlt?: string;
  shippingPrompt?: string;
  shippingLinkText?: string;
  shippingHref?: string;
  className?: string;
}

export const SampleDropoff = ({
  title = "Sample Drop-off & Receiving Center",
  description = "You are welcome to bring your samples to the Division of Soil Science & Agricultural Chemistry building (Main Drive via Shalimar Road main entrance gate) during working hours (9:00am - 5:00pm) or place them in the sample receiving box.",
  mapImageSrc = "/skuast-soil-science-map.png",
  mapImageAlt = "SKUAST-K Shalimar Campus site plan map showing Division of Soil Science & Agricultural Chemistry and Sample Drop-off area",
  shippingPrompt = "Sending samples from outside Srinagar?",
  shippingLinkText = "Get courier & postal drop-off instructions.",
  shippingHref = "/shipping-instructions",
  className = "",
}: SampleDropoffProps): React.ReactElement => {
  return (
    <section className={`space-y-6 py-6 w-full ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#582c83] tracking-tight">
        {title}
      </h2>

      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full">
        {/* ── SKUAST-K Campus Map Image ─────────────────────── */}
        <div className="w-full sm:w-[320px] md:w-[360px] flex-shrink-0 relative overflow-hidden rounded-2xl border border-gray-300 shadow-sm bg-white">
          <Image
            src={mapImageSrc}
            alt={mapImageAlt}
            width={480}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* ── Drop-off Instructions ──────────────────────────── */}
        <div className="flex-1 min-w-0 w-full space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p className="w-full">{description}</p>

          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#582c83] flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {shippingPrompt}{" "}
              <Link
                href={shippingHref}
                className="text-[#582c83] underline hover:text-[#442166] font-bold transition-colors"
              >
                {shippingLinkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
