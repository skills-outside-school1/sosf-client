import React from "react";
import Image from "next/image";

export default function StrategyCard({ strategy }) {
  const { image, title, description } = strategy;

  return (
    <div className="overflow-hidden transition-shadow bg-white rounded-2xl shadow-sm hover:shadow-md h-[425px]">
      {/* Image section */}
      <div className="overflow-hidden bg-gray-200 aspect-square h-[200px] w-full">
        <Image
          src={image}
          alt={title}
          height={100}
          width={100}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-grow p-4 space-y-4">
        <h4 className="text-[24px] font-mont leading-tight font-semibold">
          {title}
        </h4>
        <p className="text-sm font-medium font-inter">{description}</p>
        <button className="text-sm font-medium w-fit text-[#4A7CFD]">
          See more
        </button>
      </div>

      
    </div>
  );
}
