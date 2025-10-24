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
      nomenclature: "Ms. Halima Ibrahim Abba",
      profession: "Managing Director PIF Africa (Chair)",

      socials: [
        // { icon: faFacebook, link: "https://facebook.com/johndoe" },
        // { icon: faXTwitter, link: "https://twitter.com/johndoe" },
        {
          icon: faLinkedin,
          link: "https://ng.linkedin.com/in/halima-ibrahim-abba-llb-mphil-fiidm-fihsd-71727328",
        },
      ],
      bio: (
        <span className="  ">
          Halima Ibrahim Abba is multi-award-winning with 14 years’
          international public, private & non-profit institutional experience
          which cuts across International Development; Education,
          Entrepreneurship & Employability and Infrastructure &
          Industrialization Finance - Transport & Logistics; Power;
          Petrochemicals & Mineral Resource Refining; Agriculture &
          Agro-Processing.
          <br />
          <br />
          She is an advisor, director, investor and consultant through PIF
          Africa as Managing Director for Africa’s sustainable development. She
          is a Guidepoint Global Advisor.
          <br />
          <br />
          Halima was the Associate Vice President & SA to the Chief Investment
          Officer at the Africa Finance Corporation (AFC), a pan-African US$10bn
          multi-lateral development finance institution focused on
          infrastructure & industrialization. She co-led the design, launch &
          operationalization of Infrastructure Corporation of Nigeria
          (InfraCorp) with promoters – AFC, Central Bank of Nigeria & Nigerian
          Sovereign Investment Authority, alongside the Federal Government of
          Nigeria, led by the Vice President.
          <br />
          <br />
          She is also the Chair of a leading pan-African education,
          employability & entrepreneurship organization, Skills Outside School
          Foundation, leveraging on data, advocacy & interventions with 150+
          partners & 50,000+ beneficiaries across 7 countries in Africa, Asia &
          South America. She has worked in global investment banks & public
          sector institutions - Goldman Sachs, Nomura, JP Morgan & the Bureau of
          Public Enterprises.
          <br />
          <br />
          She holds a First-Class (LLB) Law degree from Kings College London, UK
          & Master of Philosophy (MPhil) in Development Studies from the
          prestigious Cambridge University, UK. She is an alum of Yale School of
          Management, Common Purpose Leadership Program, International Finance
          Faculty/Middlesex University, Harvard Business School Online, AMT and
          Euromoney.
          <br />
          <br />
          She is also a member of the Institute of Directors UK and Nigeria
          (Young Directors Forum), the Board Room Africa, Women on Boards UK,
          Young CEO Club (Abuja Chamber of Commerce & Industry), Development
          Studies Association, International Association for Community
          Development, African Leaders Network Women, International Institute of
          Directors & Managers, International Behavioral Public Policy
          Association, Institute for Public Policy Analysis and Management,
          Global Council for Promotion of International Trade and Financial
          Management Association International.
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
