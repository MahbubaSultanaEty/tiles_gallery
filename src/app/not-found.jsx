'use client';
import Link from "next/link";
import Lottie from "lottie-react";
import { notFound } from "next/navigation";
import notFoundaAnimation from "@/assets/notFound.json";

const NotFoundPage = () => {
  return (
    <div className=" mt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 px-4">
      <div className="text-center max-w-md">
        
        {/* Animation */}
        <div className="w-72 mx-auto">
          <Lottie animationData={notFoundaAnimation} loop={true} />
        </div>

        {/* Text */}
        <h1 className="text-5xl font-black text-black mt-2">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 leading-relaxed">
          Looks like the page you are trying to visit does not exist
          or has been moved somewhere else.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition duration-300"
          >
            Back Home
          </Link>

          <Link
            href="/tiles"
            className="border-2 border-black px-6 py-3 rounded-xl font-medium hover:bg-black hover:text-white transition duration-300"
          >
            Explore Tiles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;