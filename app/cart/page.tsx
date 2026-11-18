
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingCart,
  ArrowLeft,
  Tag,
  Truck,
  ShieldCheck,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

 useEffect(() => {
  const savedCart = localStorage.getItem("panpie-cart");

  if (savedCart) {
    try {
      const parsedCart = JSON.parse(savedCart);

      if (Array.isArray(parsedCart)) {
        setCart(parsedCart);
      }
    } catch (error) {
      console.error("Cart loading error:", error);
      setCart([]);
    }
  }

  setLoaded(true);
}, []);




const updateCart = (updatedCart: CartItem[]) => {
  setCart(updatedCart);

  localStorage.setItem(
    "panpie-cart",
    JSON.stringify(updatedCart)
  );
};

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  const removeItem = (id: number) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    updateCart([]);
  };

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const deliveryCharge = subtotal === 0 ? 0 : subtotal >= 1000 ? 0 : 60;
  const total = subtotal + deliveryCharge;

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!loaded) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm font-semibold text-gray-500">
          Loading your cart...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#191919]">

      {/* HERO */}
      <section className="bg-[#191919] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-[#f52e26]">
            YOUR SHOPPING BAG
          </span>

          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Shopping <span className="text-[#f52e26]">Cart</span>
          </h1>

          <p className="mt-4 text-white/60">
            Review your selected items before checkout.
          </p>

          <div className="mt-6 flex gap-3 text-sm text-white/60">
            <Link href="/" className="hover:text-[#f52e26]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#f52e26]">Cart</span>
          </div>
        </div>
      </section>

      {/* CART CONTENT */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {cart.length === 0 ? (
            /* EMPTY CART */
            <div className="rounded-3xl border border-gray-100 bg-white px-6 py-20 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#fff0ef] text-[#f52e26]">
                <ShoppingBag size={42} />
              </div>

              <h2 className="mb-3 text-2xl font-extrabold md:text-3xl">
                Your Cart Is Empty!
              </h2>

              <p className="mx-auto mb-8 max-w-md leading-7 text-gray-500">
                Looks like you haven't added anything to your cart yet.
                Explore our delicious food collection.
              </p>

              <Link
                href="/shop"
                className="inline-flex items-center gap-3 rounded-xl bg-[#f52e26] px-8 py-4 font-bold text-white transition hover:bg-[#191919]"
              >
                <ShoppingCart size={19} />
                Explore Shop
                <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <>
              {/* PAGE HEADING */}
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-extrabold md:text-3xl">
                    Your Selected Items
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
                  </p>
                </div>

                <button
                  onClick={clearCart}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#f52e26]"
                >
                  <Trash2 size={17} />
                  Clear Cart
                </button>
              </div>

              <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">

                {/* CART ITEMS */}
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
                    >
                      {/* PRODUCT IMAGE */}
                      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-32">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </div>

                      {/* PRODUCT DETAILS */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-extrabold">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          Price: ৳{item.price}
                        </p>

                        <p className="mt-2 font-bold text-[#f52e26]">
                          ৳{item.price * item.quantity}
                        </p>
                      </div>

                      {/* QUANTITY */}
                      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                        <div className="flex items-center rounded-xl border border-gray-200">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label="Decrease quantity"
                            className="flex h-10 w-10 items-center justify-center text-gray-600 transition hover:text-[#f52e26]"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="w-8 text-center text-sm font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                            className="flex h-10 w-10 items-center justify-center text-gray-600 transition hover:text-[#f52e26]"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#f52e26]"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* CONTINUE SHOPPING */}
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 pt-4 text-sm font-bold text-[#f52e26] transition hover:text-[#191919]"
                  >
                    <ArrowLeft size={17} />
                    Continue Shopping
                  </Link>
                </div>

                {/* ORDER SUMMARY */}
                <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-7 lg:sticky lg:top-24">
                  <h3 className="mb-6 text-xl font-extrabold">
                    Order Summary
                  </h3>

                  <div className="space-y-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Subtotal ({totalItems} items)
                      </span>

                      <span className="font-bold">
                        ৳{subtotal}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Delivery Charge
                      </span>

                      <span className="font-bold">
                        {deliveryCharge === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `৳${deliveryCharge}`
                        )}
                      </span>
                    </div>

                    {subtotal > 0 && subtotal < 1000 && (
                      <div className="rounded-xl bg-[#fff0ef] p-3 text-xs leading-6 text-[#f52e26]">
                        Add ৳{1000 - subtotal} more to get free delivery!
                      </div>
                    )}

                    {subtotal >= 1000 && (
                      <div className="rounded-xl bg-green-50 p-3 text-xs text-green-700">
                        Congratulations! You have unlocked free delivery.
                      </div>
                    )}

                    <div className="border-t border-dashed border-gray-200 pt-5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Total Amount</span>

                        <span className="text-2xl font-extrabold text-[#f52e26]">
                          ৳{total}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CHECKOUT */}
                  <Link
                    href="/checkout"
                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#f52e26] px-6 py-4 font-bold text-white transition hover:bg-[#191919]"
                  >
                    Proceed to Checkout
                    <ArrowRight size={19} />
                  </Link>

                  {/* TRUST */}
                  <div className="mt-7 space-y-4 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <Truck size={19} className="text-[#f52e26]" />
                      Convenient Food Delivery
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <ShieldCheck size={19} className="text-[#f52e26]" />
                      Secure Checkout
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <Tag size={19} className="text-[#f52e26]" />
                      Freshly Prepared Food
                    </div>
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
