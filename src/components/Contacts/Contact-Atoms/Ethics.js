import React from "react";
import Link from "next/link";
import Case from  "../../shared/headings/Case";

function Ethics() {
  const firstcard = [
    {
  
      description: (
        <article>
          While we value being accessible to collaborators, ambassadors,
          potential beneficiaries, and the public, the high volume of emails may
          prevent us from responding directly to every inquiry.{" "}
        </article>
      ),
      email: "info@skillsoutsideschool.com",
    },

    {
      supertitle: (
        <p>
          {" "}
          Joining Us? We&apos;d love to have you make a difference with us at
          the Skills Outside School Foundation. Check out our openings or
          contact us at
        </p>
      ),
      // title: "For SOSF Bridge,",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "careers@skillsoutsideschool.com",
    },
  ];

  const secondcard = [
    {
      supertitle: <article> </article>,
      title: "For Media Queries",
      description: (
        <article> Reach Out for Interviews and Press Information</article>
      ),
      email: "communications@skillsoutsideschool.com",
    },

    {
      supertitle: (
        <p>
          {" "}
          Interested in joining our programs for schools (teachers/students) or
          smallholder farmers (and agri-extension workers) for yourself or your
          institution?
        </p>
      ),
      title: "For SOSF Bridge,",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "bridge@skillsoutsideschool.com",
    },
    {
      title: "For SOSF Headstart,",
      email: "headstart@skillsoutsideschool.com",
    },

    {
      supertitle: <p> Seeking a grant?</p>,
      title: "For SOSF Technology Grants,",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "SOSFgrants-Tech@skillsoutsideschool.com",
    },
    {
      title: "For SOSF Technology Grants,",
      description: (
        <article>
          {" "}
          Supporting tech-driven projects that enhance education and foster
          sustainable development.
        </article>
      ),
      email: "SOSFgrants-Tech@skillsoutsideschool.com",
    },

    {
      title: "For SOSF Research Grants,",
      description: (
        <article>
          {" "}
          Funding research initiatives that advance education and skill
          development best practices.
        </article>
      ),
      email: "SOSFgrants-Research@skillsoutsideschool.com",
    },

    {
      title: "For SOSF Educational Institutions Grants",
      description: (
        <article>
          {" "}
          Empowering schools and institutions with financial support for
          innovative programs and infrastructure.
        </article>
      ),
      email: "SOSFgrants-eduinst@skillsoutsideschool.com",
    },

    {
      title: "For SOSF Interventions Grants",
      description: (
        <article>
          {" "}
          Backing projects that address social issues and drive lasting change
          in underserved communities.
        </article>
      ),
      email: "SOSFgrants-interv@skillsoutsideschool.com",
    },
  ];

  //cards number 3
  const thirdcard = [
    {
      supertitle: (
        <p>
          {" "}
          Interested in our opportunity for social entrepreneurs & changemakers?
        </p>
      ),
      title: "For lead4change",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "lead4change@skillsoutsideschool.com",
    },

    {
      supertitle: (
        <p>
          {" "}
          Interested in collaborating with us to drive impactful change as a
          government, private entity, or NGO? Reach out to discuss partnership
          opportunities.
        </p>
      ),
      title: "Government, Private Entity or NGO",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "corpinnovpartners@skillsoutsideschool.com",
    },
    {
      supertitle: <p> Interested in using our data & research?</p>,
      title: "For data queries",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "data.research@skillsoutsideschool.com",
    },

    {
      title: "For advocacy",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "advocacy@skillsoutsideschool.com",
    },

    {
      supertitle: (
        <p>
          {" "}
          Interested in partnering with us to make a difference as an
          individual?
        </p>
      ),
      title: "For partnership, if you are an individual",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "indivinnovpartners@skillsoutsideschool.com",
    },

    {
      supertitle: <p> Interested in investing in our work?</p>,
      title: "For investment",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "SOSFtrust@skillsoutsideschool.com",
    },

    {
      supertitle: <p> Interested in investing in our work?</p>,
      title: "For investment",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "SOSFtrust@skillsoutsideschool.com",
    },
  ];
  return (
    <div className=" flex flex-col gap-y-5 justify-center items-start  w-full h-[fixed] bg-stone-200 px-9  p-3 ">
     <Case text="Reporting Ethics" className= {` text-white ml-6 mb-4 `}/>
      <section className="grid grid-cols-1   justify-center items-center gap-x-[40px] gap-y-5  h-[fixed]  relative bottom-[5rem]  md:grid-cols-3 p-3 w-full px-9  md:px-[2rem] ">
        <div className="div-1  w-full h-[fixed]  flex flex-col gap-y-[40px] mb-auto ">
          {firstcard.map((card1, index) => (
            <div
              key={index}
              className=" w-full h-[fixed] flex flex-col gap-y-3 justify-start items-start  "
            >
              <h5 className="text-gray-800  font-poppins text-base text-left font-normal  md:text-xl border-b border-b-gray-300 ">
                {card1.supertitle}
              </h5>
              <h3 className="text-gray-800  font-lato text-2xl text-left   md:text-3xl border-b border-b-gray-300 ">
                {card1.title}
              </h3>
              <p className="text-gray-800 font-inter text-base md:text-xl text-left ">
                {card1.description}
              </p>
              <Link
                href={`mailto: ${card1.address}`}
                className="text-blue font-bold text-base  font-inter"
              >
                {card1.email}
              </Link>
            </div>
          ))}
        </div>
        <div className="div-2  cursor-pointer  w-full h-[400px] overflow-y-auto   flex flex-col gap-y-8  hide-scrollbar ">
          {secondcard.map((card2, index) => (
            <div
              key={index}
              className=" w-full h-[fixed] flex flex-col gap-y-3 justify-start items-start  "
            >
              <h5 className="text-gray-800 font-poppins text-base text-left   md:text-xl border-b border-b-gray-300 ">
                {card2.supertitle}
              </h5>
              <h3 className="text-gray-800 font-lato text-xl text-left  font-bold   md:text-2xl border-b border-b-gray-300 ">
                {card2.title}
              </h3>
              <p className="text-gray-800 font-inter text-base md:text-xl text-left ">
                {card2.description}
              </p>
              <Link
                href={`mailto: ${card2.address}`}
                className="text-blue font-bold text-base inter "
              >
                {card2.email}
              </Link>
            </div>
          ))}
        </div>
        <div className="div-3  w-full h-[400px]  flex flex-col gap-y-[40px]    hide-scrollbar overflow-y-auto cursor-pointer ">
          {thirdcard.map((card3, index) => (
            <div
              key={index}
              className=" w-full h-[fixed] flex flex-col gap-y-3 justify-start items-start  "
            >
              <h5 className="text-gray-800 font-poppins text-base text-left   md:text-xl border-b border-b-gray-300 ">
                {card3.supertitle}
              </h5>
              <h3 className="text-gray-800 font-lato text-xl text-left font-bold  md:text-2xl border-b border-b-gray-300 ">
                {card3.title}
              </h3>
              <p className="text-gray-800 font-inter text-base md:text-xl text-left ">
                {card3.description}
              </p>
              <Link
                href={`mailto: ${card3.address}`}
                className="text-blue font-bold text-base  font-inter"
              >
                {card3.email}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Ethics;
