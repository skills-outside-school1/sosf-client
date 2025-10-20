import React from "react";

const Heading = ({ text, className }) => {
  return (
    <span
      className={` mt-2 mb-0 font-mont font-bold text-gray-800 text-3xl md:text-5xl lg:text-[60.25px] mr-auto  ${className}`}
    >
      {text}
    </span>
  );
};

export default Heading;
