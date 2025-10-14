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
      picture: "/assets/images/teams/salamatu (2).png",
      nomenclature: "Ms. Salamatu Sule ",
      profession: "Founder & CEO of Fahimta Literary Discourse",

      socials: [
        // { icon: faFacebook, link: "https://facebook.com/johndoe" },
        // { icon: faXTwitter, link: "https://twitter.com/johndoe" },
        {
          icon: faLinkedin,
          link: "https://ng.linkedin.com/in/salamatu-sule-58326670",
        },
      ],
      bio: (
        <span className="  ">
          She is the Founder & CEO of Fahimta Literary Discourse, a literary
          agency established solely for the purpose of advancing the course of
          literature on the African continent through a universal comparison and
          review of literary works. Fahimta reviews and promotes literary works
          of authors especially those that specialize in contemporary fictions.
          They also facilitate relationships between the writer and the
          publisher while also undertaking the process of translation of
          literary works into other languages of the world.
          <br />
          <br />
          She is a poet and book reviewer who has reviewed several books by
          prolific authors, both fiction and nonfiction, from Tope Fausua’s
          ‘Crushed’ and ‘Things to do before your Career Disappears’ to Abubakar
          Ibrahim Adam’s ‘The Whispering Trees’ including Dike Chukwumerije’s
          ‘Urichindere’ and many others. ‘Season of Crimson Blossoms’ by
          Abubakar Ibrahim Adam is her fourteenth review. Salamatu is the former
          Secretary, Association of Nigerian Authors and currently holds a
          Diplomatic Book Discourse with the German Embassy.She currently works
          for the Art Heritage Ltd. She is the founder of Fahimta Literary
          Discourse (FLD) and a worthy Patron of the Association of Nigerian
          Student Authors (ANSA). She is a graduate of English & Literary
          Studies from Kogi State University, Ayingba.
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
