import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCard from "./CarouselCard";

export default function AmInfoCarousel() {
  const sosf_info = [
    {
      id: 1,
      title: "Our History & Strategy",
      description:
        "Explore our journey from inception to where we stand today, guided by a strategic vision aimed at empowering communities and creating sustainable impact.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    },
    {
      id: 2,
      title: "Our Pillars",
      description:
        "Discover the foundational principles that drive our work, shaping the framework of our interventions and guiding our mission to empower change.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      id: 3,
      title: "Our Core Values",
      description:
        "At the SOSF, we hold integrity, service, and collaboration as our core values, defining our commitment to impactful change.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      id: 4,
      title: "Our USPs",
      description:
        "Skills Outside School Foundation has reached over 100,000 people, delivering tailored solutions to real-world challenges.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      id: 5,
      title: "Our History & Strategy",
      description:
        "Explore our journey from inception to where we stand today, guided by a strategic vision aimed at empowering communities and creating sustainable impact.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    },
    {
      id: 6,
      title: "Our Pillars",
      description:
        "Discover the foundational principles that drive our work, shaping the framework of our interventions and guiding our mission to empower change.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      id: 7,
      title: "Our Core Values",
      description:
        "At the SOSF, we hold integrity, service, and collaboration as our core values, defining our commitment to impactful change.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      id: 8,
      title: "Our USPs",
      description:
        "Skills Outside School Foundation has reached over 100,000 people, delivering tailored solutions to real-world challenges.",
      link: "Visit Page",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const [cardWidthPercent, setCardWidthPercent] = useState(25);
  const carouselRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setCardsPerSlide(1);
        setCardWidthPercent(90);
      } else if (width >= 768 && width < 1024) {
        setCardsPerSlide(3);
        setCardWidthPercent(33.333);
      } else if (width >= 1024 && width < 1280) {
        setCardsPerSlide(3.5);
        setCardWidthPercent(28.5);
      } else {
        setCardsPerSlide(4);
        setCardWidthPercent(25);
      }

      setCurrentSlide(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(sosf_info.length / cardsPerSlide);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="items-center justify-center w-full px-6 pb-16 bg-white md:pb-24 md:px-0">
      <div className="relative py-8 md:mx-auto max-w-[1421px]">
        {/* Section header with navigation */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
            Learn more about SOSF
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrevSlide}
              className="p-2 transition-colors bg-[#E6ECFF] rounded-lg hover:opacity-80"
            >
              <ChevronLeft size={20} className="text-[#0F1724]" />
            </button>
            <button
              onClick={handleNextSlide}
              className="p-2 transition-colors bg-[#E6ECFF] rounded-lg hover:opacity-80"
            >
              <ChevronRight size={20} className="text-[#0F1724]" />
            </button>
          </div>
        </div>

        {/* Carousel content */}
        <div className="relative overflow-hidden" ref={carouselRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * cardWidthPercent}%)`,
            }}
          >
            {sosf_info.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <CarouselCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gray-950 w-8"
                  : "bg-gray-300 w-3 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
