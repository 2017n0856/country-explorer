import React from "react";
import CountryCard from "./CountryCard.tsx";
import type { Country } from "../types/country.ts";
import styled from "styled-components";

const StyledCountryList = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 32px;
  justify-content: center;
  justify-items: center;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface Props {
  countries: Country[];
  loading: boolean;
}

const  CountryList: React.FC<Props> = ({ countries, loading }) => {
  if (countries.length === 0 && !loading) {
    return <p className="no-results">No countries found.</p>;
  }

  return (
    <StyledCountryList>
      {countries.map((country, index) => (
        <CountryCard 
        key={country.name.common} 
        country={country} 
        delay={(index + 1) * 1000}
      />
      ))}
    </StyledCountryList>
  );
};

export default CountryList;
