import Banner from "@/components/HomePage/Banner";
import FeaturedSlider from "@/components/HomePage/FeaturedSlider";
import NewArrival from "@/components/HomePage/NewArrival";
import TopTiles from "@/components/HomePage/TopTiles";
import Image from "next/image";
import AestheticTileGuideSection from "@/components/HomePage/AestheticTileGuideSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrival />
       <AestheticTileGuideSection/>
      <TopTiles />
      <FeaturedSlider/>
    </div>
  );
}
