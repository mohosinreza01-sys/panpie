
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

type Category = "All" | "Pizza" | "Burger" | "Sandwich" | "Drinks" | "Desserts";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: string;
  category: Exclude<Category, "All">;
  badge?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with fresh lettuce and cheese.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=85",
    price: 12,
    rating: "4.9",
    category: "Burger",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Chicken Sandwich",
    description: "Fresh bread with delicious chicken and cheese filling.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&auto=format&fit=crop&q=85",
    price: 10,
    rating: "4.5",
    category: "Sandwich",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    description: "Classic pizza topped with cheese and pepperoni.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&auto=format&fit=crop&q=85",
    price: 15,
    rating: "4.8",
    category: "Pizza",
  },
  {
    id: 4,
    name: "French Fries",
    description: "Golden crispy fries with our special seasoning.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&auto=format&fit=crop&q=85",
    price: 6,
    rating: "4.7",
    category: "Desserts",
  },
  {
    id: 5,
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ chicken with mozzarella cheese.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=85",
    price: 16,
    rating: "4.9",
    category: "Pizza",
    badge: "POPULAR",
  },
  {
    id: 6,
    name: "Chocolate Donut",
    description: "Soft and fluffy donut with rich chocolate topping.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700&auto=format&fit=crop&q=85",
    price: 5,
    rating: "4.6",
    category: "Desserts",
  },
  {
    id: 7,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice, served chilled.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700&auto=format&fit=crop&q=85",
    price: 4,
    rating: "4.8",
    category: "Drinks",
  },
  {
    id: 8,
    name: "Chicken Burger",
    description: "Crispy chicken with fresh vegetables and sauce.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700&auto=format&fit=crop&q=85",
    price: 11,
    rating: "4.7",
    category: "Burger",
  },
  {
  id: 9,
  name: "Club Sandwich",
  description: "Fresh bread, vegetables, cheese and delicious filling.",
  image:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&auto=format&fit=crop&q=85",
  price: 12,
  rating: "4.8",
  category: "Sandwich",
},
];

const categories: Category[] = [
  "All",
  "Pizza",
  "Burger",
  "Sandwich",
  "Drinks",
  "Desserts",
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#191919]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600"
            alt="Pizza background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 bg-[#f52e26] text-white text-xs font-bold tracking-[3px] px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            OUR FOOD MENU
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Delicious Food,
            <span className="text-[#f52e26]"> Happy Moments.</span>
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto mt-6 text-sm md:text-base leading-7">
            Explore our delicious selection of freshly prepared meals.
            Made with love, served with passion.
          </p>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#f52e26]">Home</Link>
            <span>/</span>
            <span className="text-[#f52e26]">Menu</span>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[#f52e26] font-bold text-xs tracking-[3px] uppercase">
              Explore Our Menu
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#191919] mt-3">
              Our Delicious Food
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
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
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
              className="w-full h-13 border border-gray-200 rounded-xl pl-12 pr-4 outline-none focus:border-[#f52e26] transition"
            />
          </div>

          <div className="flex items-center gap-2 px-5 h-13 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600">
            <SlidersHorizontal size={17} />
            {filteredProducts.length} Items Found
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === category
                  ? "bg-[#f52e26] text-white shadow-lg shadow-red-200"
                  : "bg-[#f7f7f7] text-gray-600 hover:bg-[#191919] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-[0_15px_45px_rgba(0,0,0,0.09)] transition-all duration-300"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#f52e26] text-white text-[10px] font-extrabold tracking-wider px-4 py-2 rounded-full">
                      {product.badge}
                    </span>
                  )}

                  <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full flex items-center gap-1 shadow-sm">
                    <Star size={13} fill="#f5a623" color="#f5a623" />
                    <span className="text-xs font-bold">{product.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#f52e26]">
                    {product.category}
                  </span>

                  <h3 className="text-xl font-extrabold text-[#191919] mt-2 group-hover:text-[#f52e26] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mt-2 min-h-12">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-100 mt-5 pt-5">
                    <div>
                      <span className="text-xs text-gray-400 block">Price</span>
                      <span className="text-2xl font-extrabold text-[#f52e26]">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => setCartCount((count) => count + 1)}
                      aria-label={`Add ${product.name} to cart`}
                      className="flex items-center gap-2 bg-[#191919] text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-[#f52e26] transition-colors"
                    >
                      <Plus size={17} />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search size={38} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-[#191919]">
              No food found!
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Try another search or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 bg-[#f52e26] text-white px-6 py-3 rounded-full text-sm font-bold"
            >
              View All Food
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#fff5f3] py-16">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <span className="text-[#f52e26] font-bold text-xs tracking-[3px]">
            FRESH • TASTY • DELICIOUS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#191919] mt-4">
            Good Food Makes
            <span className="text-[#f52e26]"> Every Day Better.</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto leading-7">
            Your favorite flavors are just a few clicks away. Explore our menu
            and enjoy something delicious today.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 mt-8 bg-[#f52e26] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#191919] transition-colors"
          >
            Back To Home
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
