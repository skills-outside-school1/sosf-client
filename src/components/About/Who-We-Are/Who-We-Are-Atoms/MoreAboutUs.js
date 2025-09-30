import React from "react";
import CarouselCards from "@/components/shared/Atoms/Cards-Atoms/CarouselCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStrava, faSimplybuilt } from "@fortawesome/free-brands-svg-icons";

export default function MoreAboutUs() {
  const cardData = [
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPs-iR7mPOb75FMlA83czJb-aY-kfXDBOpA&s",
      title: "Our History & Strategy",
      description:
        "Explore our journey from inception to where we stand today, guided by a strategic vision aimed at empowering communities and creating sustainable impact.",
      route: "/history",
    },
    {
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrl-RUYeJRyY3kRzXwIFsTNFBjfzcDBf_3A&s",
      title: "Our Pillars",
      description:
        "Discover the foundational principles that drive our work, shaping the framework of our interventions and guiding our mission to empower change.",
      route: "/our-pillars",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/C4D12AQGfcT0xG3P_ew/article-cover_image-shrink_720_1280/0/1651162715269?e=2147483647&v=beta&t=8DT0cKvvJiJh0ETUyYmBpwGdYCdOb-XVwDdlZ1i2wEI",
      title: "Our Core Values",
      description:
        "At the SOSF, we hold integrity, service, and collaboration as our fundamental core values. Our pledge to these principles defines our commitment to impactful change.",
      route: "/core-values",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/D5612AQEW1d-x3KPlUw/article-cover_image-shrink_720_1280/0/1717675741327?e=2147483647&v=beta&t=022jor7uUr6_cYghDsE5ROmd0-_CpD3gl_LMGq_vWlI",
      title: "Our USPs",
      description:
        "Skills Outside School Foundation has reached over 100,000 people across diverse regions, delivering unique solutions tailored to real-world challenges.",
      route: "/our-usp",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFi2X12sOXQUpOiOqgc8oWowduB2tzqkDnCQ&s",
      title: "Our Impact",
      description:
        "Learn how SOSF's initiatives have transformed lives and communities through measurable outcomes and sustainable solutions across various regions.",
      route: "/impact",
    },
    {
      avatar:
        "https://websaweprd.blob.core.windows.net/cms-assets-international/styles/640w/public/2021-03/Focus%20Area_OVERVIEW_main%20pic_2880%20x%201620px.jpg?itok=HnwnooeZ",
      title: "Our Focus Areas",
      description:
        "At SOSF, we are dedicated to tackling socio-economic challenges in Africa through strategic interventions in education, empowerment, and sustainability.",
      route: "/our-focus-areas",
    },
    {
      avatar:
        "https://www.iita.org/wp-content/uploads/2024/09/Showcasing-farmer-harvest-1.jpg",
      title: "Our Target Audience & Beneficiaries",
      description:
        "Understand the diverse groups we serve, ranging from youth and underserved communities to partners and stakeholders working towards societal betterment.",
      route: "/beneficiaries",
    },
  ];

  return (
    <div className="w-full flex flex-col    gap-x-8 justify-center items-start  ">
    <section className="px-2 md:px-[6%]  lg:px-[28%] ">
       <h3 className="text-gray-800 font-bold  font-mont  text-center   text-2xl   lg:text-3xl     md:text-left  px-2">
        Learn more about SOSF
      </h3>
      </section>
      <CarouselCards cards={cardData} />
    </div>
  );
}
