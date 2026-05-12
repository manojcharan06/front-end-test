import React from "react";
import Button from "./Button";
import { RiShoppingBag4Line } from "react-icons/ri";
import AddToCartButton from "./AddToCartButton";

const TrendingCards = ({ Data: { title, desc, image, price }, isReverse }) => {
  return (
    <div
      className={`px-15 py-20 mt-25 mb-15 flex gap-8 justify-center w-full backdrop-blur-lg border border-zinc-400 rounded-[130px] ${isReverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="w-1/2 relative flex items-center">
        <img className="absolute -top-60" src={image} alt="" />
      </div>
      <div className="w-1/2 flex flex-col gap-7">
        <h2 className="text-4xl">{title}</h2>
        <p className="text-xl">{desc}</p>
        <p className="text-3xl">Rs. {price}/-</p>
        <div className="flex gap-5">
          <Button children="Explore" />
          <AddToCartButton children={<RiShoppingBag4Line />} />
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
