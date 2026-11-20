
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ShoppingBag,
  Star,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import { useCartStore } from "@/store/cart-store";

type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  image: string;
  images?: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
  isAvailable?: boolean;
  rating?: number;
  preparationTime?: string;
};

type Category = {
  id: string;
  name: string;
  slug: string;
  image?: string;
};

const products = productsData as Product[];
const categories = categoriesData as Category[];

const formatPrice = (price: number) =>
  `৳${price.toLocaleString("en-BD")}`;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const cartItems = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch &&
        product.isAvailable !== false
      );
    });
  }, [activeCategory, search]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.discountPrice ?? product.price,
      image: product.image,
      size: "Regular",
      color: "Default",
    });
  };

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#191919]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600"
            alt="Restaurant food"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center md:py-32 lg:px-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f52e26] px-5 py-2 text-xs font-bold tracking-[3px] text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            OUR FOOD MENU
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
            Delicious Food,
            <span className="text-[#f52e26]">
              {" "}Happy Moments.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
            Explore our delicious selection of freshly prepared meals.
            Made with love, served with passion.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#f52e26]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#f52e26]">Menu</span>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">

        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#f52e26]">
              Explore Our Menu
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#191919] md:text-5xl">
              Our Delicious Food
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Find your favorite food from our wide selection.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#191919]">
            <ShoppingBag size={19} className="text-[#f52e26]" />
            Cart Items:
            <span className="text-[#f52e26]">{cartCount}</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your favorite food..."
              className="h-13 w-full rounded-xl border border-gray-200 pl-12 pr-4 outline-none transition focus:border-[#f52e26]"
            />
          </div>

          <div className="flex h-13 items-center gap-2 rounded-xl border border-gray-200 px-5 text-sm font-semibold text-gray-600">
            <SlidersHorizontal size={17} />
            {filteredProducts.length} Items Found
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="scrollbar-hide mb-10 flex gap-3 overflow-x-auto pb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full px-6 py-3 text-sm font-bold transition-all ${
              activeCategory === "all"
                ? "bg-[#f52e26] text-white shadow-lg shadow-red-200"
                : "bg-[#f7f7f7] text-gray-600 hover:bg-[#191919] hover:text-white"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.slug)}
              className={`shrink-0 rounded-full px-6 py-3 text-sm font-bold transition-all ${
                activeCategory === category.slug
                  ? "bg-[#f52e26] text-white shadow-lg shadow-red-200"
                  : "bg-[#f7f7f7] text-gray-600 hover:bg-[#191919] hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const finalPrice =
                product.discountPrice ?? product.price;

              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-[0_15px_45px_rgba(0,0,0,0.09)]"
                >
                  <div className="relative h-60 overflow-hidden bg-gray-100 sm:h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {(product.isPopular || product.isFeatured) && (
                      <span className="absolute left-4 top-4 rounded-full bg-[#f52e26] px-4 py-2 text-[10px] font-extrabold tracking-wider text-white">
                        {product.isPopular ? "POPULAR" : "FEATURED"}
                      </span>
                    )}

                    {product.rating && (
                      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
                        <Star
                          size={13}
                          fill="#f5a623"
                          color="#f5a623"
                        />
                        <span className="text-xs font-bold">
                          {product.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#f52e26]">
                      {categories.find(
                        (category) => category.slug === product.category
                      )?.name ?? product.category}
                    </span>

                    <h3 className="mt-2 text-xl font-extrabold text-[#191919] transition-colors group-hover:text-[#f52e26]">
                      {product.name}
                    </h3>

                    <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                      {product.description}
                    </p>

                    {product.preparationTime && (
                      <p className="mt-2 text-xs text-gray-400">
                        Preparation: {product.preparationTime}
                      </p>
                    )}

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                      <div>
                        <span className="block text-xs text-gray-400">
                          Price
                        </span>

                        <span className="text-2xl font-extrabold text-[#f52e26]">
                          {formatPrice(finalPrice)}
                        </span>

                        {product.discountPrice &&
                          product.discountPrice < product.price && (
                            <span className="ml-2 text-sm text-gray-400 line-through">
                              {formatPrice(product.price)}
                            </span>
                          )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className="flex items-center gap-2 rounded-full bg-[#191919] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#f52e26]"
                      >
                        <Plus size={17} />
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Search size={38} className="mx-auto mb-4 text-gray-300" />

            <h3 className="text-xl font-bold text-[#191919]">
              No food found!
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-5 rounded-full bg-[#f52e26] px-6 py-3 text-sm font-bold text-white"
            >
              View All Food
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#fff5f3] py-16">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <span className="text-xs font-bold tracking-[3px] text-[#f52e26]">
            FRESH • TASTY • DELICIOUS
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#191919] md:text-5xl">
            Good Food Makes
            <span className="text-[#f52e26]">
              {" "}Every Day Better.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Your favorite flavors are just a few clicks away. Explore our menu
            and enjoy something delicious today.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f52e26] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#191919]"
          >
            Back To Home
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
