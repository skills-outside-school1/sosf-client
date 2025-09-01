import React from "react";
import Head from "next/head";
import FocusContainer from "@/components/About/Focus-Areas/Focus-Areas-Container/FocusAreasContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the about page  */}
        <title>Our Focus Areas </title>
        <meta name="description" content="" />
      </Head>
      <FocusContainer />
    </div>
  );
};

export default Index;
