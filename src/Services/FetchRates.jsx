import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading/Loading";

const FetchRates = ({ ratesFetched }) => {
  const ratesUrl = "https://api.nbp.pl/api/exchangerates/tables/c";
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
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

      ratesFetched(ratesObject);
    } catch (error) {
      alert("Problem z pobieraniem danych spróbuj ponownie!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  getRates;
  //   }, [ratesFetched]);

  //   return <>{loading && <Loading />}</>;
};

export default FetchRates;
