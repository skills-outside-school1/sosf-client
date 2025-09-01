import React from "react";
import Head from "next/head";
import PillarsContainer from "@/components/About/Pillars/Pillars-Container/PillarsContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Pillars | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <PillarsContainer />
    </div>
  );
};

export default Index;
