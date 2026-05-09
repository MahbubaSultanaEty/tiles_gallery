"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function FeaturedSlider() {

  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const getTiles = async () => {
      const res = await fetch(
        "https://server-for-tiles-gallery-1.onrender.com/tiles"
      );

      const data = await res.json();
      setTiles(data);
    };

    getTiles();
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
    >
      {
        tiles.slice(0, 4).map((tile) => (
          <SwiperSlide key={tile._id}>
            <div className="bg-white p-4 rounded-2xl shadow">
              <Image
                src={tile.image2}
                alt={tile.title}
                width={400}
                height={200}
                className="object-cover w-full h-48 rounded-lg"
                    />
                    <div className="text-xs text-semibold text-gray-500 mt-2">
                        {tile.title} <p className=" badge badge-success text-white/80">in use</p>
                    </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}