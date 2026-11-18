
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  ShoppingBag,
  CreditCard,
  Banknote,
  ShieldCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  area: string;
  notes: string;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    area: "",
    notes: "",
  });

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("panpie-cart");
      const parsed = savedCart ? JSON.parse(savedCart) : [];
      setCart(Array.isArray(parsed) ? parsed : []);
    } catch {
      setCart([]);
    }

    setLoaded(true);
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  }, [cart]);

  const deliveryFee = subtotal >= 1000 ? 0 : 60;
  const total = subtotal + deliveryFee;

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#191919] outline-none transition placeholder:text-gray-400 focus:border-[#f52e26] focus:ring-2 focus:ring-red-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#191919]";

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!cart.length) return;

    const order = {
      customer: formData,
      items: cart,
      subtotal,
      deliveryFee,
      total,
      paymentMethod,
      createdAt: new Date().toISOString(),
    };

    console.log("Panpie Order:", order);

    alert(
      "Checkout demo complete. Connect a backend to save and confirm this order."
    );
  };

  if (!loaded) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-sm text-gray-500">Loading checkout...</p>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-[65vh] bg-white flex items-center justify-center px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-[#f52e26]">
            <ShoppingBag size={34} />
          </div>

          <h1 className="text-3xl font-bold text-[#191919]">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Add your favourite food before proceeding to checkout.
          </p>

          <Link
            href="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f52e26] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#d9211b]"
          >
            Explore Shop <ArrowRight size={17} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Page Header */}
      <section className="border-b border-gray-100 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="transition hover:text-[#f52e26]">
              Home
            </Link>
            <span>/</span>
            <Link href="/cart" className="transition hover:text-[#f52e26]">
              Cart
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#f52e26]">Checkout</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#191919] md:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Just a few more steps to enjoy your favourite food.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5">
        <Link
          href="/cart"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#f52e26]"
        >
          <ArrowLeft size={17} />
          Back to Cart
        </Link>

        <form
          onSubmit={handleSubmit}
          className="mt-7 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_400px]"
        >
          {/* Left Column */}
          <div className="space-y-7">
            {/* Delivery Details */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#f52e26]">
                  <MapPin size={21} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#191919] md:text-xl">
                    Delivery Information
                  </h2>
                  <p className="mt-1 text-xs text-gray-500 md:text-sm">
                    Enter your delivery details below.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      handleChange("firstName", e.target.value)
                    }
                    placeholder="First name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    value={formData.lastName}
                    onChange={(e) =>
                      handleChange("lastName", e.target.value)
                    }
                    placeholder="Last name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>Full Address *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) =>
                      handleChange("address", e.target.value)
                    }
                    placeholder="House, road, apartment, street..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className={labelClass}>City *</label>
                  <input
                    required
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    placeholder="Your city"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Area / District *</label>
                  <input
                    required
                    value={formData.area}
                    onChange={(e) => handleChange("area", e.target.value)}
                    placeholder="Your area"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Order Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    placeholder="Special instructions for your order..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#191919] md:text-xl">
                  Payment Method
                </h2>
                <p className="mt-1 text-xs text-gray-500 md:text-sm">
                  Choose how you would like to pay.
                </p>
              </div>

              <div className="space-y-3">
                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "cod"
                      ? "border-[#f52e26] bg-red-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="h-4 w-4 accent-[#f52e26]"
                  />

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#f52e26]">
                    <Banknote size={23} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#191919]">
                      Cash on Delivery
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Pay when your order arrives.
                    </p>
                  </div>

                  {paymentMethod === "cod" && (
                    <CheckCircle2 size={20} className="text-[#f52e26]" />
                  )}
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "online"
                      ? "border-[#f52e26] bg-red-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                    className="h-4 w-4 accent-[#f52e26]"
                  />

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#f52e26]">
                    <CreditCard size={22} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#191919]">
                      Online Payment
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Online payment gateway integration required.
                    </p>
                  </div>

                  {paymentMethod === "online" && (
                    <CheckCircle2 size={20} className="text-[#f52e26]" />
                  )}
                </label>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7 lg:sticky lg:top-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#191919] md:text-xl">
                Order Summary
              </h2>
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#f52e26]">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} Items
              </span>
            </div>

            <div className="mt-6 max-h-[340px] space-y-5 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="68px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-[#191919]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#f52e26]">
                      ৳{(item.price * item.quantity).toLocaleString("en-BD")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-6 border-t border-dashed border-gray-200" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-semibold text-[#191919]">
                  ৳{subtotal.toLocaleString("en-BD")}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span className="font-semibold text-[#191919]">
                  {deliveryFee === 0 ? "Free" : `৳${deliveryFee}`}
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-gray-200" />

            <div className="flex items-center justify-between">
              <span className="font-bold text-[#191919]">Total Amount</span>
              <span className="text-2xl font-extrabold text-[#f52e26]">
                ৳{total.toLocaleString("en-BD")}
              </span>
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#f52e26] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#d9211b]"
            >
              Place Order <ArrowRight size={18} />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={16} className="text-green-600" />
              Safe & Secure Checkout
            </div>

            <div className="mt-5 flex gap-3 rounded-xl bg-[#fafafa] p-4">
              <Truck size={22} className="shrink-0 text-[#f52e26]" />
              <p className="text-xs leading-5 text-gray-500">
                Free delivery on orders above ৳1,000.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}
