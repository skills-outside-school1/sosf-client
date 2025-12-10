"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";

import "swiper/css";

const GlobalComponent = () => {
  const titles = [
    "Data-Driven Sustainable Interventions for Impact",
    "Strategic Direct & Indirect Interventions for our Beneficiaries",
    "Advocating for Sustainable Social-Economic Development",
  ];

  const description =
    "We collect, assess & leverage on data to design, deploy & disseminate interventions, advocate & inform for collaborative impact";

  const links = [
    "/our-work/data",
    "/get-involved/invest-forms",
    "/our-work/advocacy",
  ];

  const btntitles = [
    "Explore Our Work",
    " Investment Approach",
    "Explore Our Advocacies",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="
        bg-[url('/assets/images/collaborations/swiper-bg-1.jpg')]
        bg-cover bg-left bg-no-repeat
        h-[420px] w-full
        flex items-center
        px-4 md:px-[4rem] lg:px-[7.6rem] relative
        justify-center 
      "
    >
      <div className="absolute top-0  left-0 w-full h-[420px] bg-black bg-opacity-60 flex  justify-start items-center ">
        <div className="max-w-xl  ">
          {/* Transparent, sliding card */}
          <div className="bg-black/55 md:bg-black/60 rounded-xl border border-white/30 shadow-2xl px-7 py-10 md:px-9 md:py-12 backdrop-blur-sm overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              speed={5000} // smooth slide change
              spaceBetween={50}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full"
            >
              {titles.map((title, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    key={`${index}-${activeIndex}`}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-left"
                  >
                    {/* Slide Title */}
                    <h2 className="text-white font-mont font-semibold text-lg md:text-2xl leading-tight w-[80%] md:w-full ">
                      {title}
                    </h2>

                    {/* Description */}
                    <p className="my-6 text-sm md:text-base text-white/90 font-inter max-w-lg">
                      {description}
                    </p>

                    {/* Dynamic Link + Button Title */}
                    <Link href={links[index]}>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#6558D3] text-white text-xs md:text-sm font-semibold tracking-[0.16em] uppercase shadow-md hover:bg-[#5647c8] transition focus:outline-none "
                      >
                        {/* dynamic button title */}
                        {btntitles[index]}
                        <span className="ml-2 text-base leading-none">↗</span>
                      </button>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalComponent;
