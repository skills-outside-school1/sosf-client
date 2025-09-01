import { motion } from "framer-motion";
import React from "react";

const PenWritingAnimation = () => {
  // SVG Paths for "SOSF" letters
  const letters = [
    // "S"
    "M20 60 C 20 20, 80 20, 80 40 C 80 60, 20 60, 20 80 C 20 100, 80 100, 80 80",
    // "O"
    "M110 60 C 110 40, 150 40, 150 60 C 150 80, 110 80, 110 60 Z",
    // "S"
    "M180 60 C 180 20, 240 20, 240 40 C 240 60, 180 60, 180 80 C 180 100, 240 100, 240 80",
    // "F"
    "M270 20 L 270 100 M 270 20 H 320 M 270 60 H 300",
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <svg
        viewBox="0 0 350 150"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-2xl"
      >
        {letters.map((path, index) => (
          <React.Fragment key={index}>
            {/* Letter Path */}
            <motion.path
              d={path}
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: index * 2, // Stagger tracing for each letter
                ease: "easeInOut",
              }}
            />

            {/* Pen */}
            <motion.circle
              r="4"
              fill="red"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 2, // Sync with path animation start
                ease: "easeInOut",
              }}
            >
              <motion.animateMotion
                path={path}
                dur="2s"
                repeatCount="4"
                begin={`${index * 2}s`}
                fill="freeze"
              />
            </motion.circle>
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default PenWritingAnimation;
