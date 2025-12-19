import React from "react";

const MicroGrantsCTASection = ({ 
  title = "Ready to Accelerate Your Impact?",
  description,
  buttonText = "Register Now!",
  buttonBgColor = "bg-[#B7C8F4]",
  buttonHoverColor = "hover:bg-[#60A5FA]"
}) => {
  return (
    <div className="py-12 text-center">
      <h2 className="font-mont font-semibold text-[20px] md:text-[24px] mb-6 max-w-3xl mx-auto">
        {title}
      </h2>
      <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-700 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <button 
        className={`${buttonBgColor} ${buttonHoverColor} text-black font-mont font-medium px-8 py-3 rounded-2xl text-[16px] transition-colors duration-300`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default MicroGrantsCTASection;