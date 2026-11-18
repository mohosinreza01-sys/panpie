
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fffaf2] flex items-center justify-center px-5">
      <div className="max-w-xl w-full text-center">

        <p className="text-[#ef302b] font-bold uppercase tracking-[5px] text-sm mb-5">
          PANPIE RESTAURANT
        </p>

        <h1 className="text-[120px] md:text-[180px] leading-none font-extrabold text-[#ef302b]">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mt-5">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-7 max-w-md mx-auto">
          Looks like this page is not on our menu.
          The page you are looking for may have been moved
          or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ef302b] hover:bg-[#d92520] text-white px-8 py-4 rounded-full font-semibold transition"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 text-[#191919] hover:bg-white px-8 py-4 rounded-full font-semibold transition"
          >
            <ArrowLeft size={18} />
            Go Home
          </Link>

        </div>

       <p className="text-xs text-gray-400 mt-16">
  © 2026 Panpie. All rights reserved.
</p>

      </div>
    </main>
  );
}
