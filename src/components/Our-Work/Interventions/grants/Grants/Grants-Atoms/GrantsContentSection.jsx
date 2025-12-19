import React from "react";
import GrantsInfoColumn from "./GrantsInfoColumn";
import GrantsEligibilitySection from "./GrantsEligibilitySection";

const GrantsContentSection = ({ infoBoxes, eligibilityCriteria }) => {
  return (
      <div className="px-4 md:px-[4rem] lg:px-[7.6rem] pt-12 md:pt-16 md:pb-6">
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
        {/* Left Column */}
        <GrantsInfoColumn infoBoxes={infoBoxes} />

        {/* Right Column - Who Should Apply */}
        <GrantsEligibilitySection eligibilityCriteria={eligibilityCriteria} />
      </div>
    </div>
  );
};

export default GrantsContentSection;