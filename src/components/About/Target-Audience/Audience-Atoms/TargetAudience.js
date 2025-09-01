import React from "react";
import ValueCards from "@/components/shared/Atoms/Cards-Atoms/Value-Cards";

export default function TargetAudience() {
  const cards_data = [
    {
      avatar:
        "https://economicconfidential.com/wp-content/uploads/2021/10/Senior-Secondary-School-Students--696x419.jpeg",
      title: "Students in Government/State Senior and Junior Secondary Schools",
    },
    {
      avatar:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjljHcmT75m6xHPTpqhkGEsG4KX0KJmFbhzE4Wfrzzo6-BfIxpDW5HqOPIs91KCMndVqfRdy5gRA09ytXSgEoT3nhpPRAR1-pjrj1nXrxim_sg_2pa8SkpuuWcxQLdI0pqdlavygsUsv8/s1600/1654260992117103-0.png",
      title: "Students in State Tertiary Institution",
    },
    {
      avatar: "https://ubec.gov.ng/wp-content/uploads/2023/05/secondary.jpg",
      title: "Educators in Government/State Secondary Schools",
    },
    {
      avatar:
        "https://csis-website-prod.s3.amazonaws.com/s3fs-public/publication/AdobeStock_362938327.jpg?VersionId=6mizmvZuLHcnIkgho6K44QNfAFdQEN3R",
      title: " Entrepreneurs and Workers in Informal Industries",
    },
    {
      avatar:
        "https://www.globalgiving.org/pfil/47237/ph_47237_180647.jpg",
      title: "Leaders of Social Enterprises and Community Projects",
    },
    {
      avatar:
        "https://www.smarttech.com/-/media/project/smart/www/business/industries/higher-education/smart-higher-education-16x9.jpg?h=1039&iar=0&w=1847&rev=6253f847a2874437a2e3b3b7114be10f&hash=7E93248FB9CDFC32B4FE3E8C236C8EB4",
      title:
        "Students in Higher Education Institutions Building Technology Solutions",
    },
    {
      avatar:
        "https://sdgsuniversities.org/wp-content/uploads/2022/12/4-1-1024x709.png",
      title: " Lecturers and Researchers in State Universities",
    },
    {
      avatar:
        "https://www.myschoolgist.com/wp-content/uploads/2021/08/Cross-River-University-of-TechnologyCRUTECH.jpg",
      title: " Higher Education Institutions",
    },
    {
      avatar:
        "https://solanacenter.org/wp-content/uploads/2023/05/Qualcomm-SDGE.jpg",
      title: " Schools in Underserved Communities",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-y-5 justify-start items-start  pb-5">
      <ValueCards
        cards={cards_data}
        className={` px-2 md:px-[4rem]  lg:px-[8rem]`}
      />
    </div>
  );
}
