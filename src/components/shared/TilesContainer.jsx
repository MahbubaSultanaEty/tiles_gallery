"use client";

import { Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TilesContainer = ({ tiles }) => {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12 ">
        <Input
          size="lg"
          radius="full"
          placeholder="Search tiles ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          classNames={{
            inputWrapper:
              "h-16 bg-white shadow-xl border border-gray-200 hover:border-primary",
            input: "text-black text-base px-2",
          }}
        />
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTiles.map((tile) => (
          <div
            key={tile.id}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-primary/30 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-64 md:h-72 overflow-hidden">
              <Image
                src={tile.image1}
                alt={tile.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs md:text-sm font-medium capitalize">
                  {tile.category}
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tile.inStock
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {tile.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition duration-300">
                {tile.title}
              </h2>

              <p className="text-gray-500 text-sm md:text-base mt-3 line-clamp-2 leading-relaxed">
                {tile.description}
              </p>

              <div className="mt-5 space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Material</span>

                  <span className="font-medium text-gray-700">
                    {tile.material}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Size</span>

                  <span className="font-medium text-gray-700">
                    {tile.dimensions}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">
                    Starting From
                  </p>

                  <h3 className="text-2xl font-bold text-primary">
                    ${tile.price}
                  </h3>
                </div>

                <Link
                  href={`/all-tiles/${tile.id}`}
                  className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-primary transition duration-300 text-sm md:text-base"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TilesContainer;