import Image from "next/image";
import React from "react";

const OurAi = () => {
  const aiFeatures = [
    {
      title: "Farm Geo-Tagging & Monitoring",
      desc: "Pin, track, and record all farm activities with AgUnity’s blockchain-based platform.",
    },
    {
      title: "Simple Bookkeeping Tools",
      desc: "Expense tracking, revenue logging, and peer-to-peer finance visibility even for low-literate users.",
    },
    {
      title: "Conversational AI Assistant",
      desc: "Multilingual voice/text chatbot (via Digital Green’s Farmer.Chat) giving real-time, farm-specific advice without needing literacy.",
    },
    {
      title: "Supplier & Market Directory",
      desc: "Discover nearby input vendors and marketplaces via integrated Google Maps + Places APIs.",
    },
    {
      title: "Weather + Crop Forecasts",
      desc: "Soil moisture, rainfall, and yield predictions using Weatherbit and crop AI models.",
    },
    {
      title: "Marketplace + Peer Support",
      desc: "Trade tools, access group services, and share inputs via a trusted farmer cooperative community.",
    },
  ];

  return (
    <div className="bg-[url('/assets/images/sosf-images/OurAI.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center px-4 md:px-[4rem] lg:px-[7.6rem] text-white mt-14 py-10">
      <div className="w-full max-w-[1024px]">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-mont font-semibold text-[20px] md:text-[24px]">
            Our AI-Powered Agro-Support Platform
          </h1>
          <p className="font-inter font-light text-[14px] md:text-[16px] mt-2 mb-4">
            From Extension Workers to Intelligent Agents — We are replacing
            manual extension systems with a mobile-based, AI-powered solution
            that puts farmers in control.
          </p>
        </div>

        {/* Features */}
        <div className="w-full">
          <h1 className="font-mont font-semibold text-[20px] md:text-[22px] text-center mb-6">
            Key Features:
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <Image
                  src="/assets/images/sosf-images/Vector.png"
                  alt="vector icon"
                  width={30}
                  height={30}
                  className="mt-1 w-[25px] h-auto"
                />
                <div>
                  <p className="font-mont font-medium text-[16px] md:text-[18px] mb-2">
                    {feature.title}
                  </p>
                  <span className="font-inter font-light text-[14px] md:text-[16px] leading-relaxed">
                    {feature.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAi;
