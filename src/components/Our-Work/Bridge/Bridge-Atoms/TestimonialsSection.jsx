import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";

const partnershipBenefits = [
  {
    text: "Every public school enrolled in Bridge Basic or Intermediate receives free, licensed access to Tongston's full K–12 solution",
  },
  {
    text: "This includes AI-driven curriculum planning, project-based learning tasks, and character assessments across Math, Science, English, and other subjects.",
  },
  {
    text: "Teachers are trained through the TEENS platform, with certification and access to ongoing support, tools, and networking",
  },
  {
    text: "This solution is valued globally but made available to public schools free of charge under Tongston's Corporate Social Responsibility framework.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="flex justify-center w-full px-5 py-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 w-full max-w-[1200px] bg-[#f6f6f6] rounded-[25px] px-4 py-12 relative">
        {/* Left Card */}
        <TestimonialsCard
          heading="Integrated with Tongston's K–12 Entrepreneurial Education Platform"
          items={partnershipBenefits}
          buttonText="Learn More"
        />

        {/* Vertical Divider */}
        <div className=" w-[3px] bg-[#4a7bfc] rounded-full transform h-full" />

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-[493px] justify-between items-start gap-6">
          <div className="flex flex-col gap-5">
            <p className="text-base font-normal leading-6 text-black font-inter">
              How to Get Involved
            </p>

            <h3 className="text-xl font-semibold leading-8 text-black font-mont">
              Are you a Public school principal or teacher, State education board or ministry official, Private partner or donor seeking systemic impact?
            </h3>

            <p className="text-base font-normal leading-6 text-black font-mont">
              Join the Bridge Program to build the next generation of leaders, creators, and problem-solvers
            </p>
          </div>

          <button
            className="h-auto p-2.5 text-[#4a7bfc] hover:text-[#3a6bec] transition-colors"
          >
            <span className="text-base font-normal leading-6 font-inter">
              Apply Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
