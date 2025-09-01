"use client"; // ✅ If using Next.js App Router

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import axios from "axios";

import {
  showErrorNotification,
  showSuccessNotification,
} from "@/components/Notification/Notification";

export default function Subscribe() {
  //  Environment variables for EmailJS
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_PUBKEY;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      //  Save subscriber to your MongoDB (your API route must return 201 for success)
      const res = await axios.post("/api/subscriberss", { email });

      if (res.status === 201) {
        //  After saving, send the confirmation email
        await emailjs.send(service_id, template_id, { email }, user_id);

        showSuccessNotification(
          "Subscribed!",
          "You have been subscribed to the newsletter."
        );

        // ✅ Clear email field after success
        setEmail("");
      } else {
        showErrorNotification(
          "Oops!",
          "Failed to subscribe. Please try again."
        );
      }
    } catch (err) {
      console.error(err);

      if (err.response && err.response.status === 409) {
        showErrorNotification(
          "Already Subscribed",
          "You are already on the subscribers list."
        );
      } else {
        showErrorNotification(
          "Something went wrong",
          "Please check your connection and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="footer-container w-full flex flex-col justify-center items-center px-2">
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full items-center">
        <div></div>

        <div className="bg-transparent w-full h-[400px] z-20 flex flex-col gap-y-8 justify-center items-center lg:px-5 lg:w-[388px] lg:h-[400px] lg:ml-auto lg:mr-9">
          <h3 className="text-xl md:text-xl font-bold text-[#000000] text-left w-full font-lato">
            Subscribe to our newsletter
          </h3>

          <h4 className="text-base font-normal text-[#000000] text-left w-full font-inter">
            Get news about what we are supporting and more by subscribing to our
            newsletter.
          </h4>

          <section className="subscribe-form-section w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-row gap-x-2 justify-start items-center bg-transparent border-b border-b-[#000000] h-[50px]"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-60 bg-transparent focus:outline-none text-[#000000]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="text-[#000000] text-base font-inter font-bold flex justify-center items-center p-2"
              >
                {loading ? (
                  "Subscribing..."
                ) : (
                  <span className="flex justify-center items-center gap-x-3">
                    Subscribe{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-sm text-[#000000] brochure-icon"
                    />
                  </span>
                )}
              </button>
            </form>
          </section>

          <section className="privacy-warning-section w-full">
            <p className="text-[#000000] text-sm md:text-base font-normal font-inter">
              By subscribing, you agree to{" "}
              <Link href="/contact/privacy-policy" className="underline">
                Skills Outside School&apos;s Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
