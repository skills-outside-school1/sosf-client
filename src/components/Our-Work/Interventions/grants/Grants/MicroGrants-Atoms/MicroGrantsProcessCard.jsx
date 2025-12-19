import React from "react";

const MicroGrantsProcessCard = ({ 
  title, 
  description, 
  bgColor = "bg-white",
  height = "auto"
}) => {
  return (
    <div 
      className={`${bgColor} p-6 rounded-lg ${height} flex flex-col`}
    >
      <h3 className="mb-3 text-lg font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default MicroGrantsProcessCard;