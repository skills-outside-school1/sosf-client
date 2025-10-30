import React from "react";
import Image from "next/image";

export default function StrategyCard({ strategy }) {
  const { image, title, description } = strategy;

  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-sm hover:shadow-lg h-[420px] xl:h-[430px]">
      {/* Image section */}
      <div className="relative overflow-hidden bg-gray-200 w-full h-[180px] xl:h-[180px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-grow p-5 xl:p-5">
        {/* Title */}
        <h4 className="mb-3 text-xl font-semibold leading-tight text-gray-900 font-mont line-clamp-2">
          {title}
        </h4>
        
        {/* Description */}
        <p className="flex-grow mb-4 text-sm font-medium leading-relaxed text-gray-700 xl:text-sm font-inter line-clamp-4">
          {description}
        </p>
        
        {/* Button - always at bottom */}
        <div className="pt-2 mt-auto">
          <button className="text-sm xl:text-sm font-semibold font-inter text-[#4A7CFD] hover:text-[#3a5fc9] transition-colors duration-200 inline-flex items-center group">
            See more
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}