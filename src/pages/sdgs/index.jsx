import React from "react";
import Head from "next/head";
import SdgContainer from "@/components/About/Sdgs/Sdgs-Container/SdgsContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the about page  */}
        <title>SDGs We Align With |  Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <SdgContainer />
    </div>
  );
};

export default Index;
