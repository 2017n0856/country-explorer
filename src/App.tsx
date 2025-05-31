import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.tsx";
import CountryList from "./components/CountryList.tsx";
import { useDebounce } from "./hooks/useDebounce.tsx";
import type { Country } from "./types/country.ts";

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      const baseUrl = "https://restcountries.com/v3.1";
      const fields = "fields=name,flags,population";
      const url = debouncedSearch
        ? `${baseUrl}/name/${debouncedSearch}?${fields}`
        : `${baseUrl}/all?${fields}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          if (res.status === 404) {
            setCountries([]);
          } else {
            throw new Error("Failed to fetch countries");
          }
        } else {
          const data = await res.json();
          setCountries(data);
        }
      } catch (err) {
        setError("Error fetching countries. Please try again later.");
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [debouncedSearch]);

  return (
    <div className="app-container">
      <div>
      <h1>Country Explorer</h1>
      <SearchBar query={search} onChange={setSearch} />
      </div>
      {error && <p className="error-message">{error}</p>}
      {loading && !countries.length ? (
        <p>Loading countries...</p>
      ) : (
        <CountryList countries={countries} />
      )}
    </div>
  );
};

export default App;
