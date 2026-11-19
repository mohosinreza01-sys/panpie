
"use client";

import {
  ShoppingCart,
  ShoppingBasket,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f0df] text-[#151515]">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%239b8c72' stroke-width='1.5'%3E%3Ccircle cx='25' cy='25' r='13'/%3E%3Cpath d='M15 25 Q25 10 35 25 Q25 40 15 25 M80 20 Q90 10 100 20 L95 38 L85 38 Z M20 85 Q35 65 50 85 L35 105 Z M80 80 C90 65 105 75 100 95'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Decorative Background */}
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#e8ddc7] blur-3xl opacity-40" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#e8ddc7] blur-3xl opacity-40" />

      {/* Floating Cart */}
      <div className="fixed left-0 top-[34%] z-50 hidden sm:block">
        <div className="w-[78px] bg-[#53617e] text-white shadow-lg">
          <div className="flex flex-col items-center py-4">
            <ShoppingBasket size={30} strokeWidth={1.4} />
            <span className="mt-2 text-sm font-bold">1 ITEM</span>
          </div>
          <div className="bg-white py-3 text-center text-sm font-bold text-[#53617e]">
            $27.00
          </div>
        </div>
      </div>

      {/* Floating Buy Now */}
      <button className="fixed right-4 top-[42%] z-50 hidden items-center gap-2 rounded-full bg-[#82b43b] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#6e9d2f] sm:flex">
        <ShoppingCart size={19} />
        Buy Now
      </button>

      {/* Hero Section */}
      <section className="relative mx-auto flex min-h-[720px] max-w-[1600px] items-center px-6 py-20 sm:px-12 lg:px-16">

        {/* Left Content */}
        <div className="relative z-20 w-full lg:w-[52%]">

          {/* Delivery Badge */}
          <div className="mb-8 inline-flex items-center bg-[#ff332b] px-5 py-2 text-lg font-semibold text-white">
            Free Home Delivery 24 Hours
            <span className="absolute ml-[285px] hidden h-0 w-0 border-y-[21px] border-l-[14px] border-y-transparent border-l-[#ff332b] sm:block" />
          </div>

          {/* Heading */}
          <h1 className="max-w-[750px] text-5xl font-black uppercase leading-[1.12] tracking-[-2px] sm:text-6xl lg:text-[76px]">
            Enjoy Your
            <br />
            Pizza In Town!
          </h1>

          {/* Features */}
          <div className="mt-7 space-y-2.5">
            {[
              "Down aorem ipsum dolor",
              "Sit amet consectetur adipisicing",
              "Eliteytellus luctus nec",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff382f] text-white">
                  <Check size={18} strokeWidth={3} />
                </span>
                <p className="text-lg font-medium sm:text-[21px]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Order Button */}
          <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#ffb500] px-9 py-5 text-base font-extrabold uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f29d00] hover:shadow-xl">
            <ShoppingCart size={25} />
            Order Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative mt-16 flex w-full items-center justify-center lg:absolute lg:right-[-2%] lg:top-1/2 lg:mt-0 lg:w-[56%] lg:-translate-y-1/2">

          {/* Pizza Image */}
          <div className="relative z-10 aspect-square w-full max-w-[640px]">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90"
              alt="Delicious pizza"
              className="h-full w-full rounded-full object-cover shadow-[0_25px_50px_rgba(80,50,20,0.18)]"
            />
          </div>

          {/* Offer Badge */}
          <div className="absolute left-[-2%] top-[30%] z-20 flex h-40 w-40 -rotate-6 flex-col items-center justify-center rounded-full bg-[#ffb500] text-center text-white shadow-lg sm:h-44 sm:w-44">
            <span className="text-xl font-bold">Offer!</span>
            <span className="text-5xl font-black">$39</span>
          </div>

          {/* Tomato Decorations */}
          <div className="absolute right-[3%] top-[-5%] z-0 flex gap-2">
            <div className="h-20 w-20 rounded-full bg-[#e33c24] shadow-xl" />
            <div className="mt-8 h-20 w-20 rounded-full bg-[#d83b28] shadow-xl" />
          </div>

          {/* Green Decoration */}
          <div className="absolute bottom-[0%] left-[-3%] -z-0 h-32 w-32 rounded-full bg-[#438b28] blur-2xl opacity-40" />
        </div>
      </section>
    </main>
  );
}
