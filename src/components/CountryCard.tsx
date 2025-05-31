import React, { useEffect, useState } from "react";
import Loader from "./Loader.tsx";
import type { Country } from "../types/country.ts";

interface Props {
  country: Country;
}

const CountryCard: React.FC<Props> = ({ country }) => {
  const [loaded, setLoaded] = useState(false);

  // Simulate 1-second artificial delay per requirements
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="country-card loading">
        <Loader />
      </div>
    );
  }

  return (
    <div className="country-card" tabIndex={0}>
      <img
        src={country.flags.png}
        alt={country.flags.alt || `${country.name.common} flag`}
        className="country-flag"
      />
      <h3 className="country-name">{country.name.common}</h3>
      <p className="country-population">
        Population: {country.population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryCard;
