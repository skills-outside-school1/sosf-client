import React from "react";
import { LucideIcon } from "lucide-react";

export const DetailsCard = ({
  icon: Icon,
  title,
  level,
  description,
  className = "",
  style,
}) => {
  return (
    <div
      className={`flex-1 bg-[#f6f6f6] rounded-[20px] border-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${className}`}
      style={style}
    >
      <div className="flex flex-col items-center gap-[18px] p-[15px]">
        <Icon className="w-[35px] h-[35px] text-[#4A7CFD]" />

        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full">
          <div className="relative flex flex-col items-start self-stretch w-full gap-2">
            <h3 className="relative w-full font-mont font-semibold text-black text-2xl text-center tracking-[0] leading-[normal]">
              {title}
            </h3>
          </div>

          <div className="relative flex flex-col items-start self-stretch w-full gap-2">
            <p className="relative w-full font-mont font-medium text-[#626262] text-lg text-center tracking-[0] leading-[normal]">
              {level}
            </p>
          </div>

          <p className="relative self-stretch min-h-[42px] font-inter font-normal text-base text-center text-black tracking-[0] leading-[normal]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
