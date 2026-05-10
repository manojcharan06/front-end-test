import React from "react";
import plant2 from "../../assets/plants/plant2.png";
import Button from "./Button";
import { MdKeyboardArrowRight } from "react-icons/md";

const GlassmorphismCard = () => {
  return (
    <div className="w-[500px] h-[600px] relative flex items-end">
      <img className="absolute z-10 -top-30" src={plant2} alt="" />
      <div
        className="w-full h-[90%] bg-white/10 backdrop-blur-md border rounded-[70px] pl-15 relative"
        style={{
          clipPath:
            "path('M 0 -28 Q 250 80 500 -25 L 500 490 Q 500 540 450 540 L 50 540 Q 0 540 0 490 Z')",
        }}
      >
        <div className="absolute bottom-25 flex items-center justify-between">
          <div className="flex flex-col items-start gap-1.5">
            <p className="text-xl">Indoor Plant</p>
            <h2 className="text-3xl">Aglaonema plant</h2>
            <Button children="Buy Now" />
          </div>
          <MdKeyboardArrowRight className="text-3xl ml-40" />
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismCard;
