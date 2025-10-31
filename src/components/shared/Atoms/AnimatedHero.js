"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Reusable AnimatedHero component
 * 
 * Props:
 * - slides: Array of { title, description, buttonText }
 * - image: Background image path
 * - height: (optional) custom height (default: h-[713px])
 * - overlayColor: (optional) overlay color e.g. "bg-black/50"
 * - contentPosition: (optional) "left" | "right" | "center" (default: right)
 */
const AnimatedHero = ({
  slides = [],
  image = "/assets/images/default-hero.jpg",
  height = "h-[713px]",
  overlayColor = "bg-black/50",
  contentPosition = "right",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "-50%", opacity: 0 },
  };

  // Handle alignment based on prop
  const justifyClass =
    contentPosition === "left"
      ? "justify-start"
      : contentPosition === "center"
      ? "justify-center"
      : "justify-end";

  return (
    <section className="items-center justify-center w-full px-6 xl:px-0">
      <div className="mx-auto xl:max-w-[1421px]">
        <div
          className={`relative overflow-hidden bg-gray-800 rounded-2xl ${height}`}
        >
          <Image
            src={image}
            alt="Hero Background"
            className="object-cover"
            fill
            priority
          />

          {/* Dark overlay with configurable alignment */}
          <div
            className={`absolute inset-0 flex items-center ${justifyClass} p-6 md:p-12 ${overlayColor}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full max-w-lg p-12 text-white border-2 border-white lg:p-16 rounded-2xl bg-black/70 backdrop-blur-sm md:max-w-xl"
              >
                <h3 className="mb-4 text-2xl font-bold tracking-wide md:text-3xl font-mont">
                  {slides[index]?.title}
                </h3>
                <p className="mb-6 text-base text-gray-200 md:text-lg font-inter">
                  {slides[index]?.description}
                </p>
                {slides[index]?.buttonText && (
                  <button className="px-6 py-2 text-base font-mont tracking-wide font-medium text-black transition bg-[#CDD9F7] rounded-2xl hover:bg-opacity-70">
                    {slides[index].buttonText}
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
