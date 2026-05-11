import React from "react";
import AddToCartButton from "./AddToCartButton";
import { RiShoppingBag4Line } from "react-icons/ri";

const GlassCarrd = ({Products: {title, desc, price, image}}) => {
  return (
    <div className="w-[400px] h-[550px] relative flex items-end">
      <img className="absolute z-10 -top-20 scale-80" src={image} alt="" />
      <div
        className="w-full h-[90%] bg-white/10 backdrop-blur-md border rounded-[70px] px-10 relative"
        style={{
          clipPath:
            "path('M 0 -32 Q 200 70 400 -30 L 400 490 Q 400 540 450 540 L 50 540 Q 0 540 0 490 Z')",
        }}
      >
        <div className="absolute w-[80%] h-[45%] flex flex-col mb-8 pr-4 justify-end bottom-0">
          <h2 className="h-1/5 text-3xl">{title}</h2>
          <p className="h-3/5 text-lg flex items-center">{desc}</p>
          <div className="h-1/5 flex justify-between">
            <h3 className="text-3xl">Rs. {price}/-</h3>
            <AddToCartButton children={<RiShoppingBag4Line/>}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCarrd;
