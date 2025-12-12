import React from "react";
import Animate from "@/components/shared/Animate";

const whatYouGetItems = [
  {
    title: "Certification & Digital Badges",
    description: "Earn recognized credentials that validate your skills.",
    delay: 100,
  },
  {
    title: "Access to T-World",
    description: "Connect with mentors and grow your network.",
    delay: 200,
  },
  {
    title: "AI-Integrated Modules",
    description: "Cutting-edge tools with practical templates.",
    delay: 300,
  },
  {
    title: "Real World Use Cases",
    description: "Real-world examples and project-based learning.",
    delay: 400,
  },
  {
    title: "Career Collaboration",
    description: "Job matching and placement opportunities.",
    delay: 500,
  },
];

const WhatYouGet = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <Animate animation="fade-up" delay={200}>
        <h1 className="font-mont font-semibold text-[20px] mb-10">
          What you get
        </h1>
      </Animate>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center px-4 lg:px-10 gap-6 lg:gap-3">
        {whatYouGetItems.map((item, index) => (
          <Animate key={index} animation="zoom-in" delay={item.delay}>
            <div>
              <h1 className="font-medium text-[18px] font-mont">
                {item.title}
              </h1>
              <hr className="my-2 hover:border-2 hover:border-blue/20" />
              <p className="font-medium text-[15px] font-inter">
                {item.description}
              </p>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
