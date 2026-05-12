import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";

const RatingStars = () => {
  return (
    <div className="flex gap-1 text-xs text-yellow-300">
      <IoStar />
      <IoStar />
      <IoStar />
      <IoStar />
      <IoStarHalf />
    </div>
  );
};

export default RatingStars;
