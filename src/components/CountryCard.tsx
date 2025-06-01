import React, { useEffect, useState } from "react";
import Loader from "./Loader.tsx";
import type { Country } from "../types/country.ts";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.05);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;
  max-width: 320px;
  width: 100%;
  min-height: 200px;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px rgba(8, 67, 126, 0.4);
    transform: scale(1.03);
    outline: none;
  }

`;

const Flag = styled.img`
  width: 100%;
  height: auto;
  max-height: 120px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #d7d7d7;
`;

const CountryName = styled.h3`
  font-size: 20px;
  margin: 0 0 8px 0;
  text-align: center;
`;

const Population = styled.p`
  font-size: 16px;
  color: #555;
  margin: 0;
`;

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
    <Card>
      <Flag
        src={country.flags.png}
        // alt={country.name.common}
        className="country-flag"
        loading="lazy"
      />
      <CountryName className="country-name">{country.name.common}</CountryName>
      <Population className="country-population">
        Population: {country.population.toLocaleString()}
      </Population>
    </Card>
  );
};

export default CountryCard;
