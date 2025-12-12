import Image from "next/image";
import React from "react";
import Animate from "@/components/shared/Animate";

const OSC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16">
      {/* Heading */}
      <Animate animation="fade-up">
        <h1 className="font-mont font-semibold text-[22px] md:text-4xl mb-4 tracking-tight">
          OSC: Online Skill-Up for Career
        </h1>
      </Animate>

      {/* Paragraph */}
      <Animate animation="fade-up" delay={100}>
        <p className="text-base md:text-lg leading-7 max-w-4xl font-inter font-light mb-12">
          The Online Skill Up for Career (OSC) is a flagship digital course
          series designed by SOSF to prepare job seekers, students, and young
          professionals for meaningful intrapreneurial careers. Rooted in
          Tongston’s Entrepreneurial Thinking model, OSC builds essential
          knowledge, skills, and attitudes through practical learning, AI-driven
          tools, and real-world career scenarios. Delivered globally via Udemy,
          OSC equips you to excel in the modern workforce. Tailored for
          students, job seekers, and intrapreneurs, OSC focuses on:
        </p>
      </Animate>

      {/* Two Column Area */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl w-full">
        {/* Left: Features */}
        <div className="flex flex-col gap-6">
          {[
            "Job Readiness & Professional Branding",
            "Communication, Leadership & Critical Thinking",
            "Teamwork, Ethics & Digital Literacy",
            "Personal Productivity & Soft Skills",
            "Project & Stakeholder Management",
          ].map((text, idx) => (
            <Animate key={idx} animation="fade-right" delay={100 + idx * 100}>
              <div className="flex items-start gap-3">
                <Image
                  src={`/assets/images/collaborations/${idx + 1}.png`}
                  alt="icon"
                  width={32}
                  height={32}
                  className="opacity-90"
                />
                <p className="text-[17px] font-inter text-left">{text}</p>
              </div>
            </Animate>
          ))}
        </div>

        {/* Right: Benefits */}
        <div className="flex flex-col items-start text-left gap-5">
          <Animate animation="fade-left" delay={100}>
            <h2 className="text-[20px] md:text-[22px] font-semibold font-mont">
              Your Post-Course Benefits
            </h2>
          </Animate>

          <Animate animation="fade-left" delay={200}>
            <p className="font-inter max-w-md leading-relaxed">
              Upon completing any OSC course, you will unlock:
            </p>
          </Animate>

          <div className="flex flex-col gap-6 mt-2">
            {[
              "Certification and digital badges to showcase your newly acquired skills.",
              "Access to further support on the T-World platform, including job readiness assessments, personalized mentorship, and curated employment opportunities.",
            ].map((text, idx) => (
              <Animate key={idx} animation="fade-left" delay={300 + idx * 100}>
                <div className="flex items-start gap-3">
                  <Image
                    src={`/assets/images/collaborations/${idx + 1}.png`}
                    alt="icon"
                    width={32}
                    height={32}
                    className="opacity-90"
                  />
                  <p className="text-[17px] font-inter">{text}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSC;
