

"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  { id: 1, title: "Classic Homes", url: "l8W-wF_mv-Y" },
  { id: 2, title: "Skyline Builders", url: "0zPvh90Ntgc" },
  { id: 3, title: "TJP Mats Pvt. Ltd", url: "6hgmP2xyLxg" },
  { id: 4, title: "Jomon Chacko, Partner at Prism", url: "YVyiTkWDVzU" },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const playersRef = useRef({});

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

      if (playersRef.current[activeVideo]) {
        playersRef.current[activeVideo].destroy();
      }

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
    <section className="py-10 relative overflow-hidden ">
      {/* Modern Retro Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-cyan-600/10 animate-pulse"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/15 to-cyan-600/10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-white/40 to-cyan-200/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-300/20 to-cyan-500/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-white/30 to-cyan-400/20 transform rotate-12 animate-bounce"></div>
        
        {/* Retro lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-white to-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-white to-cyan-400"></div>
        
        {/* Scan lines effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.1) 2px, rgba(6,182,212,0.1) 4px)'
          }}
        ></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with retro styling */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-700 via-teal-500 to-gray-800 bg-clip-text text-transparent mb-4 animate-pulse">
              CLIENT TESTIMONIALS
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-white to-cyan-500 rounded-full mb-4"></div>
          </div>
          <p className="text-sm md:text-xl text-gray-600 mt-6 font-light tracking-wide">
            Experience the success stories of our valued partners
          </p>
        </div>

        {/* Video Grid */}
        <div className="container mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Retro border effect */}
              {/* <div className="absolute -inset-1  rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div> */}
              
              <div className="relative bg-white backdrop-blur-sm border border-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Video container */}
                <div className="relative aspect-video">
                  {activeVideo === item.id ? (
                    <div id={`player-${item.id}`} className="w-full h-full"></div>
                  ) : (
                    <>
                      {/* Thumbnail with overlay effects */}
                      <div className="relative w-full h-full">
                        <img
                          src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Retro overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-white/30"></div>
                        
                        {/* Scan line effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                             style={{
                               background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6,182,212,0.2) 3px, rgba(6,182,212,0.2) 6px)'
                             }}></div>
                      </div>
                      
                      {/* Play button */}
                      <div
                        onClick={() => setActiveVideo(item.id)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                      >
                        <div className="relative">
                          {/* Glowing ring */}
                          <div className="absolute -inset-8 border-2 border-cyan-400/60 rounded-full animate-ping"></div>
                          <div className="absolute -inset-4 border border-white/70 rounded-full animate-pulse"></div>
                          
                          {/* Play button */}
                          <div className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 md:px-6 py-2 rounded-full font-bold text-sm shadow-lg transform group-hover/play:scale-110 transition-all duration-300 border-2 border-white/30">
                            <span className="flex items-center gap-2">
                              <span className="text-sm">▶</span>
                              PLAY
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Title section with retro styling */}
                <div className="p-2 border-t border-cyan-200/30">
                  <div className="text-center">
                    <h3 className="text-sm lg:text-xl font-bold bg-gradient-to-r from-gray-700 to-cyan-600 bg-clip-text text-transparent mb-2">
                      {item.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;