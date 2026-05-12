import React from "react";
import Button from "../ui/Button";
import { IoPlay } from "react-icons/io5";
import GlassmorphismCard from "../ui/GlassmorphismCard";
import HeroSectionCard from "../ui/HeroSectionCard";

const HeroSection = () => {
  return (
    <div className="flex">
      <div className="w-3/4 flex flex-col gap-10">
        <div className="mt-30 w-4/5 flex flex-col gap-3 items-start">
          <h1 className="text-8xl font-semibold">Earth's Exhale</h1>
          <p className="text-xl text-zinc-400">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>
          <div className="flex gap-4 items-center">
            <Button children="Buy Now" />
            <div className="p-4 border-2 border-white rounded-full text-xl">
              <IoPlay />
            </div>
            <p className="indie-font text-xl">Live Demo...</p>
          </div>
        </div>
        <div>
          <HeroSectionCard />
        </div>
      </div>
      <div className="flex justify-center">
        <GlassmorphismCard />
      </div>
    </div>
  );
};

export default HeroSection;
