import React, { useState } from "react";
import Loading from "../Components/Loading/Loading";
import Form from "../Components/Form/Form";

const CurrencyConverter = () => {
  const [selectedCode, setSelectedCode] = useState("GBP");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const ratesUrl = "https://api.nbp.pl/api/exchangerates/tables/c";

  const getRates = async () => {
    setLoading(true);
    try {
      const res = await fetch(ratesUrl);
      const data = await res.json();
      const rateList = data[0]?.rates;

      const filteredRates = rateList.filter((rate) =>
        ["EUR", "USD", "CHF", "GBP"].includes(rate.code)
      );

      const ratesObject = {};
      filteredRates.forEach((rate) => {
        ratesObject[rate.code] = rate;
      });

      calculateResult(ratesObject);
    } catch (error) {
      alert("Problem z pobieraniem danych spróbuj ponownie!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const calculateResult = (ratesObject) => {
    const selectedRate = ratesObject[selectedCode];
    const parsedInputValue = parseFloat(inputValue);
    console.log(selectedRate);
    if (selectedRate && !isNaN(parsedInputValue) && parsedInputValue > 0) {
      const convertedValue = parsedInputValue * selectedRate.bid;
      setResult(`TO: ${convertedValue.toFixed(2)} PLN`);
    } else {
      setResult("Coś poszło nie tak.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRates();
  };

  return (
    <>
      <Form
        selectedCode={selectedCode}
        setSelectedCode={setSelectedCode}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        result={result}
      />
      {loading && <Loading />}
    </>
  );
};

export default CurrencyConverter;
