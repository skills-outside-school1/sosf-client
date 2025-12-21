import React from "react";

const MicroGrantsOfferCard = ({ title, description }) => {
  return (
    <div>
      <h3 className="font-medium text-[18px] mb-4">
        {title}
      </h3>
      <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default MicroGrantsOfferCard;