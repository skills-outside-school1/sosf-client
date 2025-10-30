import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import AmbSub from "../Ambassadors-Atoms/AmbSub";
import AmChangeMakingStrategies from "../Ambassadors-Atoms/AmChangeMakingStrategies";
import AmMeetOurAmbassadors from "../Ambassadors-Atoms/AmMeetOurAmbassadors";
import AnimatedHero from "@/components/shared/Atoms/AnimatedHero";
import ContentCarousel from "@/components/shared/Atoms/ContentCarousel";
import ImageOverlayCard from "@/components/shared/Atoms/Cards-Atoms/ImageOverlayCard";

export default function AMbassadorsContainer() {

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



  return (
    <>
      <div className="md:mb-[70px]">
        <Hero />
      </div>
      <div className="w-full h-[fixed] overflow-hidden flex flex-col gap-y-[70px] md:gap-y-[100px] justify-start items-start mb-[2rem] ">
        <AmbSub />
        <AmChangeMakingStrategies />
        <AmMeetOurAmbassadors />
        <AnimatedHero />
        <ContentCarousel items={sosf_info } CardComponent={ImageOverlayCard} title="Learn more about SOSF"  />
      </div>
    </>
  );
}
