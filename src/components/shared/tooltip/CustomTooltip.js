"use client"

import { useState } from "react"

const CustomTooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="relative inline-block w-full"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* This is the element that triggers the tooltip */}
      {children}

      {/* The actual tooltip that appears on hover */}
      {isVisible && (
        <div
          className="absolute bottom-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 mb-2 z-50 w-full max-w-[260px]"
          role="tooltip"
        >
          {/* The main content box with your specified styles */}
          <div 
            className="w-full bg-white text-black text-sm rounded-lg shadow-lg p-4 text-left border border-gray-200"
          >
            <p className="text-gray-700 leading-relaxed">{content}</p>
          </div>
          {/* The triangular pointer - centered for mobile, left for desktop */}
          <div 
            className="absolute left-1/2 md:left-6 top-full transform -translate-x-1/2 md:translate-x-0
                      w-0 h-0 
                      border-l-[16px] border-l-transparent
                      border-r-[16px] border-r-transparent
                      border-t-[16px] border-t-[#B7C8F4]"
          ></div>
        </div>
      )}
    </div>
  )
}

export default CustomTooltip