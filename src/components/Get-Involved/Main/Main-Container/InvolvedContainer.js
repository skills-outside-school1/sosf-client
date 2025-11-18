import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MainSub from "../Main-Atoms/MainSub";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import { InvolvementCards } from "@/components/Get-Involved/Main/Main-Atoms/involvement-cards"
import Pathway from "@/components/Get-Involved/Main/Main-Atoms/Pathway"
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";


export default function InvolvedContainer() {
  return (
    <div className="w-full h-[fixed]">
      <Hero />
      <MainSub />
      <InvolvementCards />
      <Pathway />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
