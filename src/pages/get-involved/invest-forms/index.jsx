import {useEffect} from "react"

import Head from "next/head"
import  InvestForms  from "@/components/Get-Involved/Main/Main-Atoms/invest"    

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
            <Head>
                <title> Invest Forms | Skills Outside School Foundation </title>
            </Head>

            <div className="w-full h-[fixed] justify-start items-start">
                <InvestForms/>
            </div>
        </>
    )
}

export default Index
