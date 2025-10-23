"use client";
import React, { useEffect, useState } from "react";
import Button2 from "@/components/shared/buttons/button2";
import Transition2 from "@/components/shared/Atoms/Text-Transitions/Transition2";
import { motion, AnimatePresence } from "framer-motion";

const GlobalComponent = () => {
  const texts = [
    "Data-Driven Sustainable Interventions for Impact",
    "Strategic Direct & Indirect Interventions for our Beneficiaries",
    "Advocating for Sustainable Social-Economic Development",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <div className="bg-[url('/assets/images/our-focus/Background.png')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center px-4 md:px-[4rem] lg:px-[7.6rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-[#EEF3FF] px-7 py-14 rounded-xl overflow-hidden"
          >
            <Transition2 texts={[texts[index]]} interval={5000} />

            <p className="my-6 text-black font-inter">
              We collect, assess & leverage on data to design, deploy &
              disseminate interventions, advocate & inform for collaborative
              impact
            </p>

            <Button2 text="Explore our Work" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GlobalComponent;
