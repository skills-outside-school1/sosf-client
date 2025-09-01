import { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/components/Notification/Notification";

import Aos from "aos";
import "aos/dist/aos.css";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";

const WriteToUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [values, setValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    interest: "",
    org_name: "",
    category: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_PUBKEY;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to DB
      const response = await axios.post("/api/contact", values);

      if (response.status === 200 && response.data.success) {
        // Then send EmailJS only if DB save succeeded
        await emailjs.send(service_id, template_id, values, user_id);

        showSuccessNotification("Message sent successfully!");

        //  Clear form ONLY if all is good
        setValues({
          full_name: "",
          email: "",
          phone: "",
          interest: "",
          org_name: "",
          category: "",
          message: "",
        });
      } else {
        showErrorNotification(
          "Something went wrong while saving your message."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showErrorNotification(
        "Something went wrong. Please check your details and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const interestOptions = [
    { value: "Education", label: "Education" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Environment", label: "Environment" },
    { value: "Community", label: "Community" },
    { value: "Art", label: "Art" },
    { value: "Sports", label: "Sports" },
    { value: "Business", label: "Business" },
    { value: "Technology", label: "Technology" },
    { value: "Other", label: "Other" },
  ];

  const categoryOptions = [
    { value: "Ambassador", label: "Ambassador" },
    { value: "Volunteer", label: "Volunteer" },
    { value: "Trustee", label: "Trustee" },
    { value: "Partner", label: "Partner" },
    { value: "Investor", label: "Investor" },
    { value: "Grantee", label: "Grantee" },
    { value: "Other Stakeholder", label: "Other Stakeholder" },
  ];

  return (
    <div
      className="w-full h-[800px] relative md:left-[0rem] lg:left-0 lg:h-[700px] md:w-[600px] flex flex-col justify-center items-center md:px-[2rem] lg:px-[4rem] px-2"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 5, 0.3), rgba(0, 0, 5, 0.3)),url("https://i.gifer.com/2MdY.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="second-div h-[fixed] pb-9  bg-black bg-opacity-60 w-full px-2 lg:w-full mx-auto shadow-2xl p-3 flex flex-col gap-y-5 justify-center items-center lg:mr-auto">
        <section className="form-sections w-full h-[fixed] p-2 justify-center items-center md:w-full">
          <form onSubmit={handleSubmit} className="h-[500px] overflow-y-auto">
            {/* Full Name */}
            <div className="w-full">
              <label className="block text-[0.8rem] md:text-[0.7rem] font-bold text-white font-inter">
                Full Name *
              </label>
              <input
                type="text"
                className="w-full h-[80px] border-b border-b-white bg-transparent focus:outline-none"
                placeholder="Your Full Name"
                name="full_name"
                value={values.full_name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[0.8rem] md:text-[0.7rem] font-bold text-white font-inter">
                Email *
              </label>
              <input
                type="email"
                className="w-full h-[80px] border-b border-b-white bg-transparent focus:outline-none"
                placeholder="Your Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[0.8rem] md:text-[0.7rem] font-bold text-white font-inter">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full h-[80px] border-b border-b-white bg-transparent focus:outline-none"
                placeholder="Your Phone Number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </div>

            {/* Interest */}
            <div>
              <label className="block text-[0.8rem] md:text-[0.7rem] font-bold text-white font-inter">
                I am interested in *
              </label>
              <select
                className="w-full h-[80px] border-b border-b-white bg-transparent focus:outline-none"
                name="interest"
                value={values.interest}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an Option
                </option>
                {interestOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-black text-base font-inter font-thin"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-[0.8rem] md:text-[0.7rem] font-bold text-white font-inter">
                Name of Organization
              </label>
              <input
                type="text"
                className="w-full h-[80px] border-b border-b-white bg-transparent focus:outline-none"
                placeholder="Your Organization Name"
                name="org_name"
                value={values.org_name}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-[0.8rem] md:text-[0.7rem] font-bold text-white font-inter">
                Category *
              </label>
              <select
                className="w-full h-[80px] border-b border-b-white bg-transparent focus:outline-none"
                name="category"
                value={values.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an Option
                </option>
                {categoryOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-black text-base font-inter font-thin"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[0.8rem] md:text-[0.7rem] font-bold text-white font-inter">
                Message *
              </label>
              <textarea
                className="w-[300px] md:w-[400px] border-b border-b-white bg-transparent focus:outline h-[150px]"
                placeholder="Your Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className=" mt-5">
              <MaskButton
                buttontext={loading ? "Submitting..." : "Submit"}
                className={`hover:bg-secondary_blue hover:text-black`}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default WriteToUs;
