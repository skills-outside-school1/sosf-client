import React from "react";

export default function AmbassadorCard({ ambassador, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer text-center bg-[#B7C8F4] rounded-[1rem] w-3/4 md:w-full mx-auto md:mx-0 hover:scale-[1.02] transition-all duration-300"
    >
      <div className="px-3 pt-3">
        <div className="overflow-hidden bg-gray-200 rounded-t-[1rem] aspect-square h-[200px] md:h-[160px] w-full">
          <img
            src={ambassador.image || "/placeholder.svg"}
            alt={ambassador.name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <span className="block w-full h-[5px] bg-white"></span>
      <div className="p-3">
        <p className="text-sm font-medium text-gray-900 font-mont">
          {ambassador.name}
        </p>
        <span className="text-xs font-inter">{ambassador.title}</span>
      </div>
    </div>
  );
}
