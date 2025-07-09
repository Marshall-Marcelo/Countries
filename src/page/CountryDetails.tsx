import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
// currency {
//      code: string,
// name: string,
// symbol: string
// },

interface CountryDetails {
  currencies: Currency[];
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState<CountryDetails>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`,
        { method: "GET" }
      );

      if (!res.ok) {
        console.log("Not okay fetch");
        return;
      }

      const data = await res.json();
      console.log(data);
      setCountryDetails(data);
    };
    fetchData();
  }, [countryName]);

  return (
    <div className="flex flex-col gap-10">
      <Button></Button>
      <div className="flex flex-row justify-between">
        <img src="" alt="" />
        <p>{countryName}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
