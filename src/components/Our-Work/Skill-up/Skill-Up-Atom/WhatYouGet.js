import React from "react";
import Animate from "@/components/shared/Animate";

const WhatYouGet = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <Animate animation="fade-up" delay={200}>
        <h1 className="font-mont font-semibold text-[20px] mb-10">
          What you get
        </h1>
      </Animate>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center px-4 lg:px-10 gap-6 lg:gap-3">
        <Animate animation="zoom-in" delay={100}>
          <div>
            <h1 className="font-medium text-[18px] font-mont">
              Certification & Digital Badges
            </h1>
            <hr className="my-2 hover:border-2 hover:border-blue/20" />
            <p className="font-medium text-[15px] font-inter">
              Earn recognized credentials that validate your skills.
            </p>
          </div>
        </Animate>

        <Animate animation="zoom-in" delay={200}>
          <div>
            <h1 className="font-medium text-[18px] font-mont">
              Access to T-World
            </h1>
            <hr className="my-2 hover:border-2 hover:border-blue/20" />
            <p className="font-medium text-[15px] font-inter">
              Connect with mentors and grow your network.
            </p>
          </div>
        </Animate>

        <Animate animation="zoom-in" delay={300}>
          <div>
            <h1 className="font-medium text-[18px] font-mont">
              AI-Integrated Modules
            </h1>
            <hr className="my-2 hover:border-2 hover:border-blue/20" />
            <p className="font-medium text-[15px] font-inter">
              Cutting-edge tools with practical templates.
            </p>
          </div>
        </Animate>

        <Animate animation="zoom-in" delay={400}>
          <div>
            <h1 className="font-medium text-[18px] font-mont">
              Real World Use Cases
            </h1>
            <hr className="my-2 hover:border-2 hover:border-blue/20" />
            <p className="font-medium text-[15px] font-inter">
              Real-world examples and project-based learning.
            </p>
          </div>
        </Animate>

        <Animate animation="zoom-in" delay={500}>
          <div>
            <h1 className="font-medium text-[18px] font-mont">
              Career Collaboration
            </h1>
            <hr className="my-2 hover:border-2 hover:border-blue/20" />
            <p className="font-medium text-[15px] font-inter">
              Job matching and placement opportunities.
            </p>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default WhatYouGet;
