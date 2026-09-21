import AppCard from "@/components/shared/AppCard";
import getData from "@/lib/getData";
import { IApp } from "@/types/app.type";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hero App | All Apps",
  description: "This is a hero app website where we can installs app",
};


const AllAppsPage = async () => {
  const data = await getData();
  return (
    <section className="mt-14 bg-gray/10 pb-14">
      <div className="container mx-auto px-4 lg:px-0 mt-20 space-y-10">
        {/* heading */}
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-5xl text-dark">Our All Applications</h1>
          <p className="text-gray text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* All app render */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((app: IApp) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllAppsPage;
