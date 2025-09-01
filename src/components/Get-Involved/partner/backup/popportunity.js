import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function PartnerOpportunities() {
  const cards = [
    {
      image:
        "https://www.kellogg.northwestern.edu/-/media/images/web2022/corporate-partnerships/kellogg-school-corporate-partnerships-1366x763.ashx?h=763&la=en&w=1366&hash=E2BECDBC88F30D125042605DF320AB98",
      title: " Corporate Partnerships",
      subtitle: "Sponsorships & In-Kind Donations",
      description: (
        <p>
          We believe that businesses play a crucial role in shaping the future
          of our communities. Through strategic corporate partnerships, we can
          amplify our impact on education, entrepreneurship, and employability.
          By sponsoring our programs or providing in-kind donations, such as
          technology, professional services, or resources, your company can
          directly contribute to the development of a skilled, entrepreneurial
          workforce. Together, we can create opportunities for young people to
          learn, grow, and succeed, ultimately driving economic growth and
          social progress.
        </p>
      ),
    },

    //partner-2

    {
      image:
        "https://allschool.ng/wp-content/uploads/2024/07/Arnergy-SchoolTry-Partnership.webp",
      title: " Educational Institutions Partnerships",
      subtitle: "Internship and Training Programs",
      description: (
        <p>
          Education is the foundation of a thriving society, but the transition
          from learning to earning can be challenging for many young people. By
          partnering with educational institutions, we bridge the gap between
          academia and the real world. We collaborate with schools, colleges,
          and universities to create internship and training programs that equip
          students with practical skills and entrepreneurial mindsets. These
          programs not only enhance employability but also inspire the next
          generation of entrepreneurs, driving innovation and economic
          resilience. Your institution can play a pivotal role in this
          transformative process.
        </p>
      ),
    },

    //partner-3

    {
      image:
        "https://sahelonline.news.blog/wp-content/uploads/2021/11/img-20211113-wa0023.jpg",
      title: " Government Partnerships",
      subtitle: "Grant Funding & Policy Advocacy",
      description: (
        <p>
          Philanthropy has the power to create lasting change, especially when
          it aligns with strategic, mission-driven initiatives. By partnering
          with foundations and trusts, we can secure the financial resources
          needed to implement and sustain impactful programs in education,
          entrepreneurship, and employability. Your support enables us to reach
          underserved populations, develop innovative solutions, and measure the
          long-term impact of our work. Together, we can make a meaningful
          difference in the lives of individuals and communities, creating
          pathways to success and self-reliance.
        </p>
      ),
    },

    //partner-4
    {
      image:
        "https://www.stlukesforclergy.org.uk/app/uploads/2023/04/Philanthropic-partnerships-scaled.jpg",
      title: " Philanthropic Partnerships",
      subtitle: "Foundations and Trusts",
      description: (
        <p>
          Philanthropy has the power to create lasting change, especially when
          it aligns with strategic, mission-driven initiatives. By partnering
          with foundations and trusts, we can secure the financial resources
          needed to implement and sustain impactful programs in education,
          entrepreneurship, and employability. Your support enables us to reach
          underserved populations, develop innovative solutions, and measure the
          long-term impact of our work. Together, we can make a meaningful
          difference in the lives of individuals and communities, creating
          pathways to success and self-reliance.
        </p>
      ),
    },

    //partner-5
    {
      image:
        "https://www.capgemini.com/wp-content/uploads/2021/06/Capgemini_Partnerships.jpg",
      title: " Technology  Partnerships",
      subtitle: "EdTech Collaborations",
      description: (
        <p>
          In today&apos;s digital age, technology is a vital tool for education
          and entrepreneurship. By partnering with EdTech companies, we can
          harness cutting-edge tools and platforms to enhance learning
          experiences, improve accessibility, and foster innovation. Our
          collaboration could involve integrating digital learning resources
          into our programs, developing custom platforms for entrepreneurial
          training, or using data analytics to measure outcomes and refine our
          approach. Together, we can create a tech-driven ecosystem that
          empowers individuals with the skills and knowledge they need to thrive
          in a rapidly evolving world.
        </p>
      ),
    },

    //partner-6
    {
      image:
        "https://www.jou.ufl.edu/wp-content/uploads/2022/09/partnerships2.jpg",
      title: " Media and Communication Partnerships",
      subtitle: "Awareness Campaigns & Content Creation",
      description: (
        <p>
          Visibility is key to driving change. By partnering with media outlets,
          we can amplify our message and reach a broader audience, inspiring
          more people to engage with our mission. Whether through awareness
          campaigns, educational content, or collaborative storytelling, we can
          highlight the challenges of education, entrepreneurship, and
          employability, and showcase the solutions we are implementing. Your
          media expertise can help us not only inform but also mobilize
          communities, attract new supporters, and ultimately, create a larger
          impact. Let&apo;s work together to shine a light on the stories that
          matter.
        </p>
      ),
    },
  ];

  //   const fadeUpVariants = {
  //     hidden: { opacity: 0, y: 20 },
  //     visible: { opacity: 1, y: 0 },
  //   };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="flex flex-col gap-y-[100px] w-full h-[fixed]  p-2    md:px-8 justify-center items-center ">
      <h2 className={`text-cyan text-3xl font-black font-lato  md:text-4xl `}>
        Available Partnerships
      </h2>

      {cards.map((card, index) => (
        <div
          key={index}
          className={`grid grid-cols-1  gap-y-[30px]   gap-x-[10px] justify-center  items-center  md:p-2  w-full  h-[fixed]   md:flex md:flex-row ${
            index === 0
              ? "border-b border-b-black"
              : index === 1
              ? "md:flex-row-reverse  md:border-b md:border-b-black"
              : index === 2
              ? "md:border-b md:border-b-black"
              : index === 3
              ? "md:flex-row-reverse  md:border-b md:border-b-black"
              : index === 4
              ? "md:border-b md:border-b-black"
              : index === 5
              ? "md:flex-row-reverse  "
              : ""
          } `}
        >
          <section
            className="context-section  flex flex-col justify-start items-start px-2 w-full h-[fixed] gap-y-[30px]"
            // initial="hidden"
            // animate="visible"
            // variants={fadeUpVariants}
            // transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3
              className={`text-secondary_blue text-2xl font-black font-lato  md:text-3xl`}
            >
              {card.title}
            </h3>
            <h5 className="text-cyan  font-black text-xl   md:text-2xl ">
              {card.subtitle}
            </h5>
            <article className="text-black text-opacity-90  font-sans  text-xl   md:text-2xl">
              {card.description}
            </article>
          </section>

          <section
            data-aos="fade-in"
            data-aos-easing="ease-in linear"
            data-aos-duration="1500"
            data-aos-once="true"
            data-aos-delay="50"
            className="image-container overflow-hidden  w-full h-[fixed] flex flex-col justify-center items-center  "
          >
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={400}
              className="  md:w-[500px] h-[300px]  hover:scale-105  hover:transition-all hover:duration-1000 hover:ease-in-out   transition-all duration-1000 ease-in-out   md:shadow-2xl"
            />
          </section>
        </div>
      ))}
    </div>
  );
}

export default PartnerOpportunities;
