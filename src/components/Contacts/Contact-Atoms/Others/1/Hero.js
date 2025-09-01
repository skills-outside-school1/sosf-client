import React from "react";
import Case from "../../../../shared/headings/Case";
import HeroCon from "@/components/home/Home-Atoms/Hero";
import { P } from "@/components/shared/Atoms/Typography/typography";

function Hero() {
  const conducts = [
    "Defame, abuse, harass, or violate the rights of others.",
    "Post unlawful, defamatory, obscene, or infringing content.",
    "Upload or share software or material protected by intellectual property laws unless they have the necessary rights.",
    "Upload files containing viruses or any other harmful software.",
    "Falsify the origin of software or other materials.",
    "Conduct commercial activities, including advertising or offering goods or services.",
    "Download files that they know, or reasonably should know, cannot be legally distributed.",
  ];

  return (
    <div className="w-full h-[fixed]  relative top-[8rem] flex flex-col  gap-y-5 justify-center items-start lg:px-[8rem] px-2  sm:pb-[3rem] mb-9  ">
      <Case
        text="Legal Disclaimer "
        className="text-stone-500 lg:text-[3rem]"
      />
      <Case
        text="Use of the Site"
        className="  lg:text-[1.9rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter  text-gray-800 text-justify  font-normal ">
        Skills Outside School Foundation (SOSF) maintains this website (the
        Site) as a service to its users. The information presented on the Site
        is for informational purposes only. SOSF invites users to visit the Site
        and download and copy information, documents, and materials
        (collectively, “Materials”) for personal, non-commercial use, without
        any right to resell, redistribute, or create derivative works therefrom,
        subject to the terms and conditions outlined below. Use of this Site
        constitutes agreement with the following terms and conditions.
      </P>
      <Case
        text="Disclaimer"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />

      <P className="text-base  md:text-xl  font-inter  text-gray-800 text-justify  font-normal ">
        The Materials provided on the Site are presented “as is” without any
        warranty of any kind, either express or implied, including but not
        limited to warranties of merchantability, fitness for a particular
        purpose, and non-infringement. SOSF does not guarantee the accuracy or
        completeness of the Materials and reserves the right to change, improve,
        or update the Materials at any time without notice. Under no
        circumstances shall SOSF be liable for any loss, damage, liability, or
        expense incurred or suffered as a result of the use of the Site,
        including without limitation any fault, error, omission, interruption,
        or delay. The use of the Site is at the user&apos;s own risk.
        <br />
        <br />
        Under no circumstances, including negligence, shall SOSF or its
        affiliates be liable for any direct, indirect, incidental, special, or
        consequential damages, even if SOSF has been advised of the possibility
        of such damages. Users of the Site specifically acknowledge and agree
        that SOSF is not responsible for the conduct of any user.
        <br />
        <br />
        The Site may contain advice, opinions, and statements from various
        sources. SOSF does not represent or endorse the accuracy or reliability
        of any advice, opinion, statement, or other information provided by any
        content provider or user. Reliance upon any such information is at the
        user&apos;s own risk. Neither SOSF nor its agents, employees, or
        affiliates shall be liable for any inaccuracy, error, omission,
        interruption, deletion, defect, or failure of performance.
      </P>
      <Case
        text="Indemnification"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base  md:text-xl  font-inter  text-gray-800 text-justify  font-normal ">
        As a condition of use of this Site, users agree to indemnify SOSF from
        and against any and all actions, claims, losses, damages, liabilities,
        and expenses (including reasonable legal fees) arising from their use of
        the Site, including any claims alleging facts that if true would
        constitute a breach by the user of these terms and conditions. If a user
        is dissatisfied with any Material or with any terms and conditions of
        the Site, their sole and exclusive remedy is to discontinue using the
        site.
        <br />
        <br />
        Nothing in this Site or any Materials shall be construed as containing
        investment recommendations or as investment advice.
      </P>
      <Case
        text="Links to Third-Party Websites"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter  text-gray-800 text-justify  font-normal ">
        This Site may contain links to third-party websites. These linked sites
        are not under the control of SOSF, and SOSF is not responsible for the
        content of any linked site or any link contained within a linked site.
        SOSF provides these links solely as a convenience, and the inclusion of
        a link does not imply endorsement of the linked site by SOSF.
      </P>
      <Case
        text="User Conduct in Forums"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base  md:text-xl  font-inter    text-gray-800 text-justify  font-thin  gap-y-4  flex flex-col justify-start items-start ">
        {conducts.map((items, index) => (
          <ul key={index} className="list-disc px-9  flex flex-col gap-y-4  ">
            <li> {items}</li>
          </ul>
        ))}
        All Forums are public and not private communications. SOSF does not
        endorse or screen communications in the Forums and reserves the right to
        remove any content for any reason without notice.
      </P>
      <Case
        text="Applicable Laws and Consents"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base  md:text-xl font-inter  text-gray-800 text-justify  font-normal ">
        These Terms will be interpreted and enforced in accordance with the laws
        of Nigeria and Mauritius. Any action to enforce this agreement shall be
        brought in the appropriate courts in Nigeria or Mauritius, as
        applicable. Users acknowledge that their use of the Site may be subject
        to various laws, rules, and regulations, including those governing data
        use and privacy.
      </P>
      <Case text="General" className="  lg:text-[3rem]  text-stone-500  mb-5" />
      <P className="text-base  md:text-xl font-inter  text-gray-800 text-justify  font-normal ">
        SOSF reserves the right to alter, limit, or discontinue the Site or any
        of its Materials at any time. SOSF also reserves the right to deny
        access to the Site to any user at its sole discretion, without notice.
        No waiver by SOSF of any provision in these Terms shall be binding
        unless agreed to in writing by a duly authorized representative.
        <br />
        <br />
        For any inquiries or concerns about this Legal Disclaimer, please
        contact SOSF at legal.gov@skillsoutsideschool.com.
      </P>
    </div>
  );
}

export default Hero;
