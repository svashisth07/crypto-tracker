import React, { useState } from 'react';;
import { useStore } from '@/stores';
import { useTop50Cryptocurrencies } from '@/hooks/useCryptoData';

const CryptoSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedCurrency, addRecentSearch } = useStore();
  const { data: cryptocurrencies, isLoading } = useTop50Cryptocurrencies(selectedCurrency);
  const handleSelect = (cryptoId: string) => {
    addRecentSearch(cryptoId);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search Cryptocurrency"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {cryptocurrencies
          ?.filter((crypto) =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((crypto) => (
            <li key={crypto.id} onClick={() => handleSelect(crypto.id)}>
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CryptoSearch;