import React, { useEffect, useState } from "react";
import TextTransition from "react-text-transition";

export function TextTransitions({ text1, text2, text3 }) {
  const [index, setIndex] = useState(0);
  const TEXTS = [text1, text2, text3];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden  mt-4 px-3  md:px-0   md:mt-0">
      <TextTransition
        springConfig={{
          stiffness: 100,
          damping: 26,
          mass: 1,
          precision: 0.005,
          clamp: true,
          overshootClamping: true,
        }}
        inline
        style={{
          display: "flex-box",
        }}
      >
        <span
          className={`transition-transform transform ease-in-out duration-500  text-gray-800 font-schoolbook font-semibold  text-base   md:text-2xl  w-full ${
            index % 2 === 0 ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {TEXTS[index % TEXTS.length]}
        </span>
      </TextTransition>
    </div>
  );
}
