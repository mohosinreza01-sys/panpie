
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { useOrderStore } from "@/store/order-store";

export default function CheckoutPage() {
  const router = useRouter();

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const addOrder = useOrderStore((state) => state.addOrder);

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
    deliveryArea: "inside",
  });

  const [loading, setLoading] = useState(false);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge =
    form.deliveryArea === "inside" ? 60 : 120;

  const total = subtotal + deliveryCharge;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!items.length || loading) return;

    setLoading(true);

    const orderId = `PAN-${Date.now()}`;

    addOrder({
      id: orderId,
      customerName: form.customerName,
      phone: form.phone,
      address: form.address,
      deliveryArea: form.deliveryArea,
      paymentMethod: "Cash on Delivery",
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: item.quantity,
      })),
      subtotal,
      deliveryCharge,
      total,
      status: "Pending",
      createdAt: new Date().toISOString(),
    });

    clearCart();

    router.push(`/order-success/${orderId}`);
  };

  if (!items.length) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="mt-2 text-gray-500">
          Add some delicious food before checkout.
        </p>
        <Link
          href="/shop"
          className="mt-6 rounded-full bg-[#f52e26] px-7 py-3 font-bold text-white"
        >
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f3e9] px-5 py-16">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10">
          <span className="text-sm font-bold uppercase tracking-widest text-[#f52e26]">
            Panpie Checkout
          </span>
          <h1 className="mt-2 text-3xl font-black text-[#22201d] md:text-4xl">
            Complete Your Order
          </h1>
        </div>

        <form
          onSubmit={handlePlaceOrder}
          className="grid gap-8 lg:grid-cols-3"
        >

          {/* Customer Information */}
          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">
                Delivery Information
              </h2>

              <div className="space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={form.customerName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#f52e26]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    pattern="01[3-9][0-9]{8}"
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#f52e26]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Delivery Area
                  </label>
                  <select
                    name="deliveryArea"
                    value={form.deliveryArea}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#f52e26]"
                  >
                    <option value="inside">
                      Inside Dhaka — ৳60
                    </option>
                    <option value="outside">
                      Outside Dhaka — ৳120
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Delivery Address
                  </label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="House, Road, Area, District..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#f52e26]"
                  />
                </div>

              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold">
                Payment Method
              </h2>

              <div className="rounded-xl border-2 border-[#f52e26] bg-red-50 p-4">
                <p className="font-bold text-[#22201d]">
                  Cash on Delivery
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Pay when your food arrives.
                </p>
              </div>
            </div>

          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">
                Order Summary
              </h2>

              <div className="max-h-[300px] space-y-4 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="flex gap-3"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.size} · Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 font-bold">
                      ৳{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-6 space-y-3 border-t border-gray-100 pt-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-semibold">৳{subtotal}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery Charge</span>
                  <span className="font-semibold">৳{deliveryCharge}</span>
                </div>

                <div className="flex justify-between border-t pt-4 text-lg font-black">
                  <span>Total</span>
                  <span className="text-[#f52e26]">৳{total}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#f52e26] py-4 font-bold text-white transition hover:bg-[#22201d] disabled:opacity-50"
              >
                {loading ? "Processing..." : "PLACE ORDER"}
              </button>

              <p className="mt-4 text-center text-xs text-gray-400">
                Your order will be saved on this browser.
              </p>
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}
