"use client";

import { useAppContext } from "@/context/AppContext";
import { IApp } from "@/types/app.type";

import { toast } from "react-toastify";

const InstallButton = ({ app }: { app: IApp }) => {
  const { cart, setCart } = useAppContext();

  const isInstalled = cart.some((cartApp: IApp) => cartApp.id === app.id);

  const handleInstallClick = () => {
    if (isInstalled) {
      toast.info(`${app.title} is already installed`);
      return;
    }

    setCart((previousCart: IApp[]) => [...previousCart, app]);
    toast.success(`${app.title} installed successfully`);
  };

  return (
    <button
      type="button"
      onClick={handleInstallClick}
      disabled={isInstalled}
      className="mt-4 cursor-pointer rounded-sm bg-emerald-500 px-3 py-3 text-xs font-medium text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      {isInstalled ? "Installed" : `Install Now (${app.size}MB)`}
    </button>
  );
};

export default InstallButton;
