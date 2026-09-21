"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  isClick: boolean;
  setIsClick: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<ContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const contextObj: ContextProps = {
    isClick,
    setIsClick,
  };

  return (
    <AppContext.Provider value={contextObj}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
