import Choose from "@/components/Choose";
import HeroSection from "@/components/HeroSection";
import NowAt from "@/components/NowAt";
import OurClients from "@/components/OurClients";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <Services />
      <OurClients />
      {/* <Choose /> */}
      <NowAt />
    </>
  );
}
