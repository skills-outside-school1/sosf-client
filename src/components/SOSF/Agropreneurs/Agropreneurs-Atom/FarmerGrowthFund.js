import Image from "next/image";
import React from "react";

const FarmerGrowthFund = () => {
  const keyFeatures = [
    {
      title: "Input Vouchers",
      desc: "Digital redemption at verified vendors for seeds, fertilizers, and herbicides",
    },
    {
      title: "Equipment Leasing",
      desc: "Group access or subsidized rates for tractors and agro-tools (potential Hello Tractor integration)",
    },
    {
      title: "Working Capital Loans",
      desc: "Low-interest, harvest-aligned loans for running costs",
    },
    {
      title: "AI Platform Access",
      desc: "Financing for app access, continuous M&E, and cooperative onboarding",
    },
    {
      title: "Mobile Money Integration",
      desc: "Disbursements and payments via Flutterwave, Monnify, MTN MoMo",
    },
  ];

  const successData = [
    {
      title: "Farmer Productivity",
      desc: "Increased cassava and plantain yields among initial pilot farmers",
    },
    {
      title: "Financial Inclusion",
      desc: "First-time access to digital finance and input subsidies for rural farmers",
    },
    {
      title: "Digital Empowerment",
      desc: "Transition from extension worker dependency to AI-supported, self-managed farms",
    },
    {
      title: "Data for Change",
      desc: "Every farmer registered into the SOSF Social & Economic Register for future funding, partnerships, and policy influence",
    },
    {
      title: "Scale Strategy",
      desc: "Model adaptable to other agricultural sectors (livestock, grains, tree crops) across Africa",
    },
  ];

  return (
    <section className="px-4 md:px-[4rem] lg:px-[7.6rem] mt-14">
      {/* Header */}
      <div className="flex flex-col items-center text-center text-[#000000] w-full md:max-w-[824px] gap-3 mx-auto">
        <h1 className="font-mont font-semibold text-[20px]">
          SOSF Headstart Farmer Growth Fund
        </h1>
        <p className="font-inter text-[16px] font-normal">
          A dedicated fund designed for the realities of smallholder farmers —
          built to strengthen productivity, not just provide cash.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols md:grid-cols-2 gap-8 md:gap-14 mt-8">
        {/* Key Features */}
        <div className="shadow-[4px_4px_4px_0_rgba(183,200,244,0.5)] rounded-2xl bg-white px-4 md:px-6">
          <h1 className="font-mont text-[20px] font-semibold my-10">
            Key Features:
          </h1>
          <div className="flex flex-col gap-3">
            {keyFeatures.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex gap-4">
                  <div>
                    <Image
                      src="/assets/images/sosf-images/Vector.svg"
                      alt="vector icon"
                      width={25}
                      height={25}
                      className="w-[25px] h-auto mt-1"
                    />
                  </div>
                  <div>
                    <p className="font-mont font-medium text-[18px] mb-2">
                      {item.title}
                    </p>
                    <span className="font-inter font-light text-[16px] leading-2">
                      {item.desc}
                    </span>
                  </div>
                </div>
                <hr
                  className={index === keyFeatures.length - 1 ? "mb-3" : ""}
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Success Data */}
        <div className="shadow-[4px_4px_4px_0_rgba(183,200,244,0.5)] rounded-2xl bg-white px-4 md:px-6">
          <h1 className="font-mont text-[20px] font-semibold my-10">
            What Success Looks Like
          </h1>
          <div className="flex flex-col gap-3">
            {successData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex gap-4">
                  <div>
                    <Image
                      src="/assets/images/sosf-images/Vector.svg"
                      alt="vector icon"
                      width={25}
                      height={25}
                      className="w-[25px] h-auto mt-1"
                    />
                  </div>
                  <div>
                    <p className="font-mont font-medium text-[18px] mb-2">
                      {item.title}
                    </p>
                    <span className="font-inter font-light text-[16px] leading-2">
                      {item.desc}
                    </span>
                  </div>
                </div>
                <hr
                  className={index === successData.length - 1 ? "mb-3" : ""}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerGrowthFund;
