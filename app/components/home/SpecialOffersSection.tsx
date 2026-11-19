
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

const offers = [
  {
    tag: "LIMITED TIME OFFER",
    title: "Family Pizza",
    highlight: "Combo",
    description:
      "Enjoy your favourite pizza with delicious sides and refreshing drinks.",
    price: "$29",
    oldPrice: "$45",
    discount: "35%",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=90",
    alt: "Delicious family pizza",
    theme: "red",
  },
  {
    tag: "WEEKEND SPECIAL",
    title: "Crispy &",
    highlight: "Delicious",
    description:
      "Golden crispy fries with your favourite refreshing soft drink.",
    price: "$12",
    oldPrice: "$18",
    discount: "30%",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
    alt: "Golden crispy French fries",
    theme: "cream",
  },
];

export default function SpecialOffersSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf9] py-20 lg:py-24">

      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-extrabold uppercase tracking-[3px] text-[#f52e26]">
            Special Offers
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#171717] md:text-4xl lg:text-[46px]">
            Today's Best{" "}
            <span className="text-[#f52e26]">Deals</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Enjoy delicious food and amazing deals. Treat yourself
            to something special today!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`group relative min-h-[390px] overflow-hidden rounded-[28px] ${
                offer.theme === "red"
                  ? "bg-[#f52e26] text-white"
                  : "bg-[#f5ecda] text-[#171717]"
              }`}
            >

              {/* Background Decoration */}
              <div
                className={`absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full border-[35px] ${
                  offer.theme === "red"
                    ? "border-white/10"
                    : "border-[#f52e26]/[0.07]"
                }`}
              />

              <div
                className={`absolute -bottom-32 right-20 h-72 w-72 rounded-full ${
                  offer.theme === "red"
                    ? "bg-[#d91e19]/40"
                    : "bg-[#ffb900]/20"
                }`}
              />

              {/* Discount Badge */}
              <div
                className={`absolute right-5 top-5 z-30 flex h-[76px] w-[76px] rotate-12 flex-col items-center justify-center rounded-full shadow-xl sm:right-7 sm:top-7 ${
                  offer.theme === "red"
                    ? "bg-[#ffb900] text-black"
                    : "bg-[#f52e26] text-white"
                }`}
              >
                <span className="text-xl font-black">
                  {offer.discount}
                </span>
                <span className="text-[10px] font-bold tracking-wider">
                  OFF
                </span>
              </div>

              {/* Content */}
              <div className="relative z-20 w-[62%] px-6 pb-10 pt-9 sm:px-9 sm:pt-12">

                <span
                  className={`inline-block rounded-full px-4 py-2 text-[10px] font-extrabold tracking-[1.5px] sm:text-xs ${
                    offer.theme === "red"
                      ? "bg-[#ffb900] text-black"
                      : "bg-[#171717] text-white"
                  }`}
                >
                  {offer.tag}
                </span>

                <h3 className="mt-7 text-[30px] font-black leading-[1.15] sm:text-[38px] lg:text-[40px]">
                  {offer.title}
                  <span
                    className={`block ${
                      offer.theme === "cream"
                        ? "text-[#f52e26]"
                        : "text-white"
                    }`}
                  >
                    {offer.highlight}
                  </span>
                </h3>

                <p
                  className={`mt-4 max-w-[300px] text-xs leading-6 sm:text-sm ${
                    offer.theme === "red"
                      ? "text-white/80"
                      : "text-gray-600"
                  }`}
                >
                  {offer.description}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-center gap-3">
                  <span
                    className={`text-4xl font-black ${
                      offer.theme === "cream"
                        ? "text-[#f52e26]"
                        : "text-white"
                    }`}
                  >
                    {offer.price}
                  </span>

                  <span
                    className={`text-lg line-through ${
                      offer.theme === "red"
                        ? "text-white/60"
                        : "text-gray-400"
                    }`}
                  >
                    {offer.oldPrice}
                  </span>
                </div>

                {/* Button */}
                <Link
                  href="/menu"
                  className={`mt-7 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-xs font-extrabold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:text-sm ${
                    offer.theme === "red"
                      ? "bg-[#ffb900] text-black hover:bg-white"
                      : "bg-[#f52e26] text-white hover:bg-[#171717]"
                  }`}
                >
                  <ShoppingBag size={17} />
                  ORDER NOW
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Circular Food Image */}
              <div className="absolute -bottom-5 -right-16 z-10 flex h-[300px] w-[300px] items-center justify-center sm:-right-14 sm:h-[340px] sm:w-[340px] lg:-right-16 lg:h-[360px] lg:w-[360px]">

                {/* Outer Circle */}
                <div
                  className={`absolute inset-0 rounded-full border-[10px] ${
                    offer.theme === "red"
                      ? "border-white/20"
                      : "border-white/70"
                  }`}
                />

                {/* Image */}
                <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    sizes="(max-width: 640px) 300px, 360px"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
