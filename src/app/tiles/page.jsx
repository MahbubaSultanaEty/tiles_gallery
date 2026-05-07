
import LottieComp from "@/components/shared/LottieComp";
import { getTiles } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";



const AllTilesPage = async () => {
  const tiles = await getTiles();

  return (
      <section className="w-11/12 mx-auto py-14 mt-12">
        
      <LottieComp />
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-primary font-medium tracking-widest uppercase">
          Premium Collections
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
          Explore Our Luxury Tile Gallery
        </h1>

        <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
          Discover elegant ceramic, marble, porcelain, mosaic, and
          designer tiles crafted to elevate modern interiors and
          timeless architectural spaces.
        </p>
      </div>      
      

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tiles.map((tile) => (
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

              {/* Category */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs md:text-sm font-medium capitalize">
                  {tile.category}
                </span>
              </div>

              {/* Stock */}
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

              {/* Info */}
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

              {/* Bottom */}
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
                  href={`/tiles/${tile.id}`}
                  className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-primary transition duration-300 text-sm md:text-base"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTilesPage;