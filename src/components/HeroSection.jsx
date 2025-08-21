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

const HeroSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const serviceCards = [
    { id: 1, title: "Google Ads", imagePath: img1 },
    { id: 2, title: "Social Media Marketing", imagePath: img2 },
    { id: 3, title: "Search Engine Optimization (SEO)", imagePath: img3 },
    { id: 4, title: "Content Marketing", imagePath: img4 },
    { id: 5, title: "Creative Designs", imagePath: img5 },
    { id: 6, title: "Branding", imagePath: img6 },
    { id: 7, title: "Web Development / E-Cart", imagePath: img7 },
  ];

  const cardRotations = [10.68, 7.32, 4.91, -0.45, -4.74, -7.19, -10.83];

  const getCardTransform = (index) => {
    const degree = cardRotations[index];
    const angleInRad = degree * (Math.PI / 45);
    const radius = 500;
    const x = radius * Math.sin(angleInRad);
    const y = radius * (1 - Math.cos(angleInRad));
    
    // If this card is being hovered, center it and scale up
    if (hoveredCard === index) {
      return `translateX(0) translateY(0) rotate(0deg) scale(1.15)`;
    }
    
    return `translateX(${x}px) translateY(${y}px) rotate(${degree}deg)`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="text-center mb-6 max-w-4xl mx-auto">
        <h1 className="font-poppins font-medium xl:text-[56px] xl:leading-[56px] -tracking-[4%] leading-[100%]">
          Complete{" "}
          <span className="text-teal-600">
            digital, web <span className="text-black">&</span> creative
          </span>
          <br />
          solutions under one roof.
        </h1>
      </div>

      {/* Cards - Curved Row */}
      <div className="flex justify-center items-center mb-32 h-80">
        {serviceCards.map((card, i) => (
          <div
            key={card.id}
            className="absolute w-60 h-60 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              transform: getCardTransform(i),
              // Set z-index based on hover state
              zIndex: hoveredCard === i ? 100 : serviceCards.length - 1 - i,
              // Add a shadow when hovered
              boxShadow: hoveredCard === i 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
                : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
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
                transform: hoveredCard === i ? 'scale(1.1)' : 'scale(1)'
              }}
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
            {/* Content */}
            <div className="relative z-10 p-4 text-white h-full flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-sm font-semibold leading-tight">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="font-poppins font-normal text-[13px] leading-[100%] text-[#000000]">
          We combine creativity, technology, and strategy to deliver solutions
          that help businesses stand out, engage audiences, and grow online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <button className="bg-[#0C5357] hover:bg-[#0C7379] text-white px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg font-poppins font-bold text-[13px] leading-[100%]">
            Book a Free Meeting
          </button>
          <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 px-6 py-3 transition-colors duration-200 font-poppins font-bold text-[13px] leading-[100%]">
            <MessageCircle className="w-5 h-5" />
            Whatsapp us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;