import React from "react";
import Head from "next/head";
import AdvocacyContainer from "@/components/Our-Work/Advocacy/Advocacy-Container/AdvocacyContainer";

export default function Index() {
  return (
    <div className="main w-full h-auto  flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Advocacy | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <AdvocacyContainer />
    </div>
  );
}
