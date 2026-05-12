import React from "react";

const AddToCartButton = ({ className, children }) => {
  return (
    <button
      className={`p-2 text-2xl font-medium tracking-wider text-shadow-white border-white border-2 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
