
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ShoppingCart,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";

const features = [
  "Fresh and Quality Ingredients",
  "Hot and Delicious Pizza",
  "Fast Home Delivery",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f0df]">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#c9a96e 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[650px] py-14 lg:py-10">

          {/* LEFT CONTENT */}
          <div className="relative z-10 text-center lg:text-left">

            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-[#ffb900] px-5 py-3 rounded-full mb-7 shadow-sm">
              <span className="text-xl">🍕</span>
              <span className="text-sm md:text-base font-bold text-black">
                Fresh • Hot • Delicious
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-poppins)] text-[40px] sm:text-5xl md:text-6xl xl:text-[68px] leading-[1.12] font-extrabold text-[#171717] tracking-[-2px]">
  ENJOY YOUR

  <span className="block text-[#ef2929] italic mt-1">
    PIZZA IN TOWN!
  </span>
</h1>

            {/* Underline */}
            <div className="w-40 h-[7px] bg-[#ffb900] rounded-full mt-6 mb-7 mx-auto lg:mx-0" />

            {/* Description */}
            <p className="font-sans text-gray-600 text-base md:text-lg leading-8 max-w-[470px] mx-auto lg:mx-0">
              Enjoy delicious pizza made with fresh ingredients,
              rich cheese and unforgettable flavours.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-3">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <span className="w-6 h-6 shrink-0 bg-[#ef2929] rounded-full text-white flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-gray-800 font-medium text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-9">

              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 bg-[#ffb900] hover:bg-[#ef2929] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <ShoppingCart size={19} />
                ORDER NOW
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-semibold text-gray-900 hover:text-[#ef2929] transition"
              >
                <span className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#ef2929] hover:scale-110 transition">
                  <Play size={17} fill="currentColor" />
                </span>
                Watch Video
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-16 lg:mt-0">

            {/* Yellow Circle */}
            <div className="absolute w-[290px] h-[290px] sm:w-[400px] sm:h-[400px] lg:w-[470px] lg:h-[470px] bg-[#ffbd21] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Pizza Image */}
            <div className="relative z-10 w-full max-w-[600px] mx-auto">

              <Image
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
                alt="Freshly baked delicious pepperoni pizza"
                width={1200}
                height={1200}
                priority
                className="w-full aspect-square object-cover rounded-full drop-shadow-2xl"
              />

            </div>

            {/* Offer Badge */}
            <div className="absolute z-20 top-0 left-0 md:left-2 bg-[#ef2929] text-white w-28 h-28 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center shadow-xl rotate-[-10deg]">
              <span className="text-sm md:text-lg font-bold">
                Special Offer
              </span>

              <span className="text-3xl md:text-5xl font-extrabold">
                $39
              </span>
            </div>

            {/* Decorative Label */}
            <div className="absolute bottom-0 right-0 z-20 bg-white px-5 py-3 rounded-full shadow-lg rotate-[-5deg] hidden sm:block">
              <p className="text-xs font-bold text-gray-800 flex items-center gap-1">
                <Star size={13} fill="currentColor" className="text-[#ef2929]" />
                MADE WITH LOVE
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
