import Image from "next/image";
import React from "react";
import GooglePlay from "@/assets/google-play.png";
import AppStore from "@/assets/app-store.png";
import BannerImg from '@/assets/hero.png'
const Banner = () => {
  return (
    <section className=" bg-gray/10 mt-6 lg:mt-14">
      <div className=" container mx-auto flex flex-col items-center space-y-10">
        {/* details */}
        <div className="text-center max-w-[60%] mx-auto mt-20">
          <h1 className="text-dark text-4xl font-black mb-3">
            We Build <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-[#627382] text-sm">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-4">
          <button className="btn text-dark font-semibold text-xl">
            <Image
              src={GooglePlay}
              alt="Google play"
              height={16}
              width={24}
            ></Image>{" "}
            Google Play
          </button>
          <button className="btn text-dark font-semibold text-xl">
            <Image
              src={AppStore}
              alt="App store"
              height={16}
              width={24}
            ></Image>{" "}
            App Store
          </button>
        </div>

        {/* hero Img */}
        <div>
          <Image
            src={BannerImg}
            alt="Hero Image"
            width={600}
            height={400}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
