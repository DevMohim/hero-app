import getData from "@/lib/getData";
import { IApp } from "@/types/app.type";
import React from "react";
import AppCard from "../shared/AppCard";
import Link from "next/link";
import { Metadata } from "next";


const Apps = async () => {
  const data = await getData();

  const trendingApps = data.filter((app: IApp) => app.ratingAvg >= 4.4);
  return (
    <section className="py-20 bg-gray/10">
      <div className="container mx-auto space-y-10 px-4 lg:px-0">
        {/* heading Area */}
        <div className="space-y-4 text-center">
          <h1 className="text-dark font-bold text-5xl">Trending Apps</h1>
          <p className="text-gray text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Trending Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {trendingApps.map((app: IApp) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link href="/apps">
            <button className="flex items-center gap-2.5 bg-linear-to-br from-primary to-secondary px-4 md:px-10 lg:px-20 py-2  rounded-sm font-semibold text-white cursor-pointer">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Apps;
