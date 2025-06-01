import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 32px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1.5px solid #ccc;
  border-radius: 6px;

  &:focus {
    border-color: #1976d2;
    outline: none;
  }

  @media (max-width: 480px) {
    max-width: 320px;
  }
`;

interface Props {
  query: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => {
  return (
    <StyledInput
      type="search"
      placeholder="Search countries..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
      aria-label="Search countries"
      autoFocus
    />
  );
};

export default SearchBar;
