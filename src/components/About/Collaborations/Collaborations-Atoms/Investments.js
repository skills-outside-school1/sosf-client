import React from "react";
import Image from "next/image";

const Investments = () => {
  // List of investment types (1–6)
  const investmentItems = [
    {
      id: 1,
      title: "Cash",
      description:
        "Direct financial contributions – CSR, Grants, Zakat, Sadaqah etc.",
    },
    {
      id: 2,
      title: "Liquid Assets",
      description:
        "Contributions in the form of shares, bonds, and other securities.",
    },
    {
      id: 3,
      title: "Non-Liquid Assets",
      description:
        "Investments in art, jewelry, commodities, real estate and others.",
    },
    {
      id: 4,
      title: "In-Kind Resources (Expertise)",
      description:
        "Your network, knowledge or skills on a pro bono basis by joining SOSF Advisors.",
    },
    {
      id: 5,
      title: "In-Kind Resources (Services)",
      description:
        "Contributing products or services from you or your organization at a subsidized rate, free, or adapting them to meet the needs of SOSF Trust beneficiaries.",
    },
    {
      id: 6,
      title: "In-Kind Resources (Products)",
      description:
        "Contributing products from you or your organization at a subsidized rate, free, or adapting them to meet the needs of SOSF beneficiaries.",
    },
  ];

  // List of investment categories (left side)
  const categories = [
    "Restricted: Tailored to specific areas of our work with restriction",
    "Data",
    "Advocacy",
    "Interventions",
  ];

  return (
    <div className="py-8 md:py-10">
      <div className="px-4 md:px-[3rem] lg:px-[7.6rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div>
            <p className="font-semibold text-xl font-mont mb-2">Investment</p>
            <span className="font-inter leading-7 text-[#1F2937]">
              We at SOSF recognize that Investments play a crucial role in
              enhancing our reach, effectiveness, and impact. Investments can be
              from individuals, private & public sector; and other NGOs to
              support SOSF interventions linked to SDG goals 1,2,4,5,8,9,10,13,
              17; and in various as shown:
            </span>

            <p className="font-semibold font-inter my-4">Investments can be:</p>

            <div className="font-inter text-[#1F2937] grid gap-4">
              {categories.map((category, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <Image
                    src="/assets/images/collaborations/mark.svg"
                    width={15}
                    height={15}
                    alt="mark"
                  />
                  <p>{category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2 font-inter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {investmentItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#EEF3FF] p-4 rounded-lg flex gap-3 items-center"
                >
                  <div className="w-10 h-6 text-[10px] flex items-center justify-center rounded-full bg-[#94B2FF]">
                    {item.id}
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-[18px]">
                      {item.title}
                    </p>
                    <span className="text-[15px]">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
