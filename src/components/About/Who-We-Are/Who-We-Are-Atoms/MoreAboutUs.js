import React from "react";
import CarouselCards from "@/components/shared/Atoms/Cards-Atoms/CarouselCards";
import { H3 } from "@/components/shared/Atoms/Typography/typography";
import ContentCarousel from "@/components/shared/Atoms/ContentCarousel";
import ImageOverlayCard from "@/components/shared/Atoms/Cards-Atoms/ImageOverlayCard";

export default function WorkNav() {
  // const cardData = [
  //   {
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZeH1t5cynPXzy-TEScAnDhiQRHqCJDm64g&s",
  //     title: "Get Involved",
  //     description: (
  //       <span>
  //         Join us in making a difference! Whether you contribute your time,
  //         skills, or resources, your involvement helps create lasting impact in
  //         the lives of those we serve. Together, we can build a brighter future.
  //       </span>
  //     ),
  //     link: "/get-involved",
  //   },
  //   {
  //     image:
  //       "https://www.startupdonut.co.uk/sites/default/files/production/image/strategic_partnerships_306153968.jpg",
  //     title: "Partner",
  //     description: (
  //       <span>
  //         Collaborate with us to amplify your impact. By partnering with SOSF,
  //         you contribute to data-driven, sustainable solutions that address
  //         real-world challenges and improve communities.
  //       </span>
  //     ),
  //     link: "/partnerships",
  //   },

  //   {
  //     image: "https://images.news18.com/ibnlive/uploads/2022/08/unitedsgs.png",
  //     title: "See how our work impact's the UN SDGs",
  //     description: (
  //       <span>
  //         SOSF actively supports the United Nations Sustainable Development
  //         Goals (SDGs), focusing on key areas such as quality education, good
  //         health and well-being, gender equality, and sustainable communities to
  //         drive meaningful change.
  //       </span>
  //     ),
  //     link: "/sdg",
  //   },
  // ];

  const cardDataTwo = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZeH1t5cynPXzy-TEScAnDhiQRHqCJDm64g&s",
      title: "Get Involved",
      description: (
        <span>
          Join us in making a difference! Whether you contribute your time,
          skills, or resources, your involvement helps create lasting impact in
          the lives of those we serve. Together, we can build a brighter future.
        </span>
      ),
      link: "/get-involved",
      id: 1,
    },
    {
      img: "https://www.firmofthefuture.com/oidam/intuit/sbseg/en_us/Blog/Photography/Stock/tough-talks-business-partner-us-en.png",
      title: "Partner",
      description: (
        <span>
          Collaborate with us to amplify your impact. By partnering with SOSF,
          you contribute to data-driven, sustainable solutions that address
          real-world challenges and improve communities.
        </span>
      ),
      link: "/get-involved",
      id: 2,
    },

    {
      img: "https://images.news18.com/ibnlive/uploads/2022/08/unitedsgs.png",
      title: "See how our work impact's the UN SDGs",
      description: (
        <span>
          SOSF actively supports the United Nations Sustainable Development
          Goals (SDGs), focusing on key areas such as quality education, good
          health and well-being, gender equality, and sustainable communities to
          drive meaningful change.
        </span>
      ),
      link: "/sdg",
      id: 3,
    },

    //next card
    {
      img: "https://media.istockphoto.com/id/1663279091/photo/two-young-colleagues-working-together-at-modern-office.jpg?s=612x612&w=0&k=20&c=6GpKPmfPBA1DyxfthG28GUMh6a0zRBxguPsL8insYuc=",
      title: "Explore Our Work",
      description: (
        <span>
          Supporting the UN SDGs with a Focus on Quality Education, Good Health
          and Well-being, Gender Equality, and Sustainable Communities
        </span>
      ),
      link: "//our-work/data",
      id: 4,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-x-8 justify-center items-start  ">
      <ContentCarousel
        items={cardDataTwo}
        CardComponent={ImageOverlayCard}
        title="Learn more about SOSF"
      />
    </div>
  );
}
