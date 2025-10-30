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
    title: "Get Involved",
    description:
      "Join us in making a difference! Whether you contribute your time, skills, or resources, your involvement helps create lasting impact in the lives of those we serve. Together, we can build a brighter future.",
    link: "get-involved",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZeH1t5cynPXzy-TEScAnDhiQRHqCJDm64g&s",
  },
  {
    id: 2,
    title: "Partner",
    description:
      "Collaborate with us to amplify your impact. By partnering with SOSF, you contribute to data-driven, sustainable solutions that address real-world challenges and improve communities.",
    link: "partnerships",
    img: "https://www.startupdonut.co.uk/sites/default/files/production/image/strategic_partnerships_306153968.jpg",
  },
  {
    id: 3,
    title: "See how our work impacts the UN SDGs",
    description:
      "SOSF actively supports the United Nations Sustainable Development Goals (SDGs), focusing on key areas such as quality education, good health and well-being, gender equality, and sustainable communities to drive meaningful change.",
    link: "sdg",
    img: "https://images.news18.com/ibnlive/uploads/2022/08/unitedsgs.png",
  },
  {
    id: 4,
    title: "Get Involved",
    description:
      "Join us in making a difference! Whether you contribute your time, skills, or resources, your involvement helps create lasting impact in the lives of those we serve. Together, we can build a brighter future.",
    link: "get-involved",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZeH1t5cynPXzy-TEScAnDhiQRHqCJDm64g&s",
  },
  {
    id: 5,
    title: "Partner",
    description:
      "Collaborate with us to amplify your impact. By partnering with SOSF, you contribute to data-driven, sustainable solutions that address real-world challenges and improve communities.",
    link: "partnerships",
    img: "https://www.startupdonut.co.uk/sites/default/files/production/image/strategic_partnerships_306153968.jpg",
  },
  {
    id: 6,
    title: "See how our work impacts the UN SDGs",
    description:
      "SOSF actively supports the United Nations Sustainable Development Goals (SDGs), focusing on key areas such as quality education, good health and well-being, gender equality, and sustainable communities to drive meaningful change.",
    link: "sdg",
    img: "https://images.news18.com/ibnlive/uploads/2022/08/unitedsgs.png",
  },
  {
    id: 7,
    title: "Get Involved",
    description:
      "Join us in making a difference! Whether you contribute your time, skills, or resources, your involvement helps create lasting impact in the lives of those we serve. Together, we can build a brighter future.",
    link: "get-involved",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZeH1t5cynPXzy-TEScAnDhiQRHqCJDm64g&s",
  },
  {
    id: 8,
    title: "Partner",
    description:
      "Collaborate with us to amplify your impact. By partnering with SOSF, you contribute to data-driven, sustainable solutions that address real-world challenges and improve communities.",
    link: "partnerships",
    img: "https://www.startupdonut.co.uk/sites/default/files/production/image/strategic_partnerships_306153968.jpg",
  },
  {
    id: 9,
    title: "See how our work impacts the UN SDGs",
    description:
      "SOSF actively supports the United Nations Sustainable Development Goals (SDGs), focusing on key areas such as quality education, good health and well-being, gender equality, and sustainable communities to drive meaningful change.",
    link: "sdg",
    img: "https://images.news18.com/ibnlive/uploads/2022/08/unitedsgs.png",
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
