import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import ContactSub from "../Contact-Atoms/Sub-Hero";
import WriteContainer from "../Contact-Atoms/Write-Container";
import Contactx from "@/components/Contacts/Contact-Atoms/Contacts";
import Spokes from "@/components/Contacts/Contact-Atoms/Spokes";

import Resources from "@/components/Contacts/Contact-Atoms/Resources";

import Scams from "@/components/Contacts/Contact-Atoms/Scams";
import Ethics from "@/components/Contacts/Contact-Atoms/Ethics";
import Subscribe from "../Contact-Atoms/Subscribe";

export default function ContactContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start  mb-[8rem] ">
      <Hero />
      <ContactSub />
      <WriteContainer />
      <Contactx />
      <Spokes />
      <Resources />
      <Scams />
      <Subscribe />
    </div>
  );
}
