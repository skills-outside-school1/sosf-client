import React from "react";
import Head from "next/head";
import PartnersContainer from "@/components/About/Partners/Partners-Container/PartnersContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Partnerships | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <PartnersContainer />
    </div>
  );
};

export default Index;
