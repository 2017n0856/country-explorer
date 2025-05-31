import React from "react";
import CountryCard from "./CountryCard.tsx";
import type { Country } from "../types/country.ts";

interface Props {
  countries: Country[];
}

const CountryList: React.FC<Props> = ({ countries }) => {
  if (countries.length === 0) {
    return <p className="no-results">No countries found.</p>;
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
