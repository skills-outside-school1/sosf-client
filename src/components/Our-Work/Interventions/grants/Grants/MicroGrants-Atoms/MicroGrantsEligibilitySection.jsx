import React from "react";
import Image from "next/image";

const MicroGrantsEligibilitySection = ({ 
  title = "Who Should Apply",
  introText,
  eligibilityCriteria 
}) => {
  return (
    <div>
      <h2 className="font-mont font-bold text-[24px] md:text-[28px] mb-6">
        {title}
      </h2>

      <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700 mb-6">
        {introText}
      </p>

      <div className="space-y-4">
        {eligibilityCriteria.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Image src={item.icon} alt="" width={24} height={24} />
            </div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700 font-medium font-inter">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicroGrantsEligibilitySection;