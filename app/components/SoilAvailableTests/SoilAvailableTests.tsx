import React from "react";
import { SOIL_AVAILABLE_TESTS } from "@/app/constants/navigation";
import { TestsGrid } from "@/app/components/TestsGrid";

export const SoilAvailableTests = (): React.ReactElement => (
  <div className="border-t border-gray-200 pt-8 w-full">
    <TestsGrid
      tests={SOIL_AVAILABLE_TESTS}
      title="Available Tests for Producers"
      subtitle="Mark the desired tests on your information sheet. Review the current pricelist for a summary."
    />
  </div>
);
