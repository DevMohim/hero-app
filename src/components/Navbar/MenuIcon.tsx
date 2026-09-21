"use client";
import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuIcon = () => {
  const { isClick, setIsClick } = useContext(AppContext);

  const handleMenuClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div
      className="block lg:hidden cursor-pointer ml-5"
      onClick={handleMenuClick}
    >
      <GiHamburgerMenu className="text-2xl text-gray-400" />
    </div>
  );
};

export default MenuIcon;
