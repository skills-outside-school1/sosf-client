"use client";
import React, { useState, useEffect, useRef } from "react";
import AmbassadorCard from "./AmbassadorCard";
import AmbassadorModal from "./AmbassadorModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AmMeetOurAmbassadors() {
  const categories = [
    "Training & Mentorship",
    "Donation & Investment",
    "Social Change Projects",
    "Advocacy",
    "Impact Investing",
  ];

  const ambassadorsData = {
    "Training & Mentorship": [
      {
        id: 1,
        name: "Habeeb Salma",
        title: "Ambassador from GSS Kuje",
        category: "Training & Mentorship",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
        bio: "Habeeb Salma is a passionate youth advocate committed to driving impact in her community through training and mentorship programs.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
      {
        id: 2,
        name: "Olakunle Daniel",
        title: "Ambassador from GSS Jabi",
        category: "Training & Mentorship",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        bio: "Olakunle Daniel focuses on leadership training and educational empowerment.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
      {
        id: 3,
        name: "Akachi David",
        title: "Volunteer",
        category: "Training & Mentorship",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
        bio: "Akachi David is a community volunteer promoting innovation and entrepreneurship.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
      {
        id: 4,
        name: "Agabi Joseph",
        title: "Ambassador from GSS Jikwoyi",
        category: "Training & Mentorship",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
        bio: "Agabi Joseph drives change through mentorship and youth engagement programs.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
      {
        id: 5,
        name: "Nanret Hosea",
        title: "Ambassador from GSS Wuse",
        category: "Training & Mentorship",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
        bio: "Nanret Hosea is focused on community development and advocating gender equality.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
      {
        id: 6,
        name: "Onoja Micheal",
        title: "Ambassador from GSS Jabi",
        category: "Training & Mentorship",
        image:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=80",
        bio: "Onoja Micheal promotes education and skills training among youths.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
    ],
    "Donation & Investment": [
      {
        id: 7,
        name: "Amina Hassan",
        title: "Investment Coordinator",
        category: "Donation & Investment",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        bio: "Amina Hassan specializes in coordinating donation drives and investment opportunities.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
      {
        id: 8,
        name: "Ibrahim Musa",
        title: "Fundraising Lead",
        category: "Donation & Investment",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        bio: "Ibrahim Musa leads fundraising initiatives and donor relations.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
    ],
    "Social Change Projects": [
      {
        id: 9,
        name: "Grace Okoro",
        title: "Project Manager",
        category: "Social Change Projects",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
        bio: "Grace Okoro manages social change projects that transform communities.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
    ],
    Advocacy: [
      {
        id: 10,
        name: "Samuel Adeyemi",
        title: "Advocacy Director",
        category: "Advocacy",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        bio: "Samuel Adeyemi leads advocacy efforts for youth empowerment and policy change.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
    ],
    "Impact Investing": [
      {
        id: 11,
        name: "Fatima Bello",
        title: "Impact Investment Analyst",
        category: "Impact Investing",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
        bio: "Fatima Bello analyzes and manages impact investment portfolios.",
        social: {
          facebook: "#",
          twitter: "#",
          instagram: "#",
          linkedin: "#",
          email: "#",
        },
      },
    ],
  };
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedAmbassador, setSelectedAmbassador] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardsRef = useRef(null);
  const categoriesRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredAmbassadors = ambassadorsData[selectedCategory] || [];

  const scrollCards = (direction = 1) => {
    if (!cardsRef.current) return;
    const width = cardsRef.current.offsetWidth;
    cardsRef.current.scrollBy({ left: width * direction, behavior: "smooth" });
  };

  return (
    <section className="w-full px-6 xl:px-0">
      <div className="py-8 md:py-12 md:mx-auto xl:max-w-[1421px]">
        <div className="grid items-center grid-cols-1 gap-8 mb-8 md:mb-12 xl:grid-cols-2">
          <div className="lg:w-4/5">
            <h2 className="mb-4 md:mb-6 font-bold text-gray-900 text-[2rem] md:text-[2.3rem] lg:text-[2.875rem] font-mont leading-[36px] md:leading-[40px] lg:leading-[52px]">
              Meet Our <br /> Ambassadors
            </h2>
            <p className="leading-relaxed text-gray-600 font-inter text-[15px] md:text-base">
              Here are some of the individuals actively contributing to our
              vision. Our ambassadors are catalysts for change, driving
              initiatives forward and amplifying our impact. We empower them to
              be active agents of transformation. Learn more about our{" "}
              <Link
                href={`/our-target-audience`}
                className="underline text-blue"
              >
                target beneficiaries
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Categories */}
            <div
              className="flex gap-3 overflow-x-auto scrollbar-hide md:flex-wrap md:gap-2"
              ref={categoriesRef}
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  ref={(el) => (categoryRefs.current[index] = el)}
                  onClick={() => {
                    setSelectedCategory(category);
                    // Scroll the clicked button into view
                    categoryRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }}
                  className={`relative px-3 py-2.5 text-sm md:text-xs font-semibold whitespace-nowrap transition-all duration-300 font-inter
        ${isMobile ? "rounded-full" : ""}
        ${
          selectedCategory === category
            ? isMobile
              ? "bg-[#B7C8F4] text-white border-2 border-[#B7C8F4]"
              : "text-gray-900"
            : isMobile
            ? "text-gray-700 border-2 border-gray-200 hover:border-gray-300"
            : "bg-transparent text-gray-700 hover:text-gray-900"
        }`}
                >
                  {category}
                  {!isMobile && selectedCategory === category && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] h-[3px] bg-[#B7C8F4] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Ambassador Cards */}
            <div className="relative mt-4">
              {/* Left Arrow */}
              {isMobile && filteredAmbassadors.length > 1 && (
                <div className="absolute z-10 transform -translate-y-1/2 -left-2 top-1/2">
                  <button
                    onClick={() => scrollCards(-1)}
                    className="p-2.5 bg-[#B7C8F4] rounded-md hover:bg-[#a3b8f0] transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                </div>
              )}

              {/* Cards Container */}
              {isMobile ? (
                <div
                  ref={cardsRef}
                  className="flex gap-4 p-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                >
                  {filteredAmbassadors.map((item) => (
                    <AmbassadorCard
                      key={item.id}
                      item={item}
                      onClick={() => setSelectedAmbassador(item)}
                      className="h-[350px] flex-shrink-0"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {filteredAmbassadors.map((item) => (
                    <AmbassadorCard
                      key={item.id}
                      item={item}
                      onClick={() => setSelectedAmbassador(item)}
                      className="h-[226px]"
                    />
                  ))}
                </div>
              )}

              {/* Right Arrow */}
              {isMobile && filteredAmbassadors.length > 1 && (
                <div className="absolute z-10 transform -translate-y-1/2 -right-2 top-1/2">
                  <button
                    onClick={() => scrollCards(1)}
                    className="p-2.5 bg-[#B7C8F4] rounded-md hover:bg-[#a3b8f0] transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedAmbassador && (
        <AmbassadorModal
          ambassador={selectedAmbassador}
          onClose={() => setSelectedAmbassador(null)}
        />
      )}
    </section>
  );
}
