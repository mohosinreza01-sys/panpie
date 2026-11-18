
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Plus,
  Star,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: string;
  badge?: string;
  badgeColor?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Special Cheese Pizza",
    description: "Fresh mozzarella, rich cheese and special toppings.",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=85",
    price: 18,
    oldPrice: 22,
    rating: "4.9",
    badge: "BEST SELLER",
    badgeColor: "bg-[#f52e26] text-white",
  },
  {
    id: 2,
    name: "Crispy French Fries",
    description: "Golden crispy fries with delicious seasoning.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=85",
    price: 8,
    oldPrice: 10,
    rating: "4.8",
    badge: "POPULAR",
    badgeColor: "bg-[#ffb900] text-black",
  },
  {
    id: 3,
    name: "Fresh Cold Drinks",
    description: "Refreshing chilled drinks for every occasion.",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=85",
    price: 5,
    rating: "5.0",
  },
  {
    id: 4,
    name: "Chicken Sandwich",
    description: "Fresh bread with delicious chicken and cheese filling.",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=600&q=85",
    price: 12,
    rating: "4.5",
    badge: "NEW",
    badgeColor: "bg-[#f52e26] text-white",
  },
];

export default function PopularProductsSection() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[3px] text-[#f52e26]">
              Customer Favorites
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#171717] md:text-4xl lg:text-[44px]">
              Our Popular <span className="text-[#f52e26]">Food</span>
            </h2>

            <p className="mt-3 leading-7 text-gray-500">
              Explore our most loved dishes, freshly prepared for you.
            </p>
          </div>

          <Link
            href="#menu"
            className="inline-flex items-center gap-3 text-sm font-bold text-[#f52e26] transition hover:text-black"
          >
            VIEW ALL PRODUCTS
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative flex h-[235px] items-center justify-center overflow-hidden bg-[#faf6ef]">

                {product.badge && (
                  <span
                    className={`absolute left-4 top-4 z-10 rounded-full px-3 py-2 text-[11px] font-bold ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:text-[#f52e26]"
                >
                  <Heart
                    size={18}
                    className={
                      wishlist.includes(product.id)
                        ? "fill-[#f52e26] text-[#f52e26]"
                        : ""
                    }
                  />
                </button>

                <div className="relative h-[190px] w-[190px] overflow-hidden rounded-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="190px"
                    className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">

                {/* Rating */}
                <div className="mb-3 flex items-center gap-1 text-xs text-[#ffb900]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}

                  <span className="ml-1 text-gray-500">
                    ({product.rating})
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#171717]">
                  {product.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                  {product.description}
                </p>

                {/* Price & Add Button */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                  <div>
                    <span className="text-xl font-black text-[#f52e26]">
                      ${product.price.toFixed(2)}
                    </span>

                    {product.oldPrice && (
                      <span className="ml-1 text-sm text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(product.id)}
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb900] text-white transition hover:bg-[#f52e26]"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="#menu"
            className="inline-flex items-center gap-3 rounded-full bg-[#f52e26] px-9 py-4 text-sm font-bold text-white shadow-lg shadow-red-100 transition-all duration-300 hover:bg-[#171717]"
          >
            EXPLORE ALL FOOD
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
