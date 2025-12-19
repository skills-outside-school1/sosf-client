import React from "react";
import Link from "next/link";

export const GrantCard = ({
  tiers,
  title,
  description,
  link,
  className = "",
  delay, // prop for animation delay
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`flex flex-col justify-between w-full h-full bg-[#FAFAFA] rounded-[8px] p-8 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {/* Top Content */}
      <div className="flex flex-col items-start gap-4 mb-8">
        {/* Tier (Blue Text) */}
        <p className="font-mont font-medium text-[#4A7CFD] text-sm md:text-base tracking-wide uppercase">
          {tiers}
        </p>

        {/* Title (Bold Black) */}
        <h3 className="font-mont font-bold text-black text-xl md:text-2xl leading-tight">
          {title}
        </h3>

        {/* Description (Dark Gray, Readable) */}
        <p className="font-inter font-normal text-gray-700 text-base leading-[1.6] text-left">
          {description}
        </p>
      </div>

      {/* Bottom Link */}
      <div className="mt-auto">
        <Link
           href={link}
          className="font-mont font-medium text-gray-900 text-base hover:text-[#4A7CFD] transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};