import React from "react";
import Tabs from "@/components/shared/Atoms/Tab-Atoms/Tab";

export default function LeadershipCards() {
  const tabsData = ["Nigeria Board", "Offshore Board", "Service Providers"];
  const worksData = {
    NigeriaBoard: [
      {
        image: "/assets/images/teams/bmtongo.png",
        // title: "The Visionary Founder ",
        name: "Engr Bello Tongo",
        description: <span></span>,
        route: "/leadership/bello-tongo",
      },
      {
        image: "/assets/images/teams/halimaabba.png",
        // title: "The Multi-Award-Winning Chair ",
        name: "Ms. Halima Ibrahim Abba ",
        description: <span></span>,
        route: "/leadership/halima-abba",
      },
      {
        image: "/assets/images/teams/salamatu (2).png",
        // title: " The Literary Advocate ",
        name: "Ms. Salamatu Sule",
        description: <span></span>,
        route: "/leadership/salamatu-sule",
      },
      {
        image: "/assets/images/teams/salamatu (2).png",
        // title: " The Legal Eagle",
        name: "Mr. Abdulmalik Badamasuiy ",
        description: <span></span>,
        route: "/leadership/abdulmalik-badamasuiy",
      },

      {
        image: "/assets/images/teams/salamatu (2).png",
        // title: " The Research Maestro ",
        name: "Mr. Chris Ogedengbe ",
        description: <span></span>,
        route: "/leadership/chris-ogedengbe",
      },
    ],

    OffshoreBoard: [
      {
        image: "/assets/images/teams/bmtongo.png",
        // title: "The Visionary Founder ",
        name: "Engr Bello Tongo",
        description: <span></span>,
        route: "/leadership/bello-tongo",
      },
      {
        image: "/assets/images/teams/halimaabba.png",
        // title: "The Multi-Award-Winning Chair ",
        name: "Ms. Halima Ibrahim Abba ",
        description: <span></span>,
        route: "/leadership/halima-abba",
      },

      {
        image: "/assets/images/teams/halimaabba (2).png",
        title: "",
        name: "Kenny Curpen",
        description: <span></span>,
        route: "/leadership/kenny-curpen",
      },
    ],

    //Service Providers
    ServiceProviders: [
      {
        image: "/assets/images/service-providers/regus.png",
        title: "Workspace/Office Solutions (Nigeria & Rest of Africa)  ",
        name: "Regus ",
        description: <span></span>,
        route: "#",
      },
      {
        image: "",
        title: " Workspace/Office Solutions (Mauritius)  ",
        name: "Ocorian ",
        description: <span></span>,
        route: "#",
      },

      {
        image: "",
        title: " International Administration & Procurement",
        name: "Ocorian ",
        description: <span></span>,
        route: "#",
      },
      {
        image: "",
        title: " Nigeria Administration & Procurement",
        name: " PIF Africa ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "/assets/images/service-providers/tongston.png",
        title: " NigTechnology",
        name: " Tongston Holdings ",
        description: <span></span>,
        route: "https://tongston.com",
      },
      {
        image: "",
        title: " Legal & Governance – International",
        name: " Ocoriaon  ",
        description: <span></span>,
        route: "#",
      },
      {
        image: "",
        title: " Legal & Governance – Nigeria",
        name: " PIF Africa  ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " Nigeria & International Fundraising Solutions",
        name: " PIF Africa  ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " International Financial Institution & Asset Management",
        name: " Standard Chartered Bank  ",
        description: <span></span>,
        route: "#",
      },
      {
        image: "",
        title: " Nigeria Asset Management",
        name: " Stanbic IBTC Bank  ",
        description: <span></span>,
        route: "#",
      },
      {
        image: "",
        title: " Nigeria Financial Institution (s) ",
        name: " First Bank, Guaranty Trust Bank, Stanbic IBTC Bank  ",
        description: <span></span>,
        route: "#",
      },
      {
        image: "",
        title: " International Accounting & Treasury ",
        name: " Ocoriaon  ",
        description: <span></span>,
        route: "#",
      },
      {
        image: "",
        title: " Nigeria Accounting & Treasury  ",
        name: " PIF Africa  ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " Communications & Advocacy  ",
        name: " PIF Africa  ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " Data & Research  ",
        name: " Tongston Holdings   ",
        description: <span></span>,
        route: "https://tongston.com",
      },
      {
        image: "",
        title: " Interventions  ",
        name: " SOSF Bridge Tongston Institute   ",
        description: <span></span>,
        route: "https://tongston.com",
      },
      {
        image: "",
        title: " Interventions  ",
        name: " SOSF Headstart – PIF Africa   ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " Interventions  ",
        name: " SOSF Headstart – PIF Africa   ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " Interventions  ",
        name: " SOSF Grants - PIF Africa   ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " Interventions  ",
        name: " SOSF Funds - PIF Africa   ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
      {
        image: "",
        title: " Global Management Services   ",
        name: " PIF Africa   ",
        description: <span></span>,
        route: "https://pifafrica.org",
      },
    ],
  };

  return (
    <div className="container-div w-full    bg-secondary_blue pb-5  pt-5 flex justify-start items-start ">
      <div className="w-full  flex flex-col gap-y-5 justify-start items-start  px-2  md:px-[4rem] lg:px-[5rem]">
        <h3 className="   text-gray-800 font-mont font-bold    lg:text-4xl  md:px-8 px-2 ">
          Meet The Leaders
        </h3>
        <Tabs
          tabs={tabsData}
          works={worksData}
          className={`h-[500px] w-[300px]  md:w-full  md:h-[480px]`}
          className3={`mx-auto`}
        />
      </div>
    </div>
  );
}
