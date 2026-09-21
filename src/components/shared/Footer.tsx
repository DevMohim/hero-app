import Image from "next/image";
import Logo from "@/assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { PiXLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-dark text-[#fafafa]">
      <div className="container mx-auto px-4 lg:px-0">
        {/* upper */}
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-1 items-center">
            <Image src={Logo} alt="Footer Logo" width={40} height={40}></Image>
            <span className="font-bold">HERO.IO</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-white font-medium text-xl">Social Links</h1>
            <div className="flex gap-3 items-center justify-center">
              <span>
                <PiXLogo className="text-2xl" />
              </span>
              <span>
                <RiLinkedinBoxFill className="text-2xl" />
              </span>
              <span>
                <FaFacebook className="text-2xl" />
              </span>
            </div>
          </div>
        </div>

        <hr className="text-gray/50" />
        {/* Lower */}
        <div className="flex justify-center items-center py-4">
          <h1 className="text-[#FAFAFA] ">
            Copyright © 2025 - All right reserved by DevMohim
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
