import Image from "next/image";
import React, { useState, useEffect } from "react";

const WhereWeWork = () => {
  const successData = [
    {
      title: "Unemployed Youth",
      img: "/assets/images/sosf-images/UY.png",
      pre: "Lack of confidence, unclear job/venture path",
      post: "Job-ready or venture-ready with confidence and tools",
    },
    {
      title: "Early Entrepreneurs",
      img: "/assets/images/sosf-images/EE.png",
      pre: "Unstructured business idea",
      post: "Validated venture with legal setup, financial tools, and market plan",
    },
    {
      title: "Higher Ed Students",
      img: "/assets/images/sosf-images/HES.png",
      pre: "No exposure to real-world business/career planning",
      post: "Built entrepreneurial and career toolkits aligned with national/international standards",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-center flex flex-col justify-center items-center px-4">
        <h1 className="font-mont font-semibold text-[22px] md:text-4xl mb-3 tracking-tight">
          Where We Work
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl font-inter font-light mb-12">
          With learners in 100+ countries, OSB/OSC are designed for global
          access via mobile and desktop. Priority geographies are determined by:
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center text-center px-4 lg:px-10 gap-6 lg:gap-8">
        {[
          "Youth unemployment",
          "NSME density",
          "Digital skills readiness",
          "National entrepreneurship/employability policies",
          "Gender digital divide and equity metrics",
        ].map((item, index) => (
          <div key={index} className="w-full lg:w-auto px-2 group">
            <h1 className="font-medium text-[17px] md:text-[18px] font-mont">
              {item}
            </h1>
            <hr className="mt-2 border border-gray-300 group-hover:border-[#6558D3] transition-all duration-200" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 px-4 md:px-16">
        <div>
          <h1 className="font-semibold font-mont text-[20px] my-6">
            Our Approach to Online Learning
          </h1>
          <span className="font-mont font-medium text-[18px]">
            Global Reach, Deep Impact
          </span>
          <p className="font-medium font-mont text-md leading-8 mt-6">
            Our Online Skill Up for Business & Career initiatives are part of
            SOSF's broader Venture Philanthropy approach. Managed by PIF Africa
            and Tongston Ventures, this online learning solution provides
            targeted courses and tools globally, fostering both entrepreneurs
            and intrapreneurs to prepare for the future of work and enterprise.
          </p>
        </div>

        <div>
          <h1 className="font-semibold font-mont text-[20px] my-6">
            What Success Looks Like
          </h1>
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <Image
                src={successData[currentIndex].img}
                alt={successData[currentIndex].title}
                width={35}
                height={35}
                className="transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-[20px] font-semibold mb-4">
                {successData[currentIndex].title}
              </h1>
              <div className="bg-[#DDE4F5] rounded-lg py-6 px-4 text-gray-900 transition-all duration-500 ease-in-out">
                <h1 className="text-[18px] font-mont font-medium mt-2">
                  Pre Intervention
                </h1>
                <p className="font-normal text-md">
                  {successData[currentIndex].pre}
                </p>
                <h1 className="text-[18px] font-mont font-medium mt-4">
                  Post Intervention
                </h1>
                <p className="font-normal text-md">
                  {successData[currentIndex].post}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWork;
