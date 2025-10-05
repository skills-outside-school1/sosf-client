import {useEffect} from "react"
import StructureChartContainer from "@/components/structure-chart/Main/Main-Container/StructureChartConteiner"
import Head from "next/head"

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
            <Head>
                <title> Explore Structure Chart | Skills Outside School Foundation </title>
            </Head>

            <div className="w-full h-[fixed] justify-start items-start">
                <StructureChartContainer />
            </div>
        </>
    )
}

export default Index
