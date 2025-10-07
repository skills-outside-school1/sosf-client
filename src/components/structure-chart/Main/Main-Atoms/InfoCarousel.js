import { useState } from "react";
import CustomIcon from "./CustomIcon";
import { Button } from "@/components/structure-chart/Main/Main-Atoms/button";
import { ChevronRight } from "lucide-react";

const checkIcon = "/assets/icons/check.svg";
const sectionIcons = {
  who: "/assets/icons/01.svg",
  expected: "/assets/icons/02.svg",
  canDo: "/assets/icons/03.svg",
  offers: "/assets/icons/04.svg",
};

export default function InfoCarousel({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = slides.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentSlide = slides[currentIndex];
  const { title, subtitle, sections } = currentSlide;

  return (
    <div className="w-full flex flex-col items-center justify-center transition-all duration-500">
      {/* Header */}
      <div className="flex items-end justify-between w-full mb-12">
        <div>
          <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
        <Button
          variant="default"
          onClick={handleNext}
          className="hidden md:flex items-center gap-2 bg-[#B7C8F4]"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Four Sections (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl mb-10">
        {Object.entries(sections).map(([key, section]) => (
          <div
            key={key}
            className="flex flex-col items-center bg-background_blue border-gray-200 shadow-sm rounded-2xl border border-gray-100 p-[25px] px-[15px] gap-[21px] w-[355px] h-[354px]"
          >
            <CustomIcon
              src={sectionIcons[key]}
              alt={section.heading}
              className="w-6 h-6 text-blue-600"
            />
            <h1 className="text-lg font-semibold">{section.heading}</h1>

            {section.content ? (
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {section.content}
              </p>
            ) : (
              <ul className="text-gray-600 text-sm space-y-2 list-none pl-3 text-left">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CustomIcon
                      src={checkIcon}
                      alt="Check Icon"
                      className="w-[16px] h-[16px]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
