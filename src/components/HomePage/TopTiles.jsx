import Image from "next/image";
import React from "react";
import TilesCard from "../shared/TilesCard";
import { getTiles } from "@/lib/data";

const TopTiles = async () => {
  const tiles = await getTiles();

  return (
    <section className="w-11/12 mx-auto py-16 ">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Our Premium Collections
        </h2>

        <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          Explore handcrafted tile designs curated to bring elegance,
          texture, and modern aesthetics into every corner of your
          space.
        </p>
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tiles?.slice(0, 6).map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
};

export default TopTiles;