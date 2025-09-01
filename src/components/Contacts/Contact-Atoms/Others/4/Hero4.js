import React from "react";
import Case from "../../../../shared/headings/Case";

function Hero4() {
  return (
    <div className="w-full h-[fixed]  relative top-[8rem] flex flex-col justify-center items-start mx-auto mb-9 sm:pb-[3rem] lg:px-[8rem] px-2 gap-y-5 ">
      <Case
        text="Terms of Use "
        className={` lg:text-[3rem]  text-stone-500 mb-4`}
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        The Terms of Use (Terms) outlined below are applicable to the Skills
        Outside School Foundation (the Foundation) website, located at
        <a
          href="https://skillsoutsideschool.com"
          target="_blank"
          className="text-blue "
        >
          {" "}
          www.skillsoutsideschool.com
        </a>{" "}
        (the Site). Please read these Terms carefully before using the Site. By
        accessing or using the Site, you agree to be bound by these Terms, as
        well as our Privacy Policy. SOSF may update these Terms at any time.
        Your continued use of the Site after any modifications constitutes your
        acceptance of the Terms as modified.
        <br />
        If you do not agree to these Terms of Use for any reason, please do not
        use the Site.
        <br />
        Any inquiries regarding these Terms or permission requests should be
        directed to the Site Administrator via <a className="text-blue" href="mailto:  legal.gov@skillsoutsideschool.com">
        legal.gov@skillsoutsideschool.com</a>
      </p>
      <Case
        text="Use of the Site and Content
"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        The text, photographs, images, and other materials (collectively, the
        Content) of the Site are protected by copyright, trademark, and other
        applicable laws and are owned by the Skills Outside School Foundation or
        licensed to SOSF by third parties.
        <br />
        You may not copy, reproduce, republish, upload, post, frame, transmit,
        display, modify, create derivative works based upon, or distribute the
        Site or its Content in any way without permission from the owner of such
        Content. If you would like to inquire about the ownership of specific
        Content, please contact us at <a className="text-blue" href="mailto:legal.gov@skillsoutsideschool.com"> legal.gov@skillsoutsideschool.com</a>
        <br />
        All trade names, logos, trademarks, and service marks that appear on the
        Site are the property of SOSF or their respective owners, and you may
        not use any of these without prior written approval from the owner.
        <br />
        You agree that in using this Site, you will not violate or assist in the
        violation of any local, national, or international laws, regulations, or
        the intellectual property or other rights of any person. You may not
        interfere with the functioning of the Site or restrict or inhibit others
        from using the Site.
      </p>
      <Case
        text="Links to Third-Party Websites
"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        This Site may contain links to, or may be linked from, other websites,
        including those of organizations funded by SOSF and other third-party
        websites. These Terms apply only to the SOSF Site and do not extend to
        any other websites. SOSF does not review or monitor, and is not
        responsible for, the content of any third-party website. The existence
        of a link to or from another website should not be interpreted as an
        endorsement by SOSF. We advise you to review the terms of use and
        privacy policies of any website that you visit.
      </p>
      <Case
        text="International Use

"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        The Site is operated and controlled by the Skills Outside School
        Foundation from Nigeria and Mauritius, and the Foundation&apos;s databases
        are located in these jurisdictions. By using this Site, you consent to
        the transfer of data and its storage in Nigeria or Mauritius. Those who
        access the Site from outside these jurisdictions are responsible for
        compliance with local laws, rules, and regulations.
      </p>
      <Case
        text="Disclaimer

"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        The Site and its Content are provided on an &quote;as is&quote; basis. SOSF makes no
        representations or warranties, express or implied, regarding the Site or
        its Content. This includes, but is not limited to, any warranties
        concerning the completeness, accuracy, or currency of information or its
        suitability for any particular purpose. Your use of the Site is entirely
        at your own risk.
      </p>

      <Case
        text="Limitations of Liability


"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        In no event shall SOSF, its affiliates, or their respective officers,
        volunteers, directors, employees, partners, beneficiaries, donors,
        investors, trustees, representatives, or agents be liable for any
        claims, liabilities, losses, costs, or damages, whether direct,
        indirect, punitive, incidental, or consequential, arising out of or
        related to your access, use (or inability to use), or distribution of
        the Site or its Content.
      </p>
      <Case
        text="Governing Law / Forum



"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        These Terms are governed by the laws of the Federal Republic of Nigeria
        and Mauritius, depending on the applicable jurisdiction. Any dispute
        related to these Terms or your use of the Site shall be resolved in the
        courts of Nigeria or Mauritius, based on the region involved. You agree
        to waive your right to a trial by jury in any such action.
      </p>
      <Case
        text="Contact Information
"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <p className="text-base md:text-xl font-inter font-normal text-justify text-gray-800 ">
        If you have any questions or comments about these Terms of Use, please
        contact the Foundation at: Email:{" "}
        <a
          href="mailto:legal.gov@skillsoutsideschool.com "
          className="text-blue "
        >
          legal.gov@skillsoutsideschool.com
        </a>
      </p>
    </div>
  );
}

export default Hero4;
