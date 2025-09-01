import React from "react";
import Head from "next/head";
import LeadershipContainer from "@/components/About/Leadership/Leadership-Container/LeadershipContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the about page  */}
        <title>
          Our Executive Leadership | Skills Outside School Foundation
        </title>
        <meta name="description" content="" />
      </Head>
      <LeadershipContainer />
    </div>
  );
};

export default Index;
