"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PartClientSwiper = () => {
  const bgImages = [
    "/assets/images/collaborations/clients-bg.png",
    "/assets/images/collaborations/partners-bg.png",
    "/assets/images/collaborations/investors-bg.png",
  ];

  const ellipseImages = [
    "/assets/images/collaborations/Ellipse 25 (1).png",
    "/assets/images/collaborations/Ellipse 25 (3).png",
    "/assets/images/collaborations/Ellipse 25 (4).png",
  ];

  const titles = ["Our Clients", "Our Partners", "Our Investors"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Backgrounds with smooth fade */}
      {bgImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            zIndex: i === index ? 1 : 0,
          }}
        ></div>
      ))}

      {/* Main content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-[4rem] lg:px-[7.6rem]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div></div>
          <div></div>

          {/* Right content box */}
          <div className="bg-[#EEF3FF]/90 px-7 py-14 rounded-2xl relative shadow-lg backdrop-blur-sm ">
            {/* Animated ellipse image */}
            <div className="absolute right-4 -top-20 h-[150px] w-[150px]">
              {ellipseImages.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={150}
                  height={150}
                  alt="collaboration"
                  className={` h-auto absolute top-0 right-0 transition-opacity duration-[2000ms] ease-in-out ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Animated title */}
            <div className="relative h-[40px] mb-4">
              {titles.map((title, i) => (
                <h1
                  key={i}
                  className={`absolute text-[#4A7CFD] font-mont font-bold text-[24px] transition-all duration-[1000ms] ease-in-out ${
                    i === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  {title}
                </h1>
              ))}
            </div>

            {/* Static paragraph */}
            <p className="text-[#1F2937] font-inter leading-7">
              As a service-oriented organization, our clients are our
              ambassadors and beneficiaries. We exist for them and to ensure we
              drive development for individuals and institutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartClientSwiper;
