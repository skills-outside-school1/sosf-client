"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion5 = ({
  items = [],
  className = "",
  titleClass = "",
  contentClass = "",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`w-full flex flex-col divide-y divide-gray-300 bg-white overflow-hidden ${className}`}
    >
      {items.map((item, index) => (
        <div key={index} className="transition-all duration-300">
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-left px-6 py-5  transition-all duration-200"
          >
            <h3
              className={`font-semibold text-base md:text-lg text-gray-800 ${titleClass}`}
            >
              {item.title}
            </h3>
            <ChevronDown
              className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Content */}
          <div
            className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-[500px] py-3 opacity-100"
                : "max-h-0 opacity-0"
            } ${contentClass}`}
          >
            <p className="text-sm md:text-base leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion5;
