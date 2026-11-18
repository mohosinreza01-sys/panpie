
import Link from "next/link";
import {
 
  MapPin,
  Phone,
  Mail,
  Heart,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Our Menu", href: "#menu" },
  { name: "Special Offers", href: "#offers" },
  { name: "Contact Us", href: "#contact" },
];

const openingHours = [
  { day: "Monday - Friday", time: "10AM - 10PM" },
  { day: "Saturday", time: "10AM - 11PM" },
  { day: "Sunday", time: "11AM - 10PM" },
];

export default function Footer() {
  return (
    <footer className="bg-[#191919] pb-6 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-4xl font-black tracking-tight"
            >
              Pan<span className="text-[#f52e26]">pie.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Fresh ingredients, delicious recipes and unforgettable
              flavors. Experience the real taste of happiness with Panpie.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
            {/* fb insta linkedin */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#292929] transition hover:bg-[#f52e26]"
              >
                <span className="text-sm font-black">♪</span>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#f52e26]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Opening Hours
            </h3>

            <div className="space-y-4 text-sm">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between gap-4"
                >
                  <span className="text-gray-400">
                    {item.day}
                  </span>

                  <span className="whitespace-nowrap text-[#ffb900]">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#292929] px-4 py-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-gray-300">
                Hours may vary
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Get In Touch
            </h3>

            <div className="space-y-5 text-sm text-gray-400">

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#f52e26]"
                />

                <p>
                  123 Restaurant Street,
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={17}
                  className="shrink-0 text-[#f52e26]"
                />

                <a
                  href="tel:+8801000000000"
                  className="transition hover:text-white"
                >
                  +880 1000-000000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-[#f52e26]"
                />

                <a
                  href="mailto:hello@panpie.com"
                  className="transition hover:text-white"
                >
                  hello@panpie.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-6 md:flex-row">

          <p className="text-center text-xs text-gray-500 md:text-left">
            © {new Date().getFullYear()} Panpie. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>Made with</span>
            <Heart
              size={15}
              fill="currentColor"
              className="text-[#f52e26]"
            />
            <span>for food lovers</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
