import { useEffect, useState } from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Aos from "aos";
import "aos/dist/aos.css";
import { P, H1 } from "@/components/shared/Atoms/Typography/typography";

export default function GlobalImpact() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-linear",
      mirror: true,
      anchorPlacement: "top-center",
      throttleDelay: 300,
      throttle: true,
    });
  }, [Aos]);

  const impactdata = [
    {
      heading2: "Our Global Impact",
      paragraph:
        "Since 2014, we have impacted over 100,000 people across Africa by promoting sustainable socio-economic development through data-driven education, employability, and entrepreneurship, guided by our core values of Integrity, Collaboration, and Service.",
    },
  ];

  const counters = [
    {
      number: 100,
      alpha: "",
      char: "+",
      description: "Countries Reached",
    },
    {
      number: 1200,
      alpha: "",
      char: "+",
      description: "Volunteers, Mentors & Trainers",
    },
    {
      number: 11,
      alpha: "",
      char: "",
      description: "Years of Impact",
    },
    {
      number: 100,
      alpha: "k",
      char: "+",
      description: "Businesses Reached ",
    },
    {
      number: 150,
      alpha: "",
      char: "+",
      description: "Investors & Partners",
    },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = [];

    counters.forEach((counter, index) => {
      let start = 0;
      const increment = Math.ceil(counter.number / 100);
      const interval = setInterval(() => {
        start += increment;
        if (start >= counter.number) {
          clearInterval(interval);
          start = counter.number;
        }
        setCounts((prevCounts) => {
          const updatedCounts = [...prevCounts];
          updatedCounts[index] = start;
          return updatedCounts;
        });
      }, 100); // Adjust interval time for smoother/faster animations
      intervals.push(interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="w-full">
      <SubHero items={impactdata} aos="fade-in" className="mb-9" />

      {/* Counter Section */}
      <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-y-[30px] gap-x-[30px] shrink-0 mt-5  lg:grid-cols-3 justify-start items-start  px-5  md:px-[4.3rem] lg:px-[7rem] lg:w-[90%]">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="flex w-full flex-col justify-center items-start gap-y-4"
          >
            <span className="flex flex-row gap-x-2 justify-start items-start text-[#333333] font-lato font-bold text-3xl md:text-4xl lg:text-[37.58px]">
              <H1 className="font-schoolbook text-3xl md:text-4xl lg:text-[37.58px]">
                {counts[index]}
              </H1>
              {counter.alpha}
              <span className="font-inter text-2xl ">{counter.char}</span>
            </span>
            <P>{counter.description}</P>
          </div>
        ))}
      </div>
    </div>
  );
}
