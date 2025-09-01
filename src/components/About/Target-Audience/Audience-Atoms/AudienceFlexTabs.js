import React from "react";
import FlexTabs from "@/components/shared/Atoms/Tab-Atoms/FlexTabs";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";

import AccordionComponent from "@/components/shared/accordions/Accordion1";
import Innovations from "@/components/home/Home-Atoms/Innovations";

export default function AudienceFlexTabs() {
  const cards_data = [
    {
      content: (
        <span className=" ">
          <b>Current Focus</b>
          <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
            <li>
              <strong>Junior Secondary 3 </strong> (JS3) Students
            </li>
            <li>
              <strong>Senior Secondary 1 to 3 </strong> (SS1–SS3) Students
            </li>
            <li>
              <strong>Tertiary Education Students</strong> (universities,
              polytechnics, colleges of education, technical/vocational
              institutions) Additional Stakeholders:
            </li>
            <li>
              <strong>Teachers of the above student categories</strong>
            </li>

            <li>
              <strong>Schools</strong> (public, private, low-cost, religious,
              community-based, and alternative schools) Planned Expansion:
            </li>
            <li>
              <strong>Primary-level pupils and their schools</strong> (via
              Tongston’s T-World K12 platform)
            </li>
          </ul>
        </span>
      ),
      image:
        "https://economicconfidential.com/wp-content/uploads/2021/10/Senior-Secondary-School-Students--696x419.jpeg",
      title: "SOSF BRIDGE",
    },
    {
      content: (
        <span className=" ">
          <b>Current Focus Crop Value Chains:</b>
          <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
            <li>
              <strong>Cassava </strong>
            </li>
            <li>
              <strong> Plantain:</strong>
            </li>
            <li className="list-none">
              <strong>Planned Expansion Crops:</strong>
              <li>Maize, Sorghum, Cowpeas, Yam, Cocoyam, Palm oil, Millet</li>
            </li>
            <li className="list-none">
              <strong>Target Beneficiaries: </strong>
              <li>
                Smallholder farmers (including illiterate and semi-literate
                individuals – all genders and ages), Farmers’ cooperatives ,
                Farmer trainers and facilitators / agriculture extension workers
                / firms / NGOs
              </li>
            </li>

            <li className="list-none">
              <strong>Future Expansion:</strong>
              <li>
                Other sectors such as: Construction , Trade & Services ,
                Agro-processing o Manufacturing
              </li>
            </li>
          </ul>
        </span>
      ),
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjljHcmT75m6xHPTpqhkGEsG4KX0KJmFbhzE4Wfrzzo6-BfIxpDW5HqOPIs91KCMndVqfRdy5gRA09ytXSgEoT3nhpPRAR1-pjrj1nXrxim_sg_2pa8SkpuuWcxQLdI0pqdlavygsUsv8/s1600/1654260992117103-0.png",
      title: "SOSF HEADSTART (Agriculture-focused)",
    },
    {
      content: (
        <span className=" ">
          <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
            <li className="list-none">
              <strong>Entrepreneurship Pathway:</strong>{" "}
              <li>
                Early-stage Entrepreneurs , Tertiary Students building ventures,
                Tongston Ventures (T-Ventures) Pipeline Enterprises , Graduates
                of SOSF Bridge Basic, Intermediary and Advanced, SOSF Alumni
                (Ambassadors) seeking entrepreneurship support,
                <li>
                  Career/Employment Pathway: Higher Education Students ,
                  Early-stage Employees, Unemployed Graduates, SOSF Alumni
                  (Ambassadors) seeking career support
                </li>
              </li>
            </li>
          </ul>
        </span>
      ),
      image: "https://ubec.gov.ng/wp-content/uploads/2023/05/secondary.jpg",
      title: "SOSF ONLINE SKILL UP FOR BUSINESS & CAREER (OSB/OSC)",
    },
    {
      content: (
        <span className=" ">
          <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
            <li className="list-none">
              <strong>Eligible Legal Entity Types:</strong>
              <ol className="list-disc flex flex-col gap-y-3 ">
                <li>Incorporated Trustees</li>
                <li>Company Limited by Guarantee</li>
                <li>Charitable Incorporated Organisation (CIO)</li>
                <li>Unincorporated Associations</li>
                <li>Foundations</li>
                <li>Trusts</li>
                <li>Associations</li>
                <li>Societies</li>
                <li>Charities</li>
                <li>Sole Proprietorships / Business Names</li>
                <li>Limited Partnerships (LP)</li>
                <li>Limited Liability Partnerships (LLP)</li>
                <li>Cooperatives</li>
                <li>Community-Based Organizations (CBOs)</li>
                <li>Community-Based Educational Institutions (CBEIs)</li>
                <li>
                  Schools run by NGOs, religious institutions, social
                  enterprises
                </li>
                <li>Non-standard curriculum</li>
                <li>Serving underserved communities</li>
              </ol>
            </li>
          </ul>
        </span>
      ),
      image:
        "https://csis-website-prod.s3.amazonaws.com/s3fs-public/publication/AdobeStock_362938327.jpg?VersionId=6mizmvZuLHcnIkgho6K44QNfAFdQEN3R",
      title: " SOSF GRANTS (Institutional Beneficiaries)",
    },
    {
      content: (
        <span className=" ">
          <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
            <li>
              <strong>all other beneficiary groups across all SDGs </strong>{" "}
            </li>
          </ul>
        </span>
      ),
      image: "https://www.globalgiving.org/pfil/47237/ph_47237_180647.jpg",
      title: "INDIRECTLY THROUGH GRANTS / FUNDS / PARTNERSHIPS",
    },
    // {
    //   content: (
    //     <span className=" ">
    //       <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
    //         <li>
    //           <strong>Focus:</strong> Technological innovation and
    //           entrepreneurship through the SOSF Grants – Technology Scheme.
    //         </li>
    //         <li>
    //           <strong>Needs:</strong> Access to funding, technical training, and
    //           incubation opportunities.
    //         </li>
    //         <li>
    //           <strong>Challenges:</strong> Limited access to innovation labs and
    //           funding for prototypes.
    //         </li>
    //       </ul>
    //     </span>
    //   ),
    //   image:
    //     "https://www.smarttech.com/-/media/project/smart/www/business/industries/higher-education/smart-higher-education-16x9.jpg?h=1039&iar=0&w=1847&rev=6253f847a2874437a2e3b3b7114be10f&hash=7E93248FB9CDFC32B4FE3E8C236C8EB4",
    //   title:
    //     "Students in Higher Education Institutions Building Technology Solutions",
    // },
    // {
    //   content: (
    //     <span className=" ">
    //       <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
    //         <li>
    //           <strong>Focus:</strong> Research Scheme.
    //         </li>
    //         <li>
    //           <strong>Needs:</strong> Research grants, academic collaboration
    //           opportunities, and access to state-of-the-art facilities.
    //         </li>
    //         <li>
    //           <strong>Challenges:</strong> Insufficient research funding and
    //           outdated infrastructure.
    //         </li>
    //       </ul>
    //     </span>
    //   ),
    //   image:
    //     "https://sdgsuniversities.org/wp-content/uploads/2022/12/4-1-1024x709.png",
    //   title: " Lecturers and Researchers in State Universities",
    // },
    // {
    //   content: (
    //     <span className=" ">
    //       <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
    //         <li>
    //           <strong>Focus:</strong> Institutional capacity building and
    //           support for research and technology development through the SOSF
    //           Grants – Research Scheme and Technology Scheme.
    //         </li>
    //         <li>
    //           <strong>Needs:</strong> Funding for institutional projects,
    //           research grants, and enhanced infrastructure.
    //         </li>
    //         <li>
    //           <strong>Challenges:</strong> Limited resources and difficulty
    //           retaining talent.
    //         </li>
    //       </ul>
    //     </span>
    //   ),
    //   image:
    //     "https://www.myschoolgist.com/wp-content/uploads/2021/08/Cross-River-University-of-TechnologyCRUTECH.jpg",
    //   title: " Higher Education Institutions",
    // },
    // {
    //   content: (
    //     <span className=" ">
    //       <ul className="list-disc px-6 flex flex-col gap-y-5 justify-start items-start ">
    //         <li>
    //           <strong>Focus:</strong> Strengthening institutional capacity
    //           through the SOSF Grants – Educational Institutions Capacity
    //           Building Scheme.
    //         </li>
    //         <li>
    //           <strong>Needs:</strong> Teacher training, improved facilities, and
    //           curriculum support.
    //         </li>
    //         <li>
    //           <strong>Challenges:</strong> Inadequate facilities and shortage of
    //           qualified teachers.
    //         </li>
    //       </ul>
    //     </span>
    //   ),
    //   image:
    //     "https://solanacenter.org/wp-content/uploads/2023/05/Qualcomm-SDGE.jpg",
    //   title: " Schools in Underserved Communities",
    // },
  ];

  return (
    <div className="w-full flex flex-col gap-y-5 ">
      <FlexTabs
        data={cards_data}
        titleBoxStyle="custom-title-box"
        contentBoxStyle="custom-content-box  max-h-[600px] py-3   min-h-[600px] overflow-y-auto"
        imageBoxStyle="custom-image-box"
      />
      <AccordionComponent
        accordions={cards_data}
        className="h-auto pb-[5rem] "
        textStyle="opacity-100"
      />
      {/* <section className="flex flex-col justify-center items-center  mt-8 ml-auto">
        <Innovations />
      </section> */}
    </div>
  );
}
