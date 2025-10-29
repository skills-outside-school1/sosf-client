"use client";
import React, { useState } from "react";
import AmbassadorCard from "./AmbassadorCard";
import AmbassadorModal from "./AmbassadorModal";

export default function AmMeetOurAmbassadors() {
  const ambassadors = [
    {
      id: 1,
      name: "Habeebi Salma",
      title: "Ambassador from GSS Kuje",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
      bio: "Habeebi Salma is a passionate youth advocate committed to driving impact in her community.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      id: 2,
      name: "Olakunle Daniel",
      title: "Ambassador from GSS Jabi",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      bio: "Olakunle Daniel focuses on leadership training and educational empowerment.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      id: 3,
      name: "Akanji David",
      title: "Volunteer",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
      bio: "Akanji David is a community volunteer promoting innovation and entrepreneurship.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      id: 4,
      name: "Agabi Joseph",
      title: "Ambassador from GSS Jikwoyi",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
      bio: "Agabi Joseph drives change through mentorship and youth engagement programs.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      id: 5,
      name: "Nanret Hossa",
      title: "Ambassador from GSS Wuse",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      bio: "Nanret Hossa is focused on community development and advocating gender equality.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      id: 6,
      name: "Onya Michael",
      title: "Ambassador from GSS Jabi",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=80",
      bio: "Onya Michael promotes education and skills training among youths.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
        email: "#",
      },
    },
  ];

  const [selectedAmbassador, setSelectedAmbassador] = useState(null);

  return (
    <section className="items-center justify-center w-full px-6 xl:px-0">
      <div className="py-8 md:mx-auto xl:max-w-[1421px]">
        <div className="grid items-center grid-cols-1 gap-8 mb-12 md:gap-12 lg:grid-cols-2 place-content-between">
          <div className="lg:w-3/4">
            <h2 className="mb-6 font-bold text-gray-900 text-[2.3rem] lg:text-[2.875rem] font-mont leading-[40px] lg:leading-[52px]">
              Meet Our <br /> Ambassadors
            </h2>
            <span className="leading-relaxed text-gray-600 font-inter text-[15px]">
              Here are some of the individuals who are actively contributing to
              our vision. Our ambassadors are catalysts for change, driving our
              initiatives forward and amplifying our impact.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:gap-4 md:grid-cols-3 md:mt-0">
            {ambassadors.map((ambassador) => (
              <AmbassadorCard
                key={ambassador.id}
                ambassador={ambassador}
                onClick={() => setSelectedAmbassador(ambassador)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedAmbassador && (
        <AmbassadorModal
          ambassador={selectedAmbassador}
          onClose={() => setSelectedAmbassador(null)}
        />
      )}
    </section>
  );
}
