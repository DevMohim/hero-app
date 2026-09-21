"use client";

import { useAppContext } from "@/context/AppContext";
import getData from "@/lib/getData";
import { IApp } from "@/types/app.type";
import { Metadata } from "next";
import Image from "next/image";
import { ChangeEvent, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";



type SortOption = "size" | "rating";

const InstallationPage = () => {
  const { cart, setCart } = useAppContext();
  const [sortBy, setSortBy] = useState<SortOption>("size");

  const sortedApps = useMemo(() => {
    return [...cart].sort((firstApp, secondApp) => {
      if (sortBy === "size") {
        return secondApp.size - firstApp.size;
      }

      return secondApp.ratingAvg - firstApp.ratingAvg;
    });
  }, [cart, sortBy]);

  const handleUninstall = (id: number) => {
    setCart((previousCart: IApp[]) =>
      previousCart.filter((app) => app.id !== id),
    );
  };

  return (
    <section className="mt-14 min-h-screen bg-gray/10 py-14">
      <div className="container mx-auto mt-20 space-y-10 px-4 lg:px-0">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold text-dark">Your Installed Apps</h1>
          <p className="text-xl text-gray">
            Explore all trending apps on the market developed by us.
          </p>
        </div>

        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-dark">
              {cart.length} {cart.length === 1 ? "App" : "Apps"} Found
            </h2>

            <select
              value={sortBy}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                setSortBy(event.target.value as SortOption)
              }
              className="select select-bordered"
            >
              <option value="size">Sort By Size</option>
              <option value="rating">Sort By Rating</option>
            </select>
          </div>

          {cart.length === 0 ? (
            <div className="rounded-md bg-white py-16 text-center">
              <h3 className="text-2xl font-bold text-dark">
                No Apps Installed
              </h3>
              <p className="mt-2 text-gray">Install an app to see it here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {sortedApps.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between gap-4 rounded-md bg-white p-3"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={app.image}
                      alt={app.title}
                      height={56}
                      width={56}
                      className="rounded-md object-cover"
                    />

                    <div>
                      <h3 className="text-xl font-medium text-dark">
                        {app.title}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm font-medium">
                        <span className="flex items-center gap-1 text-green">
                          <GoDownload />
                          {app.downloads / 100}M
                        </span>

                        <span className="flex items-center gap-1 text-orange">
                          <FaStar />
                          {app.ratingAvg}
                        </span>

                        <span className="text-gray">{app.size} MB</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleUninstall(app.id)}
                    className="btn btn-success text-white"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstallationPage;
