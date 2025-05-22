import React, { useState } from "react";
import styles from "../styles/Calculator.module.css";

const ops = ["+", "-", "*", "/", "^"];

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleClick = (val: string) => setInput(prev => prev + val);

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEval = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input.replace("^", "**")); // Simple power support
      setResult(evalResult.toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div data-testid="input">{input}</div>
        <div className={styles.result}>{result}</div>
      </div>
      <div className={styles.keypad}>
        {[..."7894561230"].map(n =>
          <button key={n} onClick={() => handleClick(n)}>{n}</button>
        )}
        {ops.map(op =>
          <button key={op} onClick={() => handleClick(op)}>{op}</button>
        )}
        <button onClick={handleClear}>C</button>
        <button onClick={handleEval}>=</button>
      </div>
    </div>
  );
};

export default Calculator;