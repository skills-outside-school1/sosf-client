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
      picture: "/assets/images/teams/Chris.jpg",
      nomenclature: "Mr. Chris Ogedengbe ",
      profession:
        "Chief Executive Officer, Alpha Research and Development Centre Limited",

      socials: [
        // { icon: faFacebook, link: "https://facebook.com/johndoe" },
        // { icon: faXTwitter, link: "https://twitter.com/johndoe" },
        {
          icon: faLinkedin,
          link: "https://ng.linkedin.com/in/chris-ogedengbe-00848b210",
        },
      ],
      bio: (
        <span className="  ">
          Chris Olusola Ogedengbe is a seasoned Monitoring and Evaluation (M&E)
          specialist, statistician and demographer with over 25 years of
          experience in project management and the international development
          sector. He holds a Bachelor of Science in Statistics from the
          University of Ibadan and multiple postgraduate qualifications from the
          United Nations Cairo Demographic Centre , including a Master of
          Philosophy (M.Phil.) in Demography, a Post-Graduate Diploma in
          Population and Development, and a Post Graduate Diploma in Demography.
          <br />
          <br />
          Ogedengbe’s extensive training includes a specialized program on
          Monitoring and Evaluation from the Evaluation Project of USAID at the
          University of Northern California, as well as courses in Strategic
          Planning in Project Management, Performance Management, and Business
          Risk Management, among others. His technical proficiency is further
          enhanced by his adeptness in various statistical software packages,
          including SPSS, STATA, and EPI INFO, which he utilizes for data
          analysis and project assessments.
          <br />
          <br />
          Throughout his career, Ogedengbe has held significant positions with
          reputable organizations, including a four-year tenure at USAID as the
          head of the Monitoring and Evaluation Unit and later as Zonal Program
          Manager. He has managed projects funded by the European Union (EU) and
          the Foreign, Commonwealth and Development Office (FCDO), and served as
          Project Officer for UNICEF, focusing on Water Supply, Sanitation, and
          Hygiene initiatives in Nigeria. Currently, he leads Alpha Research and
          Development Centre Limited, a consulting firm based in Abuja, where he
          oversees research teams conducting M&E and statistical surveys.
          <br />
          <br />
          Ogedengbe has contributed to numerous publications in the
          International Journal of Social Sciences and Management, addressing
          critical health and social issues, and has authored various technical
          reports on M&E projects funded by organizations such as the World Bank
          and UNDP. His professional affiliations include membership in the
          Chartered Institute of Development Studies and Administration of
          Nigeria, the Statistical Association of Nigeria, and the Monitoring
          and Evaluation Association of Nigeria, underscoring his commitment to
          advancing development practices in Nigeria and beyond.
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
