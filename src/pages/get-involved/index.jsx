import { useEffect } from "react";
import Head from "next/head";
import StructureChartContainer from "@/components/structure-chart/Container/StructureChart-Container";

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
        <StructureChartContainer />
      </div>
    </>
  );
};

export default Index;
