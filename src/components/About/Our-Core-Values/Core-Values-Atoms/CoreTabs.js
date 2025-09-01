import React, { useState } from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Integrity from "./Integrity";
import Collaboration from "./Collaboration";
import Service from "./Service";
import { motion } from "framer-motion";

const hero_data = [
  {
    heading2: "Our Core Values",
    paragraph: (
      <span className=" ">
        <span className="list-none  c lg:px-5 ">
          <li> - Integrity</li>
          <li> - Collaboration</li>
          <li> - Service</li>
        </span>
      </span>
    ),
  },
];
export default function CoreTabs() {
  // Define tabs with labels
  const tabs = [
    { id: 1, label: "Integrity" },
    { id: 2, label: "Service" },
    { id: 3, label: "Collaboration" },
  ];

  // State for the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Map tab IDs to components
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Integrity />;
      case 2:
        return <Service />;
      case 3:
        return <Collaboration />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-full   ">
      <SubHero
        items={hero_data}
        className={`w-full md:w-full lg:w-full px-2 pb-[4rem]`}
      />
      <span className=" flex flex-col gap-y-[2rem] justify-start items-start  md:px-[4rem]  px-2 lg:px-[8rem] pb-[6rem]  font-inter font-medium text-gray-800 lg:text-xl">
        <p
          className={`text-[#000000] font-normal md:leading-[35px] w-full  font-inter text-base md:text-[18.56px]  text-left md:tracking-wide `}
        >
          At the SOSF, we hold integrity, service and collaboration as{" "}
          <b>
            our fundamental core values. Our pledge to integrity, service, and
            collaboration is more than a statement; it&apos;s a practice that
            guides our actions, decisions and interactions. We strive to
            maintain the highest ethical standards, provide exceptional service,
            and collaborate effectively with our stakeholders, beneficiaries and
            partners.
          </b>
        </p>
      </span>
      {/* Tabs */}
      <div className="flex flex-row justify-start items-start   flex-wrap pb-2 w-full  px-2   md:px-[4rem]  lg:px-[8rem]   space-x-2 space-y-6  md:space-y-0 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-lg font-bold  font-mont w-[150px] md:w-[150px] h-[60px]  ${
              activeTab === tab.id
                ? " text-white   bg-[#6A80B8] transition-transform ease-in-out duration-1000 "
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition duration-300 ease-in-out`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab} // Unique key for re-rendering
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-6 p-4  rounded-md w-full"
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
}
