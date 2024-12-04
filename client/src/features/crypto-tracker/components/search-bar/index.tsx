import React, { useState, useRef } from "react";
import { Cryptocurrency } from "@/types";

interface SearchBarProps {
  coins: Cryptocurrency[];
  recentSearches: Cryptocurrency[];
  addRecentSearch: (coin: Cryptocurrency) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  coins,
  recentSearches,
  addRecentSearch,
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (suggestion: Cryptocurrency) => {
    inputRef.current?.blur();
    addRecentSearch(suggestion);
    setQuery("");
    // TODO: navigate to detail page
  };

  const filteredSuggestions = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  const filteredRecentSearches = recentSearches.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow click
          placeholder="Search for a cryptocurrency"
          className="w-[300px] border p-2 w-full rounded-md"
        />
      </div>
      {isFocused && (filteredRecentSearches.length > 0 || filteredSuggestions.length > 0) && (
        <div className="absolute w-[500px] left-0 right-0 bg-white border mt-1 max-h-40 overflow-y-auto z-10 flex">
          <div className="w-1/2 border-r">
            <h4 className="p-2 font-semibold">Suggestions</h4>
            <ul>
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(suggestion)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <h4 className="p-2 font-semibold">Recent Searches</h4>
            <ul>
              {filteredRecentSearches.map((coin, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(coin)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {coin.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
