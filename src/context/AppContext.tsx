"use client";

import { IApp } from "@/types/app.type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextProps {
  isClick: boolean;
  setIsClick: Dispatch<SetStateAction<boolean>>;
  cart: IApp[];
  setCart: Dispatch<SetStateAction<IApp[]>>;
}

export const AppContext = createContext<ContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isClick, setIsClick] = useState(false);
  const [cart, setCart] = useState<IApp[]>([]);

  return (
    <AppContext.Provider
      value={{
        isClick,
        setIsClick,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
};

export default AppProvider;
