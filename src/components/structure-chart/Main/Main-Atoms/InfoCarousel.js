import { useState, useEffect, useRef } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false); 
  const total = slides.length;
  const autoSlideRef = useRef(null);

  // Helper function to handle the actual index change with fade
  const goToIndex = (newIndex) => {
    if (newIndex === currentIndex) return;

    // 1. Start the fade-out
    setIsFading(true); 

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false); 
    }, 300); // 300ms for fade-out duration
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % total;
    goToIndex(nextIndex);
  };

  const handleDotClick = (index) => {
    goToIndex(index);
  };

  // Function to start the auto-slide timer
  const startTimer = () => {
    if (total > 0) {
      // Shorter interval: 4000ms (4 seconds)
      return setInterval(() => {
        handleNext();
      }, 4000); 
    }
    return null;
  };
  useEffect(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    if (!isPaused) {
      autoSlideRef.current = startTimer();
    }

    // Cleanup function
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [total, isPaused]); 

  // Handlers for mouse events
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const currentSlide = slides[currentIndex];
  if (!currentSlide) return null; 
  
  const { title, subtitle, sections } = currentSlide;
  
  // Tailwind class based on the fading state
  const fadeClass = isFading ? 'opacity-0' : 'opacity-100';

  return (
    <div 
      className="w-full flex flex-col items-center justify-center transition-all duration-500"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
    >
      {/* Header */}
      <div className="flex items-end justify-between w-full mb-12">
        <div>
          <p className=" text-gray-600 mb-2 text-xl ">{subtitle}</p>
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
      <div 
        // Apply the transition class and the dynamic opacity class
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl mb-10 transition-opacity duration-300 ease-in-out ${fadeClass}`}
      >
        {Object.entries(sections).map(([key, section]) => (
          <div
            key={key}
            className="flex flex-col items-center bg-background_blue  shadow-sm rounded-2xl border border-gray-100  p-5  md:p-[25px] md:px-[15px] gap-[21px] w-[300px] md:w-[355px] min-h-[354px]   max-h-[fixed]"
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
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}