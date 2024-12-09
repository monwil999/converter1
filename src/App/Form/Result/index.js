import React from "react";

export const Result = ({ result }) => {
  if (!result || result.sourceAmount === undefined || result.targetAmount === undefined) {
    return <p>Brak danych do wyświetlenia wyników.</p>;
  }

  return (
    <p className="result">
      {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
      <strong>
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
      </strong>
    </p>
  );
};
