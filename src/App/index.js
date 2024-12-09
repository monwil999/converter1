import React, { useState } from "react";
import Form from "./Form";
import Clock from "./Clock";

const App = () => {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount, rates) => {
    const rate = rates[currency] || 0;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <div className="app">
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </div>
  );
};

export default App;

