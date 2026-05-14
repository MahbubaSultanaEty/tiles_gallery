

import Image from "next/image";
import Link from "next/link";
import { TooltipArrow } from "@heroui/react";

export default function Banner() {
  return (
   <section className="mt-20 w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">

  {/* Background */}
  <div className="absolute inset-0">
    <style>
      {`
        @keyframes subtleZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}
    </style>

    <Image
      src="/BannerImg.png"   // ✅ FIXED (no /public)
      alt="Tiles background"
      fill
      priority
      className="object-cover"      
    />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/70"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between">

    {/* Left */}
    <div className="max-w-2xl text-left">

      <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
        Discover Your <br />
        <span className="text-green-500">Perfect Aesthetic</span>
      </h1>

      <p className="mt-6 text-gray-300 text-base md:text-lg max-w-md">
        Explore a curated collection of tiles designed to elevate your space —
        from modern minimal to timeless classics.
      </p>

      <Link
        href="/all-tiles"
        className="inline-block mt-8 px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg animate-bounce md:animate-none hover:scale-105 transition duration-300"
      >
        Browse Now →
      </Link>
    </div>

    {/* Right (optional decorative circle CTA) */}
    <div className="hidden md:flex items-center justify-center">
      <div className="w-40 h-40 rounded-full border bg-white/30 flex items-center justify-center text-white text-2xl animate-[spinPause_3s_linear_infinite] ">
  <Image
    width="50"
    height="50"
    src="https://img.icons8.com/ios-filled/50/medium-icons.png"
    alt="medium-icons"
  />
</div>
    </div>
  </div>

</section>
  );
}
