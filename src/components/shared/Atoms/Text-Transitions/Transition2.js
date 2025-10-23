"use client";
import React, { useEffect, useState } from "react";

const Transition2 = ({ texts, interval = 4000, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className={`relative h-16 overflow-hidden ${className}`}>
      {texts.map((text, i) => (
        <h1
          key={i}
          className={`absolute w-full font-semibold text-lg md:text-2xl transition-all duration-700 ease-out font-mont ${
            i === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {text}
        </h1>
      ))}
    </div>
  );
};

export default Transition2;
