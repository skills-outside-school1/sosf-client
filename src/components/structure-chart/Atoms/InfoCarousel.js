import { useState, useEffect, useRef } from "react";
import CustomIcon from "./CustomIcon";
import { Button } from "@/components/structure-chart/Atoms/button";
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
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState("fade-in"); // NEW: fade-in/out
  const total = slides.length;
  const autoSlideRef = useRef(null);

  const goToIndex = (newIndex) => {
    if (newIndex === currentIndex) return;

    // 1. Fade OUT slowly
    setFadeState("fade-out");

    setTimeout(() => {
      setCurrentIndex(newIndex);

      // 2. Fade IN slowly
      setFadeState("fade-in");
    }, 500); // smoother animation (500ms)
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % total;
    goToIndex(nextIndex);
  };

  const startTimer = () => {
    if (total > 0) {
      return setInterval(() => {
        handleNext();
      }, 6000); // slower slide change
    }
    return null;
  };

  useEffect(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    if (!isPaused) autoSlideRef.current = startTimer();

    return () => autoSlideRef.current && clearInterval(autoSlideRef.current);
  }, [total, isPaused]);

  const currentSlide = slides[currentIndex];
  if (!currentSlide) return null;

  const { title, subtitle, sections } = currentSlide;

  return (
    <div
      className="flex flex-col items-center justify-center w-full mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="flex items-end justify-between w-full mb-12">
        <div className="max-w-[85%]">
          <p className="mb-1 text-xl text-gray-600">{subtitle}</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {title}
          </h2>
        </div>

        <Button
          variant="default"
          onClick={handleNext}
          className="md:flex items-center justify-center bg-[#B7C8F4] min-w-[45px] min-h-[45px] rounded-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mb-10 transition-all duration-500 ${
          fadeState === "fade-out"
            ? "opacity-0 translate-y-2"
            : "opacity-100 translate-y-0"
        }`}
      >
        {Object.entries(sections).map(([key, section]) => (
          <div
            key={key}
            className="flex flex-col items-center bg-background_blue shadow-sm rounded-2xl border border-gray-100 p-5 md:p-6 gap-5 w-[300px] md:w-[355px] min-h-[350px]"
          >
            <div className="p-3 rounded-full bg-indigo-50">
              <CustomIcon
                src={sectionIcons[key]}
                alt={section.heading}
                className="w-7 h-7"
              />
            </div>

            <h1 className="text-lg font-semibold text-center">
              {section.heading}
            </h1>

            {section.content ? (
              <p className="px-1 text-sm leading-relaxed text-center text-gray-600">
                {section.content}
              </p>
            ) : (
              <ul className="w-full space-y-2 text-sm text-left text-gray-600 list-none">
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
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300 w-2"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
