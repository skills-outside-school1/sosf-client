import React from "react";

const GrantsInfoBox = ({ 
  title, 
  description, 
  bgColor = "bg-white", 
  width = "w-full",
  padding = "p-4"
}) => {
  return (
    <div className={`${width} ${bgColor} rounded-lg ${padding}`}>
      <h3 className="font-mont font-semibold text-[18px] md:text-[20px] mb-3">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed font-mont">
        {description}
      </p>
    </div>
  );
};

export default GrantsInfoBox;