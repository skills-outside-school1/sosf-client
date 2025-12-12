import Image from "next/image";
import React from "react";
import Animate from "@/components/shared/Animate"; // reusable AOS wrapper

const StrategicDeployment = () => {
  const items = [
    {
      img: "/assets/images/sosf-images/prioritize.png",
      text: "Prioritize country-specific marketing and outreach",
    },
    {
      img: "/assets/images/sosf-images/filters.png",
      text: "Refine follow-up support and partner alignment",
    },
    {
      img: "/assets/images/sosf-images/align-justify.png",
      text: "Justify differentiated funding strategies through SOSF Grants and SOSF Funds",
    },
    {
      img: "/assets/images/sosf-images/tailor-chalk.png",
      text: "Tailor content and onboarding strategies to regional and demographic needs",
    },
    {
      img: "/assets/images/sosf-images/id-card-clip.png",
      text: "Identify local allies and scale pathways",
    },
  ];

  return (
    <div className="my-28 flex flex-col justify-center items-center px-6">
      {/* Heading */}
      <Animate animation="fade-up">
        <h1 className="font-mont font-semibold text-[22px] md:text-3xl mb-4 tracking-tight text-center">
          Strategic Deployment & Continuous Improvement
        </h1>
      </Animate>

      {/* Paragraph */}
      <Animate animation="fade-up" delay={100}>
        <p className="text-base md:text-lg leading-relaxed max-w-4xl font-light mb-16 text-center font-mont">
          We continuously refine our OSB/OSC programs using a desktop evaluation
          strategy that analyzes global indicators related to youth
          unemployment, GDP, MSME prevalence, digital skills readiness, and
          more. This data-driven approach, combined with contextual qualitative
          country readiness mapping, allows us to:
        </p>
      </Animate>

      {/* Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center place-items-center text-center">
        {items.map((item, index) => (
          <Animate key={index} animation="fade-up" delay={150 + index * 100}>
            <div className="flex flex-col justify-center items-center gap-4 px-4">
              <Image src={item.img} width={40} height={40} alt="icon" />
              <h1 className="font-mont text-[17px] md:text-[18px] font-medium leading-snug">
                {item.text}
              </h1>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default StrategicDeployment;
