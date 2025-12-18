"use client";
import React from "react";

const button2 = ({
  text = "Click Me",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#B7C8F4] rounded-full px-4 py-2 text-md text-black  hover:bg-[#7b97e4] transition-all duration-200 font-mont ${className}`}
    >
      {text}
    </button>
  );
};

export default button2;
