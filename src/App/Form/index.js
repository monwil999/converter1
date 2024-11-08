import React, { useState, useEffect } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { FormLabel, FormField, FormButton, FormFieldset, FormResult, FormLegend } from "./styled";
import { ClockStyle } from "../Clock/styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };
  const formatDate = (date) =>
  date.toLocaleString("pl-PL", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });
  return (
    <form className="form" onSubmit={onSubmit}>
      Pola wymagane oznaczone są gwiazdką*.
      <FormFieldset>
      <ClockStyle>
          Dzisiaj jest: {formatDate(currentDate)}
        </ClockStyle>
        <FormLegend>Kantor Walutowy</FormLegend>
        <p>
          <FormLabel> Kwota w PLN* </FormLabel>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form_field"
            type="number"
            name="amount"
            min="1"
            step="any"
            required
          />
        </p>
        <p>
          <FormLabel> Wybierz walutę </FormLabel>
          <FormField
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </FormField>
        </p>
        <p>
          <FormButton>Przelicz</FormButton>
        </p>
        <FormResult>
          Otrzymasz:
          <Result result={result} />
        </FormResult>
      </FormFieldset>
    </form>
  );
};

export default Form;
