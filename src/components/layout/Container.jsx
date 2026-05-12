import React from "react";
import HeroSection from "../home/HeroSection";
import TrendingSection from "../home/TrendingSection";
import ProductGrid from "../home/ProductGrid";
import mainBackground from "../../assets/plants/mainBackground.png";
import Navbar from "./Navbar";
import ReviewSection from "../home/ReviewSection";
import OxygenSection from "../home/OxygenSection";
import Footer from "../home/Footer";

const Container = () => {
  return (
    <>
      <div
        id="home"
        className="bg-cover h-full bg-center bg-no-repeat"
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
        <div id="plants">
          <ProductGrid />
        </div>
        <div id="more">
          <ReviewSection />
          <OxygenSection />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Container;
