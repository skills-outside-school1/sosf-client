import Image from "next/image";
import React from "react";

const OSB = () => {
  return (
    <div className="my-8">
      <h1 className="text-center font-mont font-semibold text-[20px] mb-10 px-3">
        OSB: Online Skill-Up for Business
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-20">
        {/* LEFT SIDE IMAGE TEXT */}
        <div>
          <Image
            src="/assets/images/sosf-images/OSB.jpg"
            alt="OSB-images"
            width={400}
            height={400}
            className="w-full rounded-lg"
          />

          <h1 className="font-medium text-md my-5">Key Offerings</h1>

          <p className="font-normal text-md font-inter leading-8">
            It is designed for early-stage entrepreneurs and venture builders,
            OSB includes 15+ modules covering: Business Idea Validation &
            Strategic Planning, Finance & Fundraising Readiness, Branding,
            Communications & Marketing, Legal Structures, Compliance &
            Governance, Team Management, HR & Productivity Tools, IT
            Infrastructure & Digital Enablement, Data, M&E, and Stakeholder
            Management.
          </p>
        </div>

        {/* RIGHT SIDE LISTS */}
        <div>
          <h1 className="font-medium text-[#4A7CFD] font-inter text-[20px]">
            Practical, Hands-on Learning:
          </h1>

          <p className="text-md font-inter font-normal my-4">
            Each module is packed with actionable insights, real-life examples,
            and AI tools designed to simplify complex tasks. For example:
          </p>

          <div className="flex flex-col gap-4">
            <div className="bg-[#F8F8F8] py-2 px-6 rounded-lg leading-7 mt-6">
              <h1 className="font-bold">
                Implementing Strong Corporate Governance & Legal Structures
              </h1>
              <p>
                Learn to choose the right legal structure, navigate business
                registration, understand owner/director roles, draft critical
                documents, set up effective boards, design smart shareholding,
                optimize tax obligations.
              </p>
            </div>

            <div className="bg-[#F8F8F8] py-2 px-6 rounded-lg leading-7 mt-2">
              <h1 className="font-bold">
                Building and Communicating a Strong Brand
              </h1>
              <p>
                Uncover what makes successful brands stand out. Define your
                brand identity, messaging, and positioning. Learn strategies for
                identifying and targeting ideal customers, effective
                communication.
              </p>
            </div>

            <div className="bg-[#F8F8F8] py-2 px-6 rounded-lg leading-7 mt-2">
              <h1 className="font-bold">
                Managing and Projecting your Business Finances
              </h1>
              <p>
                Demystify business finance. Learn to read and understand
                financials, forecast sales/costs, create practical budgets,
                master bookkeeping basics, understand payment systems
                (Flutterwave, Stripe, Paystack).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSB;
