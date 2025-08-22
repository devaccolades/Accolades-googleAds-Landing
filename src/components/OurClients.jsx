"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classic from "../../public/clients/download-4.png";
import skyline from "../../public/clients/skylione.png";
import rak from "../../public/clients/logo4-1.png";
import silk from "../../public/clients/logo12.png";
import jug from "../../public/clients/jugalbandhi.png";
import ocean from "../../public/clients/logo13.png";
import myg from "../../public/clients/logo16-1.png";

const clients = [
  { id: 1, src: skyline, alt: "Friday Film House" },
  { id: 1, src: rak, alt: "Friday Film House" },
  { id: 1, src: silk, alt: "Friday Film House" },
  { id: 1, src: jug, alt: "Friday Film House" },
  { id: 1, src: ocean, alt: "Friday Film House" },
  { id: 1, src: myg, alt: "Friday Film House" },
  { id: 1, src: classic, alt: "Friday Film House" },
];

const OurClients = () => {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const center = container.offsetWidth / 2 + container.scrollLeft;

      let closestIndex = null;
      let closestDistance = Infinity;

      const items = container.querySelectorAll("[data-index]");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const containerCenter =
          container.offsetWidth / 2 + container.getBoundingClientRect().left;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = parseInt(item.dataset.index);
        }
      });

      setCenterIndex(closestIndex);
    };

    const interval = setInterval(handleScroll, 200); // check every 200ms
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="containers">
        <h2 className="text-[24px] md:text-[36px] lg:text-[48px] font-bold text-center text-gray-800 mb-5">
          Trusted by <span className="text-teal-600">Our Clients</span>
        </h2>

        {/* Scrolling container */}
        <div ref={containerRef} className="overflow-hidden relative">
          <motion.div
            className="flex gap-4 py-5"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate logos for seamless looping */}
            {[...clients, ...clients].map((client, i) => (
              <motion.div
                key={i}
                data-index={i}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-auto h-24 flex items-center justify-center bg-white rounded-2xl shadow-md p-2 transition-all duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={120}
                  height={100}
                  className={`max-h-20 object-contain transition-all duration-300 ${
                    centerIndex === i
                      ? "grayscale-50"
                      : "grayscale hover:grayscale-0"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default OurClients;
