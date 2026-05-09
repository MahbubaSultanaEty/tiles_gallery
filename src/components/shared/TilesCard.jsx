import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const TilesCard = ({ tile }) => {
    return (
        <div>
          <div
            key={tile.id}
            className="group bg-white/90 rounded-lg overflow-hidden border shadow-sm hover:shadow-2xl transition duration-500"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden m-4 rounded">
              <Image
                src={tile.image1}
                alt={tile.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {tile.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {tile.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  ${tile.price}
                </span>
              <Link  href={`/all-tiles/${tile.id}`}>
              <button className="px-4 py-2 rounded-full  border-4 hover:bg-black hover:text-white transition duration-300">
                  View Details
                </button>
              </Link>
                
              </div>
            </div>
          </div>   
        </div>
    );
};

export default TilesCard;