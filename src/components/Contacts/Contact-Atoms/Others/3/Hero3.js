import React from "react";
import Case from "../../../../shared/headings/Case";
import Link from "next/link";
import { P } from "@/components/shared/Atoms/Typography/typography";

function Hero3() {
  return (
    <div className="w-full h-[fixed]  relative top-[8rem] flex flex-col justify-center items-start mx-auto  gap-y-5  lg:px-[8rem] px-2  mb-9 sm:pb-[3rem] ">
      <Case
        text="Privacy Policy "
        className={` lg:text-[3rem]  text-stone-500`}
      />
      <Case
        text="Introduction"
        className="  lg:text-[1.9rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        This Privacy Policy (Policy) is applicable to the Skills Outside School
        Foundation (the Foundation, we, us, or our) website, located at
        <a
          href="https://skillsoutsideschool.com"
          className="underline text-blue"
          target="_blank"
        >
          {" "}
          www.skillsoutsideschool.com
        </a>
        , and any other websites under the control of the Foundation that link
        to this Policy (the Website). The Website is operated from Nigeria and
        governed by the laws of the Federal Republic of Nigeria and Mauritius,
        depending on the jurisdiction where the Foundation operates.
      </P>

      <Case text="Purpose" className="  lg:text-[3rem]  text-stone-500  mb-5" />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        This Policy describes the types of information we may collect from you
        or that you may provide when you visit the Website, and our practices
        for collecting, using, maintaining, protecting, and disclosing that
        information. It applies to information we collect:
        <br />
        <ul className="list-disc ml-8 text-gray-800 font-inter font-normal gap-y-2  ">
          <li>On the Website.</li>
          <li>
            In email and other electronic messages between you and the Website.
          </li>
        </ul>
        <br />
        If you have any questions about this Policy or about how we use your
        personal information, please contact us at
        <a
          href="mailto:legal.gov@skillsoutsideschool.com"
          className="text-blue underline"
        >
          {" "}
          legal.gov@skillsoutsideschool.com
        </a>
        .
        <br />
        Please read this Policy carefully before using the Website. By accessing
        or using the Website, you agree to be bound by this Policy, as well as
        our Terms of Use. If you do not agree to this Policy for any reason,
        please do not use the Website.
      </P>
      <Case
        text="What Information We Collect
"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        You may visit our Website without being required to provide your name,
        email address, or similar personal information. However, we may collect
        several types of information, including:
        <br />
        <ul className="list-disc ml-8 text-gray-800 font-inter font-normal  gap-y-2  ">
          <li>
            {" "}
            Personal Data: Information that may identify you, such as your name,
            mailing address, email address, and telephone number.
          </li>
          <li>
            {" "}
            Anonymous Data: Information that does not identify you personally,
            such as internet connection details, equipment used to access the
            Website, and usage patterns.
          </li>
        </ul>
      </P>
      <Case
        text="Collection Methods"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        <ul className="list-disc ml-8 text-gray-800 font-inter font-normal  gap-y-2  ">
          <li>
            Directly from You: When you provide personal data via forms (e.g,
            for grant applications), correspondence via the Website, email, or
            otherwise. This includes when you:
          </li>
          <ul className="list-disc ml-12 text-gray-800 font-inter font-normal gap-y-2 ">
            <li>Send an email inquiry to SOSF.</li>
            <li>Sign up for email newsletters.</li>
            <li>
              Register for or participate in our programs, initiatives, or
              events.
            </li>
          </ul>
          <li>
            Automatically as You Navigate the Website: This may include IP
            addresses, usage details, and information collected via cookies. By
            using the Website with cookies enabled in your browser, you consent
            to our use of cookies. You can refuse cookies by adjusting your
            browser settings, but this may limit your access to certain parts of
            the Website.
          </li>
          <li>
            From Third Parties: We may receive personal data about you from
            grantees, partners, or other sources, including publicly available
            information and third-party analytics providers.
          </li>
        </ul>
      </P>
      <Case
        text="How We Use Your Information
"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        We may use the information we collect to: We may use the information we
        collect to:
        <br />
        <ul className="list-disc ml-8 text-gray-800 font-inter font-normal  gap-y-2 ">
          <li>
            {" "}
            Communicate with you, including responding to inquiries and
            providing requested information.
          </li>
          <li>
            Provide, maintain, and improve the Website, including analyzing user
            behavior.
          </li>
          <li>Notify you about changes to the Website or this Policy.</li>
          <li>Process grant applications and manage grants.</li>
          <li>
            Send you newsletters, mailings, and other information about
            programs, grants, and events.
          </li>
          <li>Process event or program registrations.</li>
          <li>
            Administer and protect the Website, including detecting and
            preventing illegal activities.
          </li>
        </ul>
        <br />
        We process personal data on the following legal bases:
        <ul className="list-decimal ml-8 text-gray-800 font-inter font-normal  ">
          <li>Consent: Where you have given consent.</li>
          <li>Contractual Necessity: To perform agreements.</li>
          <li>Legal Compliance: To meet legal obligations.</li>
          <li>
            Legitimate Interests: Where necessary to provide services without
            overriding your fundamental rights related to data privacy.
          </li>
        </ul>
        <br />
        We will only use your personal data for the purposes for which it was
        collected unless we determine it is necessary to use it for a related
        reason, permitted by law. If we need to use your personal data for an
        unrelated purpose, we will notify you.
      </P>
      <Case
        text="How We Share Your Information"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        The Skills Outside School Foundation does not sell or rent your personal
        data. However, we may share your data with third-party service providers
        for specific purposes, such as website hosting, IT services, and data
        management. These service providers must respect the confidentiality and
        security of your data and may only process it for the purposes specified
        by SOSF.
        <br />
        <br />
        We may also disclose personal data:
        <ul className="list-disc ml-8 text-gray-800 font-inter font-normal  ">
          <li>As required by law or regulation.</li>
          <li>In response to legal processes.</li>
          <li>
            To protect the rights, safety, or property of SOSF, its employees,
            or others.
          </li>
        </ul>
      </P>
      <Case
        text="Data Security"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        We implement security measures to protect your personal data from
        unauthorized access, alteration, or disclosure. However, no data
        transmission over the internet is entirely secure, so we cannot
        guarantee complete security of any information submitted through the
        Website.
        <br />
        In the event of a data breach, we will notify affected individuals and
        relevant authorities as required by law.
      </P>
      <Case
        text="Data Retention"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected and in accordance with
        applicable laws.
      </P>
      <Case
        text="Changes to Our Policy"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        We may update this Policy from time to time. Changes will be posted on
        this page, along with the last updated date. Your continued use of the
        Website after changes are posted constitutes your acceptance of those
        changes.
      </P>
      <Case
        text="International Users"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />
      <P className="text-xl font-inter text-gray-700 text-left font-thin">
        The Website is operated and controlled in Nigeria, and information
        collected is subject to Nigerian and Mauritian law. By using the
        Website, you consent to having your personal data processed in Nigeria
        or Mauritius, as applicable.
      </P>
      <Case
        text="Rights for Users in the European Union (EU)"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />
      <P className="text-xl font-inter text-gray-700 text-left font-thin">
        If you are an EU national or resident, you may have the following rights
        under the General Data Protection Regulation (GDPR):
        <br />
        <ul className="list-disc ml-8 text-gray-800 font-inter font-normal  ">
          <li>Request access to or correction of your personal data.</li>
          <li>
            Request erasure of personal data no longer needed for its original
            purpose or processed unlawfully.
          </li>
          <li>
            Restrict processing of personal data if the data is inaccurate or
            unlawfully processed.
          </li>
          <li>
            Request transfer of your personal data to another company in certain
            circumstances.
          </li>
          <li>
            Lodge a complaint with your national data protection regulator if
            you believe your personal data has been unlawfully processed.
          </li>
        </ul>
        <br />
        If you wish to exercise any of these rights, please contact us at
        legal.gov@skillsoutsideschool.com.
      </P>
      <Case text="Minors" className="lg:text-[3rem] text-stone-500 mb-5" />
      <P className="text-xl font-inter text-gray-700 text-left font-thin">
        Our Website is directed at adults and in some limited cases to children.
        If you are under the age of 10 (or the relevant age in your
        jurisdiction), please do not submit any personal data without the
        involvement of a responsible adult, such as a parent, guardian, or
        teacher. The responsible adult must ensure that proper care is taken in
        handling the minor&apos;s data.
      </P>
      <Case
        text="Third-Party Links"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />
      <P className="text-xl font-inter text-gray-700 text-left font-thin">
        This Website may contain links to third-party sites. SOSF is not
        responsible for the privacy policies of those sites. We encourage you to
        read the privacy policy of any website you visit.
      </P>
      <Case
        text="Contact Information"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />
      <P className="text-xl font-inter text-gray-700 text-left font-thin">
        If you have any questions or comments about this Policy or our privacy
        practices, please contact us at: Email:
        <a
          href="mailto:legal.gov@skillsoutsideschool.com "
          className="text-blue underline"
        >
          {" "}
          legal.gov@skillsoutsideschool.com
        </a>
        .
      </P>
    </div>
  );
}

export default Hero3;
