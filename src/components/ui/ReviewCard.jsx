import React from "react";
import RatingStars from "./RatingStars";

const ReviewCard = ({Reviews: {name, desc, image}}) => {
  return (
    <div
      className="w-[400px] h-[300px] relative px-14 py-10 flex flex-col gap-8 bg-white/10 backdrop-blur-md border border-zinc-400 rounded-[70px]"
      style={{
        clipPath:
          "path('M 0 -25 Q 200 60 400 -25 L 400 490 Q 300 540 450 540 L 50 540 Q 0 540 0 490 Z')",
      }}
    >
      <div className="flex items-center gap-8">
        <div className="size-14 rounded-full overflow-hidden bg-amber-200">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl">{name}</h1>
          <RatingStars />
        </div>
      </div>
      <p className="text-md">
        {desc}
      </p>
    </div>
  );
};

export default ReviewCard;
