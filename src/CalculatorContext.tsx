import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext({});
export const useCalculatorContext = () => useContext(CalculatorContext);

class MortgageInfo {
  purchasePrice: number;
  downPayment: number;
  repaymentTime: number;
  interestRate: number;
  constructor(
    purchasePrice: number,
    downPayment: number,
    repaymentTime: number,
    interestRate: number
  ) {
    this.purchasePrice = purchasePrice;
    this.downPayment = downPayment;
    this.repaymentTime = repaymentTime;
    this.interestRate = interestRate;
  }
}

export function CalculatorContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mortgageInfo, setMorgageInfo] = useState(new MortgageInfo(0, 0, 0, 0));
  return (
    <CalculatorContext.Provider value={{ mortgageInfo, setMorgageInfo }}>
      {children}
    </CalculatorContext.Provider>
  );
}
