import React from "react"
import Head from "next/head"

import DataContainer from "@/components/Our-Work/Data/Data-Container/DataContainer"

const Index = () => {
  return (
    <div className="main w-full h-auto  flex flex-col">
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Work | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      
      <DataContainer />
    </div>
  )
}

export default Index;
