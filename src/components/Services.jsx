"use client";
import React from "react";
import Waves from "./Waves";
import { servicesData } from "@/Data/ServicesData";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <Waves
          lineColor="#B3DFE2"
          // lineColor="#878787"
          backgroundColor="transparent"
          waveSpeedX={0.09}
          waveSpeedY={0.09}
          xGap={6}
          yGap={15}
        />
      </div>

      {/* Content */}
      <div className="containers mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-[24px] md:text-[36px] lg:text-[48px] font-bold text-center ">
            Our Services
          </h2>
          <p className="font-poppins text-[14px] md:text-[16px]">
            We help your brand to be recognizable
          </p>
        </div>

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

      {/* <div
        className="w-[100px] h-[100px] flex items-center justify-center rounded-full animate-spin-slow"
        style={{ backgroundColor: "rgba(60, 195, 195, 0.1)" }}
      >
        <div
          className="w-[80px] h-[80px] flex items-center justify-center rounded-full animate-spin-slower"
          style={{ backgroundColor: "rgba(60, 195, 195, 0.5)" }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full animate-spin-reverse"
            style={{ backgroundColor: "rgba(35, 167, 174, 1)" }}
          >
            <Image src={icon} alt={title} className="w-9 h-9 object-contain" />
          </div>
        </div>
      </div> */}

      <div className="relative w-[100px] h-[100px] flex items-center justify-center">
        {/* Outer Spinner */}
        <div className="absolute w-[100px] h-[100px] rounded-full animate-spin-slow border-4 border-[#3CC3C31A] border-t-transparent"></div>

        <div className="absolute w-[80px] h-[80px] rounded-full animate-spin-slower border-4 border-[#3CC3C380] border-t-transparent"></div>

        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-600">
          <Image src={icon} alt={title} className="w-9 h-9 object-contain" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 mt-5 font-poppins">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-poppins">
        {description}
      </p>
    </div>
  );
};

export default Services;
