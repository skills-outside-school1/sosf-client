import React, { useState, useEffect, useRef } from "react";
import StrategyCard from "./StrategyCard";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function AmChangeMakingStrategiesCarousel() {
  const strategies = [
    {
      id: 1,
      title: "Training & Mentorship",
      description:
        "We equip our ambassadors with valuable knowledge and skills through training and mentoring opportunities.",
      link: "Learn More",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    },
    {
      id: 2,
      title: "Donation & Investment",
      description:
        "Many of our SOSF ambassadors have become donors or funders of our work.",
      link: "Learn More",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    },
    {
      id: 3,
      title: "Social Change projects",
      description:
        "Our beneficiaries have deployed meaningful businesses and social change projects",
      link: "Learn More",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    },
    {
      id: 4,
      title: "Advocacy",
      description:
        "Ambassadors are instrumental in advocating for SOSF's mission and impact. SOSF bridge ambassadors contribute to shout-outs in partner schools to raise awareness",
      link: "Learn More",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    },
    {
      id: 5,
      title: "Impact Investing",
      description:
        "The Impact Investing Approach will be managed by our partner, Tongston Ventures, through a number of funds.",
      link: "Learn More",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [cardWidthPercent, setCardWidthPercent] = useState(100);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        // Desktop: disable carousel
        setIsDesktop(true);
      } else {
        // Tablet and Mobile: enable carousel
        setIsDesktop(false);
        if (width < 768) {
          setCardsPerSlide(1);
          setCardWidthPercent(95);
        } else if (width >= 768 && width < 1024) {
          setCardsPerSlide(2.5);
          setCardWidthPercent(40);
        } else if (width >= 1024 && width < 1280) {
          setCardsPerSlide(3.5);
          setCardWidthPercent(28.5);
        }
      }
      setCurrentSlide(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(strategies.length / cardsPerSlide);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="items-center justify-center w-full px-6 xl:px-0">
      <div className="py-8 rounded-[1.5rem] mx-auto xl:max-w-[1421px] sm:px-6 lg:p-16 bg-[#E1E7F3]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[2.3rem] leading-[40px] lg:leading-[52px] font-semibold tracking-wide text-gray-900 lg:text-5xl font-mont">
            Change making Strategies
          </h2>
          <P className="text-[16px] text-gray- font-inter tracking-wide">
            We’re turning bold strategies into real impact, using creativity,
            passion, and <br /> purpose to shape the future through these means
          </P>
        </div>

        {/* Desktop Static Grid */}
        {isDesktop ? (
          <div className="grid grid-cols-5 gap-3 p-4">
            {strategies.map((strategy) => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        ) : (
          /* Carousel for tablet and mobile */
          <>
            <div className="relative overflow-hidden md:px-2 py-3" ref={carouselRef}>
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * cardWidthPercent}%)`,
                }}
              >
                {strategies.map((strategy) => (
                  <div
                    key={strategy.id}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${cardWidthPercent}%` }}
                  >
                    <StrategyCard strategy={strategy} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full bg-gray-500 transition-all duration-300 ${
                    index === currentSlide
                      ? "outline outline-2 outline-white"
                      : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
