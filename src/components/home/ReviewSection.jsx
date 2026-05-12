import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ReviewCard from "../ui/ReviewCard";
import Reviews from "../../data/Reviews";

const ReviewSection = () => {
  return (
    <div className="flex flex-col items-center mt-40 mb-20">
      <SectionTitle title="Customer Review" />
      <div className="grid grid-cols-3 gap-15 mt-25">
        {Reviews.map((item, index) => (
          <ReviewCard key={index} Reviews={item} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
