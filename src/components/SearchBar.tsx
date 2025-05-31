import React from "react";

interface Props {
  query: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => {
  return (
    <input
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
