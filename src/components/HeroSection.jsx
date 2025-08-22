"use client";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

import img1 from "../../public/herosection/1.jpg";
import img2 from "../../public/herosection/2.jpg";
import img3 from "../../public/herosection/3.jpg";
import img4 from "../../public/herosection/4.jpg";
import img5 from "../../public/herosection/5.jpg";
import img6 from "../../public/herosection/6.jpg";
import img7 from "../../public/herosection/7.jpg";
import chat from "../../public/herosection/chat_bubble.svg";


const HeroSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const serviceCards = [
    {
      id: 7,
      title: "Web Development / E-Cart",
      imagePath: img3,
      color: "#FF9A64",
    }, // teal
    { id: 6, title: "Branding", imagePath: img7, color: "#3A8B84" }, // indigo
    { id: 5, title: "Creative Designs", imagePath: img6, color: "#E53973" }, // fuchsia
    { id: 4, title: "Content Marketing", imagePath: img2, color: "#6E6EE8" }, // pink/red
    {
      id: 3,
      title: "Search Engine Optimization (SEO)",
      imagePath: img5,
      color: "#2F45F0",
    }, // green
    {
      id: 2,
      title: "Social Media Marketing",
      imagePath: img4,
      color: "#49E099",
    }, // blue
    { id: 1, title: "Google Ads", imagePath: img1, color: "#0195FE" }, // orange
  ];

  const cardRotations = [10.68, 7.32, 4.91, -0.1, -4.91, -7.32, -10.68];

  const getCardTransform = (index) => {
    const degree = cardRotations[index];
    const angleInRad = degree * (Math.PI / 180);
    const radius = 1800;
    const x = radius * Math.sin(angleInRad);
    const y = radius * (1 - Math.cos(angleInRad));

    let baseTransform = `translateX(${x}px) translateY(${y}px) rotate(${degree}deg)`;

    if (hoveredCard === index) {
      return `${baseTransform} translateY(-30px) scale(1.05)`; // lift + slight scale
    }

    return baseTransform;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="text-center mb-6 max-w-4xl mx-auto">
        <h1 className="font-poppins font-semibold xl:text-[56px] xl:leading-[56px] -tracking-[4%] leading-[100%]">
          Complete{" "}
          <span className="text-teal-600">
            digital, web <span className="text-black">&</span> creative
          </span>
          <br />
          solutions under one roof.
        </h1>
      </div>

      {/* Cards - Curved Row */}
      <div className="flex justify-center items-center h-90 relative">
        {/* Enquire Now Bubbles - rendered outside cards to avoid clipping */}
        {serviceCards.map(
          (card, i) =>
            hoveredCard === i && (
              <div
                key={`bubble-${card.id}`}
                className="absolute -mt-40 px-6 py-2 rounded-full text-white text-[14px] font-semibold shadow-xl transition-all duration-300 ease-out pointer-events-none whitespace-nowrap"
                style={{
                  backgroundColor: card.color,
                  background: card.color,
                  transform: `${getCardTransform(i).replace(
                    "translateY(-30px)",
                    "translateY(-90px)"
                  )}`,
                  zIndex: 200,
                }}
              >
                Enquire Now
                {/* Speech bubble tail */}
                <div
                  className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2"
                  style={{
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "8px solid #E91E63",
                  }}
                />
              </div>
            )
        )}

        {/* Card containers */}
        {serviceCards.map((card, i) => (
          <div
            key={card.id}
            className="absolute w-52 h-52 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              transform: getCardTransform(i),
              zIndex: hoveredCard === i ? 100 : serviceCards.length - 1 - i,
              boxShadow:
                hoveredCard === i
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  : "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image */}
            <Image
              src={card.imagePath}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500"
              style={{
                transform: hoveredCard === i ? "scale(1.1)" : "scale(1)",
              }}
              priority
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-4 text-white h-full flex items-end">
              <h3 className="font-poppins font-bold text-[24px] leading-[24px]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="font-poppins font-normal w-[60%] mx-auto text-[13px] leading-[100%] text-[#000000]">
          We combine creativity, technology, and strategy to deliver solutions
          that help businesses stand out, engage audiences, and grow online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <button className="bg-[#0C5357] hover:bg-[#0C7379] text-white px-8 py-3 rounded-[10px] transition-colors duration-200 shadow-lg font-poppins font-bold text-[13px] leading-[100%]">
            Book a Free Meeting
          </button>
          <button className="flex gap-2 items-center text-black px-6 py-3 transition-colors duration-200 font-poppins font-bold text-[13px] leading-[100%] border rounded-[10px] border-[#E1E1E1] ">
            <Image src={chat} alt="Chat Icon" width={20} height={20} />
            Whatsapp us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
