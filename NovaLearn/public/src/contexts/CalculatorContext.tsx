import React, { createContext, useState, ReactNode } from "react";

type CalculatorContextType = {
  memory: number;
  setMemory: (n: number) => void;
};

export const CalculatorContext = createContext<CalculatorContextType>({
  memory: 0,
  setMemory: () => {},
});

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [memory, setMemory] = useState(0);
  return (
    <CalculatorContext.Provider value={{ memory, setMemory }}>
      {children}
    </CalculatorContext.Provider>
  );
};