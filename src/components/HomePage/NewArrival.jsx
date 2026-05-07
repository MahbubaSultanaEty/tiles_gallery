import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import newImage from "@/assets/new.png";
import { getTiles } from '@/lib/data';


const NewArrival = async() => {

  const tiles = await getTiles();
  console.log(tiles);
  const newTiles = tiles.slice(2,7);
    return (
        <div className='mt-22 mb-10 w-11/12 bg-black/98 text-white p-4 rounded mx-auto flex gap-3 items-center'>
  
  <Image
    width={48}
    height={48}
    src={newImage}
    alt="new--v1"
    className=" hover:scale-110 transition-transform duration-200"
            />
            
  <Marquee speed={150} pauseOnHover={true}>        
          {
            newTiles.map((tile) => (              
              <div key={tile.id} className="mx-4">
                {tile.title} 
              </div> 
                ))
    } ✦ Weekly Feature: Modern Geometric Patterns ✦ Join the Community ✦ Explore Premium Collections ✦ Designer Picks This Week ✦
  </Marquee>

</div>
    );
};

export default NewArrival;