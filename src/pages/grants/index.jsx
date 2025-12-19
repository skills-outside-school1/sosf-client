import React from "react";
import Head from "next/head";
import GrantsContainer from "@/components/Our-Work/Interventions/grants/grants-Container/GrantsContainer";

const Index = () => {
  return (
    <div className="flex flex-col w-full h-auto overflow-hidden main">
      <Head>
        {/* in page seo for the history page  */}
        <title>Grants | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <GrantsContainer />
    </div>
  );
};

export default Index;
