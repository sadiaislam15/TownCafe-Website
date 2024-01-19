import React from "react";
import { Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" bg-PrimaryColor text-ExtraDarkColor rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div>
          <h1 className=" font-semibold text-3xl pb-4">TownCafe</h1>
          <div className=" flex gap-5 ml-3">
            <FaFacebook
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
            <RiInstagramFill
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Shop</h1>
          <div className=" flex flex-col gap-2">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Overview
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Pricing
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              About us
            </Link>
          </div>
        </div>

        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Halishahar,Chattagram,Bangladesh
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              shantadianta@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +880 1748270617
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
