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
      picture: "/assets/images/teams/bmtongo.png",
      nomenclature: "Engr Bello Tongo",
      profession:
        "Founder & Chief Executive officer of Tongston Entrepreneurship Group",

      socials: [
        // { icon: faFacebook, link: "https://facebook.com/johndoe" },
        // { icon: faXTwitter, link: "https://twitter.com/johndoe" },
        { icon: faLinkedin, link: "https://linkedin.com/in/johndoe" },
      ],
      bio: (
        <span className="  ">
          Engr. Bello M. Tongo is an award-winning executive with 14+ years’
          experience in construction, design, education, business &
          entrepreneurship. He is the Founder & Chief Executive officer of
          Tongston Entrepreneurship Group, an award-winning group of education,
          enterprise, media and finance companies focused on Africa with a
          global presence. He is a Top 100 Visionary in Education conferred by
          the Global Forum for Education & Learning; Outstanding Leader as
          conferred by Education 2.0, a Global Education Influencer conferred by
          Education Influence, a North-East Peace Promoter conferred by the
          Students Intellectual Club, a nominee of the National Union of
          Journalist / Nigerian Television Authority Young CEO Award, and a
          nominee for the Global Meaningful Business 100 Award. He is an
          education entrepreneur transforming educational philosophy and
          delivery on the African continent. He is an experienced Training,
          Education and Curriculum Development Consultant. His experience spans
          several organizations including (i) PURD Consulting, an education
          company, where he led training workshops and professional development
          programs on project-based learning, teaching pedagogy, curriculum
          design and assessment to 500+ heads of schools and educators (ii)
          ICICE Academy, a leading British, Nigerian and Islamic curriculum
          based educational institution in Nigeria where he was Primary School
          Team Lead, Educator and Coordinator of various clubs and activities.
          He conducted curriculum re-design focused on integrating project-based
          learning into the Nigerian secondary and primary school curriculum. He
          was a founding member and pioneer
          <br />
          <br />
          coordinator of the Nigerian Tulip International Colleges (NTIC) Alumni
          Association where he managed alumni relations for the group of schools
          across Nigeria in Ogun, Kano, Kaduna, Yobe, Abuja. He was previously a
          civil engineer in Atilgan Construction Company and as a site
          supervisor for the Nigerian Ministry of Works. He is a regular speaker
          at several events, and on TV and radio including Education 2.0 UAE,
          AFSIC London (the largest investment conference on Africa), the Africa
          SDGs Summit, the TEP Centre, NTA, WEFM, CBNC Africa’s Future of
          Education Summit, Gombe TV, Amana Radio, and more. Bello holds a Civil
          Engineering degree and a Postgraduate Certificate (PGCE) in
          Construction Management from the University of Birmingham, and Post
          Graduate Diploma in Education (PGDE) (Innovation in Teaching &
          Learning) from the University of South Wales. He is a mentor and Board
          Trustee for the Skills Outside School Foundation, a leading Education,
          Employability & Entrepreneurship organization in Africa. He is a
          member of the Advisory Board of the Educators Community – Global. He
          is a member of the Institute of Directors Young Directors Forum and
          the Abuja Chamber of Commerce and Industry’s Young CEOs Club. He is a
          Teachers Registration Council of Nigeria (TRCN) Certified Educator and
          a member of VC4A community with over 190,000 members & 22,000
          start-ups
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
      {/* <Hero /> */}

      <Profile data={member_profile} className={``} />
      <MoreAboutUs />
      <GlobalComponent />
      <Subscribe />
    </div>
  );
};

export default Index;
