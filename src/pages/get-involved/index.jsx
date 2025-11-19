import { useEffect } from "react";
import Head from "next/head";
import InvolvedContainer from "@/components/Get-Involved/Main/Main-Container/InvolvedContainer";
import StructureChartContainer from "@/components/structure-chart/Main/Main-Container/StructureChartConteiner"


const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title> Get Involved | Skills Outside School Foundation </title>
      </Head>

      <div className="w-full h-[fixed] justify-start items-start ">
        {/* <InvolvedContainer /> */}
        <StructureChartContainer />
      </div>
    </>
  );
};

export default Index;
