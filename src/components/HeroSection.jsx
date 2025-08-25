"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import img1 from "../../public/herosection/1.jpg";
import img2 from "../../public/herosection/2.jpg";
import img3 from "../../public/herosection/3.jpg";
import img4 from "../../public/herosection/4.jpg";
import img5 from "../../public/herosection/5.jpg";
import img6 from "../../public/herosection/6.jpg";
import img7 from "../../public/herosection/7.jpg";
import chat from "../../public/herosection/chat_bubble.svg";
import FormModal from "./Form";

const HeroSection = () => {
  const [clickedCard, setClickedCard] = useState(null); // For clicked state on all devices
  const [screenWidth, setScreenWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceCards = [
    { id: 7, title: "Web Development / E-Cart", imagePath: img3, color: "#FF9A64" },
    { id: 6, title: "Branding", imagePath: img7, color: "#3A8B84" },
    { id: 5, title: "Creative Designs", imagePath: img6, color: "#E53973" },
    { id: 4, title: "Content Marketing", imagePath: img2, color: "#6E6EE8" },
    { id: 3, title: "Search Engine Optimization (SEO)", imagePath: img5, color: "#2F45F0" },
    { id: 2, title: "Social Media Marketing", imagePath: img4, color: "#49E099" },
    { id: 1, title: "Google Ads", imagePath: img1, color: "#0195FE" },
  ];

  const cardRotations = [10.68, 7.32, 4.91, -0.1, -4.91, -7.32, -10.68];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardTransform = (index) => {
    if (!screenWidth) return {};

    let radius =
      screenWidth < 768
        ? 600
        : screenWidth < 1024
        ? 1500
        : screenWidth < 1280
        ? 2800
        : 3000;
    let divisor =
      screenWidth < 768
        ? 300
        : screenWidth < 1024
        ? 300
        : screenWidth < 1280
        ? 500
        : 300;

    const degree = cardRotations[index];
    const angleInRad = degree * (Math.PI / divisor);
    const x = radius * Math.sin(angleInRad);
    const y = radius * (1 - Math.cos(angleInRad));

    let baseTransform = `translateX(${x}px) translateY(${y}px) rotate(${degree}deg)`;

    // Click effect for all devices (only when modal is not open)
    if (clickedCard === index && !isModalOpen) {
      return `${baseTransform} translateY(-30px) scale(1.05)`;
    }

    return baseTransform;
  };

  // Handle card click for all devices
  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };

  // Handle enquire button click
  const handleEnquireClick = (e) => {
    e.stopPropagation(); // Prevent card click event
    setIsModalOpen(true);
    // Reset clicked card state when opening modal
    setClickedCard(null);
  };

  return (
    <div className="py-10 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center xl:mb-6 max-w-4xl">
        <h1 className="font-poppins font-medium text-[36px] md:text-[42px] lg:text-[49px] xl:text-[56px] tracking-[-0.6px] px-3">
          Complete{" "}
          <span className="text-teal-600">
            digital, web <span className="text-black">&</span> creative
          </span>
          <br />
          <span className="px-3">solutions under one roof.</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center h-50 md:h-72 lg:h-80 xl:h-90 relative">
        {/* Enquire Now bubble for all devices (click) */}
        {serviceCards.map(
          (card, i) =>
            clickedCard === i && !isModalOpen && (
              <div
                key={`click-container-${card.id}`}
                className="absolute -mt-16 md:-mt-30 lg:-mt-40"
                style={{
                  transform: `${getCardTransform(i).replace(
                    "translateY(-30px)",
                    "translateY(-90px)"
                  )}`,
                  zIndex: 200,
                }}
              >
                <button
                  onClick={handleEnquireClick}
                  className="px-3 md:px-4 lg:px-5 py-[6px] md:py-2 rounded-full text-white text-[13px] font-semibold shadow-xl transition-all duration-300 ease-out whitespace-nowrap hover:scale-105"
                  style={{
                    backgroundColor: card.color,
                  }}
                >
                  Enquire Now
                  <div
                    className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2"
                    style={{
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderTop: "8px solid " + card.color,
                    }}
                  />
                </button>
              </div>
            )
        )}

        {/* Card containers */}
        {serviceCards.map((card, i) => (
          <div
            key={card.id}
            className="absolute w-30 h-30 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              transform: getCardTransform(i),
              zIndex: 
                (clickedCard === i && !isModalOpen) 
                  ? 100 
                  : serviceCards.length - 1 - i,
              boxShadow:
                (clickedCard === i && !isModalOpen)
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  : "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
            }}
            onClick={() => handleCardClick(i)}
          >
            <Image
              src={card.imagePath}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500"
              style={{
                transform: 
                  (clickedCard === i && !isModalOpen)
                    ? "scale(1.1)" 
                    : "scale(1)",
              }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-4 text-white h-full flex items-end">
              <h3 className="font-poppins font-bold xl:text-[24px]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-poppins font-normal w-[90%] md:w-[75%] lg:w-[60%] mx-auto text-[13px] text-[#000000]">
          We combine creativity, technology, and strategy to deliver solutions
          that help businesses stand out, engage audiences, and grow online.
        </p>
        <div className="flex gap-2 lg:gap-4 justify-center items-center mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0C5357] hover:bg-[#0C7379] text-white px-2 xl:px-8 py-2 rounded-[10px] shadow-lg font-poppins font-bold text-[12px] md:text-[13px]"
          >
            Book a Free Meeting
          </button>
          <button className="flex gap-2 items-center text-black px-2 xl:px-6 py-2 border rounded-[10px] border-[#E1E1E1] font-poppins font-bold text-[12px] md:text-[13px]">
            <Image src={chat} alt="Chat Icon" className="size-[14px]" />
            Whatsapp us
          </button>
        </div>
      </div>

      {/* Modal */}
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HeroSection;