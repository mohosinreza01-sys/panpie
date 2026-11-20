
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Star,
  Heart,
  SlidersHorizontal,
  ArrowRight,
  Plus,
  X,
  ChefHat,
} from "lucide-react";

import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import { useCartStore } from "@/store/cart-store";

type Category = {
  id: string;
  name: string;
  slug: string;
  image?: string;
};

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
  rating?: number;
  isFeatured?: boolean;
  isPopular?: boolean;
  isAvailable?: boolean;
  preparationTime?: string;
};

type SortOption = "featured" | "low" | "high" | "rating";

const products = productsData as Product[];
const categories = categoriesData as Category[];

const formatPrice = (price: number) =>
  `৳${price.toLocaleString("en-BD")}`;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Zustand Cart Store
  const cartItems = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch &&
        product.isAvailable !== false
      );
    });

    if (sort === "low") {
      result = [...result].sort(
        (a, b) =>
          (a.discountPrice ?? a.price) -
          (b.discountPrice ?? b.price)
      );
    } else if (sort === "high") {
      result = [...result].sort(
        (a, b) =>
          (b.discountPrice ?? b.price) -
          (a.discountPrice ?? a.price)
      );
    } else if (sort === "rating") {
      result = [...result].sort(
        (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
      );
    } else {
      result = [...result].sort(
        (a, b) =>
          Number(b.isFeatured) - Number(a.isFeatured)
      );
    }

    return result;
  }, [activeCategory, search, sort]);

  // Add to Cart
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

  // Wishlist
  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-white text-[#191919]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#191919] py-20 md:py-28">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#f52e26]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#ff554e]">
            <ChefHat size={17} />
            PANPIE FOOD COLLECTION
          </span>

          <h1 className="mb-5 text-4xl font-extrabold text-white md:text-6xl">
            Explore Our{" "}
            <span className="text-[#f52e26]">Shop</span>
          </h1>

          <p className="mx-auto max-w-2xl leading-8 text-white/60">
            Discover delicious food made with fresh ingredients.
            Find your favourites and enjoy every bite.
          </p>

          <div className="mt-8 flex justify-center gap-3 text-sm text-white/70">
            <Link href="/" className="hover:text-[#f52e26]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#f52e26]">Shop</span>
          </div>
        </div>
      </section>

      {/* SHOP CONTENT */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* TOP BAR */}
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
                OUR COLLECTION
              </span>

              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Delicious Food Menu
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">

              {/* SEARCH */}
              <div className="relative min-w-0 flex-1 sm:w-64 sm:flex-none">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search food..."
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#f52e26]"
                />
              </div>

              {/* SORT */}
              <div className="relative">
                <SlidersHorizontal
                  size={17}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value as SortOption)
                  }
                  className="appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-8 text-sm outline-none focus:border-[#f52e26]"
                >
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {/* CART */}
              <Link
                href="/cart"
                className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#f52e26] text-white transition hover:bg-[#191919]"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={21} />

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#191919] px-1 text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition ${
                activeCategory === "all"
                  ? "bg-[#f52e26] text-white shadow-lg shadow-red-200"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-[#f52e26] hover:text-[#f52e26]"
              }`}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeCategory === category.slug
                    ? "bg-[#f52e26] text-white shadow-lg shadow-red-200"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#f52e26] hover:text-[#f52e26]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* PRODUCT COUNT */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-bold text-[#191919]">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="flex items-center gap-1 text-sm font-semibold text-[#f52e26]"
              >
                Clear search <X size={15} />
              </button>
            )}
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const finalPrice =
                  product.discountPrice ?? product.price;

                const categoryName =
                  categories.find(
                    (category) => category.slug === product.category
                  )?.name ?? product.category;

                return (
                  <div
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(0,0,0,0.09)]"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      {(product.isPopular || product.isFeatured) && (
                        <span className="absolute left-4 top-4 rounded-full bg-[#f52e26] px-3 py-2 text-[10px] font-bold tracking-wider text-white">
                          {product.isPopular ? "POPULAR" : "FEATURED"}
                        </span>
                      )}

                      {/* WISHLIST */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Toggle wishlist"
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:text-[#f52e26]"
                      >
                        <Heart
                          size={19}
                          fill={
                            wishlist.includes(product.id)
                              ? "#f52e26"
                              : "none"
                          }
                          className={
                            wishlist.includes(product.id)
                              ? "text-[#f52e26]"
                              : ""
                          }
                        />
                      </button>
                    </div>

                    {/* DETAILS */}
                    <div className="p-5">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#f52e26]">
                          {categoryName}
                        </span>

                        {product.rating && (
                          <span className="flex items-center gap-1 text-xs font-semibold text-gray-600">
                            <Star
                              size={14}
                              fill="#fbbf24"
                              className="text-yellow-400"
                            />
                            {product.rating}
                          </span>
                        )}
                      </div>

                      <h3 className="mb-2 text-lg font-extrabold transition group-hover:text-[#f52e26]">
                        {product.name}
                      </h3>

                      <p className="mb-3 min-h-[44px] text-sm leading-6 text-gray-500">
                        {product.description}
                      </p>

                      {product.preparationTime && (
                        <p className="mb-4 text-xs text-gray-400">
                          Preparation: {product.preparationTime}
                        </p>
                      )}

                      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div>
                          <span className="text-xl font-extrabold text-[#f52e26]">
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
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0ef] text-[#f52e26] transition hover:bg-[#f52e26] hover:text-white"
                          aria-label={`Add ${product.name} to cart`}
                          disabled={product.isAvailable === false}
                        >
                          <Plus size={21} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center">
              <Search size={35} className="mx-auto mb-4 text-gray-300" />

              <h3 className="mb-2 text-xl font-bold">
                No Products Found
              </h3>

              <p className="mb-5 text-sm text-gray-500">
                Try another search or select a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                  setSort("featured");
                }}
                className="rounded-xl bg-[#f52e26] px-6 py-3 text-sm font-bold text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#191919] px-7 py-14 md:px-14 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f52e26]/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
                TASTE SOMETHING SPECIAL
              </span>

              <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Good Food.
                <span className="text-[#f52e26]">
                  {" "}Good Mood.
                </span>
              </h2>

              <p className="leading-8 text-white/60">
                Explore our delicious collection and discover your
                next favourite meal at Panpie.
              </p>
            </div>

            <Link
              href="/menu"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#f52e26] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#191919]"
            >
              View Full Menu
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
