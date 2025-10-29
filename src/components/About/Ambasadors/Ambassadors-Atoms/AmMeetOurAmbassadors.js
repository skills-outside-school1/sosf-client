import react from "react";
import Link from "next/link";

export default function AmMeetOurAmbassadors() {
  const ambassadors = [
  {
    id: 1,
    name: "Habeebi Salma",
    title: "Ambassador from GSS Kuje",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Olakunle Daniel",
    title: "Ambassador from GSS Jabi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Akanji David",
    title: "Volunteer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Agabi Joseph",
    title: "Ambassador from GSS Jikwoyi",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Nanret Hossa",
    title: "Ambassador from GSS Wuse",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Onya Michael",
    title: "Ambassador from GSS Jabi",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=80"
  }
];


  return (
    <section className="items-center justify-center w-full px-6 xl::px-0">
      <div className="py-8 md:mx-auto xl:max-w-[1421px]">
        <div className="grid items-center grid-cols-1 gap-8 mb-12 md:gap-12 lg:grid-cols-2 place-content-between">
          <div className="lg:w-3/4">
            <h2 className="mb-6 font-bold text-gray-900 text-[2.3rem] lg:text-[2.875rem] font-mont leading-[40px] lg:leading-[52px]">
              Meet Our <br /> Ambassadors
            </h2>
            <span className="leading-relaxed text-gray-600 font-inter text-[15px]">
              Here are some of the individuals who are actively contributing to
              our vision . Our ambassadors are not merely representatives; they
              are catalysts for change, driving our initiatives forward and
              amplifying our impact. We believe in empowering them to be active
              agents of transformation, forging a path toward a better future
              for our 
              <Link
                href={`/our-target-audience`}
                className="underline text-blue"
              >
                {" "}
                target beneficiaries.
              </Link>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:gap-4 md:grid-cols-3 md:mt-0">
            {ambassadors.map((ambassador) => (
              <div
                key={ambassador.id}
                className="text-center bg-[#B7C8F4] rounded-[1rem] w-3/4 md:w-full mx-auto md:mx-0"
              >
                <div className="px-3 pt-3">
                  <div className="overflow-hidden bg-gray-200 rounded-t-[1rem] aspect-square h-[200px] md:h-[160px] w-full">
                    <img
                      src={ambassador.image || "/placeholder.svg"}
                      alt={ambassador.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <span className="block w-full h-[5px] bg-white"></span>
                <div className="p-3">
                  {" "}
                  <p className="text-sm font-medium text-gray-900 font-mont">
                    {ambassador.name}
                  </p>
                  <span className="text-xs font-inter">{ambassador.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
