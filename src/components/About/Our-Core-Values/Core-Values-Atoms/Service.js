import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SubHero from "./SubHero";
import Link from "next/link";
import AccordionComponent from "@/components/shared/accordions/Accordion1";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function Service() {
  // Define core values data
  const coreValues = [
    {
      title: "Disruptive Approach",
      content: (
        <span className="">
          We are dedicated to challenging the status quo and delivering
          innovative solutions that redefine the development sector & landscape
          across Africa. Through disruptive thinking and unconventional
          approaches, we will redefine service excellence and drive positive
          change. We believe in disrupting conventional development practice
          through creativity, bold thinking, and strategic innovation. Our work
          is anchored in a private-sector approach to running a nonprofit,
          combining digitization, AI, data systems, and design thinking to
          deliver at scale across Africa and globally.
          <span className="list-disc px-4 flex flex-col gap-y-4 text-base  mt-4  mb-5 ">
            <li>
              We have digitized our operations and adopted an offshore,
              management company-led structure, headquartered in Mauritius, to
              drive strategy, coordination, and global relevance.
            </li>
            <li>
              We procure the right service providers, operate lean, and invest
              in capacity building, data systems, and patient capital as
              foundational pillars of our work.
            </li>
            <li>
              We leverage AI to optimize solution delivery, from impact
              assessments to education, enterprise, and economic empowerment
              interventions.
            </li>
            <li>
              We are mobilizing partners, private sector capital, and
              grassroots-based intermediary organizations as core grantees and
              implementers.
            </li>
            <li>
              We have established Africa&apos;s first NGO-led Social and
              Economic Register, enabling accurate targeting, verification, and
              scaling of interventions.
            </li>
            <li>
              We use Donor Advised Funds (DAFs), crowdfunding platforms, and
              innovative financing mechanisms to expand our fundraising
              capabilities.
            </li>
            <li>
              We prioritize systems-level impact, using a blend of data,
              community engagement, technology, and enterprise models to scale
              transformative solutions.
            </li>
            <li>
              We pursue the Sustainable Development Goals (SDGs) through
              strategic, measurable, and institutionalized interventions
              grounded in evidence, efficiency, and long-term sustainability.
            </li>
          </span>
          At SOSF, innovation is not a buzzword—it is a strategy. We reimagine
          and disrupt what development looks like, building human capital and
          institutional structures that can truly change lives and shape
          futures.
        </span>
      ),
      image:
        "https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Collegues-at-office-using-laptop-and-trying-virtual-reality-what-is-disruptive-innovation.jpg",
    },
    {
      title: "Learning Culture",
      content: (
        <span className="">
          Learning is embedded in our culture. We gather data, assess outcomes
          and impact, and seek ways to improve our work & operations
          continually. We learn by doing and refining.
        </span>
      ),
      image:
        "https://assets.trainingindustry.com/content/uploads/2021/12/12.10.21-learning-culture--1920x1080.jpg",
    },

    {
      title: "Sustainable and Data-Driven",
      content: (
        <span className="">
          We seek to deliver long-term sustainable, holistic, and data-driven
          interventions. Our commitment to integrity extends to assessing
          outcomes and impacts. We gather insights not only from research
          studies, data sets, evaluation results, and investment outcomes but
          also from ongoing impact assessments and feedback from our
          stakeholders.
        </span>
      ),
      image:
        "https://code81.com/wp-content/uploads/2024/07/data-tracking-1.jpg",
    },

    {
      title: "Advocacy for Lasting Change / Institutionalization",
      content: (
        <span className="">
          We believe in advocacy based on proofs of concept and impact as the
          avenue for entrenching lasting change through institutionalization of
          our interventions.
        </span>
      ),
      image:
        "https://website-files.genpact.com/redesign/insights/_1200x630_crop_center-center_82_none/og-innovate-and-thrive-with-data-driven-sustainability.jpg?mtime=1653898854",
    },

    {
      title: "People-Centric Approach",
      content: (
        <span className="">
          At the heart of our work is our focus on building human capital to
          drive socio-economic change in their communities. As such we have a
          <i>
            <b>People-Centric Approach</b>
          </i>
          : We believe in first building the human capital around us; as well as
          building our beneficiaries. We share information about the individuals
          behind our organization, including advisory board members, investors,
          executive council members, volunteers, and partners.
        </span>
      ),
      image:
        "https://res.cloudinary.com/dwptu3dam/image/upload/c_limit%2Cw_3840/dpr_auto/f_auto/q_auto/v1713531130/Blog/Blog%20-%20Profits%20Through%20People%20Centered%20Leadership/blog-2024-04-18-people-centered-leadership-diverse-team_wc64dt?_a=BAVAUaGd0",
    },

    //under other
    {
      title: "Paying it forward",
      content: (
        <span className="">
          As a key catalyst of change through our ambassadors: Our beneficiaries
          are called our ambassadors. SOSF Ambassadors are Catalysts for Impact
          <br />
          <br />
          <span className="mt-5 mb-5 ">
            <b>What?</b>
            <br /> At the Skills Outside School Foundation (SOSF), we recognize
            the invaluable role played by our dedicated ambassadors in advancing
            our mission. Our ambassadors are not merely representatives; they
            are catalysts for change, driving our initiatives forward and
            amplifying our impact. We believe in empowering them to be active
            agents of transformation, forging a path toward a better future for
            our target beneficiaries.
          </span>
          <br />
          <br />
          <span className="mt-5 mb-5 flex flex-col gap-y-4 justify-start items-start px-4 ">
            <b> How?</b> Ambassadors Catalysing Impact
            <span className=" list-decimal flex flex-col gap-y-4 ">
              <li>
                <b>Advocacy</b> : Ambassadors are instrumental in advocating for
                SOSF&apos;s mission and impact. SOSF bridge ambassadors
                contribute to shout-outs in partner schools to raise awareness
                when new program cycles are implemented; they mentor their
                colleagues / peers and support us in keeping in touch with
                fellow ambassadors through regular management of ambassador
                engagement activities on SOS connect. In SOSF Bridge, targeting
                teachers is key as a way to expand the coverage of work we do as
                for every teacher you train, you have indirectly supported “x”
                no of students even without the step down by the teachers to
                other teachers. This is based on the average number of students
                each teacher teaches to determine indirect beneficiaries. SOSF
                Headstart farmers act as community mobilizers for our program
                activities particularly for monitoring & evaluation purposes.
                They also support our work by volunteering / working for the
                Foundation from time to time in the interventions;
                administration; and media & communications.
              </li>
              <li>
                <b>Training and Mentorship</b>: We equip our ambassadors with
                valuable knowledge and skills through training and mentoring
                opportunities. They, in turn, share this learning with our
                beneficiaries, acting as mentors and sources of guidance. This
                is the case through social change projects deployed by SOsF
                Bridge Ambassadors and L4C alumni also participate in the Alumni
                Series.
              </li>
              <li>
                <b>Donation / Investments</b>: Many of our SOSF ambassadors have
                become donors or funders of our work. Ambassadors like Samson
                Okaludo and Fatima Ali Konto of the SOSF Bridge have regularly
                contributed to the foundation, demonstrating their commitment to
                our mission. We document contributions and support provided by
                ambassadors who have transitioned into donors or funders of SOSF
                initiatives.
              </li>
              <li>
                <b>Social Change Projects </b> Our beneficiaries have deployed
                meaningful businesses and social change projects including
                Online platform with Q&A for senior secondary students on
                difficult subjects, Abuja Entertainment Hub, an FCT events
                planning platform, Silent Stars that supports youths with
                hearing disabilities with sign language training, public
                speaking and confidence skills training for youth church
                members, member of the ECOWAS youth parliament, Shea butter
                export business to Germany and the US.
              </li>
              <li>
                <b>Impact Investing</b>: The Impact Investing Approach is
                managed by our partner, Tongston Ventures and PIF Africa, SOSFs
                management company, and aim to provide an avenue for SOSF to
                invest in its ambassadors through SOSF Funds, provide grants to
                third party entities to scale impact in their communities and
                through its interventions.
              </li>
            </span>
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

      <section className="heading-section flex justify-center items-center w-full">
        <h2 className="text-gray-800 font-black font-mont text-center text-2xl     lg:text-3xl  ">
          Our Commitment to Service
        </h2>
      </section>

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
