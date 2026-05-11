import React from "react";
import HeroSection from "../home/HeroSection";
import TrendingSection from "../home/TrendingSection";
import ProductGrid from "../home/ProductGrid";
import mainBackground from "../../assets/plants/mainBackground.png";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <>
      <div
        className="bg-cover min-h-screen bg-centre bg-no-repeat bg-[#1A2215]"
        style={{
          backgroundImage: `url(${mainBackground})`,
        }}
      >
        <div className="px-20 text-white">
          <Navbar />
          <HeroSection />
          <TrendingSection />
        </div>
      </div>
      <div className="px-20 text-white">
        <ProductGrid />
      </div>
    </>
  );
};

export default Container;
