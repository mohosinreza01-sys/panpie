
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Panpie!

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
`;

    const whatsappNumber = "8801234567890";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "123 Restaurant Street, Dhaka, Bangladesh",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+880 1234-567890",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@panpie.com",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: "Every Day: 10:00 AM – 11:00 PM",
    },
  ];

  return (
    <main className="bg-white text-[#191919]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#191919] py-24 md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#f52e26]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <span className="mb-5 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#ff554e]">
            GET IN TOUCH
          </span>

          <h1 className="mb-5 text-4xl font-extrabold text-white md:text-6xl">
            Contact <span className="text-[#f52e26]">Us</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Have a question, suggestion or feedback? We would love to hear
            from you. Get in touch with our team.
          </p>

          <div className="mt-8 flex justify-center gap-3 text-sm text-white/70">
            <Link href="/" className="hover:text-[#f52e26]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#f52e26]">Contact</span>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_8px_35px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#fff0ef] text-[#f52e26]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mb-2 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="bg-[#fafafa] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">

          {/* LEFT CONTENT */}
          <div>
            <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
              CONTACT PANPIE
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
              Let's Start a
              <span className="text-[#f52e26]"> Conversation.</span>
            </h2>

            <p className="mb-9 max-w-lg leading-8 text-gray-500">
              Whether you want to know more about our menu, place an order
              or share your experience, our team is ready to help.
            </p>

            <div className="mb-8 space-y-5">
              {[
                {
                  title: "Quick Response",
                  description: "We aim to respond as soon as possible.",
                },
                {
                  title: "Friendly Support",
                  description: "Our team is here to assist you.",
                },
                {
                  title: "Customer First",
                  description: "Your feedback matters to us.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#f52e26] shadow-sm">
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_15px_60px_rgba(0,0,0,0.06)] md:p-10">
            <h3 className="mb-2 text-2xl font-extrabold">
              Send Us a Message
            </h3>

            <p className="mb-8 text-sm text-gray-500">
              Fill out the form and contact us through WhatsApp.
            </p>

            {submitted && (
              <div className="mb-6 rounded-xl bg-green-50 p-4 text-sm text-green-700">
                WhatsApp message window opened. Please send your message there.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      handleChange("name", e.target.value)
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#f52e26]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#f52e26]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      handleChange("phone", e.target.value)
                    }
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#f52e26]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Subject *
                  </label>

                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      handleChange("subject", e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#f52e26]"
                  >
                    <option value="">Select subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Food Order">Food Order</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    handleChange("message", e.target.value)
                  }
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#f52e26]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f52e26] px-6 py-4 font-bold text-white transition hover:bg-[#d9231d]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
              FIND US
            </span>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Visit Our Restaurant
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-100">
            <iframe
              title="Panpie Restaurant Location"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#f52e26] py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 text-center md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
              Hungry? Let's Order!
            </h2>

            <p className="text-white/80">
              Explore our delicious menu and find your favourites.
            </p>
          </div>

          <Link
            href="/menu"
            className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#f52e26] transition hover:bg-[#191919] hover:text-white"
          >
            Explore Menu
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}
