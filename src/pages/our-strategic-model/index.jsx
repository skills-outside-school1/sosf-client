import React from "react";
import Head from "next/head";

import ModelContainer from "@/components/About/Strategic-Model/Model-Container/ModelContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Strategic Model | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <ModelContainer />
    </div>
  );
};

export default Index;
