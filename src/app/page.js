import Banner from "@/components/HomePage/Banner";
import NewArrival from "@/components/HomePage/NewArrival";
import TopTiles from "@/components/HomePage/TopTiles";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrival />
      <TopTiles/>
    </div>
  );
}
