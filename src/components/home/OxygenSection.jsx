import React from "react";
import SectionTitle from "../ui/SectionTitle";
import OxygenCard from "../ui/OxygenCard";

const OxygenSection = () => {
  return (
    <div className="flex flex-col items-center mt-35">
      <SectionTitle title="Our Best o2" />
      <div className="mt-50">
        <OxygenCard />
      </div>
    </div>
  );
};

export default OxygenSection;
