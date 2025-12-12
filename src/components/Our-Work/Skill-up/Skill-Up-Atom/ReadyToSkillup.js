import Button from "@/components/shared/buttons/button2";
import Image from "next/image";
import React from "react";

const ReadyToSkillup = () => {
  return (
    <div
      className="flex justify-center items-center py-16 px-4"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div
        className="bg-[#DDE4F5] text-gray-900 shadow-md rounded-2xl py-10 px-8 w-full max-w-4xl text-center"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        {/* Heading */}
        <h1
          className="text-[24px] md:text-[28px] font-mont font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ready to Skill Up?
        </h1>

        {/* Subtext */}
        <p
          className="text-[18px] md:text-[20px] my-5 font-mont font-medium"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Take the leap. Enroll in OSB or OSC today and transform your future.
        </p>

        {/* Description */}
        <p
          className="text-[16px] md:text-[18px] mt-3 font-mont font-medium mx-auto mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Enroll now and take the definitive step toward building a real,
          investible business or a thriving career. Your potential deserves to
          be unlocked!
        </p>

        {/* Button */}
        <div className="mt-4" data-aos="fade-up" data-aos-delay="400">
          <Button text="Enroll on Udemy" />
        </div>

        {/* Bottom Text */}
        <div
          className="mt-6 flex justify-center items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1 className="text-md font-medium font-mont">
            Apply for Funding as an Ambassador
          </h1>
          <Image
            src="/assets/images/sosf-images/icon.png"
            alt="icon"
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToSkillup;
