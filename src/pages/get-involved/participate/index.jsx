import {useEffect} from "react"

import Head from "next/head"

import Participate from "@/components/Get-Involved/Main/Main-Atoms/participate" 

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
            <Head>
                <title> Participate | Skills Outside School Foundation </title>
            </Head>

            <div className="w-full h-[fixed] justify-start items-start">
                <Participate/>
            </div>
        </>
    )
}

export default Index
