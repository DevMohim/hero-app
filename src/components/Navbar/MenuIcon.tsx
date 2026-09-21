"use client";
import { useAppContext } from "@/context/AppContext";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuIcon = () => {
  const { isClick, setIsClick } = useAppContext()

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
