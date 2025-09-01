import React from "react";
import Head from "next/head";
import WhoWeAreContainer from "@/components/About/Who-We-Are/Who-We-Are-Contiainer/Who-We-Are-Container";

const Index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the about page  */}
        <title>Who We Are</title>
        <meta name="description" content="" />
      </Head>
      <WhoWeAreContainer />
    </div>
  );
};

export default Index;
