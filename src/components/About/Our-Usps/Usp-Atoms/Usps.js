import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Link from "next/link";
import AccordionComponent from "@/components/shared/accordions/Accordion1";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function Service() {
  // Define core values data
  const coreValues = [
    {
      title: "Efficient Use of Capital",
      content: (
        <span className="">
          Skills Outside School Foundation has effectively reached over 100,000
          people globally in Africa, Asia, Latin America & Europe. This
          achievement has been accomplished with a judicious cash investment of
          200 million Naira over the course of 11 years, and millions of naira
          of non-cash investment. This is why we believe in and advocate the
          power of philanthropy through in kind services, expertise, and
          products. The foundation takes great care in managing its financial
          resources, with a significant focus on minimizing overheads. The
          primary emphasis lies in allocating the majority of funds towards
          delivering highly impactful interventions and nurturing
          sustainability. This approach ensures that every capital investment is
          utilized efficiently, directly benefiting the communities you serve.
        </span>
      ),
      image:
        "https://img.freepik.com/premium-photo/diverse-group-business-analyst-team-analyzing-financial-data-report-finance-data-analysis-chart-graph-dashboard-show-tv-screen-meeting-room-strategic-marketing-planning-habiliment_31965-191561.jpg",
    },
    {
      title: "Uniquely Catalytic Approach",
      content: (
        <span className="">
          The foundation&apos;s catalytic approach is multifaceted and aimed at
          fostering sustainable and widespread change. It encompasses several
          critical elements:
          <span className="flex flex-col  gap-y-4  mt-6 list-dash text-base px-4">
            <li>
              Empowering ambassadors who serve as passionate advocates for the
              foundation&apos;s mission and actively support its work.
            </li>
            <li>
              Encouraging beneficiaries to not only benefit from interventions
              themselves but also to propagate these interventions to others,
              effectively multiplying the impact
            </li>
            <li>
              Attracting many ambassadors who transition into donors and
              investors, illustrating their ongoing commitment to the
              foundation&apos;s mission.
            </li>
            <li>
              Leveraging social change projects as platforms for ambassadors to
              advocate for, and ultimately institutionalize, the
              foundation&apos;s work within their communities. This unique
              approach positions your organization as a dynamic catalyst for
              lasting change.
            </li>
          </span>
        </span>
      ),
      image:
        "https://www.webprecious.com/wp-content/uploads/2022/07/Power-BI-Dashboard.jpg",
    },

    {
      title: "Data-Driven and Contextualized",
      content: (
        <span className="">
          Skills Outside School Foundation places data at the heart of its
          operations. A profound understanding of the power of data is evident
          in the organization&apos;s approach:
          <span className="flex flex-col  gap-y-4  mt-6 list-dash text-base px-4">
            <li>
              Data serves as the compass for contextualizing interventions,
              ensuring that each initiative is tailored to the unique needs and
              nuances of the communities it aims to serve.
            </li>
            <li>
              This data-driven strategy not only allows the foundation to
              deliver solutions that are highly relevant and effective but also
              equips it with the knowledge required for evidence-based advocacy
              efforts.
            </li>
          </span>
        </span>
      ),
      image:
        "https://code81.com/wp-content/uploads/2024/07/data-tracking-1.jpg",
    },

    {
      title: "Integration of Data, Interventions, and Advocacy",
      content: (
        <span className="">
          The foundation&apos;s strategy revolves around the seamless
          integration of data, interventions, and advocacy:
          <span className="flex flex-col  gap-y-4  mt-6 list-dash text-base px-4">
            <li>
              Data is harnessed to inform the design and evaluation of
              interventions, guaranteeing that these initiatives are grounded in
              real-world insights.
            </li>
            <li>
              Advocacy efforts are bolstered by compelling data, enabling the
              foundation to make a persuasive case for lasting change and
              sustainable impact.
            </li>
            <li>
              This holistic approach ensures that every aspect of the
              foundation&apos;s work is aligned and reinforced, enhancing its
              overall effectiveness.
            </li>
          </span>
        </span>
      ),
      image:
        "https://website-files.genpact.com/redesign/insights/_1200x630_crop_center-center_82_none/og-innovate-and-thrive-with-data-driven-sustainability.jpg?mtime=1653898854",
    },

    {
      title: "Advocacy for Institutionalization",
      content: (
        <span className="">
          Advocacy, for Skills Outside School Foundation, is a purpose-driven
          endeavor focused on institutionalizing meaningful change. Key
          components include:{" "}
          <span className="flex flex-col  gap-y-4  mt-6 list-dash text-base px-4">
            <li>
              Advocacy efforts are guided by tangible proofs of concept and
              demonstrated impact, emphasizing the foundation&apos;s commitment
              to evidence-based initiatives
            </li>
            <li>
              Ambassadors play a pivotal role in advocating for
              institutionalization. They serve as champions of change, working
              to ensure that the foundation&apos;s work is embedded in the
              institutions and communities it serves.
            </li>
            <li>
              The foundation&apos;s advocacy efforts extend beyond mere
              rhetoric, aiming to entrench lasting change through institutional
              adoption. This strategic vision underlines your
              organization&apos;s dedication to creating sustainable
              transformations.
            </li>
          </span>
        </span>
      ),
      image:
        "https://res.cloudinary.com/dwptu3dam/image/upload/c_limit%2Cw_3840/dpr_auto/f_auto/q_auto/v1713531130/Blog/Blog%20-%20Profits%20Through%20People%20Centered%20Leadership/blog-2024-04-18-people-centered-leadership-diverse-team_wc64dt?_a=BAVAUaGd0",
    },

    //under other
    {
      title: "Direct and Indirect Interventions",
      content: (
        <span className="">
          Skills Outside School Foundation embraces a multifaceted approach that
          encompasses both direct and indirect interventions:
          <span className="flex flex-col  gap-y-4  mt-6 list-dash text-base px-4">
            <li>
              The foundation not only implements interventions directly but also
              empowers individuals and organizations with essential tools,
              resources, and funding to enhance their capabilities
            </li>
            <li>
              This support enables beneficiaries to deploy impactful
              interventions tailored to their unique contexts, multiplying the
              foundation&apos;s reach and effect.
            </li>
            <li>
              By fostering indirect interventions, the foundation contributes to
              the creation of a network of change-makers, thereby promoting
              sustainability and scalability
            </li>
          </span>
        </span>
      ),
      image:
        "https://www.fellowshipsquareseniorliving.org/media/5292/paying-it-forward-how-doing-good-for-others-is-a-win-win.jpg",
    },
  ];

  // State for the currently selected core value
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full  flex flex-col gap-y-8 ">
      <section className=" w-full   ">
        {/* <SubHero
          text={
            <span className=" flex flex-col gap-y-[2rem] justify-start items-start  ">
                <h3 className="text-gray-800 font-mont  text-2xl     lg:text-3xl  font-bold ">
                Service
              </h3>
              <P className={` `}>
              Service: The foundation of everything. We&apos;re not just
              teaching; we&apos;re inspiring a generation to think beyond the
              classroom. We are committed to serving our beneficiaries and
              partners with dedication and excellence, always putting their
              needs first.
              </P>
            </span>
          }
        /> */}
      </section>

      {/* <section className="heading-section flex justify-center items-center w-full">
        <h2 className="text-gray-800 font-black font-mont text-center text-2xl     lg:text-3xl  ">
          Our Commitment to Service
        </h2>
      </section> */}

      <div className="switch-container sm:hidden  flex flex-row justify-start items-start pb-5 w-full   md:ml-[6rem]">
        {/* Title list */}
        <section className="flex flex-col justify-start items-start ">
          <div className="bg-[#dee8f0d1] w-[270px] max-h-[500px]  min-h-[500px] overflow-y-auto  flex flex-col gap-y-8 p-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-2 cursor-pointer font-black transition-transform hover:-translate-y-3 duration-700 ease-in-out w-full  h-[fixed] lg:text-sm ${
                  activeIndex === index
                    ? "text-[#6A80B8] font-mont "
                    : "border-b-2 border-b-stone-200 text-gray-500 transition-transform duration-1000 ease-in-out hover:text-gray-800 font-mont "
                } relative overflow-hidden`}
              >
                {value.title}
                {activeIndex === index && (
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#6A80B8] w-[80%]  transition-transform duration-700 ease-in-out ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-full"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Content box with animation */}
        <div className="bg-secondary_blue w-[700px] min-h-[500px]  max-h-[500px] overflow-y-auto p-6 flex items-start justify-start  text-[#000000] font-normal md:leading-[35px]   font-inter text-base md:text-[18.56px]  text-left md:tracking-wide ">
          <motion.section
            key={activeIndex} // Unique key for re-rendering
            initial={{ translate: 0.9, opacity: 0 }}
            animate={{ translate: 1, opacity: 1 }}
            exit={{ translate: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[90%]  mt-6"
          >
            <P>{coreValues[activeIndex].content}</P>
          </motion.section>
        </div>

        {/* Image box with animation */}
        <motion.div className="relative right-[2rem] -[500px] h-[400px]   overflow-hidden ">
          <motion.section
            key={`image-${activeIndex}`} // Unique key for image re-rendering
            initial={{ translate: 0.9, opacity: 0 }}
            animate={{ translate: 1, opacity: 1 }}
            exit={{ translate: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={coreValues[activeIndex].image}
              alt={coreValues[activeIndex].title}
              width={500}
              height={500}
              className="w-[500px] h-[400px]  object-cover"
              style={{
                filter: "grayscale(100%)",
              }}
            />
          </motion.section>
        </motion.div>
      </div>

      <AccordionComponent
        accordions={coreValues}
        className="my-4  h-[500px] py-5 overflow-y-auto"
        imageStyle={{ filter: "grayscale(100%" }}
      />
    </div>
  );
}
