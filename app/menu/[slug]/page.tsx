
"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Minus,
  Plus,
  ShoppingBag,
  Star,
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
  ingredients?: string[];
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
};

const products = productsData as Product[];
const categories = categoriesData as Category[];

const formatPrice = (price: number) =>
  `৳${price.toLocaleString("en-BD")}`;

export default function MenuDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white">
          <p className="text-gray-500">Loading food details...</p>
        </div>
      }
    >
      <MenuDetailsContent />
    </Suspense>
  );
}

function MenuDetailsContent() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
        <h1 className="text-2xl font-extrabold text-[#191919] sm:text-3xl">
          Food Not Found
        </h1>

        <p className="mt-3 text-sm text-gray-500 sm:text-base">
          Sorry, this food item does not exist.
        </p>

        <Link
          href="/menu"
          className="mt-6 rounded-full bg-[#f52e26] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#191919]"
        >
          Back to Menu
        </Link>
      </main>
    );
  }

  const finalPrice = product.discountPrice ?? product.price;

  const categoryName =
    categories.find((item) => item.slug === product.category)?.name ??
    product.category;

  const gallery = Array.from(
    new Set([product.image, ...(product.images ?? [])])
  );

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id &&
        item.isAvailable !== false
    )
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: finalPrice,
        image: product.image,
        size: "Regular",
        color: "Default",
      });
    }

    setAdded(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white">

      {/* BREADCRUMB */}
      <div className="border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
            <Link href="/" className="transition hover:text-[#f52e26]">
              Home
            </Link>

            <span>/</span>

            <Link href="/menu" className="transition hover:text-[#f52e26]">
              Menu
            </Link>

            <span>/</span>

            <span className="max-w-[180px] truncate font-semibold text-[#f52e26] sm:max-w-none">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20">

        <Link
          href="/menu"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#f52e26] sm:mb-8"
        >
          <ArrowLeft size={17} />
          Back to Menu
        </Link>

        <div className="grid min-w-0 grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE GALLERY */}
          <div className="min-w-0">

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 sm:rounded-3xl">
              <Image
                src={selectedImage ?? product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />

              {product.isPopular && (
                <span className="absolute left-3 top-3 rounded-full bg-[#f52e26] px-4 py-2 text-[10px] font-bold tracking-wider text-white sm:left-5 sm:top-5 sm:text-xs">
                  POPULAR
                </span>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:mt-4 sm:gap-3">
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-square min-w-0 overflow-hidden rounded-lg border-2 transition sm:rounded-xl ${
                      (selectedImage ?? product.image) === image
                        ? "border-[#f52e26]"
                        : "border-transparent"
                    }`}
                    aria-label={`View product image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 25vw, 120px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="flex min-w-0 flex-col justify-center">

            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#f52e26] sm:text-xs">
              {categoryName}
            </span>

            <h1 className="mt-3 break-words text-2xl font-extrabold leading-tight text-[#191919] sm:mt-4 sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* RATING */}
            {product.rating && (
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5">
                <div className="flex items-center gap-1 rounded-full bg-[#fff5e5] px-3 py-2">
                  <Star size={15} fill="#f5a623" color="#f5a623" />

                  <span className="text-sm font-bold text-[#191919]">
                    {product.rating}
                  </span>
                </div>

                <span className="text-xs text-gray-400 sm:text-sm">
                  Customer Rating
                </span>
              </div>
            )}

            {/* PRICE */}
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3">
              <span className="text-2xl font-extrabold text-[#f52e26] sm:text-3xl">
                {formatPrice(finalPrice)}
              </span>

              {product.discountPrice &&
                product.discountPrice < product.price && (
                  <>
                    <span className="text-base text-gray-400 line-through sm:text-lg">
                      {formatPrice(product.price)}
                    </span>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold text-[#f52e26] sm:text-xs">
                      {Math.round(
                        ((product.price - product.discountPrice) /
                          product.price) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm leading-7 text-gray-500 sm:mt-7 sm:text-base sm:leading-8">
              {product.description}
            </p>

            {/* PREPARATION TIME */}
            {product.preparationTime && (
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#fff5f3] p-3 sm:mt-6 sm:p-4">
                <Clock className="shrink-0 text-[#f52e26]" size={21} />

                <div>
                  <p className="text-sm font-bold text-[#191919]">
                    Preparation Time
                  </p>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {product.preparationTime}
                  </p>
                </div>
              </div>
            )}

            {/* INGREDIENTS */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mt-6 sm:mt-8">
                <h3 className="text-base font-bold text-[#191919] sm:text-lg">
                  Ingredients
                </h3>

                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="rounded-full bg-gray-100 px-3 py-2 text-xs text-gray-600 sm:px-4 sm:text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* AVAILABILITY */}
            <div className="mt-6 flex items-center gap-2 sm:mt-7">
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                  product.isAvailable === false
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              />

              <span
                className={`text-xs font-semibold sm:text-sm ${
                  product.isAvailable === false
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {product.isAvailable === false
                  ? "Currently Unavailable"
                  : "Available to Order"}
              </span>
            </div>

            {/* QUANTITY + ADD TO CART */}
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">

              {/* QUANTITY SELECTOR */}
              <div className="flex h-12 w-full items-center justify-between rounded-full border border-gray-200 sm:h-14 sm:w-fit sm:justify-start">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  disabled={quantity <= 1}
                  className="flex h-12 w-12 items-center justify-center text-gray-600 disabled:opacity-30 sm:h-14"
                  aria-label="Decrease quantity"
                >
                  <Minus size={17} />
                </button>

                <span className="w-10 text-center text-sm font-bold text-[#191919]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.min(20, current + 1))
                  }
                  disabled={quantity >= 20}
                  className="flex h-12 w-12 items-center justify-center text-gray-600 disabled:opacity-30 sm:h-14"
                  aria-label="Increase quantity"
                >
                  <Plus size={17} />
                </button>
              </div>

              {/* ADD TO CART */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={product.isAvailable === false}
                className="flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#f52e26] px-4 text-sm font-bold text-white transition hover:bg-[#191919] disabled:cursor-not-allowed disabled:bg-gray-400 sm:h-14 sm:flex-1 sm:gap-3 sm:px-7 sm:text-base"
              >
                {added ? <Check size={19} /> : <ShoppingBag size={19} />}

                <span className="whitespace-nowrap">
                  {added ? "Added to Cart" : "Add To Cart"}
                </span>

                <span>•</span>

                <span className="whitespace-nowrap">
                  {formatPrice(finalPrice * quantity)}
                </span>
              </button>
            </div>

            <p className="mt-3 text-[11px] text-gray-400 sm:mt-4 sm:text-xs">
              Freshly prepared when you place your order.
            </p>

          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#fff5f3] py-12 sm:py-16 md:py-20">

          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

            <div className="mb-7 flex items-end justify-between gap-3 sm:mb-10">
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#f52e26] sm:text-xs">
                  You May Also Like
                </span>

                <h2 className="mt-2 text-2xl font-extrabold text-[#191919] sm:mt-3 sm:text-3xl md:text-4xl">
                  Related Food
                </h2>
              </div>

              <Link
                href="/menu"
                className="hidden shrink-0 items-center gap-2 text-sm font-bold text-[#f52e26] transition hover:text-[#191919] sm:flex"
              >
                View All
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/menu/${item.slug}`}
                  className="group min-w-0 overflow-hidden rounded-2xl bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="line-clamp-1 text-base font-bold text-[#191919] transition group-hover:text-[#f52e26] sm:text-lg">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="text-lg font-extrabold text-[#f52e26] sm:text-xl">
                        {formatPrice(item.discountPrice ?? item.price)}
                      </span>

                      <ArrowRight
                        size={19}
                        className="shrink-0 text-[#f52e26]"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/menu"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full border border-[#f52e26] py-3 text-sm font-bold text-[#f52e26] transition hover:bg-[#f52e26] hover:text-white sm:hidden"
            >
              View All Menu
              <ArrowRight size={17} />
            </Link>

          </div>
        </section>
      )}

    </main>
  );
}
