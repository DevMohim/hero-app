"use client";

import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import MenuIcon from "../Navbar/MenuIcon";
import { AppContext } from "@/context/AppContext";

const navLinks = (
  <>
    <li className="font-medium hover:text-primary lg:hover:border-b lg:hover:border-b-primary">
      <a href="/">Home</a>
    </li>

    <li className="font-medium hover:text-primary lg:hover:border-b lg:hover:border-b-primary">
      <a href="/apps">Apps</a>
    </li>

    <li className="font-medium hover:text-primary lg:hover:border-b lg:hover:border-b-primary">
      <a href="/installation">Installation</a>
    </li>
  </>
);

const Navbar = () => {
  const context = useContext(AppContext);

  if (!context) return null;

  const { isClick } = context;

  return (
    <nav className="border-b border-b-gray-200 fixed top-0 left-0 w-full bg-white z-50 ">
      <div className="flex justify-between items-center container mx-auto p-2">
        {/* Menu Icon */}
        <MenuIcon />

        {/* Logo */}
        <div className="flex gap-1 items-center">
          <Image src={Logo} alt="Hero App Logo" width={40} height={40} />

          <span className="uppercase font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            hero.io
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">{navLinks}</ul>
        </div>

        {/* Contribute Button */}
        <div>
          <button className="flex items-center gap-2.5 bg-linear-to-br from-primary to-secondary px-4 py-2 rounded-sm font-semibold text-white cursor-pointer">
            <IoLogoGithub className="text-white w-5 h-5" />

            <span>Contribute</span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      {isClick && (
        <div className="absolute lg:hidden top-14 left-0 rounded-md bg-[#ddd]/50 w-full">
          <ul className="flex flex-col justify-center gap-3 px-10 py-4">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
