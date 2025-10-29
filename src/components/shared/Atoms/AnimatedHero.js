"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AnimatedHero = () => {
  const slides = [
    {
      title: "Data-Driven Sustainable Intervention Impact",
      description:
        "We collect, assess & leverage data to design, deploy & disseminate interventions for sustainable development.",
      button: "Learn More",
    },
    {
      title: "Strategic Interventions for Social Impact",
      description:
        "Our interventions empower communities through education, entrepreneurship, and economic inclusion.",
      button: "Explore Initiatives",
    },
    {
      title: "Collaborative Action for Development",
      description:
        "We drive collaborative efforts to address socio-economic challenges affecting youth and marginalized communities.",
      button: "Join Us",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "-50%", opacity: 0 },
  };

  return (
    <section className="items-center justify-center w-full px-6 xl:px-0">
      <div className="mx-auto xl:max-w-[1421px]">
        <div className="relative overflow-hidden bg-gray-800 rounded-2xl h-[713px] md:h-[600px]">
          <Image
            src="/assets/images/govern.png"
            alt="Sustainable Impact"
            className="object-cover"
            fill
            priority
          />
          

          {/* Dark overlay with right-centered card */}
          <div className="absolute inset-0 flex items-center justify-end p-6 md:p-12 bg-black/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full max-w-lg p-12 text-white border-2 border-white rounded-2xl bg-black/70 backdrop-blur-sm md:max-w-xl"
              >
                <h3 className="mb-4 text-2xl font-bold tracking-wide md:text-3xl font-mont">
                  {slides[index].title}
                </h3>
                <p className="mb-6 text-base text-gray-200 md:text-lg font-inter">
                  {slides[index].description}
                </p>
                <button className="px-6 py-2 text-base font-mont tracking-wide font-medium text-black transition bg-[#CDD9F7] rounded-2xl hover:bg-opacity-70">
                  {slides[index].button}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
