
"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  CheckCircle2,
  Package,
  MapPin,
  Phone,
  CreditCard,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import { useOrderStore } from "@/store/order-store";

// Main Page with Suspense
export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8f3e9] flex items-center justify-center">
          <p className="text-[#22201d] font-medium">
            Loading order details...
          </p>
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}

// Order Success Content
function OrderSuccessContent() {
  const params = useParams<{ id: string }>();
  const orderId = params.id;

  const [hydrated, setHydrated] = useState(false);

  const order = useOrderStore((state) =>
    state.orders.find((item) => item.id === orderId)
  );

  // Wait for LocalStorage hydration
  useEffect(() => {
    const unsubscribe =
      useOrderStore.persist.onFinishHydration(() => {
        setHydrated(true);
      });

    if (useOrderStore.persist.hasHydrated()) {
      setHydrated(true);
    }

    return unsubscribe;
  }, []);

  // Loading
  if (!hydrated) {
    return (
      <div className="min-h-screen bg-[#f8f3e9] flex items-center justify-center">
        <p className="text-[#22201d] font-medium">
          Loading order details...
        </p>
      </div>
    );
  }

  // Order Not Found
  if (!order) {
    return (
      <div className="min-h-screen bg-[#f8f3e9] flex flex-col items-center justify-center px-5 text-center">
        <Package
          size={55}
          className="text-gray-400 mb-4"
        />

        <h1 className="text-2xl font-bold text-[#22201d]">
          Order Not Found
        </h1>

        <p className="text-gray-500 mt-2">
          We couldn't find this order in your browser.
        </p>

        <Link
          href="/shop"
          className="mt-6 bg-[#ffb900] px-7 py-3 rounded-full font-bold"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f3e9] py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Success Message */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2
              size={48}
              className="text-green-600"
            />
          </div>

          <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">
            Order Confirmed
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#22201d] mt-3">
            Thank You For Your Order!
          </h1>

          <p className="text-gray-600 mt-3">
            Your order has been placed successfully.
          </p>

          {/* Order Number */}
          <div className="inline-block mt-5 bg-white px-5 py-3 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500">
              Order Number
            </p>

            <p className="font-bold text-[#22201d] mt-1">
              {order.id}
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl p-5 md:p-7 shadow-sm">

          <div className="flex items-center justify-between border-b border-gray-100 pb-5">
            <h2 className="text-xl font-bold text-[#22201d]">
              Order Details
            </h2>

            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-2 rounded-full">
              {order.status}
            </span>
          </div>

          {/* Products */}
          <div className="py-6 space-y-5">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4"
              >
                <div className="relative w-20 h-20 bg-[#f8f3e9] rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#22201d]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="font-bold text-[#22201d] shrink-0">
                  ৳
                  {(item.price * item.quantity).toLocaleString("en-BD")}
                </p>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="border-t border-gray-100 pt-5 space-y-3">

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>
                ৳{order.subtotal.toLocaleString("en-BD")}
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Delivery Charge</span>
              <span>
                ৳{order.deliveryCharge.toLocaleString("en-BD")}
              </span>
            </div>

            <div className="flex justify-between text-xl font-extrabold text-[#22201d] border-t border-gray-100 pt-4">
              <span>Total</span>
              <span>
                ৳{order.total.toLocaleString("en-BD")}
              </span>
            </div>

          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-2xl p-5 md:p-7 mt-5 shadow-sm">

          <h2 className="text-xl font-bold text-[#22201d] mb-6">
            Delivery Information
          </h2>

          <div className="space-y-5">

            {/* Customer Name */}
            <div className="flex gap-3">
              <Package className="text-[#f52e26] shrink-0" />

              <div>
                <p className="font-semibold text-[#22201d]">
                  Customer Name
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {order.customerName}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <Phone className="text-[#f52e26] shrink-0" />

              <div>
                <p className="font-semibold text-[#22201d]">
                  Phone Number
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {order.phone}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-3">
              <MapPin className="text-[#f52e26] shrink-0" />

              <div>
                <p className="font-semibold text-[#22201d]">
                  Delivery Address
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {order.address}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {order.deliveryArea === "inside"
                    ? "Inside Dhaka"
                    : "Outside Dhaka"}
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex gap-3">
              <CreditCard className="text-[#f52e26] shrink-0" />

              <div>
                <p className="font-semibold text-[#22201d]">
                  Payment Method
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {order.paymentMethod}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            href="/shop"
            className="flex-1 flex items-center justify-center gap-2 bg-[#ffb900] hover:bg-[#f0ad00] text-[#22201d] font-bold py-4 rounded-full transition"
          >
            <ShoppingBag size={19} />
            Continue Shopping
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/"
            className="flex-1 flex items-center justify-center border-2 border-[#22201d] text-[#22201d] font-bold py-4 rounded-full hover:bg-[#22201d] hover:text-white transition"
          >
            Back to Home
          </Link>

        </div>

      </div>
    </main>
  );
}
