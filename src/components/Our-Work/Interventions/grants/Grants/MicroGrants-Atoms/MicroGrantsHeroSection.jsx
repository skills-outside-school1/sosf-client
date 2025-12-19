import React from "react";

const MicroGrantsHeroSection = ({ 
  subtitle = "Nurturing Grassroots Innovation Across Africa",
  title = "MICRO GRANTS",
  paragraphs,
  heroImage 
}) => {
  return (
    <div
      className="relative w-full h-[657px] md:h-[657px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-[4rem] lg:px-[7.6rem] text-white translate-y-24">
        <p className="text-[14px] md:text-[16px] mb-3 font-normal">
          {subtitle}
        </p>
        <h1 className="font-mont font-bold text-[28px] mb-4 leading-tight">
          {title}
        </h1>

        <div className="max-w-2xl space-y-9 font-mont">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[15px] md:text-[16px] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicroGrantsHeroSection;