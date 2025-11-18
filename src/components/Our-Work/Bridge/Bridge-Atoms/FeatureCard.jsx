import React from "react";
import Image from "next/image";


const FeatureCard= ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-transparent border-0 shadow-none">
      <Image className="w-12 h-12" src={icon} alt={title} width={48} height={48} />
      <div className="flex flex-col items-center w-full gap-3">
        <h3 className="text-xl font-medium leading-6 text-center text-black tracking-0 font-mont">
          {title}
        </h3>
        <p className="text-base font-normal leading-6 text-center text-black tracking-0 font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
