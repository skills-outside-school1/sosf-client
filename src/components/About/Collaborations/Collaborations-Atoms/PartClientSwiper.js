"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % bgImages.length),
      9000 // much slower now (9 seconds per slide)
    );
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden">
      {/* Background with very smooth fade + subtle scale */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgImages[index]}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImages[index]})` }}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Main content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-[4rem] lg:px-[7.6rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div />
          <div />

          {/* Right content box */}
          <motion.div
            key={index} // re-animate when index changes
            initial={{ x: 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-[#EEF3FF]/90 px-7 py-14 rounded-2xl relative shadow-lg backdrop-blur-sm"
          >
            {/* Ellipse image (no more cutting) */}
            <div className="absolute right-4 -top-12 h-[140px] w-[140px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={ellipseImages[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src={ellipseImages[index]}
                    width={140}
                    height={140}
                    alt="collaboration"
                    className="h-auto w-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated title */}
            <div className="relative h-[40px] mb-4 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={titles[index]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="text-[#4A7CFD] font-mont font-bold text-[24px]"
                >
                  {titles[index]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Static paragraph */}
            <p className="text-[#1F2937] font-inter leading-7">
              As a service-oriented organization, our clients are our
              ambassadors and beneficiaries. We exist for them and to ensure we
              drive development for individuals and institutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartClientSwiper;
