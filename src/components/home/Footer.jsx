import React from "react";
import plant1 from "../../assets/plants/plant1.png";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <div className="w-full flex mt-40 justify-between">
      <div className="w-2/5 px-5">
        <div className="pr-20 flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <img className="size-15 object-contain" src={plant1} alt="plant" />
            <Link
              to="/"
              className="font-extrabold text-4xl cursor-pointer hover:text-lime-400 transition duration-300"
            >
              FloraVision.
            </Link>
          </div>
          <p className="text-xl">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
        </div>
        <div className="flex gap-10 mt-25 text-xl font-bold">
          <h4>FB</h4>
          <h4>TW</h4>
          <h4>LI</h4>
        </div>
      </div>
      <div className="1/5 flex flex-col gap-7">
        <h2 className="text-2xl font-semibold">Quick Link's</h2>
        <ul className="flex flex-col gap-3">
          <li className="underline">
            <a href="#home">Home</a>
          </li>
          <li className="underline">
            <a href="#plants">Type's of plant's</a>
          </li>
          <li className="underline">
            <a href="#contact">Contact</a>
          </li>
          <li className="underline">
            <a href="#privacy">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <h3 className="text-xl font-semibold">For Every Update.</h3>
          <div className="p-1 border-2 rounded-lg">
            <input
              className="px-2 outline-none decoration-none"
              type="email"
              placeholder="Enter Email"
            />
            <Button children="Subscribe" className="bg-white text-[#1A2215]" />
          </div>
        </div>
        <p className="text-xl ">FloraVision © all right reserve</p>
      </div>
    </div>
  );
};

export default Footer;
