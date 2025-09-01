import { useState, useEffect } from "react";
import Link from "next/link";
import Case from "../../shared/headings/Case";
import { P, H3 } from "@/components/shared/Atoms/Typography/typography";

function WriteToUs() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        // User is scrolling up
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const firstcard = [
    {
      description: (
        <article>
          While it is important to us to be available to our collaborators,
          ambassadors (alumni), potential beneficiaries including grantees, and
          the public, due to the large number of emails received, we may be
          unable to respond directly to your inquiry.
        </article>
      ),
      email: "info@skillsoutsideschool.com",
    },

    // {
    //   supertitle: (
    //     <p>
    //       {" "}
    //       Joining Us? We&apos;d love to have you make a difference with us at
    //       the Skills Outside School Foundation. Check out our openings or
    //       contact us at
    //     </p>

    //   email: "careers@skillsoutsideschool.com",
    // },
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
          Interested in participating in any of our programs for K-12 & Tertiary
          schools (teachers & students) & small holder farmers (for yourself or
          your institution)?
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
      title:
        "Seeking to access enterprise/scholarship funds as an ambassador/alumni?",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "sosfunds@skillsoutsideschool.com",
    },
    {
      title: "Interested in using our data & research? ",
      description: <article> </article>,
      email: "For data queries - data.research@skillsoutsideschool.com",
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
      email: "For advocacy, advocacy@skillsoutsideschool.com",
    },

    {
      title:
        "Interested in partnering with us to make a difference as a government, private entity or NGO?",
      description: (
        <article>
          {" "}
          For partnership, if you are a corporate (government, private entity or
          NGO)
        </article>
      ),
      email: "corpinnovpartners@skillsoutsideschool.com",
    },
  ];

  //cards number 3
  const thirdcard = [
    {
      supertitle: (
        <p>
          Interested in partnering with us to make a difference as an
          individual?{" "}
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
      title: "",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "	For investment - SOSFtrust@skillsoutsideschool.com",
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
      title: "",
      //   description: (
      //     <article> Reach Out for Interviews and Press Information</article>
      //   ),
      email: "careers@skillsoutsideschool.com",
    },
  ];
  return (
    <div className=" flex flex-col gap-y-5 justify-start items-start  w-full h-[fixed]  px-2 lg:px-[5.7rem]  md:px-[4rem]  ">
      <Case text="Contacts" className={` ml-2  md:ml-6 mb-9 `} />
      <section
        className={`grid grid-cols-1  gap-y-8   justify-center items-center gap-x-[40px]   h-[fixed]  relative    bottom-[3rem]  md:grid-cols-2   lg:grid-cols-3  w-full px-2  md:px-[2rem]  ${
          scrollDirection === "down"
            ? "translate-y-[-40px]"
            : "translate-y-[20px]"
        } transform  duration-500 ease-in-out`}
      >
        <div className="div-1  w-full h-[fixed]  flex flex-col gap-y-[40px] mb-auto ">
          {firstcard.map((card1, index) => (
            <div
              key={index}
              className=" w-full h-[fixed] flex flex-col gap-y-3 justify-start items-start  "
            >
              <h5 className="text-[#000000]  font-inter text-base text-left font-normal  md:text-lg border-b border-b-gray-300 ">
                {card1.supertitle}
              </h5>
              <h3 className="text-[#000000]  font-mont font-bold  text-2xl text-left   md:text-3xl border-b border-b-gray-300 ">
                {card1.title}
              </h3>
              <P className="  ">{card1.description}</P>
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
              <h5 className="text-[#000000] font-inter text-base text-left   md:text-lg border-b border-b-gray-300 ">
                {card2.supertitle}
              </h5>
              <h3 className="text-[#000000] font-mont font-bold  text-xl text-left     md:text-2xl border-b border-b-gray-300 ">
                {card2.title}
              </h3>
              <P className=" ">{card2.description}</P>
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
              <h5 className="text-[#000000] font-inter text-base text-left   md:text-lg border-b border-b-gray-300 ">
                {card3.supertitle}
              </h5>
              <h3 className="text-[#000000] font-mont font-bold  text-xl text-left   md:text-2xl border-b border-b-gray-300 ">
                {card3.title}
              </h3>
              <P className="  ">{card3.description}</P>
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

export default WriteToUs;
