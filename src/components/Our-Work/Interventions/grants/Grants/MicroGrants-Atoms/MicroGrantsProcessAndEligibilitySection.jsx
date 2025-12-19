import React from "react";
import MicroGrantsApplicationProcess from "./MicroGrantsApplicationProcess";
import MicroGrantsEligibilitySection from "./MicroGrantsEligibilitySection";

const MicroGrantsProcessAndEligibilitySection = ({ 
  introText,
  processSteps,
  eligibilityIntroText,
  eligibilityCriteria 
}) => {
  return (
    <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-2 font-mont">
      {/* Left Column - Application Process */}
      <MicroGrantsApplicationProcess
        introText={introText}
        processSteps={processSteps}
      />

      {/* Right Column - Who Should Apply */}
      <MicroGrantsEligibilitySection
        introText={eligibilityIntroText}
        eligibilityCriteria={eligibilityCriteria}
      />
    </div>
  );
};

export default MicroGrantsProcessAndEligibilitySection;