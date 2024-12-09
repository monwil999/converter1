import React, { useState } from "react";
import { Result } from "./Result";
import { FormLabel, FormField, FormButton, FormFieldset, FormResult, FormLegend } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState(""); 
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState(null); 
  const { state, rates, error, date } = useRatesData();
  console.log("Date in Form component:", date);
  const calculateResult = (currency, amount) => {
    if (!rates || !rates[currency]) {
      console.error("Brak kursu dla wybranej waluty", currency);
      return; //
    }

    const rate = rates[currency]?.value;

    if (!rate) {
      console.error("Brak wartości kursu dla waluty:", currency);
      return;
    }

    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount)) {
      alert("Proszę podać prawidłową kwotę");
      return;
    }

    setResult({
      sourceAmount: parsedAmount,
      targetAmount: parsedAmount * rate,
      currency,
    });
  };

  const formatDate = (date) => {
    if (!date) return "Brak daty";
    return new Date(date).toLocaleString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });    
  };
  console.log("Date przekazana do komponentu Form:", date);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount || !currency) {
      alert("Proszę uzupełnić wszystkie pola.");
      return;
    }

    calculateResult(currency, amount);
  };

  if (state === "loading") {
    return <p>Ładowanie danych kursów...</p>;
  }

  if (state === "error") {
    return <p>Błąd: {error || "Nieznany błąd"}</p>;
  }

  if (!rates) {
    return <p>Brak danych kursów.</p>;
  }

  return (
    <form onSubmit={onSubmit}>
      <FormFieldset>
        <FormLegend>Kantor Walutowy</FormLegend>
        <p>Data kursu: {formatDate(date)} </p>
        <p>
          <FormLabel>Kwota w PLN*</FormLabel>
          <FormField
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            type="number"
            min="1"
            step="any"
            required
          />
        </p>
        <p>
          <FormLabel>Wybierz walutę</FormLabel>
          <FormField
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
            required
          >
            <option value="">Wybierz walutę</option>
            {Object.keys(rates).map((rateKey) => (
              <option key={rateKey} value={rateKey}>
                {rateKey}
              </option>
            ))}
          </FormField>
        </p>
        <p>
          <FormButton disabled={state === "loading" || !amount || !currency}>Przelicz</FormButton>
        </p>
        <FormResult>
          {result && <Result result={result} />}
        </FormResult>
      </FormFieldset>
    </form>
  );
};

export default Form;