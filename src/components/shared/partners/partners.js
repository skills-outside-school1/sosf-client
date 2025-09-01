// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import {
//   EffectFade,
//   Navigation,
//   Pagination,
//   Scrollbar,
//   Autoplay,
// } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const logos = [
//   {
//     src: "/assets/images/logos/tongston.png",
//     alt: "shopify_logo",
//     width: "118px",
//     // height: "25px",
//     mt: "0em",
//   },
//   {
//     src: "/assets/images/logos/nysc.png",
//     alt: "shopify_logo",
//     width: "118px",
//     // height: "25px",
//     mt: "0em",
//   },
//   {
//     src: "/assets/images/logos/shell.png",
//     alt: "shopify_logo",
//     width: "118px",
//     // height: "25px",
//     mt: "0em",
//   },
//   {
//     src: "/assets/images/logos/tongston.png",
//     alt: "shopify_logo",
//     width: "118px",
//     // height: "25px",
//     mt: "0em",
//   },
//   {
//     src: "/assets/images/logos/nysc.png",
//     alt: "shopify_logo",
//     width: "118px",
//     // height: "25px",
//     mt: "0em",
//   },
//   {
//     src: "/assets/images/logos/shell.png",
//     alt: "shopify_logo",
//     width: "118px",
//     // height: "25px",
//     mt: "0em",
//   },
//   //   { src: amazonLogo, alt: "amazon_logo", width: "118px", height: "25px", mt: "0.5em" },
//   //   { src: stripeLogo, alt: "stripe_logo", width: "80px", height: "25px", mt: "0em" },
//   //   { src: wiseLogo, alt: "wise_logo", width: "100px", height: "25px", mt: "0.5em" },
//   //   { src: revolutLogo, alt: "revolut_logo", width: "118px", height: "25px", mt: "0.5em" },
//   //   { src: mercuryLogo, alt: "mercury_logo", width: "118px", height: "25px", mt: "0.5em" },
//   //   { src: plaidLogo, alt: "plaid_logo", width: "90px", height: "20px", mt: "0.4em" },
// ];

// const Partners = () => {
//   return (
//     <div>
//       <div className="w-full hidden lg:flex flex-row justify-center items-center gap-5 mt-10 flex-wrap lg:gap-10">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="opacity-70 hover:opacity-100 ease-in-out duration-300 transition-all hover:scale-105 cursor-pointer"
//             style={{ height: logo.height, width: logo.width }}
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={100}
//               height={100}
//               className={`mt-[${logo.mt}]`}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="block text-center w-full mt-10 lg:hidden pl-3 pr-6">
//         <Swiper
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             "@0.00": {
//               slidesPerView: 3,
//               spaceBetween: 5,
//             },
//             "@0.75": {
//               slidesPerView: 4.4,
//               spaceBetween: 0,
//             },
//             "@1.00": {
//               slidesPerView: 6.3,
//               spaceBetween: 0,
//             },
//             "@1.50": {
//               slidesPerView: 6.4,
//               spaceBetween: 0,
//             },
//           }}
//           centeredSlides={true}
//           centeredSlidesBounds={true}
//           loop={1000}
//           speed={3000}
//           slidesPerView={4}
//           spaceBetween={0}
//           modules={[Scrollbar, Pagination, Autoplay]}
//           className="w-full self-center flex flex-row items-center text-center justify-center gap-0"
//         >
//           {logos.map((logo, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={100}
//                 height={100}
//                 className={`w-${parseInt(
//                   logo.width
//                 )} opacity-70 hover:opacity-100 ease-in-out duration-300 transition-all hover:scale-105 mt-[${
//                   logo.mt
//                 }]`}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
// export default Partners;
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logos = [
  {
    src: "/assets/images/logos/tongston.png",
    alt: "shopify_logo",
    width: "118px",
    mt: "0em",
  },
  {
    src: "/assets/images/logos/nysc.png",
    alt: "shopify_logo",
    width: "118px",
    mt: "0em",
  },
  {
    src: "/assets/images/logos/shell.png",
    alt: "shopify_logo",
    width: "118px",
    mt: "0em",
  },
  {
    src: "/assets/images/logos/tongston.png",
    alt: "shopify_logo",
    width: "118px",
    mt: "0em",
  },
  {
    src: "/assets/images/logos/nysc.png",
    alt: "shopify_logo",
    width: "118px",
    mt: "0em",
  },
  {
    src: "/assets/images/logos/shell.png",
    alt: "shopify_logo",
    width: "118px",
    mt: "0em",
  },
];

const Partners = () => {
  return (
    <div>
      <div className="w-full  hidden    lg:flex md:flex-row justify-center items-center gap-5 mt-10 flex-wrap lg:gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="opacity-70 hover:opacity-100 ease-in-out duration-300 transition-all hover:scale-105 cursor-pointer"
            style={{ height: logo.height, width: logo.width }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className={`mt-[${logo.mt}]`}
            />
          </div>
        ))}
      </div>

      <div className="block text-center w-full mt-10 lg:hidden pl-3 pr-6">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            750: {
              slidesPerView: 4.4,
              spaceBetween: 0,
            },
            1000: {
              slidesPerView: 6.3,
              spaceBetween: 0,
            },
            1500: {
              slidesPerView: 6.4,
              spaceBetween: 0,
            },
          }}
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop={true}
          speed={3000}
          slidesPerView={4}
          spaceBetween={0}
          modules={[Scrollbar, Pagination, Autoplay]}
          className="w-full self-center flex flex-row items-center text-center justify-center gap-0"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className={`w-${parseInt(
                  logo.width
                )} opacity-70 hover:opacity-100 ease-in-out duration-300 transition-all hover:scale-105 mt-[${
                  logo.mt
                }]`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
