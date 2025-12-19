import React from "react";
import Head from "next/head";
import LargeGrantsContainer from "@/components/Our-Work/Interventions/grants/Grants/LargeGrants-Container/LargeGrants-Container";


const Index = () => {
  return (
    <div className="flex flex-col w-full h-auto overflow-hidden main">
      <Head>
        {/* in page seo for the history page  */}
        <title>Grants | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <LargeGrantsContainer />
    </div>
  );
};

export default Index;
