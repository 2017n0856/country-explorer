import React from "react";
import CountryCard from "./CountryCard.tsx";
import type { Country } from "../types/country.ts";

interface Props {
  countries: Country[];
  loading: boolean;
}

const  CountryList: React.FC<Props> = ({ countries, loading }) => {
  if (countries.length === 0 && !loading) {
    return <p className="no-results">No countries found.</p>;
  }

  return (
    <div className="country-list">
      {countries.map((country, index) => (
        <CountryCard 
        key={country.name.common} 
        country={country} 
        delay={(index + 1) * 1000}
      />
      ))}
    </div>
  );
};

export default CountryList;
