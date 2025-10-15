import React from "react";
import Head from "next/head";
import Hero from "@/components/home/Home-Atoms/Hero";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Profile from "@/components/shared/Atoms/Profiles/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

const Index = () => {
  const member_profile = [
    {
      picture: "/assets/images/teams/halimaabba.png",
      nomenclature: "Kenny Curpen ",
      profession: "The Global Strategist",

      socials: [
        // { icon: faFacebook, link: "https://facebook.com/johndoe" },
        // { icon: faXTwitter, link: "https://twitter.com/johndoe" },
        {
          icon: faLinkedin,
          link: "https://www.linkedin.com/in/kenny-curpen-245b5aa5?originalSubdomain=mu",
        },
      ],
      bio: (
        <span className="  ">
          He is the Director - Corporate Services and Private Client Solutions,
          Ocorian Corporate Services (Mauritius) Limited. Kenny has 11 years’
          experience with Ocorion managing Corporate and Private Clients. With
          1,250 professionals operating across 16 international financial
          centres, Ocorion’s specialism in private and corporate wealth
          structuring enables it to optimise SOSF’s operations with confidence.
          Ocorion has a team of over 300 in its Mauritius office that serve to
          tailor structures that most effectively manage, preserve and
          distribute wealth. Ocorion is licensed to offer a full range of
          services for the establishment and administration of foundations,
          facilitating tax management and reporting, asset protection and
          succession planning.
          <br />
          <br />
          Kenny holds a Bsc Mathematics and Finance from the
          <a
            href="https://uk.linkedin.com/school/university-of-liverpool/?trk=public_profile_school"
            target="_blank"
            className="text-blue"
          >
            {" "}
            University of Liverpool
          </a>
          ; and an MBA Finance Mathematics and Finance from the{" "}
          <a
            href="https://uk.linkedin.com/school/university-of-liverpool/?trk=public_profile_school"
            target="_blank"
            className="text-blue"
          >
            {" "}
            University of Liverpool
          </a>
          . He is a Member of Society of Trust and Estate Practitioners (TEP)
        </span>
      ),
    },
  ];
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col gap-y-[90px] md:gap-y-[100px]">
      <Head>
        {/* in page seo for the about page  */}
        <title>
          Our Executive Leadership | Skills Outside School Foundation
        </title>
        <meta name="description" content="" />
      </Head>

      <Profile data={member_profile} className={``} />
      <MoreAboutUs />
      <GlobalComponent />
      <Subscribe />
    </div>
  );
};

export default Index;
