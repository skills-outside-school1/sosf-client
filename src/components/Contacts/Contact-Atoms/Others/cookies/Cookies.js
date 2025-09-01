import React from "react";
import Case from "../../../../shared/headings/Case";
import Link from "next/link";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";

function Cooky() {
  return (
    <div className="w-full h-[fixed]  relative top-[8rem] flex flex-col justify-center items-start mx-auto  gap-y-5  lg:px-[8rem] px-2  mb-9 sm:pb-[3rem] ">
      <Case
        text="Cookie Policy "
        className={` lg:text-[3rem]  text-stone-500`}
      />
      <Case text="" className="  lg:text-[1.9rem]  text-stone-500  mb-5" />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        This Cookie Policy explains how Skills Outside School Foundation (SOSF)
        uses cookies and similar tracking technologies on our website,
        <a
          href="https://www.skillsoutsideschool.com"
          className="underline text-blue"
          target="_blank"
        >
          {" "}
          www.skillsoutsideschool.com
        </a>
        (the Site). By using the Site, you consent to the use of cookies as
        outlined in this policy. This policy should be read in conjunction with
        our [Privacy Policy] and [Terms of Use].
      </P>

      <Case
        text="What Are Cookies?
"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        Cookies are small text files that are placed on your device (computer,
        smartphone, or other internet-enabled device) when you visit a website.
        Cookies are widely used to enhance the user experience by remembering
        your preferences, helping us improve the functionality of the Site, and
        providing relevant information based on your browsing behavior.
        <br />
        <br />
        <H3>Types of Cookies We Use</H3>
        <br />
        <ul className="list-decimal ml-8 flex flex-col   text-gray-800 font-inter font-normal gap-y-5  ">
          <li>
            Strictly Necessary Cookies: These cookies are essential for the
            functioning of the Site. They enable basic functions like navigation
            and access to secure areas of the website. Without these cookies,
            the Site cannot function properly. .
          </li>
          <li>
            Performance Cookies: These cookies help us understand how visitors
            interact with the Site by collecting and reporting information
            anonymously. This allows us to analyze usage patterns and improve
            the overall performance and functionality of the Site.
          </li>
          <li>
            {" "}
            Functional Cookies: Functional cookies remember choices you make
            (such as your language preferences) and provide enhanced,
            personalized features. These cookies can also be used to remember
            changes you’ve made to text size, fonts, and other customizable
            parts of the website. .
          </li>
          <li>
            Third-Party Cookies: We may also use cookies from third-party
            service providers, such as analytics services (e.g., Google
            Analytics) that help us analyze how visitors use the Site and
            improve its functionality.
          </li>
        </ul>
      </P>
      <Case
        text="How We Use Cookies"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        <H3>We use cookies to:</H3>

        <ul className="list-disc ml-8 text-gray-800 font-inter font-normal  gap-y-2  ">
          <li> Improve the functionality and performance of the Site.</li>
          <li>
            {" "}
            Analyze how users interact with the Site and track trends to enhance
            the user experience.
          </li>
          <li>Provide personalized content and remember your preferences.</li>
          <li>Serve targeted advertisements based on your interests.</li>
        </ul>
      </P>
      <Case
        text="How to Manage Cookies"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        You can control and manage cookies in several ways. Most browsers allow
        you to accept or reject all cookies, accept only certain types of
        cookies, or prompt you each time a site wishes to place a cookie on your
        device. You can also delete cookies that are already stored on your
        device.
        <br />
        <br />
        Please note that blocking or deleting cookies may impact your user
        experience, and some parts of the Site may no longer function properly.
        <br />
        <br />
        <H3>Instructions for managing cookies:</H3>
        <br />
        <ul className="list-disc ml-8 flex flex-col gap-y-4 text-gray-800 font-inter font-normal    ">
          <li>For Chrome: Chrome Cookie Management</li>

          <li>
            For Firefox:{" "}
            <a
              href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
              className="text-blue underline "
              target="_blank"
            >
              {" "}
              Firefox Cookie Management
            </a>
          </li>
          <li>
            For Safari:{" "}
            <a
              href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
              className="text-blue underline "
              target="_blank"
            >
              {" "}
              Safari Cookie Management
            </a>
          </li>
          <li>
            For Internet Explorer:{" "}
            <a
              href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
              className="text-blue underline "
              target="_blank"
            >
              {" "}
              Internet Explorer Cookie Management
            </a>
          </li>
        </ul>
      </P>
      <Case
        text="Third-Party Cookies"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        We use third-party services, including Google Analytics, to collect
        information about how visitors use our Site. Google Analytics uses
        cookies to collect standard internet log information and visitor
        behavior information in an anonymous form. The information generated by
        these cookies about your use of the Site is transmitted to Google. This
        information is used to evaluate visitors&apos; use of the Site and to
        compile statistical reports on website activity.
        <br />
        <br />
        You can opt-out of Google Analytics cookies by using the following
        browser add-on: Google Analytics Opt-out Browser Add-on.
      </P>
      <Case
        text="Changes to This Cookie Policy"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        We may update this Cookie Policy from time to time. When we make
        changes, we will revise the “Last Updated” date at the bottom of this
        policy. Any changes to this Cookie Policy will become effective when we
        post the revised policy on the Site.
      </P>
      <Case
        text="Contact Us"
        className="  lg:text-[3rem]  text-stone-500  mb-5"
      />
      <P className="text-base md:text-xl font-inter font-normal text-gray-800 text-justify ">
        If you have any questions or concerns about this Cookie Policy, please
        contact us at:{" "}
        <a
          href="mailto:legal.gov@skillsoutsideschool.com"
          className="text-blue"
        >
          {" "}
          legal.gov@skillsoutsideschool.com
        </a>
      </P>
    </div>
  );
}

export default Cooky;
