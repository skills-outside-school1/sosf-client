import React from "react";
import Image from "next/image";

const GrantsEligibilitySection = ({ eligibilityCriteria }) => {
  return (
    <div className="h-full">
      <div className="h-full bg-white">
        <h3 className="font-mont font-semibold text-[20px] md:text-[24px] mb-6">
          Who Should Apply
        </h3>

        <div className="space-y-7">
          {eligibilityCriteria.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 mt-1">
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>

              <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700 font-medium font-inter">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrantsEligibilitySection;
