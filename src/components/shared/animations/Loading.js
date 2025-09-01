import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  const text = "Skills Outside School ".split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }, // Staggering effect
    }),
  };

  return (
    <div className="loading-overlay bg-white  w-full h-screen fixed flex  flex-col gap-y-3   md:flex-row  flex-1 justify-center items-center p-4">
      <motion.span
        initial="hidden"
        animate="visible"
        className="font-schoolbook text-3xl md:text-6xl   lg:text-8xl text-center font-black  text-transparent bg-clip-text bg-gradient-to-r  from-secondary_blue      via-blue   to-sosfCyan flex"
      >
        {text.map((letter, i) => (
          <motion.span key={i} custom={i} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
