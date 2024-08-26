import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="app">
      <Form result={result} calculateResult={calculateResult} />
    </div>
  );
}
export default App;
