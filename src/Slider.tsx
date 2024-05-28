import "./Slider.css";
import { useCalculatorContext } from "./CalculatorContext";

interface SliderProps {
  value: number;
  name: string;
  displayName: string;
  min: number;
  max: number;
  unitSymbol?: string;
}

export default function Slider(prop: SliderProps) {
  const { mortgageInfo, setMorgageInfo } = useCalculatorContext();
  const relevantValue = mortgageInfo[prop.name];
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMorgageInfo((prevState) => {
      return {
        ...prevState,
        [prop.name]: e.target.valueAsNumber,
      };
    });
  }
  return (
    <div className="SliderContainer">
      <p>
        {prop.displayName}: {relevantValue}
        {prop.unitSymbol}
      </p>
      <input
        type="range"
        min={prop.min}
        max={prop.max}
        value={relevantValue}
        onChange={handleChange}
      />
    </div>
  );
}
