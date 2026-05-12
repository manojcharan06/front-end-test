import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="px-4 py-2 mb-5 inline-block relative ">
      <h1 className="text-5xl font-bold tracking-wide">{title}</h1>

      <div className="absolute bottom-0 left-0 w-14 h-14 border-l-4 border-b-4 border-yellow-400/60 rounded-bl-3xl"></div>
      <div className="absolute top-0 right-0 w-14 h-14 border-t-4 border-r-4 border-yellow-400/60 rounded-tr-3xl"></div>
    </div>
  );
};

export default SectionTitle;
