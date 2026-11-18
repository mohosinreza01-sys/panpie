
import Image from "next/image";
import {
  Star,
  Quote,
  BadgeCheck,
  Heart,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    title: "Absolutely Delicious!",
    review:
      "The pizza was incredibly delicious. Fresh ingredients, perfect crust and amazing flavour. Definitely one of my favourite places to order food.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Michael Smith",
    role: "Happy Customer",
    title: "Great Food & Service!",
    review:
      "I really love the food quality and the service. Everything arrived fresh and warm. The taste was beyond my expectations.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Emily Wilson",
    role: "Food Lover",
    title: "My Favourite Food Spot!",
    review:
      "Amazing food, great portions and friendly service. I always enjoy ordering from Panpie. Highly recommended for pizza lovers!",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1 text-[#ffb900]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={15}
          fill="currentColor"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f1e3] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-extrabold uppercase tracking-[3px] text-[#f52e26]">
            Customer Testimonials
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#171717] md:text-4xl lg:text-[46px]">
            What Our Customers{" "}
            <span className="text-[#f52e26]">Say</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
            Don't just take our word for it. See what our happy
            customers say about their Panpie experience.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-[#eee5d5] bg-white p-7 transition duration-300 hover:shadow-xl md:p-8"
            >
              {/* Stars & Quote */}
              <div className="flex items-center justify-between">
                <StarRating />

                <Quote
                  size={38}
                  className="fill-[#f52e26]/10 text-[#f52e26]/15"
                />
              </div>

              {/* Review Content */}
              <h3 className="mt-6 text-xl font-extrabold text-[#171717]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {item.review}
              </p>

              {/* Customer Info */}
              <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-6">

                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-[#171717]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-xs text-gray-400">
                    {item.role}
                  </p>
                </div>

                <BadgeCheck
                  size={20}
                  className="ml-auto shrink-0 fill-green-500 text-white"
                />
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Rating */}
        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <div className="flex items-center gap-3">
            <span className="text-5xl font-black text-[#171717]">
              4.9
            </span>

            <div>
              <StarRating />

              <p className="mt-1 text-xs text-gray-500">
                Customer Satisfaction
              </p>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-[#ded2bd] sm:block" />

          <p className="flex items-center gap-1 text-center text-sm text-gray-500">
            Made with
            <Heart
              size={15}
              fill="currentColor"
              className="text-[#f52e26]"
            />
            for food lovers everywhere.
          </p>

        </div>

      </div>
    </section>
  );
}
