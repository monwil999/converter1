import React, { useState, useEffect } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer); // Sprzątanie po zakończeniu
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      Pola wymagane oznaczone są gwiazdką*.
      <fieldset className="form__fieldset">
      <p>
      Dzisiaj jest:{" "}
          {currentDate.toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}{" "}
          {currentDate.toLocaleTimeString()}
        </p>
        <legend className="form__legend">Kantor Walutowy</legend>
        <p>
          <label>
            <span className="form__labelText"> Kwota w PLN* </span>
          </label>
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
          <label>
            <span className="form__labelText"> Wybierz walutę </span>
          </label>
          <select
            className="form_field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </select>
        </p>
        <p>
          <button className="form__button" type="submit">
            Przelicz
          </button>
        </p>
        <p className="form__result">Otrzymasz:</p>
        <Result result={result} />
      </fieldset>
    </form>
  );
}

export default Form;
