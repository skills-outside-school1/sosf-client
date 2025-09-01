import React from "react";
import Head from "next/head";
import HistoryContainer from "@/components/About/Our-History/History-Container/HistoryContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Our History | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <HistoryContainer />
    </div>
  );
};

export default Index;
