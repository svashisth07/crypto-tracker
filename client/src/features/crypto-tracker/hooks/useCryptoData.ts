import { coinGeckoApi } from "@/features/crypto-tracker/api/coinGecko";
import { useQuery } from "@tanstack/react-query";
import { SupportedCurrency } from "@/types";

interface UseTopCryptocurrenciesPayload {
  currency: SupportedCurrency;
  searchText?: string;
  perPage?: number;
}

export const useTopCryptocurrencies = ({ currency, searchText, perPage = 50 }: UseTopCryptocurrenciesPayload) => {
  return useQuery({
    queryKey: ["top-cryptocurrencies", currency, searchText],
    queryFn: () => coinGeckoApi.getTopCryptocurrencies(currency, searchText, perPage),
  });
};
