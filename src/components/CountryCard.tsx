import React from "react";

interface CountryCardProps {
  country: string;
  imagePath: string;
  population: string;
  region: string;
  capital: string;
  onClick: () => void;
}

const CountryCard = ({
  country,
  imagePath,
  population,
  region,
  capital,
  onClick,
}: CountryCardProps) => {
  return (
    <div className="flex flex-col gap-4" onClick={onClick}>
      <img className="w-full max-w-[200px]" src={imagePath} alt="" />
      <div className="flex flex-col gap-4">
        <h1>{country}</h1>
        <div className="flex flex-col gap-2">
          <span>Population: {population}</span>
          <span>Region: {region}</span>
          <span>Capital: {capital}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
