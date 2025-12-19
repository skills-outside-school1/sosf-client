import React from "react";
import Image from "next/image";
const HeroImage = "/assets/images/grants_sub.jpg";
const GrantsHeroSection = ({ grantType, fundingAmount, fundingDetails }) => {
  return (
    <div
      className="relative w-full h-[657px] md:h-[657px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImage})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-[4rem] lg:px-[7.6rem] text-white translate-y-24">
        <p className="text-[14px] md:text-[18px] mb-2">What we offer</p>
        <h1 className="font-mont font-bold text-[28px] mb-4">{grantType}</h1>

        {/* Funding Section */}
        <div className="mt-6 font-mont">
          <h2 className="font-mont font-semibold text-[20px] md:text-[24px] mb-3">
            Funding
          </h2>
          <p className="text-[16px] md:text-[18px] mb-6">{fundingAmount}</p>

          {/* Funding Details with Icons */}
          <div className="max-w-2xl space-y-6">
            {fundingDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Image src={detail.icon} alt="" width={24} height={24} />
                </div>
                <p className="text-[14px] md:text-[15px]">{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantsHeroSection;
