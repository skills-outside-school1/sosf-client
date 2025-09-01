import React from "react";
import Image from "next/image";

function PasPartnerships() {
  const partners = [
    {
      logo: "/public/assets/images/logos/tongston.png",
      name: "Tongston",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Official_JAMB_logo.png",
      name: "Jamb",
    },
    {
      logo: "https://dailypost.ng/wp-content/uploads/2020/05/1_NBBsLhguP_B8dF6s02fY8g.jpeg",
      name: "NYSC",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
      name: "Microsoft",
    },
    {
      logo: "https://cdn.pixabay.com/photo/2013/01/29/22/07/google-76659_640.png",
      name: "Google",
    },
    {
      logo: "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/BHkEd6znUYJ.png",
      name: "Facebook",
    },
    {
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_lJ6O-csU6TV2rLiQrAdMPCBGulqXuoz0qSunmRCGLWmg=s900-c-k-c0x00ffffff-no-rj",
      name: "GoTv",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGOGe6YLt7f4Q/company-logo_200_200/company-logo_200_200/0/1649838556353?e=2147483647&v=beta&t=eENuwleJ29xN3nVNsuZhF3__9s3ZNrDr4eDkTOw-_Zg",
      name: "Hartleys",
    },
  ];

  return (
    <div className="flex flex-col w-full h-[fixed] gap-y-[30px] justify-center items-center ">
      <h2
        className={`text-cyan text-3xl font-black font-lato  md:text-4xl mb-[30px]`}
      >
        Our Partnerships
      </h2>
      <div className="overflow-hidden w-full h-[fixed] p-2 flex justify-center items-center">
        <div
          className="flex flex-row gap-x-[30px] animate-scroll"
          style={{
            animation: "scroll 28s linear infinite",
          }}
        >
          {/* Duplicate the content for seamless scrolling */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex flex-row gap-x-[20px] justify-center items-center p-1 w-[200px]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={300}
                height={400}
                className="w-[80px] h-[70px]"
              />
              <h6 className="text-lato font-thin text-xl md:text-2xl text-secondary_blue">
                {partner.name}
              </h6>
            </div>
          ))}
        </div>

        <style jsx>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 28s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default PasPartnerships;
