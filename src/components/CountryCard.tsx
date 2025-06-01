import React, { useEffect, useState } from "react";
import Loader from "./Loader.tsx";
import type { Country } from "../types/country.ts";

interface Props {
  country: Country;
  delay: number
}

const CountryCard: React.FC<Props> = ({ country, delay }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!loaded) {
    return (
        <Loader />
    );
  }

  return (
    <div className="country-card" tabIndex={0}>
      <img
        src={country.flags.png}
        // alt={country.name.common}
        className="country-flag"
        loading="lazy"
      />
      <h3 className="country-name">{country.name.common}</h3>
      <p className="country-population">
        Population: {country.population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryCard;
