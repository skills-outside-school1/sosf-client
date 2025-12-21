import React from "react";
import Head from "next/head";
import AgropreneursContaner from "@/components/Our-Work/Interventions/sosf-agropreneurs/Agropreneurs-Container/AgropreneursContaner";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Partnerships | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <AgropreneursContaner />
    </div>
  );
};

export default Index;
