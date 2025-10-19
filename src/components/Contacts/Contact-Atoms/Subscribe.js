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
    <div className=" px-4 md:px-[4rem] lg:px-[7.6rem] py-8 md:pt-20 font-mont">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div></div>
        <div></div>
        <div>
          <h3 className="text-xl md:text-xl font-bold text-[#000000] text-center md:text-left w-full font-lato">
            Subscribe to our newsletter
          </h3>

          <h4 className="text-base font-normal text-[#000000] text-center md:text-left w-full font-inter my-5">
            Get news about what we are supporting and more by subscribing to our
            newsletter.
          </h4>

          <section className="subscribe-form-section w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-row gap-x-2 justify-start items-center bg-transparent"
            >
              <div className=" border flex border-[#B7C8F4] rounded-2xl pl-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-60 md:w-60 bg-transparent focus:outline-none text-[#000000] placeholder:text-sm text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="text-[#000000] bg-[#B7C8F4] rounded-2xl text-base font-inter flex justify-center items-center py-2 px-4 ml-2"
                >
                  {loading ? (
                    "Subscribing..."
                  ) : (
                    <span className="flex justify-center items-center gap-x-3">
                      Subscribe{" "}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </section>

          <section className="privacy-warning-section w-full mt-5">
            <p className="text-[#000000] text-base md:text-base font-normal font-inter">
              By subscribing, you agree to <br />
              <Link
                clas
                href="/contact/privacy-policy"
                className="underline flex gap-6 md:gap-10 items-center"
              >
                Skills Outside School&apos;s <span>Privacy Policy.</span>
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
