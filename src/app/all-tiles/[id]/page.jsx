import { getTileById } from '@/lib/data';
import { ArrowBigLeft, ArrowBigRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const tile = await getTileById(id);
    return (
    <div className="mt-25 min-h-screen bg-gradient-to-br from-slate-100/50 via-white/60 to-cyan-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Images Section */}
        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <img
              src={tile.image1}
                            alt={tile.title}
                            width={100}     
                            height={100}
              className="w-full h-125 object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-md">
              {tile.category}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={tile.image1}
                                alt="Tile Preview 1"
                               
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={tile.image2}
                alt="Tile Preview 2"
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 md:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">
              {tile.inStock ? "Available in Stock" : "Out of Stock"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            {tile.title}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {tile.description}
          </p>

          <div className="flex items-end gap-2 mb-8">
            <h2 className="text-5xl font-extrabold text-cyan-700">
              ${tile.price}
            </h2>
            <span className="text-gray-500 mb-1">{tile.currency}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-1">Dimensions</p>
              <h4 className="font-bold text-lg text-gray-800">
                {tile.dimensions}
              </h4>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-1">Material</p>
              <h4 className="font-bold text-lg text-gray-800">
                {tile.material}
              </h4>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-1">Finish</p>
              <h4 className="font-bold text-lg text-gray-800">
                Glossy Premium
              </h4>
            </div>
          </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/all-tiles">
                             <button className="bg-cyan-900 hover:bg-cyan-800 text-white font-semibold px-8 py-4 flex gap-4 justify-center w-full items-center rounded-2xl transition duration-300 shadow-lg hover:scale-[1.02]">
            <ArrowLeft/>  Tiles 
            </button>
                        </Link>           

            
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6 flex flex-wrap gap-6 text-sm text-gray-500">
            <p>✨ Water Resistant</p>
            <p>🔥 Heat Resistant</p>
            <p>🧼 Easy to Clean</p>
          </div>
        </div>
      </div>
    </div>
      
    );
};

export default TilesDetailsPage;