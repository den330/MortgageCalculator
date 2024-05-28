import Slider from "./Slider";
import { useCalculatorContext } from "./CalculatorContext";
import "./App.css";

function App() {
  const { mortgageInfo } = useCalculatorContext();
  function getLoanAmount() {
    return mortgageInfo.purchasePrice - mortgageInfo.downPayment;
  }

  function getMonthlyPayment() {
    const loanAmount = getLoanAmount();
    const interestRate = mortgageInfo.interestRate / 100;
    const repaymentTime = mortgageInfo.repaymentTime;
    const monthlyRate = interestRate / 12;
    const numberOfPayments = repaymentTime * 12;
    if (interestRate === 0) {
      return loanAmount / numberOfPayments;
    }
    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  }
  return (
    <div className="root">
      <div className="calculatorContainer">
        <Slider
          value={0}
          name="purchasePrice"
          min={0}
          max={1000000}
          displayName="Purchase Price"
          unitSymbol="$"
        />
        <Slider
          value={0}
          displayName="Down Payment"
          min={0}
          max={1000000}
          name="downPayment"
          unitSymbol="$"
        />
        <Slider
          value={0}
          displayName="Repayment Time"
          min={0}
          max={30}
          unitSymbol="years"
          name="repaymentTime"
        />
        <Slider
          value={0}
          displayName="Interest Rate"
          name="interestRate"
          min={0}
          max={10}
          unitSymbol={"%"}
        />
        <div className="result">
          <p>Loan Amount</p>
          <p>{getLoanAmount()}</p>
        </div>
        <div className="result">
          <p>Estimated Payment per Month</p>
          <p>{getMonthlyPayment()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
