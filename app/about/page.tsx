
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  Clock,
  Heart,
  Leaf,
  MapPin,
  Utensils,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We carefully select fresh ingredients to bring quality and flavor to every meal.",
  },
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description:
      "Our kitchen team prepares every dish with attention, creativity and passion.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    description:
      "Every recipe is prepared with care to make your dining experience special.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description:
      "We value your time and work to serve delicious food without unnecessary delays.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-[#191919]">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&auto=format&fit=crop&q=85"
            alt="Delicious food"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-block bg-[#f52e26] text-white text-xs font-bold tracking-[3px] px-5 py-2 rounded-full">
            ABOUT PANPIE
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mt-7">
            More Than Food,
            <br />
            <span className="text-[#f52e26]">It's An Experience.</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-7">
            Great food brings people together. At Panpie, we believe every
            meal should be fresh, flavorful and memorable.
          </p>

          <div className="flex justify-center items-center gap-2 mt-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#f52e26]">Home</Link>
            <span>/</span>
            <span className="text-[#f52e26]">About Us</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=85"
                alt="Restaurant interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-3 sm:-right-7 bg-[#f52e26] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <Utensils size={28} />
              <h3 className="text-2xl font-extrabold mt-3">Panpie</h3>
              <p className="text-xs text-white/80 mt-1">Food With Passion</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="pt-6 lg:pt-0">
            <span className="text-[#f52e26] text-xs font-bold tracking-[3px] uppercase">
              Our Story
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#191919] leading-tight mt-4">
              Bringing People Together Through
              <span className="text-[#f52e26]"> Great Food.</span>
            </h2>

            <p className="text-gray-500 text-sm leading-7 mt-6">
              At Panpie, food is more than something we serve. It's a way
              to create moments, share happiness and bring people closer.
            </p>

            <p className="text-gray-500 text-sm leading-7 mt-4">
              From delicious pizzas and juicy burgers to freshly prepared
              sandwiches, we focus on making every bite enjoyable. Our goal
              is to offer a welcoming food experience with great taste and
              friendly service.
            </p>

            <div className="space-y-4 mt-7">
              {[
                "Freshly prepared food",
                "Quality-focused ingredients",
                "A welcoming food experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="text-[#f52e26] shrink-0" />
                  <span className="text-sm font-semibold text-[#191919]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/menu"
              className="inline-flex items-center gap-3 mt-9 bg-[#f52e26] text-white px-7 py-4 rounded-full text-sm font-bold hover:bg-[#191919] transition-colors"
            >
              Explore Our Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#fafafa] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#f52e26] text-xs font-bold tracking-[3px] uppercase">
              Why Choose Panpie
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#191919] mt-4">
              What Makes Us
              <span className="text-[#f52e26]"> Special?</span>
            </h2>

            <p className="text-gray-500 text-sm leading-7 mt-4">
              We believe good food starts with good ingredients,
              thoughtful preparation and genuine care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#fff0ee] flex items-center justify-center text-[#f52e26]">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#191919] mt-6">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-3">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          <div className="relative overflow-hidden bg-[#191919] rounded-3xl p-8 md:p-12">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#f52e26]/20 blur-3xl" />

            <div className="relative">
              <div className="w-14 h-14 bg-[#f52e26] rounded-2xl flex items-center justify-center text-white">
                <Heart size={27} />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-7">
                Our Mission
              </h3>

              <p className="text-gray-400 text-sm leading-7 mt-4">
                To serve delicious, quality-focused food and create
                enjoyable dining moments through great taste,
                friendly service and thoughtful preparation.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#fff3f1] rounded-3xl p-8 md:p-12">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#f52e26]/10 blur-3xl" />

            <div className="relative">
              <div className="w-14 h-14 bg-[#f52e26] rounded-2xl flex items-center justify-center text-white">
                <ChefHat size={27} />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#191919] mt-7">
                Our Vision
              </h3>

              <p className="text-gray-600 text-sm leading-7 mt-4">
                To become a trusted food destination where people
                can enjoy memorable flavors, quality meals and
                welcoming experiences every day.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f52e26] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="text-white/80 text-xs font-bold tracking-[3px] uppercase">
            Taste The Difference
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4">
            Hungry? Let's Make It Delicious!
          </h2>

          <p className="text-white/80 text-sm leading-7 mt-5 max-w-xl mx-auto">
            Discover your favorites and enjoy something delicious
            with Panpie.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center gap-3 bg-white text-[#191919] px-8 py-4 rounded-full font-bold text-sm mt-8 hover:bg-[#191919] hover:text-white transition-colors"
          >
            Explore Menu
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
