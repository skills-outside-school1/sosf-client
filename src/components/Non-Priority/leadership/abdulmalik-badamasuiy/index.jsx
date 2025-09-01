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
      nomenclature: "Mr. Abdulmalik Badamasuiy  ",
      profession: "Managing DirectorABC Multidisciplinary Consulting Services",

      socials: [
        // { icon: faFacebook, link: "https://facebook.com/johndoe" },
        // { icon: faXTwitter, link: "https://twitter.com/johndoe" },
        {
          icon: faLinkedin,
          link: "https://ng.linkedin.com/in/abdulmalik-badamasuiy-abc-multidisciplinary-b50612300",
        },
      ],
      bio: (
        <span className="  ">
          Seasoned lawyer and an authority in diplomacy and bilateral
          cooperation, with over 30 years of unparalleled experience in
          commercial law, trade laws, bilateral relations, jurisprudence,
          diplomatic affairs, policy formation, banking regulations, reforms &
          privatization, strategy development, and oil & gas regulations.
          <br />
          <br />
          As the CEO and Managing Director of ABC Multidisciplinary Consulting
          Services, he brings a wealth of knowledge and a proven track record of
          accomplishments in engineering reforms, leading crucial privatization
          initiatives, and fostering effective cross-cultural awareness.
          <br />
          <br />
          Abdulmalik has demonstrated exceptional leadership in various
          high-profile positions, including leading the Bureau of Public
          Enterprises (BPE) Legal and Transaction Support for the PPM/Aviation
          Sector, serving as a Special Assistant on Diplomacy & Bilateral
          Cooperation to the Honorable Minister at the National Planning
          Commission, The Presidency, and spearheading Vicegerent Chambers as
          Principal Partner and CEO.
          <br />
          <br />
          His expertise in navigating the intricacies of legal challenges and
          his adeptness at facilitating dialogues between government entities,
          prospective investors, and stakeholders have significantly contributed
          to successful privatization efforts across numerous sectors.
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
