import React from "react";
import Head from "next/head";
import WorkContainer from "@/components/Our-Work/Main/Work-Container/WorkContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto  flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Work | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <WorkContainer />
    </div>
  );
};

export default Index;
