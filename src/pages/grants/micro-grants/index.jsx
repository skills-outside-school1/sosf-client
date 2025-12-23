import React from "react";
import Head from "next/head";
import MicroGrantsContainer from "@/components/Our-Work/Interventions/grants/Grants/MicroGrants-Container/MicroGrants-Container";


const Index = () => {
  return (
    <div className="flex flex-col w-full h-auto overflow-hidden main">
      <Head>
        {/* in page seo for the history page  */}
        <title>Grants | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <MicroGrantsContainer />
    </div>
  );
};

export default Index;
