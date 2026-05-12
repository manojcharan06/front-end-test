import React from "react";
import plant2 from "../../assets/plants/plant2.png";
import Button from "./Button";

const OxygenCard = () => {
  return (
    <div className="w-full px-10 py-15 flex gap-25 bg-white/10 backdrop-blur-md rounded-[80px] border border-zinc-500">
      <div className="w-[90%] relative">
        <img className="absolute scale-150 -top-20" src={plant2} alt="" />
      </div>
      <div className="pl-10 pr-10 flex flex-col gap-5">
        <h2 className="text-4xl">
          We Have Small And Best O2 Plants Collection’s
        </h2>
        <p className="text-2xl">
          Oxygen-producing plants, often referred to as "O2 plants," are those
          that release oxygen into the atmosphere through the process of
          photosynthesis.
        </p>
        <p className="text-2xl">
          Many plants can help filter out pollutants and toxins from the air,
          such as formaldehyde, benzene, and trichloroethylene. This makes the
          air cleaner and healthier to breathe.
        </p>
        <div>
          <Button children="Explore" />
        </div>
      </div>
    </div>
  );
};

export default OxygenCard;
