
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  PhoneCall,
  ChevronDown,
  ArrowUpRight,
  Clock,
  MapPin,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

import { useCartStore } from "@/store/cart-store";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Shop", href: "/shop" },
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "Our Chefs", href: "/chefs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<string | null>(null);

  // Zustand Cart Store
  const cartItems = useCartStore((state) => state.items);
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );
  const updateQuantity = useCartStore(
    (state) => state.updateQuantity
  );

  // Cart Calculations
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) =>
    `৳${price.toLocaleString("en-BD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#f8f3e9]">

        {/* TOP INFORMATION BAR */}
        <div className="hidden md:block bg-[#22201d] text-white">
          <div className="container-custom mx-auto px-6 h-10 flex items-center justify-between text-[11px] tracking-wide">

            <div className="flex items-center gap-6 text-white/75">
              <span className="flex items-center gap-2">
                <Clock size={13} className="text-[#ffb900]" />
                Mon - Sun: 10:00 AM - 11:00 PM
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-[#ffb900]" />
                Fresh Food, Fresh Mood
              </span>
            </div>

            <p className="font-semibold">
              FREE DELIVERY ON ORDERS OVER $50
            </p>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="border-b border-[#e9ddc8]">
          <div className="container-custom mx-auto px-5 lg:px-6">

            <div className="h-[88px] lg:h-[105px] flex items-center justify-between">

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-[#e5d9c6] hover:bg-[#ffb900] transition"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative group h-[105px] flex items-center"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.8px] hover:text-[#ef302b] transition-colors"
                    >
                      {item.label}

                      {item.children && (
                        <ChevronDown size={14} />
                      )}
                    </Link>

                    {/* DROPDOWN */}
                    {item.children && (
                      <div className="absolute top-[80%] left-0 w-56 bg-white rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.12)] border border-[#eee6d8] p-3 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#ef302b] hover:bg-[#fff8ed] rounded-lg transition"
                          >
                            {child.label}
                            <ArrowUpRight size={15} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* LOGO */}
              <Link
                href="/"
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5"
              >
                <span className="text-4xl lg:text-5xl">🍕</span>

                <div>
                  <h1 className="text-[29px] lg:text-[36px] font-black italic leading-none tracking-[-1.5px]">
                    Panpie
                  </h1>

                  <p className="text-[7px] lg:text-[8px] text-gray-500 font-extrabold tracking-[4px] text-center mt-1.5">
                    QUALITY FOOD
                  </p>
                </div>
              </Link>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-3 lg:gap-5">

                {/* SEARCH */}
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Toggle search"
                  className="hidden sm:flex w-10 h-10 items-center justify-center hover:text-[#ef302b] transition"
                >
                  {searchOpen ? (
                    <X size={21} />
                  ) : (
                    <Search size={21} />
                  )}
                </button>

                {/* HOTLINE */}
                <div className="hidden xl:flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#ef302b] text-white flex items-center justify-center">
                    <PhoneCall size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-gray-500 tracking-wider">
                      CALL FOR ORDER
                    </p>

                    <a
                      href="tel:+304779645"
                      className="text-[17px] font-extrabold"
                    >
                      +304-779-645
                    </a>
                  </div>
                </div>

                {/* CART BUTTON */}
                <button
                  onClick={() => setCartOpen(true)}
                  aria-label="Open shopping cart"
                  className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#ffb900] text-white flex items-center justify-center hover:bg-[#ef302b] transition-colors"
                >
                  <ShoppingCart size={20} />

                  <span className="absolute -top-1 -right-1 min-w-[19px] h-[19px] px-1 rounded-full bg-[#ef302b] border-2 border-[#f8f3e9] text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* SEARCH PANEL */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ${
            searchOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-3 pointer-events-none"
          }`}
        >
          <div className="max-w-[700px] mx-auto px-5 py-6">
            <form
              action="/shop"
              className="flex items-center gap-3 border-b-2 border-[#ffb900] pb-3"
            >
              <Search size={21} className="text-gray-400" />

              <input
                name="search"
                type="search"
                placeholder="Search your favourite food..."
                className="flex-1 outline-none text-sm"
              />

              <button
                type="submit"
                className="bg-[#ef302b] text-white px-5 py-2.5 rounded-full text-xs font-bold"
              >
                SEARCH
              </button>
            </form>
          </div>
        </div>

      </header>

      {/* =================================
          SIDE CART DRAWER
      ================================= */}

      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          cartOpen
            ? "visible"
            : "invisible pointer-events-none"
        }`}
      >

        {/* OVERLAY */}
        <button
          onClick={() => setCartOpen(false)}
          aria-label="Close cart"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            cartOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* CART PANEL */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[430px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            cartOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* CART HEADER */}
          <div className="h-[85px] px-6 flex items-center justify-between border-b border-gray-100 shrink-0">

            <div>
              <h2 className="text-xl font-black text-[#22201d]">
                Your Cart
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {cartCount} items in your cart
              </p>
            </div>

            <button
              onClick={() => setCartOpen(false)}
              aria-label="Close cart"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#ffb900] transition"
            >
              <X size={20} />
            </button>

          </div>

          {/* CART BODY */}
          <div className="flex-1 overflow-y-auto px-5 py-5">

            {cartItems.length === 0 ? (

              /* EMPTY CART */
              <div className="h-full flex flex-col items-center justify-center text-center">

                <div className="w-20 h-20 rounded-full bg-[#fff8ed] flex items-center justify-center mb-5">
                  <ShoppingCart
                    size={35}
                    className="text-[#ffb900]"
                  />
                </div>

                <h3 className="text-lg font-bold">
                  Your cart is empty
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Add some delicious products to your cart.
                </p>

                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-6 bg-[#ef302b] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-[#22201d] transition"
                >
                  Continue Shopping
                </button>

              </div>

            ) : (

              /* CART PRODUCTS */
              <div className="space-y-5">

                {cartItems.map((item) => (

                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="flex gap-4 pb-5 border-b border-gray-100"
                  >

                    {/* PRODUCT IMAGE */}
                    <div className="w-[95px] h-[105px] bg-gray-100 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="flex-1 min-w-0">

                      <div className="flex justify-between gap-2">

                        <h3 className="font-bold text-sm text-[#22201d]">
                          {item.name}
                        </h3>

                        <button
                          onClick={() =>
                            removeFromCart(
                              item.id,
                              item.size,
                              item.color
                            )
                          }
                          aria-label={`Remove ${item.name}`}
                          className="text-gray-400 hover:text-[#ef302b] transition shrink-0"
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                      <p className="text-xs text-gray-500 mt-2">
                        Size: {item.size} / Color: {item.color}
                      </p>

                      <p className="font-extrabold text-[#ef302b] mt-2">
                        {formatPrice(item.price)}
                      </p>

                      {/* QUANTITY CONTROL */}
                      <div className="flex items-center justify-between mt-3">

                        <div className="flex items-center border border-gray-200 rounded-md">

                          <button
                            disabled={item.quantity <= 1}
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            aria-label="Decrease quantity"
                            className="w-8 h-8 flex items-center justify-center disabled:opacity-30"
                          >
                            <Minus size={13} />
                          </button>

                          <span className="w-8 text-center text-sm font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            aria-label="Increase quantity"
                            className="w-8 h-8 flex items-center justify-center"
                          >
                            <Plus size={13} />
                          </button>

                        </div>

                        <span className="text-sm font-bold">
                          {formatPrice(item.price * item.quantity)}
                        </span>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* CART FOOTER */}
          {cartItems.length > 0 && (

            <div className="border-t border-gray-100 p-6 bg-[#f8f3e9] shrink-0">

              <div className="flex justify-between items-center mb-2">

                <span className="text-sm text-gray-600 font-medium">
                  Subtotal
                </span>

                <span className="text-xl font-black text-[#22201d]">
                  {formatPrice(subtotal)}
                </span>

              </div>

              <p className="text-xs text-gray-500 mb-5">
                Shipping and taxes calculated at checkout.
              </p>

              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="w-full h-12 bg-[#ef302b] text-white rounded-full flex items-center justify-center font-bold text-sm hover:bg-[#22201d] transition"
              >
                PROCEED TO CHECKOUT
              </Link>

              <button
                onClick={() => setCartOpen(false)}
                className="w-full mt-3 text-sm font-bold text-gray-600 hover:text-[#ef302b] transition"
              >
                Continue Shopping
              </button>

            </div>

          )}

        </div>
      </div>

      {/* =================================
          MOBILE NAVIGATION DRAWER
      ================================= */}

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          menuOpen
            ? "visible"
            : "invisible pointer-events-none"
        }`}
      >

        {/* OVERLAY */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`relative w-[85%] max-w-[380px] h-full bg-[#f8f3e9] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          {/* DRAWER HEADER */}
          <div className="h-[90px] px-6 flex items-center justify-between border-b border-[#e9ddc8]">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="text-4xl">🍕</span>

              <div>
                <h2 className="text-3xl font-black italic leading-none">
                  Panpie
                </h2>

                <p className="text-[7px] text-gray-500 font-bold tracking-[3px] text-center mt-1">
                  QUALITY FOOD
                </p>
              </div>
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full border border-[#e5d9c6] flex items-center justify-center hover:bg-[#ffb900] transition"
            >
              <X size={20} />
            </button>

          </div>

          {/* DRAWER BODY */}
          <div className="px-6 py-7 overflow-y-auto h-[calc(100%-90px)]">

            <p className="text-[10px] font-extrabold tracking-[3px] text-gray-400 mb-5">
              NAVIGATION
            </p>

            <nav className="flex flex-col">

              {navItems.map((item) => (

                <div key={item.label}>

                  <div className="flex items-center justify-between border-b border-[#e9ddc8]">

                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="py-4 text-[15px] font-bold uppercase tracking-wide hover:text-[#ef302b] transition"
                    >
                      {item.label}
                    </Link>

                    {item.children && (

                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={
                          activeDropdown === item.label
                        }
                        className="w-10 h-10 flex items-center justify-center"
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform ${
                            activeDropdown === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                    )}

                  </div>

                  {/* MOBILE SUBMENU */}
                  {item.children && (

                    <div
                      className={`grid transition-all duration-300 ${
                        activeDropdown === item.label
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="pl-5 py-2 flex flex-col gap-1">

                          {item.children.map((child) => (

                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="py-3 text-sm font-medium text-gray-600 hover:text-[#ef302b]"
                            >
                              {child.label}
                            </Link>

                          ))}

                        </div>

                      </div>

                    </div>

                  )}

                </div>

              ))}

            </nav>

            {/* MOBILE CART LINK */}
            <button
              onClick={() => {
                setMenuOpen(false);
                setCartOpen(true);
              }}
              className="w-full mt-7 p-4 bg-[#ffb900] rounded-xl flex items-center justify-between font-bold"
            >
              <span className="flex items-center gap-3">
                <ShoppingCart size={19} />
                View Shopping Cart
              </span>

              <span className="bg-[#ef302b] text-white text-xs px-2.5 py-1 rounded-full">
                {cartCount}
              </span>
            </button>

            {/* CONTACT CARD */}
            <div className="mt-8 p-5 bg-white rounded-2xl border border-[#eee3d1]">

              <p className="text-[10px] font-bold tracking-[2px] text-gray-400 mb-3">
                NEED ASSISTANCE?
              </p>

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 bg-[#ef302b] rounded-full text-white flex items-center justify-center">
                  <PhoneCall size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Call us anytime
                  </p>

                  <a
                    href="tel:+304779645"
                    className="text-lg font-extrabold"
                  >
                    +304-779-645
                  </a>
                </div>

              </div>

            </div>

            <p className="mt-8 text-center text-[10px] text-gray-400 tracking-[2px] font-semibold">
              FRESH FOOD. HAPPY MOOD.
            </p>

          </div>
        </div>
      </div>

    </>
  );
}
