import React from "react";
import Head from "next/head";
import CoreValuesContainer from "@/components/About/Our-Core-Values/Core-Values-Container/CoreValuesContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the about page  */}
        <title>Our Core Values </title>
        <meta name="description" content="" />
      </Head>
      <CoreValuesContainer />
    </div>
  );
};

export default Index;
