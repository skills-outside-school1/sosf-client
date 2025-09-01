"use client";

import { useState } from "react";
import Case from "../../../../shared/headings/Case";
import emailjs from "@emailjs/browser";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/components/Notification/Notification";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import { P } from "@/components/shared/Atoms/Typography/typography";
import axios from "axios";

export default function Hero2() {
  const list1 = [
    "Act with Care: Ensure that you provide truthful and factual information. Submitting spurious or false claims may lead to legal action.",
    "Identify the Violation: Clearly indicate which policy, agreement, or code of conduct has been violated, and in what capacity the violation occurred.",
    "Relationship to the Violation: Specify your relationship to the person or institution being reported.",
    "Provide Sufficient Details: The more detailed your report, the better we will be able to assess whether it can be investigated.",
    "SOSF's Right to Investigate: We reserve the right to determine the extent of any investigation based on the details provided.",
    "Privacy and Confidentiality: We take privacy seriously and handle all reports confidentially. If you prefer to remain anonymous, you may choose not to provide your name.",
  ];

  const lists2 = [
    "Step 1: Provide as much information as possible, including your relationship to the issue and a detailed description of the incident.",
    "Step 2: Clearly identify which policy, agreement, or code of conduct has been violated.",
    "Step 3: If possible, provide evidence to support your report.",
    "Step 4: Understand that SOSF may not be able to investigate every report due to resource limitations, but we will carefully review each submission.",
  ];

  const lists3 = [
    "Types of Violations: Issues related to breaches of our foundation policies, grant agreements, contracts, or the Code of Conduct.",
    "Who Can Report: Any stakeholder, partner, investor, employee, or member of the public across the African continent involved with SOSF's work.",
  ];

  const initialValues = {
    full_name: "",
    email_address: "",
    phone_number: "",
    country_residence: "",
    country_where_violation_ocurred: "",
    location_of_incident: "",
    nature_of_the_violation: "",
    other_value: "",
    description_of_incident: "",
    relationship_person_involved: "",
    code_violated: "",
    date_of_incident: "",
    previously_reported: "",
    additional_information: "",
    anonymous_concent: "",
  };

  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const service_id = process.env.NEXT_PUBLIC_ETHICS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_ETHICS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_ETHICS_PUB_KEY;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  Save report to  database first
      const dbResponse = await axios.post("/api/ethics", values);

      if (dbResponse.status === 201) {
        //  After DB save succeeds, notify admin via EmailJS
        const emailParams = {
          // This depends on your EmailJS template
          // For example, pass in the same data or just what the admin needs
          full_name: values.full_name,
          email_address: values.email_address,
          phone_number: values.phone_number,
          description_of_incident: values.description_of_incident,
          // You can add more fields as needed
        };

        const emailResult = await emailjs.send(
          service_id,
          template_id, // This template is for ADMIN NOTIFICATION
          emailParams,
          user_id
        );

        if (emailResult.status === 200) {
          showSuccessNotification(
            "Your report was submitted and the admin was notified.",
            emailResult.text
          );
        } else {
          showErrorNotification(
            "Report saved but failed to notify admin by email",
            emailResult.text
          );
        }

        //  Reset form
        setValues(initialValues);
      } else {
        showErrorNotification(
          "Failed to save report",
          `Server responded with status ${dbResponse.status}`
        );
      }
    } catch (error) {
      console.error(error);
      showErrorNotification("Error submitting report", error.message);
    } finally {
      setLoading(false);
    }
  };

  const nature_of_violation = [
    { value: "breach_of_policy", label: "Breach of Policy" },
    { value: "breach_of_grant_agreement", label: "Breach of Grant Agreement" },
    { value: "breach_of_contract", label: "Breach of Contract" },
    {
      value: "violation_of_code_of_conduct",
      label: "Violation of the Code of Conduct",
    },
    { value: "other", label: "Other" },
  ];

  const previously_report = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const anonymous = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  return (
    <div className="w-full relative top-[8rem] flex flex-col justify-center items-start mx-auto lg:px-[8rem] px-2 gap-y-5 mb-9 sm:pb-[3rem]">
      <Case
        text="Ethics Reporting Guidelines"
        className="lg:text-[3rem] text-stone-500"
      />
      <Case
        text="Introduction"
        className="lg:text-[1.9rem] text-stone-500 mb-5"
      />
      <P className="text-base md:text-xl font-inter text-black font-normal text-justify">
        At the Skills Outside School Foundation (SOSF), we are committed to
        maintaining a high standard of integrity, ethical behavior, and legal
        compliance across all of our operations. This ethics reporting form is
        designed to allow any stakeholder or member of the public associated
        with our work anywhere in Africa to report concerns related to illegal,
        unethical, or improper conduct.
      </P>

      <Case text="Purpose" className="lg:text-[3rem] text-stone-500 mb-5" />
      <P className="text-base md:text-xl font-inter text-black font-normal text-justify">
        The Skills Outside School Foundation (SOSF) is dedicated to upholding
        ethical practices and acting with integrity. This simple ethics
        reporting mechanism allows individuals associated with our work to
        report violations of policies, agreements, or any form of unethical
        conduct.
      </P>

      <Case
        text="Reporting Options"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />
      <P className="text-base md:text-xl font-inter text-black font-normal text-justify">
        If you believe that an employee, consultant, independent contractor, or
        partner of Skills Outside School Foundation has violated organizational
        policies or agreements, you are encouraged to submit a report. This form
        is available for use by any stakeholder or member of the public across
        the African continent. All submissions will be treated with
        confidentiality and reviewed promptly. Please note that this form is not
        for emergencies. If you are facing an immediate threat to life or
        property, contact local authorities. Please note that due to limited
        resources, we may not be able to investigate every issue or claim.
        Therefore, we urge individuals submitting reports to provide as much
        detail as possible to allow us to review and potentially act on the
        matter.
      </P>

      <Case
        text="Important Guidelines for Submitting a Report"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />
      <ul className="list-disc ml-5 text-base md:text-xl font-inter text-black font-normal text-justify">
        {list1.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <Case
        text="How to Use the Ethics Reporting Form:"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />
      <ul className="list-disc px-9 flex flex-col gap-y-4">
        {lists2.map((item, idx) => (
          <li className="text-black" key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <Case
        text="Reporting Criteria"
        className="lg:text-[3rem] text-black-500 mb-5"
      />
      <ul className="list-disc px-9 flex flex-col">
        {lists3.map((item, idx) => (
          <li className="text-black" key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <Case
        text="Ethics Reporting Form"
        className="lg:text-[3rem] text-stone-500 mb-5"
      />

      <form
        onSubmit={handleSubmit}
        className="w-full mt-8 flex flex-col border border-gray-800 md:grid md:grid-cols-3 justify-start items-start p-4 md:gap-x-8 gap-y-6 md:p-2"
      >
        {/** === ALL INPUT FIELDS === */}
        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Full Name
          <input
            type="text"
            name="full_name"
            value={values.full_name}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Phone Number
          <input
            type="tel"
            name="phone_number"
            value={values.phone_number}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Email Address
          <input
            type="email"
            name="email_address"
            value={values.email_address}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Country of Residence
          <input
            type="text"
            name="country_residence"
            value={values.country_residence}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Country Where Violation Occurred
          <input
            type="text"
            name="country_where_violation_ocurred"
            value={values.country_where_violation_ocurred}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Location of Incident
          <input
            type="text"
            name="location_of_incident"
            value={values.location_of_incident}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Nature of the Violation
          <select
            name="nature_of_the_violation"
            value={values.nature_of_the_violation}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          >
            <option value="">Select...</option>
            {nature_of_violation.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        {values.nature_of_the_violation === "other" && (
          <label className="flex w-full flex-col gap-y-3 text-black font-normal">
            Please Specify
            <input
              type="text"
              name="other_value"
              value={values.other_value}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
            />
          </label>
        )}

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Describe the Incident
          <textarea
            name="description_of_incident"
            value={values.description_of_incident}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Relationship to the Person/Institution
          <input
            type="text"
            name="relationship_person_involved"
            value={values.relationship_person_involved}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Policy, Agreement, or Code Violated
          <input
            type="text"
            name="code_violated"
            value={values.code_violated}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Date of Incident
          <input
            type="date"
            name="date_of_incident"
            value={values.date_of_incident}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Previously Reported?
          <select
            name="previously_reported"
            value={values.previously_reported}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          >
            <option value="">Select...</option>
            {previously_report.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Additional Information or Evidence
          <textarea
            name="additional_information"
            value={values.additional_information}
            onChange={handleChange}
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          />
        </label>

        <label className="flex w-full flex-col gap-y-3 text-black font-normal">
          Remain Anonymous?
          <select
            name="anonymous_concent"
            value={values.anonymous_concent}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-800 bg-transparent focus:outline-none text-black p-2"
          >
            <option value="">Select...</option>
            {anonymous.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="col-span-3">
          <MaskButton buttontext={loading ? "Submitting..." : "Submit"} />
        </div>
      </form>
    </div>
  );
}
