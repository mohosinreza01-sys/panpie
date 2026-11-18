
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Flame,
  Truck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Fresh Ingredients",
    description: "Carefully selected ingredients for every meal.",
    icon: Leaf,
  },
  {
    title: "Made With Love",
    description: "Freshly prepared food with amazing flavours.",
    icon: Flame,
  },
  {
    title: "Fast Home Delivery",
    description: "Enjoy your favourite food at your doorstep.",
    icon: Truck,
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f1e3] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT IMAGE AREA */}
          <div className="relative mx-auto w-full max-w-[550px]">

            {/* Background Circle */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffbd24]" />

            {/* Main Food Image */}
            <div className="relative z-10 aspect-square w-full overflow-hidden rounded-full border-[10px] border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=90"
                alt="Fresh Panpie Pizza"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -left-2 -top-5 z-20 flex h-[115px] w-[115px] flex-col items-center justify-center rounded-full border-4 border-white bg-[#f52e26] text-white shadow-xl md:left-0 md:top-5 md:h-[140px] md:w-[140px]">
              <span className="text-3xl font-black md:text-4xl">
                10+
              </span>

              <span className="mt-1 text-center text-[10px] font-bold uppercase tracking-wider md:text-xs">
                Years Of
                <br />
                Experience
              </span>
            </div>

            {/* Small Food Image */}
            <div className="absolute -bottom-5 -right-2 z-20 h-[115px] w-[115px] overflow-hidden rounded-full border-[7px] border-white shadow-xl md:right-0 md:h-[155px] md:w-[155px]">
              <Image
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=85"
                alt="Fresh French Fries"
                fill
                sizes="155px"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Subtitle */}
            <span className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[3px] text-[#f52e26]">
              <span className="h-[2px] w-8 bg-[#f52e26]" />
              Why Choose Panpie?
              <span className="h-[2px] w-8 bg-[#f52e26] lg:hidden" />
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-black leading-[1.15] text-[#171717] md:text-5xl lg:text-[52px]">
              We Make The Best
              <span className="block text-[#f52e26]">
                Food In Your Town
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-[520px] leading-8 text-gray-600 lg:mx-0">
              At Panpie, we believe great food brings people together.
              Every meal is prepared with fresh ingredients, delicious
              flavours and a passion for quality.
            </p>

            {/* Features */}
            <div className="mt-9 space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-5 text-left"
                  >
                    {/* Icon */}
                    <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl bg-white text-[#f52e26] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Icon size={27} strokeWidth={2} />
                    </div>

                    {/* Feature Content */}
                    <div>
                      <h3 className="text-lg font-extrabold text-[#171717]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 rounded-full bg-[#ffb900] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-yellow-200 transition-all duration-300 hover:bg-[#f52e26]"
              >
                DISCOVER MORE

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
