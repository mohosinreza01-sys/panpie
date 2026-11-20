
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Mexican Pizza",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=90",
    alt: "Mexican Pizza",
    type: "pizza",
  },
  {
    title: "Soft Drinks",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=90",
    alt: "Cold Soft Drink",
    type: "drink",
  },
  {
    title: "French Fries",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=90",
    alt: "French Fries",
    type: "fries",
  },
];

export default function CategorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">

      <div className="container-custom">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-[4px] text-[#f52e26]">
            Our Categories
          </span>

          <h2 className="text-3xl font-black text-[#171717] sm:text-4xl md:text-5xl">
            Explore Our <span className="text-[#f52e26]">Menu</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-gray-500">
            Discover delicious food made with fresh ingredients
            and authentic flavors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_12px_35px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
            >

              {/* Red Header */}
              <div className="relative z-10 h-[185px] overflow-hidden rounded-b-[48%] bg-[#f52e26] pt-9 text-center">

                <h3 className="text-2xl font-extrabold text-white">
                  {item.title}
                </h3>

                <Link
                  href="/menu"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#ffbd21] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#ffbd21] hover:text-black"
                >
                  <ArrowRight size={14} />
                  SEE MENU
                </Link>

                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full border-[15px] border-white/10" />
                <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-white/10" />
              </div>

              {/* Image Section */}
              <div className="relative flex h-[290px] items-center justify-center overflow-hidden bg-[#fffdf9] px-5 pb-5">

                {/* Dotted Background */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#333 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                />

                {/* Image Container */}
                <div
                  className={`relative z-10 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105 ${
                    item.type === "pizza"
                      ? "h-[250px] w-[250px] rounded-full"
                      : item.type === "drink"
                        ? "h-[250px] w-[250px] rounded-full"
                        : "h-[250px] w-[250px] rounded-full"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority
                    sizes="(max-width: 640px) 250px, 250px"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f52e26] transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
