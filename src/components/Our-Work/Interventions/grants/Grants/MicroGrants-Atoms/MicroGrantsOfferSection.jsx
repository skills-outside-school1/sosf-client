import React from "react";
import MicroGrantsOfferCard from "./MicroGrantsOfferCard";

const MicroGrantsOfferSection = ({ offers }) => {
  return (
    <div>
      <h2 className="font-mont font-bold text-[20px] md:text-[28px] mb-4">
        What We Offer
      </h2>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 gap-20 mb-24 md:grid-cols-3 font-mont">
        {offers.map((offer, index) => (
          <MicroGrantsOfferCard
            key={index}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MicroGrantsOfferSection;