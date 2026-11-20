
"use client";

import { useState, FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle,
  Lock,
} from "lucide-react";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Please fill in all fields.");
      setIsSuccess(false);
      return;
    }

    setMessage("Thank you for subscribing to our newsletter!");
    setIsSuccess(true);

    setName("");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto container-custom px-5 lg:px-8">

        <div className="relative overflow-hidden rounded-[28px] bg-[#ef302b] px-7 py-12 md:px-12 lg:px-16">

          {/* Decorations */}
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[35px] border-white/10" />

          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[30px] border-white/10" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">

                {/* Heading */}

              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl lg:text-[46px]">
                Subscribe To Our
                <span className="block text-[#ffca42]">
                  Newsletter!
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[430px] text-sm leading-7 text-white/80 md:text-base lg:mx-0">
                Get the latest food updates, exclusive offers
                and special discounts delivered straight
                to your inbox.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-5 text-xs font-semibold text-white/90 lg:justify-start">

                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#ffca42]" />
                  Exclusive Offers
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#ffca42]" />
                  Latest Updates
                </span>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative">

              <div className="rounded-2xl bg-white p-5 shadow-2xl md:p-7">

                <h3 className="text-xl font-extrabold text-[#171717]">
                  Get Special Offers!
                </h3>

                <p className="mb-6 mt-2 text-sm text-gray-500">
                  Join our community of food lovers.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="newsletterName"
                      className="mb-2 block text-xs font-bold text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="newsletterName"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-4 text-sm outline-none transition focus:border-[#ef302b]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="newsletterEmail"
                      className="mb-2 block text-xs font-bold text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="newsletterEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-4 text-sm outline-none transition focus:border-[#ef302b]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffb900] py-4 text-sm font-extrabold text-white transition duration-300 hover:bg-[#171717]"
                  >
                    SUBSCRIBE NOW
                    <ArrowRight size={18} />
                  </button>

                </form>

                {/* Message */}
                {message && (
                  <p
                    role="status"
                    className={`mt-4 text-center text-sm font-semibold ${
                      isSuccess ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

                {/* Privacy */}
                <p className="mt-5 flex items-center justify-center gap-1 text-center text-[11px] text-gray-400">
                  <Lock size={12} />
                  Your information will be kept private.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
