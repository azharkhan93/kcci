"use client";

import React from "react";
import {
  Hero,
  Sidebar,
  AddressCard,
  PageContent,
  SoilAnalysisPage,
  LimeAnalysisPage,
  PlantForageGrainPage,
  WaterAnalysisPage,
  LeafAnalysisPage,
  FertilizerRecommendations,
  GetFormsPage,
  EquipmentsPage,
  PayComingSoonModal,
  TestBookingModal,
} from "@/app/components";
import { SIDEBAR_NAV } from "@/app/constants/navigation";
import {
  NavigationProvider,
  useNavigation,
} from "@/app/context/NavigationContext";

function HomeContent() {
  const { activeHref, setActiveHref } = useNavigation();

  const renderActiveContent = () => {
    switch (activeHref) {
      case "/soil-analysis":
        return <SoilAnalysisPage />;
      case "/lime-analysis":
        return <LimeAnalysisPage />;
      case "/plant-forage-grain":
        return <PlantForageGrainPage />;
      case "/water-analysis":
        return <WaterAnalysisPage />;
      case "/leaf-analysis":
        return <LeafAnalysisPage />;
      case "/fertilizer":
        return <FertilizerRecommendations />;
      case "/equipments":
        return <EquipmentsPage />;
      case "/forms":
        return <GetFormsPage />;
      case "/":
      case "overview":
        return <PageContent />;
      default:
        return <SoilAnalysisPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
    
      <Hero />

    
      <div className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-10 lg:px-16">
        <Sidebar
          sections={SIDEBAR_NAV}
          activeHref={activeHref}
          activeSection="Lab Overview"
          onSelectTab={(href) => setActiveHref(href)}
        />
        <div className="flex-1 min-w-0">{renderActiveContent()}</div>
      </div>

      {/* Mobile Footer Address Card (Always visible on smaller devices) */}
      <footer className="block md:hidden w-full bg-gray-50 border-t border-gray-200 mt-12 py-8 px-4 sm:px-8">
        <div className="max-w-md mx-auto space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#582c83] text-center">
            Laboratory Contact & Location
          </h4>
          <AddressCard />
        </div>
      </footer>

   
      <PayComingSoonModal />

    
      <TestBookingModal />
    </div>
  );
}

export default function Home() {
  return (
    <NavigationProvider>
      <HomeContent />
    </NavigationProvider>
  );
}
