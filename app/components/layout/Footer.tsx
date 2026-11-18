
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Menu", href: "/menu" },
  { name: "Special Offers", href: "/offers" },
  { name: "Contact Us", href: "/contact" },
];

const openingHours = [
  { day: "Monday - Friday", time: "09:00 AM - 10:00 PM" },
  { day: "Saturday", time: "10:00 AM - 11:00 PM" },
  { day: "Sunday", time: "10:00 AM - 10:00 PM" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[19px] h-[19px]">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-4xl font-extrabold tracking-tight">
                Pan<span className="text-[#ef302b]">pie.</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-7 mt-5 max-w-xs">
              Delicious food, fresh ingredients, and unforgettable flavors.
              Experience the taste of happiness with Panpie.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-7">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#292929] hover:bg-[#ef302b] flex items-center justify-center transition-colors"
              >
                <FacebookIcon />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#292929] hover:bg-[#ef302b] flex items-center justify-center transition-colors"
              >
                <InstagramIcon />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#292929] hover:bg-[#ef302b] flex items-center justify-center transition-colors"
              >
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ef302b] text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <ArrowUpRight size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6">Opening Hours</h3>

            <div className="space-y-5">
              {openingHours.map((item) => (
                <div key={item.day}>
                  <p className="text-gray-300 text-sm font-medium">
                    {item.day}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 text-[#ef302b]">
              <Clock size={17} />
              <span className="text-sm font-semibold">Open Every Day</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={19} className="text-[#ef302b] shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-6">
                  123 Restaurant Street,
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#ef302b] shrink-0" />
                <a
                  href="tel:+8801234567890"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  +880 1234-567890
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#ef302b] shrink-0" />
                <a
                  href="mailto:info@panpie.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  info@panpie.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-center text-xs text-gray-500 md:text-left">
              © {new Date().getFullYear()} Panpie. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs text-gray-500">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
