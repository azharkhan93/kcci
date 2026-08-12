"use client";

import React, { createContext, useContext, useState } from "react";

interface NavigationContextType {
  activeHref: string;
  setActiveHref: (href: string) => void;
  payModalOpen: boolean;
  setPayModalOpen: (open: boolean) => void;
  showPayComingSoon: () => void;
  bookingModalOpen: boolean;
  setBookingModalOpen: (open: boolean) => void;
  preselectedTestName?: string;
  openBookingModal: (testName?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeHref, setActiveHref] = useState<string>("/");
  const [payModalOpen, setPayModalOpen] = useState<boolean>(false);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [preselectedTestName, setPreselectedTestName] = useState<
    string | undefined
  >(undefined);

  const showPayComingSoon = () => {
    setPayModalOpen(true);
  };

  const openBookingModal = (testName?: string) => {
    setPreselectedTestName(testName);
    setBookingModalOpen(true);
  };

  return (
    <NavigationContext.Provider
      value={{
        activeHref,
        setActiveHref,
        payModalOpen,
        setPayModalOpen,
        showPayComingSoon,
        bookingModalOpen,
        setBookingModalOpen,
        preselectedTestName,
        openBookingModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
