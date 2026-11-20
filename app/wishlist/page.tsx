
"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } =
    useWishlistStore();

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <main className="min-h-screen bg-[#f8f3e9] px-4 py-16">
      <div className="mx-auto container-custom">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#22201d]">
              My Wishlist
            </h1>
            <p className="mt-2 text-gray-500">
              {items.length} saved products
            </p>
          </div>

          {items.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-sm font-semibold text-red-500"
            >
              Clear All
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <Heart size={50} className="mx-auto text-gray-300" />
            <h2 className="mt-5 text-xl font-bold">
              Your wishlist is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Save your favourite food items here.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-block rounded-full bg-[#ef302b] px-7 py-3 font-semibold text-white"
            >
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-[#22201d]">
                    {product.name}
                  </h3>

                  <p className="mt-2 font-bold text-[#ef302b]">
                    ৳{product.price}
                  </p>

                  <div className="mt-5 flex gap-2">
                    <button
                      onClick={() => {
                        addToCart({
                          ...product,
                          size: "Regular",
                          color: "Default",
                        });
                      }}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ffb900] px-3 py-3 text-sm font-bold"
                    >
                      <ShoppingCart size={17} />
                      Add to Cart
                    </button>

                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="rounded-full border border-gray-200 p-3 text-red-500"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
