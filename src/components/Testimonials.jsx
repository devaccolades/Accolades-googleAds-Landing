

"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, title: "Classic Homes", url: "l8W-wF_mv-Y" },
  { id: 2, title: "Skyline Builders' Digital Marketing", url: "0zPvh90Ntgc" },
  { id: 3, title: "TJP Mats Pvt. Ltd. Success Story", url: "6hgmP2xyLxg" },
  { id: 4, title: "Jomon Chacko, Partner at Prism", url: "YVyiTkWDVzU" },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const playersRef = useRef({}); // store multiple players

  // Load YouTube API once
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }, []);

  useEffect(() => {
    if (activeVideo !== null && window.YT && window.YT.Player) {
      const video = testimonials.find((t) => t.id === activeVideo);

      // Destroy old instance if exists
      if (playersRef.current[activeVideo]) {
        playersRef.current[activeVideo].destroy();
      }

      // Create new player
      playersRef.current[activeVideo] = new window.YT.Player(
        `player-${activeVideo}`,
        {
          videoId: video.url,
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            controls: 1,
            rel: 0,
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                // ✅ safely destroy before React re-renders
                playersRef.current[activeVideo]?.destroy();
                playersRef.current[activeVideo] = null;
                setActiveVideo(null);
              }
            },
          },
        }
      );
    }
  }, [activeVideo]);

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-gray-100 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Hear directly from our clients about their success stories.
        </p>
      </div>

      {/* Grid */}
      <div className=" containers  grid gap-10 grid-cols-1 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="relative aspect-video">
              {activeVideo === item.id ? (
                <div id={`player-${item.id}`} className="w-full h-full"></div>
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play button overlay */}
                  <div
                    onClick={() => setActiveVideo(item.id)}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  >
                    <div className="bg-white text-teal-600 px-6 py-2 rounded-full font-semibold shadow-lg">
                      ▶ Watch Now
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
