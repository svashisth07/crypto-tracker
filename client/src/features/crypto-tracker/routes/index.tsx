import { CryptoCurrencyTable } from "../components/crypto-currency-table";
import { CurrencySelector } from "../components/currency-selector";
import { SearchBar } from "../components/search-bar";
import { useTopCryptocurrencies } from "../hooks/useCryptoData";
import { useCryptoTrackerStore } from "../store";

export const CryptoTrackerRoute = () => {
  const {
    recentSearches,
    selectedCurrency,
    addRecentSearch,
    setSelectedCurrency,
  } = useCryptoTrackerStore();

  const { data = [], isLoading, error } = useTopCryptocurrencies({
    currency: selectedCurrency
  });
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Crypto Tracker</h1>
        <CurrencySelector
          currency={selectedCurrency}
          setCurrency={setSelectedCurrency}
        />
      </header>
      <main className="flex flex-col flex-1">
        <section className="flex p-2 pt-4">
          <SearchBar
            coins={data}
            recentSearches={recentSearches}
            addRecentSearch={addRecentSearch}
          />
        </section>
        <section className="flex flex-1 p-2">
          <CryptoCurrencyTable
            currency={selectedCurrency}
            cryptos={data}
            isLoading={isLoading}
            error={error}
          />
        </section>
      </main>
    </div>
  );
};
