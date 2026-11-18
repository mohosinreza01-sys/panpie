
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Maxican Pizza",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=85",
    alt: "Mexican Pizza",
    imageClass: "h-[245px] w-[245px] rounded-full object-cover",
  },
  {
    title: "Soft Drinks",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=85",
    alt: "Cold Soft Drink",
    imageClass: "h-[250px] w-[200px] object-contain",
  },
  {
    title: "French Fry",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=85",
    alt: "French Fries",
    imageClass: "h-[250px] w-[220px] object-contain",
  },
];

export default function CategorySection() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1170px] px-5">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_15px_40px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
              {/* Red Header */}
              <div className="relative h-[190px] rounded-b-[45%] bg-[#f52e26] pt-10 text-center">
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  {item.title}
                </h3>

                <Link
                  href="/menu"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#ffbd21] px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-[#ffbd21] hover:text-black"
                >
                  <ArrowRight size={14} />
                  SEE MENU
                </Link>
              </div>

              {/* Image Area */}
              <div className="-mt-2 flex h-[210px] items-center justify-center overflow-hidden relative">
                {/* Dotted Background */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#333 1px, transparent 1px)",
                    backgroundSize: "15px 15px",
                  }}
                />

                {/* Food Image */}
                <div
                  className={`relative z-10 transition-transform duration-700 group-hover:scale-110 ${item.imageClass}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 245px, 250px"
                    className={
                      item.imageClass.includes("rounded-full")
                        ? "rounded-full object-cover drop-shadow-xl"
                        : "object-contain drop-shadow-xl"
                    }
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
