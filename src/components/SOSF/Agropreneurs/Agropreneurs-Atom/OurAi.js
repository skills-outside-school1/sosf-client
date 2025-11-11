import Image from "next/image";
import React from "react";

const OurAi = () => {
  return (
    <div className="bg-[url('/assets/images/sosf-images/OurAI.png')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center px-4 md:px-[4rem] lg:px-[7.6rem] text-white mt-14">
      <div>
        <div className=" text-center">
          <h1 className=" font-mont font-semibold text-[20px]">
            Our AI-Powered Agro-Support Platform
          </h1>
          <p className=" font-inter font-light text-[14px] mt-2 mb-4">
            From Extension Workers to Intelligent Agents" We are replacing
            manual extension systems with a mobile-based, AI-powered solution
            that puts farmers in control.
          </p>
        </div>
        <div className=" w-full ">
          <h1 className=" font-mont font-semibold text-[20px] text-center mb-6">
            Key Features:
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* 1 */}
            <div className=" flex gap-4">
              <div>
                <Image
                  src="/assets/images/sosf-images/Vector.png"
                  alt="vector image"
                  width={30}
                  height={30}
                  className=" mt-1"
                />
              </div>
              <div>
                <p className=" font-mont font-medium text-[18px] mb-2">
                  Farm Geo-Tagging & Monitoring
                </p>
                <span className=" font-inter font-light text-[16px]">
                  Pin, track, and record all farm activities with AgUnity’s
                  blockchain-based platform.
                </span>
              </div>
            </div>
            {/* 2 */}
            <div className=" flex gap-4">
              <div>
                <Image
                  src="/assets/images/sosf-images/Vector.png"
                  alt="vector image"
                  width={30}
                  height={30}
                  className=" mt-1"
                />
              </div>
              <div>
                <p className=" font-mont font-medium text-[18px] mb-2">
                  Simple Bookkeeping Tools
                </p>
                <span className=" font-inter font-light text-[16px]">
                  Expense tracking, revenue logging, and peer-to-peer finance
                  visibility even for low-literate users.
                </span>
              </div>
            </div>
            {/* 3 */}
            <div className=" flex gap-4">
              <div>
                <Image
                  src="/assets/images/sosf-images/Vector.png"
                  alt="vector image"
                  width={40}
                  height={30}
                  className=" mt-1"
                />
              </div>
              <div>
                <p className=" font-mont font-medium text-[18px] mb-2">
                  Conversational AI Assistant
                </p>
                <span className=" font-inter font-light text-[16px]">
                  Multilingual voice/text chatbot (via Digital Green’s
                  Farmer.Chat) giving real-time, farm-specific advice without
                  needing literacy.
                </span>
              </div>
            </div>
            {/* 4 */}
            <div className=" flex gap-4">
              <div>
                <Image
                  src="/assets/images/sosf-images/Vector.png"
                  alt="vector image"
                  width={30}
                  height={30}
                  className=" mt-1"
                />
              </div>
              <div>
                <p className=" font-mont font-medium text-[18px] mb-2">
                  Supplier & Market Directory
                </p>
                <span className=" font-inter font-light text-[16px]">
                  Discover nearby input vendors and marketplaces via integrated
                  Google Maps + Places APIs.
                </span>
              </div>
            </div>
            {/* 5 */}
            <div className=" flex gap-4">
              <div>
                <Image
                  src="/assets/images/sosf-images/Vector.png"
                  alt="vector image"
                  width={30}
                  height={30}
                  className=" mt-1"
                />
              </div>
              <div>
                <p className=" font-mont font-medium text-[18px] mb-2">
                  Weather + Crop Forecasts
                </p>
                <span className=" font-inter font-light text-[16px]">
                  Soil moisture, rainfall, and yield predictions using
                  Weatherbit and crop AI models.
                </span>
              </div>
            </div>
            {/* 6 */}
            <div className=" flex gap-4">
              <div>
                <Image
                  src="/assets/images/sosf-images/Vector.png"
                  alt="vector image"
                  width={30}
                  height={30}
                  className=" mt-1"
                />
              </div>
              <div>
                <p className=" font-mont font-medium text-[18px] mb-2">
                   Marketplace + Peer Support
                </p>
                <span className=" font-inter font-light text-[16px]">
                  Trade tools, access group services, and share inputs via a
                  trusted farmer cooperative community.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAi;
