
import LottieComp from "@/components/shared/LottieComp";
import TilesContainer from "@/components/shared/TilesContainer";
import { getTiles } from "@/lib/data";

export const metadata = {
  title: "Tile Gallery- All Tiles",
  description: "Tile Gallery is a modern web application designed to showcase premium and aesthetic tile collections for interior and architectural inspiration.",
};


const AllTilesPage = async () => {
  const tiles = await getTiles();

  return (
      <section className="w-11/12 mx-auto py-14 mt-18">
        
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
    <TilesContainer tiles={tiles}/>
    
    </section>
  );
};

export default AllTilesPage;