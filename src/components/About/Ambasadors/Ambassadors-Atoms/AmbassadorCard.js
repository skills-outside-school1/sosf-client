import React from "react";

export default function AmbassadorCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer text-center bg-[#B7C8F4] rounded-[1rem] w-full h-[350px] md:h-[226px] hover:scale-[1.02] transition-all duration-300"
    >
      <div className="px-3 pt-3 md:px-2 md:pt-2">
        <div className="overflow-hidden bg-gray-200 rounded-t-[1rem] aspect-square h-[248px] md:h-[160px] w-full">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <span className="block w-full h-[5px] bg-white"></span>
      <div className="flex flex-col items-center p-3 space-y-0 md:p-0">
        <span className="md:text-[16px] text-lg font-bold text-gray-900 font-mont">
          {item.name}
        </span>
        <span className="text-sm md:text-[11px] font-inter">{item.title}</span>
      </div>
    </div>
  );
}