import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImageOverlayCard({ item }) {
  const { img, title, description, link } = item;

  return (
    <div 
      className="relative h-full overflow-hidden rounded-2xl group" 
      style={{ minHeight: "360px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={img}
          alt={` ${title}  `}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-7">
        <div>
          <h3 className="mb-10 text-xl font-semibold leading-snug text-white md:text-[22px] font-mont">
            {title}
          </h3>
          
          <p className="text-sm leading-relaxed md:text-[16px] text-white/85 font-inter line-clamp-4">
            {description}
          </p>
        </div>
        <Link href=   {link}>
        <button className="inline-flex items-center mt-6 text-sm font-medium transition-all duration-200 md:text-base w-fit text-[#C9DEFF] hover:text-white group/btn">
       Learn More
          </button>
          </Link>
      </div>
    </div>
  );
}