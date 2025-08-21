"use client";
import React from "react";
import Waves from "./waves";
import { servicesData } from "@/app/Data/ServicesData";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <Waves
          lineColor="#B3DFE2"
          backgroundColor="transparent"
          waveSpeedX={0.09}
          waveSpeedY={0.09}
          xGap={6}
          yGap={15}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/90 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#23a7ae] mb-4 shadow-md">
        <Image src={icon} alt={title} className="w-8 h-8 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Services;
