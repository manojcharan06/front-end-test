import React from "react";
import plant1 from "../../assets/plants/plant1.png";
import { Link } from "react-router-dom";
import { RiShoppingBag4Line } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between py-7 text-white items-center">
      <div className="flex gap-4 items-center">
        <img className="size-12 object-contain" src={plant1} alt="plant" />
        <Link
          to="/"
          className="font-extrabold text-3xl cursor-pointer hover:text-lime-400 transition duration-300"
        >
          FloraVision.
        </Link>
      </div>
      <ul className="flex gap-10 indie-font font-medium">
        <li>
          <Link to="/" className="hover:text-lime-400 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-lime-400 transition duration-300 flex items-center gap-3"
          >
            Plant Type <MdArrowDropDown />
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-lime-400 transition duration-300">
            More
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-lime-400 transition duration-300">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center text-2xl gap-10">
        <IoSearchOutline className="cursor-pointer hover:text-lime-400 transition" />
        <RiShoppingBag4Line className="cursor-pointer hover:text-lime-400 transition" />
        <HiOutlineMenuAlt3 className="cursor-pointer hover:text-lime-400 transition" />
      </div>
    </nav>
  );
};

export default Navbar;
