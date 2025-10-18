import React from "react";
import CarouselCards from "@/components/shared/Atoms/Cards-Atoms/CarouselCards";

export default function WorkNav() {
  // const cardData = [
  //   {
  //     avatar:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZeH1t5cynPXzy-TEScAnDhiQRHqCJDm64g&s",
  //     title: "Get Involved",
  //     description: (
  //       <span>
  //         Join us in making a difference! Whether you contribute your time,
  //         skills, or resources, your involvement helps create lasting impact in
  //         the lives of those we serve. Together, we can build a brighter future.
  //       </span>
  //     ),
  //     route: "/get-involved",
  //   },
  //   {
  //     avatar:
  //       "https://www.startupdonut.co.uk/sites/default/files/production/image/strategic_partnerships_306153968.jpg",
  //     title: "Partner",
  //     description: (
  //       <span>
  //         Collaborate with us to amplify your impact. By partnering with SOSF,
  //         you contribute to data-driven, sustainable solutions that address
  //         real-world challenges and improve communities.
  //       </span>
  //     ),
  //     route: "/partnerships",
  //   },

  //   {
  //     avatar: "https://images.news18.com/ibnlive/uploads/2022/08/unitedsgs.png",
  //     title: "See how our work impact's the UN SDGs",
  //     description: (
  //       <span>
  //         SOSF actively supports the United Nations Sustainable Development
  //         Goals (SDGs), focusing on key areas such as quality education, good
  //         health and well-being, gender equality, and sustainable communities to
  //         drive meaningful change.
  //       </span>
  //     ),
  //     route: "/sdg",
  //   },
  // ];

  const cardDataTwo = [
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZeH1t5cynPXzy-TEScAnDhiQRHqCJDm64g&s",
      title: "Get Involved",
      description: (
        <span>
          Join us in making a difference! Whether you contribute your time,
          skills, or resources, your involvement helps create lasting impact in
          the lives of those we serve. Together, we can build a brighter future.
        </span>
      ),
      route: "/get-involved",
    },
    {
      avatar:
        "https://www.startupdonut.co.uk/sites/default/files/production/image/strategic_partnerships_306153968.jpg",
      title: "Partner",
      description: (
        <span>
          Collaborate with us to amplify your impact. By partnering with SOSF,
          you contribute to data-driven, sustainable solutions that address
          real-world challenges and improve communities.
        </span>
      ),
      route: "/partnerships",
    },

    {
      avatar: "https://images.news18.com/ibnlive/uploads/2022/08/unitedsgs.png",
      title: "See how our work impact's the UN SDGs",
      description: (
        <span>
          SOSF actively supports the United Nations Sustainable Development
          Goals (SDGs), focusing on key areas such as quality education, good
          health and well-being, gender equality, and sustainable communities to
          drive meaningful change.
        </span>
      ),
      route: "/sdg",
    },
  ];
  return (
    <div className="w-full flex flex-col    gap-x-8 justify-center items-start  ">
      <CarouselCards cards={cardDataTwo} />
    </div>
  );
}
