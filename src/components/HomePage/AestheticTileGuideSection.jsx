import Link from "next/link";

export default function AestheticTileGuideSection() {
  const guides = [
    {
      title: "Minimal Aesthetic",
      tile: "Matte Porcelain Tiles",
      place: "Living Rooms & Modern Apartments",
      tip: "Choose soft neutral tones with low reflection for a calm and spacious feel.",
      emoji: "🤍",
    },
    {
      title: "Luxury Interior",
      tile: "White Marble Tiles",
      place: "Hotel Lobbies & Premium Bathrooms",
      tip: "Natural veining and glossy finishes create a high-end elegant atmosphere.",
      emoji: "✨",
    },
    {
      title: "Warm Rustic Style",
      tile: "Terracotta & Stone Tiles",
      place: "Outdoor Spaces & Cozy Kitchens",
      tip: "Look for textured surfaces and earthy tones for a warm natural vibe.",
      emoji: "🌿",
    },
    {
      title: "Modern Dark Theme",
      tile: "Black Granite Tiles",
      place: "Feature Walls & Contemporary Floors",
      tip: "Polished dark tiles work beautifully with soft warm lighting.",
      emoji: "🖤",
    },
  ];

  return (
    <section className="w-11/12 mx-auto py-24">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[0.3em] text-primary text-sm font-semibold">
          Design Inspiration
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white leading-tight">
          Which Tiles Match Your Aesthetic?
        </h2>

        <p className="text-gray-400 mt-5 text-base leading-relaxed">
          Explore how different tile styles complement modern interiors,
          luxurious spaces, and cozy aesthetics while learning how to
          identify premium-quality tiles for your dream home.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.08)] group"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-white/5"></div>

            <div className="relative z-10">
              <div className="text-5xl mb-5">{guide.emoji}</div>

              <h3 className="text-2xl font-bold text-white leading-snug">
                {guide.title}
              </h3>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <p className="text-primary uppercase tracking-wider text-xs mb-1">
                    Best Tile
                  </p>
                  <p className="text-gray-200 font-medium">{guide.tile}</p>
                </div>

                <div>
                  <p className="text-primary uppercase tracking-wider text-xs mb-1">
                    Perfect For
                  </p>
                  <p className="text-gray-300">{guide.place}</p>
                </div>

                <div>
                  <p className="text-primary uppercase tracking-wider text-xs mb-1">
                    Pro Tip
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {guide.tip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Tip Banner */}
      <div className="mt-16 rounded-[2rem] border border-primary/20 bg-gradient-to-r from-primary/10 via-white/5 to-primary/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="uppercase tracking-[0.3em] text-primary text-xs font-semibold">
            Expert Advice
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-white mt-3">
            How To Identify High-Quality Tiles?
          </h3>

          <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
            Premium tiles usually have consistent finishing, low water
            absorption, sharp edges, durable materials, and balanced color
            tones. Always check surface texture, thickness, and polish quality
            before purchasing.
          </p>
        </div>

              <Link href={`/all-tiles`}>
               <button className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-primary hover:text-white transition duration-300 whitespace-nowrap">
          Explore Collection
        </button>
              </Link>
       
      </div>
    </section>
  );
}
