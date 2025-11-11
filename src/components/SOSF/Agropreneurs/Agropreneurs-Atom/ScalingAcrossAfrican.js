import Link from "next/link";
import React from "react";

const ScalingAcrossAfrican = () => {
  return (
    <section className="px-4 md:px-[4rem] lg:px-[7.6rem] mt-14 mb-4">
      <div className=" bg-[#EDF1FC] grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-6 rounded-2xl">
        <div className=" flex flex-col md:flex-row justify-between">
          <div>
            <h1 className=" font-mont text-[20px] font-medium">
              Scaling Across Africa
            </h1>
            <p className=" font-inter text-[15px] font-normal mt-4 leading-6">
              We started with cassava and plantain farmers in Nigeria — now
              we’re expanding to More crops, Livestock sectors, More African
              countries, More local input vendors & coops. Our goal is to
              digitally connect farmers to opportunity, while building a
              scalable model that enables agricultural transformation.
            </p>
          </div>
          <div className=" hidden md:block w-3 h-full bg-[#D9D9D9]"></div>
          <div className=" md:hidden w-full h-[2px] bg-[#D9D9D9] mt-4"></div>
        </div>
        <div className=" col-span-2">
          <p className=" font-inter text-[16px] font-normal">
            Partner or Onboard Farmers
          </p>
          <h1 className=" my-4 font-mont font-semibold text-[20px]">
            Are you a cooperative, vendor, farmer group, a funder, input
            supplier, or agri-tech partner?
          </h1>
          <p className=" font-mont font-normal text-[#000000] text-[16px]">
            Join us to Digitize rural agriculture, Empower farmers with AI,
            Scale inclusive agribusiness in Africa
          </p>

          {/* Button */}
          <Link href="/#">
            <button className="bg-[#B7C8F4] hover:bg-[#5f8bfc] text-[#1F2937] font-normal font-mont duration-200 rounded-2xl px-14 py-2 mt-8 transition-colors">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScalingAcrossAfrican;
