
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Award,
  Clock,
  Star,
} from "lucide-react";

const chefs = [
  {
    name: "Alexander Morgan",
    role: "Head Chef",
    experience: "12 Years Experience",
    specialty: "Continental Cuisine",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=85",
    description:
      "Passionate about creating memorable dining experiences through exceptional food.",
  },
  {
    name: "Sophia Williams",
    role: "Executive Chef",
    experience: "10 Years Experience",
    specialty: "Italian Cuisine",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=85",
    description:
      "Bringing creativity and authentic flavors to every dish she prepares.",
  },
  {
    name: "Daniel Anderson",
    role: "Pizza Specialist",
    experience: "8 Years Experience",
    specialty: "Italian Pizza",
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&auto=format&fit=crop&q=85",
    description:
      "Specializing in handcrafted pizzas with fresh ingredients and rich flavors.",
  },
  {
    name: "Olivia Martin",
    role: "Pastry Chef",
    experience: "7 Years Experience",
    specialty: "Desserts & Bakery",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=85",
    description:
      "Creating delightful desserts and sweet treats with attention to every detail.",
  },
];

const specialties = [
  {
    icon: ChefHat,
    title: "Expert Cooking",
    description:
      "Our kitchen team focuses on quality, consistency and great taste.",
  },
  {
    icon: Award,
    title: "Quality Ingredients",
    description:
      "Every dish starts with carefully selected fresh ingredients.",
  },
  {
    icon: Clock,
    title: "Years of Experience",
    description:
      "Professional skills and passion come together in our kitchen.",
  },
];

export default function OurChefsPage() {
  return (
    <main className="bg-white text-[#191919]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#191919] py-24 md:py-32">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#f52e26]/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#f52e26]/10 blur-3xl" />

        <div className="relative mx-auto container-custom px-5 text-center lg:px-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#ff554e]">
            <ChefHat size={17} />
            MEET OUR TEAM
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Meet Our <span className="text-[#f52e26]">Chefs</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Behind every delicious dish is a passionate chef. Meet the
            talented people who bring flavor, creativity and love to
            every plate at Panpie.
          </p>

          <div className="mt-8 flex justify-center gap-3 text-sm text-white/70">
            <Link href="/" className="transition hover:text-[#f52e26]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#f52e26]">Our Chefs</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">

          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&auto=format&fit=crop&q=85"
                alt="Professional chef preparing food"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl bg-[#f52e26] p-6 text-white shadow-xl md:-right-6">
              <div className="text-3xl font-extrabold">100%</div>
              <p className="mt-1 text-sm font-medium text-white/85">
                Passion for Food
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
              OUR KITCHEN TEAM
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl">
              Passionate People.
              <span className="text-[#f52e26]">
                {" "}Amazing Food.
              </span>
            </h2>

            <p className="mb-5 leading-8 text-gray-500">
              Great food is never an accident. It takes creativity,
              dedication and a team of people who truly love what they do.
            </p>

            <p className="mb-8 leading-8 text-gray-500">
              At Panpie, our chefs bring their skills and passion
              together to create delicious meals that make every visit
              special.
            </p>

            <Link
              href="/menu"
              className="inline-flex items-center gap-3 rounded-xl bg-[#f52e26] px-7 py-4 font-bold text-white transition hover:bg-[#191919]"
            >
              Explore Our Menu
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* CHEFS GRID */}
      <section className="bg-[#fafafa] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
              THE PEOPLE BEHIND THE FLAVOR
            </span>

            <h2 className="text-3xl font-extrabold md:text-5xl">
              Meet Our <span className="text-[#f52e26]">Talented Chefs</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
              Every chef has a unique style, but they all share one
              passion — making great food.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {chefs.map((chef, index) => (
              <div
                key={chef.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden bg-gray-100">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <span className="absolute left-4 top-4 rounded-full bg-[#f52e26] px-4 py-2 text-xs font-bold text-white">
                    {chef.role}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-extrabold transition group-hover:text-[#f52e26]">
                    {chef.name}
                  </h3>

                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                    <Clock size={15} className="text-[#f52e26]" />
                    {chef.experience}
                  </div>

                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#f52e26]">
                    <Star size={15} />
                    {chef.specialty}
                  </div>

                  <p className="text-sm leading-7 text-gray-500">
                    {chef.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
              WHAT MAKES US SPECIAL
            </span>

            <h2 className="text-3xl font-extrabold md:text-5xl">
              More Than Just <span className="text-[#f52e26]">Cooking</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {specialties.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 p-8 text-center transition hover:-translate-y-1 hover:border-[#f52e26]/30 hover:shadow-xl"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0ef] text-[#f52e26]">
                    <Icon size={29} />
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#191919] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
            TASTE THE DIFFERENCE
          </span>

          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Great Food Starts With
            <span className="text-[#f52e26]"> Great Passion.</span>
          </h2>

          <p className="mx-auto mb-9 max-w-2xl leading-8 text-white/60">
            Discover the delicious creations prepared by our kitchen
            team. Your next favourite meal is waiting for you.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center gap-3 rounded-xl bg-[#f52e26] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#191919]"
          >
            Discover Our Menu
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}
