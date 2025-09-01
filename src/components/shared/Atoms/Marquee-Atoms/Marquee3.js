import React from "react";
import SubHero from "../Subhero-Atoms/Subhero";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Marquee3({
  headingData,
  marquees,
  speed = 40, // Default speed if not provided
  className,
  className2,
}) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-y-8">
      {/* Render heading */}
      <SubHero items={headingData} />

      {/* Render marquees */}
      <div className={`flex flex-col gap-y-12 w-full px-4  pb-5  md:px-[4rem] lg:px-[7rem] justify-center items-center  gap-x-8  ${className2}`}>
        {marquees.map((marquee, index) => (
          <Marquee
            key={index}
            className="w-full h-[fixed] flex flex-row gap-x-8 justify-between text-center"
            direction={marquee.direction || "left"} // Default to "left" if not provided
            speed={marquee.speed || speed} // Use passed speed or default speed
            pauseOnHover
          >
            {marquee.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="w-full h-[fixed]  object-contain  items-center p-2"
              >
                <div
                  className={`w-full flex justify-center items-center gap-x-[5rem  ${className}`}
                >
                  <Image
                    src={image}
                    alt={`image-${imgIndex}`}
                    width={150}
                    height={100}
                    className="max-w-[200px] h-[60px] object-contain   "
                  />
                </div>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
