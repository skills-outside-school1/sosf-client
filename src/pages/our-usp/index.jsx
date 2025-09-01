import React from "react";
import Head from "next/head";
import UspContainer from "@/components/About/Our-Usps/Usp-Container/UspContainer";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the about page  */}
        <title>Our Usp</title>
        <meta name="description" content="" />
      </Head>
      <UspContainer />
    </div>
  );
};

export default Index;
