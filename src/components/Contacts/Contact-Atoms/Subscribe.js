"use client";

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
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_PUBKEY;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/subscriberss", { email });

      if (res.status === 201) {
        await emailjs.send(service_id, template_id, { email }, user_id);

        showSuccessNotification(
          "Subscribed!",
          "You have been subscribed to the newsletter."
        );
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
    <div className="px-4 md:px-[4rem] lg:px-[7.6rem] py-10 md:pt-20 font-mont  bg-transparent  quiz-environment">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div></div>
        <div></div>
        <div className="flex flex-col items-center md:items-start  ">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-[#000000] text-center md:text-left font-lato">
            Subscribe to our Newsletter
          </h3>

          {/* Subtitle */}
          <p className="text-base font-normal text-[#000000] text-center md:text-left font-inter my-4 leading-relaxed max-w-md">
            Get news about what we are supporting and more by subscribing to our
            newsletter.
          </p>

          {/* Subscribe Form */}
          <section className="w-full">
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-transparent border border-[#B7C8F4] rounded-2xl overflow-hidden w-full max-w-md shadow-sm  transition-shadow duration-200"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-2 focus:outline-none text-[#000000] placeholder:text-gray-500 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className={`text-[#000000] bg-[#B7C8F4] hover:bg-[#9eb7f0] transition-colors duration-200 font-inter font-medium text-sm flex items-center gap-x-2 py-2 px-5 ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Subscribing..." : "Subscribe"}
                {!loading && (
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                )}
              </button>
            </form>
          </section>

          {/* Privacy Notice */}
          <section className="w-full mt-5">
            <p className="text-[#000000] text-sm md:text-base font-normal font-inter text-center md:text-left leading-relaxed">
              By subscribing, you agree to{" "}
              <Link
                href="/contact/privacy-policy"
                className="underline text-[#000000] hover:text-[#3b4cca] transition-colors duration-200"
              >
                Skills Outside School’s <span>Privacy Policy</span>.
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
