import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



/**
 * ContentCarousel Component
 *
 *
 * Props:
 * @param {Array} items - Array of content objects to render in the carousel. Each item should have a unique `id`.
 * @param {string} [title] - Optional section title displayed above the carousel.
 * @param {React.ComponentType} CardComponent - Component used to render each carousel card.
 * @param {boolean} [showDots=true] - Toggles visibility of the slide indicator dots below the carousel.
 * @param {boolean} [showNavigation=true] - Toggles visibility of the left and right navigation buttons.
 * @param {Function} [onCardClick] - Optional click handler that triggers when a card is clicked. Receives the clicked `item` as an argument.
 * @param {string} [className=""] - Optional additional class names for styling the outer section wrapper.
 *
 * Example usage:
 * <ContentCarousel
 *    items={dataArray}
 *    title="Explore Our Work"
 *    CardComponent={MyCard}
 *    onCardClick={(item) => console.log(item)}
 * />
 */

export default function ContentCarousel({
  items,
  title,
  CardComponent,
  showDots = true,
  showNavigation = true,
  onCardClick,
  className = "",
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [cardWidthPercent, setCardWidthPercent] = useState(100);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setIsMobile(true);
        setCardsPerSlide(1);
        setCardWidthPercent(85);
      } else if (width >= 768 && width < 1024) {
        setIsMobile(false);
        setCardsPerSlide(2);
        setCardWidthPercent(50);
      } else if (width >= 1024 && width < 1280) {
        setIsMobile(false);
        setCardsPerSlide(3);
        setCardWidthPercent(33.333);
      } else {
        setIsMobile(false);
        setCardsPerSlide(4);
        setCardWidthPercent(25);
      }

      setCurrentSlide(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(items.length / cardsPerSlide);
  const maxSlide = totalSlides - 1;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className={`items-center justify-center w-full px-6 xl:px-0 ${className}`}
    >
      <div className="relative py-12 md:py-16 md:mx-auto xl:max-w-[1421px]">
        {/* Section header with navigation */}
        {(title || showNavigation) && (
          <div className="flex items-start justify-between mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-[2.75rem] font-mont leading-tight">
                {title}
              </h2>
            )}
            {showNavigation && (
              <div className="flex gap-3">
                <button
                  onClick={handlePrevSlide}
                  disabled={currentSlide === 0}
                  className="p-2.5 transition-all duration-200 bg-[#E6ECFF] rounded-lg hover:bg-[#d5ddff] disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} className="text-[#0F1724]" />
                </button>
                <button
                  onClick={handleNextSlide}
                  disabled={currentSlide === maxSlide}
                  className="p-2.5 transition-all duration-200 bg-[#E6ECFF] rounded-lg hover:bg-[#d5ddff] disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} className="text-[#0F1724]" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Carousel content */}
        <div className="relative overflow-hidden" ref={carouselRef}>
          <div
            className={`flex transition-transform duration-500 ease-out`}
            style={{
              transform: `translateX(-${currentSlide * cardWidthPercent}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <CardComponent
                  item={item}
                  onClick={
                    typeof onCardClick === "function"
                      ? () => onCardClick(item)
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        {showDots && totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-10 md:mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gray-900 w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
