import React from "react";
import SectionTitle from "../ui/SectionTitle";
import GlassCarrd from "../ui/GlassCarrd";
import Products from "../../data/Products";

const ProductGrid = () => {
  return (
    <div className="flex flex-col mt-20 mb-25 items-center">
      <SectionTitle title="Our Top Selling Plants" />
      <div className="flex grid grid-cols-3 gap-15 mt-20">
        {Products.map((item, index) => (
            <GlassCarrd key={index} Products={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
