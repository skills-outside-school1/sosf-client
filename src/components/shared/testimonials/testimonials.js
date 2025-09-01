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

const Testimonials = () => {
  const testimonialSlides = [
    {
      id: 1,
      text: "SOSF has, directly and indirectly, granted me access to a wide network of people who have been a stepping stone at every point in my life, in fact, my first laptop, first year’s tuition, and internship with a major architecture firm before resuming high institution came from the mentor assigned to me by SOSF.",
      name: "Michael Onoja",
      title: "CEO/Founder Evolve Africa",
      svgFill: "#9A78FF",
    },
    {
      id: 2,
      text: "Building my business has been grueling, exhausting, inspiring, and exciting. I was also able to come up with a job description for my employees for proper organizational structure.",
      name: "StellaMaris Obeta",
      title: "CEO/Founder",
      svgFill: "#FFA800",
    },
    {
      id: 3,
      text: "The Skills Outside School Foundation offered me a full scholarship from my SSS2, which covers tuition and all SSCE Fees (JAMB fees, WAEC, and NECO fees) were paid by SOSF. My tertiary institution tuition and those of my two siblings in higher institution are being paid as at when due till date.",
      name: "Fatima Ali",
      title: "Accounting Student",
      svgFill: "#9A78FF",
    },
  ];

  return (
    <>
      <section className="bg-[#E9EDFF] py-8 sm:py-12 lg:hidden">
        <div className="px-4 w-[90%] mx-auto sm:px-6 text-center">
          <h3 className="text-3xl md:text-4xl text-secondary_blue font-bold text-center">
            {/* What Some of Our Ambassadors Have to Say */}
            Testimonials
          </h3>
          <p className="text-gray-700 pt-2 text-sm md:text-xl text-center">
            Our ambassadors share their experiences and the impact they&apos;ve
            seen.
          </p>
        </div>

        <div className="mt-8">
          <Swiper
            autoplay={{
              disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              "@0.75": {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
            }}
            slidesPerView={1.4}
            spaceBetween={25}
            modules={[Pagination, Autoplay]}
            className="w-full pt-0 pb-4"
          >
            {testimonialSlides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="bg-gray-100 rounded-2xl w-full h-[290px] sm:h-[320px] mb-4 p-4 sm:p-7 cursor-pointer"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.6219 15.9188C17.5539 15.9188 19.1211 14.3072 19.1211 12.3188C19.1211 10.3316 17.5539 8.71882 15.6219 8.71882C12.1239 8.71882 14.4555 1.76002 19.1211 1.76002L19.1211 0.0800219C10.7943 0.0788221 7.53149 15.9188 15.6219 15.9188ZM5.54189 15.9188C7.47269 15.9188 9.03989 14.3072 9.03989 12.3188C9.03989 10.3316 7.47269 8.71882 5.54189 8.71882C2.04269 8.71882 4.37429 1.76002 9.03989 1.76002V0.0800219C0.714293 0.0788221 -2.54851 15.9188 5.54189 15.9188Z"
                    fill={slide.svgFill}
                  />
                </svg>
                <p className="text-xs text-gray-600 mt-4">{slide.text}</p>
                <div className="mt-5 sm:mt-7 flex items-center">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Eberechukwu-Oji.jpg"
                      alt={slide.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800 text-sm">
                      {slide.name}
                    </p>
                    <p className="text-sm">{slide.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Desktop testimonial */}
      <section className="bg-[#E9EDFF] hidden lg:block lg:px-16 lg:py-16 xl:py-20 2xl:py-28">
        <h3 className="text-3xl md:text-4xl text-secondary_blue font-bold text-center">
          Testimonials{" "}
        </h3>
        <h3 className="text-xl md:text-2xl text-gray-700 font-bold text-center mt-2">
          What Some of Our Ambassadors Have to Say
        </h3>
        <div className="flex flex-col lg:mt-20 lg:flex-row justify-between items-start mx-auto lg:w-[95%] xl:w-[90%] 2xl:w-[75%]">
          <div className="w-[45%] ">
            <p className="text-gray-700 pb-7 lg:text-[32px] font-semibold tracking-wide">
              Our ambassadors share their experiences and the impact
              they&apos;ve seen.
            </p>
            <Link href="" className="cursor-pointer">
              <button className="border-blue border-2 hover:bg-blue hover:text-white rounded-full py-3 px-4 text-blue bg-transparent flex justify-center items-center text-center text-lg">
                Get Started
              </button>
            </Link>
          </div>

          <div className="w-[50%] ">
            <Swiper
              autoplay={{
                disableOnInteraction: false,
              }}
              loop={true}
              speed={3000}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                "@0.75": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                "@1.50": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              slidesPerView={1}
              spaceBetween={25}
              modules={[Scrollbar, Pagination, Autoplay]}
              className="w-full pt-0 pb-7"
            >
              {testimonialSlides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="bg-gray-100 rounded-2xl w-full h-[330px] lg:h-[295px] mb-4 p-5 sm:p-5 cursor-pointer"
                >
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6219 15.9188C17.5539 15.9188 19.1211 14.3072 19.1211 12.3188C19.1211 10.3316 17.5539 8.71882 15.6219 8.71882C12.1239 8.71882 14.4555 1.76002 19.1211 1.76002L19.1211 0.0800219C10.7943 0.0788221 7.53149 15.9188 15.6219 15.9188ZM5.54189 15.9188C7.47269 15.9188 9.03989 14.3072 9.03989 12.3188C9.03989 10.3316 7.47269 8.71882 5.54189 8.71882C2.04269 8.71882 4.37429 1.76002 9.03989 1.76002V0.0800219C0.714293 0.0788221 -2.54851 15.9188 5.54189 15.9188Z"
                      fill={slide.svgFill}
                    />
                  </svg>
                  <p className="text-sm text-gray-600 mt-4">{slide.text}</p>
                  <div className="mt-5 sm:mt-7 flex items-center">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Eberechukwu-Oji.jpg"
                        alt={slide.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800 text-sm">
                        {slide.name}
                      </p>
                      <p className="text-sm">{slide.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
