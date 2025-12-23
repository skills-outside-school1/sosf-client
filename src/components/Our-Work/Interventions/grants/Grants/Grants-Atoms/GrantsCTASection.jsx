import React from "react";

const GrantsCTASection = ({ 
  title = "Begin your journey by submitting an Online Funding Inquiry (OFI) today!",
  buttonText = "Begin Now!",
  buttonBgColor = "bg-[#B7C8F4]",
  buttonHoverColor = "hover:bg-[#60A5FA]"
}) => {
  return (
    <div className="py-12 text-center">
      <h2 className="font-mont font-semibold text-[20px] md:text-[24px] mb-9 max-w-3xl mx-auto">
        {title}
      </h2>
      <button 
        className={`${buttonBgColor} ${buttonHoverColor} text-black font-mont font-medium px-8 py-3 rounded-2xl text-[16px] transition-colors duration-300`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default GrantsCTASection;