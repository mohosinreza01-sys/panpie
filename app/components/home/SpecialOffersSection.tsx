
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SpecialOffersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-extrabold uppercase tracking-[3px] text-[#f52e26]">
            Special Offers
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#171717] md:text-4xl lg:text-[46px]">
            Today's Best <span className="text-[#f52e26]">Deals</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
            Enjoy delicious food and amazing deals. Treat yourself
            to something special today!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">

          {/* OFFER CARD 1 */}
          <div className="group relative min-h-[370px] overflow-hidden rounded-[25px] bg-[#f52e26]">

            {/* Background Decoration */}
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full border-[35px] border-white/10" />

            {/* Content */}
            <div className="relative z-20 max-w-[65%] p-6 sm:p-8 md:p-10">

              <span className="inline-block rounded-full bg-[#ffb900] px-4 py-2 text-xs font-extrabold tracking-wider text-black">
                LIMITED OFFER
              </span>

              <h3 className="mt-6 text-3xl font-black leading-tight text-white md:text-4xl">
                Family Pizza
                <span className="block">Combo</span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/80">
                Enjoy your favourite pizza with delicious sides
                and refreshing drinks.
              </p>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-4xl font-black text-white">$29</span>
                <span className="mb-1 text-lg text-white/60 line-through">
                  $45
                </span>
              </div>

              <Link
                href="#menu"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ffb900] px-6 py-3 text-sm font-extrabold text-black transition-all duration-300 hover:bg-white"
              >
                ORDER NOW
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Food Image */}
            <div className="absolute -bottom-[15px] -right-[45px] h-[85%] w-[55%] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=650&q=90"
                alt="Family Pizza Combo"
                fill
                sizes="(max-width: 768px) 55vw, 300px"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Discount Badge */}
            <div className="absolute right-4 top-4 z-30 flex h-[65px] w-[65px] rotate-12 flex-col items-center justify-center rounded-full bg-[#ffb900] shadow-lg sm:right-6 sm:top-6 sm:h-[75px] sm:w-[75px]">
              <span className="text-xl font-black">35%</span>
              <span className="text-[10px] font-bold">OFF</span>
            </div>
          </div>

          {/* OFFER CARD 2 */}
          <div className="group relative min-h-[370px] overflow-hidden rounded-[25px] bg-[#f7eddb]">

            {/* Background Circle */}
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#ffb900]/20" />

            {/* Content */}
            <div className="relative z-20 max-w-[65%] p-6 sm:p-8 md:p-10">

              <span className="inline-block rounded-full bg-[#171717] px-4 py-2 text-xs font-extrabold tracking-wider text-white">
                WEEKEND SPECIAL
              </span>

              <h3 className="mt-6 text-3xl font-black leading-tight text-[#171717] md:text-4xl">
                Crispy &
                <span className="block text-[#f52e26]">Delicious</span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Golden crispy fries with your favourite
                refreshing soft drink.
              </p>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-4xl font-black text-[#f52e26]">$12</span>
                <span className="mb-1 text-lg text-gray-400 line-through">
                  $18
                </span>
              </div>

              <Link
                href="#menu"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#f52e26] px-6 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:bg-[#171717]"
              >
                ORDER NOW
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Food Image */}
            <div className="absolute -bottom-[15px] -right-[35px] h-[85%] w-[53%] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=650&q=90"
                alt="Crispy French Fries"
                fill
                sizes="(max-width: 768px) 55vw, 300px"
                className="object-contain drop-shadow-xl"
              />
            </div>

            {/* Discount Badge */}
            <div className="absolute right-4 top-4 z-30 flex h-[65px] w-[65px] -rotate-12 flex-col items-center justify-center rounded-full bg-[#f52e26] text-white shadow-lg sm:right-6 sm:top-6 sm:h-[75px] sm:w-[75px]">
              <span className="text-xl font-black">30%</span>
              <span className="text-[10px] font-bold">OFF</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
