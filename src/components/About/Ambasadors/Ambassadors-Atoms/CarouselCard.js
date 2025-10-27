import React from "react";
import Image from "next/image";

function CarouselCard({ item }) {
  const { img, title, description, link } = item;

  return (
    <div className="relative h-full overflow-hidden rounded-3xl" style={{ minHeight: "400px" }}>
      {/* Background image */}
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay mask */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col items-start h-full px-4 py-6 space-y-10">
        <h3 className="mb-3 text-2xl font-semibold text-white md:text-xl font-mont">
          {title}
        </h3>
        <p className="flex-grow mb-4 leading-relaxed top-12 md:text-sm text-white/70 font-inter">
          {description}
        </p>
        <button className="w-fit text-10 md:text-sm font-medium text-[#C9DEFF] hover:underline">
          {link}
        </button>
      </div>
    </div>
  );
}

export default CarouselCard;
