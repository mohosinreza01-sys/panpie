
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Check } from "lucide-react";
import { useState } from "react";

type Category = "all" | "donuts" | "pizza" | "drinks" | "sandwich";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Exclude<Category, "all">;
  badge?: string;
  options?: string[];
};

const categories: { label: string; value: Category }[] = [
  { label: "ALL", value: "all" },
  { label: "DONUTS", value: "donuts" },
  { label: "PIZZA", value: "pizza" },
  { label: "DRINKS", value: "drinks" },
  { label: "SANDWICH", value: "sandwich" },
];

const products: Product[] = [
  {
    id: 1,
    name: "Burger Kingo",
    description: "Gorgonzola, mozzarella, taleggio, red onions, capers, olives.",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=85",
    category: "pizza",
    badge: "POPULAR",
    options: ["Large", "Medium", "Small"],
  },
  {
    id: 2,
    name: "French Fries",
    description: "Crispy golden potato fries with a delicious seasoning.",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=85",
    category: "pizza",
    options: ["Double Crust", "Regular"],
  },
  {
    id: 3,
    name: "Pizza BBQ TinTin",
    description: "Fresh mozzarella, BBQ sauce, vegetables and delicious toppings.",
    price: "$18.00",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=85",
    category: "pizza",
  },
  {
    id: 4,
    name: "BBQ Pizza TinTin",
    description: "Premium cheese, fresh tomatoes, olives and special BBQ sauce.",
    price: "$20.00",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=85",
    category: "pizza",
    badge: "NEW",
    options: ["Large", "Medium"],
  },
  {
    id: 5,
    name: "Cold Drinks",
    description: "Refreshing chilled drinks for your perfect meal.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=85",
    category: "drinks",
  },
  {
  id: 6,
  name: "Club Sandwich",
  description: "Fresh bread, vegetables, cheese and delicious filling.",
  price: "$12.00",
  image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=85",
  category: "sandwich",
},
  {
    id: 7,
    name: "Chocolate Donuts",
    description: "Soft and fluffy donuts topped with rich chocolate.",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=85",
    category: "donuts",
  },
  {
    id: 8,
    name: "Sweet Donuts",
    description: "Delicious sweet donuts with premium toppings.",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=600&q=85",
    category: "donuts",
  },
];

export default function FoodMenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [cartCount, setCartCount] = useState(0);
  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleAddToCart = (id: number) => {
    setCartCount((count) => count + 1);
    setAddedProducts((previous) => [...previous, id]);
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-10 top-40 text-7xl opacity-10">
        🍔
      </div>

      <div className="pointer-events-none absolute right-16 top-44 text-7xl opacity-10">
        🍕
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[550px] text-center">
          <span className="text-sm font-extrabold uppercase tracking-[3px] text-[#f52e26]">
            Fresh From Panpie
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#171717] md:text-4xl lg:text-[42px]">
            We Offer People Best Way
            <span className="block">To Eat Best Food</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
            Discover our delicious collection of freshly prepared food
            made with love and quality ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-[#f52e26] text-white shadow-lg shadow-red-200"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-[#ffb900] hover:bg-[#ffb900] hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Cart Count */}
        <div className="mb-5 flex justify-end">
          <span className="rounded-full bg-[#fff5e2] px-4 py-2 text-xs font-bold text-gray-700">
            Cart Items: {cartCount}
          </span>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative mb-5 flex h-[210px] items-center justify-center rounded-xl bg-[#fffaf2]">

                {product.badge && (
                  <span
                    className={`absolute left-3 top-3 z-20 rounded-full px-3 py-1.5 text-[10px] font-bold ${
                      product.badge === "POPULAR"
                        ? "bg-[#f52e26] text-white"
                        : "bg-[#ffb900] text-black"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Circular Image */}
                <div className="relative aspect-square w-[175px] overflow-hidden rounded-full bg-gray-100 ring-4 ring-white shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 175px, (max-width: 1024px) 175px, 175px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Product Details */}
              <h3 className="text-xl font-extrabold text-gray-900">
                {product.name}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                {product.description}
              </p>

              {/* Price & Options */}
              <div className="mt-4 flex items-center justify-between gap-2">
                {product.options ? (
                  <select
                    aria-label={`Select ${product.name} size`}
                    className="max-w-[125px] rounded-full border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#f52e26]"
                  >
                    {product.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="text-xs font-medium text-gray-400">
                    Best choice
                  </span>
                )}

                <span className="text-xl font-extrabold text-[#f52e26]">
                  {product.price}
                </span>
              </div>

              {/* Add Button */}
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  aria-label={`Add ${product.name} to cart`}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-300 ${
                    addedProducts.includes(product.id)
                      ? "bg-green-500"
                      : "bg-[#ffb900] hover:bg-[#f52e26]"
                  }`}
                >
                  {addedProducts.includes(product.id) ? (
                    <Check size={18} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 rounded-full bg-[#ffb900] px-9 py-4 text-sm font-bold text-white shadow-lg shadow-yellow-200 transition-all duration-300 hover:bg-[#f52e26]"
          >
            VIEW FULL MENU
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
