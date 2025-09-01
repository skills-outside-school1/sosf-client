import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterAnimation() {
  const text = "S O S F ".split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }, // Staggering effect
    }),
  };

  return (
    <div className="loading-overlay ">
      <motion.span
        initial="hidden"
        animate="visible"
        className=" text-gray-800  hover:text-blue  font-mont font-thin  md:ml-6  transform duration-700 ease-in-out    animated-text  flex flex-row gap-x-4 "
      >
        {text.map((letter, i) => (
          <motion.span key={i} custom={i} variants={letterVariants}>
            <Link href={`/`} className="">
              {" "}
              {letter}
            </Link>
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
